// using a node.js mqtt broker
const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
MQTT_Port = 1884
server.listen(MQTT_Port, function () {
  console.log('Aedes MQTT server started and listening on port ', MQTT_Port)
})
