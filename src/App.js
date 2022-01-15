import "./App.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider, Frame } from "@shopify/polaris";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditProfileCont from "./containers/EditProfileCont";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import ViewProfileCont from "./containers/ViewProfileCont";
import store from "./store/store";
import NavBar from "./layout/Navbar";

const App = () => {
  let persistor = persistStore(store);

  return (
    <AppProvider i18n={enTranslations}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Frame topBar={<NavBar />}>
              <Routes>
                <Route path="/" element={<ViewProfileCont />} />
                <Route path="edit-profile" element={<EditProfileCont />} />
              </Routes>
            </Frame>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </AppProvider>
  );
};

export default App;
