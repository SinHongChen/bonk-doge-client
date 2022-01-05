import React, { lazy } from "react";
import { Layout, ScrollToTop } from "components";
import { GlobalStyle } from "styles/Global";
import {
  Login,
  GamesLobby,
  Cards,
  Account,
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
              <Route path="/login" element={<Login />} />
              <Route
                path="/game"
                element={<Game />}
              />
              <Route
                path="/account"
                element={<Layout element={<Account />} />}
              />
              <Route
                path="/deckCreate"
                element={<Layout element={<DeckCreate />} />}
              />
              <Route
                path="/deck"
                element={<Layout element={<DeckList />} />}
              />
              <Route
                path="/deck/:id"
                element={<Layout element={<DeckEdit />} />}
              />
              <Route
                path="/cards"
                element={<Layout element={<Cards />} />}
              />
              <Route
                path="/gamesLobby"
                element={<Layout element={<GamesLobby />} />}
              />
              <Route path="/logout" element={<Logout />} />
              <Route
                path="*"
                element={<Layout element={<GamesLobby />} />}
              />
            </Routes>
          </ScrollToTop>
        </Provider>
      </HashRouter>
    </>
  );
};

export default App;
