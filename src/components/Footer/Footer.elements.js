import styled from "styled-components";
import { FaMagento } from "react-icons/fa";

import { Link } from "react-router-dom";
export const FooterContainer = styled.div`
	background-color: #101522;
	padding: 4rem 0 2rem 0;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const FooterSubscription = styled.section`
	margin-bottom: 24px;
	padding: 24px;
	color: #fff;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const FooterSubHeading = styled.p`
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	margin-bottom: 24px;
	font-size: 24px;
`;

export const FooterSubText = styled.p`
	margin-bottom: 24px;
	font-size: 20px;
`;

export const Form = styled.form`
	display: block;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 820px) {
		flex-direction: column;
		width: 80%;
	}
`;

export const FormInput = styled.input`
	font-size: 16px;

	padding: 10px 20px;
	margin-right: 10px;

	outline: none;
	border: none;
	border: 1px solid #fff;
	border-radius: 2px;

	&::placeholder {
		color: #242424;
	}

	@media screen and (max-width: 820px) {
		width: 100%;
		margin: 0 0 16px 0;
	}
`;

export const FooterLinksContainer = styled.div`
	width: 100%;
	max-width: 1000px;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`;

export const FooterLinksWrapper = styled.div`
	display: flex;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;
export const FooterLinkItems = styled.div`
	margin: 16px;
	width: 160px;
	color: #fff;

	box-sizing: border-box;
	text-align: left;

	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media screen and (max-width: 420px) {
		margin: 0;
		padding: 10px;
		width: 100%;
	}
`;

export const FooterLinkTitle = styled.h2`
	margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	margin-bottom: 0.8rem;

	&:hover {
		color: #0467fb;
		transition: 0.3s ease-out;
	}
`;

export const SocialMedia = styled.section`
	width: 100%;
	max-width: 1000px;
`;

export const SocialMediaWrap = styled.div`
	width: 90%;
	max-width: 1000px;
	margin: 40px auto 0 auto;

	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const SocialLogo = styled(Link)`
	color: #fff;
	font-size: 2rem;
	margin-bottom: 16px;
	text-decoration: none;

	display: flex;
	align-items: center;
	justify-self: start;

	cursor: pointer;
`;

export const SocialIcon = styled(FaMagento)`
	margin-right: 10px;
`;

export const WebsiteRights = styled.small`
	color: #fff;
	margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
	width: 240px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const SocialIconLink = styled.a`
	color: #fff;
	font-size: 24px;
`;
