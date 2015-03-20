'use strict';


function Conveyor(){

  this.boards = {};

}

Conveyor.prototype.getBoard = function getBoard(name, cb){
  if(!this.boards[name]){
    return cb(new Error('Board does not exist'));
  }

  //todo clone so changes dont propagate
  return cb(null, this.boards[name]);
};

Conveyor.prototype.listBoards = function listBoards(cb){

  //todo clone so changes dont propagate
  return cb(null, this.boards);
};

Conveyor.prototype.addBoard = function addBoard(name, board, cb){
  if(this.boards[name]){
    return cb(new Error('Board exists'));
  }

  //todo validate board object to some schema
  this.boards[name] = board;
  return cb();
};

Conveyor.prototype.removeBoard = function removeBoard(name, cb){
  if(!this.boards[name]){
    return cb(new Error('Board does not exist'));
  }

  delete this.boards[name];
  return cb();
};


module.exports = Conveyor;
