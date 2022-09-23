
// MQTT subscriber
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1884')
var topic = '#'

client.on('message', (topic, message)=>{
    message = message.toString()
    console.log('The data stream comes from  ' + topic +' ' + message)
})

client.on('connect', ()=>{
    client.subscribe(topic)
})

