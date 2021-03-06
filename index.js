// Your code here
class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says woof!`;
  }
}

class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says meow!`;
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    let phrase;
    if (this.sex != 'male') {
      phrase = `${this.name} says squawk!`;
    } else {
      phrase = `It's me! ${this.name}, the parrot!`;
    }
    return phrase;
  }
}