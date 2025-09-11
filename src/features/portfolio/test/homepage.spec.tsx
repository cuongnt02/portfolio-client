import { expect, test } from "vitest"
import { render } from "vitest-browser-react"
import HomePage from "../components/HomePage.tsx"

test('renders container', async () => {
	const { getByRole } = render(<HomePage />)
	await expect.element(getByRole('main')).toBeInTheDocument()
})

test('renders header', async () => {
	const { getByRole } = render(<HomePage />)

	await expect.element(getByRole('heading', {
		name: "Header"
	})).toBeInTheDocument()
})


test('renders job section', async () => {
	const { getByRole } = render(<HomePage />)
	await expect.element(getByRole('heading', { name: "Job" })).toBeInTheDocument()
})

test('renders intro section', async () => {
	const { getByRole } = render(<HomePage />)
	await expect.element(getByRole('alert', { name: "Intro" })).toBeInTheDocument()
})
