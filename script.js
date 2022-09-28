'use strict';

/////////////////////////////////////////////////////
// What is Object-Oriented Programming
// Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects;
// paradigm simply means the style of the code, so how we write and organize code, now we use objects to model
// (describe) aspects of the real world, like a user or a to-do list item or even more abstract
// features like an HTML component or some kind of data structure. Now as we already know, objects can contain
// data, which we call properties, and also code, which we call methods. So we can say that by using objects,
// we pack all data and the corresponding behavior all into one big block.
// In OOP objects are self-contained pieces of code or blocks of code, like small applications on their own.
// And we then use these objects as building blocks of our applications and make objects interact with
// one another. Now these interactions happen through a so-called public interface, which we also call API.
// This interface is basically a bunch of methods that a code outside of the objects can access and that we
// use to communicate with the object.
// Why does OOP actually exist? Well, the paradigm was developed with the goal of organizing code, so to make
// it more flexible and easier to maintain. So before OOP, we might have a bunch of codes gathered across
// multiple functions, or even in the global scope without any structure. And this particular like crazy style
// of code is what we usually call spaghetti code and spaghetti code makes it very hard to maintain
// large code bases and let alone, add new functionalities to it. So the idea of OOP was basically created
// as a solution to this problem. And apparently it worked because today, OOP is probably the most popular
// and most widely used programming paradigm in large scale software engineering. Now, OOP is certainly not the
// only way of writing organized and maintainable code. So in fact, there're many other paradigms that have
// become increasingly popular and one of them is functional programming. And functional programming allows us
//  to achieve the exact same goal of basically avoiding spaghetti code. And as I have been saying, we will talk
//  about functional programming later in the course and compare it with OOP. But for now, let's focus on OOP.
//  We have been using objects all the time. However, up until now, we have basically only used objects as loose
//  collections of data and without making them interact with one another. Also, we didn't have a way to generate
//  objects programmatically. All we ever did was using simple object literals, but in OOP, we actually need
//  a way to generate, so to create, new objects from our code. And to do that in traditional OOP, we use
//  something called CLASSES. You can think of a class as a blueprint, which can then be used to create
//  new objects based on the rules described in the class. So it's just like an architecture where the architect
//  develops a blueprint to exactly plan and describe a house. But the blueprint is really just an abstract plan,
//  like a set of rules, but nothing tangible(заметный) that you can actually touch.
//
// "How do we actually design classes? How do we model real-world data into classes?"
// And that's of course a very good question. Now the answer is, as you can imagine, not straightforward.
// So there is not a single correct way of designing classes. There are, however, 4 fundamental principles
// that can guide us toward a good class implementation. And these principles are abstraction, encapsulation,
// inheritance and polymorphism. And these are actually techniques that can also be used outside of OOP, but
// they are especially relevant in this context.

// First one is abstraction.

// Abstraction basically means to ignore or to hide details that don't matter.
// This allows us to get an overview perspective of whatever it is that we are implementing instead of
// messing(возиться) with details that don't really matter to our implementation.
// Abstraction is really important, not just in OOP, but in programming in general. In fact, we create and use
// abstractions all the time. For example, take the addEventListener function that we used all the time. Do we
// actually know how exactly it works behind the scenes? Well, we don't. And do we care? No, not really. Right?
// And we don't have to because once more, the low-level details of how exactly it works has been obstructed
// away from us. We are simply the user. And so we can simply use that function without completely understanding
// it and without having to implement it ourselves. So that's abstraction, which actually blends in with the next
// principle, which is encapsulation.

