<script setup lang="ts">
const props = defineProps<{ digit: string }>();
</script>

<template>
    <div class="card">{{ props.digit }}</div>
</template>

<style scoped>
.card {
  width: 45px;
  height: 60px;
  margin: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  background-color: hotpink;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  color: #333;
  text-transform: none;
}
</style>