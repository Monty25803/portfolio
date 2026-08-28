import Particles from "./reactbits/Particles";

export default function SceneBackground() {
  return (
    <div className="spatial-environment" aria-hidden>
      <Particles
        particleCount={180}
        particleSpread={12}
        speed={0.08}
        particleColors={["#f5f0e6", "#e8e0d0", "#a8a29e"]}
        alphaParticles
        particleBaseSize={80}
        sizeRandomness={0.8}
        cameraDistance={22}
        disableRotation={false}
        className="absolute inset-0"
      />
      <div className="spatial-vignette" />
    </div>
  );
}
