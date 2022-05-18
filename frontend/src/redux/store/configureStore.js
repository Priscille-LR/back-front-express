import { configureStore } from '@reduxjs/toolkit';
import AccountsReducer from '../features/accounts';


export const store = configureStore({
    reducer: {
        accounts: AccountsReducer,
    },
});

store.subscribe(() => {
    console.log(store.getState());
});
