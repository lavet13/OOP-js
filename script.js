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
// from the class to the objects and so that is completely different. So he knows that this is a lot of new
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
// Also, this is how OOP has been done in JavaScript.
