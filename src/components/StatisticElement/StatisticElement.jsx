import PropTypes from 'prop-types';
import { StatElement, Percentage } from './StatisticElement.styled';
import { getRandomHexColor } from 'components/Statistics/RandomeColorPicker';

export const StatisticElement = ({ label, percentage }) => {
    return (
        <StatElement style={{backgroundColor: getRandomHexColor()}}>
            <span className="label">{label}</span>
            <Percentage>{percentage}%</Percentage>
        </StatElement>
    )
} 

StatisticElement.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}