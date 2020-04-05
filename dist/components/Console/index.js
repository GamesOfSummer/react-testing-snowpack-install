import { h } from '/web_modules/preact.js';
import Typist from '../Typist/index.js';
import text from './text.js';
const Console = () => (h("div", null,
    h("div", { style: { display: 'flex', width: '750px' }, id: "console" },
        h(Typist, { file: text }))));
export default Console;
//# sourceMappingURL=index.js.map