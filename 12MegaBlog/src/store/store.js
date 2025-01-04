import{configureStore} from '@reduxjs/toolkit';
import authSlice from "./authSlice"

const store = configureStore({
    reducer:{
        // Add your reducers here
        auth : authSlice,
        // add more slices for posts
        // post : postSlice
    }
});

export default store;