import React from "react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
const Dashboard = () => {
  const names = ["Last 2 days", "Last week", "Last month", "Last year"];

  const data = [
    { value: 5, label: 'A' },
    { value: 10, label: 'B' },
    { value: 15, label: 'C' },
    { value: 20, label: 'D' },
  ];

  const size = {
    width: 400,
    height: 200,
  };

  const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
  }));

  
  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }
  return (
    <Box
      backgroundColor="#F0F5FA"
      borderRadius="10px"
      padding="5px"
      marginTop="25px"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        paddingX="25px"
        marginTop="35px"
      >
        <Box>
          <Typography>CNAPP Dashboard</Typography>
        </Box>
        <Box>
          <Button variant="outlined" sx={{ color: "primary" }}>
            Add Widget
            <AddIcon />
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "primary", marginLeft: "15px" }}
          >
            <AutorenewIcon />
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "primary", marginLeft: "15px" }}
          >
            <MoreVertIcon />
          </Button>

          <FormControl
            sx={{ m: 1, minWidth: 120, position: "relative", marginTop: "0px" }}
          >
            <AccessTimeFilledIcon sx={{ position: "absolute", my: 1, mx: 1 }} />
            <Select
              sx={{ alignItems: "center", height: "40px" }}
              size="small"
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box paddingX="25px">
        <Typography align="left">CSPM Executive Dashboard</Typography>
      </Box>
      <Box>
        <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
          <PieCenterLabel>Center label</PieCenterLabel>
        </PieChart>
      </Box>
    </Box>
  );
};

export default Dashboard;
