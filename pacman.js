var xCoor = 0
var yCoor = 0
var direction = ""

function letsPlay(){
  xCoor = 0
  yCoor = 0
  direction = ""

  direction = prompt("Please enter starting direction. Eg east")
  xCoor = Number(prompt("Please enter X coordinate"))
  yCoor = Number(prompt("Please enter Y coordinate"))

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