<template>
  <div class="home-slider  ">
  
    <swiper
    v-if="reload"
      :slides-per-view="1"
      :loop="true"
      :speed="500"
      :pagination="{ clickable: true }"
      :navigation="true"
      grab-cursor
      :autoplay="{
        delay: 6000,
        disableOnInteraction: false,
      }"
      :modules="[Autoplay, Pagination, Navigation]"
    >
      <swiper-slide
        class="h-full"
        v-for="(item, i) in mainSliders"
        :key="i"
      >
        <div class=" h-full">
            <div class="xs:h-[25vh]  md:h-[50vh]  lg:h-[70vh]  xl:h-[83vh] relative">
            <div class=" absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000C7] to-[#00000000] z-10"></div>
              <img
                class="object-cover h-full  w-full  "
                :src="img"                
                alt=""
              />
            </div>
          </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
// const props = defineProps({
//   mainSliders: Array,
// });
// imports ( swiper package )
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination, A11y, Virtual } from "swiper";
import { ref } from "vue";
import "swiper/css";

// variables
const img = "/imgs/342517021_906337437325380_7550430282851292600_n.jpg";
const reload = ref(true);
const { locale, locales, setLocale, t } = useI18n();
const mainSliders = [
  {},

]


// Functions
const reloadFun = () => {
  reload.value = false;

  setTimeout(() => {
    reload.value = true;
  }, 10);
};
// to replace img when it has an error






watch(
  () => locale,
  (newValue, oldValue) => {

    reloadFun();
  },
  { deep: true }
);
</script>

<style>
.swiper.swiper-initialized.swiper-horizontal.swiper-rtl.swiper-backface-hidden {
  width: 100%;
}

.home-slider {
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 0px;
}
.home-slider
  .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
}
@media (max-width: 300px) {
  .home-slider
    .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal {
    align-items: center;
  }
}
.home-slider
  .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal
  span {
  width: 41px;
  height: 9px;
  background: #d1d1d1 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  cursor: pointer;
}

.home-slider
  .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal
  span.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #E60000 0% 0% no-repeat padding-box;
}

@media (max-width: 670px) {
  .home-slider .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal
    span {
    width: 33px;
    height: 8.5px;
  }
}
</style>