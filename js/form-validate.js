// Código de validación para el formulario de login
const formularioLogin = document.getElementById("formulario");
const inputsLogin = document.querySelectorAll("#formulario input");

const expresionesLogin = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, números, guion y guion_bajo
  password: /^.{4,12}$/, // 4 a 12 dígitos.
};

const camposLogin = {
  usuario: false,
  password: false,
};

const validarFormLogin = (e) => {
  switch (e.target.name) {
    case "usuario":
      validarCampo(expresionesLogin.usuario, e.target, "usuario");
      break;
    case "password":
      validarCampo(expresionesLogin.password, e.target, "password");
      break;
  }
};

function validarCampo(expresion, input, campo) {
  const groupElement = document.getElementById(`group-${campo}`);
  const mensajeError = document.getElementById("form-message");
  const validationEstado = document.querySelector(
    `#group-${campo} .validation-estado`
  );
  const errorInput = document.querySelector(`#group-${campo} .error-input`);

  if (expresion.test(input.value)) {
    groupElement.classList.remove("form-group-incorrecto");
    groupElement.classList.add("form-group-correcto");
    errorInput.classList.remove("error-input-activo");

    if (validationEstado) {
      validationEstado.classList.remove("bxs-x-circle");
      validationEstado.classList.add("bxs-check-circle");
    }

    if (mensajeError) {
      mensajeError.classList.remove("form-message-activo");
    }

    camposLogin[campo] = true;
  } else {
    groupElement.classList.add("form-group-incorrecto");
    groupElement.classList.remove("form-group-correcto");
    errorInput.classList.add("error-input-activo");

    if (validationEstado) {
      validationEstado.classList.remove("bxs-check-circle");
      validationEstado.classList.add("bxs-x-circle");
    }

    camposLogin[campo] = false;
  }
}

inputsLogin.forEach((input) => {
  input.addEventListener("keyup", validarFormLogin);
  input.addEventListener("blur", validarFormLogin);
});

formularioLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  if (camposLogin.usuario && camposLogin.password) {
    formularioLogin.reset();
    formularioRegistro.reset();

    document
      .getElementById("exito-message")
      .classList.add("exito-message-activo");

    setTimeout(() => {
      document
        .getElementById("exito-message")
        .classList.remove("exito-message-activo");
    }, 1000);

    document.querySelectorAll(".form-group-correcto").forEach((icono) => {
      icono.classList.remove("form-group-correcto");
    });

    camposLogin.usuario = false;
    camposLogin.password = false;

    document
      .getElementById("form-message")
      .classList.remove("form-message-activo");
  } else {
    document
      .getElementById("form-message")
      .classList.add("form-message-activo");
  }
});

// Código de validación para el formulario de registro
const formularioRegistro = document.getElementById("b-form");
const inputsRegistro = document.querySelectorAll("#b-form input");

const expresionesRegistro = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, números, guion y guion_bajo
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{4,12}$/, // 4 a 12 dígitos.
};

const camposRegistro = {
  nombre: false,
  correo: false,
};

const validarFormRegistro = (e) => {
  switch (e.target.name) {
    case "nombre":
      validarCampoRegistro(expresionesRegistro.nombre, e.target, "nombre");
      break;
    case "usuario":
      validarCampoRegistro(
        expresionesRegistro.usuario,
        e.target,
        "usuario-registro"
      );
      break;
    case "correo":
      validarCampoRegistro(expresionesRegistro.correo, e.target, "correo");
      break;
    case "password":
      validarCampoRegistro(
        expresionesRegistro.password,
        e.target,
        "password-registro"
      );
      break;
  }
};

function validarCampoRegistro(expresion, input, campo) {
  const groupElement = document.getElementById(`group-${campo}`);
  const mensajeError = document.getElementById("mensaje-error");
  const validationEstado = document.querySelector(
    `#group-${campo} .validation-estado`
  );
  const errorInput = document.querySelector(`#group-${campo} .error-input`);

  if (expresion.test(input.value)) {
    groupElement.classList.remove("form-group-incorrecto");
    groupElement.classList.add("form-group-correcto");
    errorInput.classList.remove("error-input-activo");

    if (validationEstado) {
      validationEstado.classList.remove("bxs-x-circle");
      validationEstado.classList.add("bxs-check-circle");
    }

    if (mensajeError) {
      mensajeError.classList.remove("form-message-activo");
    }

    camposRegistro[campo] = true;
  } else {
    groupElement.classList.add("form-group-incorrecto");
    groupElement.classList.remove("form-group-correcto");
    errorInput.classList.add("error-input-activo");

    if (validationEstado) {
      validationEstado.classList.remove("bxs-check-circle");
      validationEstado.classList.add("bxs-x-circle");
    }

    camposRegistro[campo] = false;
  }
}

inputsRegistro.forEach((input) => {
  input.addEventListener("keyup", validarFormRegistro);
  input.addEventListener("blur", validarFormRegistro);
});

formularioRegistro.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    camposRegistro.nombre &&
    camposRegistro["usuario-registro"] &&
    camposRegistro.correo &&
    camposRegistro["password-registro"]
  ) {
    formularioRegistro.reset();
    formularioLogin.reset();

    document
      .getElementById("mensaje-exito")
      .classList.add("exito-message-activo");

    setTimeout(() => {
      document
        .getElementById("mensaje-exito")
        .classList.remove("exito-message-activo");
    }, 1000);

    document.querySelectorAll(".form-group-correcto").forEach((icono) => {
      icono.classList.remove("form-group-correcto");
    });

    camposRegistro.nombre = false;
    camposRegistro["usuario-registro"] = false;
    camposRegistro.correo = false;
    camposRegistro["password-registro"] = false;

    document
      .getElementById("mensaje-error")
      .classList.remove("form-message-activo");
  } else {
    document
      .getElementById("mensaje-error")
      .classList.add("form-message-activo");
  }
});

// Botón "Nueva Cuenta" y "Iniciar Sesión"
const botonSwitch = (boton) => {
  document.getElementById(boton).addEventListener("click", () => {
    formularioLogin.reset();
    formularioRegistro.reset();

    [
      "form-group-correcto",
      "form-group-incorrecto",
      "error-input-activo",
      "form-message-activo",
    ].forEach((clase) => {
      document.querySelectorAll(`.${clase}`).forEach((elemento) => {
        elemento.classList.remove(clase);
      });
    });
  });
};

botonSwitch("sign-up");
botonSwitch("sign-in");
