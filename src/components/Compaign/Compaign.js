import { Tab, Tabs, Typography, withStyles } from "@material-ui/core"
import Divider from '@material-ui/core/Divider';
import { useEffect, useState } from "react";
import CompaignTab from './CompaignTab'
import { useTranslation } from "react-i18next";
import { fetchData as a, getTabData } from "../../util";
import { CircularProgress } from "@material-ui/core";

const tabs = ['upcomming', 'live', 'past'];
const Compaign = ({ classes }) => {
    const [value, setValue] = useState(0);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation();
    useEffect(() => {
        setLoading(true);
        a()
            .then(a => {
                setData(getTabData(tabs[value]))
                setLoading(false)
            })
    }, [])
    useEffect(() => {
        setData(getTabData(tabs[value]))
    }, [value])

    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleNavChange = (e, value) => {
        setValue(value)
    }
    return <>
        <Tabs
            value={value} onChange={handleNavChange}
            variant="scrollable"
            aria-label="simple tabs example"
            indicatorColor="secondary"
            textColor="secondary"
        >
            <Tab classes={{
                root: classes.tabLabel
            }} label={t("upcomingCampaign")} {...a11yProps(0)} />
            <Tab classes={{
                root: classes.tabLabel
            }} label={t("liveCampaign")} {...a11yProps(1)} />
            <Tab classes={{
                root: classes.tabLabel
            }} label={t("pastCampaign")} {...a11yProps(2)} />
        </Tabs>
        <Divider classes={{ root: classes.root }} />
        {
            loading ? <div style={{ display: "flex", justifyContent: "center" }}><CircularProgress /></div>
                :
                data.length ?
                    <CompaignTab data={data} setData={setData} tab={tabs[value]} /> :
                    <Typography variant="h4" color="primary"> {t('Not Result Found')}</Typography>
        }
    </>
}

const styles = () => ({
    root: {
        marginBottom: '40px',
        fontSize: '18px'
    },
    tabLabel: {
        fontSize: "18px",
        fontWeight: "500",
        textTransform: "none",
    }
})

export default withStyles(styles)(Compaign);