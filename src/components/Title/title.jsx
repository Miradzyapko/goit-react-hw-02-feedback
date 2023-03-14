
	import PropTypes from 'prop-types';
	import { Text } from "./Title.styled";
	
	export const Title = ({ title }) => {
	    return (
			<Title>
	        <Text>{title}</Text>
			</Title>
	    )
	}
	
	Title.propTypes = {
	    title: PropTypes.string.isRequired
	}
