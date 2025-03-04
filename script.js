//complete this code
class Animal {
	 constructor(species) {
        this._species = species; // Private property convention (_species)
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to make a sound
    makeSound() {
        console.log(`The ${this._species} makes a sound`);
    }
}

class Dog extends Animal {
  constructor(species) {
        super(species); // Call the parent constructor
    }

    // Dog-specific method
    bark() {
        console.log("woof");
    }
	
}

class Cat extends Animal {
 constructor(species) {
        super(species); // Call the parent constructor
    }

    // Cat-specific method
    purr() {
        console.log("purr");
    }
	
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr();      // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark();      // Output: woof


