<script setup>
import { ref } from 'vue';
import BaseInput from '@/components/BaseComponents/BaseInput.vue';
import BaseButton from '@/components/BaseComponents/BaseButton.vue';
import HeaderBox from '@/components/HeaderBox.vue';
import { useNavigation } from '@/utils/routerUtils';

const { goHome } = useNavigation();

const email = ref(null);
const password = ref(null);

const login = () => {
    console.log(email.value);
    console.log(password.value);
};

</script>

<template>
    <HeaderBox title="Login" subtitle="Please log in to access your account" />

    <div class="form-box">
        <BaseInput v-model="email" label="Email" id="email" type="email" placeholder="your@email.com" />
        <br/><br/>
        <BaseInput v-model="password" label="Password" id="password" type="password" placeholder="***********"/>
        <br/><br/>
        <BaseButton variant="mr-10" @click="login">Login</BaseButton>
        <BaseButton variant="red-alert" @click="goHome">Back</BaseButton>
    </div>
</template>
