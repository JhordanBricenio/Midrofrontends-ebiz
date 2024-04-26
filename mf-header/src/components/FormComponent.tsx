import { Button } from "@mui/material";
import Dropdown from "./Dropdown";
import fab from "../assets/images/fab.svg";
import navigationcancel from "../assets/images/navigationcancel@2x.png";
import caret from "../assets/images/caret.svg";
import icon1 from "../assets/images/icon-1.svg";
import iconToday from "../assets/images/iconstoday-24px.svg";

function FormComponent() {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }} className="w-[1415px] bg-whitesmoke max-w-full overflow-hidden flex flex-col items-start justify-start py-3.5 pr-[23px] pl-[26px] box-border leading-[normal] tracking-[normal]">
      <div className="w-[440px] flex flex-row items-start justify-center max-w-full">
        <Button
          className="h-[67px] w-[276px] z-[2]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "14",
            background: "#0079bf",
            borderRadius: "5px",
            "&:hover": { background: "#0079bf" },
            width: 276,
            height: 67,
          }}
        >
          FORMULARIO DE REGISTRO
        </Button>
      </div>
      <footer className="self-stretch rounded-xl bg-white-color flex flex-col items-start justify-start pt-[84px] px-[93px] pb-[59px] box-border gap-[16px] max-w-full mt-[-40px] text-left text-xs text-black-60 font-body-1-16-24 mq1225:pl-[46px] mq1225:pr-[46px] mq1225:box-border mq750:pl-[23px] mq750:pr-[23px] mq750:pb-[38px] mq750:box-border">
        <div className="w-[1366px] h-[613px] relative rounded-xl bg-white-color hidden max-w-full" />
        <div className="w-[328px] flex flex-col items-center justify-start max-w-full z-[1]">
          <div className="self-stretch rounded flex flex-row flex-wrap items-center justify-start py-1.5 px-[15px] gap-[12px] border-[1px] border-solid border-black-38">
            <div className="flex-1 flex flex-col items-start justify-start min-w-[169px]">
              <div className="self-stretch relative leading-[16px]">
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
        <div className="w-[1169px] flex flex-row items-end justify-between max-w-full gap-[20px] mq1225:flex-wrap">
          <div className="w-[815px] flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[17px] max-w-full mq1050:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[279px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq450:gap-[25px]">
                  <div className="w-[328px] flex flex-col items-start justify-start gap-[43.5px] max-w-full mq450:gap-[22px]">
                    <div className="self-stretch flex flex-col items-center justify-start z-[2]">
                      <div className="self-stretch rounded flex flex-row items-center justify-start py-1.5 px-[15px] gap-[12px] border-[1px] border-solid border-black-38 mq450:flex-wrap">
                        <div className="flex-1 flex flex-col items-start justify-start min-w-[169px]">
                          <div className="self-stretch relative leading-[16px]">
                            Categoría 2
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
                    <div className="self-stretch flex flex-col items-center justify-start z-[2]">
                      <div className="self-stretch rounded flex flex-row items-center justify-start py-1.5 px-[15px] gap-[12px] border-[1px] border-solid border-black-38 mq450:flex-wrap">
                        <div className="flex-1 flex flex-col items-start justify-start min-w-[169px]">
                          <div className="self-stretch relative leading-[16px]">
                            Categoría 3
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
                    <div className="self-stretch rounded-t rounded-b-none flex flex-col items-start justify-start pt-0 px-0 pb-0 relative z-[2] text-base text-gray-500">
                      <div className="self-stretch rounded flex flex-col items-start justify-start border-[3px] border-solid border-darkgray">
                        <div className="self-stretch rounded-t rounded-b-none flex flex-row items-start justify-start py-1 pr-0 pl-4 [row-gap:20px] mq450:flex-wrap">
                          <div className="flex-1 flex flex-col items-start justify-center pt-0 pb-3 px-0 box-border relative min-w-[172px] min-h-[48px]">
                            <div className="flex flex-row items-center justify-start">
                              <div className="relative tracking-[0.5px] leading-[24px] inline-block min-w-[91px]">
                                08/17/2023
                              </div>
                              <img
                                className="h-4 w-0 relative hidden"
                                alt=""
                                src={caret}
                              />
                            </div>
                            <div className="!m-[0] absolute top-[-12px] left-[-4px] bg-gray-300 flex flex-row items-center justify-start py-0 px-1 text-xs text-gray-400">
                              <div className="relative leading-[16px] inline-block min-w-[25px]">
                                Date
                              </div>
                            </div>
                          </div>
                          <button className="cursor-pointer [border:none] p-1 bg-[transparent] overflow-hidden flex flex-col items-center justify-center">
                            <div className="w-10 h-10 rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center">
                              <div className="bg-m3-state-layers-dark-on-surface-variant-opacity-012 flex flex-row items-center justify-center p-2">
                                <img
                                  className="h-6 w-6 relative"
                                  alt=""
                                  src={iconToday}
                                />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="w-full !m-[0] absolute right-[0px] bottom-[-20px] left-[0px] flex flex-row items-start justify-start pt-1 px-4 pb-0 box-border text-xs text-gray-700">
                        <div className="flex-1 relative leading-[16px]">
                          MM/DD/YYYY
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[81px] relative max-w-full mq450:h-auto mq450:min-h-[81]">
                    <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-center justify-start max-w-full z-[2]">
                      <div className="self-stretch rounded box-border flex flex-row items-center justify-start py-1.5 px-[15px] gap-[12px] max-w-full border-[1px] border-solid border-black-38 mq450:flex-wrap">
                        <div className="flex-1 flex flex-col items-start justify-start min-w-[235px] max-w-full">
                          <div className="self-stretch relative leading-[16px]">
                            Label
                          </div>
                          <input
                            className="w-[calc(100%_-_0px)] [border:none] [outline:none] font-body-1-16-24 text-base bg-[transparent] self-stretch h-6 relative leading-[24px] text-black-87 text-left inline-block min-w-[217px] p-0"
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
                    <div className="absolute top-[55px] left-[0px] flex flex-row items-start justify-start z-[3] text-base text-primary-primary font-public-sans">
                      <div className="relative [text-decoration:underline] leading-[26px]">
                        Archivo download
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[369px] flex flex-col items-start justify-start gap-[43px] min-w-[369px] max-w-full mq750:min-w-full mq450:gap-[21px] mq1050:flex-1">
                <div className="self-stretch flex flex-row items-end justify-start gap-[8px] max-w-full mq450:flex-wrap">
                  <Dropdown />
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[9.7px]">
                    <div className="w-[33px] h-[20.3px] rounded-[63.46px] bg-cornflowerblue flex flex-row items-start justify-start pt-[1.3px] px-[2.5px] pb-[1.2px] box-border z-[1]">
                      <div className="h-[17.8px] flex-1 flex flex-row items-end justify-start py-0 pr-0 pl-[5.1px] box-border">
                        <div className="mb-[-6.299999999999997px] h-[30.5px] w-[30.5px] flex flex-row items-start justify-start pt-[2.6px] pb-[2.5px] pr-[2.5px] pl-[2.6px] box-border shrink-0 [debug_commit:1de1738]">
                          <div className="h-[25.4px] w-[25.4px] rounded-[63.46px] flex flex-row items-start justify-start pt-[5px] px-[5px] pb-[5.2px] box-border">
                            <div className="h-[15.2px] w-[15.2px] rounded-[15.23px] bg-white-color overflow-hidden shrink-0 flex flex-row items-center justify-center p-[7px] box-border">
                              <div className="h-[1.3px] w-[1.3px] relative rounded-[14.6px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[360px] flex flex-col items-start justify-start gap-[11px] max-w-full">
                  <div className="self-stretch flex flex-row items-end justify-start gap-[15px] max-w-full mq450:flex-wrap">
                    <div className="flex-1 flex flex-col items-center justify-start max-w-full z-[2]">
                      <div className="self-stretch rounded flex flex-row items-center justify-start py-1.5 px-[15px] gap-[12px] border-[1px] border-solid border-black-38 mq450:flex-wrap">
                        <div className="flex-1 flex flex-col items-start justify-start min-w-[169px]">
                          <div className="self-stretch relative leading-[16px]">
                            Label
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
                    <div className="h-8 flex flex-col items-start justify-end pt-0 px-0 pb-[15px] box-border">
                      <div className="w-[17px] h-[17px] relative z-[1] flex items-center justify-center">
                        <img
                          className="w-full h-full z-[1] object-contain absolute left-[0px] top-[3px] [transform:scale(2.665)]"
                          loading="lazy"
                          alt=""
                          src={fab}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[340px] h-[104px] bg-info-info-lighter flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full z-[1] text-[22px] text-base-ink mq450:h-auto">
                    <img
                      className="h-[104px] w-2 relative"
                      loading="lazy"
                      alt=""
                      src="/rectangle.svg"
                    />
                    <div className="flex-1 flex flex-row items-start justify-start py-4 pr-4 pl-3.5 box-border gap-[14px] max-w-[calc(100%_-_8px)] mq450:flex-wrap">
                      <img
                        className="h-8 w-8 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src={icon1}
                      />
                      <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[166px]">
                        <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-[18px]">
                          Fill out the form
                        </h3>
                        <div className="self-stretch relative text-base leading-[150%]">
                          All fields are required to be completed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-60 flex flex-row items-start justify-start gap-[60px]">
            <button className="cursor-pointer [border:none] py-3 px-[13px] bg-cornflowerblue shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] rounded-8xs flex flex-row items-start justify-start z-[2] hover:bg-deepskyblue">
              <div className="relative text-sm font-semibold font-work-sans text-white-color text-center inline-block min-w-[56px]">
                Guardar
              </div>
            </button>
            <Button
              className="h-10 flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[2]"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "15",
                background: "#ff0000",
                borderRadius: "5px",
                "&:hover": { background: "#ff0000" },
                height: 40,
              }}
            >
              Resetear
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
 
export default FormComponent;
 