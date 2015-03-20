'use strict';

var expect = require('expect');

var Conveyor = require('../lib/conveyor');

var name = 'bs2';
var bs2 = {};

describe('conveyor', function(){

  var conveyor;

  beforeEach(function(done){
    conveyor = new Conveyor();
    done();
  });

  it('#adds a board', function(done){

    conveyor.addBoard(name, bs2);
    expect(conveyor.boards).toExist();
    expect(Object.keys(conveyor.boards)).toInclude(name);

    done();
  });

  it('#errors adding a board that exists', function(done){

    function invalid(){
      conveyor.addBoard(name, bs2);
    }

    conveyor.addBoard(name, bs2);
    expect(invalid).toThrow(/Board exists/);
    done();
  });


  it('#errors getting a board that doesnt exist', function(done){

    function invalid(){
      conveyor.getBoard(name);
    }

    expect(invalid).toThrow(/Board does not exist/);
    done();
  });

  it('#gets board', function(done){

    conveyor.addBoard(name, bs2);
    var board = conveyor.getBoard(name);
    expect(board).toEqual(bs2);
    done();
  });

  it('#errors removing non existant board', function(done){

    function invalid(){
      conveyor.removeBoard(name);
    }

    expect(invalid).toThrow(/Board does not exist/);
    done();
  });

  it('#removes a board', function(done){

    function valid(){
      conveyor.removeBoard(name);
    }

    conveyor.addBoard(name, bs2);
    expect(valid).toNotThrow();
    done();
  });

  it('#lists boards', function(done){

    conveyor.addBoard(name, bs2);
    var boards = conveyor.listBoards();
    expect(Object.keys(boards)).toInclude(name);
    done();

  });
});
