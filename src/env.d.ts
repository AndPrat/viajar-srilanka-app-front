/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_URL: string;
  VITE_FIREBASE_APIKEY: string;
  VITE_FIREBASE_AUTHDOMAIN: string;
  VITE_FIREBASE_PROJECTID: string;
  VITE_FIREBASE_STORAGEBUCKET: string;
  VITE_FIREBASE_MESSAGINGSENDERID: string;
  VITE_FIREBASE_APPID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
