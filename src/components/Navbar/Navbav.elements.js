import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
	background: #101522;
	height: 80px;
	font-size: 1.2rem;

	display: flex;
	justify-content: center;
	align-items: center;

	position: sticky;
	top: 0;
	z-index: 999;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	height: 80px;

	${Container}
`;

export const NavLogo = styled(Link)`
	color: #fff;
	text-decoration: none;
	font-size: 2rem;

	display: flex;
	justify-self: flex-start;
	align-items: center;

	cursor: pointer;
`;

export const NavIcon = styled(FaMagento)`
	margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 960px) {
		font-size: 1.8rem;
		display: block;

		position: absolute;
		top: 0;
		right: 0;

		transform: translate(-100%, 60%);

		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 960px) {
		width: 100%;
		height: 90vh;
		background: #101522;

		display: flex;
		flex-direction: column;

		position: absolute;
		top: 80px;
		left: ${({ click }) => (click ? 0 : "-100%")};

		opacity: 1;
		transition: all 0.5s ease;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	border-bottom: 2px solid transparent;

	&:hover {
		border-bottom: 2px solid #4b59f7;
	}

	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled(Link)`
	height: 100%;
	text-decoration: none;
	color: #fff;
	padding: 0.5rem 1rem;

	display: flex;
	align-items: center;

	@media screen and (max-width: 960px) {
		width: 100%;
		padding: 2rem;
		text-align: center;
		display: table;
	}

	&:hover {
		color: #4b59f7;
		transition: all 0.3s ease;
	}
`;

export const NavItemBtn = styled.li`
	@media screen and (max-width: 960px) {
		width: 100%;
		height: 120px;

		display: flex;
		justify-content: center;
		align-item: center;
	}
`;

export const NavBtnLink = styled(Link)`
	height: 100%;
	width: 100%;
	padding: 8px 16px;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	text-decoration: none;
	border: none;
	outline: none;
`;
