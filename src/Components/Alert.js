import React from 'react';

export default function Alert(props) {
	return (
		<div style={{ position: `absolute`, width: `100vw` }}>
			{props.alert && (
				<div>
					<div
						className={`alert alert-${props.alert.type} alert-dismissible fade show`}
						role='alert'
					>
						{props.alert.message}
					</div>
				</div>
			)}
		</div>
	);
}
