import React from "react";
import { Dashboard,ScrollToTop } from "components";
import { GlobalStyle } from "styles/Global";
import { Login,Logout,CreateCard,Cards,EditCard } from "./pages";
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
                  <Route path="/login" element={<Login />} />
                  <Route path="/editCard/:id" element={<Dashboard element={<EditCard />}/>} />
                  <Route path="/createCard" element={<Dashboard element={<CreateCard />}/>} />
                  <Route path="/logout" element={<Logout/>} />
                  <Route path="/cards" element={<Dashboard element={<Cards />}/>} />
                  <Route path="/" element={<Dashboard element={<CreateCard />}/>} />
                </Routes>
              </ScrollToTop>
            </Provider>
          </HashRouter>
    </>
  );
};

export default App;
