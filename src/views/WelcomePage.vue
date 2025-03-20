<script setup>
import { useRouter } from 'vue-router';
import HeaderBox from '@/components/HeaderBox.vue';

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

    <div class="latest-posts">
        <h2>Latest Posts</h2>
    
        <div class="latest-post">
            <h3>Post Title</h3>
            <p>Post Content</p>
        </div>

        <div class="latest-post">
            <h3>Post Title 2</h3>
            <p>Post Content 2</p>
        </div>

        <div class="latest-post">
            <h3>Post Title 3</h3>
            <p>Post Content 3</p>
        </div>
    </div>
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

    .latest-posts {
        max-width: 300px;
        margin: auto;
        margin-top: 40px;
    }

    .latest-posts h2 {
        color: #ffffff
    }
    

    .latest-post h3 {
        margin-bottom: 0;
        margin-top: 0;
    }

    .latest-post {
        background-color: #ffffff;
        padding: 10px;
        margin-top: 10px;
        border-radius: 5px;
    }
</style>