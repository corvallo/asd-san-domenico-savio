import { useOGLCarousel } from '../../api/use-ogl-carousel';
import { useCarousel } from '../../api/use-carousel';
import { Slide } from '../slide/slide';
import { Controls } from '../controls/controls';
import { WaveDivider } from '~/features/wave-divider';

const styles = {
  root: "relative w-full h-[100svh] min-h-[400px] overflow-hidden bg-[#09172b] text-[white] rounded-[12px] after:[content:''] after:absolute after:inset-0 after:[background-image:linear-gradient(90deg,_rgba(3,_12,_28,_0.48),_transparent_80%)] after:pointer-events-none after:z-3",
  canvas: 'absolute inset-0 w-full h-full block pointer-events-none z-2 [background:transparent]',
  canvasHidden: 'invisible',
  viewport: 'relative z-1 h-full overflow-hidden cursor-grab active:cursor-grabbing',
  track: 'flex h-full [touch-action:pan-y_pinch-zoom]',
  controls:
    'absolute bottom-[32px] right-[32px] z-4 flex items-center gap-[18px] font-medium text-[13px] leading-[normal] [font-family:system-ui,_sans-serif]',
  arrow:
    'w-[44px] h-[44px] [border:1px_solid_rgba(255,_255,_255,_0.6)] bg-[rgba(5,_18,_34,_0.35)] text-[white] rounded-[50%] cursor-pointer disabled:cursor-default text-[20px] opacity-100 disabled:opacity-[0.3]',
};

export const CarouselOGL = () => {
  const slides = useCarousel((state) => state.slides);
  const { emblaRef, canvasRef, hostRef, canvasReady } = useOGLCarousel({
    intensity: 1.4,
  });
  return (
    <section
      className={styles.root}
      aria-label='Pattinaggio artistico San Domenico Savio'
      aria-roledescription='carousel'
      ref={hostRef}
    >
      <canvas
        className={[styles.canvas, !canvasReady && styles.canvasHidden].filter(Boolean).join(' ')}
        ref={canvasRef}
        aria-hidden='true'
      />
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.track}>
          {slides.map((slide, index) => (
            <Slide slide={slide} index={index} key={slide.id} />
          ))}
        </div>
      </div>
      <WaveDivider />
      <Controls />
    </section>
  );
};
