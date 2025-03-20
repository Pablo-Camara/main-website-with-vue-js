<script setup>
import { defineProps } from 'vue';
const props = defineProps(['label', 'id', 'type', 'placeholder']);
</script>

<template>
    <label :for="id">{{ label }}</label><br/>
    <input :id="id" :type="type" :placeholder="placeholder" />
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