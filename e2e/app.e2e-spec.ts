import { SilverPersianClubPage } from './app.po';

describe('silver-persian-club App', () => {
  let page: SilverPersianClubPage;

  beforeEach(() => {
    page = new SilverPersianClubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
