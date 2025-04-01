var MikroNode = require("mikronode");

var host = "45.115.113.103";
var port = 8724;

var Device = new MikroNode(host, port);
Device.connect()
  .then(([login]) => login("admin", "password"))
  .then(function (conn) {
    var chan = conn.openChannel();
  });

module.exports = Device;
