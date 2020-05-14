import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import main from "./scripts/main";
import "./components/banner"
import "./components/wadah"
import "./components/navbar"
import "./components/footer"
import logo from './img/logo-02.png';
import dokter from './img/dokter.webp';
import ig from './img/instagram.webp';
import fb from './img/facebook.webp';
import tw from './img/twitter.webp';

document.querySelector('#logo').src = logo;
document.querySelector('#logoFooter').src = logo;
document.querySelector('#dokter').src = dokter;
document.querySelector('#ig').src = ig;
document.querySelector('#fb').src = fb;
document.querySelector('#tw').src = tw;

main();