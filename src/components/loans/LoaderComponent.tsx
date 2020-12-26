import React, { useState } from 'react';
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoaderComponent = () => {
   const [loading, setLoading] = useState(true);

    return (
      <div className="sweet-loading">
        <PulseLoader
          css={override}
          size={20}
          color={"#123abc"}
          loading={loading}
        />
      </div>
    );
}

export default LoaderComponent;
