import under_construction from "../assets/images/under_construction.png";
import { useImperativeHandle, useRef, type ReactNode, type Ref } from "react";
import "../assets/sass/dialog.scss";

export default function PortfolioDialog({ ref, children }: { ref: Ref<Partial<HTMLDialogElement>>, children: ReactNode }) {

	const dialogRef = useRef<HTMLDialogElement>(null);

	useImperativeHandle(ref, () => {
		return {
			showModal() {
				dialogRef.current?.showModal();
			},
			close() {
				dialogRef.current?.close();
			},
		};
	}, []);

	return (
		<dialog ref={dialogRef} className="nes-dialog">
			{children}
		</dialog>
	)
}

export function MaintainanceDialog({ ref }: { ref: any }) {


	const closeDialog = () => {
		ref.close()
	}

	return (
		<PortfolioDialog ref={ref} >
			<form className="maintainance" method="dialog">
				<div className="title">
					<img src={under_construction} alt="Under Construction" />
					<p className="nes-text is-warning">Under Construction</p>
				</div>
				<p>This feature is still being developed. Please bear with me for a bit!</p>
				<menu className="dialog-menu">
					<button className="nes-btn" onClick={closeDialog}>OK</button>
				</menu>
			</form>
		</PortfolioDialog>
	)
}