// Encapsulation is basically means to keep some properties and methods
// private inside the class so that they're not accessible from outside the class. However, some methods can,
// of course, be exposed as a public interface, which we call API. And this is exactly what I meant
// at the beginning of the lecture when I said that interactions between objects happen through a public
// interface.
// state refers to an object's data
// so we want no one else outside of the class to be able to use this method, and so basically we don't make it
// part of the public interface, so the public interface is essentially all the methods that are not private,
// so that are not encapsulated. So making methods private makes it easier for us to change our code without
// breaking code from the outside, which might rely on some of these methods. For example, if the check spam
// method was public, then it could be used anywhere in our code. And if we then changed the implementation of
// the method, it might break that code that is relying on it. So in summary, we should always have the goal to
// nicely encapsulate most of our state and methods and only leaving essential methods public for the reasons
// that I just explained. Next up, we have inheritance.

// Inheritance
// When we have two separate identities(classes) we will
// end up with a lot of duplicate code and we already know that that's bad. So in OOP, when we have two classes
// that are closely related, like user and admin, we can have one class inherit from the other. So we will
// have one parent class and one child class, and the child class then extends(расширяет) the parent class. But
// what does all of that actually mean? Well, it's actually quite intuitive, I think. So just like you as a child
// probably inherited some features of your parents, a child class inherits all the properties and methods from
// it's parent class. Now, in more formal terms, inheritance makes all properties and methods of a certain class
// available to a child class, which of course then forms a hierarchy between these two classes. And the goal
// of this is to reuse logic that is common to both of the classes. In this case, both the admin and the user
// need to log in. And so instead of writing that logic twice, it makes sense to inherit the login method from
// the more global class, which is the parent class user, to the more specific class, which is the child class
// admin. Now of course a child class can then also have it's own methods and properties. So at the end of the
// day the child class ends up with some methods and properties from it's parent and some of it's own. So we
// can say that the admin is also a user, but basically an extended user, so with some added functionality.

// Finally, last principle is polymorphism. Means that a child class can overwrite a method that it inherited
// from a parent class. And here are our user and admin classes again. But now we also have a third class, which
// which is the author. Now admin and author are both really just special kinds of users, and so it makes sense
// that they both inherit from the user class. Therefore, they inherit all the properties and methods from the
// user class. Let's say that an admin requires a different kind of login method. For example, a more secure one
// which has two-factor authentication. And let's say that we also need a special login method for authors.
// Well, in each class we simply just write a new method, which is also called login. And then, according to
// polymorphism, that login method will overwrite the login method that has been inherited from the user class.
// And that's actually it

