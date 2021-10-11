import React from "react"
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/auth-page/login-page";
import RegisterPage from "./pages/auth-page/register-page";
import MainPage from "./pages/index";
import NotesPage from "./pages/note-page/index-page";
import NoteShowPage from "./pages/note-page/show-page";
import NoteEditPage from "./pages/note-page/edit-page";
import ProfilePage from "./pages/profile-page/profile-page";
import NotFoundPage from "./pages/errors/notfound-page";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container my-5">
        <Switch>
          <Route exact path="/login" component = { LoginPage } />
          <Route exact path="/register" component = { RegisterPage } />
          <Route exact path="/" component = { MainPage } />
          <Route exact path="/profile" component = { ProfilePage } />
          <Route exact path="/notes" component = { NotesPage } />
          <Route exact path="/notes/edit" component = { NoteEditPage } />
          <Route exact path="/notes/:note" component = { NoteShowPage } />
          <Route component = { NotFoundPage } />
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
