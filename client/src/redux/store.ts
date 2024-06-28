import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postApi } from './services/postApi'
import { postModalReducer } from './slices/postModalSlice'
import { authApi } from './services/authApi'
import { uploadFileApi } from './services/uploadFileApi'
import { authReducer } from './slices/authSlice'
import { userApi } from './services/userApi'


export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [uploadFileApi.reducerPath]: uploadFileApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    postModal: postModalReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware).concat(authApi.middleware).concat(uploadFileApi.middleware).concat(userApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch);