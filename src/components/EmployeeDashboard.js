import { Typography } from "@mui/material";
import "../App.scss";

function EmployeeDashboard() {
  return (
    <div className="main">
      <Typography><h1>Roster</h1></Typography>
      <Typography><h4>Remember to check the roster weekly and contact your manager for changes</h4></Typography>
    </div>
  );
}

export default EmployeeDashboard;