<script setup lang="ts">

const props = defineProps<{ weekDay: string }>();

</script>

<template>
    <div class="card">{{ props.weekDay }}</div>
</template>

<style scoped>
.card {
    width: 150px;
    height: 60px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    font-style: italic;
    font-weight: bold;
    border-radius: 10px;
    background-color: turquoise;
    color: #333;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-transform: capitalize;
}
</style>