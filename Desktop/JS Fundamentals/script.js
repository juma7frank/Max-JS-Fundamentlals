/*
//
//WAYS OF CREATING ARRAYS///////////////////
//
//The most common way of declaring an array is through the square brackets
const numbers = [1, 2, 3];
console.log(numbers);
//
//When you insert a single number in new Array() method, what you've just done is to define the length that the array should have..
//More than one element will result in a normal array having the inserted elements..
// I think you can also ommit the new keyword...yes you can! I Just confirmed 😅
const moreNumbers = Array('Juma', 23);
console.log(moreNumbers);
//
// Yeah, there's also Array.of() method of creating an array 😂
const yetMoreNumbers = Array.of(1, 2, 4, 'Juma');
console.log(yetMoreNumbers);
//
//Array.from() is useful in converting iterables like Nodelist & array-like objects to arrays...
//Array-like object is an official term in javascript
//Consider the following example:
const list = document.querySelectorAll('li');
//
//list at this level/point is a nodelist, an array-like object, and so through Array.from() method you can convert it to become an array, meaning from aside from indexing, you can apply other methods that array has to offer like splice() method, slice() method and so on...
console.log(list);

const muchMoreNumbers = Array.from(list);
console.log(muchMoreNumbers);
*/

//
//ARRAY METHODS///////////////////////
//
//push() method adds an item/element at the end of the array
//You can also add multiple element through push, by inserting multiple elements 😉
const hobbies = ['Studying', 'Praying', 'Cooking', 'Working', 'Tutoring'];
hobbies.push('Walking');
console.log(hobbies);
//
//pop() removes the last item/element of the array...
hobbies.pop();
console.log(hobbies);
//
//unshift() adds an element at the beginning of an array..
//It's called unshift because it shifts to the right all the items in the array in order to add an element at the beginning of the array...
hobbies.unshift('Teaching');
console.log(hobbies);
//
//shift() methods removes an element at the beginning of an array...
//This happens because the shift(), as the name suggests, shifts the items to the left and thus removes an item at the beginning...
hobbies.shift();
console.log(hobbies);
//
//The splice() can be used for various purposes, primarily to delete an item OR items fron an array...
//For deleting an item/items you begin by defining where you want splice to check from. So, the first argument is telling splce fro which index it should start cheking, the second item is the number of items states the number of items to be removed, starting from that item...
hobbies.splice(1, 1, 'Loving');
console.log(hobbies);
//
//When you use the negative sign, especially for the first element, this means that splice will begin to check from the right-side of the array
hobbies.splice(-2, 1);
console.log(hobbies);
//
//the slice() method is handy, first of all for copying arrays...
//Arrays are in the end objects, and therefore are reference values..
//So in reassigning an array to another constant/variable, the constant/variable will only point to the address of that array in memory...
//that's where the slice() method becomes useful, for RETURNING NEW ARRAYS..
//Consider teh following use-case:
const testResults = [1, 5.3, 1.5, 10.99, 'Jesus', -5, 10];
//
//Without the slice(), if I try to push anything on testResults array, storedResults would be affected...
//But with the slice() method, a brand new array, with different address in memory is created
const storedResults = testResults.slice();

testResults.push(5.78);

console.log(storedResults, testResults);
//
//However, this is not the only purpose of the slice() method, so let's examine some more...
//slce() method can be useful in creating ranges in an array...when you want certain items of the array, and not the whole array..
//So in this example, the first argument is the index of where you want to start from, then the second argument is the index you want to stop at..
//The item at the first index is included in that range while the last one is not..
const range = testResults.slice(1, 4);
console.log(range);

