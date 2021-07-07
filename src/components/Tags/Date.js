import moment from 'moment';
import Typography from "@material-ui/core/Typography";

const Date = ({ date }) => {
    return <div>
        <Typography variant="subtitle1">{moment(parseInt(date)).format("MMM Y, DD")}</Typography>
        <Typography variant="caption">{moment(parseInt(date)).fromNow()}</Typography>
    </div>
}
export default Date;