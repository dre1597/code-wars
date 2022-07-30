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
