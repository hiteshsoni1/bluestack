import { Typography } from '@material-ui/core'
import { report, calendar, file } from '../../Images'
import { useTranslation } from "react-i18next";
import styled from 'styled-components';

const Action = styled.div`
  display:flex;
  alignItems:center
`;

const Actions = ({ row, setCalendarOpen }) => {
    const { t } = useTranslation();
    return <div style={{ display: 'flex' }}>
        <Action>
            <img src={file} alt={t("csv")} style={{ marginRight: '6px' }} />
            <Typography variant="subtitle2">{t("csv")}</Typography>
        </Action>
        <Action>
            <img src={report} alt={t("report")} style={{ marginLeft: '40px', marginRight: '6px' }} />
            <Typography variant="subtitle2">{t("report")}</Typography>
        </Action>
        <Action style={{ cursor: 'pointer' }} onClick={() => setCalendarOpen(row.id)}>
            <img src={calendar} alt={t("scheduleAgain")} style={{ marginLeft: '40px', marginRight: '6px' }} />
            <Typography variant="subtitle2">{t("scheduleAgain")}</Typography>
        </Action>
    </div>
}
export default Actions;