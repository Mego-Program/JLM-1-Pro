import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';


const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';

const SpecButton = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedLinks, setSelectedLinks] = useState([]);

  const handleButtonClick = async () => {
    try {
      const response = await axios.get(API_ENDPOINT);
      setData(response.data);
      setOpen(true);
    } catch (error) {
      console.error('Error fetching data from the server', error);
    }
  };

  const handleModalClose = () => {
    setOpen(false);
    setSelectedItems([]);
  };

  const handleCheckboxChange = (index) => {
    setSelectedItems((prevSelectedItems) => {
      const newSelectedItems = [...prevSelectedItems];
      newSelectedItems[index] = !newSelectedItems[index];
      return newSelectedItems;
    });
  };

  const handleDoneButtonClick = () => {
    // Create links based on the selected titles

    const selectedLinks = data
      .filter((index) => selectedItems[index])
      .map((item) => ({
        title: item.title,
        link: `https://jsonplaceholder.typicode.com/todos/${item.id}` 
      }))

    // Set the links to the state
    setSelectedLinks(selectedLinks);
  };

  const handleLinkClick = (event, link) => {
    event.preventDefault();

    // You can navigate to the link or perform any other action here
    window.open(link, '_blank');
  };

  return (
    <div>
      <Button variant="contained" onClick={handleButtonClick}>
        specs
      </Button>

      <Modal open={open} onClose={handleModalClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 2,
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
        >
          <Typography variant="h6" component="div">
            Received Data
          </Typography>
          {data && (
            <div>
              {data.map((item, index) => (
                <Box key={index} mt={2} p={2} border={1} borderRadius={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedItems[index] || false}
                        onChange={() => handleCheckboxChange(index)}
                      />
                    }
                    label={`Item ${index + 1}`}
                  />
                  <Typography>{item.title}</Typography>
                </Box>
              ))}
            </div>
          )}
          <Button variant="contained" onClick={handleDoneButtonClick}>
            Done
          </Button>
          <Button onClick={handleModalClose}>Close</Button>
        </Box>
      </Modal>

      {/* Display the selected links outside the modal */}
      <div>
        {selectedLinks.map((link, index) => (
          <span key={index} variant="body1">
            <a
              href={link.link}
              style={{ color: 'white', textDecoration: 'underline', margin:8 }}
              // onClick={(event) => handleLinkClick(event, link)}
            >
              {link.title +"."}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SpecButton;

