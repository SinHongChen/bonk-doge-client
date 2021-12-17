import React from "react";
import { Dashboard,ScrollToTop } from "components";
import { GlobalStyle } from "styles/Global";
import { Login,GamesLobby,Cards,Account,Socket,Game } from "./pages";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store/store";

const App = () => {
  return (
    <>
      <GlobalStyle />
          <HashRouter>
            <Provider store={store}>
              <ScrollToTop>
                <Routes>
                  <Route path="/account" element={<Dashboard element={<Account/>}/>} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/deckManage" element={<Dashboard element={<Account/>}/>} />
                  <Route path="/cards" element={<Dashboard element={<Cards/>}/>} />
                  <Route path="/gamesLobby" element={<Dashboard element={<GamesLobby />}/>} />
                  <Route path="/socket" element={<Dashboard element={<Socket/>}/>} />
                  <Route path="/game" element={<Game/>} />
                  <Route path="/" element={<Dashboard element={<GamesLobby />}/>} />
                </Routes>
              </ScrollToTop>
            </Provider>
          </HashRouter>
    </>
  );
};

export default App;
