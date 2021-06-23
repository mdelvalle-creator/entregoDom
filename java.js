const mediosDePagoMexico = [
  "Visa",
  "Mastercard",
  "American Express",
  "BBVA",
  "Citibanamex",
  "HSBC",
  "Santander",
  "Banorte",
  "IXE",
  "Oxxo",
];

const mediosDePagoArgentina = [
  "Visa",
  "Mastercard",
  "American Express",
  "Cabal",
  "Nativa",
  "Naranja",
  "Mercado Pago",
  "cordobesa",
  "Diners Club",
  "CMR",
  "Tarjeta Walmart",
  "Tarjeta Shopping",
  "Maestro",
  "Rapipago",
  "Provincia Net",
  "Link",
  "Pago Facil",
];

const mediosDePagoUruguay = [
  "Visa",
  "Mastercard",
  "OCA",
  "Diners Club",
  "Abitab",
  "Red Pagos",
];

class Propuesta {
  constructor(nombre, pais, nombreProducto, precioProducto) {
    this.nombreEmpresa = nombre;
    this.pais = pais;
    this.nombreProducto = nombreProducto;
    this.precioProducto = precioProducto;
    this.comision = 0;
    this.mediosDePago = [];
  }

  calcularComision() {
    switch (this.pais.toUpperCase()) {
      case "MEXICO":
        this.comision = 0.0349 * this.precioProducto;
        this.mediosDePago = mediosDePagoMexico;
        break;
      case "ARGENTINA":
        this.comision = 0.0599 * this.precioProducto;
        this.mediosDePago = mediosDePagoArgentina;
        break;
      case "URUGUAY":
        this.comision = 0.0649 * this.precioProducto;
        this.mediosDePago = mediosDePagoUruguay;
        break;
    }
  }
  toString() {
    return (
      "Nombre de empresa: " +
      this.nombreEmpresa +
      "\nPais: " +
      this.pais +
      "\nNombre de producto: " +
      this.nombreProducto +
      "\nPrecio de producto: $" +
      this.precioProducto +
      "\nComision a cobrar: $" +
      this.comision +
      "." +
      "\nLos medios de pago disponibles son: " +
      this.mediosDePago.toString()
    );
  }
}

function cargarDatos() {
  const nombreIngresado = prompt("Escribi el nombre de tu empresa");
  let paisIngresado = "";
  while (
    paisIngresado.toUpperCase() !== "MEXICO" &&
    paisIngresado.toUpperCase() !== "ARGENTINA" &&
    paisIngresado.toUpperCase() !== "URUGUAY"
  ) {
    paisIngresado = prompt(
      "Ingresa tu pais, recorda que tiene que ser Mexico, Argentina o Uruguay"
    );
    if (
      paisIngresado.toUpperCase() !== "MEXICO" &&
      paisIngresado.toUpperCase() !== "ARGENTINA" &&
      paisIngresado.toUpperCase() !== "URUGUAY"
    ) {
      alert("Error, pais sin registro");
    }
  }
  const nombreProducto = prompt(
    "¿Cuál es el servicio o producto que vas a ofrecer?"
  );
  const precioProducto = prompt("¿Qué precio tiene tu servicio o producto?");
  return new Propuesta(
    nombreIngresado,
    paisIngresado,
    nombreProducto,
    precioProducto
  );
}

function ejecutarSimulador() {
  const propuestaDeNegocios = cargarDatos();
  propuestaDeNegocios.calcularComision();
  document.getElementsByClassName("jumbotron")[0].removeChild(document.getElementsByClassName("btn btn-primary btn-lg")[0]);
  let resultado = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto que va a agregar el div con todo el contenido
resultado.innerHTML =  `
<p>Nombre Empresa: ${propuestaDeNegocios.nombreEmpresa}  </p> 
<p>Pais:  ${propuestaDeNegocios.pais} </p> 
<p>Producto: ${propuestaDeNegocios.nombreProducto}  </p>
<p>Precio del producto:  $${propuestaDeNegocios.precioProducto}  </p>  
<p>Comision:  $${propuestaDeNegocios.comision} </p> 
<p>Medios de pago:  ${propuestaDeNegocios.mediosDePago.toString()} </p> 

`;
resultado.className = "resultado";

//Agregamos el contenedor creado al body
document.getElementsByClassName("jumbotron")[0].appendChild(resultado);
}

