<template>
      <div class="app-container" >
        <h3>
        {{ title }}
        </h3>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
  title : String
});
  </script>
  
  <style></style>
  