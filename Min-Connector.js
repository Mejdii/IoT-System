// using a node.js mqtt server
const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
MQTT_Port = 1884
var crypto = require('crypto')
function checksum(str, algorithm, encoding) {
    return crypto
      .createHash(algorithm || 'md5')
      .update(str, 'utf8')
      .digest(encoding || 'hex')
  }

crypto.getHashes()
server.listen(MQTT_Port, function () {
  console.log('Aedes MQTT server started and listening on port ', MQTT_Port)
})
server.close = function close(cb) {
    server.aedes.close(() => {
      log.info('server is closed');
      cb();
    });
  
};
//Establish a secure connection between devices and the Mini-Connector.
  server.setupAuthentication = function setupAuthentication() {
    server.aedes.authenticate = (client, username, password, cb) => {
      if (username && typeof username === 'string' && username === config.mqtt.username) {
        if (password && typeof password === 'object' && password.toString() === config.mqtt.password) {
          cb(null, true);
          log.info(`Client: ${client} authenticated successfully`);
        }
      } else {
        cb(false, false);
      }
    };
  };
