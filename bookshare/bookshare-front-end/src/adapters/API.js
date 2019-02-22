import googleAPIKey from '../key.js'

class API {

    static init(){
        this.googleBooksURL = `https://www.googleapis.com/books/v1/volumes?q=`
        this.endPoint = `http://localhost:3000/api/v1`
        this.booksURL = this.endPoint + `/books`
        this.usersURL = this.endPoint + `/users`
        this.loginURL = this.endPoint + `/login`
    }

    static createUser(user) {
        return this.post(this.usersURL, { user })
    }

    static login(user) {
        return this.post(this.loginURL, { user })
    }

    static post(url, data) {
        console.log(url)
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