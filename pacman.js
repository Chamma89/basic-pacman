var xCoor = 0
var yCoor = 0
var direction = ""
var warning = "Cant make this move! Pacman will fall. Make another move"

function letsPlay(){
  xCoor = 0
  yCoor = 0
  direction = ""

  direction = prompt("Please enter starting direction. Eg east")
  xCoor = Number(prompt("Please enter X coordinate"))
  yCoor = Number(prompt("Please enter Y coordinate"))

}

function move() {
  if (direction == "north") {
    yCoor === 5 ? alert(warning) : yCoor += 1
  }

  else if (direction == "south") {
    yCoor === 0 ? alert(warning) : yCoor -= 1
  }

  else if (direction == "east") {
    xCoor === 5 ? alert(warning) : xCoor += 1
  }

  else if (direction == "west") {
    xCoor === 0 ? alert(warning) : xCoor -= 1
  }

  console.log(xCoor, yCoor, direction)
}


function left() {
  if (direction == "north") {
    direction = "west"
  }

  else if (direction == "south") {
    direction = "east"
  }

  else if (direction == "east") {
    direction = "north"
  }

  else if (direction == "west") {
    direction = "south"
  }

  console.log(direction)

  return direction
}

function right() {
  if (direction == "north") {
    direction = "east"
  }

  else if (direction == "south") {
    direction = "west"
  }

  else if (direction == "east") {
    direction = "south"
  }

  else if (direction == "west") {
    direction = "north"
  }

  console.log(direction)

  return direction
}