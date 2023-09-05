let data = [12, 11, 13, 5, 6];

function insertion(data, type = "ASC") {
  try {
    for (let i = 1; i < data.length; i++) {
      let j = i - 1;
      let current = data[i];
      while (j >= 0 && data[j] > current) {
        data[j + 1] = data[j];
        j--;
      }
      data[j + 1] = current;
    }
  } catch (e) {
    console.error(e);
  }
  return data;
}

console.log(insertion(data, "DESC"));
