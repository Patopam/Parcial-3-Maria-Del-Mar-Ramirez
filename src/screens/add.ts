import Card from '../components/disk/disk';
import './components/export';

class add extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		const something = this.ownerDocument.createElement('custom-add') as Card;
		this.shadowRoot?.appendChild(something);
	}
}

customElements.define('app-container', add);