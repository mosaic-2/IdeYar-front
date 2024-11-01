import { Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
interface Props {
  isActive: boolean;
  onClick: () => void;
}
const CheckBox = ({ isActive, onClick }: Props) => {
  return (
    <div
      style={{
        width: "15px",
        height: "15px",
        boxShadow: "0 0 0 1px #d4d4d4",
        borderRadius: "1px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {isActive && (
        <CheckIcon
          sx={{
            width: "15px",
            height: "15px",
            bgcolor: "brand.500",
            color: "white",
            borderRadius: "1px",
          }}
        />
      )}
    </div>
  );
};
export default CheckBox;
