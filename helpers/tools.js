export const localStorageBasicData = Object.freeze({
  language: "ar",
  user: {},
  admin: {},
  auth: {},
  isDarkMode: false
})
export const appInfo = {
  name_en: 'AMF',
  name_ar: 'أحمد عسكر'
}
export const lowerString = (txt) => typeof txt === "string" ? txt.toLowerCase() : "";
export const isString = (x) => Object.prototype.toString.call(x) === "[object String]";
export const trimText = (txt, limit) =>
txt
  ? `${
      txt.split("").length > limit
        ? txt.split("").slice(0, limit).join("") + "..."
        : txt
    }`
  : "";
export const isTokenValid = (token) => {
  if (!token || typeof token !== 'string') {
    return false;
  }
  const decodedToken = token
    ? JSON.parse(atob(token.split(".")[1]))
    : {};
  if (decodedToken?.exp) {
    return decodedToken?.exp;
  } else {
    return false;
  }
}
export const locStorage = ({ type, newData, destination }) => {
  const parsedBasicData = JSON.parse(JSON.stringify(localStorageBasicData));
  const appNameOnLocalstorage = "dalilak";
  if (type === "set" && (Array.isArray(newData) || typeof newData === "object" || isString(newData))) {
    const storageCopy = locStorage({ type: "get" });
    const newLocStorageArr = { ...storageCopy, [destination]: newData };
    Object.keys(parsedBasicData || {}).forEach(key => {
      if (!newLocStorageArr.hasOwnProperty(key)) {
        newLocStorageArr[key] = parsedBasicData[key];
      }
    });
    localStorage.setItem(appNameOnLocalstorage, JSON.stringify(newLocStorageArr));

  } else if (type === "get") {
    return JSON.parse(localStorage.getItem(appNameOnLocalstorage));
  } else if (type === "reset" && typeof newData === "object" && newData !== null) {
    localStorage.setItem(appNameOnLocalstorage, JSON.stringify(newData));
  } else if (type === "clear") {
    localStorage.clear();
  }
  return {};
}
export const ROUTESNAMES = Object.freeze({
  //----- errors -----
  errors: {
    _404: '/404',
    _503: "/503"
  },
  //---- USER ----
  user: {
    homepage: "/",
    login: "/login"
  },
  //---- ADMIN ----
  admin: {
    dashboard: "/admin",
    login: "/admin/login",
    admins: "/admin/admins",
    orders: "/admin/orders",
    settings: "/admin/settings"
  }
})
export const OWNERS = {
  admin: 'admin',
  user: 'user'
}
// methods names
const httpMethods = {
  post: 'POST',
  get: 'GET',
  delete: 'DELETE',
  put: 'PUT',
};
export const apiRequests = {
  admin: {
    // auth
    login: {
        url: `/login`,
        method: httpMethods.post
    },
    logout: { url: `/panel/logout`, method: httpMethods.post },
    // admins
    getAdmins: { url: `/panel/admins`, method: httpMethods.get },
    deleteAdminsItem: { url: `/panel/admins`, method: httpMethods.delete },
    addAdminsItem: { url: `/panel/admins`, method: httpMethods.post },
    editAdminsItem: { url: `/panel/admins`, method: httpMethods.put },
    // settings
    getSettings: { url: `/panel/settings`, method: httpMethods.get },
    postSettings: { url: `/panel/settings`, method: httpMethods.post },
    // orders
    getOrders: { url: `/panel/orders`, method: httpMethods.get },
    changeOrdersStatus: { url: `/panel/orders`, method: httpMethods.put },
    deleteOrdersItem: { url: `/panel/orders`, method: httpMethods.delete },
    // clients
    getClients: { url: `/panel/clients`, method: httpMethods.get },
    editClientsItem: { url: `/panel/clients`, method: httpMethods.post },
    addClientsItem: { url: `/panel/clients`, method: httpMethods.post },
    deleteClientsItem: { url: `/panel/clients`, method: httpMethods.delete },
    // sliders
    getSliders: { url: `/panel/sliders`, method: httpMethods.get },
    editSlidersItem: { url: `/panel/sliders`, method: httpMethods.post },
    addSlidersItem: { url: `/panel/sliders`, method: httpMethods.post },
    deleteSlidersItem: { url: `/panel/sliders`, method: httpMethods.delete },
    // services
    getServices: { url: `/panel/services`, method: httpMethods.get },
    editServicesItem: { url: `/panel/services`, method: httpMethods.post },
    addServicesItem: { url: `/panel/services`, method: httpMethods.post },
    deleteServicesItem: { url: `/panel/services`, method: httpMethods.delete },
    // packages
    getPackages: { url: `/panel/packages`, method: httpMethods.get },
    editPackagesItem: { url: `/panel/packages`, method: httpMethods.put },
    addPackagesItem: { url: `/panel/packages`, method: httpMethods.post },
    deletePackagesItem: { url: `/panel/packages`, method: httpMethods.delete },
  },
}