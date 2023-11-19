import { defineStore } from 'pinia'
import { localStorageBasicData, OWNERS, isTokenValid, locStorage, lowerString, ROUTESNAMES } from "@/helpers/tools";
import requist from '../composables/requist'
import { useRouter } from 'nuxt/app';
import { useToast } from 'vue-toast-notification';

export const useGlobalStore = defineStore('global', {
  state: () => {
    return {
    
     
    }
  },

  actions: {
   
 
    notify({ msg, type }) {
      if (process.client) {
        const $toast = useToast();
        $toast.open({
          message: msg,
          type: type,
          duration: 5000,
          pauseOnHover: true,
          position: 'bottom-left'
        });
      }
    }
  },
})