import PropTypes from 'prop-types';
import { List, Item } from './Statistics.Styled';

export const Statistics = ({ good, neutral, bad, total, goodPersentage }) => {
    return (
  
       
            <List>
                <Item>Good: {good}</Item>
                <Item>Neutral: {neutral}</Item>
                <Item>Bad: {bad}</Item>
                <Item>Total: {total}</Item>
                <Item>Positive feedback: {goodPersentage}</Item>
            </List>
            );
    };
    
    Statistics.propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
       positive: PropTypes.string.isRequired,
    };
    
  
    
 