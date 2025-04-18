const obj = {
  funcHelp() {
    console.log(this);
  },
  func: () => {
    return obj.funcHelp();
  },
};

obj.func(); // calls obj :)


// console.log(x());

// const x = new Function("return this"); // calls window

// const obj1 = {
//     func: () => {
//       return new Function("return console.log(this)")(); 
//     },
// };
// obj1.func(); // calls window

