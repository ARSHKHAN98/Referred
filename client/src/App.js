import "./App.css";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import { useSelector } from "react-redux";
import Navigation from "./components/Navigation/Navigation";

function App() {
	const ProtectedRoute = ({ children }) => {
		const { auth } = useSelector((state) => state.auth);
		const location = useLocation();
		if (!auth) {
			return <Navigate to="/login" state={{ from: location }} />;
		}
		return children;
	};

	const GuestRoute = ({ children }) => {
		const { auth } = useSelector((state) => state.auth);
		const location = useLocation();

		if (auth) {
			return <Navigate to="/" state={{ from: location }} />;
		}
		return children;
	};

	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route
					exact
					path="/login"
					element={
						<GuestRoute>
							<Login />
						</GuestRoute>
					}
				></Route>
				<Route
					exact
					path="/signup"
					element={
						<GuestRoute>
							<Signup />
						</GuestRoute>
					}
				></Route>
				<Route
					exact
					path="/"
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
