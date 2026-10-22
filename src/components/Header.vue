<template>
  <header>
    <router-link :to="{ name: 'Home' }" aria-label="Ir para a home">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="Logo PokeAPI"
      />
    </router-link>
  </header>
</template>

<style scoped>
header {
  padding: 20px;
  background: var(--vermelho);
  border-bottom: 7px solid var(--azul);
  text-align: center;
}

img {
  width: 200px;
  max-width: 100%;
}
</style>
