import React from 'react';

//importações Assets
import LogoHamburger from '../assets/iburguer-logo.png';
import Burguer from '../assets/X-Burguer-PNG-1009x1024.png';
import Foto from '../assets/X-Burguer-PNG-1009x1024.png';
import Artesanal from '../assets/hamburger/artesanal_2.jpeg';
import BatataFrita from '../assets/hamburger/batata_frita.jpeg';
import CachorroQuente from '../assets/hamburger/cachorro_quente.jpeg';
import Churrasco from '../assets/hamburger/churrasco.jpeg';
import CocaCola from '../assets/hamburger/coca-cola.jpeg';
import Cupcake from '../assets/hamburger/cupcake.jpeg';
import Sanduiche from '../assets/hamburger/sanduiche.jpeg';
import Hamburguers from '../assets/hamburger/hamburguers.jpeg';
import Hamburguers_2 from '../assets/hamburger/hamburguers_2.jpeg';
import Hamburguer_4 from '../assets/hamburger/hambuguer_4.png';

//importações de Templates
import Page from './templates/Page';
import Row from './templates/Row';
import Panel from './templates/Panel';
import List from './templates/List';
import Links from './templates/Links';

//importações Ui
import Logo from './ui/Logo';
import Input from './ui/Input';
import TextArea from './ui/TextArea';
import Button from './ui/Button';
import Upload from './ui/Upload';
import Link from './ui/Link';


const ASSETS = {
  LOGO_IMG: LogoHamburger,
  BURGUER_IMG: Burguer,
  FOTO: Foto,
  ARTESANAL: Artesanal,
  BATATA_FRITA: BatataFrita,
  CACHORRO_QUENTE: CachorroQuente,
  CHURRASCO: Churrasco,
  COCA_COLA: CocaCola,
  CHUPCAKE: Cupcake,
  SANDUICHE: Sanduiche,
  HAMBURGUERS: Hamburguers,
  HAMBURGUERS_2: Hamburguers_2,
  HAMBURGUER_4: Hamburguer_4
};

const TEMPLATES = {
  PAGE: props => <Page config={props.config} />,
  ROW: props => <Row config={props.config} />,
  PANEL: props => <Panel config={props.config} />,
  LIST: props => <List config={props.config} />,
  LINKS: props => <Links config={props.config} />,
};

const UI = {
  LOGO: props => <Logo config={props.config} />,
  INPUT: props => <Input config={props.config} />,
  BUTTON: props => <Button config={props.config} />,
  UPLOAD: props => <Upload config={props.config} />,
  TEXTAREA: props => <TextArea config={props.config} />,
  LINK: props => <Link config={props.config} />,
};


export {
  ASSETS,
  TEMPLATES,
  UI
};