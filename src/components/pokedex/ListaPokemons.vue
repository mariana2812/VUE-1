<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import type { iListaPokemons, iPokemon } from "../../schemas/pokemon.interface";
import ItemPokemon from "./ItemPokemon.vue";
import Button from "../Button.vue";

const pokemons = ref([] as iPokemon[]);
const paginaAtual = ref(1);
const carregando = ref(false);
const erro = ref("");
const temProxima = ref(false);
const quantidadePokemons = 20;

const carregarPokemons = async (pagina: number) => {
  carregando.value = true;
  erro.value = "";
  try {
    const service = axios.create({
      baseURL: "https://pokeapi.co/api/v2/pokemon",
    });

    const { data } = await service.get<iListaPokemons>("", {
      params: {
        offset: (pagina - 1) * quantidadePokemons,
        limit: quantidadePokemons,
      },
    });

    const lista = [] as iPokemon[];

    for (const item of data.results) {
      const resposta = await service.get<iPokemon>(item.url);
      lista.push(resposta.data);
    }

    pokemons.value = lista;
    paginaAtual.value = pagina;
    temProxima.value = data.next !== null;
  } catch {
    erro.value = "Não foi possível carregar os Pokémon. Tente novamente.";
  } finally {
    carregando.value = false;
  }
};

onMounted(() => carregarPokemons(1));
</script>

<template>
  <section :aria-busy="carregando" aria-label="Lista de Pokémon">
    <p v-if="carregando" class="mensagem" role="status">
      Carregando Pokémon...
    </p>
    <div v-else-if="erro" class="mensagem" role="alert">
      <p>{{ erro }}</p>
      <Button
        :text="'Tentar novamente'"
        @click="carregarPokemons(paginaAtual)"
      />
    </div>
    <ul v-else class="containerCards">
      <ItemPokemon v-for="item in pokemons" :key="item.id" :pokemon="item" />
    </ul>
    <div class="paginacao">
      <Button
        :text="'Anterior'"
        :disabled="paginaAtual === 1 || carregando"
        @click="carregarPokemons(paginaAtual - 1)"
      />
      <span>Página {{ paginaAtual }}</span>
      <Button
        :text="'Próxima'"
        :disabled="!temProxima || carregando"
        @click="carregarPokemons(paginaAtual + 1)"
      />
    </div>
  </section>
</template>

<style scoped>
.containerCards {
  max-width: 1200px;
  margin: 30px auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.paginacao {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px 10px 40px;
}

.paginacao span {
  font-weight: bold;
}
</style>
