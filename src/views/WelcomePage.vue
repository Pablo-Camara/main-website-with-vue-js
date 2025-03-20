<script setup>
import { ref } from 'vue';

</script>

<template>
    <div class="welcome-box">
        <h1>Welcome</h1>
        <p>Simplicity is the ultimate sophistication.</p>
    </div>

    <div class="authentication">
        <button class="white-btn login-btn">Login</button>
        <button class="white-btn">Register</button>
    </div>
</template>

<style scoped>

    .welcome-box {
        background-color: white;
        padding: 10px;
        text-align: center;
    }

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