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
    border-radius: 10px;
    background-color: turquoise;
    color: #333;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid #ddd;
    text-transform: uppercase;
}
</style>