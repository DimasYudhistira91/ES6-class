class User{
  constructor(firstname, lastname, age) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
  }

  getFullName() {
    let fullname = `${this.firstname} ${this.lastname} adalah nama lengkap saya`;
    return fullname;
  }
  editName(newname) {
    const myname = newname.split(' ')
    this.firstname = myname[0]
    this.lastname = myname[1]
  }
}

const jhon = new User('Dimas', 'Yudhistira', 28);
// console.log(jhon);

console.log(jhon.getFullName());

jhon.editName('Dimas Diajeng');
console.log(jhon.getFullName());

// const dul = new User();
// console.log(dul);


// Kasus lain:
class orang{
constructor(nama, umur) {
  this.nama= nama;
  this.umur= umur;
  }
}

const dimas = new orang(prompt('masukkan nama'), prompt('masukkan umur'));
const yudhis = new orang('yudhis', 12);
const nida = new orang('nida', 27);
const milla = new orang('millaty', 23);
console.log(dimas);
console.log(yudhis);
console.log(nida);
console.log(milla);