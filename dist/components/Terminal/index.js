import { h } from '/web_modules/preact.js';
import Console from '../Console/index.js';
const Terminal = () => (h("div", { className: "terminal-window" },
    h("header", null,
        h("div", { className: "button red" }),
        h("div", { className: "button yellow" }),
        h("div", { className: "button green" })),
    h(Console, null)));
export default Terminal;
//# sourceMappingURL=index.js.map