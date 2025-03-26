<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import HeaderBox from '@/components/HeaderBox.vue';
import { useAuthStore } from '@/stores/useAuthStore';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();
const { first_name, last_name, email,
     newsletter_consent, email_confirmed } = storeToRefs(authStore);

</script>

<template>
    <HeaderBox title="My Account" subtitle="Manage your profile and settings." />

    <div class="my-account">
        <p class="color-white text-center">Welcome,<br/>{{ first_name }} {{ last_name }}</p>

        <div v-if="email_confirmed !== null">
            <h2>Email confirmation status:</h2>
            <p class="color-green" v-if="email_confirmed">Email confirmed</p>
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