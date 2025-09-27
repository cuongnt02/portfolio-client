import { expect, test } from "vitest"
import { render } from "vitest-browser-react"
import { Projects } from "../components/Projects"

test('renders projects section', async () => {
	const { getByRole } = render(<Projects />)
	await expect.element(getByRole('alert', { name: "Projects" })).toBeInTheDocument()
})

test('renders projects list', async () => {
	const { getByRole } = render(<Projects />)
	await expect.element(getByRole('list', { name: "Projects List" })).toBeInTheDocument()
})

test('renders projects item', async () => {
	const project = {
		name: "PORTFOLIO",
		version: "V0.0.12",
		build_status: "SUCCESS",
		link: "http://github.com/cuongnt02/portfolio"
	}
	const { getByRole } = render(<ProjectItem project={project} />)
	await expect.element(getByRole('listitem', { name: "Projects Item" }))
})

test('renders projects item label', async () => {

})
test('renders projects item version', async () => {

})
test('renders projects item build status', async () => {

})
test('renders projects item github link', async () => {

})
test('renders my story section', async () => {
})
