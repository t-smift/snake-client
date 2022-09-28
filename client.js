const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", function() {
    console.log("Connected to server!");
    conn.write("Name: Tay");
    // conn.write("Move: up");
  })

  conn.on("data", function (data) {
    console.log(data);
  })
  
  return conn;
};
module.exports = {
  connect,
};