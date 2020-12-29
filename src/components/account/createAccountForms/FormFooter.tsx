import React from 'react';

const FormFooter = () => {
   return (
      <section className="FormFooter">
         <div className="left-side">
            <p>2020 One Nevada Credit Union</p>
            <p>Federally Insured by NCUA.</p>
            <a>Privacy Policy</a>
            <a>Membership Agreement and Disclosure</a>
         </div>
         <div className="right-side">
            <p>Need Help?</p>
            <p className="callus">call us <a>+1 (800) 388-3000</a></p>
            <a>email us</a>
         </div>
      </section>
   )
}

export default FormFooter;
