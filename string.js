// String Methods
// ==============

// length:        Returns the length of the string.
// toUpperCase(): Converts the entire string to uppercase.
// toLowerCase(): Converts the entire string to lowercase.
// split():       Splits the string into an array of substring
// join() :         it is use to joining the words
// reverse(): Reverses the order of elements in the array.
// charAt(index): Returns the character at the specified index.
// indexOf():       Returns the index of the first occurrence of the specified substring.
// lastIndexOf(): Returns the index of the last occurrence of the specified substring.
// slice():       Extracts a section of the string (similar to substring)
// substring() :    it use to get a particle value in the string value
// replace():     Replaces the specified value with a new value.
// replaceAll():    it use to replace all the words in the given para
// trim():        Removes whitespace from both ends of the string.
// concat():      Joins two or more strings.
// startsWith():  Checks if the string starts with the specified substring.
// endsWith():    Checks if the string ends with the specified substring.
// includes():    Checks if the string contains the specified substring.


let str = "hello java Welcome to java world"
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.split("").reverse().join(""));
console.log(str.charAt(6));
console.log(str.indexOf('a'));
console.log(str.lastIndexOf('a'));
console.log(str.slice(5));
console.log(str.substring(0,4));
console.log(str.replace("java","js"));
console.log(str.replaceAll("java","jj"));
console.log(str.trim());
console.log(str.concat(" nice to meet you"));
console.log(str.startsWith('e'));
console.log(str.endsWith('d'));
console.log(str.includes('Wecl'));




let f = "banana";
console.log(f.split("a").length-1);



