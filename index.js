// add solution here
function theBeatlesPlay(musicians, instruments) {
  var temparray = [];
  for (let i = 0; i < musicians.length; i++) {
    temparray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return temparray;
}

function johnLennonFacts(array) {
  var temporary = [];
  for (let i = 0; i < array.length; i++) {
    temporary.push(`${array[i]}!!!`);
  }
  return temporary;
}