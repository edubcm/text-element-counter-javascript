var parameterInput = document.querySelector('#search-parameter')
var textInput = document.querySelector('#text-input')
var result = document.querySelector('.result')
var buttonResult = document.querySelector('.buttonResult')
var ocurrencesParameter = document.querySelector('.ocurrencesParameter')
var ocurrencesQuantity = document.querySelector('.ocurrencesQuantity')

function multipleParameters() {
  ocurrencesParameter.innerHTML = ''
  ocurrencesQuantity.innerHTML = ''
  const parameters = parameterInput.value.split(', ')
  const parametersAmount = parameters.length

  for (i = 0; i < parametersAmount; i++) {
    var re = new RegExp(parameters[i], 'gim')
    var textRegex = textInput.value.match(re)
    var ocurrences = textRegex.length

    if (ocurrences > 0 && parameterInput.value != '') {
      ocurrencesParameter.insertAdjacentHTML('beforeend', parameters[i] + '')
      ocurrencesParameter.appendChild(document.createElement('br'))
      ocurrencesQuantity.insertAdjacentHTML('beforeend', ocurrences)
      ocurrencesQuantity.appendChild(document.createElement('br'))
    }
  }
}

function oneParameter() {
  ocurrencesParameter.innerHTML = ''
  ocurrencesQuantity.innerHTML = ''
  var re = new RegExp(parameterInput.value, 'gim')
  var textRegex = textInput.value.match(re)
  var ocurrences = textRegex.length

  if (ocurrences > 0 && parameterInput.value != '') {
    ocurrencesParameter.insertAdjacentHTML(
      'beforeend',
      parameterInput.value + ''
    )
    ocurrencesParameter.appendChild(document.createElement('br'))
    ocurrencesQuantity.insertAdjacentHTML('beforeend', ocurrences)
    ocurrencesQuantity.appendChild(document.createElement('br'))
  }
}

buttonResult.addEventListener('click', function () {
  if (parameterInput.value.split(',').length > 1) {
    multipleParameters()
  } else if (parameterInput.value.split(',').length == 1) {
    oneParameter()
  } else {
    return
  }
})
