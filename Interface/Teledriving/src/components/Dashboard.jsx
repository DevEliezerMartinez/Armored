import React, { useState } from "react";
import NumericSlider from "./NumericSlider";
import Information from "./Information";
import Principal from "./Principal";

function Dashboard() {
  return (
    <div className="container_dashboard">
      <NumericSlider />
      <Principal/>
      <Information />
    </div>
  );
}

export default Dashboard;
