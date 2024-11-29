import { Canvas } from "@react-three/fiber";
import Scene from "./scene";

const HomePage = () => {
    return (
        <Canvas style={{height: "100vh", width: "100vw"}}>
            <Scene />
        </Canvas>
    );
};

export default HomePage;