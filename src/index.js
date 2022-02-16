import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar, PublicRoute, PrivateRoute } from './components';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HomePage, ChatsPage, ProfilePage, Gists, SignUp } from './pages';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from "redux-persist/integration/react";
import { firebaseApp } from './api/firebase';

const theme = createTheme({
  palette: {
    background: {
      paper: '#483a7a',
    }
  },
});

const App = () => {
  const [signedIn, setSignedIn] = useState(null);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {

      if (user) {
        setSignedIn(user);
      } else {
        setSignedIn(null);
      }
    })
  })

  let auth = !!signedIn;

  return (

    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <NavBar signedIn={signedIn} />
              <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/chats/*" element={
                  <PrivateRoute isAuth={auth}>
                    <ChatsPage />
                  </PrivateRoute>}
                />

                <Route path="/profile" element={
                  <PrivateRoute isAuth={auth}>
                    <ProfilePage />
                  </PrivateRoute>}
                />

                <Route path="/gists/*" element={
                  <PrivateRoute isAuth={auth}>
                    <Gists />
                  </PrivateRoute>}
                />

                <Route path="/auth/*" element={
                  <PublicRoute isAuth={auth}>
                    <SignUp />
                  </PublicRoute>}
                />

                <Route path="/*" element={<h1>404</h1>} />
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);