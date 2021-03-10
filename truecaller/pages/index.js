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
		window.location = `truecallersdk://truesdk/web_verify?type=btmsheet
                            &requestNonce=${req_nonce}
                            &partnerKey=XgAXE272ea2ab2b354dfaac68447ee57a51f6
                            &partnerName=truecaller2
                            &lang=en   
                            &loginPrefix=continue
                            &loginSuffix=login
                            &ctaPrefix=continuewith
                            &ctaColor=%23f75d34
                            &ctaTextColor=%23f75d34
                            &btnShape=rect
                            &skipOption=skip`;

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
