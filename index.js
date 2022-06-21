function Book(title,auther,pages,readStatus){
    this.title=title;
    this.auther=auther;
    this.pages=pages;
    this.readStatus=readStatus;
    this.info = function(){
        str=title+" by "+ auther+", "+pages+"pages, ";
        if(readStatus==0)
            str+="not read yet";
        else
            str+="read completly";
        return str;
    };
};

let myLibrary = [];

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
};

const book = new Book("a","a",123,1);
addBookToLibrary(book);
console.log(myLibrary);
console.log(book.info());