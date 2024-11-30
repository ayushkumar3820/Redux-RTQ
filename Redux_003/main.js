import { createStore } from "redux";
import App from "./App";
import Provider from "react-redux"
createStore(document.querySelector("root")).render(
<Provider>
<App/>
</Provider>


)