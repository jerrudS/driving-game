
function createCar() {
  const carUl = document.createElement('ul')
  const wheel1 = document.createElement('li')
  const wheel2 = document.createElement('li')
  const wheel3 = document.createElement('li')
  const wheel4 = document.createElement('li')
  const smiley = document.createElement('li')
  const eye1 = document.createElement('li')
  const eye2 = document.createElement('li')

  wheel1.setAttribute('class', 'one')
  wheel2.setAttribute('class', 'two')
  wheel3.setAttribute('class', 'three')
  wheel4.setAttribute('class', 'four')
  smiley.setAttribute('class', 'smile')
  eye1.setAttribute('class', 'eye1')
  eye2.setAttribute('class', 'eye2')

  carUl.appendChild(wheel1)
  carUl.appendChild(wheel2)
  carUl.appendChild(wheel3)
  carUl.appendChild(wheel4)
  carUl.appendChild(smiley)
  carUl.appendChild(eye1)
  carUl.appendChild(eye2)

  const carDiv = document.querySelector('.car')

  carDiv.appendChild(carUl)
}
createCar()
