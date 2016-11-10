Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();




var _reactNativeUniversal=require('react-native-universal');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}





var RNFetchBlob=_reactNativeUniversal.NativeModules.RNFetchBlob;
var emitter=_reactNativeUniversal.DeviceEventEmitter;

var sessions={};var

RNFetchBlobSession=function(){_createClass(RNFetchBlobSession,null,[{key:'getSession',value:function getSession(







name){
return sessions[name];
}},{key:'setSession',value:function setSession(

name,val){
sessions[name]=val;
}},{key:'removeSession',value:function removeSession(

name){
delete sessions[name];
}}]);

function RNFetchBlobSession(name,list){_classCallCheck(this,RNFetchBlobSession);
this.name=name;
if(!sessions[name]){
if(Array.isArray(list))
sessions[name]=list;else

sessions[name]=[];
}
}_createClass(RNFetchBlobSession,[{key:'add',value:function add(

path){
sessions[this.name].push(path);
return this;
}},{key:'remove',value:function remove(

path){
var list=sessions[this.name];
for(var i in list){
if(list[i]===path){
sessions[this.name].splice(i,1);
break;
}
}
return this;
}},{key:'list',value:function list()

{
return sessions[this.name];
}},{key:'dispose',value:function dispose()

{var _this=this;
return new Promise(function(resolve,reject){
RNFetchBlob.removeSession(sessions[_this.name],function(err){
if(err)
reject(err);else
{
delete sessions[_this.name];
resolve();
}
});
});
}}]);return RNFetchBlobSession;}();exports.default=RNFetchBlobSession;