import { Card, CardContent, CardActions, Button } from "@mui/material";
import {Edit, Delete} from '@mui/icons-material';
import './WebView.css';

function WebView(props: any) {
  return (
    <div>
      <Card className="card" sx={{display:"flex"}}>

        <CardContent>
          <strong>Hello!</strong>
          <br />
          <text>hi</text>
          <br />
          <text>hi</text>
        </CardContent>
        <CardActions>
          <Button size="small"><Edit className="edit-icon" /></Button>
          <Button size="small"><Delete className="delete-icon" /></Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default WebView;
