import React, { useState } from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";

const BarDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedEmoji, setSelectedEmoji] = useState("🔘");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    handleClose();
  };

  const emojiList = ["🔴", "🟠", "🟢","🔵"]; // Add more emojis as needed

  return (
    <div>
      <Button onClick={handleClick}>
        <span role="img" aria-label="circle" style={{ fontSize: "14px" }}>
          {selectedEmoji}
        </span>
      </Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box p={2} display="flex" flexDirection="column">
          <p style={{ marginBottom: "8px", fontWeight: "bold" ,color: '#FFC300 '}}>
            Task <br />Urgency:
          </p>
          {emojiList.map((emoji) => (
            <span
              key={emoji}
              role="img"
              aria-label="circle"
              style={{ fontSize: "14px", cursor: "pointer", marginBottom: "4px" }}
              onClick={() => handleEmojiClick(emoji)}
            >
              {emoji}
            </span>
          ))}
        </Box>
      </Popover>
    </div>
  );
};



export default BarDropdown;
