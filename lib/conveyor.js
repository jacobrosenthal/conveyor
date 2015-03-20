'use strict';


function Conveyor(){

  this.boards = {};

}

Conveyor.prototype.getBoard = function getBoard(name){
  if(!this.boards[name]){
    throw new Error('Board does not exist');
  }

  //todo clone so changes dont propagate
  return this.boards[name];
};

Conveyor.prototype.listBoards = function listBoards(){

  //todo clone so changes dont propagate
  return this.boards;
};

Conveyor.prototype.addBoard = function addBoard(name, board){
  if(this.boards[name]){
    throw new Error('Board exists');
  }

  //todo validate board object to some schema
  this.boards[name] = board;
};

Conveyor.prototype.removeBoard = function removeBoard(name){
  if(!this.boards[name]){
    throw new Error('Board does not exist');
  }

  delete this.boards[name];
};


module.exports = Conveyor;
