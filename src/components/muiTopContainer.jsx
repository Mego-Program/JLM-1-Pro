import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Filter from "./FilterDropDown";
import WelcomeTextComponent from "./WelcomeTextComponent";
import { FilterSprint } from "./SprintFilter";
import data from "./mockData/data";

const MainComponentMui = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message = 'Are you sure you want to leave?';
      event.returnValue = message; // Standard for most browsers
      return message; // For some older browsers
    };
  
    window.addEventListener('beforeunload', handleBeforeUnload);
  
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  
  // Extract unique values for each property
  const uniqueAssignee = Array.from(new Set(data.map((item) => item.userName)));
  const uniqueIssues = Array.from(new Set(data.map((item) => item.issue)));
  const uniqueCategories = Array.from(new Set(data.map((item) => item.category)));
  const uniqueMileStones = Array.from(new Set(data.map((item) => item.mileStone)));
  const uniqueProjects = Array.from(new Set(data.map((item) => item.project)));
  const uniqueSprints = Array.from(new Set(data.map((item) => item.sprint)));

  console.log("Unique Assignee:", uniqueAssignee);
  console.log("Unique Issues:", uniqueIssues);
  console.log("Unique Categories:", uniqueCategories);
  console.log("Unique MileStones:", uniqueMileStones);
  console.log("Unique Projects:", uniqueProjects);
  console.log("Unique Sprints:", uniqueSprints);

  const [selectedIssue, setSelectedIssue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMileStones, setSelectedMileStones] = useState("");
  const [selectedAssignee, setSelectedAssignee] = useState("");

  const issue = uniqueIssues;
  const Category = uniqueCategories;
  const MileStones = uniqueMileStones;
  const Assignee = uniqueAssignee;

  return (
    <Box
      sx={{
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        color: "#ffffff"
      }}
    >
      <WelcomeTextComponent />
      <FilterSprint />

      <Box sx={{ display: "flex", flexWrap: "wrap", marginBottom: "20px" }}>
        {[
          {
            key: "0",
            label: "Issue Type",
            options: issue,
            selectedOption: selectedIssue,
            onChange: setSelectedIssue,
          },
          {
            key: "1",
            label: "Category",
            options: Category,
            selectedOption: selectedCategory,
            onChange: setSelectedCategory,
          },
          {
            key: "2",
            label: "Milestone",
            options: MileStones,
            selectedOption: selectedMileStones,
            onChange: setSelectedMileStones,
          },
          {
            key: "3",
            label: "Assignee",
            options: Assignee,
            selectedOption: selectedAssignee,
            onChange: setSelectedAssignee,
          },
        ].map((filter, index) => (
          <Filter
            key={index} 
            label={filter.label}
            options={filter.options}
            selectedOption={filter.selectedOption}
            onChange={filter.onChange}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MainComponentMui;
