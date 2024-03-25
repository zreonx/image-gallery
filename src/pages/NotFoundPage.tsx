import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div>
      <h1>404 | Not Found</h1>
      <Link to='/'>Go back home</Link>
    </div>
  );
};

export default NotFoundPage;
