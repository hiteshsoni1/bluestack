import { logo } from '../../Images'
import { AppBar, MenuItem, Select } from '@material-ui/core'
import { Toolbar, } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Header = ({ classes }) => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language ?? 'en');

    const onLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
        setLang(e.target.value)
    }
    return <AppBar position="fixed" classes={{ root: classes.root }}>
        <Toolbar classes={{ root: classes.toolbar }}>
            <img src={logo} alt="logo"/>
            <Select
                defaultValue={lang}
                classes={{ root: classes.select, icon: classes.icon }}
                onChange={onLanguageChange}
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem selected={'en'} value={'en'}>{t("en")}</MenuItem>
                <MenuItem selected={'de'} value={'de'}>{t("de")}</MenuItem>
            </Select>
        </Toolbar>
    </AppBar>

}

const styles = theme => ({
    root: {
        paddingLeft: "180px",
        backgroundColor: '#1F2640',
        height: '84px',
        [theme.breakpoints.down("sm")]: {
            paddingLeft: '10px',
            paddingTop: '10px'
        },
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    select: {
        color: 'white',
        borderRadius: '5px'
    },
    icon: {
        color: 'white'
    }
});
export default withStyles(styles)(Header)