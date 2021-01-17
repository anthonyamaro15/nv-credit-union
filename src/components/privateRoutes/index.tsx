import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
   component: any;
   isAllow: boolean;
   path: string;
   exact: boolean;
}

const PrivateComponent: React.FC<Props> = ({ component: Component, isAllow, ...rest }) => {
   return (
      <Route {...rest} render={props => (
         isAllow ? (
            <Component {...props} />
         ) : (
            <Redirect to='/' />
         )
      )} />
   )
}

export { PrivateComponent };
