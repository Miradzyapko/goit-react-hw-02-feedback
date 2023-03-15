
import PropTypes from 'prop-types';
import { List, Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <List>
            {options.map(option => (
            <Button key={option} onClick={() => onLeaveFeedback(option)}>
                    {option}
                </Button>
            ))}
        </List>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
