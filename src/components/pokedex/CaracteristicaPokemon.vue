<script setup lang="ts">
interface CaracteristicaPokemonProps {
    titulo: string
    valor: string | number
}

const props = defineProps<CaracteristicaPokemonProps>()
</script>

<template>
    <div class="caracteristica">
        <h3>{{ props.titulo }}</h3>
        <p>{{ props.valor }}</p>
    </div>
</template>

<style scoped>
.caracteristica {
    padding: 20px;
    background: var(--fundo);
    border: 2px solid var(--borda-caracteristica);
    border-radius: 14px;
    text-align: left;
}

h3 {
    color: var(--azul);
    margin-bottom: 8px;
}

p {
    font-size: 18px;
    font-weight: bold;
    text-transform: capitalize;
}
</style>
