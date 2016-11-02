var board = ["","","","","","","","",""];
var start_square = "";
var turn = true;
var xwin = 0;
var owin = 0;
count = 0;
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





$('.square').click(function(){
  $(".the_winner").hide();
  if (turn){
    player = 'X';
  }
  else{
    player = 'O';
  }
  if ($(this).text() === start_square){
    $(this).text(player);
    var position = parseInt($(this).attr('name'));
    console.log(position);
    board[position] = player;
    var active_board = chunk(board,3);
    count += 1;
    turn = !turn;

    function tictactoe(mat) {
      // Diagonals
        if (matches(mat[0][0],mat[1][1],mat[2][2])) {
          return mat[1][1];
        }
        if (matches(mat[0][2],mat[1][1],mat[2][0])) {
          return mat[1][1];
        }

        // Horizontals & Verticals in the loop at the same time.
        for (var i=0;i<3;i++){
          if (matches(mat[i][0],mat[i][1],mat[i][2])){
            return mat[i][0];
          }
          else if (matches(mat[0][i],mat[1][i],mat[2][i])){
            return mat[0][i];
          }
        }
        // If none of the previous cases match.
        return null;
    }

    function matches(a,b,c){
      return a === b && b === c && b!== '';
    }
    console.log('active_board', JSON.stringify(active_board));
     if (tictactoe(active_board)){
        $(".the_winner").text("The Winner is: " + tictactoe(active_board)).show();
        if (tictactoe(active_board) === 'X'){
          xwin += 1;
          $('.x_score').text(xwin);
        } else{
          owin += 1;
          $('.o_score').text(owin);
        }
        board = ["","","","","","","","",""];
        turn = true;
        $('.square').text('');

     }
     if (count === 9){
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
console.log(board);
