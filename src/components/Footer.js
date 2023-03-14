import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
			<div>
				<a
					href="https://github.com/CoulsonP"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
					 src='Screenshot 2023-03-13 at 8.16.18 PM.png'
						alt="Github"
						className="gitLogo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/coulson-porter-b6b38a261/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="/Screenshot 2023-03-13 at 7.58.05 PM.png"
						alt="LinkedIn"
						className="linkLogo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.instagram.com/coulson_porter/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="/Screenshot 2023-03-13 at 8.26.34 PM.png"
						alt="Instagram"
						className="instaLogo"
					></img>
				</a>
			</div>
		</footer>
     </div>
    )
  }
}