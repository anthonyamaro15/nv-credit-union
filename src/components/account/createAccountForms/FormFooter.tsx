// a tag links are just placeholders
const FormFooter = () => {
   return (
      <section className="FormFooter">
         <div className="left-side">
            <p>2020 One Nevada Credit Union</p>
            <p>Federally Insured by NCUA.</p>
            <a href="www.google.com" target="_blank">Privacy Policy</a>
            <a href="www.google.com" target="_blank">Membership Agreement and Disclosure</a>
         </div>
         <div className="right-side">
            <p>Need Help?</p>
            <p className="callus">call us <a href="www.google.com">+1 (800) 000-0000</a></p>
            <a href="www.google.com">email us</a>
         </div>
      </section>
   )
}

export default FormFooter;
