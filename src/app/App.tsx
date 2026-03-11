import { RouterProvider } from "react-router";
import { router } from "./routes";
import "../styles/theme.css";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col antialiased">
      <RouterProvider router={router} />
    </div>
  );
}