// MQTT Subscriber
var mqtt=require('mqtt')
var client=mqtt.connect('mqtt://localhost:1884')
var topic= 'Device2'
var message='Hello from Majdi'

client.on('connect', ()=>{
    setInterval(()=>{
        client.publish(topic,message)
        console.log('Message sent',message);
    },3000)

})

