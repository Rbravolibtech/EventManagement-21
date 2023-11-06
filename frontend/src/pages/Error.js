import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

function ErrorPage() {
	const error = useRouteError();

	let title = "An ERROR HAS OCCURRED";
	let message = "SOMETHING WENT WRONG!!!!";

	if (error.status === 500) {
		message = JSON.parse(error.data).message;
	}

	if (error.status === 404) {
		title = "NOT FOUND!";
		message = "COULD NOT FIND RESOURCE OR PAGE.";
	}

	return (
		<>
			<PageContent title="AN ERROR HAS OCCURRED">
				<p className="text">SOMETHING WENT WRONG!!!!</p>
			</PageContent>
		</>
	);
}

export default ErrorPage;