import googleAPIKey from '../key.js'

class API {

    static init(){
        this.googleBooksURL = `https://www.googleapis.com/books/v1/volumes?q=`
        this.endPoint = `http://localhost:3000/api/v1`
        this.booksURL = this.endPoint + `/books`
        this.usersURL = this.endPoint + `/users`
    }

    static newUser(){
        return fetch(this.usersURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: 'test123',
                    password: 'password',
                    first_name: 'Test',
                    last_name: 'User'
                }
            })
        })
        .then(data => data.json())
        .then(d => console.log(d))
    }

}
export default API;