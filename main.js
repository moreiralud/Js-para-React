import './src/styles/settings/colors.css';
import './src/styles/elements/bases.css'
import CardGame from './src/components/cardGame';


const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();

$root.insertAdjacentElement("beforeend", $htmlCardGame)