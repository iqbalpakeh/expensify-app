import React from "react";

export default props => (
	<div>
		<p>
			{props.description} {props.amount} {props.createdAt}
		</p>
	</div>
);
