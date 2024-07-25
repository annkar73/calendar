<script setup lang="ts">
const props = defineProps<{ digit: string }>();
</script>

<template>
    <div class="card">{{ props.digit }}</div>
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
  background-color: bisque;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>