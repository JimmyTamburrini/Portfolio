export const orbVertex = /* glsl */ `
uniform float uTime; varying vec3 vNormalW; varying vec3 vPositionW; varying float vFlow;
float wave(vec3 p){ return sin(p.x*3.2+uTime*.55)*sin(p.y*2.7-uTime*.4)*sin(p.z*3.5+uTime*.3); }
void main(){ vFlow=wave(position); vec3 displaced=position+normal*vFlow*.08; vec4 world=modelMatrix*vec4(displaced,1.); vPositionW=world.xyz; vNormalW=normalize(mat3(modelMatrix)*normal); gl_Position=projectionMatrix*viewMatrix*world; }
`;
export const orbFragment = /* glsl */ `
uniform float uTime; uniform float uReveal; varying vec3 vNormalW; varying vec3 vPositionW; varying float vFlow;
void main(){ vec3 viewDir=normalize(cameraPosition-vPositionW); float fresnel=pow(1.-max(dot(viewDir,normalize(vNormalW)),0.),2.3); float band=sin(vPositionW.y*4.8+vPositionW.x*2.2+uTime*.35)*.5+.5; vec3 cyan=vec3(.05,.72,1.); vec3 violet=vec3(.48,.14,1.); vec3 magenta=vec3(1.,.08,.55); vec3 color=mix(cyan,violet,band); color=mix(color,magenta,smoothstep(.25,1.,vFlow)); color+=fresnel*vec3(.28,.9,1.)*1.5; float alpha=(.76+fresnel*.22)*uReveal; gl_FragColor=vec4(color,alpha); }
`;
