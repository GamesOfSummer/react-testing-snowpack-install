import { h, render } from '/web_modules/preact.js';
import App from './components/App/index.js';
const appMount = document.querySelector('#app');
if (appMount)
    render(h(App, null), appMount);
export default App;
//# sourceMappingURL=index.js.map