export const vertex = `attribute vec2 position; attribute vec2 uv; varying vec2 vUv;
void main(){vUv=uv;gl_Position=vec4(position,0.,1.);}`;

export const fragment = `
precision highp float;
varying vec2 vUv;
uniform float uProgress;
uniform float uDirection;
uniform float uIntensity;
float curve(float x) {
  return 0.5 + 0.16*sin(x*5.8-0.8) + 0.055*sin(x*12.0+0.5);
}
void main(){
  vec2 uv=vUv;
  float p=clamp(uProgress,0.,1.);
  float x=uDirection>0. ? uv.x : 1.-uv.x;
  float head=mix(-0.15,1.16,p);
  float y=curve(x);
  float slope=0.16*5.8*cos(x*5.8-0.8)+0.055*12.0*cos(x*12.0+0.5);
  float dist=abs(uv.y-y)/sqrt(1.+slope*slope);
  float thickness=(0.006+0.007*pow(sin(x*9.+0.5),2.))*uIntensity;
  float signedDistance=dist/max(thickness,0.0001);
  float front=head-x;
  // Golden stroke is localized around the advancing transition front.
  float longitudinal=exp(-pow(front/0.095,2.));
  float core=1.-smoothstep(0.55,1.15,signedDistance);
  float halo=exp(-signedDistance*0.62);
  float visible=smoothstep(0.0,0.06,p)*(1.-smoothstep(0.94,1.0,p));
  float trail=longitudinal*visible;
  float haloWeight=halo*0.6;
  float coreWeight=core*0.8;
  float highlightWeight=pow(core,3.)*0.6;
  float weight=haloWeight+coreWeight+highlightWeight;
  vec3 color=(vec3(0.68,0.34,0.055)*haloWeight
    +vec3(1.0,0.65,0.17)*coreWeight
    +vec3(1.0,0.92,0.57)*highlightWeight)/max(weight,0.0001);
  gl_FragColor=vec4(color,clamp(weight*trail,0.,1.));
}`;
