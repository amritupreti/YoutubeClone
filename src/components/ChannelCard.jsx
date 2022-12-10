import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { CheckCircle } from "@mui/icons-material"

import { demoProfilePicture } from "../utils/constants"

const ChannelCard = (props) => {
    const { channelDetail, marginTop } = props;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'none',
                borderRadius: '20px',
                width: { md: '320px', xs: '356px' },
                height: '326px',
                margin: 'auto',
                marginTop,
            }}
        >
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent
                    sx={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'
                    }}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{ borderRadius: '50%', objectFit: 'cover', height: 180, mb: 2, border: '1px solid #e3e3e3' }}
                    />
                    <Typography variant="h6">
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{ color: 'gray', fontSize: 14, ml: '5px' }} />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography variant="subtitle2">
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard