import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postApi } from './services/postApi'
import { postModalReducer } from './slices/postModalSlice'


export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    postModal: postModalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch);