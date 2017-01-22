import { browser, element, by } from 'protractor';

export class HpTodoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hpe-root h1')).getText();
  }
}
