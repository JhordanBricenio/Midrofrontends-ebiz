import personaFiled from '../assets/images/personfilled.svg'
import b2mining from '../assets/images/b2mining-ico.png'


function HeaderComponent() {
    return (
      <div style={{ fontFamily: 'Roboto, sans-serif' }}  className="w-full bg-gray-color overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <section className="flex-1 flex flex-row items-start justify-between pt-[33px] pb-4 pr-[54px] pl-[106px] box-border relative max-w-full gap-[20px] text-center text-[14px] text-white-color font-roboto mq450:pl-5 mq450:box-border mq975:flex-wrap mq975:pl-[53px] mq975:pr-[27px] mq975:box-border">
        <div className="w-[534.9px] flex flex-col items-start justify-start gap-[11px] max-w-full">
          <div className="w-[399.3px] flex flex-row items-start justify-start py-0 px-14 box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
            <b className="flex-1 relative z-[1]">
              RAZÓN SOCIAL - RUC 098837733
            </b>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center pt-[11.1px] px-0 pb-[11px] box-border relative gap-[7.2px] max-w-full z-[2] text-justify text-xs mq700:flex-wrap">
            <div className="h-[55.9px] w-[60.9px] rounded-lg bg-lavender overflow-hidden shrink-0 flex flex-row items-end justify-start [debug_commit:1de1738]">
              <div className="ml-[-7.5px] mb-[-11px] w-[76px] bg-white-color flex flex-row items-start justify-start shrink-0 [debug_commit:1de1738]">
                <div className="h-[78px] flex-1 relative overflow-hidden">
                  <img
                    className="absolute h-[66.67%] w-[calc(100%_-_25.3px)] top-[16.67%] right-[12.6px] bottom-[16.67%] left-[12.7px] max-w-full overflow-hidden max-h-full"
                    loading="lazy"
                    alt=""
                    src={personaFiled}
                  />
                </div>
              </div>
            </div>
            <div className="h-[55.9px] flex-1 flex flex-col items-start justify-start pt-[32.9px] px-0 pb-0 box-border min-w-[304px] max-w-full">
              <b className="self-stretch h-[74.2px] relative inline-block shrink-0 [debug_commit:1de1738] z-[1]">{`Lorem ipsum dolor sit amet consectetur. Venenatis feugiat dignissim nullam ac Commodo et parturient at sed eget hendrerit faucibus. Arcu vitae suspendisse lobortis `}</b>
            </div>
            <div className="w-[467px] !m-[0] absolute h-full top-[0px] right-[11.9px] bottom-[0px] flex flex-row items-start justify-start pt-4 px-3 pb-[39px] box-border max-w-full z-[1] text-center text-[20px]">
              <h2 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[93px] z-[1] mq450:text-[16px]">
                MI PERFIL
              </h2>
            </div>
          </div>
        </div>
        <div className="h-[220px] w-full absolute !m-[0] right-[0px] bottom-[-66px] left-[0px]">
          <div className="absolute top-[0px] left-[0px] bg-steelblue w-full h-full" />
          <img
            className="absolute top-[4px] left-[18px] w-[63.2px] h-[59px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src={b2mining}
          />
        </div>
        <div className="w-[271px] flex flex-row items-start justify-start py-0 pr-2.5 pl-0 box-border text-justify text-xs text-black-color">
          <div className="h-[42px] w-[271px] relative rounded-[10px] bg-white-color z-[1]" />
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border max-w-[131%] shrink-0 ml-[-250px]">
            <div className="rounded-lg bg-white-color overflow-hidden flex flex-row items-start justify-start py-0.5 px-1 z-[2]">
              <div className="flex flex-row items-center justify-center">
                <img
                  className="h-[34px] w-[34px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={personaFiled}
                />
              </div>
            </div>
          </div>
          <div className="w-[149.6px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border ml-[-250px]">
            <div className="self-stretch h-[50.9px] relative leading-[150%] font-light inline-block shrink-0 z-[2]">
              <p className="m-0">Sesión iniciada como</p>
              <p className="m-0">Proveedor 2</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
}

export default HeaderComponent