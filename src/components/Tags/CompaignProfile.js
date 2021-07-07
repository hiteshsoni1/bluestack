import Typography from "@material-ui/core/Typography";

const CompaignProfile = ({ row }) => {
    return <div style={{ display: 'flex', alignItems: "center" }}>
        <img src={row.image_url} height={40} width={40} alt={row.name} style={{ marginRight: '6px', objectFit: 'cover' }} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "space-around" }}>
            <Typography variant="subtitle1">{row.name}</Typography>
            <Typography variant="caption">{row.region}</Typography>
        </div>
    </div>
}
export default CompaignProfile