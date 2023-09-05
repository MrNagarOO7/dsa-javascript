let str1 = "level";

function checkPalindrom(str1) {
  let start = 0;
  let end = str1.length - 1;
  let result = true;

  while (end > start) {
    if (str1[start] !== str1[end]) {
      result = false;
      break;
    }
    start++;
    end--;
  }

  if (!result) console.log("FALSE");
  else console.log("TRUE");
}

checkPalindrom1(str1);
