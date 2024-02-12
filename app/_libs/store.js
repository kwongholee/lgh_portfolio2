import { configureStore } from "@reduxjs/toolkit"
import ShowModal from "./store/QuestionListModal"

export const makeStore = () => {
  return configureStore({
    reducer: {
      ShowModal: ShowModal.reducer
    }
  })
}