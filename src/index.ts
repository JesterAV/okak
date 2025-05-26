import { createElement } from "./utils/utils";
import './styles/style.css';
import catImage from './assets/cat.png';

const app = createElement('div', 'app', document.body);

const error = createElement('div', 'error', app);
error.textContent = '404';

const img = createElement('div', 'image', app);
const cat = createElement('img', 'cat', img) as HTMLImageElement;
cat.src = catImage
const okak = createElement('h1', 'okak', img);
okak.textContent = 'OKAK';