const content = document.querySelector('.content');
//template for all the cards which showed the books
const card_template = document.createElement("div");
card_template.classList.add('card');

function Book(title,author,pages,readStatus){//book object
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.readStatus=readStatus;
};
Book.prototype.info = function(){// book prototype - used in a previous exercise not used in the app
    str=this.title+" by "+ this.author+", "+this.pages+"pages, ";
    if(this.readStatus)
        str+="read completly";
    else
        str+="not read yet";
    return str;
};

let myLibrary = [];//library array used to store books

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    displaylib(myLibrary)
};

function displaylib(lib){// function to display the books in cards from the books present in library array
    //remove old childred and replace with new ones
    content.replaceChildren();
    //adding new children
    lib.forEach(book => {
        const card = card_template.cloneNode(true);
        const title = document.createElement("div");
        title.textContent="Title: "+book.title;
        card.appendChild(title);

        const author = document.createElement("div");
        author.textContent="Author: "+book.author;
        card.appendChild(author);

        const pages = document.createElement("div");
        pages.textContent="Pages: "+book.pages;
        card.appendChild(pages);

        const readStatus = document.createElement("div");
        if(book.readStatus)
            readStatus.textContent="Completed";
        else
            readStatus.textContent="Not Completed";
        card.appendChild(readStatus);

        const delbtn=document.createElement("button");
        delbtn.addEventListener("click",()=>{
            var filtered = myLibrary.filter(function(value, index, arr){ 
                return value !== book;
            });
            myLibrary=filtered;
            displaylib(myLibrary);
        });
        delbtn.textContent="Delete"
        card.appendChild(delbtn);

        content.appendChild(card);
    });
};

const book_form= document.querySelector('#book-form');
book_form.addEventListener('submit',handleSubmit);
function handleSubmit(e) {// add a book to library array when form is submitted
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    const title = formProps.title;
    const author = formProps.author;
    const pages=formProps.pages;
    const readbtn = formProps.readbtn;
    const book = new Book(title,author,pages,readbtn);
    addBookToLibrary(book);
    closeTheForm();
    book_form.reset();
};

function openTheForm() {
    document.getElementById("popupForm").style.display = "block";
    blurBg();
}
  
function closeTheForm() {
    document.getElementById("popupForm").style.display = "none";
    unBlurBg();
}

function blurBg(){
    const container = document.querySelector('.container');
    container.classList.add('blur');
}
function unBlurBg(){
    const container = document.querySelector('.container');
    container.classList.remove('blur');
}

const cardbtn = document.querySelector('#cardbtn');//add book button
//cardbtn.style.backgroundColor = "red";
cardbtn.addEventListener("click",openTheForm);

const cancelbtn = document.querySelector('#cancelbtn');
cancelbtn.addEventListener('click',closeTheForm);
/* Testing 
const book = new Book("A","A",123,true);
addBookToLibrary(book);
displaylib(myLibrary);
*/