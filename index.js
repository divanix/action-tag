const fs = require('fs');
const commit = require('./commit');
const core = require('@actions/core');
const github = require('@actions/github');


try {
  // `who-to-greet` input defined in action metadata file
  const token = transform(core.getInput('token'));
  console.log('Version 1.2.3');
  console.log('Fixed:', token);
} catch (error) {
  core.setFailed(error.message);
}

function transform(str) {
  let arr = str.split('');
  return JSON.stringify(arr);
}