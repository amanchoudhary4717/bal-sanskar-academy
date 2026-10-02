import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Float,
} from "@react-three/drei";

function SchoolBuilding() {
  return (
    <group>
      {/* Main Building */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[4.5, 2.4, 2.5]} />
        <meshStandardMaterial color="#f8fafc" />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 2.75, 0]}>
        <boxGeometry args={[5, 0.35, 2.9]} />
        <meshStandardMaterial color="#1e3a8a" />
      </mesh>

      {/* Entrance */}
      <mesh position={[0, 0.55, 1.3]}>
        <boxGeometry args={[0.75, 1.3, 0.12]} />
        <meshStandardMaterial color="#1e3a8a" />
      </mesh>

      {/* Left Windows */}
      <mesh position={[-1.5, 1.4, 1.3]}>
        <boxGeometry args={[0.65, 0.65, 0.12]} />
        <meshStandardMaterial color="#60a5fa" />
      </mesh>

      <mesh position={[-0.6, 1.4, 1.3]}>
        <boxGeometry args={[0.65, 0.65, 0.12]} />
        <meshStandardMaterial color="#60a5fa" />
      </mesh>

      {/* Right Windows */}
      <mesh position={[0.6, 1.4, 1.3]}>
        <boxGeometry args={[0.65, 0.65, 0.12]} />
        <meshStandardMaterial color="#60a5fa" />
      </mesh>

      <mesh position={[1.5, 1.4, 1.3]}>
        <boxGeometry args={[0.65, 0.65, 0.12]} />
        <meshStandardMaterial color="#60a5fa" />
      </mesh>

      {/* School Sign */}
      <mesh position={[0, 2.05, 1.34]}>
        <boxGeometry args={[2.5, 0.35, 0.08]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
    </group>
  );
}

function Tree({ position }) {
  return (
    <group position={position}>
      {/* Trunk */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.15, 0.2, 1.2, 12]} />
        <meshStandardMaterial color="#92400e" />
      </mesh>

      {/* Leaves */}
      <mesh position={[0, 1.45, 0]}>
        <sphereGeometry args={[0.75, 16, 16]} />
        <meshStandardMaterial color="#16a34a" />
      </mesh>
    </group>
  );
}

function Campus() {
  return (
    <group>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
        <planeGeometry args={[12, 9]} />
        <meshStandardMaterial color="#86efac" />
      </mesh>

      <SchoolBuilding />

      <Tree position={[-4, 0, 0]} />
      <Tree position={[4, 0, 0]} />

      {/* Small tree near school */}
      <Tree position={[3, 0, -2]} />
    </group>
  );
}

function SchoolScene() {
  return (
    <div
      style={{
        width: "100%",
        height: "550px",
        borderRadius: "30px",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #bfdbfe 0%, #dbeafe 100%)",
      }}
    >
      <Canvas
        camera={{
          position: [8, 6, 10],
          fov: 45,
        }}
      >
        <ambientLight intensity={2} />

        <directionalLight
          position={[5, 10, 5]}
          intensity={3}
        />

        <Float
          speed={1.5}
          rotationIntensity={0.15}
          floatIntensity={0.2}
        >
          <Campus />
        </Float>

        <Environment preset="city" />

        <OrbitControls
          enablePan={false}
          minDistance={7}
          maxDistance={18}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Canvas>
    </div>
  );
}

export default SchoolScene;