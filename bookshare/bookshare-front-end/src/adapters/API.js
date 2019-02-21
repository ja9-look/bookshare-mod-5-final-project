import googleAPIKey from '../key.js'

class API {

    static init(){
        this.googleBooksURL = `https://www.googleapis.com/books/v1/`
        this.endPoint = `http://localhost:3000/api/v1`
        this.booksURL = endPoint + `/books`
    }


}