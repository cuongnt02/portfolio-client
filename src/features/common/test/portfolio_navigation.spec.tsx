import { expect, test } from "vitest"
import { render } from "vitest-browser-react"
import { PortfolioNavigation } from "../components/PortfolioNavigation"


test('renders navigation container', async () => {
	const { getByRole } = render(<PortfolioNavigation />)
	await expect.element(getByRole('navigation', { name: "PortfolioNavigation" })).toBeInTheDocument()
})

test('navigation should have item', async () => {
	const { getByRole } = render(<PortfolioNavigation />)
	const navigationItems = getByRole(
		'navigation', { name: "PortfolioNavigation", }
	)
		.getByRole('listitem')
		.all()

	expect(navigationItems.length).toBeGreaterThan(0)
})

test('navigation items should have no empty strings', async () => {
	const { getByRole } = render(<PortfolioNavigation />);
	const navigation = getByRole(
		'navigation', { name: "PortfolioNavigation" }
	);


	const navigationItems = navigation.getByRole('listitem').all();

	expect(navigationItems.length).toBeGreaterThan(0)

	for (const item of navigationItems) {
		expect(item.query()).not.toBeNull();
		expect(item.query()).not.toBeEmptyDOMElement()
	}
})

test('navigation items should have at most 5 links', async () => {
	const { getByRole } = render(<PortfolioNavigation />)
	const navigationItems = getByRole(
		'navigation', { name: "PortfolioNavigation" }
	)
		.getByRole('listitem')
		.all()
	expect(navigationItems.length).toBeGreaterThan(0)
	expect(navigationItems.length).toBeLessThanOrEqual(5)

})
