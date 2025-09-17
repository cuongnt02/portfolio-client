import { expect, test } from "vitest"
import { render } from "vitest-browser-react"
import HomePage from "../components/HomePage"
import MyStory from "../components/MyStory"

test('renders my story section', async () => {
	const { getByRole } = render(<MyStory />)
	await expect.element(getByRole('alert', { name: "My Story" })).toBeInTheDocument()
})

test('renders my story heading', async () => {
	const { getByRole } = render(<MyStory />)
	await expect.element(getByRole('heading', { name: "My Story" })).toBeInTheDocument()
})

test('renders my story in home page ', async () => {
	const { getByRole } = render(<HomePage />)

	await expect.element(getByRole('alert', {
		name: "My Story"
	})).toBeInTheDocument()
})

test('renders my story journey introduction', async () => {
	const { getByRole } = render(<MyStory />)
	await expect.element(getByRole('alert', { name: "Journey" })).toBeInTheDocument();
})

test('renders pictures', async () => {
	const { getByAltText } = render(<MyStory />)
	await expect.element(getByAltText('Profile')).toBeInTheDocument();
	await expect.element(getByAltText('Profile')).toBeInTheDocument();
})

test('renders buttons', async () => {
	const { getByRole } = render(<MyStory />)
	await expect.element(getByRole('button', { name: "View Full Story" })).toBeInTheDocument()
})

test('button should be clickable', async () => {
	const { getByRole } = render(<MyStory />)
	await expect.element(getByRole('button', { name: "View Full Story" })).not.toBeDisabled()

})

