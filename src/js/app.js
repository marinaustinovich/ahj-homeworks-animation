import Modal from './Callback-Chat/Modal';
import Collapse from './Collapse/Collapse';
import Liker from './Liker/Liker';

const modal = new Modal(document.getElementById('chat-container'));
const collapse = new Collapse(document.getElementById('collapse-container'));
const liker = new Liker(document.getElementById('liker-container'));

modal.init();
collapse.init();
liker.init();
