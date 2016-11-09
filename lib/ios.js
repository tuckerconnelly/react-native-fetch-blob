Object.defineProperty(exports,"__esModule",{value:true});




var _reactNative=require('react-native');






var RNFetchBlob=_reactNative.NativeModules.RNFetchBlob;







function previewDocument(path,scheme){
if(_reactNative.Platform.OS==='ios')
return RNFetchBlob.previewDocument('file://'+path,scheme);else

return Promise.reject('RNFetchBlob.openDocument only supports IOS.');
}







function openDocument(path,scheme){
if(_reactNative.Platform.OS==='ios')
return RNFetchBlob.openDocument('file://'+path,scheme);else

return Promise.reject('RNFetchBlob.previewDocument only supports IOS.');
}exports.default=

{
openDocument:openDocument,
previewDocument:previewDocument};