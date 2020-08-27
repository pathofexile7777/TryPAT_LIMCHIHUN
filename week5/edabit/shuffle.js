//https://edabit.com/challenge/eitMRpuJR3Ls4zQsn

function nameShuffle(str) {
  var pattern = /(\w+)\s(\w+)/;
  var result = str.replace(pattern, "$2 $1");
  console.log(result);
}

nameShuffle("Rosie O'donell");
