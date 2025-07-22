import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GOOGLE_WEB_CLIENT_ID } from '@env';

export const configureGoogleSignin = () => {
  GoogleSignin.configure({
    webClientId: GOOGLE_WEB_CLIENT_ID,
  });
};
