import { OnlyPrivateInterceptor } from './only-private.interceptor';

describe('OnlyPrivateInterceptor', () => {
  it('should be defined', () => {
    expect(new OnlyPrivateInterceptor()).toBeDefined();
  });
});
