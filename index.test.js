const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const original = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const copy = utils.trimProperties(original)
    expect(copy).not.toBe(original)
  })
  
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const original = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const result = utils.trimPropertiesMutation(original)
    expect(result).toBe(original)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 1 }, { integer: 2 }, { integer: 3 }]
    const result = utils.findLargestInteger(input)
    expect(result).toBe(3)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const firstCall = counter.countDown();
    expect(firstCall).toBe(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    const firstCall = counter.countDown();
    const secondCall = counter.countDown();
    expect(secondCall).toBe(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    const firstCall = counter.countDown();
    const secondCall = counter.countDown();
    const thirdCall = counter.countDown();
    const forthCall = counter.countDown();
    const fifthCall = counter.countDown();

    expect(thirdCall).toBe(1)
    expect(forthCall).toBe(0)
    expect(fifthCall).toBe(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next).toBeInstanceOf(Function)
    
    const firstCall = seasons.next()
    expect(firstCall).toBe('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    const firstCall = seasons.next()
    const secondCall = seasons.next()
    expect(secondCall).toBe('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    const firstCall = seasons.next()
    const secondCall = seasons.next()
    const thirdCall = seasons.next()
    expect(thirdCall).toBe('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    for(let i = 0; i < 3; i++){
      seasons.next()
    }
    const fourthCall = seasons.next()
    expect(fourthCall).toBe('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    for(let i = 0; i < 4; i++){
      seasons.next()
    }
    const fifthCall = seasons.next()
    expect(fifthCall).toBe('summer')
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for(let i = 0; i < 39; i++){
      seasons.next()
    }
    const callForty = seasons.next()
    expect(callForty).toBe('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive).toBeInstanceOf(Function)
    
    const odometer = focus.drive(100)
    expect(odometer).toBe(100)
  })
  test('[16] driving the car uses gas', () => {
    expect(focus).toHaveProperty('tank', 20)
    
    focus.drive(30)
    expect(focus.tank).toBe(19)

  })
  test('[17] refueling allows to keep driving', () => {
    expect(focus.refuel).toBeInstanceOf(Function)
    
    focus.drive(800)
    expect(focus.odometer).toBe(600)
    expect(focus.tank).toBe(0)

    const fuelUp = focus.refuel(10)
    expect(fuelUp).toBe(300)
    expect(focus.tank).toBe(10)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    expect(focus).toHaveProperty('tank', 20)
    expect(focus).toHaveProperty('tankSize', 20)

    focus.refuel(20)
    expect(focus.tank).not.toBe(40)
    expect(focus.tank).toBe(20)

  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const result = await utils.isEvenNumberAsync(10)
    expect(result).toBe(true)
  
  })
  test('[20] resolves false if passed an odd number', async () => {
    const result = await utils.isEvenNumberAsync(11)
    expect(result).toBe(false)
  })
})
