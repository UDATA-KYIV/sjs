import { FC, Suspense } from "react";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "./styles.module.scss";
//import { Model } from "./PART-System_Other";

interface HouseModelProps {
  visibility: { [key: string]: boolean };
}

const HouseModel: FC<HouseModelProps> = ({ visibility }) => {
  const parts = {
    partConcreteModel: useGLTF("./houseParts/PART-ConcreteModel.gltf"),
    partSystem1: useGLTF("./houseParts/PART-System_1.gltf"),
    partSystem2: useGLTF("./houseParts/PART-System_2.gltf"),
    partSystem3: useGLTF("./houseParts/PART-System_3.gltf"),
    partSystemOt0her: useGLTF("./houseParts/PART-System_Other.glb"),
    //truck: useGLTF("./houseParts/model.glb"),
    //fullModel: useGLTF("./house/FullModel.gltf"),
  };

  //console.log(parts.fullModel);

  return (
    <>
      <Canvas
        className={styles.house}
        frameloop="demand"
        camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        {Object.entries(parts).map(([partName, partData]) => (
          <primitive
            key={partName}
            object={partData.scene}
            scale={0.15}
            onClick={() => console.log(partData)}
            visible={visibility[partName]}
            //visible={true}
          />
        ))}
        {/*<Model />*/}
        <Environment preset="sunset" />
      </Canvas>
    </>
  );

  //return (
  //  <Canvas>
  //    <Suspense fallback={null}>
  //      <OrbitControls />
  //      <ambientLight intensity={0.5} />
  //      <Model />
  //      <Environment preset="sunset" />
  //    </Suspense>
  //  </Canvas>
  //);
};

export default HouseModel;
