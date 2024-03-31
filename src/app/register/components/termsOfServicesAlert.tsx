import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { createPortal } from "react-dom";

type TermOfServiceAlertType = {
	showAlert: boolean;
};

function TermsOfServicesAlert({ showAlert }: TermOfServiceAlertType) {
	return createPortal(
		<Alert
			className={`w-96 absolute border-red-500 bg-main-white text-main-gray right-5 -bottom-10 rounded transition-all duration-500 ${
				showAlert ? " -translate-y-20" : "translate-y-20 hidden"
			}`}
		>
			<AlertTitle>Agreement Required</AlertTitle>
			<AlertDescription>
				Please agree to the Terms of Service to continue.
			</AlertDescription>
		</Alert>,
		document.body,
	);
}

export default TermsOfServicesAlert;
