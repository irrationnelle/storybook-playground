import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import store from "./store";

import { InBoxScreen } from "./containers/InBoxScreen";

import "./index.css";

interface Props {}

const App: React.FC<Props> = (): ReactElement => (
    <Provider store={store}>
        <InBoxScreen />
    </Provider>
);

export default App;
