const net = require("net");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541"
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", function (data) {
    console.log(data);
  })
  return conn;
};

console.log("Connecting ...");
connect();

