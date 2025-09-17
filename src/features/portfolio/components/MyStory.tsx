import profile from "../assets/images/profile.png"
import mario from "../assets/images/mario.png"

export default function MyStory() {
	return (
		<section role='alert' aria-label="My Story">
			<h1 className="nes-text">My Story</h1>
			<div className="journey-section" />


			<div className="story-brief">
				<p className="nes-text" role='alert' aria-label="Journey">I have been falling in love with technology for a long time, since I was really young.</p>
				<figure>
					<img src={profile} alt="Profile" />
					<figcaption>A snapshot of my life - pixelized</figcaption>
				</figure>
			</div>

			<div className="story-brief">
				<p className="nes-text">As an aside, I like NES games <span>There is more to it...</span></p>
				<figure>
					<img src={mario} alt="Mario" />
					<figcaption>My first ever game played - I'm bad at it tho</figcaption>
				</figure>
			</div>
			<button>View Full Story</button>


		</section >
	)
}
