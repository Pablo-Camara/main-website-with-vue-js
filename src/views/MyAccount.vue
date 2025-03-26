<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import HeaderBox from '@/components/HeaderBox.vue';
import { useAuthStore } from '@/stores/useAuthStore';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

</script>

<template>
    <HeaderBox title="My Account" subtitle="Manage your profile and settings." />

    <div class="my-account">
        <p class="color-white text-center">Welcome,<br/>{{ user.first_name }} {{ user.last_name }}</p>

        <div v-if="user.email_confirmed !== null">
            <h2>Email confirmation status:</h2>
            <p class="color-green mb-2" v-if="user.email_confirmed">Email confirmed</p>
            <p class="color-red mt-2" v-else>Email not confirmed yet</p>
            <p class="color-white mt-0">{{ user.email }}</p>
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

    .mb-2 {
        margin-bottom: 2px;
    }

    .mt-0 {
        margin-top: 0px;
    }

</style>