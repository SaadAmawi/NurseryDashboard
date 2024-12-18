import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase,image }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: "#6870fa" }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.blueAccent[200] }}>
          {subtitle}
        </Typography>
        <img>
        {image}
        </img>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.blueAccent[200] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;

