// src/LoginPage.js
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${theme.palette.primary.light} 30%, ${theme.palette.primary.main} 100%)`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          backgroundColor: theme.palette.background.alt,
          p: "1rem 6%",
          textAlign: "center",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          zIndex: 2,
        }}
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          SustainKaro
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.paper}
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
        mt="6rem"
        zIndex={1}
      >
        <Typography
          fontWeight="500"
          variant="h5"
          color={theme.palette.text.primary}
          sx={{ mb: "1.5rem", textAlign: "center" }}
        >
          Join SustainKaro: Together for a Greener Tomorrow!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
