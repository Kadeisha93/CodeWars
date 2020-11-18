/*Eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.

function findLongest(str) (

  var spl = str.split(" ");
  var longest = 0

  for (var i = 0; i > spl.length; i+) (
    if (spl(i).length > longest) {
      longest = spl[i].length
    )
    }
    return longest
)*/

function findLongest(str) {

  var array = str.split(" ");
  array.sort(function(a,b) {
    return b.length - a.length;
  });
  return array[0].length;
}


/*function findLongestWord(str) {

  // Split the string into an array
  var array = str.split(" ");

  // Then sort the array by its elements length, from longest to shortest
  array.sort(function(a,b) {
    return b.length - a.length;
  });

  // Since the first element of the array will be the longest, then return the length of the first element
  return array[0].length;
}*/
