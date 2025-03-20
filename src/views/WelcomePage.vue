<script setup>
import { useRouter } from 'vue-router';
import HeaderBox from '@/components/HeaderBox.vue';
import LatestPosts from '@/components/LatestPosts.vue';

const router = useRouter();

const goToLoginPage = () => {
    router.push('/login');
}

const goToRegisterPage = () => {
    router.push('/register');
}
</script>

<template>
    <HeaderBox title="Welcome" subtitle="Simplicity is the ultimate sophistication." />

    <div class="authentication">
        <button class="white-btn login-btn" @click="goToLoginPage">Login</button>
        <button class="white-btn" @click="goToRegisterPage">Register</button>
    </div>

    <LatestPosts />
</template>

<style scoped>

    .authentication {
        text-align: center;
    }

    .white-btn {
        background-color: #ffffff;
        color: #000000;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        margin-top: 10px;
    }

    .white-btn:hover {
        background-color: #00ff00;
    }

    .login-btn {
        margin-right: 10px;
    }
    
</style>