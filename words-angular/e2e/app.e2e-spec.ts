import { RatsAngularPage } from './app.po';

describe('rats-angular App', function() {
  let page: RatsAngularPage;

  beforeEach(() => {
    page = new RatsAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
