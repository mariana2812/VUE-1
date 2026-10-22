<script setup lang="ts">
import { useRoute } from 'vue-router'
import Header from '../components/Header.vue'
import DetalhesPokemon from '../components/pokedex/DetalhesPokemon.vue'

const route = useRoute()
</script>

<template>
    <Header />

    <main>
        <DetalhesPokemon :id="String(route.params.id)" />

        <router-link :to="{ name: 'Home' }" class="voltar">
            Voltar
        </router-link>
    </main>
</template>

<style scoped>
.voltar {
    display: block;
    width: fit-content;
    margin: 20px auto 40px;
    padding: 12px 30px;
    background: var(--azul);
    color: var(--branco);
    border: 3px solid var(--amarelo);
    border-radius: 10px;
    text-decoration: none;
    font-weight: bold;
}

.voltar:hover {
    background: var(--vermelho);
}
</style>
