"use strict";
require('./lib/GpsReceivers').setup();
require('./lib/ArduinoApi').open();
const State = require('./lib/state');
require('./lib/socketIO');
 
