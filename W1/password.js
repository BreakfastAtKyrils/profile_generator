const replace = function(char) {
  if (char === 'a') return 4
  if (char === 'e') return 3
  if (char === 'o') return 0
  if (char === 'l') return 1
  else return char;
}

const obfuscate = function(string) {
  stringArray = string.split('');
  for (let x = 0; x < stringArray.length; x ++) {
    stringArray[x] = replace(stringArray[x])
  }
  return stringArray.join('')
}

const input = process.argv[2];
obfuscate(input)
