// import React, { useState, useEffect } from 'react';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import axios from 'axios';

// const API_ENDPOINT = 'https://your-server-api-endpoint.com/data';
// const SERVER_ENDPOINT = 'YOUR_SERVER_ENDPOINT';

// const YourComponent = () => {
//   const [data, setData] = useState([]);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     // Fetch initial data when the component mounts
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(API_ENDPOINT);
//       setData(response.data);
//       setOpen(true);
//     } catch (error) {
//       console.error('Error fetching data from the server', error);
//     }
//   };

//   const fetchOriginalData = async () => {
//     try {
//       const response = await axios.get(API_ENDPOINT);
//       // Mark the items that were previously selected
//       const markedOriginalData = response.data.map((item) => ({
//         ...item,
//         selected: selectedItems.some((selected, index) => selected && index === item.id),
//       }));
//       setData(markedOriginalData);
//       setOpen(true);
//     } catch (error) {
//       console.error('Error fetching original data from the server', error);
//     }
//   };

//   const handleModalClose = () => {
//     setOpen(false);
//     setSelectedItems([]);
//   };

//   const handleCheckboxChange = (index) => {
//     setSelectedItems((prevSelectedItems) => {
//       const newSelectedItems = [...prevSelectedItems];
//       newSelectedItems[index] = !newSelectedItems[index];
//       return newSelectedItems;
//     });
//   };

//   const handleDoneButtonClick = async () => {
//     // Create links based on the selected titles
//     const selectedLinks = data
//       .filter((item, index) => selectedItems[index])
//       .map((item) => `/object/${item.id}`);

//     // Send selected objects to the server
//     try {
//       await axios.post(SERVER_ENDPOINT, {
//         selectedObjects: selectedLinks,
//       });
//       console.log('Selected objects sent to the server:', selectedLinks);
//     } catch (error) {
//       console.error('Error sending selected objects to the server', error);
//     }

//     // Close the modal after sending data
//     handleModalClose();
//   };

//   const updateServerWithSelectedObjects = async () => {
//     // Create links based on the selected titles
//     const selectedLinks = data
//       .filter((item) => item.selected)
//       .map((item) => `/object/${item.id}`);

//     // Send updated selected objects to the server
//     try {
//       await axios.put(SERVER_ENDPOINT, {
//         updatedSelectedObjects: selectedLinks,
//       });
//       console.log('Updated selected objects sent to the server:', selectedLinks);
//     } catch (error) {
//       console.error('Error updating selected objects on the server', error);
//     }

//     // Close the modal after updating data
//     handleModalClose();
//   };

//   return (
//     <div>
//       <Button variant="contained" onClick={fetchData}>
//         Fetch Data
//       </Button>
//       <Button variant="contained" onClick={fetchOriginalData}>
//         Fetch Original Data with Selection
//       </Button>

//       <Modal open={open} onClose={handleModalClose}>
//         {/* ... (rest of the modal content) */}
//         <Button variant="contained" onClick={handleDoneButtonClick}>
//           Done
//         </Button>
//         <Button variant="contained" onClick={updateServerWithSelectedObjects}>
//           Update Server
//         </Button>
//         <Button onClick={handleModalClose}>Close</Button>
//       </Modal>
//     </div>
//   );
// };

// export default YourComponent;


// import React, { useState, useEffect } from 'react';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import axios from 'axios';

// const API_ENDPOINT = 'https://your-server-api-endpoint.com/data';
// const SERVER_ENDPOINT = 'YOUR_SERVER_ENDPOINT';

// const YourComponent = () => {
//   const [data, setData] = useState([]);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     // Fetch initial data when the component mounts
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(API_ENDPOINT);
//       setData(response.data);
//       setOpen(true);
//     } catch (error) {
//       console.error('Error fetching data from the server', error);
//     }
//   };

//   const fetchOriginalData = async () => {
//     try {
//       const response = await axios.get(API_ENDPOINT);
//       // Mark the items that were previously selected
//       const markedOriginalData = response.data.map((item) => ({
//         ...item,
//         selected: selectedItems.some((selected, index) => selected && index === item.id),
//       }));
//       setData(markedOriginalData);
//       setOpen(true);
//     } catch (error) {
//       console.error('Error fetching original data from the server', error);
//     }
//   };

