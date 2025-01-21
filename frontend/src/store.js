import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './store/chatSlice'; // Ensure this path is correct

const store = configureStore({
  reducer: {
    chat: chatReducer,
    // Add other reducers here if needed
  },
});

export default store;