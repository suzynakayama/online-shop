import styled from // { css }
"styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`;

// this is how we use styled-components leveraging the Link component from react-route-dom, call styled as a method passing the Link
export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px;
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

// If you have 2 different types of components that use the same style (ex. Link and div),
// create the styles on a variable calling css and then pass that style within the regular call with string interpolation
/* const OptionStyles = css`
	padding: 10px 15px;
	cursor: pointer;
	font-size: var(--fs-h6);
	font-weight: bold;
`;

  export const OptionLink = styled(Link)`
    ${OptionStyles}
  `;

export const OptionDiv = styled.div`
	${OptionStyles}
  `;
  */

// OR we can just have the OptionLink and use as='div' on the jsx and it will be transformed to a div component with the Link styles
export const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
	font-size: var(--fs-h6);
	font-weight: bold;
`;
