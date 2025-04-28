import { Link } from "react-router-dom";

interface props {
  href: string;
  name: string;
}

function Button({ href, name }: props) {
  return (
    <Link to={href} className="button">
      {name}
    </Link>
  );
}

export default Button;
