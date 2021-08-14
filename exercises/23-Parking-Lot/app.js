let parking_state = [
  [1,1,1],
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
console.log(parking_state.length);

function getParkingLotState(param){
  let state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
  }
  for (let i = 0; i < param.length; i++){
    for (let j = 0; j < param[i].length; j++){
      if (param[i][j] == 2){
        state.availableSlots += 1
        state.totalSlots += 1
      }
      else if (param[i][j] == 1){
        state.occupiedSlots += 1
        state.totalSlots += 1
      }
    }
  }
return state
} 

console.log(getParkingLotState(parking_state))