//   const handleModalClose = () => {
//     setOpen(false);
//     setSelectedItems([]);
//   };

//   const handleCheckboxChange = (index) => {
//     setSelectedItems((prevSelectedItems) => {
//       const newSelectedItems = [...prevSelectedItems];
//       newSelectedItems[index] = !newSelectedItems[index];
//       return newSelectedItems;
//     });
//   };

//   const handleDoneButtonClick = async () => {
//     // Create links based on the selected titles
//     const selectedLinks = data
//       .filter((item, index) => selectedItems[index])
//       .map((item) => `/object/${item.id}`);

//     // Send selected objects to the server
//     try {
//       await axios.post(SERVER_ENDPOINT, {
//         selectedObjects: selectedLinks,
//       });
//       console.log('Selected objects sent to the server:', selectedLinks);
//     } catch (error) {
//       console.error('Error sending selected objects to the server', error);
//     }

//     // Close the modal after sending data
//     handleModalClose();
//   };

//   const updateServerWithSelectedObjects = async () => {
//     // Create links based on the selected titles
//     const selectedLinks = data
//       .filter((item) => item.selected)
//       .map((item) => `/object/${item.id}`);

//     // Send updated selected objects to the server
//     try {
//       await axios.put(SERVER_ENDPOINT, {
//         updatedSelectedObjects: selectedLinks,
//       });
//       console.log('Updated selected objects sent to the server:', selectedLinks);
//     } catch (error) {
//       console.error('Error updating selected objects on the server', error);
//     }

//     // Close the modal after updating data
//     handleModalClose();
//   };

//   return (
//     <div>
//       <Button variant="contained" onClick={fetchData}>
//         Fetch Data
//       </Button>
//       <Button variant="contained" onClick={fetchOriginalData}>
//         Fetch Original Data with Selection
//       </Button>

//       <Modal open={open} onClose={handleModalClose}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 400,
//             bgcolor: 'background.paper',
//             border: '2px solid #000',
//             boxShadow: 24,
//             p: 2,
//             maxHeight: '80vh',
//             overflowY: 'auto',
//           }}
//         >
//           <Typography variant="h6" component="div">
//             Received Data
//           </Typography>
//           {data && (
//             <div>
//               {data.map((item, index) => (
//                 <Box key={index} mt={2} p={2} border={1} borderRadius={4}>
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         checked={selectedItems[index] || false}
//                         onChange={() => handleCheckboxChange(index)}
//                       />
//                     }
//                     label={`Item ${index + 1}`}
//                   />
//                   <Typography>{item.title}</Typography>
//                 </Box>
//               ))}
//             </div>
//           )}
//           <Button variant="contained" onClick={handleDoneButtonClick}>
//             Done
//           </Button>
//           <Button variant="contained" onClick={updateServerWithSelectedObjects}>
//             Update Server
//           </Button>
//           <Button onClick={handleModalClose}>Close</Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default YourComponent;

// import React, { useState, useEffect } from 'react';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import axios from 'axios';

// const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';
// const SERVER_ENDPOINT = 'YOUR_SERVER_ENDPOINT';

// const YourComponent = () => {
//   const [data, setData] = useState([]);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [settingsModalOpen, setSettingsModalOpen] = useState(false);

//   useEffect(() => {
//     // Fetch initial data when the component mounts
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(API_ENDPOINT);
//       setData(response.data);
//       setOpen(true);
//     } catch (error) {
//       console.error('Error fetching data from the server', error);
//     }
//   };

//   const fetchOriginalData = async () => {
//     try {
//       const response = await axios.get(API_ENDPOINT);
//       // Mark the items that were previously selected
//       const markedOriginalData = response.data.map((item) => ({
//         ...item,
//         selected: selectedItems.some((selected, index) => selected && index === item.id),
//       }));
//       setData(markedOriginalData);
//       setOpen(true);
//     } catch (error) {
//       console.error('Error fetching original data from the server', error);
//     }
//   };

