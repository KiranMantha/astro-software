import { render } from 'preact';
import './index.scss';
import './ui.scss';
import { App } from './app.jsx';

render(<App />, document.getElementById('app') as HTMLElement);
