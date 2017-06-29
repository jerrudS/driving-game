
const carUl = document.createElement('ul')
const wheel1 = document.createElement('li')
const wheel2 = document.createElement('li')
const wheel3 = document.createElement('li')
const wheel4 = document.createElement('li')

carUl.appendChild(wheel1)
carUl.appendChild(wheel2)
carUl.appendChild(wheel3)
carUl.appendChild(wheel4)

const carDiv = document.querySelector('.car')

carDiv.appendChild(carUl)
