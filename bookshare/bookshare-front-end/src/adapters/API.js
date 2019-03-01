// import googleAPIKey from '../key.js';

class API {

    static init() {
        this.googleBooksURL = `https://www.googleapis.com/books/v1/volumes?q=`
        this.endPoint = `http://localhost:3000/api/v1`
        this.booksURL = this.endPoint + `/books`
        this.usersURL = this.endPoint + `/users`
        this.loginURL = this.endPoint + `/login`
        this.profileURL = this.endPoint + `/profile`
        this.bookshelfURL = this.endPoint + `/bookshelves`
    }

    static createUser(user) {
        return this.post(this.usersURL, { user })
    }

    static login(user) {
        return this.post(this.loginURL, { user })
    }

    static getCurrentUser() {
        return this.get(this.profileURL)
    }

    static getAllBooks(searchTerm) {
        return this.getFromGoogle(this.googleBooksURL, searchTerm)
    }

    static getBookshelf(id) {
        return this.get(this.bookshelfURL + `/${id}`)
    }

    static getBooksByIsbn(isbn){
        return fetch(`${this.googleBooksURL}isbn:${isbn}`)
        .then(resp => resp.json())
    }

    static getFromGoogle(url, searchTerm) {
        return fetch(`${url}${searchTerm}&maxResults=40`)
            .then(resp => resp.json())
    }

    static getBooksByCategory(url, category) {
        return fetch(`${url}subject:${category}&maxResults=40`)
            .then(resp => resp.json())
    }


    static get(url) {
        return fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(resp => resp.json())
    }

    static post(url, data) {
        return fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(data)
        }).then(data => data.json())
    }

}

API.init()

export default API;