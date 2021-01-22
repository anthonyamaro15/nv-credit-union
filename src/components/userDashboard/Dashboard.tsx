import autoLoanImg from '../../imgs/autoloan.png';

const Dashboard = () => {
   return (
      <div className="Account">
         <div className="user-information">
            <div className="top-row">
               <p>welcome:<span>Lisa Smith</span></p>
               <p>account #:<span>****07</span></p>
               <p>routing number:<span>243353322</span></p>
            </div>
            <div className="bottom-row">
               <p>user ID:<span>lisasmith</span></p>
               <p>email:<span>lisasmith@gmail.com</span></p>
               <p>address:<span>3312 pecos rd ave apt 11 las vegas nv 88929</span></p>
            </div>
         </div>
         <div className="img-wrapper">
            <img src={autoLoanImg} alt="auto loan description"/>
         </div>
         <div className="dashboard-information">
            <div className="dashboard-shared">
               <h3>insured accounts summary</h3>
               <div className="insured-acc-information">
                  <div className="title">
                     <span>account</span>
                     <span>type</span>
                     <span>balance</span>
                     <span>available</span>
                  </div>

                  <div className="savings">
                     <span>primary savings</span>
                     <span>primary savings account</span>
                     <span>$0.00</span>
                     <span>$0.00</span>
                  </div>

                  <div className="checking">
                     <span>one checking</span>
                     <span>one checking</span>
                     <span>$0.00</span>
                     <span>$0.00</span>
                  </div>

                  <div className="total">
                     <span>total insured accounts</span>
                     <div>
                        <span>$0.00</span>
                        <span>$0.00</span>                        
                     </div>

                  </div> 
               </div>
            </div>


            <div className="dashboard-shared">
               <h3>account limits</h3>
               <div className="account-limit">
                  <div className="account-limit-shared">
                     <p>ATM withdrawal limit<span>$1000.00</span></p>
                  </div>
                  <div className="account-limit-shared">
                     <p>debit card purchasing limit<span>$1000.00</span></p>
                  </div>
                  <div className="account-limit-shared">
                     <p>overdraft limit<span>$0.00</span></p>
                  </div>
                  <div className="account-limit-shared">
                     <p>check deposit availability<span>$0.00</span></p>
                  </div>
               </div>
            </div>
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

export default Dashboard;
