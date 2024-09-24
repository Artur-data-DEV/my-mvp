import Navbar from "./components/Navbar";
import Greetings from "./components/Greetings.jsx";
import SvgComponent from "./components/SvgComponent.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Greetings name={"Artur"} />
      <SvgComponent
        svgNames={[
          "html",
          "css",
          "js",
          "react",
          "redux",
          "tailwind",
          "ssas",
          "git",
          "greensock",
          "bootstrap",
          "vscode",
          "github",
        ]}
      />
    </>
  );
}
