import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Provis Biolabs - Advanced Bioprocessing & R&D';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #1E3A8A, #002266)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: 80,
        }}
      >
        <div style={{ color: '#F26522', fontSize: 72, fontWeight: 'bold', marginBottom: 20 }}>
          Provis Biolabs
        </div>
        <div style={{ color: 'white', fontSize: 40, textAlign: 'center', lineHeight: 1.4 }}>
          Pioneering Bioscience for a Healthier World
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            color: '#94A3B8',
            fontSize: 24,
            fontWeight: 'bold',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}
        >
          provisbiolabs.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
