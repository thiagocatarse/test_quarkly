import React from "react";
import { useOverrides } from "@quarkly/components";
import { Link } from "@quarkly/widgets";
const defaultProps = {
	"href": "#",
	"text-decoration-line": "initial",
	"quarkly-title": "header-link",
	"children": "Comece seu projeto",
	"padding": "0 30px 0 30px",
	"color": "--light"
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