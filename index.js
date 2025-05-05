
  $(document).ready(function() {
    function validate() {
      let isValid = true;

      // Nombre
      const name = $('#name').val().trim();
      if (name.length < 3) {
        showError('#name', '#error-name', 'El nombre debe tener al menos 3 caracteres');
        isValid = false;
      } else {
        showSuccess('#name', '#error-name');
      }

      // Email
      const email = $('#email').val().trim();
      if (email.length < 5) {
        showError('#email', '#error-email', 'El correo debe tener al menos 5 caracteres');
        isValid = false;
      } else {
        showSuccess('#email', '#error-email');
      }

      // Contraseña
      const password = $('#password').val();
      if (password.length < 6) {
        showError('#password', '#error-password', 'La contraseña debe tener mínimo 6 caracteres');
        isValid = false;
      } else {
        showSuccess('#password', '#error-password');
      }

      // Confirmar contraseña
      const confirm = $('#confirmPassword').val();
      if (confirm !== password) {
        showError('#confirmPassword', '#error-confirm', 'Las contraseñas no coinciden');
        isValid = false;
      } else {
        showSuccess('#confirmPassword', '#error-confirm');
      }

      // Año de nacimiento
      const year = parseInt($('#birthYear').val());
      const currentYear = new Date().getFullYear();
      if (isNaN(year) || currentYear - year < 18) {
        showError('#birthYear', '#error-birthYear', 'Debes tener al menos 18 años');
        isValid = false;
      } else {
        showSuccess('#birthYear', '#error-birthYear');
      }

      // Género
      if (!$('input[name="gender"]:checked').val()) {
        $('#error-gender').text('Selecciona un género');
        isValid = false;
      } else {
        $('#error-gender').text('');
      }

      // Términos
      if (!$('#terms').is(':checked')) {
        $('#error-terms').text('Debes aceptar los términos');
        isValid = false;
      } else {
        $('#error-terms').text('');
      }

      $('#submitBtn').prop('disabled', !isValid);
    }

    function showError(inputSelector, errorSelector, message) {
      $(inputSelector).addClass('invalid').removeClass('valid');
      $(errorSelector).text(message);
    }

    function showSuccess(inputSelector, errorSelector) {
      $(inputSelector).addClass('valid').removeClass('invalid');
      $(errorSelector).text('');
    }

    // Validar al escribir o cambiar algo
    $('#registerForm input').on('input change', validate);

    // Enviar formulario
    $('#registerForm').submit(function(e) {
      e.preventDefault();
      validate();
      if ($('#submitBtn').prop('disabled') === false) {
        $('#success-message').fadeIn();
        this.reset();
        $('input').removeClass('valid invalid');
        $('.error').text('');
        $('#submitBtn').prop('disabled', true);
        setTimeout(() => $('#success-message').fadeOut(), 3000);
      }
    });
  });