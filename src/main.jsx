import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./app/landing/profile.css";

import LandingPage from "./app/landing";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<>
			<LandingPage />
		</>
	</StrictMode>
);
