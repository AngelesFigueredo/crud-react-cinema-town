import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import { Container } from "react-bootstrap";

function App() {
  return (
    
        <Container>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movie/:id" element={<MovieDetailsPage />} />
              <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Container>
    
  );
}

export default App;
