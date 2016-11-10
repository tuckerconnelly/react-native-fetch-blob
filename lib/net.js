Object.defineProperty(exports,"__esModule",{value:true});




var _reactNativeUniversal=require('react-native-universal');






var RNFetchBlob=_reactNativeUniversal.NativeModules.RNFetchBlob;






function getCookies(url){
return RNFetchBlob.getCookies(url);
}exports.default=

{
getCookies:getCookies};