function getBooks(){
    var booksName = prompt('Enter name of books!').toLowerCase()
    if(booksName === 'jjjjjjjjjjj'){
        console.log('This book is coming now!');
    }else{
       console.log("Sorry, we don't have!");
    }
}
const booksName = getBooks;
const filterValues = (name) => {
    return booksName.filter(data => {
        return data.toLowerCase().indexOf(name.toLowerCase()) > -1;
    });
}
console.log(filterValues('y'));