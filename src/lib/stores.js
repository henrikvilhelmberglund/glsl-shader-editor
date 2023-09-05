import { writable } from "svelte/store";
import { persisted } from "svelte-local-storage-store";

export const color = persisted(
	"color",
	"blue",
	// avoid stringifying the string adding quotes
	{
		serializer: {
			stringify: (val) => val,
			parse: (val) => val,
		},
	}
);

export const fragment = writable(`
#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main() {
	gl_FragColor = vec4(1.0,0.0,1.0,1.0);
}
  `);

export const vertex = writable(`
void main()	{
  gl_Position = vec4( position, 1.0 );
}
`);
