import "../assets/sass/project-item.scss"

interface ProjectItemProps {
	title: string
	version: string
	releaseStatus: string
	buildStatus: string
	link: string
	percent: string
}



export function ProjectItem({ title, version, releaseStatus, buildStatus, link, percent }: ProjectItemProps) {
	return (
		<div className="nes-container is-rounded project-info" role="alert" aria-label="Projects Item Container">
			<div className="project-title">
				<div className="project-data">
					<p role="alert" aria-label="Projects Item Label" className="nes-text is-primary">{title}</p>
					<div className="project-status">
						<a href="#" className="nes-badge is-splited release-status">
							<span role="alert" className="is-dark" aria-label="Project Item Release Status">{releaseStatus}</span>
							<span role="alert" aria-label="Projects Item Version" className="is-primary project-version">{version}</span>
						</a >
						<a href="#" className="nes-badge is-splited build-status">
							<span className="is-dark">build</span>
							<span role="alert" aria-label="Projects Item Build Status" className="is-primary project-build-status">{buildStatus}</span>
						</a >
					</div>

				</div>
				<a href={link} aria-label="Projects Item Github Link" target="_blank">
					<i className="nes-icon github is-medium"></i>
				</a>
			</div>
			<progress className="nes-progress is-primary" aria-label="Projects Item Progress" value={percent} max="100"></progress>
		</div >
	)

}
