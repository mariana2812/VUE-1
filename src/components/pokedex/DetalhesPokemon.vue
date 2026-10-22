<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import type { iPokemon } from "../../schemas/pokemon.interface";
import Button from "../Button.vue";
import CaracteristicaPokemon from "./CaracteristicaPokemon.vue";

interface DetalhesPokemonProps {
  id: string;
}

const props = defineProps<DetalhesPokemonProps>();
const pokemon = ref<iPokemon | null>(null);
const erro = ref("");

const nomesStatus = [
  "HP",
  "Ataque",
  "Defesa",
  "Ataque Especial",
  "Defesa Especial",
  "Velocidade",
];

const carregarPokemon = async () => {
  pokemon.value = null;
  erro.value = "";

  try {
    const service = axios.create({
      baseURL: "https://pokeapi.co/api/v2/pokemon",
    });
    const { data } = await service.get<iPokemon>("/" + props.id);

    pokemon.value = data;
  } catch {
    erro.value = "Não foi possível carregar o Pokémon.";
  }
};

onMounted(carregarPokemon);
</script>

<template>
  <p v-if="!pokemon && !erro" class="mensagem" role="status">
    Carregando Pokémon...
  </p>

  <div v-else-if="erro" class="mensagem" role="alert">
    <p>{{ erro }}</p>
    <Button :text="'Tentar novamente'" @click="carregarPokemon" />
  </div>

  <article v-else-if="pokemon" class="pokemonDetalhes">
    <img
      v-if="pokemon.sprites.front_default"
      :src="pokemon.sprites.front_default"
      :alt="pokemon.name"
    />
    <h1>{{ pokemon.name }}</h1>
    <div class="caracteristicas">
      <CaracteristicaPokemon
        titulo="Altura"
        :valor="pokemon.height / 10 + ' m'"
      />
      <CaracteristicaPokemon
        titulo="Peso"
        :valor="pokemon.weight / 10 + ' kg'"
      />
      <CaracteristicaPokemon
        titulo="Tipo"
        :valor="pokemon.types.map((item) => item.type.name).join(', ')"
      />
      <CaracteristicaPokemon
        v-for="(item, index) in pokemon.stats"
        :key="item.stat.name"
        :titulo="nomesStatus[index] || item.stat.name"
        :valor="item.base_stat"
      />
    </div>
  </article>
</template>

<style scoped>
.pokemonDetalhes {
  max-width: 850px;
  margin: 35px auto;
  padding: 20px;
  background: var(--branco);
  border: 4px solid var(--azul);
  border-radius: 25px;
  text-align: center;
}

img {
  width: 200px;
  max-width: 100%;
  image-rendering: pixelated;
}

h1 {
  margin-bottom: 25px;
  color: var(--azul-escuro);
  text-transform: capitalize;
}

.caracteristicas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
  gap: 15px;
}
</style>
