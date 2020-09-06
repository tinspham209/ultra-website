import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import GlobalStyle from "./globalStyles";

import { NotFound, Spinner } from "./components/UI/";

const Home = React.lazy(() => import("./pages/HomePage/Home"));

function App() {
	return (
		<Suspense fallback={<Spinner />}>
			<Router>
				<GlobalStyle />
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		</Suspense>
	);
}

export default App;
