<template>
    <button 
        class="btn">
        <slot></slot>    
    </button>
</template>


<style scoped>
    .btn {
        background-color: #ffffff;
        color: #000000;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
    }

    .btn:hover {
        background-color: #00ff00;
    }

    .btn.red-alert {
        background-color: #ff0000;
        color: #ffffff;
    }

    .btn.full {
        width: 100%;
    }
</style>