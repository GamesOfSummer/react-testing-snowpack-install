import { h, Component } from '/web_modules/preact.js';
class Typist extends Component {
    constructor(props) {
        super(props);
        this.timeoutId = 0;
        this.write = () => {
            const { file } = this.props;
            const { index } = this.state;
            const intermediateTextFn = (position) => {
                let text = file.slice(0, file.length - (file.length - position));
                if (text.slice(-1) === '<') {
                    text = file.slice(0, file.length - (file.length - position + 1));
                }
                if (index < file.length) {
                    text = `${text}|`;
                }
                return text;
            };
            const toBeRenderedText = intermediateTextFn(index);
            this.setState({
                renderText: toBeRenderedText,
                index: index + 1,
            });
            const body = document.querySelector('body');
            if (body && body.scrollHeight > window.innerHeight) {
                window.scrollBy({
                    top: 50,
                    behavior: 'auto',
                });
            }
            if (index >= file.length) {
                clearInterval(this.timeoutId);
            }
        };
        this.state = {
            renderText: '',
            index: 2,
        };
    }
    componentDidMount() {
        this.timeoutId = window.setInterval(() => {
            this.write();
        }, 40);
    }
    render() {
        const { renderText } = this.state;
        return (h("div", { dangerouslySetInnerHTML: {
                __html: renderText.replace(/\n/g, '<br />'),
            }, className: "terminal-body" }));
    }
}
export default Typist;
//# sourceMappingURL=index.js.map