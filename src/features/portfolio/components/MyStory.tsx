import profile from "../assets/images/profile.png"
import mario from "../assets/images/mario.png"

import "../assets/sass/mystory.scss"

export default function MyStory() {
	return (
		<section role='alert' aria-label="My Story">
			<h1 className="nes-text">My Story</h1>
			<div className="journey-section" />


			<div className="story-brief">
				<p className="nes-text cap" role='alert' aria-label="Journey">I have been falling in love with technology for a long time, since I was really young.</p>
				<figure>
					<img src={profile} alt="Profile" />
					<figcaption>A snapshot of my life - pixelized</figcaption>
				</figure>
			</div>

			<div className="story-brief">
				<div className="cap">
					<p className="nes-text">As an aside, I like NES games.<span>There will be more to it in the full story</span></p>
					<p>Not so much, but I'm still playing NES games at my free time.</p>
				</div>
				<figure>
					<img src={mario} alt="Mario" />
					<figcaption>My first ever game played - I'm bad at it tho</figcaption>
				</figure>
			</div>
			<button className="nes-btn">View Full Story</button>


		</section >
	)
}
