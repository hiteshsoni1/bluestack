import { price } from '../../Images'
import Typography from "@material-ui/core/Typography";
import { Dialog, Container, withStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Button from '@material-ui/core/Button';

const View = ({ row, classes }) => {
    const [priceDetailModal, setPriceDetailModal] = useState(false);
    const { t } = useTranslation();
    return <>
        <div style={{ display: 'flex', alignContent: 'center', cursor: 'pointer' }} onClick={() => setPriceDetailModal(true)}>
            <img src={price} style={{ marginRight: '6px' }} alt={t("viewPricing")} />
            <Typography variant="subtitle2">{t("viewPricing")}</Typography>
        </div>
        {
            priceDetailModal && <PriceDetails row={row} onClose={() => setPriceDetailModal(false)} classes={classes} />
        }
    </>
}

function PriceDetails({ classes, ...props }) {
    const { t } = useTranslation();
    return <Dialog maxWidth="xs" onClose={props.onClose} aria-labelledby="simple-dialog-title" open >
        <Container classes={{ root: classes.root }}>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <img src={props.row.image_url} height={137} width={137} alt="pic" style={{
                    margin: '0px 10px 30px 0px',
                    objectFit: "cover"

                }} />
                <div style={{ marginBottom: '30px' }}>
                    <Typography classes={{ root: classes.name }}>{props.row.name}</Typography>
                    <Typography classes={{ root: classes.region }}>{props.row.region}</Typography>
                </div>
            </div>
            <div>
                <Typography classes={{ root: classes.pricing }}>{t("pricing")}</Typography>
                {
                    props.row.price.map((price) => {
                        return <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <Typography variant="subtitle1"> {price.timeRange}</Typography>
                            <Typography variant="body1">{price.price}</Typography>
                        </div>
                    })
                }
            </div>
            <Button variant="outlined" onClick={props.onClose}>{t("close")}</Button>
        </Container>
    </Dialog>
}

const styles = (theme) => ({
    root: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '400px',
        [theme.breakpoints.down("sm")]: {
            width: '350px'
        },
    },
    price: {
        fontSize: '14px',
        color: '#7788A3',
    },
    name: {
        fontSize: '16px',
        fontWeight: '500',
        color: '#2B416C',
    },
    region: {
        fontSize: '14px',
        fontWeight: '400',
        color: '#9CA2B7',
    },
    pricing: {
        fontSize: "24px",
        lineHeight: "32px",
        color: "#2B416C",
        marginBottom: "20px",
        fontWeight: "bold"
    }

})

export default withStyles(styles)(View);