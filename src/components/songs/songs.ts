import { AddCards } from '../../types/store';
import { gets } from '../../firebaseConfig';
import { addObserver, appState, dispatch } from '../../store/store';
import { navigate } from '../../store/actions';
const FormData: Omit<AddCards, 'id'> = {
	image: '',
	pTitle: '',
	Autor: '',
	price: '',
	stock: '',
};

class songs extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	async render() {
		const songs = await gets();
		songs.forEach((song: AddCards) => {
			const container = this.ownerDocument.createElement('section');
			const image = this.ownerDocument.createElement('img');
			image.innerText = song.image;
			container.appendChild(image);

			const pTitle = this.ownerDocument.createElement('H1');
			pTitle.innerText = song.pTitle;
			container.appendChild(pTitle);

			const Autor = this.ownerDocument.createElement('p');
			Autor.innerText = song.Autor;
			container.appendChild(Autor);


			const Dateadded = this.ownerDocument.createElement('p');
			Dateadded.innerText = song.price;
			container.appendChild(Dateadded);

			const Duration = this.ownerDocument.createElement('p');
			Duration.innerText = song.stock;
			container.appendChild(Duration);

			this.shadowRoot?.appendChild(container);
		});
	}
}

customElements.define('custom-songs', songs);
export default songs;