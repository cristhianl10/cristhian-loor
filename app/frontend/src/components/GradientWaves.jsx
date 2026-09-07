import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

export default function GradientWaves({ horizonColor = '#03e198', waveColor = '#FF9FFC', crestColor = '#FFFFFF', speed = 0.4, amplitude = 2.5, waveScale = 0.6, waveRatio = 0.9, swell = 35, turbulence = 20, tilt = 1.11, zoom = 1, height = 5.5, fogDepth = 15, detail = 'medium', brightness = 1, opacity = 1, grain = true, grainIntensity = 0.05, mouseInteraction = true, parallaxStrength = 0.5 }) {
  const canvasRef = useRef(null);
  const propsRef = useRef({ horizonColor, waveColor, crestColor, speed, amplitude, waveScale, waveRatio, swell, turbulence, tilt, zoom, height, fogDepth, detail, brightness, opacity, grain, grainIntensity, mouseInteraction, parallaxStrength });
  useEffect(() => { propsRef.current = { horizonColor, waveColor, crestColor, speed, amplitude, waveScale, waveRatio, swell, turbulence, tilt, zoom, height, fogDepth, detail, brightness, opacity, grain, grainIntensity, mouseInteraction, parallaxStrength }; });
  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new Renderer({ canvas, alpha: true, dpr: Math.min(window.devicePixelRatio, 2) });
    const gl = renderer.gl;
    const geometry = new Triangle(gl);
    const hex = (value) => { const n = parseInt(value.replace('#', ''), 16); return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255]; };
    const program = new Program(gl, { vertex: 'attribute vec2 uv; attribute vec2 position; varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position,0.,1.);}', fragment: `precision highp float; uniform float uTime,uSpeed,uAmplitude,uScale,uRatio,uSwell,uTurbulence,uTilt,uZoom,uHeight,uFog,uBrightness,uOpacity,uGrain,uGrainIntensity; uniform vec2 uMouse; uniform vec3 uHorizon,uWave,uCrest; varying vec2 vUv; float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);} float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.)),f.x),f.y);} void main(){vec2 uv=(vUv-.5)*uZoom;uv.x+=uMouse.x*.04;float t=uTime*uSpeed*.001;float wave=sin((uv.x+sin(uv.y*3.+t)*uTurbulence*.003)*uSwell+uv.y*uTilt*4.-t*4.)*uAmplitude*.04;float line=smoothstep(.045,.0,abs(uv.y-wave));float bands=smoothstep(.8,.15,abs(uv.y-wave));float grain=noise(uv*180.+t*4.)*uGrainIntensity*uGrain;vec3 col=mix(uHorizon,uWave,smoothstep(-.5,.5,uv.y+wave));col=mix(col,uCrest,line*.9);col*=uBrightness;col+=grain;float fog=smoothstep(uFog*.04,0.,abs(uv.y));gl_FragColor=vec4(col*(.7+bands*.3+fog*.15),uOpacity);}` , uniforms: { uTime:{value:0}, uSpeed:{value:speed}, uAmplitude:{value:amplitude}, uScale:{value:waveScale}, uRatio:{value:waveRatio}, uSwell:{value:swell}, uTurbulence:{value:turbulence}, uTilt:{value:tilt}, uZoom:{value:zoom}, uHeight:{value:height}, uFog:{value:fogDepth}, uBrightness:{value:brightness}, uOpacity:{value:opacity}, uGrain:{value:grain ? 1 : 0}, uGrainIntensity:{value:grainIntensity}, uMouse:{value:[0,0]}, uHorizon:{value:hex(horizonColor)}, uWave:{value:hex(waveColor)}, uCrest:{value:hex(crestColor)} } });
    const mesh = new Mesh(gl, { geometry, program });
    const resize = () => renderer.setSize(canvas.clientWidth || innerWidth, canvas.clientHeight || innerHeight);
    const move = (event) => { if (propsRef.current.mouseInteraction) program.uniforms.uMouse.value = [event.clientX / innerWidth - .5, event.clientY / innerHeight - .5]; };
    let frameId; const frame = (time) => { program.uniforms.uTime.value = time; renderer.render({ scene: mesh }); frameId = requestAnimationFrame(frame); };
    resize(); addEventListener('resize', resize); addEventListener('pointermove', move); frameId = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(frameId); removeEventListener('resize', resize); removeEventListener('pointermove', move); };
  }, []);
  return <canvas ref={canvasRef} className="gradient-waves" aria-hidden="true" />;
}
