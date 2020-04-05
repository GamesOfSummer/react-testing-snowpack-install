import { sum } from './sum';

let text: string = `
<span id="a">user@hostname</span>(<span id="b">~</span>)<span id="c">$</span> cd Documents/<!-- lag -->About
<span id="a">user@hostname</span>(<span id="b">About</span>)<span id="c">$</span> cat <!-- lag -->ndo.txt
<p>Welcome to my cli portfolio.
<!-- laglaglaglaglaglaglag -->
You can adjust this to whatever you want, etc., etc. have fun!
`;

var holder = sum(1, 5);

text = holder + text;

export default text;
