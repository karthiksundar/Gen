import { GenPage } from './app.po';

describe('gen App', () => {
  let page: GenPage;

  beforeEach(() => {
    page = new GenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
