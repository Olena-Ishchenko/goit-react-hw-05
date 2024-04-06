import { Link } from 'react-router-dom';

function GoBack({ to, children }) {
  return <Link to={to}>{children}</Link>;
}

export default GoBack;
