const content = document.querySelector('.content');
const card_template = document.createElement("div");
card_template.classList.add('card');

function Book(title,author,pages,readStatus){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.readStatus=readStatus;
};
Book.prototype.info = function(){
    str=this.title+" by "+ this.author+", "+this.pages+"pages, ";
    if(this.readStatus)
        str+="read completly";
    else
        str+="not read yet";
    return str;
};

let myLibrary = [];

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    displaylib(myLibrary)
};

function displaylib(lib){
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
                return value.title !== book.title;
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
function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    const title = formProps.title;
    const author = formProps.author;
    const pages=formProps.pages;
    const readbtn = formProps.readbtn;
    const book = new Book(title,author,pages,readbtn);
    addBookToLibrary(book);
};


//console.log(myLibrary);