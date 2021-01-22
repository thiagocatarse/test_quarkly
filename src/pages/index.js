import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.CatarseHeader background="black">
			<Box>
				<Image width="100px" height="64px" src="https://uploads.quarkly.io/5fa9e8bd8996cc001edcaced/images/logo_big.png?v=2021-01-22T01:59:38.485Z" />
			</Box>
			<Box display="flex" align-items="center" padding="0 10px 0 10px">
				<Components.HeaderLink>
					Comece seu projeto
				</Components.HeaderLink>
				<Components.HeaderLink>
					Explore
				</Components.HeaderLink>
			</Box>
			<Components.HeaderSearch display="flex" align-items="center">
				<Override slot="input" />
			</Components.HeaderSearch>
		</Components.CatarseHeader>
		<Components.BannerSlide
			display="flex"
			min-height="420px"
			align-items="center"
			flex-direction="column"
			justify-content="center"
		>
			<Text as="h1">
				Algum texto aqui
			</Text>
			<Components.ButtonPrimary />
		</Components.BannerSlide>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});