//looping pakai while

var x = 1;

while (x <= 20) {
	console.log(x + '. i love koding');
x++
}

var x = 20;

while (x >= 1) {
	console.log(x + '. i love koding');
x--
}


//looping pakai for

for (var x = 2; x <= 20; x += 2) {
	console.log(x + '. i love coding');
}

for (var x = 20; x >= 2; x -= 2) {
	console.log(x + '. i love coding');
}


//looping untuk mencari angka ganjil-genap

var nilai = 1;

while(nilai <= 10) {

	if(nilai % 2 == 0) {
		console.log(nilai + ". adalah bilangan genap");
	} 

	else {
   		console.log(nilai + ". adalah bilangan ganjil");
	}

nilai++;
}


//looping untuk menentukan bilangan kelipatan

//pertambahan 2
for (var angka=1; angka<= 100; angka+=2) {
	
	if (angka % 3 === 0) {
		console.log(angka + '. kelipatan 3')
	}
	
	else {
		console.log("")
	}
}

//pertambahan 5
for (var angka=1; angka<= 100; angka+=5) {
	
	if (angka % 6 === 0) {
		console.log(angka + ' kelipatan 6')
	}
	
	else {
		console.log("")
	}
}

//pertambahan 9
for (var angka=1; angka<= 100; angka+=9) {
	
	if (angka % 10 === 0) {
		console.log(angka + ' kelipatan 10')
	}
	
	else {
		console.log("")
	}
}

