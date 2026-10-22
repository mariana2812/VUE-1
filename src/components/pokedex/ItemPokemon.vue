<script setup lang="ts">
import type { iPokemon } from "../../schemas/pokemon.interface";

interface ItemPokemonProps {
  pokemon: iPokemon;
}

const props = defineProps<ItemPokemonProps>();
</script>

<template>
  <li>
    <router-link
      :to="{ name: 'Pokemon', params: { id: props.pokemon.id } }"
      class="card"
      :class="props.pokemon.types[0]?.type.name"
    >
      <img
        v-if="props.pokemon.sprites.front_default"
        :src="props.pokemon.sprites.front_default"
        :alt="props.pokemon.name"
      />
      <span v-else>Imagem indisponível</span>
      <h2>{{ props.pokemon.name }}</h2>
    </router-link>
  </li>
</template>

<style scoped>
.card {
  width: 230px;
  min-height: 270px;
  justify-content: center;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--branco);
  border: 3px solid var(--azul);
  border-radius: 18px;
  text-decoration: none;
}

.card:hover {
  border-color: var(--amarelo);
}

img {
  width: 175px;
  height: 175px;
  image-rendering: pixelated;
}

h2 {
  color: var(--azul-escuro);
  font-size: 22px;
  text-transform: capitalize;
}

.normal {
  background: var(--tipo-normal);
}
.fire {
  background: var(--tipo-fire);
}
.water {
  background: var(--tipo-water);
}
.electric {
  background: var(--tipo-electric);
}
.grass {
  background: var(--tipo-grass);
}
.ice {
  background: var(--tipo-ice);
}
.fighting {
  background: var(--tipo-fighting);
}
.poison {
  background: var(--tipo-poison);
}
.ground {
  background: var(--tipo-ground);
}
.flying {
  background: var(--tipo-flying);
}
.psychic {
  background: var(--tipo-psychic);
}
.bug {
  background: var(--tipo-bug);
}
.rock {
  background: var(--tipo-rock);
}
.ghost {
  background: var(--tipo-ghost);
}
.dragon {
  background: var(--tipo-dragon);
}
.dark {
  background: var(--tipo-dark);
}
.steel {
  background: var(--tipo-steel);
}
.fairy {
  background: var(--tipo-fairy);
}

@media (max-width: 600px) {
  .card {
    width: 155px;
    min-height: 210px;
  }

  img {
    width: 125px;
    height: 125px;
  }

  h2 {
    font-size: 18px;
  }
}
</style>
