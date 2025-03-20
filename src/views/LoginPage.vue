<script setup>
import { useRouter } from 'vue-router';
import BaseInput from '@/components/BaseComponents/BaseInput.vue';
import BaseButton from '@/components/BaseComponents/BaseButton.vue';
import HeaderBox from '@/components/HeaderBox.vue';


const router = useRouter();
const goHome = () => {
    router.push('/');
}
</script>

<template>
    <HeaderBox title="Login" subtitle="Please log in to access your account" />

    <div class="login-form">
        <BaseInput label="Email" id="email" type="email" placeholder="your@email.com" />
        <br/><br/>
        <BaseInput label="Password" id="password" type="password" placeholder="***********"/>
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

    .mr-10 {
        margin-right: 10px;
    }
</style>