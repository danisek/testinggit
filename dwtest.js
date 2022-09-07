//JavaScript Document

// function letsgo() {
// 	var fname = "Suleiman";
// 	const lname = "Trinden";
// 	console.log(fname +' ' +lname);
// }
// 	letsgo();
	
// console.log("hi yo");

var count=0;
var noThumb;
var epass
var clickedMsg
var sum
let cardArray
let totalCard
let totalSum

function counter(){
	
	count+=1	
	clickedMsg = "Clicked " + `<strong>${count}</strong>`+ " times";
	document.getElementById('increaseCount').innerHTML=clickedMsg;
	if (clickedMsg) {
		noThumb=document.getElementById("thumbs").innerHTML="";
	}
	//return count;			
	if (count > 4) {
		epass = "E don pass "+ `<b>4</b>`+ " o, it is now " + `<b style="color: red;">${count}</b>`+" clicks!!";
		document.getElementById('increaseCount').innerHTML=epass;	
	}

}


function saveCount() {
		var saved = count;
		document.getElementById("totalCtd").innerHTML="The total count is "+`<b style="color: blue &nbsp;">${count}</b>`
		noThumb=setTimeout(function() {document.getElementById("thumbs").innerHTML=`&#32;&#128077;&#127998`}, 1000);
}
function reset() {
	var resetit=count=0;
	document.getElementById('increaseCount').innerHTML="Reset to " + `<strong>${resetit}</strong>` + " times clicked!!";
	document.getElementById("thumbs").innerHTML="";
}

//-----------------------------Calculator-------------------------------------------------
		
function add() {
	var num1 = document.getElementById("number1").value;
	var num2 = document.getElementById("number2").value;
	var addition = parseFloat(num1) + parseFloat(num2); // OR +num1++num2

	document.getElementById("result").innerHTML=addition
}	

function multiply() {
	var num1 = document.getElementById("number1").value;
	var num2 = document.getElementById("number2").value;
	var multiply = num1 * num2;
	document.getElementById("result").innerHTML=multiply;
}

function divide() {
	var num1 = document.getElementById("number1").value;
	var num2 = document.getElementById("number2").value;
	if (typeof(num1)==NaN) {
		document.getElementById("result").innerHTML="Please enter a number"
	}else{
	var divide = num1 / num2;
	document.getElementById("result").innerHTML=divide;}
}

function subtract() {
	var num1 = document.getElementById("number1").value;
	var num2 = document.getElementById("number2").value;
	var subtract = num1 - num2;
	document.getElementById("result").innerHTML=subtract;
}

//------------------------Black Jack--------------------------------------------------------------

function startbtn(){	
let firstcard= Math.floor(Math.random()*13)+1; //more secure, window.crypto.getRandomValues()
let secondcard = Math.floor(Math.random()*13)+1;
cardArray=[firstcard, secondcard];
sum=Math.floor(cardArray[0]+cardArray[1]);

//sum = Math.floor(cardArray[0] + cardArray[1]);
console.log("startbutton "+cardArray[1]);
console.log("startbutton "+cardArray[0]);
console.log("starbuttonSum "+ sum);

if (document.getElementById("show").setAttribute("hidden", false)) {
	document.getElementById("show").setAttribute("hidden", true);
}

//console.log(firstcard+' + '+secondcard+' = '+sum);
let messageout=document.getElementById('startbutton');
let summed=document.getElementById("cardSum");
let cards=document.getElementById("cardsDrn")
let theand=`<span class="theand">&nbsp;and </span>`
if (sum < 21) {
	messageout.innerHTML=("Less than 21. Do you want another card:");
	summed.innerHTML=sum;
	cards.innerHTML=firstcard+theand +secondcard;
	document.getElementById("show").removeAttribute("hidden");
	document.getElementById("newcardBtn").removeAttribute("hidden");
} else if(sum === 21){
	messageout.innerHTML="Good job"
	summed.innerHTML=sum;
	cards.innerHTML=firstcard+ theand+secondcard;
	document.getElementById("show").setAttribute("hidden", true);
	document.getElementById("newcardBtn").setAttribute("hidden", true)
} else{
	messageout.innerHTML="More than 21. Sorry boss, see ya!"
	summed.innerHTML=sum;
	cards.innerHTML=firstcard+theand+secondcard;
	document.getElementById("show").setAttribute("hidden", true);
	document.getElementById("newcardBtn").setAttribute("hidden", true)

}

if (cardArray.length===3){
	cardArray.pop();
	
}
document.getElementById('CardNew').innerText="";
console.log(cardArray)
return cardArray;

}

function newCard(){
totalCard=document.getElementById("CardNew");
let summed=document.getElementById("cardSum");
if (cardArray.length===3) {
	cardArray.pop();
}
cardArray.push(Math.floor(Math.random()*13)+1);
let totalSum =0
for (var i = 0; i < cardArray.length; i++) {
	totalSum+=cardArray[i]
	summed.innerHTML=totalSum;
	totalCard.innerHTML=" "+ cardArray[2]
if (totalSum>21) {
	document.getElementById("startbutton").innerHTML="Sorry. E don Finish for You";
	document.getElementById("newcardBtn").setAttribute("hidden", true);

}else if (totalSum===21) {
	document.getElementById("startbutton").innerHTML="Yeaah "+totalSum+" YOU WIN"
	}

console.log(cardArray)	
}
console.log(cardArray[2])
console.log("i work "+totalSum)
}



let myArray=["Front Desk GA", 
			"Systems Manager", 
			"Sales Manager", 
			"Director of Sales & Marketing"];
const otherArray={name: "toyin", sname: "sekoni"}
myArray.push("Operations Manager")
myArray.pop("nothing")

console.log(myArray[0]+" and "+ myArray[2]);
console.log("the number of indexes in the array"+" = "+myArray.length);
console.log(otherArray.name);
console.log(otherArray["sname"]);
console.log(myArray)

console.log(startbtn())
console.log(newCard())

//-----------------------------Nodes----------------------------------------
let x = document.getElementById("secbody")
let y = document.querySelector('#secbody')
let z = document.querySelector('#lngbtns')
function mouseover(){
	let redColor = Math.floor(Math.random()*255)
	let blueColor = Math.floor(Math.random()*255)
	let greenColor = Math.floor(Math.random()*255)
	let diffColor = `rgb(${redColor}, ${blueColor}, ${greenColor})`
	document.getElementById("testa").innerHTML=diffColor
	x.style.backgroundColor=diffColor
}; 
z.addEventListener("click",function (){                   
//document.getElementById("lngbtns").innerHTML=document.getElementById("kai").firstChild.nodeName;
                                              
let sabi=y.children.item(0).appendChild(document.createElement("button"))
sabi.textContent=nameBtn()
})
let numonBtn = 0
function nameBtn(){
  numonBtn++
  return "Button "+numonBtn
};console.log(numonBtn)







// setTimeout(function() {
// 			console.log(plus)}, 1000);



	