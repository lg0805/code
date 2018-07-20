/*
	功能：
	B列显示1-15，I列显示16-30，N列31-45，G列46-60，O列61-75

	相关知识：
	Math.floor(3.55);	=>3 返回小于等于结果的最大整数
	Math.ceil(3.55);	=>4 返回大于等于结果的最大整数
	Math.rand();		=>返回0-1之间的随机数
	Math.rand()*75+1;	=>返回1-75之间的随机数
	Math.round(3.55);	=>四舍五入
	Math.sqrt(4);		=>平方根
	console.log()会在浏览器控制台打印出信息。
	console.dir()可以显示一个对象所有的属性和方法。
 */
window.onload = initAll;
var usedNums = new Array(76);

function initAll(){
		document.getElementById("reload").onclick = anotherCard;
		newCard();
}

function anotherCard(){
	for (var i=1; i<usedNums.length; i++){
		usedNums[i]=false;
	}

	newCard();
	return false;
}

function newCard(){
	for (var i=0; i<24; i++){
		setSquare(i);
	}
}


function setSquare(thisSquare){

	var currSquare = "square" + thisSquare;
	var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
	var colBasis = colPlace[thisSquare] * 15;

	var newNum;

	do{
		newNum =colBasis + getNewNum() +1
	}
	while(usedNums[newNum]);
	// do ... while(condition) 条件为假时便终止循环

	usedNums[newNum] = true;
	document.getElementById(currSquare).innerHTML = newNum;

	document.getElementById(currSquare).className = "";
	document.getElementById(currSquare).onmousedown = toggleColor;
}

function getNewNum(){
	return Math.floor(Math.random() * 15);
}

// 获取鼠标事件对象
function toggleColor(evt){

	if(evt){
		// console.dir(evt);
		var thisSquare = evt.target;	// Chrome FF
	} else {
		var thisSquare = window.event.srcElement;	// IE
	}

	if(thisSquare.className == ""){
		thisSquare.className = 'pickedBG';
	} else {
		thisSquare.className = "";
	}
	checkWin();
}

// 判断获胜组合
function checkWin(){

 
	var winningOption = -1;
	var setSquares = 0;
	var winners = new Array(31, 992, 15360, 507904, 541729, 557328, 1083459, 2162820, 4329736, 8519745, 8659472, 16252928);

	for(var i=0; i<24; i++){
		
		var currSquare = "square" + i;
		if (document.getElementById(currSquare).className != "") {
			document.getElementById(currSquare).className = "pickedBG";
			setSquares = setSquares | Math.pow(2,i);
		}
	}

	for(var i=0; i<winners.length; i++){
		if((winners[i] & setSquares) == winners[i]){
			winningOption = i;
		}
	}

	if(winningOption > -1){
		for(var i=0; i<24; i++){
			if(winners[winningOption] & Math.pow(2,i)){
				currSquare = "square" + i;
				document.getElementById(currSquare).className = "winningBG";
			}
		}
	}
}