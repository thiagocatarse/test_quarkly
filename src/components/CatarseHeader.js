import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "Header",
	"display": "flex"
};
const overrides = {};

const CatarseHeader = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(CatarseHeader, { ...Box,
	defaultProps,
	overrides
});
export default CatarseHeader;