//////////////////////////////////////////////////////
// OOP in JavaScript
// process of creating an instance is called instantiation.
// In JavaScript we have something called prototypes, and all objects in JavaScript are linked to a certain
// prototype object. So we say that each object has a prototype. And now here comes the magic. So,
// the prototype object contains methods and properties that all objects that are linked to that prototype.
// And this behavior is usually called prototypal inheritance. So, again, prototypal inheritance means that
// all objects that are linked to a certain prototype object can use the methods and properties that are
// defined on that prototype. So basically, objects inherit methods and properties from the prototype which
// is the reason why this mechanism is called PROTOTYPAL INHERITANCE. Just note that this inheritance is
// actually different from the inheritance that we talked about in the last lecture. So that was one class
// inheriting from another class. But in this case, it's basically an instance inheriting from a class.
// So that's very different and so keep that in mind. Now we can also say that objects delegate behavior
// to the linked prototype object. And behavior is just another term for methods here. So besides
// prototypal inheritance, we also call this mechanism DELEGATION. And that's also the reason why this
// arrow is pointing UPWARDS because technically, objects delegate their behavior to the prototype.
// On the other hand, in classical OOP with classes, the behavior, so the methods, are actually copied
// from the class to the objects and so that is completely different. So Jonas knows that this is a lot of new
// stuff to take in, so a lot of new words and new concepts. But this is just to paint a very clear picture
// and to give you the complete overview. What is matters to him is that i understand how does prototypal
// inheritance actually works. Because, when we actually start using this in practice in the next lecture,
// it won't really matter if it's called inheritance or delegation as long as it just works as intended
// But since you came to this course to learn how things actually work in JavaScript, I'm giving you all
// that information here. Even though for now it looks a little bit too much, but i'm sure you will find
// it useful eventually. So actually, we will come back to this diagram and fill it with some more detail
// after we have actually implemented prototypes in JavaScript. So after you have actually see how they work
// in practice. And by then, i'm sure that all this will make 100% sense to you. But anyway, we have actually
// already seen this mechanism in action many times before but without knowing that it was happening.
// For example, each time that we used an array method like map, we are able to use that method because of
// prototypal inheritance. So, when you go to MDN to check the documentation for any array method, what you will see
// there is that it's actually called Array.prototype.map(), but why is that relevant? So, what does this mean?
// Well, array.prototype is the prototype object of all the arrays that we create in JavaScript. Now this prototype
// object contains all the array methods, including map. So, this is where they are actually defined. So, since
// array.prototype is the prototype of the num array, it means that num is linked to that prototype. And therefore
// it has access to all the methods that are defined on the array.prototype object, just like the map method. So,
// in a sense, our array inherits the map method. Or again, we can also say that the array delegated the behavior
// of mapping to it's prototype. So, you can choose whatever makes more sense in your mind. But what matters is
// that the map method is actually not defined on the num array itself but on it's prototype. And of course, we're
// gonna check out this behavior also in our code in practice. Now you might have a ton of questions in your head.
// Like, how do we actually create prototypes? And, how do we link objects to prototypes? And how can we create new
// objects without having classes from which we can instantiate objects? So, in summary, the question is  how do we
// implement Object-Oriented Programming in JavaScript in practice? Well, in JavaScript there are actually three different
// ways of doing all this:
// 1. the constructor function technique;
// 2. ES6 classes;
// 3. Object.create();
//
// So first, constructor functions are a way of creating objects programmatically using a function which will also set
// the new object's prototype. And this is actually how built-in objects like arrays or maps or sets are implemented.
// Also, this is how OOP has been done in JavaScript basically since the beginning.
//
// Next, the ES6 release introduced classes into JavaScript. And so now, ES6 classes are actually the more modern way
// of doing OOP in JavaScript. However keep in mind that these are actually not the kind of classses that we
// talked about. They are instead just so-called 'synthetic sugar' over constructor functions. So this means that ES6
// classes are basically just a layer of obstruction over constructor functions. So it's really just a nicer syntax that
// makes it easier for newcomers to do OOP in JavaScript. But behind the scenes, ES6 classes are actually implemented
// with constructor functions. And so they also use prototypal inheritance.
//
// Finally, there's also the Object.create() function which is basically the easiest and most straightforward way of
// linking an object to a prototype object. However, it's not as used as the other two methods as we will see over the
// next couple of lectures.
//
// Now to finish, one important thing to keep in mind is that the four principles of OOP, so that's abstraction,
// encapsulation, inheritance and polymorphism are still valid and important with prototypal inheritance.
// let's now finally put OOP into practice and get a bit more technical.

/////////////////////////////////////////////////
// Constructor Functions and the new Operator
// So, we can use constructor functions, to build an object using a function. Now, a constructor function is actually
// a completely(вполне) normal function. The only difference between a regular function and a function that we call constructor
// function is that we call a constructor function with the new OPERATOR.

// in OOP there is this convention that constructor functions always start with a capital letter
// And in fact, other a build-in constructors like array or map or set, follow that convention as well
// Now here i'm using a function expression but of course a function declaration will also work.
// Now an arrow function will actually not work as a function constructor and that's because it doesn't have it's own
// this keyword and we need that. So only function declarations and function expressions.

