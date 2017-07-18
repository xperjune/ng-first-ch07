import { Ch07Page } from './app.po';

describe('ch07 App', () => {
  let page: Ch07Page;

  beforeEach(() => {
    page = new Ch07Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
