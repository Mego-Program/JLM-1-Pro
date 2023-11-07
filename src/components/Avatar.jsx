import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';




export default function AvatarComponent(props) {
  const [showContent, setShowContent] = useState(false);
  function handleButton() {
    setShowContent(!showContent);
  }
  return (
    <div>

      <Button onClick={handleButton}>
        <Avatar alt='ava' src={props.src} sx={{ width: 56, height: 55, border: 2, borderColor: 'black' }} />
      </Button>
      {showContent && (
        <div>
          <h1>{props.title}</h1>
          <h2>{props.id}</h2>
        </div>
      )}
    </div>
  );
}