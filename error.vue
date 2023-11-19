<template>
  <div
    id="error"
    class="app-container flex items-center justify-center flex-col h-[100vh]"
  >
    <div>
      <h1 class="font-bold text-first text-[400px]">404</h1>
    </div>
    <div class=" content text-3xl font-bold "> {{ $t('error.went_wrong') }} </div>
    <button
      class="bg-first text-white rounded-2xl py-2 px-6 mb-6 text-[16px] md:text-[18px] lg:text-[20px] hover:bg-[#c49938]"
    >
      <NuxtLink href="/"> {{ $t('error.to_home_page') }} </NuxtLink>
    </button>
  </div>
</template>
  
  <script setup >
useHead({
  link: [{ rel: "icon", type: "image/png", href: "/logo.png" }],
});

</script>
  
  <style>
#error h1 {
  font-size: 400px;
}
#error .logo {
  width: 300px;
}
#error .content {
  font-size: 32px;
  padding-bottom: 50px;
}
#error .logo img {
  display: block;
  width: 100%;
}

@media (max-width: 1200px) {
  #error h1 {
    font-size: 300px;
  }
}
@media (max-width: 992px) {
  #error h1 {
    font-size: 200px;
  }
  #error .logo {
    width: 200px;
  }
}
@media (max-width: 600px) {
  #error h1 {
    font-size: 100px;
  }
  #error .logo {
    width: 150px;
  }
  #error .content {
  font-size: 22px;
  padding-bottom: 30px;
}
}
</style>