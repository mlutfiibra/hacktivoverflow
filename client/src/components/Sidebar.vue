<template>
    <div class="sidebar-container">
        <ul class="list-group list-group-flush" style="position: fixed;">
            <li class="link list-group-item" @click="goToHome()">Home</li>
            <li class="link list-group-item" @click="goToMyQuestion()">My Questions</li>
            <li class="link list-group-item" @click="goToTags()">Tags</li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        goToHome() {
            this.$router.push('/')
        },
        goToMyQuestion() {
            this.$router.push('/question/user')
        },
        goToTags() {
            this.$router.push('/tags')
        }
    },
}
</script>

<style>
.sidebar-container {
    width: 140px;
}
.link {
    font-size: 15px;
}
.link:hover {
    cursor: pointer;
    font-weight: 600;
}
</style>
