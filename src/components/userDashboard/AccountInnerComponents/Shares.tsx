import React from 'react';

const Shares = () => {
   return (
      <div className="Shares">
         <div className="inner-share-class">
            <p>primary savings <span>$0.00</span></p>
            <p>primary savings account <span>$.00 available</span></p>
         </div>
         <div className="inner-share-class">
            <p>one checking<span>$0.00</span></p>
            <p>one checking <span>-$5.00 available</span></p>
         </div>
         <div className="inner-share-class">
            <p>total balance <span>$0.00</span></p>
            <p>total available <span>$0.00 available</span></p>
         </div>                     
      </div>
   )
}

export default Shares;
