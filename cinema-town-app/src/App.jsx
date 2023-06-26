import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import { Container } from "react-bootstrap";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (

    <Container>
      <Routes>
        <Route path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>} />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />


        <Route path="/movie/:id"
          element={
            <PrivateRoute>
              <MovieDetailsPage />
            </PrivateRoute>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Container>

  );
}

export default App;
