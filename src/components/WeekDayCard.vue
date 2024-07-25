<script setup lang="ts">

const props = defineProps<{ weekDay: string }>();

</script>

<template>
    <div class="card">{{ props.weekDay }}</div>
</template>

<style scoped>
.card {
    width: 250px;
    height: 60px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    font-style: italic;
    font-weight: bold;
    border: 1px solid greenyellow;
    border-radius: 10px;
    background-color: #111;
    color: greenyellow;
    box-shadow: 0 4px 8px rgba(173, 255, 47, 0.8);
    text-transform: capitalize;
}
</style>