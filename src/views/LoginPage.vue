<script setup>
import BaseButton from '@/components/BaseComponents/BaseButton.vue';
import HeaderBox from '@/components/HeaderBox.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goHome = () => {
    router.push('/');
}
</script>

<template>
    <HeaderBox title="Login" subtitle="Please log in to access your account" />

    <div class="login-form">
        <label for="email">Email</label><br/>
        <input id="email" type="text" placeholder="your@email.com" />
        <br/><br/>
        <label for="password">Password</label><br/>
        <input id="password" type="password" placeholder="Password" />
        <br/><br/>
        <BaseButton variant="mr-10">Login</BaseButton>
        <BaseButton variant="red-alert" @click="goHome">Back</BaseButton>
    </div>
</template>

<style scoped>
   .login-form {
       max-width: 300px;
       margin: auto;
       margin-top: 40px;
       color: #ffffff;
   }

   input {
       width: 100%;
       padding: 10px;
       margin-top: 5px;
       margin-bottom: 10px;
   }

    .mr-10 {
        margin-right: 10px;
    }
</style>