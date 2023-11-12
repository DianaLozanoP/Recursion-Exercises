/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 1) {
    return nums[0];
  } else {
    //mutiply the first number with the multiplication of the rest 
    //slice the array everytime and call function
    //it will mutiply array idx 0 and slice again
    //at some point array will be just one digit
    return nums[0] * product(nums.slice(1))
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) {
    return words[0].length;
  }
  else {
    if (words[0].length > words[words.length - 1].length) {
      words.pop();
      return longest(words);
    }
    else {
      words.shift()
      return longest(words);
    }
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 2) {
    return str[0];
  }
  else {
    return str[0] + everyOther(str.slice(2));
  }
}


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str[0] === str[str.length - 1]) {
    console.log(str, str.length)
    if (str.length <= 3) {
      return true;
    }
    else {
      return isPalindrome(str.slice(1, str.length - 1))
    }
  }
  else return false;
}


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length - 1) {
    return -1;
  }
  if (arr[idx] === val) {
    return idx;
  }
  else {
    idx += 1;
    return findIndex(arr, val, idx);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 1) {
    return str;
  }
  else {
    return str[str.length - 1] + revString(str.slice(0, str.length - 1));
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  for (let val of Object.values(obj)) {
    if (typeof val == "string") {
      arr.push(val);
    }
    else if (typeof val == "object") {
      arr.push(...gatherStrings(val));
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
