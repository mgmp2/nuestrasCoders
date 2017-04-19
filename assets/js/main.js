var padre = document.getElementById("body");
var styleCoder =   [{nombre: "Naomi Villanueva", url: "../img/students/1.png"},
                    {nombre: "Ana Durand", url: "../img/students/2.png"},
                    {nombre: "Betsi Loayza", url: "../img/students/3.png"},
                    {nombre: "Maia Rojas", url: "../img/students/4.png"},
                    {nombre: "Miriam Mendoza", url: "../img/students/5.png"},
                    {nombre: "Neiza Nuñez", url: "../img/students/6.png"}];
window.addEventListener("load", function (e){
  e.preventDefault();
  console.log(styleCoder[2].nombre);
  console.log(styleCoder[2].url);


})
