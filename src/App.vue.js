import FlipCalendar from './components/FlipCalendar.vue';
import ClockDisplay from './components/ClockDisplay.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("app"), });
    // @ts-ignore
    [FlipCalendar,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(FlipCalendar, new FlipCalendar({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(FlipCalendar, __VLS_1));
    // @ts-ignore
    [ClockDisplay,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(ClockDisplay, new ClockDisplay({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}({}));
    const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ClockDisplay, __VLS_6));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                FlipCalendar: FlipCalendar,
                ClockDisplay: ClockDisplay,
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
