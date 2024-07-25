<script setup lang="ts">
const props = defineProps<{ digit: string }>();
</script>

<template>
    <div class="card">{{ props.digit }}</div>
</template>

<style scoped>
.card {
  width: 124px;
  height: 120px;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  font-weight: bolder;
  background-color: #111;
  border: 1px solid greenyellow;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(173, 255, 47, 0.8);
  color: greenyellow;
  text-transform: none;
}
</style>