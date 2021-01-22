import React from 'react';

interface Props {
   onSubmitTransfers: (value: any) => void;
   handleSubmit: any;
   register: any;
   errors: any;
}

const TransfersLoans: React.FC<Props> = ({ onSubmitTransfers, handleSubmit, register, errors}) => {
   return (
      <div className="Shares">
         <form className="transfer-form" onSubmit={handleSubmit(onSubmitTransfers)}>
            <label htmlFor="transferFrom"> from
               <select name="transferFrom" id="transferFrom" ref={register({ required: true})}>
                  <option value=""></option>
                  <option value="checking">{`checking (available: $0.00)`}</option>
                  <option value="savings">{`savings (available: $0.00)`}</option>
               </select>
               <p className="error">{errors.transferFrom && "Required field"}</p>
            </label>
            <label htmlFor="transferTo">to
               <select name="transferTo" id="transferTo" ref={register({ required: true})}>
                  <option value=""></option>
                  <option value="checking">{`checking (available: $0.00)`}</option>
                  <option value="savings">{`savings (available: $0.00)`}</option>
               </select>
               <p className="error">{errors.transferTo && "Required field"}</p>
            </label>
            <label htmlFor="transferAmount">amount
               <input type="text" id="transferAmount" name="transferAmount" placeholder="Amount" ref={register({ required: true})}/>
               <p className="error">{errors.transferAmount && "Required field"}</p>
            </label>
            <div className="btn-wrapper">
               <button type="submit">transfer</button>
            </div>
            
         </form>
      </div>
   )
}

export default TransfersLoans;
