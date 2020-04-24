
import {ISSUER, CLIENT_ID,REDIRECT_URI, END_SESSION_REDIRECT_URI,DISCOVERY_URI,SCOPES,REQUIRE_HARDWARE_BACKED_KEY_STORE} from 'react-native-dotenv';
export default {
    issuer: ISSUER,
    clientId: CLIENT_ID,
    redirectUrl: REDIRECT_URI,
    endSessionRedirectUri: END_SESSION_REDIRECT_URI,
    discoveryUri: DISCOVERY_URI,
    scopes: ['openid', 'profile', 'email', 'offline_access'],
    requireHardwareBackedKeyStore:false,
};