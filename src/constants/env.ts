const SERVER_HOST: string = import.meta.env.VITE_APP_SERVER_HOST;
const API_URL:string = SERVER_HOST + '/api'
const IMAGES_FOLDER: string = import.meta.env.VITE_APP_IMAGES_FOLDER;
const IMAGES_URL: string = SERVER_HOST + IMAGES_FOLDER;
const IMAGES_200_URL: string = IMAGES_URL +'/200_';
const IMAGES_600_URL: string = IMAGES_URL +'/600_';
const IMAGES_800_URL: string = IMAGES_URL +'/800_';
const ACCESS_KEY: string = import.meta.env.VITE_APP_ACCESS_KEY;
const APP_MODE: string = import.meta.env.VITE_APP_APP_MODE;

export const APP_ENV = {
    API_URL,
    SERVER_HOST,
    IMAGES_FOLDER,
    IMAGES_URL,
    IMAGES_200_URL,
    IMAGES_600_URL,
    IMAGES_800_URL,
    ACCESS_KEY,
    APP_MODE,
};