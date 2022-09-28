const { connect } = require('./client');
const { setupInput } = require("./input");

const net = require("net");
const readline = require('readline');

console.log("Connecting ...");
setupInput(connect());
