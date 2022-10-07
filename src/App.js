import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BarLoader } from "react-spinners";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import CreateStore from "./store";
import DataHandler from "./services/DataHandler";
import PageRoutes from "./routes/index";
import reducers from "./redux/slicers";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";

function App() {
  const [persistor, setPersistor] = useState(null);
  const [store, setStore] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const storeConfig = CreateStore(reducers, () => {
      DataHandler.setStore(storeConfig);
      setStore(storeConfig);
      setPersistor(persistStore(storeConfig));
      setLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader-wrapper">
          <BarLoader size={150} className="primary-color" />
        </div>
      ) : (
        <Provider store={store}>
          <PersistGate
            loading={
              <div className="loader-wrapper">
                <BarLoader size={150} className="primary-color" />
              </div>
            }
            persistor={persistor}
          >
            <Router>
              <ToastContainer />
              <PageRoutes />
            </Router>
          </PersistGate>
        </Provider>
      )}
    </>
  );
}

export default App;
