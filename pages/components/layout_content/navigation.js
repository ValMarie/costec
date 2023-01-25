import { Link } from "@mui/material";

export const Navigation = () => {
  // Stateless functional Component
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link href="#" underline="hover">
        While Supplies List
      </Link>
      <Link href="#" underline="hover">
        Same Day
      </Link>
      <Link href="#" underline="hover">
        Online Only
      </Link>
      <Link href="#" underline="hover">
        Warehouse Savings
      </Link>
      <Link href="#" underline="hover">
        Get Email Offers
      </Link>
      <Link href="#" underline="hover">
        Customer Service
      </Link>
    </nav>
  );
};
