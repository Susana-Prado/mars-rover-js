// Rover object:
let rover = {
  direction :'N',
  x: 0,
  y: 0,
  travelLog: [0,0]
}

const grid = [
['','0','','','','','','','',''],
['','','','','','','','0','',''],
['','','','','','','','','',''],
['','','0','','','','','','',''],
['','','','','','','','','',''],
['','','','','','0','','','',''],
['','','','','','','','','',''],
['','','0','','','','','','',''],
['','','','','','','','','',''],
['','','','','','','','','','']
]


// Error messages

function msgOffGrid(){
console.log("You can't place the rover out of the grid!")
}

function obstacle(x,y){
if(grid[x][y] === '0'){
  console.log("Oops! There is an obstacle in the way. Better take another path");
  return true;
}
return false;
}

function validCommand(){
console.log("Please insert a valid command:'F', 'L', 'R', 'B'")
}


// ====================== TURN LEFT
function turnLeft(rover) {
 console.log('turnLeft was called!');
  switch(rover.direction){
    case 'N':
      rover.direction ='W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
  }
console.log('Rover is now facing ' +  rover.direction);
}
// ====================== TURN RIGHT

function turnRight(rover) {
console.log('turnRight was called!');
 switch(rover.direction){
  case 'N':
    rover.direction = 'E';
    break;
  case 'E':
    rover.direction = 'S';
    break;
  case 'S':
    rover.direction = 'W';
    break;
  case 'W':
    rover.direcation = 'N';
    break;
}
console.log('Rover is now facing ' + rover.direction);
}

// ====================== MOVE FORWARD



function moveForward(rover) {
  console.log('moveForward was called!');
switch(rover.direction){
  case 'N':
    if(rover.y <=0){
    msgOffGrid();
  } 
  else if(obstacle((rover.y - 1), rover.x)) {
    break;
  }
  else {
    rover.y--;
  }
  break;
  
  case 'S':
    if(rover.y >=9){
      msgOffGrid();
    } 
    else if(obstacle((rover.y+1), rover.x)){
      break;
    }
    else {
      rover.y++;
    }
    break;
  
  case 'E':
    if(rover.x >=9){
      msgOffGrid();
    } 
    else if(obstacle((rover.y), rover.x + 1)){
      break;
    } else {
      rover.x++;
    }
    break;
    
  case 'W':
    if(rover.x <=0){
      msgOffGrid();
    } 
    else if(obstacle((rover.y), rover.x - 1)){
      break;
    }
    else {
      rover.x--;
    }
    break;
}      

console.log('New Rover position is: '+ rover.x + ',' + rover.y + '.' + 'Travel of the rover x,y: ' + rover.travelLog);
rover.travelLog.push([rover.x,rover.y]);

}

// ====================== MOVE BACKWARDS

function moveBackward(rover){
console.log('moveBackward was called!');
  switch(rover.direction){
    case 'N':
      if(rover.y>=9){
        msgOffGrid();
      } 
      else if(obstacle((rover.y+1), rover.x)){
      break;
      } else {
        rover.y++;
      }
      break;
    case 'S':
      if(rover.y<=0){
        msgOffGrid();
      } else if(obstacle((rover.y-1), rover.x)){
      break;
      } else {
        rover.y--
      }
      break;
    case 'E':
      if(rover.x<=0){
        msgOffGrid();
      } 
      else if(obstacle((rover.y), rover.x - 1)){
      break;
      } else {
        rover.x--
      } 
      break;
    case 'W':
      if(rover.x>=9){
        msgOffGrid();
      } 
      else if(obstacle((rover.y), rover.x + 1)){
      break;
      } else {
        rover.x++
      }
      break;
  }

rover.travelLog.push([rover.x,rover.y]);
console.log('New Rover position is: '+ rover.x + ',' + rover.y + '.' + 'Travel of the rover x,y: ' + rover.travelLog);

}

// ====================== COMMANDS

function command(order){
for(let i = 0; i < order.length; i++){
     switch (order[i]){
    case 'F':
      moveForward(rover);
      break;
    case 'B':
      moveBackward(rover);
      break;
    case 'L':
      turnLeft(rover);
      break;
    case 'R':
      turnRight(rover);
      break;
    default:
      validCommand();
      break;
  }
} 
return rover.travelLog;
}

// command('RFFRFFL')

// ====================== WHERE IS THE ROVER?

function currentPosition() {
console.log('Rover is at '+ rover.x + ','+ rover.y);
}

//currentPosition()