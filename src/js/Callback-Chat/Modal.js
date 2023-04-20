export default class Modal {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }

    this.container = container;
    this.errorContainer = null;
    this.modal = null;
    this.textEl = null;
    this.submitButton = null;
    this.openButton = null;
    this.closeButton = null;

    this.drawUi();
    this.addEvents();
  }

  drawUi() {
    this.container.innerHTML = `
      <div id="modal" class="modal">
        <div class="modal-wrapper">
          <div class="modal-content">
              <h2>Напишите нам</h2>
              <textarea id="text" class="text-modal" placeholder="Writen your text here"></textarea>
              <button type="submit" id="submit" class="btn-modal">Отправить</button>
              <button type="button" class="close-modal">&times;</button>
          </div>
          <button type="button" id="open-modal" class="open-modal">Написать</button>
        </div>
        <div class="error-container"></div>
      </div>
    `;
  }

  addEvents() {
    this.modal = this.container.querySelector('#modal');
    this.textEl = this.container.querySelector('#text');
    this.submitButton = this.container.querySelector('#submit');
    this.openButton = this.container.querySelector('#open-modal');
    this.closeButton = this.container.querySelector('.close-modal');
    this.errorContainer = this.container.querySelector('.error-container');

    this.submitButton.addEventListener('click', () => this.onSubmit());
    this.openButton.addEventListener('click', () => this.showModal());
    this.textEl.addEventListener('click', () => this.clearTextField());
    this.closeButton.addEventListener('click', () => this.hideModal());
  }

  onSubmit() {
    if (this.textEl.value) {
      this.modal.style.display = 'none';
    } else {
      this.showError('Пожалуйста, введите ваш текст');
    }
  }

  showModal() {
    this.modal.querySelector('.modal-content').classList.add('modal-content_visible');
    this.openButton.classList.add('open-modal_click');
  }

  hideModal() {
    this.modal.querySelector('.modal-content').classList.remove('modal-content_visible');
    this.openButton.classList.remove('open-modal_click');
  }

  clearTextField() {
    this.textEl.value = '';
    this.hideError();
  }

  showError(message) {
    this.errorContainer.textContent = message;
    this.errorContainer.style.display = 'block';
  }

  hideError() {
    this.errorContainer.style.display = 'none';
  }
}
