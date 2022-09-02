import { HttpApiExceptionFilter } from './http-api-exception.filter';

describe('HttpApiExceptionFilter', () => {
  it('should be defined', () => {
    expect(new HttpApiExceptionFilter()).toBeDefined();
  });
});
