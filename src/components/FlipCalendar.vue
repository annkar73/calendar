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
        <div class="day">
        <WeekDayCard :weekDay="weekDay" />
        </div>
        <div class="date">
        <DateCard :digit="dateDigits[0]" />
        <DateCard :digit="dateDigits[1]" />
        </div>
        <div class="month">
        <MonthCard :month="month" />
        </div>
    </div>
</template>

<style scoped>
.flip-calendar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: black;
  border-radius: 15px;
}

.date {
    display: flex;
    flex-direction: row;
}

</style>