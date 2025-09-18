import { useRef } from "react"
import "../assets/sass/nav.scss"
import { MaintainanceDialog } from "./PortfolioDialog"

export function PortfolioNavigation() {
	const dialogRef = useRef<HTMLDialogElement>(null)
	const showDialog = () => {
		dialogRef.current?.showModal()
	}
	return (
		<nav aria-label="PortfolioNavigation">
			<ul>
				<li><a href="#" onClick={showDialog}>Home</a></li>
				<li><a href="#" onClick={showDialog}>My Story</a></li>
				<li><a href="#" onClick={showDialog}>Projects</a></li>
				<li><a href="#" onClick={showDialog}>Contact</a></li>
			</ul>
			<MaintainanceDialog ref={dialogRef} />
		</nav>
	)

}
