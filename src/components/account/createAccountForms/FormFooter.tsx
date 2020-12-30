import React from 'react';

const FormFooter = () => {
   return (
      <section className="FormFooter">
         <div className="left-side">
            <p>2020 One Nevada Credit Union</p>
            <p>Federally Insured by NCUA.</p>
            <a href="www.google.com">Privacy Policy</a>
            <a href="www.google.com">Membership Agreement and Disclosure</a>
         </div>
         <div className="right-side">
            <p>Need Help?</p>
            <p className="callus">call us <a href="www.testing.com">+1 (800) 388-3000</a></p>
            <a href="www.google.com">email us</a>
         </div>
      </section>
   )
}

export default FormFooter;
