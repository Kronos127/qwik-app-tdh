import { component$ } from '@builder.io/qwik';

export const Video = component$(() => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: '100vw', height: '100vh' }}>
      <video
        src="https://aes-ext-tdh.s3.amazonaws.com/videos/ethimo.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      ></video>
      {/* Add any additional content here */}
    </div>
  );
});