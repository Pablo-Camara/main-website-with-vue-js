<script setup>
import { ref } from 'vue';
import { useNavigation } from '@/utils/routerUtils';
import HeaderBox from '@/components/HeaderBox.vue';
import BaseInput from '@/components/BaseComponents/BaseInput.vue';
import BaseButton from '@/components/BaseComponents/BaseButton.vue';
import BaseCoregBinary from '@/components/BaseComponents/BaseCoregBinary.vue';


const { goHome } = useNavigation();

const firstName = ref(null);
const lastName = ref(null);
const email = ref(null);
const emailConfirm = ref(null);
const password = ref(null);
const passwordConfirm = ref(null);
const newsletterConfirm = ref(true);

const register = () => {
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(email.value);
    console.log(emailConfirm.value);
    console.log(password.value);
    console.log(passwordConfirm.value);
    console.log(newsletterConfirm.value);
};

const setNewsletterConfirm = (value) => {
    newsletterConfirm.value = value ? true : false;
};

</script>

<template>
    <HeaderBox title="Register" subtitle="Create your account and join us!" />

    <div class="form-box">
        <BaseInput v-model="firstName" label="First name" id="firstName" type="text" placeholder="Ex: John"/>
        <br/><br/>
        <BaseInput v-model="lastName" label="Last name" id="lastName" type="text" placeholder="Ex: Doe"/>
        <br/><br/>
        <BaseInput v-model="email" label="Email" id="email" type="email" placeholder="your@email.com" disableClipboard="true"/>
        <br/><br/>
        <BaseInput v-model="emailConfirm" label="Repeat Email" id="emailConfirm" type="email" placeholder="your@email.com" disableClipboard="true"/>
        <br/><br/>
        <BaseInput v-model="password" label="Create Password" id="password" type="password" placeholder="***********" disableClipboard="true"/>
        <br/><br/>
        <BaseInput v-model="passwordConfirm" label="Repeat Password" id="passwordConfirm" type="password" placeholder="***********" disableClipboard="true"/>
        <br/><br/>
        <BaseCoregBinary text="Do you agree to receive news and updates via email?" :confirmed="newsletterConfirm" @confirm="setNewsletterConfirm" />
        <br/><br/>

        <BaseButton variant="mb-10 full" @click="register">Register</BaseButton>
        <BaseButton variant="red-alert" @click="goHome">Back</BaseButton>
    </div>
</template>

