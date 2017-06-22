import { LoginuiPage } from './app.po';

describe('loginui App', () => {
  let page: LoginuiPage;

  beforeEach(() => {
    page = new LoginuiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
