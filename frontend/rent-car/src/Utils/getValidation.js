export const getValidate = (valores, errores, type) => {
  if (!valores.email) {
    errores.email = "Por favor ingresá un email";
  } else if (
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)
  ) {
    errores.email = "Ingresá un correo válido";
  }

  if (!valores.password) {
    errores.password = "Por favor ingresá una contraseña";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/.test(
      valores.password
    )
  ) {
    errores.password = `La contraseña debe contener: Minimo 8 caracteres
        Maximo 15
        - Al menos una letra mayúscula
        - Al menos una letra minucula
        - Al menos un dígito
        - No espacios en blanco
        - Al menos 1 caracter especial `;
  }
  if (type === "signup") {
    if (!valores.pw) {
      errores.pw = "Por favor ingresá la confirmación de la contraseña";
    } else if (valores.pw !== valores.password) {
      errores.pw = "Las contraseñas no coindicen";
    }

    if (!valores.nombre) {
      errores.nombre = "Por favor ingresá un nombre";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
      errores.nombre = "El nombre solo puede contener letras y espacios";
    }

    if (!valores.apellido) {
      errores.apellido = "Por favor ingresá un apellido";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
      errores.apellido = "El nombre solo puede contener letras y espacios";
    }
  }
  return errores;
};
