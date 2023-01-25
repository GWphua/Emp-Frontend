import Card from "../UI/Card";
import { Grid } from "@mui/material";
import "./WebView.css";

function WebView() {
  return (
    <div className="card-container">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <li>Hello1</li>
            <li>Hello1</li>
            <li>Hello1</li>
            <li>Hello1</li>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <li>Hello2</li>
            <li>Hello2</li>
            <li>Hello2</li>
            <li>Hello2</li>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <li>Hello3</li>
            <li>Hello3</li>
            <li>Hello3</li>
            <li>Hello3</li>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <li>Hello4</li>
            <li>Hello4</li>
            <li>Hello4</li>
            <li>Hello4</li>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default WebView;
