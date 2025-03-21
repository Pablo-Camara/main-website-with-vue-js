<script setup>
    defineProps(['text', 'confirmed']);
    const emit = defineEmits(['confirm']);
</script>

<template>
    <div class="coreg">
        <div class="coreg-text">{{ text }}</div>
        <div class="coreg-binary-options">
            <div 
            :class="{ 'coreg-option': true, 'coreg-yes' : true, 'selected': confirmed }"
            @click="$emit('confirm', true)"
            >Yes</div>
            <div 
            :class="{ 'coreg-option': true, 'coreg-no' : true, 'selected': !confirmed }"
            @click="$emit('confirm', false)"
            >No</div>
        </div>
    </div>
</template>

<style scoped>
    .coreg-text {
        margin-bottom: 10px;
    }

    .coreg-option {
        padding: 10px;
        margin-bottom: 4px;
        cursor: pointer;
        border: 1px dashed gray;
        box-sizing: border-box;
    }
    .coreg-option.coreg-yes.selected {
        background-color: green;
        border: 2px dashed rgb(2, 73, 0)n;
        color: white;
    }
    .coreg-option.coreg-no.selected {
        background-color: #ff0000;
        color: #ffffff;
        border: 2px dashed rgb(129, 0, 0)n;
    }
</style>