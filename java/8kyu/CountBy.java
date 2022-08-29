// https://www.codewars.com/kata/5513795bd3fafb56c200049e

public class Kata{
  public static int[] countBy(int x, int n){
    int count = 0;
    int[] multiples = new int[n];
    
    while(count < n) {
      multiples[count] = (count + 1) * x;
      count++;
    }
    
    return multiples;
  }
}