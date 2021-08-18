/**
 * 
 * getElementById
 * getElementsByClassName
 * getElementsByTagName
 * getElementsByName
 * 
 * querySelector
 * querySelectorAll
 * 
 * createElement
 * 
 */
document.title = "Hola desde DOM";

let saludo = document.getElementById('saludo');
saludo.id = "saludo2";
console.log(saludo);

let elementosLI = document.getElementsByClassName('texto-azul');
console.log(elementosLI);
for(let li of elementosLI){
    console.log(li);
    li.style.backgroundColor = 'yellow';
    li.style.color = 'black';
}

let h1s = document.getElementsByTagName('h1');
console.log(h1s);

let lis = document.getElementsByTagName('li');
console.log(lis);

let uls = document.getElementsByTagName('ul');
console.log(uls);


let divs = document.getElementsByTagName('div');
console.log(divs);


let generos = document.getElementsByName('genero');
console.log(generos);

let options = document.getElementsByName('option');
console.log(options);

let _saludo = document.querySelector('#saludo');
console.log(_saludo);

let _li_texto_azul_a = document.querySelectorAll('#saludo + ul > li:nth-child(3)');
console.log(_li_texto_azul_a);

/* let _li_texto_azul = document.querySelectorAll('#saludo + ul > .texto-azul')[1];
console.log(_li_texto_azul); */

let h5 = document.createElement('H5');
h5.innerHTML = "Hola Mundo desde DOM con Javascript";

document.body.appendChild(h5);

saludo.appendChild(h5);