//   const handleModalClose = () => {
//     setOpen(false);
//     setSelectedItems([]);
//   };

//   const handleSettingsModalOpen = () => {
//     setSettingsModalOpen(true);
//   };

//   const handleSettingsModalClose = () => {
//     setSettingsModalOpen(false);
//   };

//   const handleCheckboxChange = (index) => {
//     setSelectedItems((prevSelectedItems) => {
//       const newSelectedItems = [...prevSelectedItems];
//       newSelectedItems[index] = !newSelectedItems[index];
//       return newSelectedItems;
//     });
//   };

//   const handleDoneButtonClick = async () => {
//     // Create links based on the selected titles
//     const selectedLinks = data
//       .filter((item, index) => selectedItems[index])
//       .map((item) => `/object/${item.id}`);

//     // Send selected objects to the server
//     try {
//       await axios.post(SERVER_ENDPOINT, {
//         selectedObjects: selectedLinks,
//       });
//       console.log('Selected objects sent to the server:', selectedLinks);
//     } catch (error) {
//       console.error('Error sending selected objects to the server', error);
//     }

//     // Close the modal after sending data
//     handleModalClose();
//   };

//   const updateServerWithSelectedObjects = async () => {
//     // Create links based on the selected titles
//     const selectedLinks = data
//       .filter((item) => item.selected)
//       .map((item) => `/object/${item.id}`);

//     // Send updated selected objects to the server
//     try {
//       await axios.put(SERVER_ENDPOINT, {
//         updatedSelectedObjects: selectedLinks,
//       });
//       console.log('Updated selected objects sent to the server:', selectedLinks);
//     } catch (error) {
//       console.error('Error updating selected objects on the server', error);
//     }

//     // Close the modal after updating data
//     handleModalClose();
//   };

//   return (
//     <div>
//       <Button variant="contained" onClick={handleSettingsModalOpen}>
//         Settings
//       </Button>

//       <Modal open={settingsModalOpen} onClose={handleSettingsModalClose}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 200,
//             bgcolor: 'background.paper',
//             border: '2px solid #000',
//             boxShadow: 24,
//             p: 2,
//           }}
//         >
//           <Button variant="contained" onClick={fetchData}>
//             Fetch Data
//           </Button>
//           <Button variant="contained" onClick={fetchOriginalData}>
//             Fetch Original Data with Selection
//           </Button>
//         </Box>
//       </Modal>

//       <Modal open={open} onClose={handleModalClose}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 400,
//             bgcolor: 'background.paper',
//             border: '2px solid #000',
//             boxShadow: 24,
//             p: 2,
//             maxHeight: '80vh',
//             overflowY: 'auto',
//           }}
//         >
//           <Typography variant="h6" component="div">
//             Received Data
//           </Typography>
//           {data && (
//             <div>
//               {data.map((item, index) => (
//                 <Box key={index} mt={2} p={2} border={1} borderRadius={4}>
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         checked={selectedItems[index] || false}
//                         onChange={() => handleCheckboxChange(index)}
//                       />
//                     }
//                     label={`Item ${index + 1}`}
//                   />
//                   <Typography>{item.title}</Typography>
//                 </Box>
//               ))}
//             </div>
//           )}
//           <Button variant="contained" onClick={handleDoneButtonClick}>
//             Done
//           </Button>
//           <Button variant="contained" onClick={updateServerWithSelectedObjects}>
//             Update Server
//           </Button>
//           <Button onClick={handleModalClose}>Close</Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default YourComponent;

// import React, { useState, useEffect } from 'react';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import axios from 'axios';

// const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';
// const SERVER_ENDPOINT = 'YOUR_SERVER_ENDPOINT';

// const YourComponent = () => {
//   const [data, setData] = useState([]);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [updateServerModalOpen, setUpdateServerModalOpen] = useState(false);
//   const [settingsModalOpen, setSettingsModalOpen] = useState(false);