//Also, you can use negative index, but both have to be negative, and also the second argument should always be greater than the first
const negativeIndices = testResults.slice(-7, -4);
console.log(negativeIndices);
// Also, as a side note, when you insert a single element, slice() will start looking at that speified index, until the end
//
//the concat() method is used to extract items of an array, and add them to aan existing array..
//It returns a brand new array, which makes it more useful
const concatArray = [23, 25, 'Jesus', 'is', 'LORD'];
//Or you can smply insert the array directly inside the concat method
const concated = testResults.concat(concatArray);
console.log(concated);
//
//IndexOf() & lastIndexOf() methods are used, as their names suggest, to find the index of the item that is passed as an argument
//they return -1 if the item is not found/isn't present
const fourthValue = testResults.indexOf(10.99);
console.log(fourthValue);
//
//lastIndexOf() begins looking from the right-side of the array..
console.log(concated.lastIndexOf('Jesus'));
//
//However, when having reference values like objects in an array, indexOf() & lastIndexOf() methods may not be up to the task, in looking for the indices...
//This is because in trying to find the reference value, like for instance an object, it'll returns -1, which means that it didn'd find anything. This happens since while inserting the exact object as an argument in the indexOf() OR lastIndexOf() methods, you explicitly create another new object entirely, in a new address in memory....
const personData = [{ firstName: 'Juma' }, { lastName: 'Frank' }];
console.log(personData.indexOf({ lastName: 'Frank' }));
//
//To solve this issue with reference values, javascript has anotehr array method called the find() method...
//the find() method takes a function as an argument, usually it's an anonymous function unless you want to reuse it again and so reference it with the function...
//So it takeas another function as an argument, then that function that is passed takes a maximum of 3 arguments, i.e the single item, the index of that item AND the full array...
//Assuming we want to obtain the lastName object in our personData array:
const juma = personData.find((name, idx, names) => {
  //find() method has to return a boolean, which returns true for that item we're looking for, and false for the rest of the items
  return name.firstName === 'Juma';
});

console.log(juma);
//
//As the name says, findIndex() method searches the entire array and finds the index of the item, it's looking for...and of course you can use the index as you wish
const frankIndex = personData.findIndex((person, idx, persons) => {
  return person.lastName === 'Frank';
});

console.log(frankIndex);
//
/*/forEach() method, is an alternative of the for-loop, save that in the forEach() method you have more control, as shown in the following example:
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];
//
// we can use the for-of loop to populate the taxAdjustedPrices array, but a better way, as you shall be seeing, is using the forEach() method
for (const price of prices) {
  taxAdjustedPrices.push(price * (1 + tax));
}

console.log(taxAdjustedPrices);
//
//forEach() version of it...
//So as you can see, with forEach you can do much, since you not only have the items of the array, but also the index and the full array at your disposal
prices.forEach((price, idx, prices) => {
  const priceObj = {
    index: idx,
    tax: price * (tax + 1),
  };
  console.log(priceObj);
});
*/
//
//the map() method is powerful for returning values that are mapped, i.e values that are transformed,
//So while in for-loop and in forEach() method we push the adjuted items onto the array, the map() method returns already-adjusted items
//Additionally, it returns a new array, not pointing to the same address in memory of the initial un-adjusted array in memory
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjprice: price * (1 + tax) };
  return priceObj;
});

// console.log(prices, taxAdjustedPrices);
//
//the sort() method, as its name says, arranges the items in an array in a sorted form,
//You can use the .sort() method without any argument, but if you do this, sort() will take the numbers/items as strings, and sort them out,
//So for for the prices array, 1 > 3, instead of 10.99 > 3.99,
//However, the sort() method recieves a function that takes two parameters, a AND b, in order to compare two pairs of the array, from the left side to the right side and arranging it based on their sizes...
//The logic inside the sort method is definitely upto you, but I'd advice you use the one shown below
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(sortedPrices);
//
//the reverse() methord arranges the array from the other way around, thus the last becomes the first, and vice versa...
//It doesn't take any argument, just reverses the array's arrangement
console.log(sortedPrices.reverse());
//
//filter() method is an array method, that filters items in the array that satisfies a condition..
//likw find() or findIndex() methods,, filter() method takes a function as an argumrnent that returns a boolean...
//It returns true for the item that is to be stored in the newly created array(since filter yeilds a brand new array), and false for that which is to be dropped..
//Notice, the power of the Arrow function, in making the function much shorter
const filteredPrices = prices.filter((p) => p > 6);

