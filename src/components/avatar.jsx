import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <div style={{ margin: '16px',  border: '2px solid yellow-', borderRadius: '50%'}}>
    <Stack direction="row" spacing={2}>
      <Avatar alt="Yemy Sharp" src="/static/images/avatar/1.jpg" />
      
    </Stack>
    </div>
  );
}