#!/usr/bin/env node


var fs = require('fs');
var cp = require('child_process');

var a = "test";

console.log("this is just a " + a);

// var output = cp.spawnSync(
//   'youtube-dl',
//   ['-f', 'mp4', '-o', '/Volumes/mk3/output_001.mp4', 'https://www.youtube.com/watch?v=_keq3pOmxlM'],
//   {
//     cwd: process.cwd(),
//     env: process.env,
//     stdio: 'pipe',
//     encoding: 'utf-8'
//   }
// );

var output = cp.spawnSync(
  'youtube-dl',
  ['-F', 'https://www.youtube.com/watch?v=_keq3pOmxlM'],
  {
    cwd: process.cwd(),
    env: process.env,
    stdio: [process.stdin, process.stdout, process.stderr],
    encoding: 'utf-8'
  }
);

// console.log(output.output);
console.log("did that work?");
