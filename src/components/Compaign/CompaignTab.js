import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';
import Date from '../Tags/Date';
import View from '../Tags/View'
import Actions from '../Tags/Action'
import CompaignProfile from '../Tags/CompaignProfile'
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { updateData } from '../../util';
import { useTranslation } from "react-i18next";
import { Typography } from '@material-ui/core';

const columns = ['date', 'compaign', 'view', 'actions']
const CompaignTab = ({ data, setData, tab, classes }) => {
    const [calendarOpen, setCalendarOpen] = useState(null);
    const { t } = useTranslation();
    const onDateChange = (e) => {
        data = updateData(calendarOpen, e.getTime(), tab)
        setData(data);
    }
    return (
        <>
            <TableContainer component={Paper} className={classes.container} classes={{ root: classes.container }}>
                <Table stickyHeader aria-label="customized table">
                    <TableHead classes={{ root: classes.tableHead }}>
                        <TableRow>
                            {columns.map((column, index) => (
                                <TableCell
                                    key={index}
                                    style={{ minWidth: column.minWidth, backgroundColor: '#F1F1F4', fontSize: '16px' }}
                                >
                                    <Typography variant="body1"> {t(column)}</Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody classes={{ node: classes.tableBody }}>
                        {data.map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    <TableCell>
                                        <Date date={row.created_on} />
                                    </TableCell>
                                    <TableCell>
                                        <CompaignProfile row={row} />
                                    </TableCell>
                                    <TableCell >
                                        <View row={row} />
                                    </TableCell>
                                    <TableCell >
                                        <Actions row={row} setCalendarOpen={setCalendarOpen} />
                                    </TableCell>

                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            {
                calendarOpen ?
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            open
                            onClose={() => setCalendarOpen(null)}
                            format="MM/dd/yyyy"
                            value={moment()}
                            onChange={onDateChange}
                        />
                    </MuiPickersUtilsProvider> : null
            }
        </>
    )
}

const styles = () => ({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
        border: '5px'
    },
});

export default withStyles(styles)(CompaignTab)