// import * as React from 'react';
// import { Dropdown } from '@mui/base/Dropdown';
// import { Menu } from '@mui/base/Menu';
// import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
// import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
// import { styled } from '@mui/system';

// export default function SprintDropDown() {
//   const [users, setUsers] = React.useState([]);

//   React.useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('http://localhost:8137/todos');
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const createHandleMenuClick = (user) => () => {
//     console.log(`Clicked on user: ${user.username}`);
//     // Add your logic for handling the selected user
//   };

//   return (
//     <Dropdown>
//       <MenuButton>Choose a User</MenuButton>
//       <Menu slots={{ listbox: Listbox }}>
//         {users.map((user) => (
//           <MenuItem key={user._id} onClick={createHandleMenuClick(user)}>
//             <img src={user.image} alt={`Avatar of ${user.username}`} style={{ width: '24px', height: '24px', borderRadius: '50%', marginRight: '8px' }} />
//             {user.username}
//           </MenuItem>
//         ))}
//       </Menu>
//     </Dropdown>
//   );
// }

import * as React from 'react';
import { Popper } from '@mui/base/Popper';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';

export default function SprintDropDown() {
  const [users, setUsers] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8137/todos');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

//   const createHandleMenuClick = (event, user) => {
//     console.log(`Clicked on user: ${user.username}`);
//     // Add your logic for handling the selected user
//     setAnchorEl(null); // Close the menu after selecting a user
//   };

//   return (
//     <Dropdown>
//       <MenuButton onClick={(event) => setAnchorEl(event.currentTarget)}>Choose a User</MenuButton>
//       <Menu slots={{ listbox: Listbox }} onClose={() => setAnchorEl(null)} anchorEl={anchorEl}>
//         {users.map((user) => (
//           <MenuItem key={user._id} onClick={(event) => createHandleMenuClick(event, user)}>
//             <img
//               src={user.image}
//               alt={`Avatar of ${user.username}`}
//               style={{ width: '24px', height: '24px', borderRadius: '50%', marginRight: '8px' }}
//             />
//             {user.username}
//           </MenuItem>
//         ))}
//       </Menu>
//     </Dropdown>
//   );
// }
const createHandleMenuClick = (user) => {
  console.log(`Clicked on user: ${user.username}`);
  // Add your logic for handling the selected user
  setAnchorEl(null); // Close the menu after selecting a user
};

return (
  <Dropdown>
    <MenuButton onClick={(event) => setAnchorEl(anchorEl ? null : event.currentTarget)}>
      Choose a User
    </MenuButton>
    <Popper open={Boolean(anchorEl)} anchorEl={anchorEl} placement="bottom-start">
      <Menu slots={{ listbox: Listbox }} onClose={() => setAnchorEl(null)}>
        {users.map((user) => (
          <MenuItem key={user._id} onClick={() => createHandleMenuClick(user)}>
            <img
              src={user.image}
              alt={`Avatar of ${user.username}`}
              style={{ width: '24px', height: '24px', borderRadius: '50%', marginRight: '8px' }}
            />
            {user.username}
          </MenuItem>
        ))}
      </Menu>
    </Popper>
  </Dropdown>
);
}

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E6',
  700: '#0059B3',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Listbox = styled('ul')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  z-index: 1300;
  `,
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  z-index: -1000;
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[50]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }
  `,
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:active {
    background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }
  `,
);