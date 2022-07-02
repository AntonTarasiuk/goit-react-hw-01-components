import PropTypes from 'prop-types';
import { StatsSection, StatsTitle, StatsList } from './Statistics.styled';
import { StatisticElement } from 'components/StatisticElement/StatisticElement';

export const Statistics = ({ title, stats }) => {
    return (
        <StatsSection>
            {title && <StatsTitle>{title.toUpperCase()}</StatsTitle>}
            
            <StatsList>
                {stats.map(stat =>
                    <StatisticElement 
                        key={stat.id} 
                        label={stat.label} 
                        percentage={stat.percentage}
                    />
                )}
            </StatsList>
        </StatsSection>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stat: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
}