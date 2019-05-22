import { range, memoize } from 'lodash';
import { Seq, Range } from 'immutable';

describe('Exploring Sequences and Range() in Immutable.js', () => {
  test.skip('should see Seq() act like an Iterable', () => {
    // const lodashRange = range(1000);
    const lodashRange = ['Milk', 'Egges', 'Detergent', 'Bread', 'Steak'];
    let numberOfOperations = 0;

    // let sequence = Seq.of(...lodashRange);
    let sequence = Seq();
    sequence
      .of(
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30
      )
      .filter(x => x % 2)
      .map(x => x * x);

    expect(sequence.get(0)).toBe(0);
  });

  test.skip('should see that Seq() is lazy', () => {
    const lodashRange = range(1000);
    let numberOfOperations = 0;

    let powerOfTwo = Seq.of(...lodashRange).map(num => {
      numberOfOperations++;
      return num * 2;
    });

    expect(numberOfOperations).toBe(0);

    powerOfTwo.take(10).toArray(); // compute total lazily

    expect(numberOfOperations).toBe(10);
  });

  test('should not produce an overflow with infinite Range()', () => {
    let powerOfTwoRange = Range(1, Infinity);

    expect(powerOfTwoRange.size).toBe(Infinity); // whoa

    let first1000Powers = powerOfTwoRange.take(1000).map(n => n * 2);

    expect(first1000Powers.size).toBe(1000);
  });

  test('should cache results of Seq()', () => {
    let objects = Range(0, 1000).map(() => {
      return new Object();
    });

    let take100 = objects.take(100).toArray();
    let take100Again = objects.take(100).toArray();

    take100.forEach((obj, index) => {
      expect(obj === take100Again[index]).toBe(false);
    });

    let cachedObjects = Range(0, 1000)
      .map(() => {
        return new Object();
      })
      .cacheResult();

    expect(cachedObjects.size).toBe(1000);

    let take100Cached = cachedObjects.take(100).toArray();
    let take100CachedAgain = cachedObjects.take(100).toArray();

    take100Cached.forEach((obj, index) => {
      expect(obj === take100CachedAgain[index]).toBe(true);
    });
  });

  test('should memoize results of Seq()', () => {
    let objects = Range(0, 1000).map(() => {
      return new Object();
    });

    let take100 = objects.take(100).toArray();
    let take100Again = objects.take(100).toArray();

    take100.forEach((obj, index) => {
      expect(obj === take100Again[index]).toBe(false);
    });

    let memoizedObjects = Range(0, Infinity).map(
      memoize(() => {
        return new Object();
      })
    );

    expect(memoizedObjects.size).toBe(Infinity); // this should be impossible!

    let take100Memoized = memoizedObjects.take(100).toArray();
    let take100MemoizedAgain = memoizedObjects.take(100).toArray();

    take100Memoized.forEach((obj, index) => {
      expect(obj === take100MemoizedAgain[index]).toBe(true);
    });
  });

  test.only('should create a Seq()', () => {
    let sequence = Seq({
      a: 1,
      b: 2,
      c: 3
    }).take(3);
    expect(Seq.isSeq(sequence));
    // expect(Map.isMap(immutableTodos));
    expect(sequence.last()).toBe(3);
  });
});
