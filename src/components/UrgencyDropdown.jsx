import React, { useState ,useEffect} from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import axios from "axios";



const BarDropdown = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedEmoji, setSelectedEmoji] = useState(props.column.ColumnUrgency);

  useEffect(() => {
    setSelectedEmoji(props.column.ColumnUrgency);
  }, [props.column.ColumnUrgency]);


  async function update_project_column_urgency(projectID, columnID, newColumnUrgency){
    console.log('beffun');
    try {
      const response = await axios.post('http://localhost:8137/projects/update_project_column_urgency',{
        projectId: projectID,
        columnID:columnID,
        newColumnUrgency: newColumnUrgency
        
      });  
    } catch (error) {
      console.error('Error fetching tasks:', error.message);
      return null
    }
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEmojiClick = (projectID,columnID,newColumnUrgency) => {
    update_project_column_urgency(projectID,columnID,newColumnUrgency)
    setSelectedEmoji(newColumnUrgency);
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
            Column <br />Urgency:
          </p>
          {emojiList.map((emoji) => (
            <span
              key={emoji}
              role="img"
              aria-label="circle"
              style={{ fontSize: "14px", cursor: "pointer", marginBottom: "4px" }}
              onClick={() => handleEmojiClick(props.ccurrentProject._id, props.column.id, emoji)}
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
