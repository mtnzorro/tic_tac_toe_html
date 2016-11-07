function Board(){
  this.topLeft = '';
  this.topMid = '';
  this.topRight = '';
  this.midLeft = '';
  this.mid = '';
  this.midRight = '';
  this.btmLeft = '';
  this.btmMid = '';
  this.btmRight = '';
}

Board.prototype.tictactoe = function(position){
  if (
   (this.topLeft === this.topMid && this.topMid === this.topRight) ||
   (this.btmLeft === this.btmMid && this.btmMid === this.btmRight) ||
   (this.topLeft === this.midLeft && this.midLeft === this.btmLeft) ||
   (this.topRight === this.midRight && this. midRight === this.btmRight) ||
   (this.midLeft === this.mid && this.mid === this.midRight) ||
   (this.topMid === this.mid && this.mid === this.btmMid) ||
   (this.topLeft === this.mid && this. mid === this.btmRight) ||
   (this.btmLeft === this.mid && this.mid === this.topRight)
  ) {
   return position;

  }
    console.log('poop');
  return null;
};

board = new Board();
var turn = true;
var xwin = 0;
var owin = 0;
count = 0;

$('.square').click(function(){
  $(".the_winner").hide();
  if (turn){
    player = 'X';
  }
  else{
    player = 'O';
  }
  if ($(this).text() === ''){
    $(this).text(player);
    var position = $(this).attr('name');
    console.log("position" + position);
    board[position] = player;
    console.log(board);
    var tictactoe_check = board.tictactoe(position);
    console.log("tictactoe_check " + tictactoe_check );
     if (tictactoe_check){
       console.log('we have a winner: '+player);
        $(".the_winner").text("The Winner is: " + tictactoe_check);
        if (tictactoe_check === 'X'){
          xwin += 1;
          $('.x_score').text(xwin);
        } else{
          owin += 1;
          $('.o_score').text(owin);
        }
        // board = new Board();
        // turn = true;
        // count = 0;
        // $('.square').text('');

     }
     if (count === 9){
       $(".the_winner").text("The Winner is: NO ONE!").show();
       board = new Board();
       turn = true;
       $('.square').text('');
       count = 0;
     }
}
count += 1;
turn = !turn;
// else if ($(this).text() === 'O'){
//   $(this).text('X');
// }
// else{
//   $(this).text('');
// }
});
