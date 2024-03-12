import { Glob } from "bun";

const imports = new Glob("[!index]*.js");

var globalResolver = {};

for (const file of imports.scanSync(import.meta.dir + "/.")) {
  let exports = (await import("./" + file)).default;
  globalResolver = Object.assign(globalResolver, exports);
}

export default () => globalResolver;
