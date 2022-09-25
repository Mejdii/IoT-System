// MQTT Publisher
var mqtt=require('mqtt')
var client=mqtt.connect('mqtt://localhost:1884')
var topic='Device-n'
var crypto = require('crypto')


console.log('[1] Start the weighing process')
const prompt = require('prompt-sync')();
var input_command = prompt('Please input a command to the instrument: ');
crypto.getHashes() 

function checksum(str, algorithm, encoding) {
  return crypto
    .createHash(algorithm || 'md5')
    .update(str, 'utf8')
    .digest(encoding || 'hex')
}
if (input_command==1) {
//Start measuring the weight.
//communicate with the instrument to get a weight like through a serial communication, it depends on the situation
//If it is supposed to be in the scope, I can define a getweight function that gets the weight through serial
//At the moment I am gonna generate a static value
var weight=5
//var checksum_of_wight_value= checksum(weight)
var msg="The weigth is ${weight}g and its checksum is ${checksum_of_wight_value"
const regexp = /\${([^{]+)}/g;
let message = msg.replace(regexp, function(ignore, key){
    return eval(key);
});
client.on('connect', ()=>{
    client.publish(topic, message)
    console.log('Message sent!', message)
    process.exit(1)

    })
} else {

    console.log('Command not available')
    process.exit(1)

}


