
<template>
        <div>
                <Header />
        </div>
        <div>
                <slot />
        </div>
        <div>
                <Footer />
        </div>
</template>




<script setup>
import Header from '../components/generic/header.vue';
import Footer from '../components/generic/footer.vue';
</script>

<style></style>