Object.defineProperty(exports,"__esModule",{value:true});




var _reactNative=require('react-native');






var RNFetchBlob=_reactNative.NativeModules.RNFetchBlob;






function getCookies(url){
return RNFetchBlob.getCookies(url);
}exports.default=

{
getCookies:getCookies};