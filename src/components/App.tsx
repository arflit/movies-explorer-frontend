import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Movies } from './Movies/Movies';
import { SavedMovies } from './SavedMovies/SavedMovies';
import { Register } from './Register/Register';
import { Login } from './Login/Login';
import { Profile } from './Profile/Profile';
import { Main } from './Main/Main';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <div className="App">
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/saved-movies">
        <SavedMovies />
      </Route>
      <Route path="/signup">
        <Register />
      </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/">
        <Main loggedIn={loggedIn} />
      </Route>
    </div>
  );
}

export default App;
