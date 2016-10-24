Object.defineProperty(exports,"__esModule",{value:true});




var _reactNativeUniversal=require('react-native-universal');






var RNFetchBlob=_reactNativeUniversal.NativeModules.RNFetchBlob;







function actionViewIntent(path){var mime=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'text/plain';
if(_reactNativeUniversal.Platform.OS==='android')
return RNFetchBlob.actionViewIntent(path,mime);else

return Promise.reject('RNFetchBlob.actionViewIntent only supports Android.');
}exports.default=


{
actionViewIntent:actionViewIntent};