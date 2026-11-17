import { useBasicCarousel } from './use-basic-carousel';
import { useEffect, useRef, useState } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';
import { vertex, fragment } from '../lib/ogl';
import type { UseOGLCarouselProps } from '../model/types';
import { useCarousel } from './use-carousel';

export const useOGLCarousel = ({ intensity = 1.4 }: UseOGLCarouselProps) => {
  const slides = useCarousel((state) => state.slides);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hostRef = useRef<HTMLElement>(null);
  const [canvasReady, setCanvasReady] = useState(false);

  const { viewportRef: emblaRef, emblaApi } = useBasicCarousel();

  useEffect(() => {
    if (!emblaApi || !canvasRef.current || !hostRef.current || !slides.length) return;
    const host = hostRef.current;
    setCanvasReady(false);
    const renderer = new Renderer({
      canvas: canvasRef.current,
      dpr: Math.min(window.devicePixelRatio || 1, 2),
      alpha: true,
      premultipliedAlpha: false,
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uProgress: { value: 0 },
        uDirection: { value: 1 },
        uIntensity: { value: intensity },
      },
    });
    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });
    const render = () => {
      if (!gl.isContextLost()) renderer.render({ scene: mesh });
    };
    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      renderer.setSize(Math.max(1, width), Math.max(1, height));
      render();
    };
    const observer = new ResizeObserver(resize);

    const onScroll = () => {
      const snaps = emblaApi.scrollSnapList();
      const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
      if (snaps.length < 2) {
        program.uniforms.uProgress.value = 0;
        render();
        return;
      }
      let left = 0;
      for (let i = 0; i < snaps.length - 1; i++) {
        if (progress >= snaps[i] - 0.00001) left = i;
      }
      left = Math.min(left, slides.length - 2);
      const range = snaps[left + 1] - snaps[left];
      const local = range > 0 ? Math.max(0, Math.min(1, (progress - snaps[left]) / range)) : 0;
      program.uniforms.uProgress.value = local;
      program.uniforms.uDirection.value = 1;
      render();
    };

    emblaApi.on('scroll', onScroll);
    emblaApi.on('reInit', onScroll);

    observer.observe(host);
    resize();
    onScroll();
    setCanvasReady(true);

    return () => {
      observer.disconnect();
      emblaApi.off('scroll', onScroll);
      emblaApi.off('reInit', onScroll);
      mesh.geometry.remove();
      program.remove();
    };
  }, [emblaApi, slides, intensity]);
  return {
    emblaRef,
    canvasRef,
    hostRef,
    emblaApi,
    canvasReady,
  };
};
