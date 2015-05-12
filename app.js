var boxes = document.getElementsByClassName('box');
var turn = 0;
var p1Score = 0;
var p2Score = 0;

document.getElementById("p1score").innerHTML=p1Score;
document.getElementById("p2score").innerHTML=p2Score;



function takeTurns(){
	turn++;
	if (turn % 2 === 0){
		return "X";
	} else {
		return "O";
	}
}

chooseBox();

function chooseBox(){
	for(var i = 0; i < boxes.length; i++){
		boxes[i].addEventListener('click', function(){
			if (this.innerHTML == "X" || this.innerHTML == "O"){
				alert("Pick another box!")
			} else {
				this.innerHTML=takeTurns();
				chooseWinner();
			}
		});
	}
}

function chooseWinner(){
	if  ((boxes[0].innerHTML==="X" && boxes[1].innerHTML==="X" && boxes[2].innerHTML==="X")||
		 (boxes[3].innerHTML==="X" && boxes[4].innerHTML==="X" && boxes[5].innerHTML==="X")||
		 (boxes[6].innerHTML==="X" && boxes[7].innerHTML==="X" && boxes[8].innerHTML==="X")||
		 (boxes[3].innerHTML==="X" && boxes[4].innerHTML==="X" && boxes[5].innerHTML==="X")||
		 (boxes[0].innerHTML==="X" && boxes[3].innerHTML==="X" && boxes[6].innerHTML==="X")||
		 (boxes[1].innerHTML==="X" && boxes[4].innerHTML==="X" && boxes[7].innerHTML==="X")||
		 (boxes[3].innerHTML==="X" && boxes[4].innerHTML==="X" && boxes[5].innerHTML==="X")||
		 (boxes[2].innerHTML==="X" && boxes[5].innerHTML==="X" && boxes[8].innerHTML==="X")||
		 (boxes[0].innerHTML==="X" && boxes[4].innerHTML==="X" && boxes[8].innerHTML==="X")||
		 (boxes[2].innerHTML==="X" && boxes[4].innerHTML==="X" && boxes[6].innerHTML==="X"))
		{
			p2Score++;
			document.getElementById("p2score").innerHTML=p2Score;
			alert("X Wins!");
			reset();
		
	} else if (
		(boxes[0].innerHTML==="O" && boxes[1].innerHTML==="O" && boxes[2].innerHTML==="O")||
		(boxes[3].innerHTML==="O" && boxes[4].innerHTML==="O" && boxes[5].innerHTML==="O")||
		(boxes[6].innerHTML==="O" && boxes[7].innerHTML==="O" && boxes[8].innerHTML==="O")||
		(boxes[3].innerHTML==="O" && boxes[4].innerHTML==="O" && boxes[5].innerHTML==="O")||
		(boxes[0].innerHTML==="O" && boxes[3].innerHTML==="O" && boxes[6].innerHTML==="O")||
		(boxes[1].innerHTML==="O" && boxes[4].innerHTML==="O" && boxes[7].innerHTML==="O")||
		(boxes[3].innerHTML==="O" && boxes[4].innerHTML==="O" && boxes[5].innerHTML==="O")||
		(boxes[2].innerHTML==="O" && boxes[5].innerHTML==="O" && boxes[8].innerHTML==="O")||
		(boxes[0].innerHTML==="O" && boxes[4].innerHTML==="O" && boxes[8].innerHTML==="O")||
		(boxes[2].innerHTML==="O" && boxes[4].innerHTML==="O" && boxes[6].innerHTML==="O"))

		{
			p1Score++;
			document.getElementById("p1score").innerHTML=p1Score;
			alert("O Wins!");
			reset();
	} else {
		catsGame();
	}
}

	function catsGame(){
		if (turn == 9) {
			alert("Cat's Game!");
			reset();
		}
	}


	function reset(){
		for(var i = 0; i < boxes.length; i++){
			boxes[i].innerHTML = " ";
			turn = 0;
		}
				
	}













