import "./CardContent.css";

type ICardContent = {
  children?: React.ReactNode;
};

const CardContent: React.FC<ICardContent> = ({ children }) => {
  return (
    <div className="content-display">
      <ul className="list-style">{children}</ul>
    </div>
  );
};

export default CardContent;
