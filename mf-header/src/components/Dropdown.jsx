import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";

import icon from "../assets/images/icon.svg";

function Dropdown() {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}  className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[213px] max-w-full z-[3] text-left text-base text-base-ink font-public-sans">
      <div className="self-stretch relative">Select CUBSO</div>
      <FormControl
        className="self-stretch h-[39px] font-public-sans text-base text-gray-200"
        variant="standard"
        sx={{
          borderColor: "#000",
          borderStyle: "SOLID",
          borderTopWidth: "0px",
          borderRightWidth: "0px",
          borderBottomWidth: "0px",
          borderLeftWidth: "0px",
          backgroundColor: "#fff",
          borderRadius: "5px",
          width: "100%",
          height: "39px",
          m: 0,
          p: 0,
          "& .MuiInputBase-root": {
            m: 0,
            p: 0,
            minHeight: "39px",
            justifyContent: "center",
            display: "inline-flex",
          },
          "& .MuiInputLabel-root": {
            m: 0,
            p: 0,
            minHeight: "39px",
            display: "inline-flex",
          },
          "& .MuiMenuItem-root": {
            m: 0,
            p: 0,
            height: "39px",
            display: "inline-flex",
          },
          "& .MuiSelect-select": {
            m: 0,
            p: 0,
            height: "39px",
            alignItems: "center",
            display: "inline-flex",
          },
          "& .MuiInput-input": { m: 0, p: 0 },
          "& .MuiInputBase-input": {
            color: "rgba(27, 27, 27, 0.5)",
            fontSize: 16,
            fontWeight: "Regular",
            fontFamily: "Public Sans",
            textAlign: "left",
            p: "0 !important",
            marginLeft: "9px",
          },
        }}
      >
        <InputLabel color="success" />
        <Select
          color="success"
          disableUnderline
          displayEmpty
          IconComponent={() => (
            <img
              width="24px"
              height="24px"
              src={icon}
              style={{ marginRight: "8px" }}
            />
          )}
        >
          <MenuItem>- Select -</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
    </div>
  );
}

export default Dropdown;