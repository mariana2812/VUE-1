<script setup lang="ts">
import Header from '../components/Header.vue'
import ListaPokemons from '../components/pokedex/ListaPokemons.vue'
</script>

<template>
    <Header />
    <main>
        <h1 class="titulo">Pokédex</h1>
        <ListaPokemons />
    </main>
</template>

<style scoped>
.titulo {
    text-align: center;
    color: var(--azul-escuro);
    margin-top: 45px;
}
</style>
