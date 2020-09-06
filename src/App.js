import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import GlobalStyle from "./globalStyles";

import { NotFound, Spinner } from "./components/UI/";
import ScrollToTop from "./components/ScrollToTop";

const Home = React.lazy(() => import("./pages/HomePage/Home"));
const Services = React.lazy(() => import("./pages/Services/Services"));
const Products = React.lazy(() => import("./pages/Products/Products"));
const SignUp = React.lazy(() => import("./pages/SignUp/SignUp"));

function App() {
	return (
		<Suspense fallback={<Spinner />}>
			<Router>
				<GlobalStyle />
				<ScrollToTop />
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/services" exact component={Services} />
					<Route path="/products" exact component={Products} />
					<Route path="/sign-up" exact component={SignUp} />

					<Route component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		</Suspense>
	);
}

export default App;
