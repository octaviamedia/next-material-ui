import Layout from "components/Layout";
import { Container, Typography } from "@material-ui/core";

// content goes here
export const getStaticProps = () => {
	return {
		props: {}
	};
};


const HomePage = () => {
	return <Layout>
		<Container>
			<Typography variant="h2">Hello World</Typography>
		</Container>
	</Layout>;

};

export default HomePage;