console.log(filteredPrices, prices);
//
// In as much as you can sum up the numbers in an array through forEach() as shown below OR even for-loop, there's another powerful javascript in-built funciton called reduce, that makes life easier
// let sum = 0;
// prices.forEach((price) => {
//   sum += price;
// });

// console.log(sum);
//
//the reduce() method reduces items in an array, mostly array of numbers, to a more simpler value, like the sum of all the items of the array
//it also takes a function as an argument, and another optional second argument which marks the starting point. The calleback function takes four arguments, namely previousValue, currentVaue, currentIndex & the full array,
//reduce() returns the overall simpler value
const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
  return prevValue + curValue;
}, 0);

console.log(sum);
//
//split() method is a string method, not an array method, that is handy in converting in splitting strings into an array of items that you wish to have from that string
const data = 'Rongai;0050;2025';
//
//So as an argument, you pass the splitter that you'll use to split the string, and split will return a new array of the items that are fragmented
const splittedData = data.split(';');
splittedData[1] = +splittedData[1]; // This if you need the numbers to be of type number and not a string, otherwise everything will be a string, including the numbers
console.log(splittedData);
//
//join() method does the opposite of the split() method, in that it joins items in an array into a string, even if there was a number, join() will convert it to be of type string
const nameFragments = ['Jesus', 'is', 'LORD'];
// You can leave it without an argument, which in this case join() will seperate the items with a comma by default
//However, you can specify what should join the items, whether it's a comma, whitespace, underscore, hyphen etc
//The arguments of both split() and join() should be a string
const confession = nameFragments.join(' ');
console.log(confession);
//
//the spread operator(...array) helps in extracting items in an array to become standalone comma seperated values
//It can be used for a couple of reasons, like copying the full array, BUT IS ESPECIALLY useful in in-built functions that require single elements and not an array, like the min() method in the Global Math Object...
//for copying arrays...
const copiedNameFragments = [...nameFragments];
nameFragments.push('Amen');
console.log(copiedNameFragments, nameFragments);
//
//for the special methods lie the min() methods...
console.log(Math.min(...prices));
//
//Since objects are refrerence values, yes we can make a copy of the array, but the issue comes in when you want to manipulate the exact object in the array
const persons = [
  { name: 'Juma', age: 32 },
  { name: 'Norman', age: 22 },
];
const copiedPersons = [...persons];
persons.push({ name: 'Judith', age: 25 });
//
//So you'll discover that here, both persons and the copiedpersons, name Norman will be changed to Wachira..
//Therefore in this case other methods such as teh map() method becomes important
// persons[1].name = 'Wachira';
//
//using the map() mthod...(By the way in the map method, we wrap the curly braces with brackets to tell javascript that this isn't the function body)
const mappedMethod = persons.map((person) => ({
  name: person.name,
  age: person.age,
}));
//
// Hence if we change one array, It wouldn't reflect in the other one, since map() returns a new array entirely
mappedMethod[1].name = 'Wachira';
console.log(mappedMethod, persons);
//
//Array destructuring is an es6 feature, where you want to store items in an array in a simpler way. Here's how..
const nameData = ['Juma', 'Frank', 'Saved', 23];
//
//This is the traditonal way, but array destructuring makes it easier..
// const firstName = nameData[0];
// const lastName = nameData[1];
//
//Also, here's where the REST OPERATOR becomes handy, in that it gathers items, mostly the rest of the information into an array...
//SPREAD OPERATOR extracts items in an array, while REST OPERATOR gathers items into an array..
const [firstName, lastName, ...otherInfo] = nameData;
console.log(firstName, lastName, otherInfo);