// this function is basically gonna produce an object and in this case for a Person.
const Person = function (firstName, birthYear) {
    // let's use this knowledge to our advantage, because we already know that in the end of this function
    // the this keyword will basically be returned

    // Instance properties, because properties firstName and birthYear will be available on all the instances
    // that are created through this constructor function
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this, because imagine we were gonna create a hundred or thousands or even ten of thousands of person
    // objects using this constructor function. Then what would happen is that each of these objects would carry around
    // this function here. So if we had a thousand objects, we would essentially create a thousand copies of this function.
    // and so that would be terrible for the performance of our code. Again, don't do this.
    //this.calcAge = function () {
    //console.log(2037 - this.birthYear);
    //};

    // But instead to solve this problem, we are gonna use prototypes and prototypal inheritance
    // function constructors are not really a feature of the JavaScript language. Instead, they are simply a pattern that
    // has been developed by other developers. And now everyone simply uses this. And this now includes you as a new
    // developer. So the real magic really here is this new operator. And the most important thing to understand is
    // really these four steps.

    // by the end of the function our the "this" keyword now has these two new properties;
};

// we call the constructor function using the new keyword
// this new operator is actually a very special operator because what it does is to call this function here. So this Person
// function, but it does a whole lot more than just that
const jonas = new Person('Jonas', 1991);
console.log(jonas);

// we can use this constructor function to create as many different objects as we want
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(jonas instanceof Person);
console.log(jay instanceof Person);

// we can create as many objects now based on this constructor function, and so this is a bit like the analogy from before,
// where this constructor function, is now the blueprint for a house, and then each of these objects that we create through
// that function. So through that blueprint will be the actual house in the real world. So in this case, the actual objects
// with actual data in them. So Matilda and Jack, and so of course, now each of them is it's own new object that we created
// programmatically, using a function constructor. In classical OOP an object created from a class is called an instance,
// Now we didn't technically create a class here because as we discussed before JavaScript doesn't really have classes in
// the sense of traditional OOP. However we did create three objects from a constructor function. And constructor functions
// have been used since the beginning of JavaScript to kind of simulate classes, and so therefore we can still say that,
// for example, jonas is an instance of Person and the same goes for Matilda and for Jack.

// So behind the scenes, there have been four steps.
// 1. New empty object is created, then afterwards
// 2. function is called, and (this = {}, so basically in the execution context of the Person function, the this keyword
// will point to this new object that was created in step number one) in this function call the this keyword will be set
// to this newly created object.
// 3. newly created object is linked to the prototype.
// 4. function automatically return {}; The object that was created in the beginning is then automatically returned from
// the constructor function

//////////////////////////////////////////////////////
// Prototypes
// Well, it can be summarized like this: So, first each and every function in JavaScript automatically has a property
// called prototype and that includes, of course, constructor functions. Now every object that's created by a certain
// constructor function will get access to all the methods and properties that we define on the constructor prototype
// property. So just to visualize in our case, this would be:
console.log(Person.prototype); // All the objects that are created through this constructor function will inherit, so they
// will get access to all the methods and properties that are defined on this prototype property

// that effectively solves this problem that we had before when we added the calcAge method directly to each of the
// objects. We would have created a copy of this method and attached it to every single object and so that's why
// we don't do this. Instead, what we do is this. Because now there exists only one copy of this function. So only one of
// them exists, but then all of the objects that are created using the constructor function can basically reuse this
// function on themselves. And so the "this" keyword, of course, in each of them is as always set to the object that is
// calling the method
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
// But how and why does this actually work? Well, it works because any object always has access to the methods and properties
// from it's prototype. And the prototype of Jonas and Matilda is Person.prototype;
console.log(Object.getPrototypeOf(jonas)); // So the prototype of the Jonas object is essentially the prototype property of
// the constructor function
console.log(Person.prototype);
console.log(jonas);
console.log(Object.getPrototypeOf(jonas) === Person.prototype); // true, huh Jonas(sounded incredibly confusing, didn't it?
// So shouldn't Person.prototype be the prototype of Person,  Well, actually, no. So this is the confusing part.
// So Person.prototype is actually not the prototype of Person. But instead it is what's gonna be used as the prototype of
// all the objects that are created with the Person constructor function, so that's a subtle but important difference that
// you need to keep in mind and in fact, what i just said that is confirmed by this comparison
// (Object.getPrototypeOf(jonas) === Person.prototype))

