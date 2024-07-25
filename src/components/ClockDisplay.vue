<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const hours = ref('00');
const minutes = ref('00');
const seconds = ref('00');

const hourDigits = ref([hours.value[0], hours.value[1]]);
const minuteDigits = ref([minutes.value[0], minutes.value[1]]);
const secondDigits = ref([seconds.value[0], seconds.value[1]]);

const updateTime = () => {
    const now = new Date();
    hours.value = now.getHours().toString().padStart(2, '0');
    minutes.value = now.getMinutes().toString().padStart(2, '0');
    seconds.value = now.getSeconds().toString().padStart(2, '0');

    hourDigits.value = [hours.value[0], hours.value[1]];
    minuteDigits.value = [minutes.value[0], minutes.value[1]];
    secondDigits.value = [seconds.value[0], seconds.value[1]];
};

let timer: number | undefined;
onMounted(() => {
    updateTime();
    timer = window.setInterval(updateTime, 1000);
});

onUnmounted(() => {
    if (timer) {
        clearInterval(timer);
    }
});
</script>

<template>
    <div class="clock-display">
        <div class="digit">{{ hourDigits[0] }}</div>
        <div class="digit">{{ hourDigits[1] }}</div>
        <span>:</span>
        <div class="digit">{{ minuteDigits[0] }}</div>
        <div class="digit">{{ minuteDigits[1] }}</div>
        <span>:</span>
        <div class="digit">{{ secondDigits[0] }}</div>
        <div class="digit">{{ secondDigits[1] }}</div>
    </div>
</template>

<style scoped>
.clock-display {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    margin: 20px 0;
    color: #333;
}

.digit {
    width: 40px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #333;
    margin: 0 2px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

span {
    font-size: 2em;
    margin: 0 5px;
}
</style>