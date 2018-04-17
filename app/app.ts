/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import "./bundle-config";
import * as application from 'application';

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
    onPushTokenReceivedCallback: function(token) {
      // temporarily save it to application settings until such time that 
      // the user logs in for the first time
      console.log("token ==> " + token);
      applicationSettings.setString('device_token', token);
  },
  onMessageReceivedCallback: function(message) {
    console.log("notify msg ==> " + message)
    // dialogs.alert({
    //     title: message.title,
    //     message: message.body,
    //     okButtonText: "ok"
    // });
  },
}).then(
  instance => {
    console.log("firebase.init done");
  },
  error => {
    console.log(`firebase.init error: ${error}`);
  }
);

firebase.addOnPushTokenReceivedCallback(function(token){

  console.log("addOnPushTokenReceivedCallback ==> token ==> " + token);

}) 


application.start({ moduleName: 'main-page' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
