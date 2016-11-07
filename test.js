function Board(){
  this.topLeft;
  this.topMid;
  this.topRight;
  this.midLeft;
  this.mid;
  this.midRight;
  this.btmLeft;
  this.btmMid;
  this.btmRight;
}

Board.prototype.tictactoe = function(position){
  console.log("topl" + this.topLeft);
  console.log("topm" + this.topMid);
  console.log("topr" +this.topRight);

  if (
   (this.topLeft && this.topMid && this.topRight) ||
   (this.btmLeft && this.btmMid && this.btmRight) ||
   (this.topLeft && this.midLeft && this.btmLeft) ||
   (this.topRight && this.midRight && this.btmRight) ||
   (this.midLeft && this.mid && this.midRight) ||
   (this.topMid && this.mid && this.btmMid) ||
   (this.topLeft && this.mid && this.btmRight) ||
   (this.btmLeft && this.mid && this.topRight)
  ) {
    console.log('playin');
   return position || position2;

  }
    console.log('poop');
  return null;
};

board = new Board();
board.topLeft = "";
board.topMid = "X";
board.topRight = "X";
board.tictactoe("X", "O");
