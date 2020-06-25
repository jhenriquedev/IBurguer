import React from 'react';

//importações Assets
import logoImg from '../assets/iburguer-logo.png';
import Burguer from '../assets/X-Burguer-PNG-1009x1024.png';
import Foto from '../assets/X-Burguer-PNG-1009x1024.png';

//importações de Templates
import Page from './templates/Page';
import LoginForm from './templates/LoginForm';
import List from './templates/List';
import RequestItem from './templates/RequestItem';
import MenuItem from './templates/MenuItem';
import ListItem from './templates/ListItem';
import Tools from './templates/Tools';
import View from './templates/View';
import ViewItem from './templates/ViewItem';
import ViewForm from './templates/ViewForm';

//importações Ui
import Logo from './ui/Logo';
import Input from './ui/Input';
import TextArea from './ui/TextArea';
import Button from './ui/Button';
import Upload from './ui/Upload';


const ASSETS = {
  LOGO_IMG: logoImg,
  BURGUER_IMG: Burguer,
  FOTO: Foto
};

const TEMPLATES = {
  PAGE: props => <Page config={props.config} />,
  LOGIN_FORM: props => <LoginForm config={props.config} />,
  LIST: props => <List config={props.config} />,
  REQUEST_ITEM: props => <RequestItem config={props.config} />,
  MENU_ITEM: props => <MenuItem config={props.config} />,
  LIST_ITEM: props => <ListItem config={props.config} />,
  TOOLS: props => <Tools config={props.config} />,
  VIEW: props => <View config={props.config} />,
  VIEW_ITEM: props => <ViewItem config={props.config} />,
  VIEW_FORM: props => <ViewForm config={props.config} />
};


const UI = {
  LOGO: props => <Logo config={props.config} />,
  INPUT: props => <Input config={props.config} />,
  BUTTON: props => <Button config={props.config} />,
  UPLOAD: props => <Upload config={props.config} />,
  TEXTAREA: props => <TextArea config={props.config} />
};


export {
  ASSETS,
  TEMPLATES,
  UI
};