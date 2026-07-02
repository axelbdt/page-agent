(function() {	try {		if (typeof document != "undefined") {			var elementStyle = document.createElement("style");			elementStyle.appendChild(document.createTextNode("._wrapper_1ooyb_1 {\n	position: fixed;\n	inset: 0;\n	z-index: 2147483641; /* 确保在所有元素之上，除了 panel */\n	cursor: wait;\n	overflow: hidden;\n\n	display: none;\n}\n\n._wrapper_1ooyb_1._visible_1ooyb_11 {\n	display: block;\n}\n/* AI 光标样式 */\n._cursor_1dgwb_2 {\n	position: absolute;\n	width: var(--cursor-size, 75px);\n	height: var(--cursor-size, 75px);\n	pointer-events: none;\n	z-index: 10000;\n}\n\n._cursorBorder_1dgwb_10 {\n	position: absolute;\n	width: 100%;\n	height: 100%;\n	background: linear-gradient(45deg, rgb(57, 182, 255), rgb(189, 69, 251));\n	mask-image: url(\"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%20fill='none'%3e%3cg%3e%3cpath%20d='M%2015%2042%20L%2015%2036.99%20Q%2015%2031.99%2023.7%2031.99%20L%2028.05%2031.99%20Q%2032.41%2031.99%2032.41%2021.99%20L%2032.41%2017%20Q%2032.41%2012%2041.09%2016.95%20L%2076.31%2037.05%20Q%2085%2042%2076.31%2046.95%20L%2041.09%2067.05%20Q%2032.41%2072%2032.41%2062.01%20L%2032.41%2057.01%20Q%2032.41%2052.01%2023.7%2052.01%20L%2019.35%2052.01%20Q%2015%2052.01%2015%2047.01%20Z'%20fill='none'%20stroke='%23000000'%20stroke-width='6'%20stroke-miterlimit='10'%20style='stroke:%20light-dark(rgb(0,%200,%200),%20rgb(255,%20255,%20255));'/%3e%3c/g%3e%3c/svg%3e\");\n	mask-size: 100% 100%;\n	mask-repeat: no-repeat;\n\n	transform-origin: center;\n	transform: rotate(-135deg) scale(1.2);\n	margin-left: -10px;\n	margin-top: -18px;\n}\n\n._cursorFilling_1dgwb_25 {\n	position: absolute;\n	width: 100%;\n	height: 100%;\n	background: url(\"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3e%3cdefs%3e%3c/defs%3e%3cg%20xmlns='http://www.w3.org/2000/svg'%20style='filter:%20drop-shadow(light-dark(rgba(0,%200,%200,%200.4),%20rgba(237,%20237,%20237,%200.4))%203px%204px%204px);'%3e%3cpath%20d='M%2015%2042%20L%2015%2036.99%20Q%2015%2031.99%2023.7%2031.99%20L%2028.05%2031.99%20Q%2032.41%2031.99%2032.41%2021.99%20L%2032.41%2017%20Q%2032.41%2012%2041.09%2016.95%20L%2076.31%2037.05%20Q%2085%2042%2076.31%2046.95%20L%2041.09%2067.05%20Q%2032.41%2072%2032.41%2062.01%20L%2032.41%2057.01%20Q%2032.41%2052.01%2023.7%2052.01%20L%2019.35%2052.01%20Q%2015%2052.01%2015%2047.01%20Z'%20fill='%23ffffff'%20stroke='none'%20style='fill:%20%23ffffff;'/%3e%3c/g%3e%3c/svg%3e\");\n	background-size: 100% 100%;\n	background-repeat: no-repeat;\n\n	transform-origin: center;\n	transform: rotate(-135deg) scale(1.2);\n	margin-left: -10px;\n	margin-top: -18px;\n}\n\n._cursorRipple_1dgwb_39 {\n	position: absolute;\n	width: 100%;\n	height: 100%;\n	pointer-events: none;\n	margin-left: -50%;\n	margin-top: -50%;\n\n	&::after {\n		content: '';\n		opacity: 0;\n		position: absolute;\n		inset: 0;\n		border: 4px solid rgba(57, 182, 255, 1);\n		border-radius: 50%;\n	}\n}\n\n._cursor_1dgwb_2._clicking_1dgwb_57 ._cursorRipple_1dgwb_39::after {\n	animation: _cursor-ripple_1dgwb_1 300ms ease-out forwards;\n}\n\n@keyframes _cursor-ripple_1dgwb_1 {\n	0% {\n		transform: scale(0);\n		opacity: 1;\n	}\n	100% {\n		transform: scale(2);\n		opacity: 0;\n	}\n}"));			document.head.appendChild(elementStyle);		}	} catch (e) {		console.error("vite-plugin-css-injected-by-js", e);	}})();
(function() {	try {		if (typeof document != "undefined") {			var elementStyle = document.createElement("style");			elementStyle.appendChild(document.createTextNode("._wrapper_1ooyb_1 {\n	position: fixed;\n	inset: 0;\n	z-index: 2147483641; /* 确保在所有元素之上，除了 panel */\n	cursor: wait;\n	overflow: hidden;\n\n	display: none;\n}\n\n._wrapper_1ooyb_1._visible_1ooyb_11 {\n	display: block;\n}\n/* AI 光标样式 */\n._cursor_1dgwb_2 {\n	position: absolute;\n	width: var(--cursor-size, 75px);\n	height: var(--cursor-size, 75px);\n	pointer-events: none;\n	z-index: 10000;\n}\n\n._cursorBorder_1dgwb_10 {\n	position: absolute;\n	width: 100%;\n	height: 100%;\n	background: linear-gradient(45deg, rgb(57, 182, 255), rgb(189, 69, 251));\n	mask-image: url(\"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%20fill='none'%3e%3cg%3e%3cpath%20d='M%2015%2042%20L%2015%2036.99%20Q%2015%2031.99%2023.7%2031.99%20L%2028.05%2031.99%20Q%2032.41%2031.99%2032.41%2021.99%20L%2032.41%2017%20Q%2032.41%2012%2041.09%2016.95%20L%2076.31%2037.05%20Q%2085%2042%2076.31%2046.95%20L%2041.09%2067.05%20Q%2032.41%2072%2032.41%2062.01%20L%2032.41%2057.01%20Q%2032.41%2052.01%2023.7%2052.01%20L%2019.35%2052.01%20Q%2015%2052.01%2015%2047.01%20Z'%20fill='none'%20stroke='%23000000'%20stroke-width='6'%20stroke-miterlimit='10'%20style='stroke:%20light-dark(rgb(0,%200,%200),%20rgb(255,%20255,%20255));'/%3e%3c/g%3e%3c/svg%3e\");\n	mask-size: 100% 100%;\n	mask-repeat: no-repeat;\n\n	transform-origin: center;\n	transform: rotate(-135deg) scale(1.2);\n	margin-left: -10px;\n	margin-top: -18px;\n}\n\n._cursorFilling_1dgwb_25 {\n	position: absolute;\n	width: 100%;\n	height: 100%;\n	background: url(\"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3e%3cdefs%3e%3c/defs%3e%3cg%20xmlns='http://www.w3.org/2000/svg'%20style='filter:%20drop-shadow(light-dark(rgba(0,%200,%200,%200.4),%20rgba(237,%20237,%20237,%200.4))%203px%204px%204px);'%3e%3cpath%20d='M%2015%2042%20L%2015%2036.99%20Q%2015%2031.99%2023.7%2031.99%20L%2028.05%2031.99%20Q%2032.41%2031.99%2032.41%2021.99%20L%2032.41%2017%20Q%2032.41%2012%2041.09%2016.95%20L%2076.31%2037.05%20Q%2085%2042%2076.31%2046.95%20L%2041.09%2067.05%20Q%2032.41%2072%2032.41%2062.01%20L%2032.41%2057.01%20Q%2032.41%2052.01%2023.7%2052.01%20L%2019.35%2052.01%20Q%2015%2052.01%2015%2047.01%20Z'%20fill='%23ffffff'%20stroke='none'%20style='fill:%20%23ffffff;'/%3e%3c/g%3e%3c/svg%3e\");\n	background-size: 100% 100%;\n	background-repeat: no-repeat;\n\n	transform-origin: center;\n	transform: rotate(-135deg) scale(1.2);\n	margin-left: -10px;\n	margin-top: -18px;\n}\n\n._cursorRipple_1dgwb_39 {\n	position: absolute;\n	width: 100%;\n	height: 100%;\n	pointer-events: none;\n	margin-left: -50%;\n	margin-top: -50%;\n\n	&::after {\n		content: '';\n		opacity: 0;\n		position: absolute;\n		inset: 0;\n		border: 4px solid rgba(57, 182, 255, 1);\n		border-radius: 50%;\n	}\n}\n\n._cursor_1dgwb_2._clicking_1dgwb_57 ._cursorRipple_1dgwb_39::after {\n	animation: _cursor-ripple_1dgwb_1 300ms ease-out forwards;\n}\n\n@keyframes _cursor-ripple_1dgwb_1 {\n	0% {\n		transform: scale(0);\n		opacity: 1;\n	}\n	100% {\n		transform: scale(2);\n		opacity: 0;\n	}\n}"));			document.head.appendChild(elementStyle);		}	} catch (e) {		console.error("vite-plugin-css-injected-by-js", e);	}})();
//#region ../../node_modules/ai-motion/build/Motion.js
/**
* AI Motion - WebGL2 animated border with AI-style glow effects
*
* @author Simon<gaomeng1900@gmail.com>
* @license MIT
* @repository https://github.com/gaomeng1900/ai-motion
*/
function computeBorderGeometry(pixelWidth, pixelHeight, borderWidth, glowWidth) {
	const shortSide = Math.max(1, Math.min(pixelWidth, pixelHeight));
	const totalThick = Math.min(Math.min(borderWidth, 20) + glowWidth, shortSide);
	const insetX = Math.min(totalThick, Math.floor(pixelWidth / 2));
	const insetY = Math.min(totalThick, Math.floor(pixelHeight / 2));
	const toClipX = (x) => x / pixelWidth * 2 - 1;
	const toClipY = (y) => y / pixelHeight * 2 - 1;
	const x0 = 0;
	const x1 = pixelWidth;
	const y0 = 0;
	const y1 = pixelHeight;
	const xi0 = insetX;
	const xi1 = pixelWidth - insetX;
	const yi0 = insetY;
	const yi1 = pixelHeight - insetY;
	const X0 = toClipX(x0);
	const X1 = toClipX(x1);
	const Y0 = toClipY(y0);
	const Y1 = toClipY(y1);
	const Xi0 = toClipX(xi0);
	const Xi1 = toClipX(xi1);
	const Yi0 = toClipY(yi0);
	const Yi1 = toClipY(yi1);
	const u0 = 0;
	const v0 = 0;
	const u1 = 1;
	const v1 = 1;
	const ui0 = insetX / pixelWidth;
	const ui1 = 1 - insetX / pixelWidth;
	const vi0 = insetY / pixelHeight;
	const vi1 = 1 - insetY / pixelHeight;
	return {
		positions: new Float32Array([
			X0,
			Y0,
			X1,
			Y0,
			X0,
			Yi0,
			X0,
			Yi0,
			X1,
			Y0,
			X1,
			Yi0,
			X0,
			Yi1,
			X1,
			Yi1,
			X0,
			Y1,
			X0,
			Y1,
			X1,
			Yi1,
			X1,
			Y1,
			X0,
			Yi0,
			Xi0,
			Yi0,
			X0,
			Yi1,
			X0,
			Yi1,
			Xi0,
			Yi0,
			Xi0,
			Yi1,
			Xi1,
			Yi0,
			X1,
			Yi0,
			Xi1,
			Yi1,
			Xi1,
			Yi1,
			X1,
			Yi0,
			X1,
			Yi1
		]),
		uvs: new Float32Array([
			u0,
			v0,
			u1,
			v0,
			u0,
			vi0,
			u0,
			vi0,
			u1,
			v0,
			u1,
			vi0,
			u0,
			vi1,
			u1,
			vi1,
			u0,
			v1,
			u0,
			v1,
			u1,
			vi1,
			u1,
			v1,
			u0,
			vi0,
			ui0,
			vi0,
			u0,
			vi1,
			u0,
			vi1,
			ui0,
			vi0,
			ui0,
			vi1,
			ui1,
			vi0,
			u1,
			vi0,
			ui1,
			vi1,
			ui1,
			vi1,
			u1,
			vi0,
			u1,
			vi1
		])
	};
}
/**
* AI Motion - WebGL2 animated border with AI-style glow effects
*
* @author Simon<gaomeng1900@gmail.com>
* @license MIT
* @repository https://github.com/gaomeng1900/ai-motion
*/
function compileShader(gl, type, source) {
	const shader = gl.createShader(type);
	if (!shader) throw new Error("Failed to create shader");
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		const info = gl.getShaderInfoLog(shader) || "Unknown shader error";
		gl.deleteShader(shader);
		throw new Error(info);
	}
	return shader;
}
function createProgram(gl, vertexSource, fragmentSource) {
	const vs = compileShader(gl, gl.VERTEX_SHADER, vertexSource);
	const fs = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
	const program = gl.createProgram();
	if (!program) throw new Error("Failed to create program");
	gl.attachShader(program, vs);
	gl.attachShader(program, fs);
	gl.linkProgram(program);
	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		const info = gl.getProgramInfoLog(program) || "Unknown link error";
		gl.deleteProgram(program);
		gl.deleteShader(vs);
		gl.deleteShader(fs);
		throw new Error(info);
	}
	gl.deleteShader(vs);
	gl.deleteShader(fs);
	return program;
}
var fragmentShaderSource = `#version 300 es
precision lowp float;
in vec2 vUV;
out vec4 outColor;
uniform vec2 uResolution;
uniform float uTime;
uniform float uBorderWidth;
uniform float uGlowWidth;
uniform float uBorderRadius;
uniform vec3 uColors[4];
uniform float uGlowExponent;
uniform float uGlowFactor;
const float PI = 3.14159265359;
const float TWO_PI = 2.0 * PI;
const float HALF_PI = 0.5 * PI;
const vec4 startPositions = vec4(0.0, PI, HALF_PI, 1.5 * PI);
const vec4 speeds = vec4(-1.9, -1.9, -1.5, 2.1);
const vec4 innerRadius = vec4(PI * 0.8, PI * 0.7, PI * 0.3, PI * 0.1);
const vec4 outerRadius = vec4(PI * 1.2, PI * 0.9, PI * 0.6, PI * 0.4);
float random(vec2 st) {
return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}
vec2 random2(vec2 st) {
return vec2(random(st), random(st + 1.0));
}
float aaStep(float edge, float d) {
float width = fwidth(d);
return smoothstep(edge - width * 0.5, edge + width * 0.5, d);
}
float aaFract(float x) {
float f = fract(x);
float w = fwidth(x);
float smooth_f = f * (1.0 - smoothstep(1.0 - w, 1.0, f));
return smooth_f;
}
float sdRoundedBox(in vec2 p, in vec2 b, in float r) {
vec2 q = abs(p) - b + r;
return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}
float getInnerGlow(vec2 p, vec2 b, float radius) {
float dist_x = b.x - abs(p.x);
float dist_y = b.y - abs(p.y);
float glow_x = smoothstep(radius, 0.0, dist_x);
float glow_y = smoothstep(radius, 0.0, dist_y);
return 1.0 - (1.0 - glow_x) * (1.0 - glow_y);
}
float getVignette(vec2 uv) {
vec2 vignetteUv = uv;
vignetteUv = vignetteUv * (1.0 - vignetteUv);
float vignette = vignetteUv.x * vignetteUv.y * 25.0;
vignette = pow(vignette, 0.16);
vignette = 1.0 - vignette;
return vignette;
}
float uvToAngle(vec2 uv) {
vec2 center = vec2(0.5);
vec2 dir = uv - center;
return atan(dir.y, dir.x) + PI;
}
void main() {
vec2 uv = vUV;
vec2 pos = uv * uResolution;
vec2 centeredPos = pos - uResolution * 0.5;
vec2 size = uResolution - uBorderWidth;
vec2 halfSize = size * 0.5;
float dBorderBox = sdRoundedBox(centeredPos, halfSize, uBorderRadius);
float border = aaStep(0.0, dBorderBox);
float glow = getInnerGlow(centeredPos, halfSize, uGlowWidth);
float vignette = getVignette(uv);
glow *= vignette;
float posAngle = uvToAngle(uv);
vec4 lightCenter = mod(startPositions + speeds * uTime, TWO_PI);
vec4 angleDist = abs(posAngle - lightCenter);
vec4 disToLight = min(angleDist, TWO_PI - angleDist) / TWO_PI;
float intensityBorder[4];
intensityBorder[0] = 1.0;
intensityBorder[1] = smoothstep(0.4, 0.0, disToLight.y);
intensityBorder[2] = smoothstep(0.4, 0.0, disToLight.z);
intensityBorder[3] = smoothstep(0.2, 0.0, disToLight.w) * 0.5;
vec3 borderColor = vec3(0.0);
for(int i = 0; i < 4; i++) {
borderColor = mix(borderColor, uColors[i], intensityBorder[i]);
}
borderColor *= 1.1;
borderColor = clamp(borderColor, 0.0, 1.0);
float intensityGlow[4];
intensityGlow[0] = smoothstep(0.9, 0.0, disToLight.x);
intensityGlow[1] = smoothstep(0.7, 0.0, disToLight.y);
intensityGlow[2] = smoothstep(0.4, 0.0, disToLight.z);
intensityGlow[3] = smoothstep(0.1, 0.0, disToLight.w) * 0.7;
vec4 breath = smoothstep(0.0, 1.0, sin(uTime * 1.0 + startPositions * PI) * 0.2 + 0.8);
vec3 glowColor = vec3(0.0);
glowColor += uColors[0] * intensityGlow[0] * breath.x;
glowColor += uColors[1] * intensityGlow[1] * breath.y;
glowColor += uColors[2] * intensityGlow[2] * breath.z;
glowColor += uColors[3] * intensityGlow[3] * breath.w * glow;
glow = pow(glow, uGlowExponent);
glow *= random(pos + uTime) * 0.1 + 1.0;
glowColor *= glow * uGlowFactor;
glowColor = clamp(glowColor, 0.0, 1.0);
vec3 color = mix(glowColor, borderColor + glowColor * 0.2, border);
float alpha = mix(glow, 1.0, border);
outColor = vec4(color, alpha);
}`;
var vertexShaderSource = `#version 300 es
in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
void main() {
vUV = aUV;
gl_Position = vec4(aPosition, 0.0, 1.0);
}`;
/**
* AI Motion - WebGL2 animated border with AI-style glow effects
*
* @author Simon<gaomeng1900@gmail.com>
* @license MIT
* @repository https://github.com/gaomeng1900/ai-motion
*/
var DEFAULT_COLORS = [
	"rgb(57, 182, 255)",
	"rgb(189, 69, 251)",
	"rgb(255, 87, 51)",
	"rgb(255, 214, 0)"
];
function parseColor(colorStr) {
	const match = colorStr.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
	if (!match) throw new Error(`Invalid color format: ${colorStr}`);
	const [, r, g, b] = match;
	return [
		parseInt(r) / 255,
		parseInt(g) / 255,
		parseInt(b) / 255
	];
}
var Motion = class {
	element;
	canvas;
	options;
	running = false;
	disposed = false;
	startTime = 0;
	lastTime = 0;
	rafId = null;
	glr;
	observer;
	constructor(options = {}) {
		this.options = {
			width: options.width ?? 600,
			height: options.height ?? 600,
			ratio: options.ratio ?? window.devicePixelRatio ?? 1,
			borderWidth: options.borderWidth ?? 8,
			glowWidth: options.glowWidth ?? 200,
			borderRadius: options.borderRadius ?? 8,
			mode: options.mode ?? "light",
			...options
		};
		this.canvas = document.createElement("canvas");
		if (this.options.classNames) this.canvas.className = this.options.classNames;
		if (this.options.styles) Object.assign(this.canvas.style, this.options.styles);
		this.canvas.style.display = "block";
		this.canvas.style.transformOrigin = "center";
		this.canvas.style.pointerEvents = "none";
		this.element = this.canvas;
		this.setupGL();
		if (!this.options.skipGreeting) this.greet();
	}
	start() {
		if (this.disposed) throw new Error("Motion instance has been disposed.");
		if (this.running) return;
		if (!this.glr) {
			console.error("WebGL resources are not initialized.");
			return;
		}
		this.running = true;
		this.startTime = performance.now();
		this.resize(this.options.width ?? 600, this.options.height ?? 600, this.options.ratio);
		this.glr.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
		this.glr.gl.useProgram(this.glr.program);
		this.glr.gl.uniform2f(this.glr.uResolution, this.canvas.width, this.canvas.height);
		this.checkGLError(this.glr.gl, "start: after initial setup");
		const loop = () => {
			if (!this.running || !this.glr) return;
			this.rafId = requestAnimationFrame(loop);
			const now = performance.now();
			if (now - this.lastTime < 1e3 / 32) return;
			this.lastTime = now;
			const t = (now - this.startTime) * .001;
			this.render(t);
		};
		this.rafId = requestAnimationFrame(loop);
	}
	pause() {
		if (this.disposed) throw new Error("Motion instance has been disposed.");
		this.running = false;
		if (this.rafId !== null) cancelAnimationFrame(this.rafId);
	}
	dispose() {
		if (this.disposed) return;
		this.disposed = true;
		this.running = false;
		if (this.rafId !== null) cancelAnimationFrame(this.rafId);
		const { gl, vao, positionBuffer, uvBuffer, program } = this.glr;
		if (vao) gl.deleteVertexArray(vao);
		if (positionBuffer) gl.deleteBuffer(positionBuffer);
		if (uvBuffer) gl.deleteBuffer(uvBuffer);
		gl.deleteProgram(program);
		if (this.observer) this.observer.disconnect();
		this.canvas.remove();
	}
	resize(width, height, ratio) {
		if (this.disposed) throw new Error("Motion instance has been disposed.");
		this.options.width = width;
		this.options.height = height;
		if (ratio) this.options.ratio = ratio;
		if (!this.running) return;
		const { gl, program, vao, positionBuffer, uvBuffer, uResolution } = this.glr;
		const dpr = ratio ?? this.options.ratio ?? window.devicePixelRatio ?? 1;
		const desiredWidth = Math.max(1, Math.floor(width * dpr));
		const desiredHeight = Math.max(1, Math.floor(height * dpr));
		this.canvas.style.width = `${width}px`;
		this.canvas.style.height = `${height}px`;
		if (this.canvas.width !== desiredWidth || this.canvas.height !== desiredHeight) {
			this.canvas.width = desiredWidth;
			this.canvas.height = desiredHeight;
		}
		gl.viewport(0, 0, this.canvas.width, this.canvas.height);
		this.checkGLError(gl, "resize: after viewport setup");
		const { positions, uvs } = computeBorderGeometry(this.canvas.width, this.canvas.height, this.options.borderWidth * dpr, this.options.glowWidth * dpr);
		gl.bindVertexArray(vao);
		gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
		const aPosition = gl.getAttribLocation(program, "aPosition");
		gl.enableVertexAttribArray(aPosition);
		gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
		this.checkGLError(gl, "resize: after position buffer update");
		gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW);
		const aUV = gl.getAttribLocation(program, "aUV");
		gl.enableVertexAttribArray(aUV);
		gl.vertexAttribPointer(aUV, 2, gl.FLOAT, false, 0, 0);
		this.checkGLError(gl, "resize: after UV buffer update");
		gl.useProgram(program);
		gl.uniform2f(uResolution, this.canvas.width, this.canvas.height);
		gl.uniform1f(this.glr.uBorderWidth, this.options.borderWidth * dpr);
		gl.uniform1f(this.glr.uGlowWidth, this.options.glowWidth * dpr);
		gl.uniform1f(this.glr.uBorderRadius, this.options.borderRadius * dpr);
		this.checkGLError(gl, "resize: after uniform updates");
		const now = performance.now();
		this.lastTime = now;
		const t = (now - this.startTime) * .001;
		this.render(t);
	}
	/**
	* Automatically resizes the canvas to match the dimensions of the given element.
	* @note using ResizeObserver
	*/
	autoResize(sourceElement) {
		if (this.observer) this.observer.disconnect();
		this.observer = new ResizeObserver(() => {
			const rect = sourceElement.getBoundingClientRect();
			this.resize(rect.width, rect.height);
		});
		this.observer.observe(sourceElement);
	}
	fadeIn() {
		if (this.disposed) throw new Error("Motion instance has been disposed.");
		return new Promise((resolve, reject) => {
			const animation = this.canvas.animate([{
				opacity: 0,
				transform: "scale(1.2)"
			}, {
				opacity: 1,
				transform: "scale(1)"
			}], {
				duration: 300,
				easing: "ease-out",
				fill: "forwards"
			});
			animation.onfinish = () => resolve();
			animation.oncancel = () => reject("canceled");
		});
	}
	fadeOut() {
		if (this.disposed) throw new Error("Motion instance has been disposed.");
		return new Promise((resolve, reject) => {
			const animation = this.canvas.animate([{
				opacity: 1,
				transform: "scale(1)"
			}, {
				opacity: 0,
				transform: "scale(1.2)"
			}], {
				duration: 300,
				easing: "ease-in",
				fill: "forwards"
			});
			animation.onfinish = () => resolve();
			animation.oncancel = () => reject("canceled");
		});
	}
	checkGLError(gl, context) {
		let error = gl.getError();
		if (error !== gl.NO_ERROR) {
			console.group(`🔴 WebGL Error in ${context}`);
			while (error !== gl.NO_ERROR) {
				const errorName = this.getGLErrorName(gl, error);
				console.error(`${errorName} (0x${error.toString(16)})`);
				error = gl.getError();
			}
			console.groupEnd();
		}
	}
	getGLErrorName(gl, error) {
		switch (error) {
			case gl.INVALID_ENUM: return "INVALID_ENUM";
			case gl.INVALID_VALUE: return "INVALID_VALUE";
			case gl.INVALID_OPERATION: return "INVALID_OPERATION";
			case gl.INVALID_FRAMEBUFFER_OPERATION: return "INVALID_FRAMEBUFFER_OPERATION";
			case gl.OUT_OF_MEMORY: return "OUT_OF_MEMORY";
			case gl.CONTEXT_LOST_WEBGL: return "CONTEXT_LOST_WEBGL";
			default: return "UNKNOWN_ERROR";
		}
	}
	setupGL() {
		const gl = this.canvas.getContext("webgl2", {
			antialias: false,
			alpha: true
		});
		if (!gl) throw new Error("WebGL2 is required but not available.");
		const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
		this.checkGLError(gl, "setupGL: after createProgram");
		const vao = gl.createVertexArray();
		gl.bindVertexArray(vao);
		this.checkGLError(gl, "setupGL: after VAO creation");
		const { positions, uvs } = computeBorderGeometry(this.canvas.width || 2, this.canvas.height || 2, this.options.borderWidth, this.options.glowWidth);
		const positionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
		const aPosition = gl.getAttribLocation(program, "aPosition");
		gl.enableVertexAttribArray(aPosition);
		gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
		this.checkGLError(gl, "setupGL: after position buffer setup");
		const uvBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW);
		const aUV = gl.getAttribLocation(program, "aUV");
		gl.enableVertexAttribArray(aUV);
		gl.vertexAttribPointer(aUV, 2, gl.FLOAT, false, 0, 0);
		this.checkGLError(gl, "setupGL: after UV buffer setup");
		const uResolution = gl.getUniformLocation(program, "uResolution");
		const uTime = gl.getUniformLocation(program, "uTime");
		const uBorderWidth = gl.getUniformLocation(program, "uBorderWidth");
		const uGlowWidth = gl.getUniformLocation(program, "uGlowWidth");
		const uBorderRadius = gl.getUniformLocation(program, "uBorderRadius");
		const uColors = gl.getUniformLocation(program, "uColors");
		const uGlowExponent = gl.getUniformLocation(program, "uGlowExponent");
		const uGlowFactor = gl.getUniformLocation(program, "uGlowFactor");
		gl.useProgram(program);
		gl.uniform1f(uBorderWidth, this.options.borderWidth);
		gl.uniform1f(uGlowWidth, this.options.glowWidth);
		gl.uniform1f(uBorderRadius, this.options.borderRadius);
		if (this.options.mode === "dark") {
			gl.uniform1f(uGlowExponent, 2);
			gl.uniform1f(uGlowFactor, 1.8);
		} else {
			gl.uniform1f(uGlowExponent, 1);
			gl.uniform1f(uGlowFactor, 1);
		}
		const colorVecs = (this.options.colors || DEFAULT_COLORS).map(parseColor);
		for (let i = 0; i < colorVecs.length; i++) gl.uniform3f(gl.getUniformLocation(program, `uColors[${i}]`), ...colorVecs[i]);
		this.checkGLError(gl, "setupGL: after uniform setup");
		gl.bindVertexArray(null);
		gl.bindBuffer(gl.ARRAY_BUFFER, null);
		this.glr = {
			gl,
			program,
			vao,
			positionBuffer,
			uvBuffer,
			uResolution,
			uTime,
			uBorderWidth,
			uGlowWidth,
			uBorderRadius,
			uColors
		};
	}
	render(t) {
		if (!this.glr) return;
		const { gl, program, vao, uTime } = this.glr;
		gl.useProgram(program);
		gl.bindVertexArray(vao);
		gl.uniform1f(uTime, t);
		gl.disable(gl.DEPTH_TEST);
		gl.disable(gl.CULL_FACE);
		gl.disable(gl.BLEND);
		gl.clearColor(0, 0, 0, 0);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.drawArrays(gl.TRIANGLES, 0, 24);
		this.checkGLError(gl, "render: after draw call");
		gl.bindVertexArray(null);
	}
	greet() {
		console.log(`%c🌈 ai-motion 0.4.8 🌈`, "background: linear-gradient(90deg, #39b6ff, #bd45fb, #ff5733, #ffd600); color: white; text-shadow: 0 0 2px rgba(0, 0, 0, 0.2); font-weight: bold; font-size: 1em; padding: 2px 12px; border-radius: 6px;");
	}
};
//#endregion
//#region ../page-controller/src/mask/checkDarkMode.ts
/**
* A comprehensive function to determine if the page is currently in a dark theme.
* Heuristic check. Only work for common patterns. Return false by default.
*/
function isPageDark() {
	try {
		if (hasDarkModeClass()) return true;
		if (hasDarkModeDataAttribute()) return true;
		if (isColorSchemeDark()) return true;
		if (isBackgroundDark()) return true;
		if (isMainContentBackgroundDark()) return true;
		if (isTextColorLight()) return true;
		return false;
	} catch (error) {
		console.warn("Error determining if page is dark:", error);
		return false;
	}
}
/**
* Checks for common dark mode CSS classes on the html or body elements.
*/
function hasDarkModeClass() {
	const DEFAULT_DARK_MODE_CLASSES = [
		"dark",
		"dark-mode",
		"theme-dark",
		"night",
		"night-mode"
	];
	const htmlElement = document.documentElement;
	const bodyElement = document.body || document.documentElement;
	for (const className of DEFAULT_DARK_MODE_CLASSES) if (htmlElement.classList.contains(className) || bodyElement?.classList.contains(className)) return true;
	return false;
}
/**
* Some UI frameworks use data attributes to indicate theme
*/
function hasDarkModeDataAttribute() {
	const htmlElement = document.documentElement;
	const bodyElement = document.body || document.documentElement;
	for (const attr of [
		"data-theme",
		"data-color-mode",
		"data-bs-theme",
		"data-mui-color-scheme"
	]) {
		const bodyValue = bodyElement?.getAttribute(attr);
		const htmlValue = htmlElement.getAttribute(attr);
		if (bodyValue?.toLowerCase() === "dark" || htmlValue?.toLowerCase() === "dark") return true;
	}
	return false;
}
/**
* Checks the CSS `color-scheme` property and `<meta name="color-scheme">` tag.
* Only "dark"/"only dark" counts as dark; "light dark" is ambiguous and ignored.
*/
function isColorSchemeDark() {
	const metaContent = document.querySelector("meta[name=\"color-scheme\"]")?.content.toLowerCase();
	if (metaContent === "dark" || metaContent === "only dark") return true;
	const colorScheme = window.getComputedStyle(document.documentElement).getPropertyValue("color-scheme").trim().toLowerCase();
	return colorScheme === "dark" || colorScheme === "only dark";
}
/**
* Checks the background color of the body element to determine if the page is dark.
*/
function isBackgroundDark() {
	const htmlStyle = window.getComputedStyle(document.documentElement);
	const bodyStyle = window.getComputedStyle(document.body || document.documentElement);
	const htmlBgColor = htmlStyle.backgroundColor;
	const bodyBgColor = bodyStyle.backgroundColor;
	if (isColorDark(bodyBgColor)) return true;
	else if (bodyBgColor === "transparent" || bodyBgColor.startsWith("rgba(0, 0, 0, 0)")) return isColorDark(htmlBgColor);
	return false;
}
/**
* Checks if the text color on the body is light, which implies a dark background.
*/
function isTextColorLight() {
	/** Luminance (0-255) above which body text is considered light */
	const LIGHT_TEXT_LUMINANCE = 200;
	const luminance = getLuminance(window.getComputedStyle(document.body || document.documentElement).color);
	return luminance !== null && luminance > LIGHT_TEXT_LUMINANCE;
}
/**
* Checks the background color of major layout elements (#app, #root, etc.).
* Many SPAs render into a container that may have its own dark background while
* <body> remains transparent.
*/
function isMainContentBackgroundDark() {
	const { innerWidth: vw, innerHeight: vh } = window;
	const minArea = vw * vh * .5;
	for (const selector of [
		"#app",
		"#root",
		"#__next"
	]) {
		const el = document.querySelector(selector);
		if (!el) continue;
		const rect = el.getBoundingClientRect();
		if (rect.width * rect.height < minArea) continue;
		if (isColorDark(window.getComputedStyle(el).backgroundColor)) return true;
	}
	return false;
}
/**
* Parses an RGB or RGBA color string and returns an object with r, g, b properties.
* @param {string} colorString - e.g., "rgb(34, 34, 34)" or "rgba(0, 0, 0, 0.5)"
* @returns {{r: number, g: number, b: number}|null}
*/
function parseRgbColor(colorString) {
	const rgbMatch = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(colorString);
	if (!rgbMatch) return null;
	return {
		r: parseInt(rgbMatch[1]),
		g: parseInt(rgbMatch[2]),
		b: parseInt(rgbMatch[3])
	};
}
/**
* Calculates the perceived luminance (0-255) of a CSS color string.
* @param {string} colorString - e.g., "rgb(50, 50, 50)" or "rgba(0, 0, 0, 0.5)"
* @returns {number|null} - The luminance, or null if the color is transparent or unparseable.
*/
function getLuminance(colorString) {
	if (!colorString || colorString === "transparent" || colorString.startsWith("rgba(0, 0, 0, 0)")) return null;
	const rgb = parseRgbColor(colorString);
	if (!rgb) return null;
	return .299 * rgb.r + .587 * rgb.g + .114 * rgb.b;
}
/**
* Determines if a color is "dark" based on its calculated luminance.
* @param {string} colorString - The CSS color string (e.g., "rgb(50, 50, 50)").
* @param {number} threshold - A value between 0 and 255. Colors with luminance below this will be considered dark. Default is 128.
*/
function isColorDark(colorString, threshold = 128) {
	const luminance = getLuminance(colorString);
	return luminance !== null && luminance < threshold;
}
var SimulatorMask_module_default = {
	wrapper: "_wrapper_1ooyb_1",
	visible: "_visible_1ooyb_11"
};
var cursor_module_default = {
	cursor: "_cursor_1dgwb_2",
	cursorBorder: "_cursorBorder_1dgwb_10",
	cursorFilling: "_cursorFilling_1dgwb_25",
	cursorRipple: "_cursorRipple_1dgwb_39",
	clicking: "_clicking_1dgwb_57",
	"cursor-ripple": "_cursor-ripple_1dgwb_1"
};
//#endregion
//#region ../page-controller/src/mask/SimulatorMask.ts
var SimulatorMask = class extends EventTarget {
	shown = false;
	wrapper = document.createElement("div");
	motion = null;
	#disposed = false;
	#cursor = document.createElement("div");
	#currentCursorX = 0;
	#currentCursorY = 0;
	#targetCursorX = 0;
	#targetCursorY = 0;
	constructor() {
		super();
		this.wrapper.id = "page-agent-runtime_simulator-mask";
		this.wrapper.className = SimulatorMask_module_default.wrapper;
		this.wrapper.setAttribute("data-browser-use-ignore", "true");
		this.wrapper.setAttribute("data-page-agent-ignore", "true");
		try {
			const motion = new Motion({
				mode: isPageDark() ? "dark" : "light",
				styles: {
					position: "absolute",
					inset: "0"
				}
			});
			this.motion = motion;
			this.wrapper.appendChild(motion.element);
			motion.autoResize(this.wrapper);
		} catch (e) {
			console.warn("[SimulatorMask] Motion overlay unavailable:", e);
		}
		this.wrapper.addEventListener("click", (e) => {
			e.stopPropagation();
			e.preventDefault();
		});
		this.wrapper.addEventListener("mousedown", (e) => {
			e.stopPropagation();
			e.preventDefault();
		});
		this.wrapper.addEventListener("mouseup", (e) => {
			e.stopPropagation();
			e.preventDefault();
		});
		this.wrapper.addEventListener("mousemove", (e) => {
			e.stopPropagation();
			e.preventDefault();
		});
		this.wrapper.addEventListener("wheel", (e) => {
			e.stopPropagation();
			e.preventDefault();
		});
		this.wrapper.addEventListener("keydown", (e) => {
			e.stopPropagation();
			e.preventDefault();
		});
		this.wrapper.addEventListener("keyup", (e) => {
			e.stopPropagation();
			e.preventDefault();
		});
		this.#createCursor();
		document.body.appendChild(this.wrapper);
		this.#moveCursorToTarget();
		const movePointerToListener = (event) => {
			const { x, y } = event.detail;
			this.setCursorPosition(x, y);
		};
		const clickPointerListener = () => {
			this.triggerClickAnimation();
		};
		const enablePassThroughListener = () => {
			this.wrapper.style.pointerEvents = "none";
		};
		const disablePassThroughListener = () => {
			this.wrapper.style.pointerEvents = "auto";
		};
		window.addEventListener("PageAgent::MovePointerTo", movePointerToListener);
		window.addEventListener("PageAgent::ClickPointer", clickPointerListener);
		window.addEventListener("PageAgent::EnablePassThrough", enablePassThroughListener);
		window.addEventListener("PageAgent::DisablePassThrough", disablePassThroughListener);
		this.addEventListener("dispose", () => {
			window.removeEventListener("PageAgent::MovePointerTo", movePointerToListener);
			window.removeEventListener("PageAgent::ClickPointer", clickPointerListener);
			window.removeEventListener("PageAgent::EnablePassThrough", enablePassThroughListener);
			window.removeEventListener("PageAgent::DisablePassThrough", disablePassThroughListener);
		});
	}
	#createCursor() {
		this.#cursor.className = cursor_module_default.cursor;
		const rippleContainer = document.createElement("div");
		rippleContainer.className = cursor_module_default.cursorRipple;
		this.#cursor.appendChild(rippleContainer);
		const fillingLayer = document.createElement("div");
		fillingLayer.className = cursor_module_default.cursorFilling;
		this.#cursor.appendChild(fillingLayer);
		const borderLayer = document.createElement("div");
		borderLayer.className = cursor_module_default.cursorBorder;
		this.#cursor.appendChild(borderLayer);
		this.wrapper.appendChild(this.#cursor);
	}
	#moveCursorToTarget() {
		if (this.#disposed) return;
		const newX = this.#currentCursorX + (this.#targetCursorX - this.#currentCursorX) * .2;
		const newY = this.#currentCursorY + (this.#targetCursorY - this.#currentCursorY) * .2;
		const xDistance = Math.abs(newX - this.#targetCursorX);
		if (xDistance > 0) {
			if (xDistance < 2) this.#currentCursorX = this.#targetCursorX;
			else this.#currentCursorX = newX;
			this.#cursor.style.left = `${this.#currentCursorX}px`;
		}
		const yDistance = Math.abs(newY - this.#targetCursorY);
		if (yDistance > 0) {
			if (yDistance < 2) this.#currentCursorY = this.#targetCursorY;
			else this.#currentCursorY = newY;
			this.#cursor.style.top = `${this.#currentCursorY}px`;
		}
		requestAnimationFrame(() => this.#moveCursorToTarget());
	}
	setCursorPosition(x, y) {
		if (this.#disposed) return;
		this.#targetCursorX = x;
		this.#targetCursorY = y;
	}
	triggerClickAnimation() {
		if (this.#disposed) return;
		this.#cursor.classList.remove(cursor_module_default.clicking);
		this.#cursor.offsetHeight;
		this.#cursor.classList.add(cursor_module_default.clicking);
	}
	show() {
		if (this.shown || this.#disposed) return;
		this.shown = true;
		this.motion?.start();
		this.motion?.fadeIn();
		this.wrapper.classList.add(SimulatorMask_module_default.visible);
		this.#currentCursorX = window.innerWidth / 2;
		this.#currentCursorY = window.innerHeight / 2;
		this.#targetCursorX = this.#currentCursorX;
		this.#targetCursorY = this.#currentCursorY;
		this.#cursor.style.left = `${this.#currentCursorX}px`;
		this.#cursor.style.top = `${this.#currentCursorY}px`;
	}
	hide() {
		if (!this.shown || this.#disposed) return;
		this.shown = false;
		this.motion?.fadeOut();
		this.motion?.pause();
		this.#cursor.classList.remove(cursor_module_default.clicking);
		setTimeout(() => {
			this.wrapper.classList.remove(SimulatorMask_module_default.visible);
		}, 800);
	}
	dispose() {
		this.#disposed = true;
		this.motion?.dispose();
		this.wrapper.remove();
		this.dispatchEvent(new Event("dispose"));
	}
};
//#endregion
export { SimulatorMask };

//# sourceMappingURL=SimulatorMask-Cc0CNoUi.js.map