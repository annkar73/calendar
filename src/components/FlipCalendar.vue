<script setup lang="ts">
import { ref } from 'vue';
import WeekDayCard from './WeekDayCard.vue';
import DateCard from './DateCard.vue';
import MonthCard from './MonthCard.vue';

const now = new Date();
const weekDay = ref(now.toLocaleString('sv-SE', { weekday: 'long'}));
const date = ref(now.getDate().toString().padStart(2, '0'));
const month = ref(now.toLocaleString('sv-SE', { month: 'long' }));
const dateDigits = ref([date.value[0], date.value[1]]);

</script>

<template>
    <div class="flip-calendar">
        <WeekDayCard :weekDay="weekDay" />
        <DateCard :digit="dateDigits[0]" />
        <DateCard :digit="dateDigits[1]" />
        <MonthCard :month="month" />
    </div>
</template>

<style scoped>
.flip-calendar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
</style>