<script setup>
import { ref } from 'vue';
const email = ref('');
const subscribed = ref(false);
const submitForm = () => {
    subscribed.value = true;
    // Reset the email input after submission
    email.value = '';
}
</script>

<template>
    <div class="color-white text-center">
        <h1>Hello, World!</h1>

        <p>Welcome to my website! Here, I’ll share my journey through <span class="highlight">technology</span> and
            <span class="highlight">fitness</span>—two passions that shape my life.
        </p>

        <p>This isn’t just a portfolio; it’s a space for <span class="highlight">learning</span>, <span
                class="highlight">growth</span>, and <span class="highlight">sharing insights</span>. Whether it’s
            coding
            tips, fitness strategies, or something cool I’ve discovered, you’ll find it here.</p>

        <p>Stick around, explore, and let’s <span class="highlight">learn together!</span></p>

        <form class="form-container" @submit.prevent="submitForm">
            <input v-model="email"  type="email" placeholder="Enter your email" class="email-input" required>
            <button type="submit" class="submit-btn">Subscribe to continue</button>
        </form>
        <p v-if="subscribed" class="success-message">Thanks for subscribing! Check your inbox for updates.</p>
    </div>
</template>

<style scoped>

@media (max-width: 417px) {
    .submit-btn {
        margin-top: 10px;
    }
}

.success-message
{
    color: green;
    font-size: 16px;
    margin-top: 10px;
}

.text-center {
    text-align: center;
}

.color-white {
    color: white;
}

h1 {
    font-size: 24px;
}

p {
    font-size: 18px;
    line-height: 1.6;
}

.highlight {
    font-weight: bold;
}

.form-container {
    margin-top: 20px;
    text-align: center;
  }

  .email-input {
    background: #222;
    border: 3px solid #fff;
    padding: 10px;
    font-size: 18px;
    color: #fff;
    font-family: "Courier New", monospace;
    outline: none;
    transition: border 0.3s ease-in-out;
  }

  .email-input:focus {
    border: 3px solid #00ff00;
  }

  .submit-btn {
    background: #fff;
    color: #000;
    border: 3px solid #fff;
    font-size: 18px;
    padding: 10px 20px;
    font-family: "Courier New", monospace;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-left: 10px;
  }

  .submit-btn:hover {
    background: #00ff00;
    color: #000;
    border-color: #00ff00;
  }
</style>