import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    friends,
  } = user;

  // Hard-coded eco-friendly activities and rewards
  const ecoFriendlyActivities = [
    { name: "Cycling instead of driving", url: "https://www.moglix.com/blog/eco-friendly-economics-how-cycling-can-save-money-and-improve-health/#:~:text=Reduced%20Carbon%20Emissions%3A%20Cycling%20produces,contribute%20to%20fighting%20climate%20change." },
    { name: "Growing a tree", url: "https://www.parvaah.org/our-campaigns/tree-plantation-drive.html#:~:text=Considering%20the%20manifold%20benefits%20of,food%20and%20the%20pivotal%20role" },
    { name: "Recycling drives", url: "https://www.akkodis.com/en/blog/articles/reinventing-the-wheel-green-and-bike-make-cycling-more-sustainable" },
  ];

  const rewards = 50; // Example hard-coded rewards count

  return (
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem">
          <UserImage image={picturePath} />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography color={medium}>{friends.length} friends</Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{occupation}</Typography>
        </Box>
      </Box>

      <Divider />

      {/* THIRD ROW */}
      <Box p="1rem 0">
        <Typography color={medium} mb="0.5rem">Eco-friendly activities</Typography>
        {ecoFriendlyActivities.map((activity, index) => (
          <FlexBetween key={index}>
            <Typography
              component="a"
              href={activity.url}
              target="_blank"
              rel="noopener noreferrer"
              color={medium}
              sx={{ "&:hover": { color: main, cursor: "pointer" } }}
            >
              {activity.name}
            </Typography>
          </FlexBetween>
        ))}
      </Box>

      <Divider />

      {/* FOURTH ROW */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Rewards Collected
        </Typography>
        <FlexBetween gap="1rem" mb="0.5rem">
          <Typography color={medium}>Total Rewards</Typography>
          <Typography color={main} fontWeight="500">
            {rewards}
          </Typography>
        </FlexBetween>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;
