import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Box, InputAdornment, TextField ,Link,Typography} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const breadcrumbs = [
    <Link underline="none" key={2} color="inherit">
      Home
    </Link>,

    <Typography key="3" color="blue">
      Dashboard V2
    </Typography>,
  ];

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      paddingX="25px"
    >
      <Box>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Box>

      <Box display="flex" marginTop="4px" alignItems="center" gap="20px">
        <TextField
          sx={{ width: "80vh" }}
          size="small"
          autoComplete="off"
          placeholder="Search anything..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <NotificationsActiveIcon />
        <AccountCircleIcon />
      </Box>
    </Box>
  );
};

export default Header;
