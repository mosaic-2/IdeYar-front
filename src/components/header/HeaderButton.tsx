import { Button, Chip, Typography } from "@mui/material";

interface Props {
  title: string;
  badge?: string;
}

const HeaderButton = ({ title, badge }: Props) => {
  return (
    <Button sx={{ paddingX: 1.5 }}>
      {badge && (
        <Chip
          label={badge}
          variant="outlined"
          color="primary"
          sx={{ marginX: 1 }}
        />
      )}
      <Typography color="button.tGrayFg" variant="buttonT3">
        {title}
      </Typography>
    </Button>
  );
};

export default HeaderButton;
