import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

function ErrorPage() {
	const error = useRouteError();

	let title = "An ERROR HAS OCCURRED";
	let message = "SOMETHING WENT WRONG!!!!";

	if (error.status === 500) {
		message = error.data.message;
	}

	if (error.status === 404) {
		title = "NOT FOUND!";
		message = "COULD NOT FIND RESOURCE OR PAGE.";
	}

	return (
		<>
			<PageContent title={title}>
				<p className="text">{message}</p>
			</PageContent>
		</>
	);
}

export default ErrorPage;
