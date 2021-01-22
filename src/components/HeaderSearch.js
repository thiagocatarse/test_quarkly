import React from "react";
import { useOverrides } from "@quarkly/components";
import { Input, Box } from "@quarkly/widgets";
const defaultProps = {};
const overrides = {
	"input": {
		"kind": "Input",
		"props": {
			"height": "42px",
			"type": "text"
		}
	}
};

const HeaderSearch = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Input {...override("input")} />
		{children}
	</Box>;
};

Object.assign(HeaderSearch, { ...Box,
	defaultProps,
	overrides
});
export default HeaderSearch;