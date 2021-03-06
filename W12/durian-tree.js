class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }
  get numberOfSubordinates() {
    return this.subordinates.length;
  }
  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }
  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }
  get root(){
    let currentEmployee = this;
    if (this.creator === null) return this
    while(currentEmployee.boss) {
      currentEmployee = currentEmployee.boss
    }
    return currentEmployee
  }


  findName(name) {
    let result = 1;
    //base case
    if (this.name === name) return this

    //recursive case
    else {
      for (let subordinate of this.subordinates) {
        if (subordinate.name === name) {
          return subordinate
        }
        else {
          findName(subordinate)
        }

      }
    }
    return null
  }



}



const ada = new Employee("Ada", "CEO", 3000000.00);

const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);

const simone = new Employee("Simone", "Employee", 50000.00);
const ali = new Employee("Ali", "Employee", 50000.00);
const florida = new Employee("Florida", "Employee", 50000.00);
const david = new Employee("David", "Employee", 50000.00);
const brian = new Employee("Brian", "Employee", 50000.00);
const karla = new Employee("Karla", "Employee", 50000.00);

ada.addSubordinate(craig);
ada.addSubordinate(angela);
ada.addSubordinate(phil);
ada.addSubordinate(arvinder);
craig.addSubordinate(simone)
craig.addSubordinate(ali)
phil.addSubordinate(florida)
phil.addSubordinate(david)
phil.addSubordinate(brian)
angela.addSubordinate(karla)


// console.log(craig.numberOfSubordinates)
// console.log('craig root function call:')
console.log(ada.findName('Craig'))

