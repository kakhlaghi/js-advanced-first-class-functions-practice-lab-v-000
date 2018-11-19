// Code your solution in this file!
const logDriverNames = function (someArray) {
   someArray.forEach(function(item){
    console.log(item.name);
  });
};

const logDriversByHometown = function (drivers, hometown) {
   drivers.forEach(function (driver){
    if (driver.hometown == hometown){
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function (drivers){
    drivers.sort()
});
}
