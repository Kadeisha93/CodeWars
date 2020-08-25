/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples*/

function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}
