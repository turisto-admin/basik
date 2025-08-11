import { BackgroundAnimation } from "@/presentations/components/shared/background-animation/bg-animation";
import "@/presentations/styles/spinner/spinner.css";
export default function Loading() {
  return (
    <div className="relative bg-primary-black min-h-screen">
      <BackgroundAnimation />

      <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center">
        <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        </div>
      </div>
    </div>
  );
}
