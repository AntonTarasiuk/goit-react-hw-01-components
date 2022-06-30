import PropTypes from 'prop-types'
import { 
    Container, 
    MainInfoWraper, 
    Avatar, 
    Name, 
    Tag, 
    Location, 
    Stats, 
    StatsElement, 
    StatLabel, 
    StatValue 
} from './Profile.styled'

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
    <Container key={tag}>
        <MainInfoWraper>
            <Avatar
                src={avatar}
                alt="User avatar"
            />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </MainInfoWraper>

        <Stats>
            <StatsElement>
                <StatLabel>Followers</StatLabel>
                <StatValue>{stats.followers}</StatValue>
            </StatsElement>
            <StatsElement>
                <StatLabel>Views</StatLabel>
                <StatValue>{stats.views}</StatValue>
            </StatsElement>
            <StatsElement>
                <StatLabel>likes</StatLabel>
                <StatValue>{stats.likes}</StatValue>
            </StatsElement>
        </Stats>
    </Container>
    )
} 

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
    })
    
}