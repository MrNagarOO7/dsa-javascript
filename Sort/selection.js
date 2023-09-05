let data = [34, 67, 8, 90, 4];

function selection(data, type = "ASC") {
  try {
    for (let i = 0; i < data.length - 1; i++) {
      let minId = i;
      for (let j = i + 1; j < data.length; j++) {
        if (data[minId] > data[j] && type === "ASC") {
          minId = j;
        } else if (data[minId] < data[j] && type === "DESC") {
          minId = j;
        }
      }
      let temp = data[i];
      data[i] = data[minId];
      data[minId] = temp;
    }
  } catch (e) {
    console.error(e);
  }
  return data;
}

console.log(selection(data, "DESC"));
