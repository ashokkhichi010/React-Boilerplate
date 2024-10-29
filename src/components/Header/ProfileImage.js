import React from 'react';
import { Typography, Box, Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';
import BadgeAvatars from '../Avatar/BadgeAvatars';

const ProfileImage = ({ handleOpenMenu }) => {
  const profile = useSelector((state) => state.profile);

  return (
    <>
      <Tooltip title={profile?.email || 'No email'}>
        <Box
          component="div"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: 'fit-content',
            marginRight: '1%',
            cursor: 'pointer', // Indicate that this is clickable
          }}
          onClick={handleOpenMenu}
        >
          <Typography sx={{ fontWeight: 500 }}>
            {profile?.name?.toUpperCase() || profile?.email?.split('@')[0].toUpperCase() || 'Guest'}
          </Typography>
        </Box>
      </Tooltip>
      <BadgeAvatars
        userImage={profile?.image}
        userName={profile?.name || 'Guest'}
        invisible={true}
        sx={{ width: "30px", height: "30px" }}
      />
    </>
  );
};

export default ProfileImage;
