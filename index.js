// Code your solution in this file!
const logDriverNames = function (someArray) {
  return someArray.forEach(function(item){
    console.log(item.name)
    })
}

const logDriversByHometown = function (drivers, hometown) {
  return drivers.forEach(fucntion(driver, hometown){
    if (driver.hometown == hometown){
      console.log(driver.name)
    }
  })
}
