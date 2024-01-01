import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import DateRange from "./DateRange";
import DropdownSelect from "./DropDownSelect";
import ShlomosSprintFilter from "./ShlomosSprintFilter";
import axios from "axios";

export default function SprintFeature({ tasks ,selectedBoard}) {
  const [open, setOpen] = useState(false);
  const [sprintName, setSprintName] = useState("");
  const [selectedTasks, setSelectedTasks] = useState([]);//list of tasks
  const [dateRange, setDateRange] = useState([]);// holdes both dates as an arrey
  const [sprintData, setSprintData] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateSprint = async () => {
    // TODO: Implement logic to send data to the server
    const sprintData = {
      sprintName: sprintName,
      startDate: dateRange[0],
      endDate: dateRange[1],
      taskArray: selectedTasks,
    }
    
    try {
      const response = await axios.post("http://localhost:8137/projects/add_sprint",
      sprintData)} 
    catch (error) {  
    };
    console.log("sprint data:", sprintData);
    // Close the modal after creating the sprint
    handleClose();
  };

  return (
    <div>
      <ShlomosSprintFilter 
      selectedBoard = {selectedBoard}
      dateRange = {dateRange}
      selectedTasks = {selectedTasks}
      />
      <TriggerButton type="button" onClick={handleOpen}>
        Create New Sprint
      </TriggerButton>
      <Modal open={open} onClose={handleClose} slots={{ backdrop: StyledBackdrop }}>
        <ModalContent sx={{ width: 400, backgroundColor: "rgb(234, 179, 8)" }}>
     <input
      type="text"
      name="title"
      onChange={(e) => setSprintName(e.target.value)}
      placeholder="Sprint name"
      style={{
        backgroundColor: "rgb(234, 179, 8)"}} />

            <DateRange
            updateDate = {setDateRange} />
          
          <DropdownSelect tasks={tasks} 
            selectedTasks={selectedTasks} 
            setSelectedTasks={setSelectedTasks} />

          <button type="button" onClick={handleCreateSprint}>
            Finish
          </button>
        </ModalContent>
      </Modal>
    </div>
  );
}



const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "MuiBackdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// const StyledSprintDropDown = styled(SprintDropDown)` z-index: -1`;
const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled("div")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === "dark" ? "rgb(0 0 0 / 0.5)" : "rgb(0 0 0 / 0.2)"};
    padding: 24px;
    color: ${theme.palette.mode === "dark" ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `
);

const TriggerButton = styled("button")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:hover {
      background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    }

    &:active {
      background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px
        ${theme.palette.mode === "dark" ? blue[300] : blue[200]};
      outline: none;
    }
  `
);
