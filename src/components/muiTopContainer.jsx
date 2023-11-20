import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Filter from "./FilterDropDown";
import WelcomeTextComponent from "./WelcomeTextComponent";
import { FilterSprint } from "./SprintFilter";
import data from "./mockData/data";

const MainComponentMui = () => {
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
        color: "#ffffff",
      }}
    >
      <WelcomeTextComponent />
      <FilterSprint />

      <Box sx={{ display: "flex", flexWrap: "wrap", marginBottom: "20px" }}>
        <Filter
          label="Issue Type"
          options={issue}
          selectedOption={selectedIssue}
          onChange={setSelectedIssue}
        />
        <Filter
          label="Category"
          options={Category}
          selectedOption={selectedCategory}
          onChange={setSelectedCategory}
        />
        <Filter
          label="Milestone"
          options={MileStones}
          selectedOption={selectedMileStones}
          onChange={setSelectedMileStones}
        />
        <Filter
          label="Assignee"
          options={Assignee}
          selectedOption={selectedAssignee}
          onChange={setSelectedAssignee}
        />
      </Box>
    </Box>
  );
};

export default MainComponentMui;
