"use strict";

const fs = require("node:fs");
const express = require("express");
const { fibo } = require("./fibo.cjs");

console.log(fibo(5));
