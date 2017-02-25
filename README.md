# Redux React Simple App : Book List

Taken from [Stephen Grider](https://github.com/StephenGrider)'s React-Redux course on [Udemy](https://www.udemy.com/react-redux/).

### About this App

This app creates a static list of books. Clicking on an item in the list will show which book is being selected and a property of that selected book (# of pages).

### Elements of the App

- Containers: Book and Book List.
- Components: App (bring together the 2 Containers above).
- Reducers: Books (static, the source of book list) and active Book (affected by states).
- Actions: action creator. An action is a js state object.


### How to see the app in action

`npm install` installs the dependencies.
`npm start` starts the server.

Go to `localhost:8080` on the browser.
