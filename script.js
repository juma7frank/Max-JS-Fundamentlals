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
//The splice() can be used for some various purpose, primarily to delete an item OR itens fron an array...
//For deleting an item/items you begin by defining where you want splice to check from. So, the first argument is telling splce fro which index it should start cheking, the second item is the number of items states the number of items to be removed, starting from that item...
hobbies.splice(1, 1, 'Loving');
console.log(hobbies);
//
//