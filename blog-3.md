# Type Guards in TypeScript

## Introduction

Type guards are essential in TypeScript because they help the compiler understand the types of variables at specific points in the code. They are useful when working with union types, as they allow developers to check and narrow down the type of a variable during runtime. Type guards improve code safety by ensuring that only valid operations for a particular type are performed, reducing potential runtime errors.

## Why Are Type Guards Necessary?

In TypeScript, a variable can have multiple types. When working with these variables, the compiler may not always know the exact type and might restrict certain operations that aren't safe for every type in the union. Type guards allow developers to safely check the type of a variable and "narrow" it to a specific type, enabling the compiler to allow operations that are valid for that type. Without type guards, handling variables with multiple potential types would lead to less safe and harder-to-read code.

### There are three type of Type Guard:

## 1. "typeof" Type Guard

The typeof type guard is used to check primitive types like string, number, boolean, symbol, etc. This type guard is commonly used when working with union types that include primitive values.

#### Example:

```
  type Alphaneumeric = string | number;

  const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add("2", "3");
  console.log(result1);

```

## 2. instanceof Type Guard

The "instanceof" type guard is used to check if an object is an instance of a particular class. This type guard works for classes and constructor functions.

#### Example:

```
class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I am mewaing");
    }
  }

  // smart way tge handle korar jnne chaile amra function bebohar krte pari
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Dog Bhai", "dog");
  const cat = new Cat("Cat Bhai", "cat");

  getAnimal(cat);

  //
```

## 3. in Operator Type Guard

The in operator type guard checks if a specified property exists in an object. This is helpful when working with union types that represent object shapes with different properties.

#### Example:

```
 type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr. Normal Bhai",
  };
  const adminUser: AdminUser = {
    name: "Mr. Admin Bhai",
    role: "admin",
  };

  getUser(adminUser);
```

## Conclusion

Type guards in TypeScript are essential tools for managing types at runtime, especially with union types. By using type guards such as typeof, instanceof, in operator developers can write safer and more efficient TypeScript code. Each type guard has specific use cases that make it suitable for certain scenarios, allowing for precise and reliable type narrowing throughout your code.
