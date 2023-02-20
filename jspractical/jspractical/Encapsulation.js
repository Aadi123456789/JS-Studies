
class Utilities {
    static change(s) {
     var string= s.split(" ").join("")
     return string.charAt(0).toLowerCase() + string.slice(1);
    }
  }
  console.log(Utilities.change("hello there"))
  console.log(Utilities.change("Monkey Banana"))
  console.log(Utilities.change("HELLO THERE"))
  console.log(Utilities.change("I love cookies"))

 