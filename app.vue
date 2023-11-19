<template>
  <div>
    <NuxtLayout > 
    <NuxtPage  /> 
  </NuxtLayout >  
  <!-- <div v-if="global && global.loader">
    <Loader />
  </div> -->
  </div>
</template>
<script setup>
import { useGlobalStore } from "@/stores/global";
// import Loader from "~/components/Generic/loader.vue";

const global = useGlobalStore();
const config = useRuntimeConfig();

useHead({
 link:[
 { rel: "icon", type: "image/png", href: "/logo.png" },
 ]
});




</script>

