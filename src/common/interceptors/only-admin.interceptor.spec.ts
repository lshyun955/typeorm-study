import { OnlyAdminInterceptor } from './only-admin.interceptor';

describe('OnlyAdminInterceptor', () => {
  it('should be defined', () => {
    expect(new OnlyAdminInterceptor()).toBeDefined();
  });
});
