import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Movies } from './Movies/Movies';
import { SavedMovies } from './SavedMovies/SavedMovies';
import { Register } from './Register/Register';
import { Login } from './Login/Login';
import { Profile } from './Profile/Profile';
import { Main } from './Main/Main';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [loggedIn] = React.useState(false);

  return (
    <CurrentUserContext.Provider value={{
      loggedIn,
    }}
    >
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
          <Main />
        </Route>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
