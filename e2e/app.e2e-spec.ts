import { EPregPage } from './app.po';

describe('epreg App', function() {
  let page: EPregPage;

  beforeEach(() => {
    page = new EPregPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
