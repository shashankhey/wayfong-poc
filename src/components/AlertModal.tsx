import {
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { FormProp } from "@/types/form.type";

interface AlertModalProps {
	selectedId: FormProp;
}

const AlertModal = ({selectedId}: AlertModalProps) => {
	// console.log(selectedId);
	
	return (
		<>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Extra Information</AlertDialogTitle>
				</AlertDialogHeader>
				<div className="p-2">
					{/* SHOW CONTENT HERE */}
					<div className="flex items-center gap-4">
						<span className="font-bold">Company Name:</span>
						<p>{selectedId?.companyName}</p>
					</div>
					<div className="flex items-center gap-4">
						<span className="font-bold">Address:</span>
						<p>{selectedId?.email}</p>
					</div>
					<div className="flex items-center gap-4">
						<span className="font-bold">Address:</span>
						<p>{selectedId?.address}, {selectedId?.city}, {selectedId?.state}, {selectedId?.zipCode}</p>
					</div>
				</div>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					{/* <AlertDialogAction>Continue</AlertDialogAction> */}
				</AlertDialogFooter>
			</AlertDialogContent>
		</>
	);
};

export default AlertModal;
