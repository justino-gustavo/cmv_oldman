import { Glob } from "bun";

const imports = new Glob("*[!index].js");

var globalResolver = {};

for (const file of imports.scanSync(import.meta.dir + "/.")) {
	let imports = (await import("./" + file)).default;
	globalResolver = Object.assign(globalResolver, imports);
}

export default () => globalResolver;
