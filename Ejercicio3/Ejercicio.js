/*
2. Volvemos con la calculadora
    Realizar lo mismo, pero con entrada por query, a través de ?
    Es decir, el ejemplo de llamada en el navegador sería este:
    
        localhost:3000/calcular?operacion=suma&&numero1=2&&numero2=4
        El resultado es 6
    
    También hay que ver los casos de divisiones por 0
    Si no metemos nada más que un número o ninguno, o no hay operación, etc.
    Nota: Aunque no lo creáis esta es una forma mucho más habitual que la anterior.
*/

// solución sexto problema a realizar:

const express = require("express");

const app = express();

app.get("/calcular/", (req, res) => {
  res.send(
    'La información hay que introducirla según se quiera hacer la determinada operación /calcular/"operacion" + /numero1/numero2'
  );
});

app.get("/calcular/suma/", (req, res) => {
  numero1 = req.query.numero1;
  numero2 = req.query.numero2;

  if (!numero1 || !numero2) {
    return res.send("Error, no se han introducido los dos números!");
  }

  if (!isNaN(numero1) && !isNaN(numero2)) {
    return res.send(
      "El resultado es: " + suma(parseInt(numero1), parseInt(numero2))
    );
  } else {
    return res.send("Error, no se han introducido los dos números!");
  }
});

function suma(numero1, numero2) {
  return numero1 + numero2;
}

app.get("/calcular/multiplicacion/", (req, res) => {
  numero1 = req.query.numero1;
  numero2 = req.query.numero2;

  if (!numero1 || !numero2) {
    return res.send("Error, no se han introducido los dos números!");
  }

  if (!isNaN(numero1) && !isNaN(numero2)) {
    return res.send(
      "El resultado es: " + multiplicacion(parseInt(numero1), parseInt(numero2))
    );
  } else {
    return res.send("Error, no se han introducido los dos números!");
  }
});

function multiplicacion(numero1, numero2) {
  return numero1 * numero2;
}

app.get("/calcular/division/", (req, res) => {
  numero1 = req.query.numero1;
  numero2 = req.query.numero2;

  if (!numero1 || !numero2) {
    return res.send("Error, no se han introducido los dos números!");
  }

  if (!isNaN(numero1) && !isNaN(numero2)) {
    if (numero2 == 0) {
      return res.send("Error, no se puede dividir por cero!");
    }

    return res.send(
      "El resultado es: " + division(parseInt(numero1), parseInt(numero2))
    );
  } else {
    return res.send("Error, no se han introducido los dos números!");
  }
});

function division(numero1, numero2) {
  return parseFloat(numero1 / numero2);
}

app.get("/calcular/resta/", (req, res) => {
  numero1 = req.query.numero1;
  numero2 = req.query.numero2;

  if (!numero1 || !numero2) {
    return res.send("Error, no se han introducido los dos números!");
  }

  if (!isNaN(numero1) && !isNaN(numero2)) {
    return res.send(
      "El resultado es: " + resta(parseInt(numero1), parseInt(numero2))
    );
  } else {
    return res.send("Error, no se han introducido los dos números!");
  }
});

function resta(numero1, numero2) {
  return numero1 - numero2;
}

app.listen(3000, () => {
  console.log("Calculadora Express...");
});
