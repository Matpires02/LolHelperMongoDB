(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          alert('Alguns campos não foram preenchidos corretamente, verifique e tente novamente')
          const fields = document.querySelectorAll("[required]")
          console.log(fields)
          for ( field of fields){
            field.addEventListener('invalid')
          }
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
