import React from 'react';
import AccountList from './AccountList';
import './styles/app.scss';

export default function App() {
   return (
      <div className="accounts-page">
         <header>
            <h1>Bankin'</h1>
         </header>

         <main>
            <div className="accounts-details">
               <h2>Mes Comptes</h2>
               <p>Voici le détail de vos soldes:</p>
               <AccountList />
            </div>

            <button>Optimiser mon épargne</button>
         </main>
      </div>
   );
}
