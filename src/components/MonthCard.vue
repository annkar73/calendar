<script setup lang="ts">
const props = defineProps<{ month: string }>();
</script>

<template>
    <div class="card">{{ props.month }}</div>
</template>

<style scoped>
.card {
  width: 250px;
  height: 60px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
  background-color: #111;
  border: 1px solid greenyellow;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(173, 255, 47, 0.8);
  color: greenyellow;
  text-transform: uppercase;
}
</style>