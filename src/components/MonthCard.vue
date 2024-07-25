<script setup lang="ts">
const props = defineProps<{ month: string }>();
</script>

<template>
    <div class="card">{{ props.month }}</div>
</template>

<style scoped>
.card {
  width: 150px;
  height: 60px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
  background-color: lightgreen;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  text-transform: uppercase;
}
</style>