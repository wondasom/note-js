// 1. Use strict
// added in ES 5
// use this for Vanila Javascript
// It is not a statement, but a literal expression,
// ignored by earlier versions of JavaScript.
// To fully enable all features of modern JavaScript, we should start scripts with "use strict".
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.
// Modern JavaScript supports “classes” and “modules” – advanced language structures,
// that enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them(classes or modules).

// Benifits of using use strict:
// ㄴ Strict mode eliminates some JavaScript silent errors by changing them to throw errors.
// ㄴ Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that’s not strict mode.
// ㄴ Strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.
// ㄴ It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object).
// ㄴ It disables features that are confusing or poorly thought out.
// ㄴ Strict mode makes it easier to write “secure” JavaScript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6) - mutable
let globalName = 'glbal name';
{
	let name = 'dasom';
	console.log(name);
	name = 'hello';
	console.log(name);
	console.log(globalName);
}

console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope

// 3. Constant - immutable, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor 💓 immutable data type always for a few reasons:
//    - security
//    - thread safety
//    - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function(=functions can be variables too)

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value:${count}, type: ${typeof count}`);
console.log(`value:${size}, type: ${typeof size}`);

// 1) number - special numeric values = infinity, -infinity, NaN
// always validate the number before going to computation
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// 2) bigInt (fairly new, don't use it yet) - available in Chrome, Firefox
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ (2**53)
console.log(`value: ${bigInt} type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// 3) string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting} type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
// ☝🏼 template literals (only with backticks): the expression inside ${…} is evaluated and the result becomes a part of the string.
console.log(`value: ${helloBob} type: ${typeof helloBob}`);

// 4) boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead} type: ${typeof canRead}`);
console.log(`value: ${test} type: ${typeof test}`);

// 5) null
let nothing = null;
console.log(`value: ${nothing} type: ${typeof nothing}`);

// 6) undefined
// The meaning of undefined is “value is not assigned”.
let x;
console.log(`value: ${x} type: ${typeof x}`);

// 7) symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // true
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description} type: ${typeof symbol1}`);
//What’s the benefit of using Symbol("id") over a string "id"?

// As user objects belongs to another code, and that code also works with them,
// we shouldn’t just add any fields to it. That’s unsafe.
// But a symbol cannot be accessed accidentally, the third-party code probably won’t even see it,
// so it’s probably all right to do.

// 8) object, real-life object, data structure
const dasom = { name: 'dasom', age: '27' };
dasom.age = 20;

// 5. Dynamic Typing: dynamically typed language (type change occuring during the runtime)
// cf. C or Java: statically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text} type: ${typeof text}`);
text = 1;
console.log(`value: ${text} type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text} type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text} type: ${typeof text}`);
console.log(text.charAt(0)); // error

// 5-1. String Conversion
// 5-2. Numeric Conversion
//   ㄴ undefined -> NaN
//   ㄴ null -> 0
//   ㄴ true -> 1
//   ㄴ false -> 0
//   ㄴ string(if it is empty) -> 0
//   ㄴ string(if it is numeric character) -> number
//   ㄴ string(if it is a combination of numeric character and string) -> NaN
// 5-3. Boolean Conversion
//   ㄴ 0 -> false
//   ㄴ empty string -> false
//   ㄴ null -> false
//   ㄴ undefined -> false
//   ㄴ NaN -> false
//   ㄴ other values -> true

// 6. Methods of Primitives
// ㄴ Primitives are still primitives. A single value, as desired.
// ㄴ The language allows access to methods and properties of strings, numbers and symbols.
// ㄴ In order for that to work, a special "object wrapper" that provide the extra functionality is created, and then destroyed
// object wrappers: String, Number, Boolean and Symbol
let str = 'nice to meet you';
console.log(str.toUpperCase()); // NICE TO MEET YOU
let num = 1.2345;
console.log(num.toFixed(2)); // 1.23

// ✨ Name things right
// Some good-to-follow rules are:
// 1. Use human-readable names like userName or shoppingCart.
// 2. Stay away from abbreviations or short names like a, b, c, unless you really know what you’re doing.
// 3. Make names maximally descriptive and concise.
//   ㄴ Examples of bad names are data and value. Such names say nothing.
//   ㄴ It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
// 4. Agree on terms within your team and in your own mind.
//   ㄴ If a site visitor is called a “user” then we should name related variables currentUser or newUser instead of currentVisitor or newManInTown.

// 🎯 typeof - examples
typeof undefined; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof 'foo'; // "string"

typeof Symbol('id'); // "symbol"

typeof Math; // "object"  (1)

typeof null; // "object"  (2)

typeof alert; // "function"  (3)

// (1)
// Math is a built-in object that provides mathematical operations.
// (2)
// The result of typeof null is "object". That’s an officially recognized error in typeof behavior, coming from the early days of JavaScript and kept for compatibility.
// Definitely, null is not an object. It is a special value with a separate type of its own.
// (3)
// The result of typeof alert is "function", because alert is a function.
// Functions belong to the object type. But typeof treats them differently, returning "function".
// That also comes from the early days of JavaScript.
// Technically, such behavior isn’t correct, but can be convenient in practice.
