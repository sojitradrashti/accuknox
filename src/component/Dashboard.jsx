import React from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  LinearProgress,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import BarChartIcon from "@mui/icons-material/BarChart";
import TimelineIcon from "@mui/icons-material/Timeline";

const Dashboard = () => {
  const names = ["Last 2 days", "Last week", "Last month", "Last year"];

  const data = [
    { value: 50, label: "Connected(2)" },
    { value: 50, label: "Not Connected(2)" },
  ];

  const data1 = [
    { value: 1689, label: "Failed(1689)" },
    { value: 681, label: "Warning(681)" },
    { value: 36, label: "Not available(36)" },
    { value: 7253, label: "Passed(7253)" },
  ];
  const size = {
    width: 430,
    height: 180,
  };

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
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
          <Typography fontWeight={800}>CNAPP Dashboard</Typography>
        </Box>
        <Box>
          <Button variant="outlined" sx={{ color: "grey.500",
                fontWeight:"600",
                borderColor: "grey.500", }}>
            Add Widget
            <AddIcon />
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "grey.500",
            fontWeight:"600",
            borderColor: "grey.500", marginLeft: "15px" }}
          >
            <AutorenewIcon />
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "grey.500",
            fontWeight:"600",
            borderColor: "grey.500", marginLeft: "15px" }}
          >
            <MoreVertIcon />
          </Button>

          <FormControl
            sx={{ m: 1, minWidth: 180, position: "relative", marginTop: "0px",color:"#2E236C",borderColor: "#2E236C" }}
          >
            <AccessTimeFilledIcon
              sx={{ position: "absolute", my: 1, mx: 1 }}
              size="small"
            />
            <Divider orientation="vertical" sx={{color:"#2E236C"}} />
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
        <Typography align="left" fontWeight={600}>
          CSPM Executive Dashboard
        </Typography>
        <Box display="flex" gap={2} marginTop={3}>
      <Box backgroundColor="white" borderRadius="16px">
        <Typography textAlign="left" padding={3} fontWeight={600}>
          Cloud Accounts
        </Typography>
        <PieChart series={[{ data, innerRadius: 70 , colors: ['#5B99C2', '#D1E9F6'] }]} {...size}>
          <PieCenterLabel>
            {" "}
            2
            <br /> Total
          </PieCenterLabel>
        </PieChart>
      </Box>

          <Box backgroundColor="white" borderRadius="16px">
            <Typography textAlign="left" padding={3} fontWeight={600}>
              Center label Risk Assessment
            </Typography>
            <PieChart series={[{ data: data1, innerRadius: 70 }]} {...size}>
              <PieCenterLabel>
                9659 <br /> Total
              </PieCenterLabel>
            </PieChart>
          </Box>
          <Box backgroundColor="white" borderRadius="16px" width="100%">
          <Button
              variant="outlined"
              size="small"
              sx={{
                color: "grey.500",
                fontWeight:"600",
                borderColor: "grey.500",
                textAlign: "center",
                paddingX: "5px",
                marginX: "135px",
                textTransform: "none",
                marginY: "120px",
              }}
            >
              <AddIcon />
              Add Widget
            </Button>
          </Box>

        </Box>
        <Box paddingLeft="5px" marginY={3}>
          <Typography align="left" fontWeight={600}>
            CSPM Executive Dashboard
          </Typography>
          <Box display="flex" gap={2} marginTop={3}>
            <Box backgroundColor="white" borderRadius="16px" width="100%">
              <Typography textAlign="left" fontWeight={600} padding={3}>
                Top 5 Namespace Specific Alerts
              </Typography>
              <Box
                marginY="50px"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0px",
                  height: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0px",
                  }}
                >
                  <TimelineIcon sx={{ fontSize: 50, color: "grey.500" }} />
                  <BarChartIcon sx={{ fontSize: 40, color: "grey.500" }} />
                </Box>

                <Typography variant="body2">
                  No Graph data available!
                </Typography>
              </Box>
            </Box>

            <Box
              backgroundColor="white"
              borderRadius="16px"
              width="100%"
              paddingX="0px"
            >
              <Typography textAlign="left" padding={3} fontWeight={600}>
                Workload Alerts
              </Typography>
              <Box
                marginY="50px"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0px",
                  height: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0px",
                  }}
                >
                  <TimelineIcon sx={{ fontSize: 50, color: "grey.500" }} />
                  <BarChartIcon sx={{ fontSize: 40, color: "grey.500" }} />
                </Box>

                <Typography variant="body2">
                  No Graph data available!
                </Typography>
              </Box>
            </Box>
            <Box backgroundColor="white" borderRadius="16px" width="92%">
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: "grey.500",
                fontWeight:"600",
                borderColor: "grey.500",
                textAlign: "center",
                paddingX: "5px",
                marginX: "135px",
                textTransform: "none",
                marginY: "120px",
              }}
            >
              <AddIcon />
              Add Widget
            </Button>
            </Box>
          </Box>
        </Box>

        <Box paddingLeft="5px" marginY={3}>
          <Typography align="left" fontWeight={600}>
            Registry Scan
          </Typography>
          <Box display="flex" gap={2} marginTop={3}>
            <Box backgroundColor="white" borderRadius="16px" width="100%">
              <Typography textAlign="left" padding={3} fontWeight={600}>
                Image Risk Assessment
              </Typography>
              <Typography textAlign="left" paddingX={3}>
                1470 Total Vulnerabilities
              </Typography>
              <Box
                sx={{
                  padding: "25px",
                  borderRadius: "8px",
                }}
              >
                <LinearProgress
                  variant="determinate"
                  value={98}
                  sx={{
                    height: "10px",
                    borderRadius: "5px",
                    backgroundColor: "#dcdcdc",
                    "& .MuiLinearProgress-bar": {
                      borderRadius: "5px",
                      background:
                        "linear-gradient(to right, #d32f2f 0%, #ffa726 65%, #ffeb3b 100%)",
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", gap: "30%", mt: 2, mx: 5 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: "12px",
                      height: "12px",
                      backgroundColor: "#d32f2f",
                      borderRadius: "50%",
                      marginRight: "5px",
                    }}
                  />
                  <Typography>Critical (9)</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: "12px",
                      height: "12px",
                      backgroundColor: "#ff7043",
                      borderRadius: "50%",
                      marginRight: "5px",
                    }}
                  />
                  <Typography variant="body2">High (150)</Typography>
                </Box>
              </Box>
            </Box>

            <Box
              backgroundColor="white"
              borderRadius="16px"
              width="100%"
              paddingX="0px"
            >
              <Typography textAlign="left" padding={3} fontWeight={600}>
                Image Security Issues
              </Typography>
              <Typography textAlign="left" paddingX={3}>
                2 Total Images
              </Typography>
              <Box
                sx={{
                  padding: "25px",
                  // backgroundColor: "#dcdcdc",
                  borderRadius: "8px",
                }}
              >
                <LinearProgress
                  variant="determinate"
                  value={85}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    "& .MuiLinearProgress-bar": {
                      borderRadius: 5,
                      background:
                        "linear-gradient(to right, #5d0d0d 0%, #d32f2f 25%, #f57c00 50%, #ffeb3b 75%, #9e9e9e 100%)",
                    },
                  }}
                />
              </Box>

              <Box sx={{ display: "flex", gap: "30%", mt: 2, mx:5 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: "12px",
                      height: "12px",
                      backgroundColor: "#973131",
                      borderRadius: "50%",
                      marginRight: "5px",
                    }}
                  />
                  <Typography variant="body2">Critical (9)</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: "12px",
                      height: "12px",
                      backgroundColor: "#C40C0C",
                      borderRadius: "50%",
                      marginRight: "5px",
                    }}
                  />
                  <Typography variant="body2">High (150)</Typography>
                </Box>
              </Box>
            </Box>

            <Box backgroundColor="white" borderRadius="16px" width="92%">
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: "grey.500",
                fontWeight:"600",
                borderColor: "grey.500",
                textAlign: "center",
                paddingX: "5px",
                marginX: "135px",
                textTransform: "none",
                marginY: "120px",
              }}
            >
              <AddIcon />
              Add Widget
            </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
