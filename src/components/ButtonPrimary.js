import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"font": "--base",
	"color": "--light",
	"background": "--primary",
	"box-shadow": "--m",
	"children": "Button"
};
const overrides = {};

const ButtonPrimary = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		{children}
	</Button>;
};

Object.assign(ButtonPrimary, { ...Button,
	defaultProps,
	overrides
});
export default ButtonPrimary;