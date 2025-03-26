<script setup>
import { useRouter } from 'vue-router';
import HeaderBox from '@/components/HeaderBox.vue';
import LatestPosts from '@/components/LatestPosts.vue';
import BaseButton from '@/components/BaseComponents/BaseButton.vue';
import { useNavigation } from '@/utils/useNavigation';

const { goToLoginPage, goToRegisterPage } = useNavigation();

</script>

<template>
    <HeaderBox title="Welcome" subtitle="Simplicity is the ultimate sophistication." />

    <div class="text-center">
        <BaseButton class="login-btn" @click="goToLoginPage">Login</BaseButton>
        <BaseButton @click="goToRegisterPage">Register</BaseButton>
    </div>

    <LatestPosts />
</template>

<style scoped>

    .login-btn {
        margin-right: 10px;
    }
    
</style>