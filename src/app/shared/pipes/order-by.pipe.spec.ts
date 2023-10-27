import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  const pipe = new OrderByPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort array in descending order by default', () => {
    const inputArray = [{ key: 3 }, { key: 1 }, { key: 2 }];
    const sortedArray = pipe.transform(inputArray, 'key');

    expect(sortedArray).toEqual([{ key: 1 }, { key: 2 }, { key: 3 }]);
  });

  it('should sort array in ascending order if isAsc is equal to true', () => {
    const inputArray = [{ key: 3 }, { key: 1 }, { key: 2 }];
    const sortedArray = pipe.transform(inputArray, 'key', true);

    expect(sortedArray).toEqual([{ key: 3 }, { key: 2 }, { key: 1 }]);
  });
});
