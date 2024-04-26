import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";


import fab from "../assets/images/fab.svg";
import icon from "../assets/images/icon.svg";
import navigationcancel from "../assets/images/navigationcancel@2x.png";
import iconschecksmall from "../assets/images/iconscheck-small.svg";


function TagsComponent() {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}  className="w-full  bg-whitesmoke overflow-hidden flex flex-row items-start justify-start p-3.5 box-border gap-[20px] leading-[normal] tracking-[normal] text-justify text-base text-black font-body-1-16-24 mq1125:flex-wrap">
      <form className="m-0 w-[669px] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.1)] rounded-xl bg-neutral-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[50px] pb-3 pr-0 pl-3.5 box-border gap-[31px] min-w-[669px] max-w-full mq750:gap-[15px] mq750:pt-8 mq750:pb-5 mq750:box-border mq750:min-w-full mq1125:flex-1">
        <div className="w-[588px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start gap-[4px] max-w-full mq750:flex-wrap mq1125:flex-1">
            <div className="flex-1 flex flex-col items-start justify-start gap-[27.5px] min-w-[351px] max-w-full mq450:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] z-[1]">
                <div className="self-stretch relative text-base font-public-sans text-base-ink text-left">
                  SubCategoría
                </div>
                <FormControl
                  className="self-stretch h-[39px] font-public-sans text-base text-gray-200"
                  variant="standard"
                  sx={{
                    borderColor: "#1b1b1b",
                    borderStyle: "SOLID",
                    borderTopWidth: "0px",
                    borderRightWidth: "0px",
                    borderBottomWidth: "0px",
                    borderLeftWidth: "0px",
                    backgroundColor: "#fff",
                    borderRadius: "0px 0px 0px 0px",
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
                  <InputLabel color="secondary" />
                  <Select
                    color="secondary"
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
              <div className="w-[399px] flex flex-row items-end justify-start py-0 pr-5 pl-0 box-border gap-[3px] max-w-full mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border max-w-full">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch rounded flex flex-row items-center justify-start py-1.5 px-[15px] gap-[12px] border-[1px] border-solid border-black-38 mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start min-w-[169px]">
                        <div className="self-stretch relative text-xs leading-[16px] font-body-1-16-24 text-black-60 text-left">
                          Categoria 1
                        </div>
                        <input
                          className="w-[calc(100%_-_0px)] [border:none] [outline:none] font-body-1-16-24 text-base bg-[transparent] self-stretch h-6 relative leading-[24px] text-black-87 text-left inline-block min-w-[156px] p-0"
                          placeholder="Input"
                          type="text"
                        />
                      </div>
                      <img
                        className="h-6 w-6 relative object-cover"
                        alt=""
                        src={navigationcancel}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start p-1">
                  <div className="h-10 w-10 rounded-[100px] bg-m3-state-layers-light-error-opacity-012 flex flex-row items-center justify-center p-[11px] box-border relative">
                    <div className="h-[18px] w-[18px] relative rounded-sm bg-m3-sys-light-error" />
                    <img
                      className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] rounded-sm overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src={iconschecksmall}
                    />
                  </div>
                </div>
              </div>
              <div className="w-[348px] flex flex-col items-center justify-start py-0 pr-5 pl-0 box-border max-w-full">
                <div className="self-stretch rounded flex flex-row items-center justify-start py-1.5 px-[15px] gap-[12px] border-[1px] border-solid border-black-38 mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[169px]">
                    <div className="self-stretch relative text-xs leading-[16px] font-body-1-16-24 text-black-60 text-left">
                      Categoria 2
                    </div>
                    <input
                      className="w-[calc(100%_-_0px)] [border:none] [outline:none] font-body-1-16-24 text-base bg-[transparent] self-stretch h-6 relative leading-[24px] text-black-87 text-left inline-block min-w-[156px] p-0"
                      placeholder="Input"
                      type="text"
                    />
                  </div>
                  <img
                    className="h-6 w-6 relative object-cover"
                    alt=""
                    src={navigationcancel}
                  />
                </div>
              </div>
            </div>
            <div className="h-[67px] flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border">
              <div className="w-10 h-10 relative rounded-21xl flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[6px] [transform:scale(1.6)]"
                  loading="lazy"
                  alt=""
                  src={fab}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-0 box-border gap-[13px] max-w-full mq750:flex-wrap">
            <div className="flex-1 flex flex-col items-center justify-start min-w-[213px] max-w-full">
              <div className="self-stretch rounded flex flex-row items-center justify-start py-1.5 px-[15px] gap-[12px] border-[1px] border-solid border-black-38 mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[169px]">
                  <div className="self-stretch relative text-xs leading-[16px] font-body-1-16-24 text-black-60 text-left">
                    Categoria 3
                  </div>
                  <input
                    className="w-[calc(100%_-_0px)] [border:none] [outline:none] font-body-1-16-24 text-base bg-[transparent] self-stretch h-6 relative leading-[24px] text-black-87 text-left inline-block min-w-[156px] p-0"
                    placeholder="Input"
                    type="text"
                  />
                </div>
                <img
                  className="h-6 w-6 relative object-cover"
                  alt=""
                  src={navigationcancel}
                />
              </div>
            </div>
            <div className="w-[290px] flex flex-col items-center justify-start">
              <div className="self-stretch rounded flex flex-row items-center justify-start py-1.5 px-[15px] gap-[12px] border-[1px] border-solid border-black-38">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative text-xs leading-[16px] font-body-1-16-24 text-black-60 text-left">
                    Categoria 4
                  </div>
                  <input
                    className="w-[calc(100%_-_0px)] [border:none] [outline:none] font-body-1-16-24 text-base bg-[transparent] self-stretch h-6 relative leading-[24px] text-black-87 text-left inline-block min-w-[133px] p-0"
                    placeholder="Input"
                    type="text"
                  />
                </div>
                <img
                  className="h-6 w-6 relative object-cover"
                  alt=""
                  src={navigationcancel}
                />
              </div>
            </div>        
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
            <div className="flex-1 bg-neutral-white flex flex-row items-start justify-end py-4 px-6 box-border gap-[16px] max-w-full mq450:flex-wrap">
              <Button
                className="h-10 w-[110px] min-w-[110px]"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#25314c",
                  fontSize: "16",
                  background: "#fff",
                  border: "#ddd solid 1px",
                  borderRadius: "8px",
                  "&:hover": { background: "#fff" },
                  width: 110,
                  height: 40,
                }}
              >
                Discard
              </Button>
              <Button
                className="h-10 w-[110px] min-w-[110px]"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#2399e5",
                  borderRadius: "8px",
                  "&:hover": { background: "#2399e5" },
                  width: 110,
                  height: 40,
                }}
              >
                Save
              </Button>
            </div>
          </div>
          
        </div>
      </form>
      <div className="flex-1 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.1)] rounded-xl bg-neutral-white overflow-hidden flex flex-col items-end justify-start py-3 px-[15px] box-border gap-[81px] min-w-[455px] max-w-full mq450:gap-[20px] mq750:gap-[40px] mq750:min-w-full">
        <div className="w-[589px] h-[75px] flex flex-col items-end justify-start gap-[16px] max-w-full">
          <div className="w-10 h-10 relative rounded-21xl flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[6px] [transform:scale(1.6)]"
              alt=""
              src={fab}
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="relative font-black inline-block min-w-[41px]">
              TAGS
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-4 pl-px box-border max-w-full text-center text-mini text-neutral-white">
          <div className="flex-1 flex flex-col items-end justify-start gap-[52px] max-w-full mq750:gap-[26px]">
            <div className="w-[626px] flex flex-row items-start justify-end py-0 px-[60px] box-border max-w-full mq750:pl-[30px] mq750:pr-[30px] mq750:box-border">
              <div className="flex-1 flex flex-row items-start justify-start gap-[30px] max-w-full mq750:flex-wrap">
                <div className="[backdrop-filter:blur(10px)] rounded-8xs bg-red flex flex-row items-start justify-start py-[13.5px] px-[33.5px]">
                  <div className="relative font-semibold inline-block min-w-[31px]">
                    tag1
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border min-w-[71px] text-gray-100">
                  <div className="[backdrop-filter:blur(10px)] rounded-8xs bg-gold flex flex-row items-start justify-start py-[13.5px] px-8">
                    <div className="relative font-semibold inline-block min-w-[34px]">
                      Tag2
                    </div>
                  </div>
                </div>
                <div className="[backdrop-filter:blur(10px)] rounded-8xs bg-red flex flex-row items-start justify-start py-[13.5px] px-8">
                  <div className="relative font-semibold inline-block min-w-[34px]">
                    Tag4
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[39px] max-w-full text-justify text-base text-black mq750:gap-[19px]">
              <div className="flex flex-row items-start justify-start py-0 px-10 box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="relative font-black">
                  Dolor est interdum volutpat sed.
                </div>
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[19px] max-w-full text-mini">
                <div className="w-[617px] flex flex-row items-start justify-end py-0 px-[42px] box-border max-w-full mq750:pl-[21px] mq750:pr-[21px] mq750:box-border">
                  <div className="flex-1 relative font-semibold inline-block max-w-full">
                    Lorem ipsum dolor sit amet consectetur. Faucibus amet proin
                    sed diam turpis. Luctus pretium hendrerit lacus amet. Amet
                    lectus sed condimentum nullam.
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white flex flex-row items-start justify-end px-6 gap-[16px] text-left text-base text-darkslategray font-inter mq450:flex-wrap">
                  <div className="w-[110px] rounded-lg bg-neutral-white box-border flex flex-row items-start justify-start py-1.5 px-6 min-w-[110px] border-[1px] border-solid border-gainsboro">
                    <div className="relative leading-[150%] font-medium inline-block min-w-[59px]">
                      Discard
                    </div>
                  </div>
                  <div className="rounded-lg bg-cornflowerblue flex flex-row items-start justify-start py-2 px-9 box-border min-w-[110px] text-neutral-white">
                    <div className="relative leading-[150%] font-medium inline-block min-w-[38px]">
                      Save
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TagsComponent;
