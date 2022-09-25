
const randomNumber = Math.random().toString(10).slice(3);

const mqttIdentifier = Date.now().toString() + randomNumber.slice(-5)
const clientID = `mqtt_${Number(mqttIdentifier).toString(36)}`; 

console.log(clientID
    
    )

const { randomUUID } = require('crypto');
console.log(randomUUID());
const crypto = require("crypto");

const id = crypto.randomBytes(16).toString("hex");

console.log(id)

//Detecting a disconnection
MqttClient.prototype._cleanUp = function() {
    this.conn.disconnect();
    this.stream.end();
    if (this.pingTimer !== null) {
      clearInterval(this.pingTimer);
      this.pingTimer = null;
    }
  };