'use strict';
// add your solution here!
function Garden(crops, students){
  var cropArr = crops.split("\n")
  var cropObj = {
    "R":"radishes",
    "C":"clover",
    "G":"grass",
    "V":"violets"
  }
  cropArr.forEach(function(x,y){
    console.log(x[y])
  })

  var th = this
  students.sort().forEach(function(kid,kidIndex){
    var name = kid.toLowerCase()
    th[name] = []
    cropArr.forEach(function(x){
      th[name].push(cropObj[x[kidIndex*2]], cropObj[x[(kidIndex*2) + 1]])
    })
  })

  function prots(){

  }

}
