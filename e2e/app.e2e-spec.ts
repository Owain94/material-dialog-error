import { AngularWebworkerPage } from './app.po';

describe('angular-webworker App', () => {
  let page: AngularWebworkerPage;

  beforeEach(() => {
    page = new AngularWebworkerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
