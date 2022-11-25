import { TempPipe } from './temp.pipe';

describe('TempPipe', () => {
  it('create an instance', () => {
    const pipe = new TempPipe();
    expect(pipe).toBeTruthy();
  });

  it('transff check', () => {
    const pipe = new TempPipe();
    let result = pipe.transform(40, 'C2F')
    expect(result).toBe(104);
  });
});
