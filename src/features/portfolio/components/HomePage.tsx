import { PortfolioNavigation } from "../../common/components/PortfolioNavigation"
import "../assets/sass/homepage.scss"

export default function HomePage() {
	return (
		<>
			<PortfolioNavigation />
			<main>
				<h3 className="nes-text greeting" aria-label="greeting">Hello, my name is</h3>
				<h1 className="nes-text" aria-label="Header">Nguyen Tan Cuong</h1>
				<h3 className="nes-text" aria-label="Job">I am a Software Developer</h3>
				<p className="nes-text" role="alert" aria-label="Intro">Making software is a journey, and my life is to explore the rest of it</p>
			</main>
		</>
	)
}

