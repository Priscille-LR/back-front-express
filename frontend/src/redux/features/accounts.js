import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountRepository } from '../../core/infrastructure/AccountRepository';
import { AccountService } from '../../core/useCases/AccountService';

const accountService = new AccountService(new AccountRepository())

const initialState = {
    rounded_sum: undefined,
    accountList: []
};

//crée actions et reducer d'un coup 
const { actions, reducer } = createSlice({
    name: 'accounts',
    initialState: initialState,
    reducers: {
        getAccounts: (state, action) => {
            return {
                ...state,
                rounded_sum: action.payload.rounded_sum,
                accountList: action.payload.accounts
            }
        },
    },
});

export default reducer;

const { getAccounts } = actions;

export const fetchAccounts =
    () =>
        async dispatch => {
            const accountsDetails = await accountService.getAccounts();
            dispatch(getAccounts(accountsDetails)) //donne résultat au state => state updated
        };

export const selectAccounts = (state) => state.accounts;
