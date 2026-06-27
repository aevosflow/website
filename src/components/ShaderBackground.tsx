export default function ShaderBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ willChange: 'transform' }}
    >
      {/* Base gradient layer — matches original white bg */}
      <div className="absolute inset-0" style={{ background: 'var(--color-brand-bg)' }} />

      {/* Animated cyan shimmer orbs — GPU composited via transform+opacity only */}
      <div
        className="shader-orb shader-orb-1"
        style={{
          position: 'absolute',
          borderRadius: '50%',
          filter: 'blur(90px)',
          background: 'radial-gradient(circle, rgba(6,182,212,0.28) 0%, rgba(6,182,212,0.06) 60%, transparent 100%)',
          width: '65vw',
          height: '65vw',
          top: '-15%',
          left: '-10%',
          willChange: 'transform, opacity',
        }}
      />
      <div
        className="shader-orb shader-orb-2"
        style={{
          position: 'absolute',
          borderRadius: '50%',
          filter: 'blur(110px)',
          background: 'radial-gradient(circle, rgba(6,182,212,0.18) 0%, rgba(6,182,212,0.04) 60%, transparent 100%)',
          width: '50vw',
          height: '50vw',
          bottom: '-10%',
          right: '-8%',
          willChange: 'transform, opacity',
        }}
      />
      <div
        className="shader-orb shader-orb-3"
        style={{
          position: 'absolute',
          borderRadius: '50%',
          filter: 'blur(70px)',
          background: 'radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)',
          width: '35vw',
          height: '35vw',
          top: '40%',
          left: '55%',
          willChange: 'transform, opacity',
        }}
      />
    </div>
  );
}
