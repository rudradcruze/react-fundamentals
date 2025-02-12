import viteImage from "/vite.svg";

export default function Header() {
	return (
		<header>
			<img
				src={viteImage}
				style={{ width: "4rem", height: "4rem" }}
				alt='vite'
			/>
			<h1 className='heading'>
				Hi, I am a React <span>Developer</span>
			</h1>
		</header>
	);
}
