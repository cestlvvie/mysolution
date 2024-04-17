import { AppBar, Toolbar, Typography, styled, Box } from "@mui/material";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)(() => ({
  color: "inherit",
  textDecoration: "none",
  ["&:hover"]: { color: "inherit" },
}));

const AppToolbar = () => {
  return (
    <>
      <AppBar position="fixed" color="success">
        <Toolbar>
          <Typography variant="h6" component={StyledLink} to="/">
            Tengrinews
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component={Toolbar} marginBottom={2} />
    </>
  );
};

export default AppToolbar;
