<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import HeaderBox from '@/components/HeaderBox.vue';

const emailConfirmed = ref(null);

onMounted(() => {
    //TODO: fetch user data from the server
});
</script>

<template>
    <HeaderBox title="My Account" subtitle="Manage your profile and settings." />

    <div class="my-account">
        <p class="color-white text-center">Welcome,<br/>Pablo Câmara</p>

        <div v-if="emailConfirmed !== null">
            <h2>Email confirmation status:</h2>
            <p class="color-green" v-if="emailConfirmed">Email confirmed</p>
            <p class="color-red" v-else>Email not confirmed yet</p>
        </div>
    </div>
</template>

<style scoped>
   .my-account {
        max-width: 300px;
        margin: auto;
        margin-top: 40px;
    }
    
    h2 {
        color: #ffffff;
        font-size: 20px;
    }

</style>