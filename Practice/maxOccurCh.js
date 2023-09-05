let dataString = "Hello I'm levis";
let strObj = {};
let maxKey = "";
for (let i = 0; i < dataString.length; i++) {
  let ch = dataString[i];
  if (ch !== " ") {
    if (!strObj[ch]) {
      strObj[ch] = 0;
    }
    strObj[ch]++;
    if (maxKey == "" || strObj[maxKey] < strObj[ch]) {
      maxKey = ch;
    }
  }
}

console.log(strObj);
console.log(maxKey);
