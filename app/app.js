"use strict";
/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
Object.defineProperty(exports, "__esModule", { value: true });
require("./bundle-config");
var application = require("application");
// var firebase = require("nativescript-plugin-firebase");
// firebase.init({
//   // Optionally pass in properties for database, authentication and cloud messaging,
//   // see their respective docs.
// }).then(
//     function (instance) {
//       console.log("firebase.init done");
//     },
//     function (error) {
//       console.log("firebase.init error: " + error);
//     }
// ); 
var applicationSettings = require("application-settings");
var firebase = require("nativescript-plugin-firebase");
// import firebase = require("nativescript-plugin-firebase");
firebase.init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
    onPushTokenReceivedCallback: function (token) {
        // temporarily save it to application settings until such time that 
        // the user logs in for the first time
        console.log("token ==> " + token);
        applicationSettings.setString('device_token', token);
    },
    onMessageReceivedCallback: function (message) {
        console.log("notify msg ==> " + message);
        // dialogs.alert({
        //     title: message.title,
        //     message: message.body,
        //     okButtonText: "ok"
        // });
    },
}).then(function (instance) {
    console.log("firebase.init done");
}, function (error) {
    console.log("firebase.init error: " + error);
});
firebase.addOnPushTokenReceivedCallback(function (token) {
    console.log("addOnPushTokenReceivedCallback ==> token ==> " + token);
});
application.start({ moduleName: 'main-page' });
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUVGLDJCQUF5QjtBQUN6Qix5Q0FBMkM7QUFFM0MsMERBQTBEO0FBRTFELGtCQUFrQjtBQUNsQix1RkFBdUY7QUFDdkYsa0NBQWtDO0FBQ2xDLFdBQVc7QUFDWCw0QkFBNEI7QUFDNUIsMkNBQTJDO0FBQzNDLFNBQVM7QUFDVCx5QkFBeUI7QUFDekIsc0RBQXNEO0FBQ3RELFFBQVE7QUFDUixNQUFNO0FBRU4sSUFBSSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUUxRCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN2RCw2REFBNkQ7QUFFN0QsUUFBUSxDQUFDLElBQUksQ0FBQztJQUNaLGtGQUFrRjtJQUNsRiw2QkFBNkI7SUFDM0IsMkJBQTJCLEVBQUUsVUFBUyxLQUFLO1FBQ3pDLG9FQUFvRTtRQUNwRSxzQ0FBc0M7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbEMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0QseUJBQXlCLEVBQUUsVUFBUyxPQUFPO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLENBQUE7UUFDeEMsa0JBQWtCO1FBQ2xCLDRCQUE0QjtRQUM1Qiw2QkFBNkI7UUFDN0IseUJBQXlCO1FBQ3pCLE1BQU07SUFDUixDQUFDO0NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDTCxVQUFBLFFBQVE7SUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDcEMsQ0FBQyxFQUNELFVBQUEsS0FBSztJQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQXdCLEtBQU8sQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FDRixDQUFDO0FBRUYsUUFBUSxDQUFDLDhCQUE4QixDQUFDLFVBQVMsS0FBSztJQUVwRCxPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBRXZFLENBQUMsQ0FBQyxDQUFBO0FBR0YsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBRS9DOzs7RUFHRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAudHMgZmlsZSBpcyB0aGUgZW50cnkgcG9pbnQgdG8geW91ciBhcHBsaWNhdGlvbi5cbllvdSBjYW4gdXNlIHRoaXMgZmlsZSB0byBwZXJmb3JtIGFwcC1sZXZlbCBpbml0aWFsaXphdGlvbiwgYnV0IHRoZSBwcmltYXJ5XG5wdXJwb3NlIG9mIHRoZSBmaWxlIGlzIHRvIHBhc3MgY29udHJvbCB0byB0aGUgYXBw4oCZcyBmaXJzdCBtb2R1bGUuXG4qL1xuXG5pbXBvcnQgXCIuL2J1bmRsZS1jb25maWdcIjtcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gJ2FwcGxpY2F0aW9uJztcblxuLy8gdmFyIGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbi8vIGZpcmViYXNlLmluaXQoe1xuLy8gICAvLyBPcHRpb25hbGx5IHBhc3MgaW4gcHJvcGVydGllcyBmb3IgZGF0YWJhc2UsIGF1dGhlbnRpY2F0aW9uIGFuZCBjbG91ZCBtZXNzYWdpbmcsXG4vLyAgIC8vIHNlZSB0aGVpciByZXNwZWN0aXZlIGRvY3MuXG4vLyB9KS50aGVuKFxuLy8gICAgIGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuLy8gICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XG4vLyAgICAgfSxcbi8vICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBlcnJvcjogXCIgKyBlcnJvcik7XG4vLyAgICAgfVxuLy8gKTsgXG5cbnZhciBhcHBsaWNhdGlvblNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG52YXIgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbi8vIGltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5maXJlYmFzZS5pbml0KHtcbiAgLy8gT3B0aW9uYWxseSBwYXNzIGluIHByb3BlcnRpZXMgZm9yIGRhdGFiYXNlLCBhdXRoZW50aWNhdGlvbiBhbmQgY2xvdWQgbWVzc2FnaW5nLFxuICAvLyBzZWUgdGhlaXIgcmVzcGVjdGl2ZSBkb2NzLlxuICAgIG9uUHVzaFRva2VuUmVjZWl2ZWRDYWxsYmFjazogZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgIC8vIHRlbXBvcmFyaWx5IHNhdmUgaXQgdG8gYXBwbGljYXRpb24gc2V0dGluZ3MgdW50aWwgc3VjaCB0aW1lIHRoYXQgXG4gICAgICAvLyB0aGUgdXNlciBsb2dzIGluIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiA9PT4gXCIgKyB0b2tlbik7XG4gICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZygnZGV2aWNlX3Rva2VuJywgdG9rZW4pO1xuICB9LFxuICBvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgY29uc29sZS5sb2coXCJub3RpZnkgbXNnID09PiBcIiArIG1lc3NhZ2UpXG4gICAgLy8gZGlhbG9ncy5hbGVydCh7XG4gICAgLy8gICAgIHRpdGxlOiBtZXNzYWdlLnRpdGxlLFxuICAgIC8vICAgICBtZXNzYWdlOiBtZXNzYWdlLmJvZHksXG4gICAgLy8gICAgIG9rQnV0dG9uVGV4dDogXCJva1wiXG4gICAgLy8gfSk7XG4gIH0sXG59KS50aGVuKFxuICBpbnN0YW5jZSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XG4gIH0sXG4gIGVycm9yID0+IHtcbiAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcbiAgfVxuKTtcblxuZmlyZWJhc2UuYWRkT25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrKGZ1bmN0aW9uKHRva2VuKXtcblxuICBjb25zb2xlLmxvZyhcImFkZE9uUHVzaFRva2VuUmVjZWl2ZWRDYWxsYmFjayA9PT4gdG9rZW4gPT0+IFwiICsgdG9rZW4pO1xuXG59KSBcblxuXG5hcHBsaWNhdGlvbi5zdGFydCh7IG1vZHVsZU5hbWU6ICdtYWluLXBhZ2UnIH0pO1xuXG4vKlxuRG8gbm90IHBsYWNlIGFueSBjb2RlIGFmdGVyIHRoZSBhcHBsaWNhdGlvbiBoYXMgYmVlbiBzdGFydGVkIGFzIGl0IHdpbGwgbm90XG5iZSBleGVjdXRlZCBvbiBpT1MuXG4qL1xuIl19