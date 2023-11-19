import axios from "axios";

export default function requist (){ 

const config = useRuntimeConfig();

const Axios = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? config.public.prod_base : 'https://amf-backend.hmaserv.online/api',
})
return {Axios}
}
 