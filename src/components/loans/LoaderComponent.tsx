import React from 'react';
import PulseLoader from "react-spinners/PulseLoader";

const LoaderComponent = () => {

    return (
      <div className="sweet-loading">
        <PulseLoader
          size={30}
          color={"#337ab7"}
        />
      </div>
    );
}

export default LoaderComponent;
