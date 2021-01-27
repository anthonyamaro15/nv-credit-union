import autoLoanImg from '../../imgs/autoloan.png';
import { UserData } from '../interfaces/loanApplicationInterface';
import DisplayUserInformationNav from './DisplayUserInformationNav';

interface Props {
   userData?: UserData;
}

const Dashboard: React.FC<Props> = ({ userData }) => {
   return (
      <div className="Account">
         
         {userData && (
            <DisplayUserInformationNav userData={userData} />
         )}

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
