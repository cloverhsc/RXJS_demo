import { IndRXJSPage } from './app.po';

describe('ind-rxjs App', () => {
  let page: IndRXJSPage;

  beforeEach(() => {
    page = new IndRXJSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
