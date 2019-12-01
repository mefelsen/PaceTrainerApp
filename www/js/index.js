/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 var app = {
     macAddress: "A4:CF:12:75:A6:56",  // get your mac address from bluetoothSerial.list
     chars: "",

 /*
     Application constructor
  */
     initialize: function() {
         this.bindEvents();
         console.log("Starting SimpleSerial app");
     },
 /*
     bind any events that are required on startup to listeners:
 */
     bindEvents: function() {
         document.addEventListener('deviceready', this.onDeviceReady, false);
         connectButton.addEventListener('touchend', app.manageConnection, false);
     },

 /*
     this runs when the device is ready for user interaction:
 */
     onDeviceReady: function() {
         // check to see if Bluetooth is turned on.
         // this function is called only
         //if isEnabled(), below, returns success:
         var listPorts = function() {
             // list the available BT ports:
             bluetoothSerial.list(
                 function(results) {
                     app.display(JSON.stringify(results));
                 },
                 function(error) {
                     app.display(JSON.stringify(error));
                 }
             );
         }

         // if isEnabled returns failure, this function is called:
         var notEnabled = function() {
             app.display("Bluetooth is not enabled.")
         }

          // check if Bluetooth is on:
         bluetoothSerial.isEnabled(
             listPorts,
             notEnabled
         );
     },
 /*
     Connects if not connected, and disconnects if connected:
 */
     manageConnection: function() {

         // connect() will get called only if isConnected() (below)
         // returns failure. In other words, if not connected, then connect:
         var connect = function () {
             // if not connected, do this:
             // clear the screen and display an attempt to connect
             app.clear();
             app.display("Attempting to connect. " +
                 "Make sure the serial port is open on the target device.");
             // attempt to connect:
             bluetoothSerial.connect(
                 app.macAddress,  // device to connect to
                 app.openPort,    // start listening if you succeed
                 app.showError    // show the error if you fail
             );
         };

         // disconnect() will get called only if isConnected() (below)
         // returns success  In other words, if  connected, then disconnect:
         var disconnect = function () {
             app.display("attempting to disconnect");
             // if connected, do this:
             bluetoothSerial.disconnect(
                 app.closePort,     // stop listening to the port
                 app.showError      // show the error if you fail
             );
         };

         // here's the real action of the manageConnection function:
         bluetoothSerial.isConnected(disconnect, connect);

     },
 /*
     subscribes to a Bluetooth serial listener for newline
     and changes the button:
 */
     openPort: function() {
         // if you get a good Bluetooth serial connection:
         app.display("Connected to: " + app.macAddress);
         // change the button's name:
         connectButton.innerHTML = "Disconnect";
         // set up a listener to listen for newlines
         // and display any new data that's come in since
         // the last newline:
         bluetoothSerial.subscribe('\n', function (data) {
             app.clear();
             app.display(data);
         });
     },

 /*
     unsubscribes from any Bluetooth serial listener and changes the button:
 */
     closePort: function() {
         // if you get a good Bluetooth serial connection:
         app.display("Disconnected from: " + app.macAddress);
         // change the button's name:
         connectButton.innerHTML = "Connect";
         // unsubscribe from listening:
         bluetoothSerial.unsubscribe(
                 function (data) {
                     app.display(data);
                 },
                 app.showError
         );
     },
 /*
     appends @error to the message div:
 */
     showError: function(error) {
         app.display(error);
     },

 /*
     appends @message to the message div:
 */
     display: function(message) {
         var display = document.getElementById("message"), // the message div
             lineBreak = document.createElement("br"),     // a line break
             label = document.createTextNode(message);     // create the label

         display.appendChild(lineBreak);          // add a line break
         display.appendChild(label);              // add the message node
     },
 /*
     clears the message div:
 */
     clear: function() {
         var display = document.getElementById("message");
         display.innerHTML = "";
     },

     serialSend: function(str) {
       bluetoothSerial.write(str, function (data) {
           app.display(data);
       },
       app.showError);

     }
 };

 /** [Member of index.js]
 * Called when start button is pressed
 */
 function start()
 {
   let str = construct();
   //console.log(validateInput());
   if(validateInput())
   {
        app.serialSend(str);
   }
   else {
     console.log("Failed to validate");
   }
   //console.log(str);
 }

 /** [Member of index.js]
 * Constructs a string which will be sent serially via bluetooth to
 * the microcontroller
 */
 function construct()
 {
   let command_str = "";
   command_str += document.getElementById("length").value;

   let num_times = document.getElementById("num_times_val").value
   //Formatting input to be 2 characters
   if(num_times.length == 1)
   {
     command_str = command_str + "0" + num_times; //0 + a number 1-9
   }
   else
   {
     command_str += num_times; //a number 10-99
   }

   command_str += document.getElementById("pace").value;
   command_str += document.getElementById("interval").value;

   let dist = document.getElementById("distance").value;
   if(dist.length == 4)
   {
     command_str += dist;
   }
   else if(dist.length == 3)
   {
     command_str = command_str + "0" + dist;
   }
   else if(dist.length == 2)
   {
     command_str = command_str + "00" + dist;
   }

   command_str += document.getElementById("startcolor").value;
   command_str += document.getElementById("racecolor").value;

   let breakout_dist = document.getElementById("slider").value;
   //Must be formatted as a 2 digit number
   if(breakout_dist.length == 1)
   {
     command_str = command_str + "0" + breakout_dist;
   }
   else
   {
     command_str += breakout_dist;
   }

   let percentage = document.getElementById("breakout_percent").value;
   //Must be formatted as a 2 digit number
   if(percentage.length == 1)
   {
     command_str = command_str + "0" + percentage;
   }
   else
   {
     command_str += percentage;
   }

   //console.log(command_str.length)
   return command_str;
 }


 /** [Member of index.js]
 * Checks that all inputs are filled out and are in a valid format
 * @post returns true if valid, false if invalid
 */
 function validateInput()
 {
   let distance = document.getElementById("distance").value;
   if(distance == "")
   {
     console.log(distance == undefined + '\n');
     return false;
   }
   let length = document.getElementById("length").value;
   if(length == "")
   {
     return false;
   }
   let num_times = document.getElementById("num_times_val").value;
   if(num_times == "" || num_times.length > 2)
   {
     return false;
   }

   let pace = document.getElementById("pace").value;
   if(pace === "" || pace.length != 8)
   {
     return false;
   }

   let interval = document.getElementById("interval").value;
   if(interval === "" || interval.length != 8)
   {
     return false;
   }

   let scolor = document.getElementById("startcolor").value;
   if(scolor == "")
   {
     return false;
   }

   let rcolor = document.getElementById("racecolor").value;
   if(rcolor == "")
   {
     return false;
   }

   let percent = document.getElementById("breakout_percent").value;
   if(percent == "" || percent.length > 2)
   {
     return false;
   }

   return true;
 }

