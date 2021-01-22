import React from 'react';

const TransfersLoans = () => {
   return (
      <div className="Shares">
         <form className="transfer-form">
            <label htmlFor="transferFrom"> from
               <select name="transferFrom" id="transferFrom">
                  <option value=""></option>
                  <option value="checking">checking</option>
               </select>
            </label>
            <label htmlFor="transferTo">to
               <select name="transferTo" id="transferTo">
                  <option value=""></option>
                  <option value="checking">checking</option>
               </select>
            </label>
            <label htmlFor="transferAmount">amount
               <input type="text" id="transferAmount" name="transferAmount" placeholder="Amount"/>
            </label>
            <div className="btn-wrapper">
               <button type="submit">transfer</button>
            </div>
            
         </form>
      </div>
   )
}

export default TransfersLoans;
