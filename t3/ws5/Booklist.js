class Booklist {
    constructor(){
        this.booksList = [];
        this.currentBookIndex =0;
    }
    add(newBook){
        this.booksList.push(newBook)
    }
    finishCurrentBook(){
        if (this.currentBookIndex < this.booksList.length) 
            this.currentBook++

    }
    get currentBook(){
        return this.booksList[this.currentBookIndex]
        
    }
}

class Book {
    constructor(t= "Momo", g="Novela Fantastica", a="Laura Gallego"){
        this.title = t;
        this.genre = g;
        this.author =  a;
        this.read = false;
        this.readDate =null;
    }
}