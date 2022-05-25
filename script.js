const pizzas = [
  {
    id: 1,
    nombre: "mozzarella",
    ingredientes: ["harina", "agua", "tomate", "mozzarella"],
    precio: "$"+400
  },
  {
    id: 2,
    nombre: "4 quesos",
    ingredientes: [
      "harina",
      "agua",
      "tomate",
      "mozzarella",
      "gruyere",
      "parmesano",
      "roquefort"
    ],
    precio: "$"+500
  },
  {
    id: 3,
    nombre: "especial",
    ingredientes: ["harina", "agua", "tomate", "queso", "jamon", "huevo"],
    precio: "$"+650
  },
  {
    id: 4,
    nombre: "rucula",
    ingredientes: [
      "harina",
      "agua",
      "tomate",
      "queso",
      "jamon crudo",
      "rucula"
    ],
    precio: "$"+800
  },
  {
    id: 5,
    nombre: "cantimpalo",
    ingredientes: ["harina", "agua", "tomate", "mozzarella", "cantimpalo"],
    precio: "$"+650
  },
  {
    id: 6,
    nombre: "napolitana",
    ingredientes: ["harina", "agua", "tomate", "mozzarella", "oregano"],
    precio: "$"+550
  }
];
h1.textContent = "Elija las pizzas del 1 al " + pizzas.length
const getValueInput = () =>{
  const inputValue = document.getElementById("numero").value
  pizzas.map(dato => {
    const {id, nombre, ingredientes, precio} = dato
    if (dato.id == inputValue) {
      p.textContent = "N° ingresado: " + id
      h2.textContent = "Nombre: " + nombre
      h4.textContent = "Precio: " + precio
    }else{
      if(inputValue <= 0 || inputValue> pizzas.length){ 
      p.textContent = "N° ingresado: " + id
      h2.textContent = "No existe la pizza seleccionada"
      h4.textContent = ""
      }
    } 
  })
}



    
