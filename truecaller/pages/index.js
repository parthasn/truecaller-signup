import Head from 'next/head';
import styles from '../styles/Home.module.css';
import FacebookLogin from 'react-facebook-login';

export default function Home() {
	const componentClicked = () => {
		console.log('clicked');
	};
	const responseFacebook = (response) => {
		console.log(response);
	};

	return (
		<div className={styles.container}>
			<h1>Facebook Login</h1>
			<FacebookLogin
				appId="492909108754785"
				autoLoad={false}
				fields="name,email,picture"
				onClick={componentClicked}
				callback={responseFacebook}
			/>
		</div>
	);
}