//   useEffect(() => {
//     // Fetch initial data when the component mounts
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(API_ENDPOINT);
//       setData(response.data);
//       setOpen(true);
//     } catch (error) {
//       console.error('Error fetching data from the server', error);
//     }
//   };

//   const updateServerWithSelectedObjects = async () => {
//     // Create links based on the selected titles
//     const selectedLinks = data
//       .filter((item) => item.selected)
//       .map((item) => `/object/${item.id}`);

//     // Send updated selected objects to the server
//     try {
//       await axios.put(SERVER_ENDPOINT, {
//         updatedSelectedObjects: selectedLinks,
//       });
//       console.log('Updated selected objects sent to the server:', selectedLinks);
//     } catch (error) {
//       console.error('Error updating selected objects on the server', error);
//     }

//     // Close the modal after updating data
//     setUpdateServerModalOpen(false);
//   };

//   const handleModalClose = () => {
//     setOpen(false);
//     setSelectedItems([]);
//   };

//   const handleUpdateServerModalOpen = () => {
//     setUpdateServerModalOpen(true);
//   };

//   const handleUpdateServerModalClose = () => {
//     setUpdateServerModalOpen(false);
//   };

//   const handleSettingsModalOpen = () => {
//     setSettingsModalOpen(true);
//   };

//   const handleSettingsModalClose = () => {
//     setSettingsModalOpen(false);
//   };

//   const handleCheckboxChange = (index) => {
//     setSelectedItems((prevSelectedItems) => {
//       const newSelectedItems = [...prevSelectedItems];
//       newSelectedItems[index] = !newSelectedItems[index];
//       return newSelectedItems;
//     });
//   };

//   const handleDoneButtonClick = async () => {
//     // Create links based on the selected titles
//     const selectedLinks = data
//       .filter((item, index) => selectedItems[index])
//       .map((item) => `/object/${item.id}`);

//     // Send selected objects to the server
//     try {
//       await axios.post(SERVER_ENDPOINT, {
//         selectedObjects: selectedLinks,
//       });
//       console.log('Selected objects sent to the server:', selectedLinks);
//     } catch (error) {
//       console.error('Error sending selected objects to the server', error);
//     }

//     // Close the modal after sending data
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="contained" onClick={handleSettingsModalOpen}>
//         Settings
//       </Button>

//       <Button variant="contained" onClick={handleUpdateServerModalOpen}>
//         Update Server
//       </Button>

//       <Modal open={settingsModalOpen} onClose={handleSettingsModalClose}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 200,
//             bgcolor: 'background.paper',
//             border: '2px solid #000',
//             boxShadow: 24,
//             p: 2,
//           }}
//         >
//           <Button variant="contained" onClick={fetchData}>
//             Fetch Data
//           </Button>
//         </Box>
//       </Modal>

//       <Modal open={updateServerModalOpen} onClose={handleUpdateServerModalClose}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 400,
//             bgcolor: 'background.paper',
//             border: '2px solid #000',
//             boxShadow: 24,
//             p: 2,
//             maxHeight: '80vh',
//             overflowY: 'auto',
//           }}
//         >
//           <Typography variant="h6" component="div">
//             Received Data
//           </Typography>
//           {data && (
//             <div>
//               {data.map((item, index) => (
//                 <Box key={index} mt={2} p={2} border={1} borderRadius={4}>
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         checked={selectedItems[index] || false}
//                         onChange={() => handleCheckboxChange(index)}
//                       />
//                     }
//                     label={`Item ${index + 1}`}
//                   />
//                   <Typography>{item.title}</Typography>
//                 </Box>
//               ))}
//             </div>
//           )}
//           <Button variant="contained" onClick={updateServerWithSelectedObjects}>
//             Update Server
//           </Button>
//           <Button onClick={handleUpdateServerModalClose}>Close</Button>
//         </Box>
//       </Modal>

