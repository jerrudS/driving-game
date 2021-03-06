/* eslint-disable no-unused-vars */

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

  car.innerHTML = ''
  car.appendChild(carUl)

  car.style.left = smiles.location[0] + 'px'
  car.style.top = smiles.location[1] + 'px'
}

class Car {
  constructor(direction, speed, location) {
    this.direction = direction
    this.speed = speed
    this.location = location
  }
  turn(direction) {
    this.direction = direction
  }
  accelerate(amount) {
    this.speed += amount
  }
  stop() {
    this.speed = 0
  }
  move() {
    switch (this.direction) {
      case 'north':
        this.location[1] -= this.speed
        break
      case 'south':
        this.location[1] += this.speed
        break
      case 'east':
        this.location[0] += this.speed
        break
      case 'west':
        this.location[0] -= this.speed
    }
  }
  static start(car) {
    setInterval(function () {
      car.move()
    }, 200)
  }
  static halt(car) {
    car.stop()
  }
}

const car = document.querySelector('.car')
const smiles = new Car('east', 5, [0, 0])
createCar(smiles)

window.addEventListener('load', function () {
  alert('WELCOME TO SMILEY DRIVER!!')
  alert('CONTROLS: \n\nPress "Spacebar" to Begin. \nPress "N" to stop. \nPress "Down Arrow" to move down. \nPress "Left Arrow" to move left. \nPress "Up Arrow" to move up. \nPress "Right Arrow" to move right. \nAdditional "Spacebar" presses will increase speed.')
})

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 32) {
    smiles.speed = 5
    Car.start(smiles)
    setInterval(function () {
      createCar(smiles)
    }, 1)
  }
  if (event.keyCode === 78) {
    Car.halt(smiles)
  }
  if (event.keyCode === 40) {
    car.style.transform = 'rotate(0.25turn)'
    smiles.direction = 'south'
  }
  if (event.keyCode === 37) {
    car.style.transform = 'rotate(0.5turn)'
    smiles.direction = 'west'
  }
  if (event.keyCode === 38) {
    car.style.transform = 'rotate(0.75turn)'
    smiles.direction = 'north'
  }
  if (event.keyCode === 39) {
    car.style.transform = 'rotate(0turn)'
    smiles.direction = 'east'
  }
})