console.log(jonas instanceof Person);
console.log(Person.prototype.isPrototypeOf(jonas)); // this should also become true and indeed it is, so this confirms
// one more time that Person.prototype is indeed the prototype of Jonas
console.log(Person.prototype.isPrototypeOf(matilda)); // the same for Matilda of course as well
console.log(Person.prototype.isPrototypeOf(Person)); // Person.prototype is not the prototype of Person, it is false, so
// this very common confusion comes from bad naming of this property. So the fact that it's called prototype
// kind of implies that this is the prototype of Person, but as we just learned, it is actually not. Probably shouldn't
// be called prototype but instead something like prototypeOfLinkedObjects

// Anyway, where does proto property on the Jonas object actually come from? Well, remember the new operator that we talked about
// before, well, it contains step number three, which links the empty new object to the prototype.
// So it creates this proto property and it sets it's value to the prototype property of the function that is being called
// And so that's exactly what is written. IT SETS THE PROTO PROPERTY ON THE OBJECT TO THE PROTOTYPE PROPERTY OF THE CONSTRUCTOR FUNCTION

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species); // So own properties are only the ones that are declared directly on the object itself.
// So not including the inherited properties.

console.log(jonas.hasOwnProperty('species')); // false, that's because this property is not really inside of the Jonas object. It simply
// has access to it because of it's prototype, so because it's in the prototype property of Person.

//////////////////////////////////////////////////
// Prototypal Inheritance and The Prototype Chain
// Let's now consolidate the knowledge that we got in a nice diagram that brings everything together that we know so far
// const jonas = new Person('jonas', 1990);
// And everything starts with the Person the constructor function that we've been developing. Now this constructor function has a prototype
// property which is an object and inside that object, we defined the calcAge method and Person.prototype itself actually also has a
// reference back to Person which is the constructor property. So, essentially Person.prototype.constructor is gonna point back to Person
// itself. Now remember, Person.prototype is actually not the prototype of Person but of all the objects that are created through the
// Person function and speaking of the created objects let's now actually analyze how an object is created using the new operator and
// the constructor function. So when we call a function, any function with the new operator:
// 1. the first thing that is gonna happen is that a new empty object is created instantly.
// 2. Then the this keyword in the function call is set to the newly created object. So, inside the function's execution context
// this is now the new empty object and that's why in the function's code we set the name and birth year properties on the "this" keyword
// because doing so will ultimately set them on the new object. So next comes the magical step.
// 3. So now the new object is linked to the constructor function's prototype property so in this case, Person.prototype and this happens
// internally by adding __proto__ to the new object. So Person.prototype is now the new objects prototype which is denoted in the
// __proto__ property of Jonas. So again, underscore proto always points to an object prototype and that's true for all objects in JavaScript
// 4. Finally, the new object is automatically returned from the function unless we explicitly return something else. But in a constructor
// function like Person we usually never do that. Okay, and with this the result of the new operator and the Person constructor function is a
// new object that we just created programmatically and that is now stored in the Jonas variable and this whole process that I just explained
// is how it works with function constructors and also with ES6 classes but not with the Object.create syntax that we're gonna use later.
// But anyway, why does this work this way and why is this technique so powerful and useful? and to answer that let's move on jonas.calcAge();
// So, here we are attempting to call the calcAge function on the jonas object. However, JavaScript can actually not find the calcAge function
// directly in the Jonas object. It is simply not there and we already observed this behavior. So, what happens now in this situation? Well,
// if a property or a method cannot be found in a certain object JavaScript will look into it's prototype and there it is. So there is the
// calcAge function that we were looking for and so JavaScript will simply use this one. That's how the calcAge function can run correctly
// and return a result. And the behavior that we just described is what we already called prototypal inheritance or delegation. So the jonas
// object inherited the calcAge method from it's prototype or in other words it delegated the calcAge functionality to it's prototype. Now,
// the beauty of this is that we can create as many Person objects as we like and all of them will then inherit this method. So we can call
// this calcAge method on all the Person objects without the method being directly attached to all the objects themselves and this is essential
// for code performance. Just imagine that we had a 1,000 objects in the code and if all of them would have to carry the calcAge function
// around then that would certainly impact the performance. So instead, they can all simply use the calcAge function from their common prototype
// So that makes sense. Now the fact that Jonas is connected to a prototype and the ability of looking up methods and properties in a prototype
// is what we call the prototype chain. So the jonas object and it's prototype basically form a prototype chain but actually the prototype chain
// does not end here. So let's understand the prototype chain a bit better by zooming out and looking at the whole picture. So, here is the
// diagram that we already had with the Person function constructor and it's prototype property and to Jonas object linked to it's prototype via
// the underscore proto property, so nothing new yet. But now let's remember that Person.prototype itself is also an object and all objects in
// JavaScript have a prototype. Therefore, Person.prototype itself must also have a prototype. And the prototype of Person.prototype is
// Object.prototype. Why is that? Well, Person.prototype is just a simple object which means that it has been built by the built-in object
// constructor function and this is actually the function that is called behind the scenes whenever we create an object literal. So just an object
// simply with curly braces. So essentially the curly braces are just like a shortcut to writing a new object. But anyway, what matters here is that
// Person.prototype itself needs to have a prototype and since it has been created by the object constructor function it's prototype is gonna be
// Object.prototype, it's the same logic as with the Jonas object. So, since Jonas has been built by a Person, Person.prototype is the prototype of
// Jonas. Now this entire series of links between the objects is what is called the prototype chain and Object.prototype is usually the top of the
// prototype chain which means that it's prototype is null. So it's underscore proto property will simply point to null which then marks the end of
// the prototype chain. So in a certain way the prototype chain is very similar to the scope chain but with prototypes. So, in the scope chain
// whenever JavaScript can'nt find a certain variable in a certain scope, it looks up into the next scope and tries to find the
// variable there. On the other hand in the prototype chain whenever JavaScript can't find a certain property or method in a certain object it's
// gonna look up into the next prototype in the prototype chain and see if it can find it there. So again the prototype chain is pretty similar
// to the scope chain but instead of working with scopes, it works with properties and methods in objects.
//
/////////////////////////////////////////////////
// Prototypal Inheritance on Built-In Objects

