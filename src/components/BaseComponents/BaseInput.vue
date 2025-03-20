<script setup>
import { defineProps, computed } from 'vue';
const props = defineProps(['label', 'id', 'type', 'placeholder', 'modelValue', 'disableClipboard']);
const emit = defineEmits(['update:modelValue']);

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

const handleClipboard = (event) => {
    if (props.disableClipboard) {
        event.preventDefault();
    }
};

</script>

<template>
    <label :for="id">{{ label }}</label><br/>
    <input :id="id" :type="type" :placeholder="placeholder" v-model="inputValue" 
        @paste="handleClipboard" 
        @copy="handleClipboard" 
        @cut="handleClipboard"/>
</template>

<style scoped>
    input {
       width: 100%;
       padding: 10px;
       margin-top: 5px;
       margin-bottom: 10px;
       box-sizing: border-box;
   }
</style>