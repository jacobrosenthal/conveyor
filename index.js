'use strict';

var Conveyor = require('./lib/conveyor');

function conveyor(app, opts, cb){

  var namespace = opts.namespace || 'conveyor';

  var space = new Conveyor();

  app.expose(namespace, space);

  cb();
}

module.exports = conveyor;
