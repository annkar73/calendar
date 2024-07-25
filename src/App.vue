
<script setup lang="ts">
import FlipCalendar from './components/FlipCalendar.vue';
import ClockDisplay from './components/ClockDisplay.vue';
</script>


<template>
  <div id="app">
    <FlipCalendar />
    <ClockDisplay />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  text-align: center;
  margin-top: 60px;
}
</style>
