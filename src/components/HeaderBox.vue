<script setup>
import { defineProps } from 'vue';
const props = defineProps(['title', 'subtitle']);
</script>

<template>
    <div class="header-box">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
    </div>
</template>

<style scoped>
    .header-box {
        background-color: white;
        padding: 10px;
        text-align: center;
        margin-bottom: 20px;
    }

    .header-box h1 {
         margin-bottom: 0;
    }
</style>