var board = ["","","","","","","","",""];
var start_square = "";
var turn = true;
var xwin = 0;
var owin = 0;
var count = 0;
var remover
var player_positions = [0,1,2,3,4,5,6,7,8];
var ai_positions = [];
function chunk(arr, size) {
    var mainArray = [];
    var subArray = [];
    for (var i = 0; i < arr.length; i++) {
        subArray.push(arr[i]);
        if ((i + 1) % size === 0 || i === (arr.length - 1)) {
            mainArray.push(subArray);
            subArray = [];
        }
    }
    return mainArray;
}

shuffle = function(arr){
var m = arr.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
 t = arr[m];
 arr[m] = arr[i];
 arr[i] = t;
}
return arr;
};

$('.square').click(function(){
  $(".the_winner").hide();
    player = 'X';
  if ($(this).text() === start_square){
    $(this).text(player);
    var position = parseInt($(this).attr('name'));
    // console.log(position);
    for (i = 0; i < player_positions.length; i++){
      if (player_positions[i] === position){
        player_positions.splice(position,1);
        console.log("The splice! Yes.");
      }
    }
    ai_positions = player_positions;
    console.log("ai position pre shuffle:" + ai_positions);
    shuffle(ai_positions);
    console.log("ai position post shuffle:" + ai_positions);
    remover = ai_positions[ai_positions.length - 1];
    for (i = 0; i < player_positions.length; i++){
      if (player_positions[i] === remover){
        player_positions.splice(position,1);
        console.log("The splice again! Yes.");
      }
    }
    ai_guess = ai_positions.pop();
    ai_positions = player_positions;
    console.log("ai guess:" + ai_guess);
    board[position] = player;
    count += 1;

ai = 'O';

$('#'+ai_guess).text(ai);
// position = parseInt($('#'+ai_guess).attr('name'));
board[ai_guess] = ai;
count += 1;
player = 'X';
var active_board = chunk(board,3);
// console.log(active_board);
console.log("Count = " + count);

function tictactoe(board) {

function check(player) {
var topLeft = board[0][0] === player,
   topMid = board[0][1] === player,
   topRight = board[0][2] === player,
   midLeft = board[1][0] === player,
   mid = board[1][1] === player,
   midRight = board[1][2] === player,
   btmLeft = board[2][0] === player,
   btmMid = board[2][1] === player,
   btmRight = board[2][2] === player;

if (
 (topLeft && topMid && topRight) ||
 (btmLeft && btmMid && btmRight) ||
 (topLeft && midLeft && btmLeft) ||
 (topRight && midRight && btmRight) ||
 (midLeft && mid && midRight) ||
 (topMid && mid && btmMid) ||
 (topLeft && mid && btmRight) ||
 (btmLeft && mid && topRight)
) {
 return player;
}
return null;
}

var x = check('X'),
 y = check('O');
return x || y;
}
    console.log('active_board', JSON.stringify(active_board));
     if (tictactoe(active_board)){
       console.log('winner is ', tictactoe(active_board));
       if (xwin === 2){
        $('h2').addClass('animated bounce');
      }

        $(".the_winner").text("The Winner is: " + tictactoe(active_board)).show();
        if (tictactoe(active_board) === 'X'){
          xwin += 1;
          $('.x_score').text(xwin);
          // $('.square').prop("disabled", true);
        } else{
          owin += 1;
          $('.o_score').text(owin);
          // $('.square').prop("disabled", true);
        }
        board = ["","","","","","","","",""];
        turn = true;
        active_board = [];
        $('.square').text('');
        count = 0;

     } else {
       console.log('no winner');
     }
     if (count > 9){
       $(".the_winner").text("The Winner is: NO ONE!").show();
       board = ["","","","","","","","",""];
       turn = true;
       active_board = [];
       $('.square').text('');
       count = 0;
     }
}
// else if ($(this).text() === 'O'){
//   $(this).text('X');
// }
// else{
//   $(this).text('');
// }
});
