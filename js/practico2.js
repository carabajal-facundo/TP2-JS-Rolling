// Punto 1
/*
let edad = prompt("ingrese su edad");

if( parseInt(edad) ){
    if(edad > 17){
        alert("Eh que bien tienes edad para poder conducir ;)");
    }
    else{
        alert("Uh que mal aun no tienes la edad suficiente para poder conducir :(");
    }
}
else{
    alert("Dale no seas asi escribi tu edad no una frace/letra >:(");
}
*/
// Punto 2
/*
let nota = prompt("Ingrse su nota del 0 - 10 por favor ");

if(parseInt(nota)){
    if(nota >=0 && nota <=10){
        switch(parseInt(nota)){
            case 0:
                alert("Tu nota es 'Muy deficiente'");
                break;
            case 1:
                alert("Tu nota es 'Muy deficiente'");
                break;
            case 2:
                alert("Tu nota es 'Muy deficiente'");
                break;
            case 3:
                alert("Tu nota es 'Insuficiente'");
                break;
            case 4:
                alert("Tu nota es 'Insuficiente'");
                break;
            case 5:
                alert("Tu nota es 'Suficiente'");
                break;
            case 6:
                alert("Tu nota es 'Suficiente'");
                break;
            case 7:
                alert("Tu nota es 'Bien'");
                break;
            case 8:
                alert("Tu nota es 'Notable'");
                break;
            case 9:
                alert("Tu nota es 'Notable'");
                break;
            case 10:
                alert("Tu nota es 'Sobresaliente'");
                break;
        }
    }
    else alert("no ingresaste una nota valida");
}
else alert("no ingresaste tu nota");
*/

// Punto 3
/*
let cont = 0;
let frase;
let stop = confirm("Ingrese una cadena de caracteres");
let cadena = [];
while(stop){
    frase = prompt("Ingrese una frase o algo");
    cadena[cont] = frase;
    cont++;
    stop = confirm("Ingresar mas cadena de caracteres?");
}
cont=0;
for(cont; cont < (cadena.length-1); cont++){
    frase = frase + ' - ' + cadena[cont];
}
alert(frase);
*/

// Punto 4
/*
let cont = 0;
let suma = 0;
let numeros = [];
let stop = confirm("Quiere ingresar un numero?");
if(stop){
    while(stop){
        num = prompt("Ingrese un numero");
        if(parseInt(num)){
            numeros[cont] = num;
            cont++;
            stop = confirm("Ingresar un numero mas?");
        }
    }
    cont=0;
    for(cont; cont < (numeros.length); cont++){
        suma = suma + parseInt(numeros[cont]);
    }
    alert("La suma es: " + suma);
}
else alert("La suma es: 0");
*/

// Punto 5
/*
let stop = confirm("Desea ingresar un DNI");
while(stop){
    let dni = prompt("ingrese un DNI");
    if(parseInt(dni) && (parseInt(dni)>=0 && parseInt(dni)<=99999999) ){
        switch (parseInt(dni)%23){
            case 0:
                alert("la letra del DNI es: T");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 1:
                alert("la letra del DNI es: R");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 2:
                alert("la letra del DNI es: W");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 3:
                alert("la letra del DNI es: A");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 4:
                alert("la letra del DNI es: G");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 5:
                alert("la letra del DNI es: M");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 6:
                alert("la letra del DNI es: Y");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 7:
                alert("la letra del DNI es: F");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 8:
                alert("la letra del DNI es: P");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 9:
                alert("la letra del DNI es: D");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 10:
                alert("la letra del DNI es: X");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 11:
                alert("la letra del DNI es: B");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 12:
                alert("la letra del DNI es: N");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 13:
                alert("la letra del DNI es: J");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 14:
                alert("la letra del DNI es: Z");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 15:
                alert("la letra del DNI es: S");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 16:
                alert("la letra del DNI es: Q");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 17:
                alert("la letra del DNI es: V");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 18:
                alert("la letra del DNI es: H");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 19:
                alert("la letra del DNI es: L");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 20:
                alert("la letra del DNI es: C");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 21:
                alert("la letra del DNI es: K");
                stop = confirm("Desea ingresar otro DNI");
                break;
            case 22:
                alert("la letra del DNI es: E");
                stop = confirm("Desea ingresar otro DNI");
                break;
        }
    }
    else alert("No ingreso un numero de DNI o DNI invalido");
}
*/

// Punto 6
/*
let cont = 1;
for(let i = 0; i<30; i++){
    for(let x=0; x<cont;x++){
        document.write(cont);
    }
    cont++;
    document.write("<br>")
}
*/