//       <Modal open={open} onClose={handleModalClose}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 400,
//             bgcolor: 'background.paper',
//             border: '2px solid #000',
//             boxShadow: 24,
//             p: 2,
//             maxHeight: '80vh',
//             overflowY: 'auto',
//           }}
//         >
//           <Typography variant="h6" component="div">
//             Received Data
//           </Typography>
//           {data && (
//             <div>
//               {data.map((item, index) => (
//                 <Box key={index} mt={2} p={2} border={1} borderRadius={4}>
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         checked={selectedItems[index] || false}
//                         onChange={() => handleCheckboxChange(index)}
//                       />
//                     }
//                     label={`Item ${index + 1}`}
//                   />
//                   <Typography>{item.title}</Typography>
//                 </Box>
//               ))}
//             </div>
//           )}
//           <Button variant="contained" onClick={handleDoneButtonClick}>
//             Done
//           </Button>
//           <Button onClick={handleModalClose}>Close</Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default YourComponent;

import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';
const SERVER_ENDPOINT = 'YOUR_SERVER_ENDPOINT';

const YourComponent = () => {
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [updateServerModalOpen, setUpdateServerModalOpen] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch initial data when the component mounts
    // Comment the fetchData() line if you want to fetch data only when clicking the button
    // fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_ENDPOINT);
      setData(response.data);
      setOpen(true);
    } catch (error) {
      console.error('Error fetching data from the server', error);
    }
  };

  const updateServerWithSelectedObjects = async () => {
    // Create links based on the selected titles
    const selectedLinks = data
      .filter((item) => item.selected)
      .map((item) => `/object/${item.id}`);

    // Send updated selected objects to the server
    try {
      await axios.put(SERVER_ENDPOINT, {
        updatedSelectedObjects: selectedLinks,
      });
      console.log('Updated selected objects sent to the server:', selectedLinks);
    } catch (error) {
      console.error('Error updating selected objects on the server', error);
    }

    // Close the modal after updating data
    setUpdateServerModalOpen(false);
  };

  const handleModalClose = () => {
    setOpen(false);
    setSelectedItems([]);
  };

  const handleUpdateServerModalOpen = () => {
    setUpdateServerModalOpen(true);
  };

  const handleUpdateServerModalClose = () => {
    setUpdateServerModalOpen(false);
  };

  const handleSettingsModalOpen = () => {
    setSettingsModalOpen(true);
  };

  const handleSettingsModalClose = () => {
    setSettingsModalOpen(false);
  };

  const handleCheckboxChange = (index) => {
    setSelectedItems((prevSelectedItems) => {
      const newSelectedItems = [...prevSelectedItems];
      newSelectedItems[index] = !newSelectedItems[index];
      return newSelectedItems;
    });
  };

  const handleDoneButtonClick = async () => {
    // Create links based on the selected titles
    const selectedLinks = data
      .filter((item, index) => selectedItems[index])
      .map((item) => `/object/${item.id}`);

    // Send selected objects to the server
    try {
      await axios.post(SERVER_ENDPOINT, {
        selectedObjects: selectedLinks,
      });
      console.log('Selected objects sent to the server:', selectedLinks);
    } catch (error) {
      console.error('Error sending selected objects to the server', error);
    }

    // Close the modal after sending data
    setOpen(false);
    console.log("sh");
  };

  return (
    <div>
      <Button variant="TEXT" onClick={handleSettingsModalOpen} sx={{color:'white'}}>
        Settings
      </Button>

      <Modal open={settingsModalOpen} onClose={handleSettingsModalClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 200,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 2,
          }}
        >
          <Button variant="TEXT" onClick={fetchData} >
            Users
          </Button>
          <Button variant="TEXT" onClick={handleUpdateServerModalOpen}>
            Update Users
          </Button>
        </Box>
      </Modal>

      <Modal open={updateServerModalOpen} onClose={handleUpdateServerModalClose}>
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
          <Button variant="OUTLINED" onClick={updateServerWithSelectedObjects}>
            Update Server
          </Button>
          <Button variant="OUTLINED" onClick={handleUpdateServerModalClose}>Close</Button>
        </Box>
      </Modal>

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
          <Button variant="OUTLINED" onClick={handleDoneButtonClick}>
            Done
          </Button>
          <Button variant="OUTLINED" onClick={handleModalClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default YourComponent;

