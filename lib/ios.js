Object.defineProperty(exports,"__esModule",{value:true});




var _reactNativeUniversal=require('react-native-universal');






var RNFetchBlob=_reactNativeUniversal.NativeModules.RNFetchBlob;







function previewDocument(path,scheme){
if(_reactNativeUniversal.Platform.OS==='ios')
return RNFetchBlob.previewDocument('file://'+path,scheme);else

return Promise.reject('RNFetchBlob.openDocument only supports IOS.');
}







function openDocument(path,scheme){
if(_reactNativeUniversal.Platform.OS==='ios')
return RNFetchBlob.openDocument('file://'+path,scheme);else

return Promise.reject('RNFetchBlob.previewDocument only supports IOS.');
}exports.default=

{
openDocument:openDocument,
previewDocument:previewDocument};