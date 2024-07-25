<script setup lang="ts">

const props = defineProps<{ weekDay: string }>();

</script>

<template>
    <div class="card">{{ props.weekDay }}</div>
</template>

<style scoped>
.card {
    width: 60px;
    height: 100px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    border-radius: 10px;
    background-color: bisque;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>