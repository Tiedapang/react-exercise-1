export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    const result = `My name is ${this.name} and ${this.age}YO and this is my resume/cv`;
    return result;
  }
}
