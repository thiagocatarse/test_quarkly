import React from "react";
import { useOverrides } from "@quarkly/components";
import { Link } from "@quarkly/widgets";
const defaultProps = {
	"href": "#",
	"text-decoration-line": "initial",
	"quarkly-title": "header-link",
	"children": "Comece seu projeto",
	"display": "inline-block",
	"padding": "9px 17px 9px 17px",
	"font": "--base",
	"color": "--light",
	"hover-background": "--darkOpacity",
	"transition": "--allEase",
	"border-radius": "5px"
};
const overrides = {};

const HeaderLink = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Link {...rest}>
		{children}
	</Link>;
};

Object.assign(HeaderLink, { ...Link,
	defaultProps,
	overrides
});
export default HeaderLink;