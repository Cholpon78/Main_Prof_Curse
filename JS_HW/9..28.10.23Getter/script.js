class Delivery{
    constructor(name, phone){
        this.userName = name,
        this.userPhone = phone;
           }
     get validPhone(){
           return  this.userPhone.toString().startsWith('+')
 } 
}
let user1 = new Delivery('alex', "+25896589")
console.log(user1.validPhone)

///////////////////

class Permissions {
  constructor() {
    this.create = false;
    this.read = true;
    this.update = false;
    this.remove = false;
  }
}

class Users extends Permissions{
constructor(name){
    super()
    this.userName = name
}
}

/////////////////
class PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state){
        this.bookName = name,
        this.bookReleaseDate = releaseDate,
        this.bookPageCount = pagesCount,
        this.bookState = 100,
        this.bookType = null
    }
    fix(){
        this.bookState = this.bookState * 1.5
    }
    set newState(num){
        if (num < 0){
            this.bookState = 0
        }else if(num > 100){
            this.bookState = num
        }else{
            this.bookState = 100; 
        }
    }
    get readState(){
        return console.log(this.bookState);
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state){
        super(name, releaseDate, pagesCount, state)
        this.type = "magazine"
    }

}

class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, author) {
    super(name, releaseDate, pagesCount, state);
    (this.bookAuthor = author), 
    (this.bookType = "book");
  }
}

class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount, state, author) {
    super(name, releaseDate, pagesCount, state, author);
    this.bookType = "novel";
  }
  
  }


let book1 =new NovelBook("GGGGGGGGG", "20.10.23", 500, 0, 'AAAAAAAAAAA')
book1.fix() // работает

book1.newState = 120;
book1.readState;

console.log(book1);