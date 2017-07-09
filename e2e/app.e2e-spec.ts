import { Lab4Page } from './app.po';

describe('lab4 App', () => {
  let page: Lab4Page;

  beforeEach(() => {
    page = new Lab4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
