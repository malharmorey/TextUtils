import React from 'react';

export default function About(props) {
	return (
		<>
			<div
				className='container mx-auto'
				style={{
					color: props.mode === 'light' ? 'black' : 'white',
				}}
			>
				<p className='h2 ' style={{ textDecoration: `underline` }}>
					About Us
				</p>
				<p>
					TextUtils is a{' '}
					<a
						style={{ textDecoration: `none` }}
						href='https://reactjs.org/'
						target='_blank'
						rel='noopener noreferrer'
					>
						React
					</a>{' '}
					based text utility web application used to modify our text content.
					This Web Application is coded 👨🏻‍💻 with ❤️ by Malhar.
				</p>
			</div>
		</>
	);
}
