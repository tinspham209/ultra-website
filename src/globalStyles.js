import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   font-family: "Source Sans Pro", sans-serif;
 }
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1300px;

	margin-right: auto;
	margin-left: auto;
	padding-right: 50px;
	padding-left: 50px;

	z-index: 1;

	@media screen and (max-width: 991px) {
		padding-right: 30px;
		padding-left: 30px;
	} ;
`;

export default GlobalStyle;