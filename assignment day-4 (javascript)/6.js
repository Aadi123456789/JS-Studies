
let validitycheck = (name) => {
    const check = name.replace(".", "").split(" ");
    if (!name.includes(".")) return false;
    if (check.length < 2 || check.length > 3) return false;
    if (check.length === 2 && check[0].length == 1 && check[0].charAt(0) < "a") {
      return true;
    }
    return false;
  };
  console.log(validitycheck("H. George Wells"));
  console.log(validitycheck("H. Wells"));
  console.log(validitycheck("H. George W."));
  console.log(validitycheck("h. Wells"));
  console.log(validitycheck("H Wells"));
  console.log(validitycheck("H. George W."));
 