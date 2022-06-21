function Book(title,auther,pages,readStatus){
    this.title=title;
    this.auther=auther;
    this.pages=pages;
    this.readStatus=readStatus;
};
Book.prototype.info = function(){
    str=this.title+" by "+ this.auther+", "+this.pages+"pages, ";
    if(this.readStatus)
        str+="read completly";
    else
        str+="not read yet";
    return str;
};

let myLibrary = [];

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
};

const book1 = new Book("a","a",123,true);
const book2 = new Book("a","a",123,true);
const book3 = new Book("a","a",123,true);
const book4 = new Book("a","a",123,true);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
console.log(myLibrary);