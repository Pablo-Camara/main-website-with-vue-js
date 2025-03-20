<template>
    <button 
        :class="['btn', variant]" 
        @click="$emit('click')">
        <slot></slot>    
    </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
    }
  }
};
</script>


<style scoped>
    .btn {
        background-color: #ffffff;
        color: #000000;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
    }

    .btn:hover {
        background-color: #00ff00;
    }
</style>