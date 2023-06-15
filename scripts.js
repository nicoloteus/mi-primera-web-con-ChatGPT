  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const inputs = form.querySelectorAll("input");
      let isValid = true;

      inputs.forEach(function(input) {
        if (input.value.trim() === "") {
          isValid = false;
        }
      });

      if (isValid) {
        // Aquí puedes agregar el código para enviar el formulario
        alert("¡Formulario enviado correctamente!");
        form.reset();
      } else {
        alert("Por favor, completa todos los campos.");
      }
    });
  });