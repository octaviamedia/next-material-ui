
import { createMuiTheme } from "@material-ui/core/styles";
import { amber, lightBlue, red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: lightBlue[800],
		},
		secondary: {
			main: amber[600],
		},
		error: {
			main: red.A400,
		},
		background: {
			default: "#fafafa",
		},
	},
});

export default theme;