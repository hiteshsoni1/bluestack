import './App.css';
import Header from './components/Header/Header';
import Compaign from './components/Compaign/Compaign';
import { Container } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core";

function App({ classes }) {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Container classes={{ root: classes.root }}>
        <Typography variant="h3" className={classes.title}>
          {t("manageCampaign")}
        </Typography>
        <Compaign />
      </Container>
    </>
  );
}

const styles = theme => ({
  root: {
    padding: "60px 180px",
    [theme.breakpoints.down("sm")]: {
      padding: "60px 10px"
    },
  },

  title: {
    fontWeight: "700",
    margin: '40px 0px',
    color: '#2B416C',
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px"
    },
  },
})

export default withStyles(styles)(App);
