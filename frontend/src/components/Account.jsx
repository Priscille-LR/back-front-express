export function Account({ name, balance }) {
   return (
      <tr>
         <td>{name}</td>
         <td>{balance}€</td>
      </tr>
   );
}
