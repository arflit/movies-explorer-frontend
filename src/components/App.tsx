import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Header } from './Header/Header';
import { Movies } from './Movies/Movies';
import { SavedMovies } from './SavedMovies/SavedMovies';
import { Register } from './Register/Register';
import { Login } from './Login/Login';
import { Profile } from './Profile/Profile';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';

function App() {
  const isMain = true;

  return (
    <div className="App">
      <Header isMain={isMain} />
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
      <Footer />
    </div>
  );
}

export default App;
