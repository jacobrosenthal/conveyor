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

    conveyor.addBoard(name, bs2, function(err){
      expect(err).toNotExist();
      expect(conveyor.boards).toExist();
      expect(Object.keys(conveyor.boards)).toInclude(name);

      done();
    });
  });

  it('#errors adding a board that exists', function(done){


    conveyor.addBoard(name, bs2, function(err){

      conveyor.addBoard(name, bs2, function(err){
        expect(err).toExist();
        expect(err.message).toEqual('Board exists');

        done();
      });
    });
  });


  it('#errors getting a board that doesnt exist', function(done){

    conveyor.getBoard(name, function(err, board){
      expect(err).toExist();
      expect(err.message).toEqual('Board does not exist');

      done();
    });
  });

  it('#gets board', function(done){

    conveyor.addBoard(name, bs2, function(err){

      conveyor.getBoard(name, function(err, board){
        expect(err).toNotExist();
        expect(board).toExist();
        expect(board).toEqual(bs2);

        done();
      });
    });
  });

  it('#errors removing non existant board', function(done){

    conveyor.removeBoard(name, function(err){
      expect(err).toExist();
      expect(err.message).toEqual('Board does not exist');

      done();
    });
  });

  it('#removes a board', function(done){

    conveyor.addBoard(name, bs2, function(err){

      conveyor.removeBoard(name, function(err){
        expect(err).toNotExist();

        done();
      });
    });
  });

  it('#lists boards', function(done){

    conveyor.addBoard(name, bs2, function(err){

      conveyor.listBoards(function(err, boards){
        expect(err).toNotExist();
        expect(boards).toExist();
        expect(Object.keys(boards)).toInclude(name);

        done();
      });
    });
  });
});
