import { $ } from "execa";

// const output = await $({
//   shell: true,
// })`grep --exclude-dir=node_modules/* -i template *.*  **/*.*`;

const output =
  await $`grep --exclude-dir=node_modules/* -i template *.*  **/*.*`;

console.log(output);
