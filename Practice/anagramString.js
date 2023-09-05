let str1 = "heart";
let str2 = "earh";

function checkAnagram(str1, str2) {
  let str1Array = str1.split("");
  let str2Array = str2.split("");
  if (str2Array.length !== str1Array.length) {
    console.log("FALSE");
    return;
  }

  for (let i = 0; i < str1Array.length; i++) {
    let str1ch = str1Array[i];
    let indexStr2 = str2Array.indexOf(str1ch);
    if (indexStr2 === -1) {
      break;
    } else {
      str2Array.splice(indexStr2, 1);
    }
  }

  if (str2Array.length > 0) console.log("FALSE");
  else console.log("TRUE");
}

checkAnagram(str1, str2);
