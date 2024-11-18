import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import ProgressCircleAdmin from "./ProgressCircleAdmin";

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
            sx={{ color: "#fff" }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircleAdmin progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.white }}>
          {subtitle}
        </Typography>
        <img>
        {image}
        </img>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.white }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;

