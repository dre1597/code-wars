/*
Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

a = new Vector([1, 2, 3])
b = new Vector([3, 4, 5])
c = new Vector([5, 6, 7, 8])

a.add(b)      # should return a new Vector([4, 6, 8])
a.subtract(b) # should return a new Vector([-2, -2, -2])
a.dot(b)      # should return 1*3 + 2*4 + 3*5 = 26
a.norm()      # should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c)      # throws an error

If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

Also provide:

- a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)')

- an equals method, to check that two vectors that have the same components are equal

Note: the test cases will utilize the user-provided equals method.

*/

export class Vector {
  public components: number[];

  constructor(components: number[]) {
    this.components = components;
  }

  add(vectorToAdd: Vector): Vector {
    if (this._validateLength(this.components, vectorToAdd.components)) {
      throw new Error('Vectors should have the same length');
    }
    const resultComponents: number[] = [];

    for (let index = 0; index < this.components.length; index++) {
      resultComponents[index] = this.components[index] + vectorToAdd.components[index];
    }

    return new Vector(resultComponents);
  }

  subtract(vectorToSubtract: Vector): Vector {
    if (this._validateLength(this.components, vectorToSubtract.components)) {
      throw new Error('Vectors should have the same length');
    }

    const resultComponents: number[] = [];

    for (let index = 0; index < this.components.length; index++) {
      resultComponents[index] = this.components[index] - vectorToSubtract.components[index];
    }

    return new Vector(resultComponents);
  }

  dot(vectorToMultiply: Vector): number {
    if (this._validateLength(this.components, vectorToMultiply.components)) {
      throw new Error('Vectors should have the same length');
    }

    let sum: number = 0;

    for (let index = 0; index < this.components.length; index++) {
      sum += this.components[index] * vectorToMultiply.components[index];
    }

    return sum;
  }

  norm(): number {
    let sum = 0;

    for (let index = 0; index < this.components.length; index++) {
      sum += this.components[index] ** 2;
    }

    return Math.sqrt(sum);
  }

  equals(vectorToCompare: Vector): boolean {
    if (this._validateLength(this.components, vectorToCompare.components)) {
      return false;
    }

    for (let index = 0; index < this.components.length; index++) {
      if (this.components[index] !== vectorToCompare.components[index]) {
        return false;
      }
    }
    return true;
  }

  toString(): string {
    return '(' + this.components.toString() + ')';
  }

  private _validateLength(vector1: number[], vector2: number[]): boolean {
    return vector1.length !== vector2.length;
  }
}
