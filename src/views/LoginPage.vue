<script setup>
import { ref } from 'vue';
import BaseInput from '@/components/BaseComponents/BaseInput.vue';
import BaseButton from '@/components/BaseComponents/BaseButton.vue';
import HeaderBox from '@/components/HeaderBox.vue';
import { useNavigation } from '@/utils/routerUtils';
import { apiConfig } from '@/config/api';

const { goHome } = useNavigation();

const email = ref(null);
const password = ref(null);

const genericError = ref(null);

const somethingWentWrong = () => {
    genericError.value = 'Something went wrong. Could not login.';
}

const login = () => {
    console.log(email.value);
    console.log(password.value);
    console.log("Fetching data...");
    fetch(apiConfig.BASE_URL + '/api/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            email: email.value,
            password: password.value
        })
    })
    .then(response => {
        if (!response.ok) {
            somethingWentWrong();
            return;
        }
        return response.json();
    })
    .then(data => {
        if (data.success === false) {
            genericError.value = data.message ?? 'Something went wrong, could not login.';
            return;
        }
    })
    .catch(error => {
        somethingWentWrong();
    });
    

};

</script>

<template>
    <HeaderBox title="Login" subtitle="Please log in to access your account" />

    <div class="form-box">
        <BaseInput v-model="email" label="Email" id="email" type="email" placeholder="your@email.com" />
        <br/><br/>
        <BaseInput v-model="password" label="Password" id="password" type="password" placeholder="***********"/>
        <br/><br/>
        <p class="error" v-if="genericError">{{ genericError }}</p>
        <BaseButton class="mr-10" @click="login">Login</BaseButton>
        <BaseButton class="red-alert" @click="goHome">Back</BaseButton>
    </div>
</template>
