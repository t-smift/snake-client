const {connect} = require('./client')

const net = require("net");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Connecting ...");
connect();

