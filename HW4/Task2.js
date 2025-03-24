class Student {
    constructor(fullName, direction) {
        this.fullName = fullName;
        this._direction = direction;
    }
    showFullName(){
        return this.fullName;
    }
    nameIncludes(data){
        return this.showFullName().includes(data);
    }

    get direction() {
        return this._direction;
    }

    set direction(newDirection) {
        this._direction = newDirection;
    }

    static studentBuilder() {
        return new Student("Ihor Kohut", "qc");
    }
  }

  const stud1 = new Student("Ivan Petrenko", "web");
  const stud2 = new Student("Sergiy Koval", "python");
  const stud3 = Student.studentBuilder();
  console.log(stud1.showFullName());
  console.log(stud2.showFullName());
  console.log(stud3.showFullName());
  console.log(stud1.nameIncludes("Ivan"));
  console.log(stud1.nameIncludes("Denysenko"));


