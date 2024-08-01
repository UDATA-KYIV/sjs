import { FC, useRef, useState } from "react";
import { Environment, useGLTF, CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "./styles.module.scss";
//import { Model } from "./PART-System_Other";

interface HouseModelProps {
  visibility: { [key: string]: boolean };
}

const DEG45 = Math.PI / 4;

const HouseModel: FC<HouseModelProps> = ({ visibility }) => {
  const cameraControlRef = useRef<CameraControls | null>(null);

  const parts = {
    partConcreteModel: useGLTF("./houseParts/PART-ConcreteModel.gltf"),
    partSystem1: useGLTF("./houseParts/PART-System_1-RED.glb"),
    partSystem2: useGLTF("./houseParts/PART-System_2-GREEN.glb"),
    partSystem3: useGLTF("./houseParts/PART-System_3-BLUE.glb"),
    partSystemOt0her: useGLTF("./houseParts/PART-System_Other-Purple.glb"),
    //simple: useGLTF("./houseParts/SimpleModel.glb"),
    //truck: useGLTF("./houseParts/model.glb"),
    //fullModel: useGLTF("./house/FullModel.gltf"),
  };
  //console.log(parts);

  return (
    <>
      <Canvas
        className={styles.house}
        frameloop="demand"
        //camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
        camera={{ position: [-6, 2.5, 2], fov: 45 }}>
        {/*<OrbitControls />*/}
        <CameraControls ref={cameraControlRef} />
        <ambientLight intensity={0.5} />
        {Object.entries(parts).map(([partName, partData]) => (
          <primitive
            key={partName}
            object={partData.scene}
            scale={0.15}
            //onClick={() => console.log(partData)}
            visible={visibility[partName]}
          />
        ))}
        <Environment preset="sunset" />
      </Canvas>
      <div style={{ display: "flex", gap: 50, position: "absolute", right: 200, bottom: 50 }}>
        <button
          type="button"
          onClick={() => {
            cameraControlRef.current?.rotate(DEG45, 0, true);
          }}>
          rotate theta 45deg
        </button>
        <button
          onClick={() => {
            cameraControlRef.current?.setPosition(0, 7, 0, true);
          }}>
          Concrete Model
        </button>

        <button
          type="button"
          onClick={() => {
            cameraControlRef.current?.reset(true);
          }}>
          reset
        </button>
      </div>
    </>
  );
};

export default HouseModel;
