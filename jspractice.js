
if (typeof window !=="undefined") {
	console.log("great on browser")
}else{
	try{
	

var toyin ="10"
var check = isNaN(toyin)? "Yes it is" : "No it's not"
console.log(check)

function greetUser(greeting, name){
	litera=`${greeting+name}`
	console.log(litera)
}
greetUser("How are you ","Charlie"+"?")

function getFirst(arr){
	return arr[0]
}
console.log(getFirst(["This", "isn't", "fun"]))

const htmlbody = document.querySelector("body");
//immediately invoked function -(function functionname(){}())
(function chgColor(){
	var colors=["green", "red", "blue","brown","cyan","yellow","orange","purple"];
	var randomColors=Math.floor(Math.random()*colors.length);
	var colorPicked = colors[randomColors];
	htmlbody.style.backgroundColor=colorPicked;
	console.log("this is random: "+randomColors+" "+colorPicked)
})()
//chgColor();

//.textContent
// var count=0;
// for(i=0; i<10; i++){
// count+=i;
// console.log(setTimeout(function(){console.log(i++)},1000));
// //console.log(i);
// }
// //console.log(setTimeout(function(){ console.log(i);}},1000);
// console.log("The total is: "+count);

// let card = ["Hiya ","would ","you ","like ","some?"];
// for (var p=0; p < card.length; p++){
// console.log(card[p]);
// };

// let racer1 = 25;
// let racer2 = 30;

// function racing(){
// 	if (racer1 < racer2) {
// 		return "racer2 is faster"
// 	} else{
// 		console.log('racer1 fast pass')
// 	}
// }

// //racing()
// var collect = racing();
// console.log(collect)
// let x = 0xff
// const tuple = ["check","and","see","random"]
// let players = {
// 	name: "Greg",
// 	sname: "Justice",
// 	email: "greg.j@ko.com",
// 	fname: function(){
// 		return this.name+' '+this.sname;}
// }

// function generate(){
// 	let randomgen = Math.floor(Math.random()*3)
// 	return tuple[randomgen]
	
// }

let myLeads =[];
const inputBtn = document.getElementById("inputBtn");
const inputel = document.getElementById("inputel");
let sitesList = document.getElementById("sitesList"); 



inputBtn.addEventListener("click", function() {
	myLeads.push(inputel.value);
	inputel.value="";
	//console.log(myLeads)
	renderLeads()
})
function renderLeads(){
	let newsite =""
	for (var i = 0; i <myLeads.length; i++) {
	newsite+=`<li><a target=_blank href="http://`+`${myLeads[i]}">${myLeads[i]}</a></li>`;
	}sitesList.innerHTML=newsite
}


//}





// function inputButton(){
// 	myLeads.push(document.getElementById("inputel").value);
// 	document.getElementById("inputel").value=""
// 	console.log(myLeads);

	// switch (document.getElementById("inputel").value){
	// 	case isNaN=false:
	// 	console.log("only text please")
	// }

// document.addEventListener("click",  inputButton)
// function inputButton(){
// 	document.getElementById("inputBtn");
// 	myLeads.push(inputEl.value);
// 	console.log(myLeads)
	



	//console.log("Another addEventListener")



//console.log("Used EventListener")
// console.log("button clicked")}
// console.log(players["sname"])
// console.log("My full name is "+ players.fname()+". "+"My email is: "+players.email+".");
// console.log("Data type for variable 'tuple' is : "+typeof(tuple))
// console.log(x)
// console.log(generate())
// console.log(tuple.join(" "))
}
catch(err){
console.log("Daniel says - DOM variable 'document' is not recognised on node.js")
}
}
let newStr =""
let anoda
let third
let newChar=""
let char=[]
let aString = "the_stealth-warrior guy";
function toCamelCase(){
for (let i=0;  i<aString.length; i++){

	if (aString[i-1]==="_" || aString[i-1]==="-" || aString[i-1]===" "){
		newStr+=aString[i].toUpperCase()
		continue
	}
	anoda =newStr+=aString[i]
	third =(anoda.replace("_","").replace("-",""))
	console.log(third)
	}}//return third}
	toCamelCase()
	
	
	
	
	//
	//console.log(aString)

	//aString =aString.replace((/(?<=-|_| )[a-z]/g), aString(/(?<=-|_| )[a-z]/g).toUpperCase());
	//let result = aString.match(pattern);
	//newStr+=aString[i+1].toUpperCase();	
	//continue;
	
	//aString[i].toUpperCase()
	//newStr+=aString[i]
	//console.log(newStr)
	//console.log(newStr)

	//console.log(aString)
	//console.log(aString)

// newStr=aString.replace(/[_-]/g, " ")


// console.log("it is: "+result)
// let ans = result.toString().toUpperCase();
// console.log(ans)

let word = "useless"
console.log(Array.from(word))
console.log(Array.isArray(word))
console.log(Array(5))

///^(\d{4}|\d{6})$/.test("there 889676yt")
let s ="the_stealth-warrior guy"
n=s.split("")
n.forEach(mycase)
function mycase(x){
	let j = n.join('')
	k=j.replace(/(-|_)/g, x => x[0].toUpperCase())
}console.log(k)
// s = s.replace(/(?<=[_-])./g, x => x[1].toUpperCase());
// //s = s.replace(/\-[a-z]/g, x => x[1].toUpperCase());
// console.log(s)

