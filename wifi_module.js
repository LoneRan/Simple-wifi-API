

// npm package  https://www.npmjs.com/package/node-wifi

// Running the command

// https://www.npmjs.com/package/node-wifi
// node index.js


// Get request
// /getwifi  returns all avaialble wifis to connect
// Post request
// /connect pst request gets ssid and password from web/ desktop and connects to wifi


'use strict';
const wifi = require('node-wifi');





//   Displays all available nearby wifis
  // Scan networks
exports.list_all_wifi = function(req,res){
  wifi.init({
    iface: null 
  });
  wifi.scan((error, networks) => {
    if (error) {
      console.log("error scanning networks");
      console.log(error);
    } else {
      console.log("available networks: ");
      console.log(networks);
      res.json(networks);
    }
  });
}


  
 // trys to connect with wifi with name Utkarsh and password Utkarshwifi
exports.conenect_to_wifi = function(req,res){
  var ssid_para = req.params.Ssid;
  console.log(ssid_para);
  var password_para = req.body.Password;
  console.log(password_para);
  wifi.init({
    iface: null 
  });
  wifi.connect({ ssid: ssid_para, password: password_para }, error => {
    if (error) {
      console.log("failed to connect with wifi");
      console.log(error);
    }
    else { 
    console.log("Wifi connected");
    console.log('Connected');
    }
  });
  res.json({message: 'password receive successfully'});
}
