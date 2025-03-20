<template>
    <div class="latest-posts">
        <h2>Latest Posts</h2>

        <div class="latest-post">
            <h3>Post Title</h3>
            <p>Post Content</p>
        </div>

        <div class="latest-post">
            <h3>Post Title 2</h3>
            <p>Post Content 2</p>
        </div>

        <div class="latest-post">
            <h3>Post Title 3</h3>
            <p>Post Content 3</p>
        </div>
    </div>
</template>

<style scoped>
    .latest-posts {
        max-width: 300px;
        margin: auto;
        margin-top: 40px;
    }

    .latest-posts h2 {
        color: #ffffff
    }
    

    .latest-post h3 {
        margin-bottom: 0;
        margin-top: 0;
    }

    .latest-post {
        background-color: #ffffff;
        padding: 10px;
        margin-top: 10px;
        border-radius: 5px;
    }
</style>