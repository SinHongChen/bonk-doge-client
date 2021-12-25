import React, { lazy } from "react";
import { Dashboard, ScrollToTop } from "components";
import { GlobalStyle } from "styles/Global";
import {
  Login,
  GamesLobby,
  Cards,
  Account,
  Socket,
  Game,
  Logout,
  DeckList,
  DeckEdit,
  DeckCreate
} from "./pages";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store/store";

const LoginPage = lazy(() => import("./pages/Login"));
const GamesLobbyPage = lazy(() => import("./pages/GamesLobby"));
const CardsPage = lazy(() => import("./pages/Cards"));
const AccountPage = lazy(() => import("./pages/Account"));
const SocketPage = lazy(() => import("./pages/Socket"));
const GamePage = lazy(() => import("./pages/Game"));
const LogoutPage = lazy(() => import("./pages/Logout"));

const App = () => {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Provider store={store}>
          <ScrollToTop>
            <Routes>
              <Route
                path="/account"
                element={<Dashboard element={<Account />} />}
              />
              <Route path="/login" element={<Login />} />
              <Route
                path="/deckCreate"
                element={<Dashboard element={<DeckCreate />} />}
              />
              <Route
                path="/deck"
                element={<Dashboard element={<DeckList />} />}
              />
              <Route
                path="/deck/:id"
                element={<Dashboard element={<DeckEdit />} />}
              />
              <Route
                path="/cards"
                element={<Dashboard element={<Cards />} />}
              />
              <Route
                path="/gamesLobby"
                element={<Dashboard element={<GamesLobby />} />}
              />
              <Route
                path="/socket"
                element={<Dashboard element={<Socket />} />}
              />
              <Route path="/game" element={<Game />} />
              <Route path="/logout" element={<Logout />} />
              <Route
                path="/"
                element={<Dashboard element={<GamesLobby />} />}
              />
            </Routes>
          </ScrollToTop>
        </Provider>
      </HashRouter>
    </>
  );
};

export default App;
