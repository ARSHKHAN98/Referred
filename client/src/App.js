import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";

function App() {
	return (
		<BrowserRouter>
			{/* <Navigation /> */}
			<Routes>
				<Route exact path="/login" Component={Login}></Route>
				<Route exact path="/signup" Component={Signup}></Route>
				<Route exact path="/" Component={Home}></Route>
				{/*<Route exact path="/job" Component={Login}></Route>
				<Route exact path="/requests" Component={Login}></Route> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
