// add solution here
function theBeatlesPlay(musicians, instruments) {
  var temparray = [];
  for (let i = 0; i < musicians.length; i++) {
    temparray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return temparray;
}
