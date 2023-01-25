import Card from "../UI/Card";
import "./WebView.css";

function WebView(props: any) {
  return (
    <div className="card-container">
      <Card>
        <li>Hello1</li>
        <li>Hello2</li>
        <li>Hello3</li>
        <li>Hello4</li>
      </Card>
      <Card>
        <li>Hello1</li>
        <li>Hello2</li>
        <li>Hello3</li>
        <li>Hello4</li>
      </Card>
      <Card>
        <li>Hello1</li>
        <li>Hello2</li>
        <li>Hello3</li>
        <li>Hello4</li>
      </Card>
    </div>
  );
}

export default WebView;
