import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Lists from "./pages/Lists";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/lists",
			element: <Lists />,
		},

		// {
		// 	path: "*",
		// 	element: (
		// 		<Suspense fallback={<div>Loading...</div>}>
		// 			<NotFound />
		// 		</Suspense>
		// 	),
		// },
	]);
	return <RouterProvider router={router} />;
}

export default App;
