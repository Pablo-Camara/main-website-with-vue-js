<script setup>
import { computed } from 'vue';
const props = defineProps(['label', 'id', 'type', 'placeholder', 'modelValue', 'disableClipboard', 'error']);
const emit = defineEmits(['update:modelValue']);
defineOptions({
  inheritAttrs: false
})

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
    <p class="error-message" v-if="error">{{ error }}</p>
</template>

<style scoped>
    input {
       width: 100%;
       padding: 10px;
       margin-top: 5px;
       margin-bottom: 10px;
       box-sizing: border-box;
   }

   .error-message {
       color: red;
       font-size: 14px;
       margin-top: 0;
   }
</style>