console.log(Object.getPrototypeOf(jonas)); // Person.prototype
console.log(Object.getPrototypeOf(Object.getPrototypeOf(jonas))); // Object.prototype(top of prototype chain)
console.log(
    Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(jonas))) // null
);

console.dir(Person.prototype.constructor); // Person itself
console.dir(Object.getPrototypeOf(jonas).constructor); // Person itself

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === [], it is indeed created by the array constructor
console.log(Object.getPrototypeOf(arr)); // Array.prototype
console.log(Object.getPrototypeOf(arr) === Array.prototype); // the prototype property of the constructor function is gonna be the prototype of
// all the objects created by that constructor.

console.log(Object.getPrototypeOf(Object.getPrototypeOf(arr))); // Object.prototype
console.log(
    Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(arr))) // null
);

// However, what we just did, so extending the prototype of a built-in object is generally not a good idea.
// don't really get the habit of doing this for multiple reasons:
// first reason is that the next version of JavaScript might add a method with the same name that we are adding; but it might work in a different way.
// And so your code will then use that new method which, remember, works differently, and then that will probably break your code.
// second reason why you shouldn't do this is because when you work on a team of developers, then this is really gonna be a bad idea, because if multiple
// developers implement the same method with a different name then that's going to create so many bugs that it's just not worth doing this. So it's just
// a nice and fun experiment but in practice, you should probably not do it.
Array.prototype.unique = function () {
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(_ => _ + 1); // anonymous function, simply an arrow function