// Punto 7
/*
let cont = prompt("Ingrese un numero");
if(parseInt(cont) && (parseInt(cont)<=50)){
    let num = cont;
    for(let i = 0; i<cont; i++){
        for(let x=0; x<num;x++){
            document.write(num);
        }
        num--;
        document.write("<br>"):
    }
}
else alert("no ingreso un numero o es un numero muy alto D:");
*/

// Punto 8
/*
let cont = prompt("Ingrese un numero");
if(parseInt(cont) && (parseInt(cont)<=50)){
    for(let i = 0; i<cont; i++){
        for(let x=1; x<(i+2);x++){
            document.write(x);
        }
        document.write("<br>");
    }
}
else alert("no ingreso un numero o es un numero muy alto D:");
*/

// Punto 9
/*
for(let i = 1; i!=501; i++){
    if( (i%4)==0 ){
        document.write(i," (Es multiplo de 4)<br>");
        if( (i%5)==0 ) document.write(i,"<br>--------------------<br>");
    } 
    else if( (i%9)==0 ){
        document.write(i," (Es multiplo de 9)<br>");
        if( (i%5)==0 ) document.write(i,"<br>--------------------<br>");
    }
    else if( (i%5)==0 ) document.write(i,"<br>--------------------<br>");
    else document.write(i,"<br>")
}
*/

//Punto 10
/*
let filas = prompt("Ingrese el numero de filas");
let columnas = prompt("Ingrese el numero de columnas");
let elemento = filas*columnas;
for(let i = 0; i<filas; i++){
    for(let x = 0; x< columnas; x++){
        document.write(elemento,"  ");
        elemento--;
    }
    document.write("<br>");
}
*/

// Punto 11
/*
let persona1 = [prompt("ingrese el nombre"), prompt("ingrese la edad")];
let persona2 = [prompt("ingrese el nombre"), prompt("ingrese la edad")];
let persona3 = [prompt("ingrese el nombre"), prompt("ingrese la edad")];

if(persona1[1]>persona2[1]){
    if(persona1[1]>persona3[1]) alert(persona1[0]+" es el mayor de los 3");
    else alert(persona3[0]+" es el mayor de los 3");
}
else if(persona2[1]>persona3[1]) alert(persona2[0]+" es el mayor de los 3");
else alert(persona3[0]+" es el mayor de los 3");
*/

// Punto 12

//document.write(parseInt(Math.random() * (99 - 1) + 1));

// Punto 13
/*
let frase = prompt("Ingrese una frase o palabra");
alert(frase.toUpperCase());
*/

// Punto 14
/*
let frase = prompt("Ingrese una palabra o frase");
let convert = '';
for(let i = 0; i< frase.length;i++){
    if(i==0){
        convert = frase.charAt(0)+'-';
    }
    else if(i==(frase.length-1)){
        convert = convert + frase.charAt(i);
    }
    else convert = convert + frase.charAt(i)+'-';
}
alert(convert);
*/

// Punto 15
/*
let frase = prompt("Ingrese una palabra o frase");
let cont = 0;
for(let i = 0; i < frase.length; i++){
    if( frase.charAt(i)=='a' || frase.charAt(i)=='e' ||frase.charAt(i)=='i' ||
    frase.charAt(i)=='o' ||frase.charAt(i)=='u' ) cont++;
    else if( frase.charAt(i)=='A' || frase.charAt(i)=='E' ||frase.charAt(i)=='I' ||
    frase.charAt(i)=='O' ||frase.charAt(i)=='U' ) cont++;
}
alert("El numero de vocales que tiene es: "+cont);
*/

// Punto 16
/*
let frase = prompt("Ingrese una palabra o frase");
let invert='';
let cont = frase.length;
while(cont != -1){
    invert = invert + frase.charAt(cont);
    cont--;
}
alert(invert);
*/

// Punto 17
/*
let frase = prompt("Ingrese una palabra o frase");
let cont = 0;
let vocal = false;
let posicion = 0;
for(let i = 0; i < frase.length; i++){
    if( frase.charAt(i)=='a' || frase.charAt(i)=='e' ||frase.charAt(i)=='i' ||
    frase.charAt(i)=='o' ||frase.charAt(i)=='u' ){
        if(!vocal){
            vocal = true;
            cont=i+1;
        }
    }
    else if( frase.charAt(i)=='A' || frase.charAt(i)=='E' ||frase.charAt(i)=='I' ||
    frase.charAt(i)=='O' ||frase.charAt(i)=='U' ){
        if(!vocal){
            vocal = true;
            cont=i+1;
        }
    }
}
alert("La primera vocal esta en la posicion: "+cont);
*/