console.log("Hola TypeScript");

let nombre: string = "Coderhouse";

function saludar(nombre: string, apellido: string): Persona {
  return {
    nombre,
    apellido,
  };
}

interface Persona {
  nombre: string;
  apellido: string;
}

let persona: Persona = saludar(nombre, "House");

console.log(persona);
