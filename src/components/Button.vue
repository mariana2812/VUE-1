<script setup lang="ts">
interface ButtonProps {
  text: string;
}

const props = defineProps<ButtonProps>();
</script>

<template>
  <button type="button">{{ props.text }}</button>
</template>

<style scoped>
button {
  background: var(--azul);
  color: var(--branco);
  border: 3px solid var(--amarelo);
  border-radius: 10px;
  padding: 12px 25px;
  font-size: 15px;
  font-weight: bold;
  transition: 0.2s;
}

button:hover:not(:disabled) {
  background: var(--vermelho);
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 600px) {
  button {
    padding: 10px 15px;
  }
}
</style>
