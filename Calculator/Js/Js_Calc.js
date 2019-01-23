
// (1) listen for all the keypresses
// (2) determine the type of key that is pressed - this case 
//- use an event delegation pattern to listen, since keys are all children of .calculator__keys

const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('calculator__keys');



// keys.addEventListener( "click", function (event) {
//     if ( event.target.matches( "button" ) ) {
//         // Do something...
//     }
// }, false);

keys.addEventListener (‘click’, (event) => {
	const { target }= event;
 if (!target.matches(‘button’)) {

 	return;
   // Do something
 }
})

// determine the type of key that is clicked

const key =a.target;
const action = key.dataset.action;

// if the key does not have a data-action attribute, it must be a number key.

if(!action){
	console.log('number key!')
}

// If the key has a data-action that is either add, subtract,multiply or divide,
// we know the key is an operator

if(
	action === "add" ||
	action === "substact" ||
	action === "multiply" ||
	action === "devide"
	){
	console.log ('Operator key')
}

// follow thought process - data - action keys further asigned

if (action === "decimal") {
	console.log("decimal key!")
}

if (action === "clear"){
	console.log("clear key!")
}

if (action === "calculate"){
	console.log ("equal key!")
}

// need 2 things - 1. the number of the key that was clicked
// 2. the currend displayed number

var display = document.querySelector('calculator__display')

keys.addEventListener('click', e => {id(e.target.matches('button')){
	var key =e.target;
	var action = key.dataset.action;
	var keyContent=key.textContent;
	var displayedNum = display.textContent;
      //...
  }
})
 // if the calculator shows 0 we want to replace the calculator's display with the clicked key

if (!action) {
	if(displayedNum ==='0'){
		display.text.Content = keyContent
	}
}

// if the calculator shows a non-zero number, we want to append the clicked key to the displayed number

if (!action) {
	if(displayedNum === '0') {
		display.textContent = keyContent
	};
	else{
		display.text.Content = displayedNum + keyContent
	};
	
}
// if user hits decimal - display

if (action ==='decimal'){
	display.textContent = displayedNum + '.';
}









