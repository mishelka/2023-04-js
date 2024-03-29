/*
  TODO: Expected output from the program for size = 10
             *
            ***
           *****
          *******
         *********
        ***********
       *************
      ***************
     *****************
    *******************
*/
const size = 10;

function printTriangle() {
    let i = 0;
    let str = '';
    while(i < size) {
        str = getChars(size - i - 1, ' ');
        // str += getChars(2 * (i + 0.5), '*');
        str += getChars((2 * i) + 1, '*');
        console.log(str);
        i++;
    }
}

function printLine() {
    let str = '';
    for (let i = 0; i < size; i++) {
        str = str + '*';
    }
    console.log(str);
}

function printSquare() {
    let str = '';
    for (let row = 0; row < size; row++) {
        for (let i = 0; i < size; i++) {
            str = str + '* ';
        }
        str = str + '<br/>';
    }
    document.write(str);
}

const width = 10; const height = 5;

function printRectangle() {
    
}

function getChars(length, character) {
	let str = '';
	
	for(let i = 0; i < length; i++) {
		str += character;
	}
	
	return str;
}