<script setup>
import { useRouter } from 'vue-router';
import HeaderBox from '@/components/HeaderBox.vue';
import LatestPosts from '@/components/LatestPosts.vue';
import BaseButton from '@/components/BaseComponents/BaseButton.vue';
import { useNavigation } from '@/utils/routerUtils';

const { goToLoginPage, goToRegisterPage } = useNavigation();

</script>

<template>
    <HeaderBox title="My Account" subtitle="Manage your profile and settings." />


</template>

<style scoped>


    
</style>