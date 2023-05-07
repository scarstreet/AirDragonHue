import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./index.css";
import { useEffect, useRef, useState } from "react";
import { animated, useScroll } from "@react-spring/web";

const useOnScreen = (ref = <div />, rootMargin = "40px", threshold = 1) => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setTimeout(() => setIntersecting(entry.isIntersecting), 0);
        // setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
        threshold,
      }
    );
    let interval = null;
    const doObserve = () => {
      if (ref.current) {
        observer.observe(ref.current);
        clearInterval(interval);
      }
    };
    interval = setInterval(doObserve, 500);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
};

function App() {
  const text = "Air Dragon Hue";
  const textColor = (offset) => {
    switch (offset) {
      case 0:
        return "text-airdragon-100";
      case 1:
        return "text-airdragon-200";
      case 2:
        return "text-airdragon-300";
      case 3:
        return "text-airdragon-400";
      case 4:
        return "text-airdragon-500";
      case 5:
        return "text-airdragon-600";
      case 6:
        return "text-airdragon-700";
      case 7:
        return "text-airdragon-800";
      case 8:
        return "text-airdragon-900";
      default:
        return "text-airdragon-1000";
    }
  };
  const hoverTextColor = (offset) => {
    switch (offset) {
      case 0:
        return "hover:text-airdragon-100";
      case 1:
        return "hover:text-airdragon-200";
      case 2:
        return "hover:text-airdragon-300";
      case 3:
        return "hover:text-airdragon-400";
      case 4:
        return "hover:text-airdragon-500";
      case 5:
        return "hover:text-airdragon-600";
      case 6:
        return "hover:text-airdragon-700";
      case 7:
        return "hover:text-airdragon-800";
      case 8:
        return "hover:text-airdragon-900";
      default:
        return "hover:text-airdragon-1000";
    }
  };
  const bgAirdragon = (offset) => {
    switch (offset) {
      case 0:
        return "bg-airdragon-100";
      case 1:
        return "bg-airdragon-200";
      case 2:
        return "bg-airdragon-300";
      case 3:
        return "bg-airdragon-400";
      case 4:
        return "bg-airdragon-500";
      case 5:
        return "bg-airdragon-600";
      case 6:
        return "bg-airdragon-700";
      case 7:
        return "bg-airdragon-800";
      case 8:
        return "bg-airdragon-900";
      default:
        return "bg-airdragon-1000";
    }
  };
  const borderAirdragon = (offset) => {
    switch (offset) {
      case 0:
        return "border-airdragon-100";
      case 1:
        return "border-airdragon-200";
      case 2:
        return "border-airdragon-300";
      case 3:
        return "border-airdragon-400";
      case 4:
        return "border-airdragon-500";
      case 5:
        return "border-airdragon-600";
      case 6:
        return "border-airdragon-700";
      case 7:
        return "border-airdragon-800";
      case 8:
        return "border-airdragon-900";
      default:
        return "border-airdragon-1000";
    }
  };
  const airdragonHex = (offset) => {
    switch (offset) {
      case 0:
        return "#d5fed0";
      case 1:
        return "#b5fdce";
      case 2:
        return "#9dfae5";
      case 3:
        return "#89e9f7";
      case 4:
        return "#78c0f1";
      case 5:
        return "#689ae8";
      case 6:
        return "#5975d4";
      case 7:
        return "#424ea7";
      case 8:
        return "#242760";
      default:
        return "#0d0d24";
    }
  };
  const pages = 9;
  const parallaxRef = useRef();
  const refs = {
    page1: {ref:useRef(),title:'Air Dragon Hue'},
    page2: {ref:useRef(),title:'What is this?'},
    page3: {ref:useRef(),title:'Page3'},
    page4: {ref:useRef(),title:'Page4'},
    page5: {ref:useRef(),title:'Page5'},
  };

  const isVisibles = {
    page1: useOnScreen(refs["page1"].ref, "50px"),
    page2: useOnScreen(refs["page2"].ref, "50px"),
    page3: useOnScreen(refs["page3"].ref, "50px"),
    page4: useOnScreen(refs["page4"].ref, "50px"),
    page5: useOnScreen(refs["page5"].ref, "50px"),
  };

  const [pageTitle,setTitle] = useState('')

  useEffect(() => {
    let found = false;
    Object.keys(isVisibles).forEach((item) => {
      if (isVisibles[item]) {
        setTitle(refs[item].title)
        found = true;
      }
      if (!found) {
        setTitle('')
      }
    })
  },[isVisibles])

  return (
    <>
      <Parallax
        ref={parallaxRef}
        pages={pages}
        className="z-10 h-[200vh] bg-gradient-to-t to-neutral-800 from-neutral-950"
      >
        <ParallaxLayer
          className="flex items-center z-10 p-6"
          sticky={{ start: 0, end: 1 }}
        >
          <h1 className=" absolute whitespace-nowrap">{text}</h1>
          {Array(7)
            .fill(0)
            .map((i, i_idx) => (
              <svg
                id="visual"
                className="absolute top-[-20vh] left-[-25rem] rotate-[30deg]"
                key={"blob1-" + i_idx}
                viewBox="0 0 100 100"
                height="90vh"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <g transform="translate(50.56295407309549 49.100233518030976)">
                  <path
                    fill="none"
                    stroke={airdragonHex(i_idx)}
                    stroke-width="0.1"
                  >
                    <animate
                      attributeName="d"
                      dur="15000ms"
                      repeatCount="indefinite"
                      begin={`${500 * i_idx}ms`}
                      values="M20 -22C25.8 -14.1 30.4 -7.1 29.7 -0.7C29 5.7 23 11.3 17.1 21.3C11.3 31.3 5.7 45.7 -0.6 46.2C-6.8 46.8 -13.7 33.7 -15 23.7C-16.3 13.7 -12.1 6.8 -16 -3.9C-19.9 -14.7 -32.1 -29.5 -30.8 -37.3C-29.5 -45.1 -14.7 -46.1 -3.8 -42.2C7.1 -38.4 14.1 -29.8 20 -22;
                    M24.1 -33C25.6 -22.6 17.3 -11.3 12.6 -4.7C7.8 1.8 6.7 3.7 5.2 6.2C3.7 8.7 1.8 11.8 -4 15.9C-9.9 19.9 -19.8 24.8 -22.1 22.3C-24.5 19.8 -19.2 9.9 -16.9 2.4C-14.5 -5.2 -15 -10.4 -12.7 -20.8C-10.4 -31.2 -5.2 -46.9 3.1 -49.9C11.3 -53 22.6 -43.5 24.1 -33;
                    M23.8 -24.3C27.3 -20.3 24.1 -10.1 20 -4.1C15.8 1.8 10.7 3.7 7.2 14.1C3.7 24.5 1.8 43.5 -2.7 46.2C-7.3 49 -14.6 35.4 -21.1 25C-27.6 14.6 -33.3 7.3 -34.4 -1.1C-35.4 -9.4 -31.9 -18.9 -25.4 -22.9C-18.9 -26.9 -9.4 -25.4 0.4 -25.8C10.1 -26.1 20.3 -28.3 23.8 -24.3;
                    M20 -22C25.8 -14.1 30.4 -7.1 29.7 -0.7C29 5.7 23 11.3 17.1 21.3C11.3 31.3 5.7 45.7 -0.6 46.2C-6.8 46.8 -13.7 33.7 -15 23.7C-16.3 13.7 -12.1 6.8 -16 -3.9C-19.9 -14.7 -32.1 -29.5 -30.8 -37.3C-29.5 -45.1 -14.7 -46.1 -3.8 -42.2C7.1 -38.4 14.1 -29.8 20 -22;
                    "
                    ></animate>
                  </path>
                </g>
              </svg>
            ))}
          <div className="w-[40vw] h-[80vh] bg-white relative left-0 overflow-hidden">
            {Array(9)
              .fill(0)
              .map((i, i_idx) => (
                <ParallaxLayer
                  key={i_idx}
                  className={"flex items-center"}
                  style={{ width: "40vw", height: "80vh" }}
                  speed={0.4 - i_idx * 0.1}
                >
                  <h1
                    className={`w-screen absolute left-0 whitespace-nowrap ${textColor(
                      i_idx
                    )}`}
                  >
                    {text}
                  </h1>
                </ParallaxLayer>
              ))}
          </div>
          <ParallaxLayer
            className="flex justify-center items-center"
            speed={-0.05}
          >
            <h5 className="pt-[16vw] ml-[6vw] max-md:ml-[20vw] max-md:pt-[20vw] text-neutral-300">
              Experiment by<br></br>
              <a
                className="underline"
                target="_blank"
                rel="noreferrer"
                href="https://astrid-adhipurusa.web.app"
              >
                Astrid Adhipurusa
              </a>
            </h5>
          </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2} className="-z-10">
          {Array(7)
            .fill(0)
            .map((i, i_idx) => (
              <animated.svg
                id="visual"
                className="absolute bottom-[-70vh] right-[-71vh] -scale-x-100"
                key={"blob1-" + i_idx}
                viewBox="0 0 100 100"
                height="90vh"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                style={{ transform: `translateX(-${100}px)` }}
              >
                <g transform="translate(50.56295407309549 49.100233518030976)">
                  <path
                    fill="none"
                    stroke={airdragonHex(i_idx)}
                    stroke-width="0.1"
                  >
                    <animate
                      attributeName="d"
                      dur="15000ms"
                      repeatCount="indefinite"
                      begin={`${500 * i_idx}ms`}
                      values="M20 -22C25.8 -14.1 30.4 -7.1 29.7 -0.7C29 5.7 23 11.3 17.1 21.3C11.3 31.3 5.7 45.7 -0.6 46.2C-6.8 46.8 -13.7 33.7 -15 23.7C-16.3 13.7 -12.1 6.8 -16 -3.9C-19.9 -14.7 -32.1 -29.5 -30.8 -37.3C-29.5 -45.1 -14.7 -46.1 -3.8 -42.2C7.1 -38.4 14.1 -29.8 20 -22;
                    M24.1 -33C25.6 -22.6 17.3 -11.3 12.6 -4.7C7.8 1.8 6.7 3.7 5.2 6.2C3.7 8.7 1.8 11.8 -4 15.9C-9.9 19.9 -19.8 24.8 -22.1 22.3C-24.5 19.8 -19.2 9.9 -16.9 2.4C-14.5 -5.2 -15 -10.4 -12.7 -20.8C-10.4 -31.2 -5.2 -46.9 3.1 -49.9C11.3 -53 22.6 -43.5 24.1 -33;
                    M23.8 -24.3C27.3 -20.3 24.1 -10.1 20 -4.1C15.8 1.8 10.7 3.7 7.2 14.1C3.7 24.5 1.8 43.5 -2.7 46.2C-7.3 49 -14.6 35.4 -21.1 25C-27.6 14.6 -33.3 7.3 -34.4 -1.1C-35.4 -9.4 -31.9 -18.9 -25.4 -22.9C-18.9 -26.9 -9.4 -25.4 0.4 -25.8C10.1 -26.1 20.3 -28.3 23.8 -24.3;
                    M20 -22C25.8 -14.1 30.4 -7.1 29.7 -0.7C29 5.7 23 11.3 17.1 21.3C11.3 31.3 5.7 45.7 -0.6 46.2C-6.8 46.8 -13.7 33.7 -15 23.7C-16.3 13.7 -12.1 6.8 -16 -3.9C-19.9 -14.7 -32.1 -29.5 -30.8 -37.3C-29.5 -45.1 -14.7 -46.1 -3.8 -42.2C7.1 -38.4 14.1 -29.8 20 -22;
                    "
                    ></animate>
                  </path>
                </g>
              </animated.svg>
            ))}
        </ParallaxLayer>
        <ParallaxLayer offset={2} className="flex items-center">
          <div
            className="flex flex-col p-6 z-20 w-screen"
            ref={refs["page2"].ref}
          >
            <h2
              className={`self-end duration-700 ${
                isVisibles["page2"]
                  ? " opacity-100"
                  : " translate-x-5 opacity-0 "
              }`}
              id="atitle"
            >
              I. What i
              <span className="bg-white text-airdragon-900">s this</span>?{``}
            </h2>
            <div
              className={
                "w-[60vw] max-sm:w-[80vw] max-sm:ml-0 text-justify hyphens-auto mt-4 ml-[8vw] duration-700 " +
                (isVisibles["page2"]
                  ? " opacity-100"
                  : " -translate-x-5 opacity-0 ")
              }
            >
              <p>
                &emsp;Inspired by many different sources, I wanted to create a
                beautiful webpage for the sole purpose of testing various web
                design methodologies and making sure I can make them work
                together. Within this page, you will find the references and
                documentation of how this page was created, along with it{"'"}s
                sources. The kinds of methodologies and tools that are tested on
                this page is as follows :
              </p>
              <div className="space-y-3 m-10 w-[40vw]">
                {[
                  "Colorbox",
                  "Parallax Effect",
                  "Scrolling fade-in",
                  "SVG animation",
                ].map((item, item_idx) => {
                  return (
                    <div
                      className={
                        borderAirdragon(item_idx) +
                        " border font-bold border-l-8 hover:translate-x-5 duration-500 hover:text-neutral-900 hover:bg-white hover:border-white " +
                        textColor(item_idx)
                      }
                      key={"p2-item-" + item_idx}
                    >
                      <p className="px-4 py-1">{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} className="-z-10">
          {Array(7)
            .fill(0)
            .map((i, i_idx) => (
              <animated.svg
                id="visual"
                className="absolute bottom-[-60vh] left-[-47vh] z-0"
                key={"blob1-" + i_idx}
                viewBox="0 0 100 100"
                height="90vh"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                style={{ transform: `translateX(-${100}px)` }}
              >
                <g transform="translate(50.56295407309549 49.100233518030976)">
                  <path
                    fill="none"
                    stroke={airdragonHex(i_idx)}
                    stroke-width="0.1"
                  >
                    <animate
                      attributeName="d"
                      dur="15000ms"
                      repeatCount="indefinite"
                      begin={`${500 * i_idx}ms`}
                      values="M20 -22C25.8 -14.1 30.4 -7.1 29.7 -0.7C29 5.7 23 11.3 17.1 21.3C11.3 31.3 5.7 45.7 -0.6 46.2C-6.8 46.8 -13.7 33.7 -15 23.7C-16.3 13.7 -12.1 6.8 -16 -3.9C-19.9 -14.7 -32.1 -29.5 -30.8 -37.3C-29.5 -45.1 -14.7 -46.1 -3.8 -42.2C7.1 -38.4 14.1 -29.8 20 -22;
                    M24.1 -33C25.6 -22.6 17.3 -11.3 12.6 -4.7C7.8 1.8 6.7 3.7 5.2 6.2C3.7 8.7 1.8 11.8 -4 15.9C-9.9 19.9 -19.8 24.8 -22.1 22.3C-24.5 19.8 -19.2 9.9 -16.9 2.4C-14.5 -5.2 -15 -10.4 -12.7 -20.8C-10.4 -31.2 -5.2 -46.9 3.1 -49.9C11.3 -53 22.6 -43.5 24.1 -33;
                    M23.8 -24.3C27.3 -20.3 24.1 -10.1 20 -4.1C15.8 1.8 10.7 3.7 7.2 14.1C3.7 24.5 1.8 43.5 -2.7 46.2C-7.3 49 -14.6 35.4 -21.1 25C-27.6 14.6 -33.3 7.3 -34.4 -1.1C-35.4 -9.4 -31.9 -18.9 -25.4 -22.9C-18.9 -26.9 -9.4 -25.4 0.4 -25.8C10.1 -26.1 20.3 -28.3 23.8 -24.3;
                    M20 -22C25.8 -14.1 30.4 -7.1 29.7 -0.7C29 5.7 23 11.3 17.1 21.3C11.3 31.3 5.7 45.7 -0.6 46.2C-6.8 46.8 -13.7 33.7 -15 23.7C-16.3 13.7 -12.1 6.8 -16 -3.9C-19.9 -14.7 -32.1 -29.5 -30.8 -37.3C-29.5 -45.1 -14.7 -46.1 -3.8 -42.2C7.1 -38.4 14.1 -29.8 20 -22;
                    "
                    ></animate>
                  </path>
                </g>
              </animated.svg>
            ))}
        </ParallaxLayer>
        <ParallaxLayer offset={2} sticky={{ start: 2, end: pages }}>
          <div className="absolute right-0 bottom-0 m-4 flex flex-nowrap">
            <span
              style={{ writingMode: "vertical-rl", textOrientation: "mixed", fontFamily: 'Bruno Ace' }}
              className="opacity-20 self-end"
            >
              {pageTitle}
            </span>
            <div className="space-y-3 ">
              {Object.keys(refs).map((item, item_idx) => (
                <div
                  key={"navigator-" + item_idx}
                  className={
                    "w-3 h-10 duration-500 hover:-translate-x-1 border hover:bg-white hover:border-white " +
                    (isVisibles[item] ? " " : bgAirdragon(item_idx)) +
                    " " +
                    borderAirdragon(item_idx)
                  }
                ></div>
              ))}
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
