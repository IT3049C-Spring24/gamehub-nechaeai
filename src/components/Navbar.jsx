import { Link as UnStyledLink } from 'react-router-dom';
import styled from '@emotion/styled';

const Link = styled(UnStyledLink)`
  color: white;

  &:hover {
    text-decoration: underline;
  }

  
`;

const Navbar = () => {
  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: `#430000`, left: 0 }}>
      <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/rps">RPS</Link>
        </li>
        <li>
          <Link to="/tic-tac">TicTac</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;