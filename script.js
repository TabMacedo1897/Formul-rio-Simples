// Função para verificar se os campos de texto estão preenchidos
function checkInputs() {
  const inputs = document.querySelectorAll('.form-control input');

  inputs.forEach(input => {
      if (input.value.trim() === '') {
          setErrorFor(input, 'Este campo é obrigatório');
      } else {
          setSuccessFor(input);
      }
  });
}

// Função para definir um campo como erro
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  formControl.className = 'form-control error';
  small.innerText = message;
  small.style.visibility = 'visible';
}

// Função para definir um campo como sucesso
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Event listener para aguardar o carregamento completo da página
document.addEventListener('DOMContentLoaded', function () {
  // Event listener para validar o formulário ao enviar
  document.getElementById('form').addEventListener('submit', function (e) {
      e.preventDefault();
      window.location.reload();
      checkInputs();
  });

  // Event listener para validar os campos ao digitar
  const inputs = document.querySelectorAll('.form-control input');
  inputs.forEach(input => {
      input.addEventListener('blur', checkInputs);
  });
});
