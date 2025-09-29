import { ProjectItem } from "./ProjectItem";
import "../assets/sass/projects.scss"
import type ProjectItemType from "../../common/types/project-item";


const projects: ProjectItemType[] = [
	{
		title: "portfolio",
		version: "0.0.12",
		releaseStatus: "mvp",
		buildStatus: "N/A",
		link: "http://github.com/cuongnt02/portfolio",
		percent: "50"
	},
	{
		title: "VT",
		version: "0.0.1",
		releaseStatus: "mvp",
		buildStatus: "N/A",
		link: "http://github.com/cuongnt02/VT",
		percent: "5"
	},
]

export function Projects() {
	const projectList = projects.map(project => {
		const key = crypto.randomUUID()
		// TODO: Test all list item 
		return (
			<li aria-label={`Projects Item ListItem - ${key}`} key={key}>
				<ProjectItem title={project.title} version={project.version} releaseStatus={project.releaseStatus} buildStatus={project.buildStatus} link={project.link} percent={project.percent} />
			</li>
		)
	})
	return (
		<section className="projects-section" role="alert" aria-label="Projects Section">
			<h1 className="nes-text" aria-label="Projects Section Title">Projects</h1>
			<p className="nes-text" role="alert" aria-label="Projects Cap">Check out some of my personal projects</p>
			<ul className="lists" aria-label="Projects List">
				{projectList}
			</ul>
		</section>
	)
}
