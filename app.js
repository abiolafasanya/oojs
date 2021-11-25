const {log} = console
class Person {

    constructor(name, age, email){
        this.name = name
         this.age = age
        this.email = email
        this.score= 0
    }

    getName() {
      
        log('my name is %s', this.name)
        return this
    }

    getAge() {
        log('I am %d years old', this.age)
        return this
    }

    setName(name) {
         this.name  = name
         return this
    }

    setAge(age) {
        this.age = age
        return this
    }
    getScore() {
        this.score = this.score + 1
        log(this.name + " score is " + this.score)
        return this
    }
}

let person1 = new Person('abiola', 26, 'harbiola78@gmail.com')
// person1.setName('samuel david')
// person1.setAge(25)
// person1.getName()
// person1.getAge()
// console.log(person1)

person2 = new Person("samuel", 25, "samuel@mail.com")
.getName()
.getAge()
.getScore()