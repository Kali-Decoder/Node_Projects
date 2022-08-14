import React from "react";

const Loader = () => {
  const useStyles = {
    dislpay: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
  const loader = {
    dislpay: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'row'
  };
  return (
    <div className="container" style={useStyles}>
      <div className="loader" style={loader}>
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
