
class API {

    static init() {
        this.googleBooksURL = `https://www.googleapis.com/books/v1/volumes?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=`
        this.endPoint = `http://localhost:3000/api/v1`
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

    static addBookToBookshelf(id, isbn) {
        return this.post(this.bookshelfURL + `/${id}/add`, { isbn } )
    }

    static updateReadStatusBook(id, isbn) {
        return this.patch(this.bookshelfURL + `/${id}/updateread`, { isbn } )
    }

    static updateBoughtStatusBook(id, isbn) {
        return this.patch(this.bookshelfURL + `/${id}/updatebought`, { isbn })
    }

    static addBookToFavourites(id, isbn) {
        return this.patch(this.bookshelfURL + `/${id}/addtofavourites`, { isbn })
    }

    static deleteBookshelf(id, isbn) {
        return this.delete(this.bookshelfURL + `/${id}/book_bookshelves/${isbn}`)
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

    static patch(url, data) {
        return fetch(url, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json())
    }

    static delete(url) {
        return fetch(url, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(resp => resp.json())
    }

}

API.init()

window.API = API

export default API;