class EtaElement extends HTMLElement {

    constructor() {
        super();
        this.token = 'D83KFJ338FJFS23600';
        this.baseAction = { action: 'void', payload: null };
    }

    connectedCallback () {
        this.shadow = this.attachShadow({ mode: 'open' });
        this.statusComponenet = true;
    }

    hasRender(template) {
        const [ isErr ] = [
            '504 Gateway Time-out',
            '500 Internal Server Error'
        ].filter(item => template.includes(item));

        return !isErr;
    }

    render() {

        const headers = new Headers({
            webtoken: this.getCookies['web_etas_id']
        });

        const configuration = { method: 'GET', headers };

        const etasRequest = new Request(this.src, configuration);

        fetch(etasRequest)
            .then(res => res.text())
            .then( (data) => {
                const frame = document.createElement('iframe');
                frame.id = 'frameId';
                frame.style = this.style.cssText;
                this.shadow.appendChild(frame);
                this.currentElement = frame;

                if (!!(frame.contentDocument || frame.contentWindow) && this.hasRender(data)) {
                    const iframeDoc = frame.contentDocument || frame.contentWindow.document;
                    iframeDoc.open();
                    iframeDoc.write(data);
                    iframeDoc.close();

                    this.listenerEta();
                    this.listenerRoot(({ detail: { action, payload } }) => this.dispatchEta({ action, payload }));
                }
            }).catch(e => console.log(e));
    }

    disconectedElement() {
        if(!!this.currentElement) {
            this.currentElement.remove();
        }
    }

    static get observedAttributes() { return ['src', 'localstyle'] }

    options({ attributeName, current }) {
        return {
            src: () => {
                this.disconectedElement();
                this.src = current;
                this.render();
            },
            localstyle: () => {
                if(!!this.style) {
                    this.setAttribute('style', current);
                } else {
                    this.style = current;
                }

            },
        }
    }

    get getCookies() {
        const currentCookies = document.cookie;
        let cookies = { };
        currentCookies.split(';').forEach( item => {
            const [ key, value ] = item.split('=');
            cookies = { ...cookies, [ key.replace(' ', '') ]: value  }
        });
        return cookies;
    }

    buildCookie() {

        const serializer = (cookie) => {
            const token = atob(cookie);
            const accesToken = JSON.parse(token)['access_token'];
            this.cookieEtas = `web_etas_id=${accesToken}`;
            return this.cookieEtas;
        };

        const currentCookies = document.cookie;
        currentCookies.split(';')
            .forEach( item => {
                const [ key, value ] = item.split('=');
                document.cookie = key === ' rappi.id' || key === 'rappi.id' ? serializer(value) : '';
            });
    }

    attributeChangedCallback(attributeName, lastAttribute, current) {
        this.buildCookie();
        this.options({ attributeName, current })[attributeName]();
    }

    createEvent(data) {
        return new CustomEvent('ETA_FRAME', {  detail: data  });
    }

    // dispatch event ng-rappi
    dispatchRoot(data) {
        const allActions = [ data, this.baseAction ];
        allActions.forEach( item => window.dispatchEvent(this.createEvent(item)));
    }

    // listen event ng-rappi
    listenerRoot(fun) {
        window.addEventListener('ETA_FRAME_ROOT', (e) => {
            return fun(e);
        });
    }

    // dispatch event at Eta
    dispatchEta({ action, payload }) {
        this.shadow.getElementById('frameId')
            .contentWindow.postMessage({ token: this.token, action, payload }, '*');
    }

    // listen notification ETAS
    listenerEta() {
        window.onmessage = (event) => {
            const isEta = (!!event.data['token'] && event.data['token'] === this.token);
            if (isEta) {
                this.dispatchRoot(event.data);
            }
        };
    };

}

customElements.define('eta-element', EtaElement);
