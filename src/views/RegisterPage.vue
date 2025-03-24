<script setup>
import { ref } from 'vue';
import { useNavigation } from '@/utils/routerUtils';
import HeaderBox from '@/components/HeaderBox.vue';
import BaseInput from '@/components/BaseComponents/BaseInput.vue';
import BaseButton from '@/components/BaseComponents/BaseButton.vue';
import BaseCoregBinary from '@/components/BaseComponents/BaseCoregBinary.vue';
import { apiConfig } from '@/config/api';

const { goHome } = useNavigation();

const genericError = ref(null);

const firstName = ref(null);
const lastName = ref(null);
const email = ref(null);
const emailConfirm = ref(null);
const password = ref(null);
const passwordConfirm = ref(null);
const newsletterConfirm = ref(true);

const setNewsletterConfirm = (value) => {
    newsletterConfirm.value = value ? true : false;
};

const formErrors = [];

const somethingWentWrong = () => {
    genericError.value = 'Something went wrong. Could not register.';
}

const register = () => {
    const formData = new FormData();
    formData.append('first_name', firstName.value);
    formData.append('last_name', lastName.value);
    formData.append('email', email.value);
    formData.append('email_confirm', emailConfirm.value);
    formData.append('password', password.value);
    formData.append('password_confirm', passwordConfirm.value);
    formData.append('newsletter_consent', newsletterConfirm.value ? 1 : 0);

    fetch(apiConfig.BASE_URL + '/api/register.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok === false) {
            somethingWentWrong();
            return;
        }
        return response.json()
    })  // Change to .json() if the response is JSON
    .then(data => {
        if (data.success == false) {
            genericError.value = 'Please fix form errors above';
            formErrors.value = data.errors;
        }
        console.log(data)
    })
    .catch(error => {
        somethingWentWrong();
        console.error('Error:', error)
    });
};



</script>

<template>
    <HeaderBox title="Register" subtitle="Create your account and join us!" />

    <div class="form-box">
        <BaseInput v-model="firstName" label="First name" id="firstName" type="text" placeholder="Ex: John"/>
        <br/><br/>
        <BaseInput v-model="lastName" label="Last name" id="lastName" type="text" placeholder="Ex: Doe"/>
        <br/><br/>
        <BaseInput v-model="email" label="Email" id="email" type="email" placeholder="your@email.com" disableClipboard="true" :error="formErrors.value?.email || null"/>
        <br/><br/>
        <BaseInput v-model="emailConfirm" label="Repeat Email" id="emailConfirm" type="email" placeholder="your@email.com" disableClipboard="true"/>
        <br/><br/>
        <BaseInput v-model="password" label="Create Password" id="password" type="password" placeholder="***********" disableClipboard="true"/>
        <br/><br/>
        <BaseInput v-model="passwordConfirm" label="Repeat Password" id="passwordConfirm" type="password" placeholder="***********" disableClipboard="true"/>
        <br/><br/>
        <BaseCoregBinary text="Do you agree to receive news and updates via email?" :confirmed="newsletterConfirm" @confirm="setNewsletterConfirm" />
        <br/><br/>
        <p class="error" v-if="genericError">{{ genericError }}</p>
        <BaseButton class="mb-10 full" @click="register">Register</BaseButton>
        <BaseButton class="red-alert" @click="goHome">Back</BaseButton>
    </div>
</template>

