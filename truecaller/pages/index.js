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

	const handleTrueCallerLogin = () => {
		let req_nonce = 4545523512345346464; // random number of length 8 to 64 characters
		window.location = `truecallersdk://truesdk/web_verify?
                               requestNonce=${req_nonce}
                               &partnerKey=iJs0J90af38dc002843dcbcc6ad1e2112f0b9
                               &partnerName=truecaller-demo
                               &lang=en
							   &loginSuffix=login`;

		setTimeout(function() {
			if (document.hasFocus()) {
				alert('Please install Truecaller');
			} else {
				alert('done');
			}
		}, 600);
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
			<h1>Truecaller login</h1>
			<button onClick={handleTrueCallerLogin}>Truecaller</button>
		</div>
	);
}
