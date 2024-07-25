import { ref, onMounted, onUnmounted } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
let timer;
onMounted(() => {
    updateTime();
    timer = window.setInterval(updateTime, 1000);
});
onUnmounted(() => {
    if (timer) {
        clearInterval(timer);
    }
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("clock-display") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("digit") }, });
    (__VLS_ctx.hourDigits[0]);
    // @ts-ignore
    [hourDigits,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("digit") }, });
    (__VLS_ctx.hourDigits[1]);
    // @ts-ignore
    [hourDigits,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("digit") }, });
    (__VLS_ctx.minuteDigits[0]);
    // @ts-ignore
    [minuteDigits,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("digit") }, });
    (__VLS_ctx.minuteDigits[1]);
    // @ts-ignore
    [minuteDigits,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("digit") }, });
    (__VLS_ctx.secondDigits[0]);
    // @ts-ignore
    [secondDigits,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("digit") }, });
    (__VLS_ctx.secondDigits[1]);
    // @ts-ignore
    [secondDigits,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['clock-display'];
        __VLS_styleScopedClasses['digit'];
        __VLS_styleScopedClasses['digit'];
        __VLS_styleScopedClasses['digit'];
        __VLS_styleScopedClasses['digit'];
        __VLS_styleScopedClasses['digit'];
        __VLS_styleScopedClasses['digit'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                hourDigits: hourDigits,
                minuteDigits: minuteDigits,
                secondDigits: secondDigits,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
