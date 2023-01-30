import { Grid } from "@mui/material";
import { FC } from "react";
import Card from "../UI/Card";
import "./WebView.css";
import axios from "axios";

const DUMMY_DATA = {
  employee: [
    { id: 1, name: "HELLO1", salary: 10, department: "HR" },
    { id: 2, name: "HELLO2", salary: 10, department: "HR" },
    { id: 3, name: "HELLO3", salary: 10, department: "PS" },
    { id: 4, name: "HELLO4", salary: 10, department: "PS" },
  ],
};

const WebView: FC = () => {
  return (
    <div className="card-container">
      <Grid container spacing={8}>
        {DUMMY_DATA.employee.map((item) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Card>
              <li className="employee__name">{item.name}</li>
              <li className="employee__details">{item.department}</li>
              <li className="employee__details">{item.salary}</li>
            </Card>
          </Grid>
        ))}
      </Grid>

      <div className="footer">
        Showing <strong>1-10</strong> out of
        <strong> {DUMMY_DATA.employee.length}</strong> entries.
      </div>
    </div>
  );
};

export default WebView;
