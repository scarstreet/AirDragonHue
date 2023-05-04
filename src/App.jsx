import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./index.css";
import { useEffect, useRef } from "react";
import { useScroll } from "@react-spring/web";

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
  const airdragonColor = (offset) => {
    switch (offset) {
      case 0:
        return "airdragon-100";
      case 1:
        return "airdragon-200";
      case 2:
        return "airdragon-300";
      case 3:
        return "airdragon-400";
      case 4:
        return "airdragon-500";
      case 5:
        return "airdragon-600";
      case 6:
        return "airdragon-700";
      case 7:
        return "airdragon-800";
      case 8:
        return "airdragon-900";
      default:
        return "airdragon-1000";
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
  const pages = 2;
  const { scrollYProgress } = useScroll();
  const onPage = () => {
    console.log(scrollYProgress.to((i) => i * pages));
  };

  return (
    <>
      <Parallax
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
                className="absolute opacity-20 -left-[260vh] -top-[200vh]"
                id="visual"
                key={"blob1-" + i_idx}
                viewBox="0 0 900 600"
                width={`${500 - i_idx * 5}vh`}
                height={`${500 - i_idx * 5}vh`}
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <g
                  id="blob1"
                  transform="translate(491.91304762821414 264.66191448429737)"
                >
                  <path
                    fill="none"
                    stroke={airdragonHex(i_idx)}
                    stroke-width="1"
                  >
                    <animate
                      attributeName="d"
                      dur="15000ms"
                      repeatCount="indefinite"
                      begin={`${400 * i_idx}ms`}
                      values="
                  M24.8,-44.8C27.6,-32.1,22.3,-18.8,21.8,-9.6C21.3,-0.4,25.8,4.7,29.1,14.1C32.5,23.5,34.8,37.3,29.7,48.5C24.7,59.8,12.3,68.6,1.4,66.6C-9.5,64.7,-19,51.9,-27.8,41.9C-36.7,31.8,-44.9,24.6,-45.1,16.4C-45.3,8.3,-37.4,-0.6,-30.4,-6.1C-23.5,-11.6,-17.4,-13.6,-12.5,-25.7C-7.5,-37.8,-3.8,-60,3.6,-65C11,-69.9,22,-57.6,24.8,-44.8Z;
                  M18.9,-38.8C20.4,-24.9,14.6,-13.9,23.7,-3.5C32.8,6.8,56.8,16.6,63.1,27.7C69.3,38.8,57.8,51.3,44.4,62.1C30.9,72.9,15.4,82,3.1,77.7C-9.2,73.4,-18.3,55.6,-18.4,40.5C-18.5,25.3,-9.5,12.7,-15.4,3C-21.3,-6.7,-42,-13.5,-43.8,-16.1C-45.5,-18.7,-28.3,-17,-17.9,-28C-7.4,-38.9,-3.7,-62.4,2.5,-65.9C8.7,-69.3,17.4,-52.6,18.9,-38.8Z;
                  M40.7,-65C45.3,-52.8,36.4,-30.8,32.4,-16.7C28.5,-2.6,29.6,3.7,32.9,16.1C36.3,28.5,41.9,47,36.8,60C31.7,73,15.9,80.4,7.2,70.6C-1.6,60.8,-3.1,33.6,-13.5,22.3C-23.9,11,-43.2,15.7,-52.8,11.2C-62.4,6.8,-62.4,-6.8,-57.2,-17.3C-52,-27.8,-41.6,-35.4,-31.2,-45.7C-20.8,-56.1,-10.4,-69.3,3.8,-74.6C18.1,-79.9,36.2,-77.3,40.7,-65Z;
                  M24.8,-44.8C27.6,-32.1,22.3,-18.8,21.8,-9.6C21.3,-0.4,25.8,4.7,29.1,14.1C32.5,23.5,34.8,37.3,29.7,48.5C24.7,59.8,12.3,68.6,1.4,66.6C-9.5,64.7,-19,51.9,-27.8,41.9C-36.7,31.8,-44.9,24.6,-45.1,16.4C-45.3,8.3,-37.4,-0.6,-30.4,-6.1C-23.5,-11.6,-17.4,-13.6,-12.5,-25.7C-7.5,-37.8,-3.8,-60,3.6,-65C11,-69.9,22,-57.6,24.8,-44.8Z;
                  "
                    ></animate>
                  </path>
                </g>
              </svg>
            ))}
          <div className="w-[40vw] h-[80vh] bg-airdragon-0 relative left-0 overflow-hidden border border-white">
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
        <ParallaxLayer sticky={{start:1.4,end:3}} speed={0.1}>
          {Array(7)
            .fill(0)
            .map((i, i_idx) => (
              <svg
                className="absolute opacity-20 -top-[150vh]  lg:-left-[] xl:-left-[calc(130vh-57vw)] -scale-x-100"
                id="visual"
                key={"blob1-" + i_idx}
                viewBox="0 0 900 600"
                width={`${500 - i_idx * 5}vh`}
                height={`${500 - i_idx * 5}vh`}
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <g
                  id="blob1"
                  transform="translate(491.91304762821414 264.66191448429737)"
                >
                  <path
                    fill="none"
                    stroke={airdragonHex(i_idx)}
                    stroke-width="1"
                  >
                    <animate
                      attributeName="d"
                      dur="15000ms"
                      repeatCount="indefinite"
                      begin={`${400 * i_idx}ms`}
                      values="
                  M24.8,-44.8C27.6,-32.1,22.3,-18.8,21.8,-9.6C21.3,-0.4,25.8,4.7,29.1,14.1C32.5,23.5,34.8,37.3,29.7,48.5C24.7,59.8,12.3,68.6,1.4,66.6C-9.5,64.7,-19,51.9,-27.8,41.9C-36.7,31.8,-44.9,24.6,-45.1,16.4C-45.3,8.3,-37.4,-0.6,-30.4,-6.1C-23.5,-11.6,-17.4,-13.6,-12.5,-25.7C-7.5,-37.8,-3.8,-60,3.6,-65C11,-69.9,22,-57.6,24.8,-44.8Z;
                  M18.9,-38.8C20.4,-24.9,14.6,-13.9,23.7,-3.5C32.8,6.8,56.8,16.6,63.1,27.7C69.3,38.8,57.8,51.3,44.4,62.1C30.9,72.9,15.4,82,3.1,77.7C-9.2,73.4,-18.3,55.6,-18.4,40.5C-18.5,25.3,-9.5,12.7,-15.4,3C-21.3,-6.7,-42,-13.5,-43.8,-16.1C-45.5,-18.7,-28.3,-17,-17.9,-28C-7.4,-38.9,-3.7,-62.4,2.5,-65.9C8.7,-69.3,17.4,-52.6,18.9,-38.8Z;
                  M40.7,-65C45.3,-52.8,36.4,-30.8,32.4,-16.7C28.5,-2.6,29.6,3.7,32.9,16.1C36.3,28.5,41.9,47,36.8,60C31.7,73,15.9,80.4,7.2,70.6C-1.6,60.8,-3.1,33.6,-13.5,22.3C-23.9,11,-43.2,15.7,-52.8,11.2C-62.4,6.8,-62.4,-6.8,-57.2,-17.3C-52,-27.8,-41.6,-35.4,-31.2,-45.7C-20.8,-56.1,-10.4,-69.3,3.8,-74.6C18.1,-79.9,36.2,-77.3,40.7,-65Z;
                  M24.8,-44.8C27.6,-32.1,22.3,-18.8,21.8,-9.6C21.3,-0.4,25.8,4.7,29.1,14.1C32.5,23.5,34.8,37.3,29.7,48.5C24.7,59.8,12.3,68.6,1.4,66.6C-9.5,64.7,-19,51.9,-27.8,41.9C-36.7,31.8,-44.9,24.6,-45.1,16.4C-45.3,8.3,-37.4,-0.6,-30.4,-6.1C-23.5,-11.6,-17.4,-13.6,-12.5,-25.7C-7.5,-37.8,-3.8,-60,3.6,-65C11,-69.9,22,-57.6,24.8,-44.8Z;
                  "
                    ></animate>
                  </path>
                </g>
              </svg>
            ))}
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;

