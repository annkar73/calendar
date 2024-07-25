<script setup lang="ts">
const props = defineProps<{ digit: string }>();
</script>

<template>
    <div class="card">{{ props.digit }}</div>
</template>

<style scoped>
.card {
  width: 70px;
  height: 120px;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  font-weight: bolder;
  background-color: hotpink;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  text-transform: none;
}
</style>