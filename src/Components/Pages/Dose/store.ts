import { configureStore } from "@reduxjs/toolkit";
import doseStore from "./store/index"

const store = configureStore({
    reducer:doseStore
})
export default store