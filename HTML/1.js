window.onload = function() {
	var formulario = document.getElementById('formulario');

	formulario.onsubmit = function() {
		var nombre = document.getElementById('nombre').value.trim();
		var email = document.getElementById('email').value.trim();
		var telefono = document.getElementById('telefono').value.trim();
		var mensaje = document.getElementById('mensaje').value.trim();

		// Validaciones
		if (nombre === '') {
			alert('Por favor, ingrese su nombre');
			return false;
		}

		if (email === '') {
			alert('Por favor, ingrese su email');
			return false;
		}

		if (!validarEmail(email)) {
			alert('Por favor, ingrese un email válido');
			return false;
		}

		if (telefono === '') {
			alert('Por favor, ingrese su teléfono');
			return false;
		}

        if (isNaN(telefono)) {
            alert('Por favor, ingrese solo números en el campo de teléfono');
            return false;
        }

		if (mensaje === '') {
			alert('Por favor, ingrese un mensaje');
			return false;
		}

		// Si llegamos aquí, todo está correcto
		return true;
	};

	function validarEmail(email) {
		var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	}
};
