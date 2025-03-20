<script setup>
import { defineProps, computed } from 'vue';
const props = defineProps(['label', 'id', 'type', 'placeholder', 'modelValue']);
const emit = defineEmits(['update:modelValue']);

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

</script>

<template>
    <label :for="id">{{ label }}</label><br/>
    <input :id="id" :type="type" :placeholder="placeholder" v-model="inputValue"/>
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