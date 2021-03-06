import { Platform } from 'react-native';

const localHost = `http://localhost:5001/thesocial-c43f1/us-central1`;
const liveHost = `https://us-central1-thesocial-c43f1.cloudfunctions.net`;
export const isAndroid = Platform.OS === 'android';
export const isMock = false;
export const isDevelopment = process.env.NODE_ENV === 'development';
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
