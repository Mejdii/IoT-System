var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1884')
var topic = 'Device1'
var message = 'Hello World!'

client.on('connect', ()=>{
    setInterval(()=>{
        client.publish(topic, message)
        console.log(message)
    }, 5000)
})