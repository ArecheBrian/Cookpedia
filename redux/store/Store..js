import { configureStore } from '@reduxjs/toolkit'
import postSlice from '../slices/postSlice';
import userSlice from '../slices/userSlice';

const Store = configureStore({
    reducer:{
        postSlice,
        userSlice
    }
})

export default Store;