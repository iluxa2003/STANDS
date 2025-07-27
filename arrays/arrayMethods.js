// const arr1 = [];
// console.log('Push method:');
// arr1.push(1);
// arr1.push(2);

// console.log(arr1);

// const arr2 = [1, 2];
// console.log('Pop method:');
// console.log(arr2.pop());
// console.log(arr2);

// const arr3 = [1, 2, 3, 4];
// console.log('Shift method:');
// console.log(arr3.shift());
// console.log(arr3);

// const arr4 = [2, 3, 4];
// console.log('Unshift method:');
// console.log(arr4.unshift(1));
// console.log(arr4);

// const arr5 = [1, 2, 3, 4];
// console.log('ForEach method:');
// arr5.forEach((i) => console.log(i * 2));
// console.log(arr5);

// const arr6 = [1, 2, 3];
// console.log('Map method:');
// console.log(arr6.map((i) => i * 2));
// console.log(arr6);

// const arr7 = [1, 2, 3];
// console.log('Filter method:');
// console.log(arr7.filter((i) => i % 2 == 0));
// console.log(arr7);

// const arr8 = [1, 2, 3, 4, 5];
// console.log('Reduce method:');
// console.log(arr8.reduce((x, i) => x + i, 0));
// console.log(arr8.reduce((x, i) => x + i, 1));
// console.log(arr8);

// const arr9 = [1, 2, 3];
// console.log('ReduceRight method:');
// console.log(arr9.reduce((x, i) => x + i, 0));
// console.log(arr9.reduce((x, i) => x + i, 1));

// const arr10 = [];
// console.log('Some method:');
// console.log(arr10.some(() => x % 2));

// const arr11 = [];
// console.log('Every method:');
// console.log();

// const arr12 = [];
// const arr13 = [];
// const arr14 = [];
// const arr15 = [];
// const arr16 = [];
// const arr17 = [];
// const arr18 = [];
// const arr19 = [];

const removeDuplicates = function (nums) {
  // let i = 0
  let shadow = [];
  for (let j = 0; j < nums.length - 1; j++) {
    if (nums[j] !== nums[j + 1]) {
      shadow.push(nums[j]);
    }
  }
  shadow.push(nums[nums.length - 1]);
  nums = [...shadow];
  return nums;
};

const result = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 5, 5, 5]);
console.log(result);

console.log(JSON.stringify(result) === JSON.stringify([0, 1, 2, 3, 4, 5]));
