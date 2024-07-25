import { ref } from 'vue';
import WeekDayCard from './WeekDayCard.vue';
import DateCard from './DateCard.vue';
import MonthCard from './MonthCard.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const now = new Date();
const weekDay = ref(now.toLocaleString('sv-SE', { weekday: 'long' }));
const date = ref(now.getDate().toString().padStart(2, '0'));
const month = ref(now.toLocaleString('sv-SE', { month: 'long' }));
const dateDigits = ref([date.value[0], date.value[1]]);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flip-calendar") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("day") }, });
    // @ts-ignore
    [WeekDayCard,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(WeekDayCard, new WeekDayCard({ weekDay: ((__VLS_ctx.weekDay)), }));
    const __VLS_1 = __VLS_0({ weekDay: ((__VLS_ctx.weekDay)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ weekDay: ((__VLS_ctx.weekDay)), }));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(WeekDayCard, __VLS_1));
    // @ts-ignore
    [weekDay,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("date") }, });
    // @ts-ignore
    [DateCard,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(DateCard, new DateCard({ digit: ((__VLS_ctx.dateDigits[0])), }));
    const __VLS_6 = __VLS_5({ digit: ((__VLS_ctx.dateDigits[0])), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}({ digit: ((__VLS_ctx.dateDigits[0])), }));
    const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(DateCard, __VLS_6));
    // @ts-ignore
    [dateDigits,];
    // @ts-ignore
    [DateCard,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(DateCard, new DateCard({ digit: ((__VLS_ctx.dateDigits[1])), }));
    const __VLS_11 = __VLS_10({ digit: ((__VLS_ctx.dateDigits[1])), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    ({}({ digit: ((__VLS_ctx.dateDigits[1])), }));
    const __VLS_14 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(DateCard, __VLS_11));
    // @ts-ignore
    [dateDigits,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("month") }, });
    // @ts-ignore
    [MonthCard,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(MonthCard, new MonthCard({ month: ((__VLS_ctx.month)), }));
    const __VLS_16 = __VLS_15({ month: ((__VLS_ctx.month)), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ month: ((__VLS_ctx.month)), }));
    const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(MonthCard, __VLS_16));
    // @ts-ignore
    [month,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flip-calendar'];
        __VLS_styleScopedClasses['day'];
        __VLS_styleScopedClasses['date'];
        __VLS_styleScopedClasses['month'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                WeekDayCard: WeekDayCard,
                DateCard: DateCard,
                MonthCard: MonthCard,
                weekDay: weekDay,
                month: month,
                dateDigits: dateDigits,
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
