import { useNavigate } from "react-router-dom";
import Button from "../common/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-5">
      <h1 className="text-5xl">Not found</h1>
      <p className="mb-5">{`The page you're looking for can't be found`}</p>

      <Button
        size="md"
        variant="filled"
        colorScheme="dark"
        onClick={() => navigate("/")}
      >
        Go home
      </Button>
    </main>
  );
};

export default NotFound;
