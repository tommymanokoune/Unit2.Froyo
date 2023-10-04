let flavors = prompt("Please enter a list of comma-separated froyo flavors ")
flavors;
let flavorList = {};
let flavor = flavors.split(",");
for (var i=0; i<flavor.length; i++){
    flavorList[flavor[i]] = (flavorList[flavor[i]] ||0) +1;
}
console.log(flavorList);