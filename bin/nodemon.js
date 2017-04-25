#!/usr/bin/env node
'use strict';
var cli = require('../lib/cli');
var nodemon = require('../lib/');
var options = cli.parse(process.argv);

nodemon(options);
