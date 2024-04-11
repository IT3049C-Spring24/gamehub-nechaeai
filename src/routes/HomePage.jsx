import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page of all my React Games.</p>
      <p>You can Navigate to any of the following games:</p>
      <ul>
        <li><Link to={`/rps`}>Rock Paper Scissors</Link></li>
        <li><Link to={`/tic-tac`}>Tic Tac Toe</Link></li>

      </ul>
    </div>
  );
}