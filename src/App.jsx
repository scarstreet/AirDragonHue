import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./index.css";

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
  return (
    <>
      <Parallax pages={2} className="z-10">
        <ParallaxLayer className="flex justify-center items-center z-10" sticky={1}>
          <h1 className=" absolute whitespace-nowrap">{text}</h1>
          <div className="w-[20vw] h-[100vh] bg-airdragon-0 relative left-0 overflow-hidden">
            {Array(9)
              .fill(0)
              .map((i, i_idx) => (
                <ParallaxLayer
                  key={i_idx}
                  className={"flex justify-center items-center"}
                  speed={0.4 - i_idx * 0.1}
                >
                  <h1 className={`whitespace-nowrap ${textColor(i_idx)}`}>
                    {text}
                  </h1>
                </ParallaxLayer>
              ))}
          </div>
        </ParallaxLayer>
        <div className="absolute flex justify-center items-center text-neutral-900 pt-[20vh] z-50">
        text
      </div>
        {/* PAGE BREAK */}
      </Parallax>
    </>
  );
}

export default App;

