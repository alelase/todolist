import { HpTodoPage } from './app.po';

describe('hp-todo App', function() {
  let page: HpTodoPage;

  beforeEach(() => {
    page = new HpTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hpe works!');
  });
});
