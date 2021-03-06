'use strict';

var runCommand = require('../utils/run-command');
var path       = require('path');
var linkEnv    = require('../tasks/link-environment');
var Project    = require('../models/project');

module.exports = function(env, platform) {

  var command = 'cordova build ' + platform;

  var msg = 'Building cordova project for platform ' + platform
              + ' with environment ' + env;

  var project = Project.closest();
  linkEnv(project, 'dist');

  return runCommand(command, msg, {
    cwd: path.join(project.get('root'), 'cordova')
  });
};
