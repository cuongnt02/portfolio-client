import { expect, test } from "vitest"
import { render } from "vitest-browser-react"
import { Projects } from "../components/Projects"
import { ProjectItem } from "../components/ProjectItem"

test('renders projects section', async () => {
	const { getByRole } = render(<Projects />)
	await expect.element(getByRole("alert", { name: "Projects Section" })).toBeInTheDocument()
})

test('renders projects section title', async () => {
	const { getByRole } = render(<Projects />)
	await expect.element(getByRole("heading", { name: "Projects Section Title" })).toBeInTheDocument()
})

test('renders projects list', async () => {
	const { getByRole } = render(<Projects />)
	await expect.element(getByRole('list', { name: "Projects List" })).toBeInTheDocument()
})

// TODO: Test all list item
// test('renders projects item in project list', async () => {
// 	const { getByRole } = render(<Projects />)
// 	await expect.element(getByRole('listitem', { name: "Projects Item ListItem" })).toBeInTheDocument()
// })

test('renders projects item', async () => {
	const project = {
		name: "PORTFOLIO",
		version: "V0.0.12",
		build_status: "SUCCESS",
		link: "http://github.com/cuongnt02/portfolio",
		percent: "50",
		releaseStatus: "mvp"
	}
	const { getByRole } = render(<ProjectItem title={project.name} version={project.version} releaseStatus={project.releaseStatus} buildStatus={project.build_status} link={project.link} percent={project.percent} />)
	await expect.element(getByRole('alert', { name: "Projects Item Container" })).toBeInTheDocument()
})

test('renders projects item label', async () => {
	const project = {
		name: "PORTFOLIO",
		version: "V0.0.12",
		build_status: "SUCCESS",
		link: "http://github.com/cuongnt02/portfolio",
		percent: "50",
		releaseStatus: "mvp"
	}
	const { getByRole } = render(<ProjectItem title={project.name} version={project.version} releaseStatus={project.releaseStatus} buildStatus={project.build_status} link={project.link} percent={project.percent} />)
	await expect.element(getByRole('alert', { name: "Projects Item Label" })).toBeInTheDocument()

})
test('renders projects item version', async () => {
	const project = {
		name: "PORTFOLIO",
		version: "V0.0.12",
		build_status: "SUCCESS",
		link: "http://github.com/cuongnt02/portfolio",
		percent: "50",
		releaseStatus: "mvp"
	}
	const { getByRole } = render(<ProjectItem title={project.name} version={project.version} releaseStatus={project.releaseStatus} buildStatus={project.build_status} link={project.link} percent={project.percent} />)
	await expect.element(getByRole('alert', { name: "Projects Item Version" })).toBeInTheDocument()

})
test('renders projects item build status', async () => {
	const project = {
		name: "PORTFOLIO",
		version: "V0.0.12",
		build_status: "SUCCESS",
		link: "http://github.com/cuongnt02/portfolio",
		percent: "50",
		releaseStatus: "mvp"
	}
	const { getByRole } = render(<ProjectItem title={project.name} version={project.version} releaseStatus={project.releaseStatus} buildStatus={project.build_status} link={project.link} percent={project.percent} />)
	await expect.element(getByRole('alert', { name: "Projects Item Build Status" })).toBeInTheDocument()

})

test('renders projects item github link', async () => {
	const project = {
		name: "PORTFOLIO",
		version: "V0.0.12",
		releaseStatus: "mvp",
		build_status: "SUCCESS",
		link: "http://github.com/cuongnt02/portfolio",
		percent: "50"
	}
	const { getByRole } = render(<ProjectItem title={project.name} version={project.version} releaseStatus={project.releaseStatus} buildStatus={project.build_status} link={project.link} percent={project.percent} />)
	await expect.element(getByRole('link', { name: "Projects Item Github Link" })).toBeInTheDocument()

})

test('renders projects item progress bar', async () => {
	const project = {
		name: "PORTFOLIO",
		version: "V0.0.12",
		releaseStatus: "mvp",
		build_status: "SUCCESS",
		link: "http://github.com/cuongnt02/portfolio",
		percent: "50"
	}
	const { getByRole } = render(<ProjectItem title={project.name} version={project.version} releaseStatus={project.releaseStatus} buildStatus={project.build_status} link={project.link} percent={project.percent} />)
	await expect.element(getByRole('progressbar', { name: "Projects Item Progress" })).toBeInTheDocument()

})

