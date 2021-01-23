import { useForm } from 'react-hook-form';

const Transfers = () => {
   const { register, handleSubmit, errors } = useForm({
      mode: 'onBlur'
   });

   const onSubmit = () => {
      console.log('submitting');
   }

   return (
      <div className="Transfers">
         <div className="Account">
            <h3>transfers</h3>
            <form className="transfers-form" onSubmit={handleSubmit(onSubmit)}>
               <label htmlFor="componentTransferFrom"> from
                  <select 
                     name="componentTransferFrom" 
                     id="componentTransferFrom" 
                     ref={register({ required: true})}
                  >
                     <option value=""></option>
                     <option value="checking">{`checking (available: $0.00)`}</option>
                     <option value="savings">{`savings (available: $0.00)`}</option>
                  </select>
                  <p className="transfer-error">{errors.componentTransferFrom && "Required field"}</p>
               </label>
               <label htmlFor="componentTransferTo">to
                  <select 
                     name="componentTransferTo" 
                     id="componentTransferTo" 
                     ref={register({ required: true})}
                  >
                     <option value=""></option>
                     <option value="checking">{`checking (available: $0.00)`}</option>
                     <option value="savings">{`savings (available: $0.00)`}</option>
                  </select>
                  <p className="transfer-error">{errors.componentTransferTo && "Required field"}</p>
               </label>
               <label htmlFor="componentTransferAmount">amount
                  <input 
                     type="text" 
                     id="componentTransferAmount" 
                     name="componentTransferAmount" 
                     placeholder="Amount" 
                     ref={register({ required: true})}
                  />
                  <p className="transfer-error">{errors.componentTransferAmount && "Required field"}</p>
               </label>
               <div className="btn-wrapper">
                  <button type="submit">transfer</button>
               </div>
               
            </form> 
 
         </div>
         <div className="form-footer">
            <span>One Nevada Credit Union</span>
            <div className="more-info">
               <a href="www.example.com">Federally Insured by NCUA</a>
               <a href="www.example.com">Equal Housing Lender.</a>
            </div>
            <span>2013-2020 MeridianLink, Inc., All Rights Reserved.</span>
         </div>
      </div>

   )
}

export default Transfers;
