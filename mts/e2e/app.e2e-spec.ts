import { MtsPage } from './app.po';

describe('mts App', () => {
  let page: MtsPage;

  beforeEach(() => {
    page = new MtsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
