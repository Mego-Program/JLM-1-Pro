import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
   <div style={{ width: '56.019px', height: '55px', flexShrink: 0 }}>
    <Stack direction="row" spacing={2}>
      <Avatar alt="Yemy Sharp" src="/static/images/avatar/1.jpg" style={{border: '3px solid #fbc02d', borderRadius: '50%'}}/>
      
    </Stack>
    </div>
  );
}