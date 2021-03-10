import Head from 'next/head';
import styles from '../styles/Home.module.css';
import FacebookLogin from 'react-facebook-login';

export default function Home() {
	const responseFacebook = (response) => {
		console.log(response);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Main>
				<div>
					<h1>Facebook Login</h1>
					<FacebookLogin
						appId="1088597931155576"
						autoLoad={true}
						fields="name,email,picture"
						onClick={componentClicked}
						callback={responseFacebook}
					/>
				</div>
			</Main>
		</div>
	);
}
