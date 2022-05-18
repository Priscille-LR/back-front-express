import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccounts, selectAccounts } from '../redux/features/accounts';
import { Account } from './Account';
import Loader from './Loader';
import './styles/accountList.scss';

export default function AccountList() {
   const dispatch = useDispatch();

   //récupère state; update si changement de state
   const accounts = useSelector(selectAccounts);
   const roundedSum = accounts.rounded_sum;

   useEffect(() => {
      dispatch(fetchAccounts()); //lance récup des accounts
   }, []);

   return roundedSum === undefined ? (
      <div className="loader-wrapper">
         <Loader />
      </div>
   ) : (
      <>
         <table>
            {/* <thead>
          <tr>
            <th>Name</th>
            <th>Balance</th>
          </tr>
        </thead> */}
            <tbody>
               {accounts.accountList.map(({ id, name, balance }) => (
                  <Account key={id} id={id} name={name} balance={balance} />
               ))}
            </tbody>
         </table>

         <p>Solde total : {roundedSum} €</p>
      </>
   );
}
