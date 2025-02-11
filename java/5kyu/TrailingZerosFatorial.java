// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34

public class Solution {
  public static int zeros(int n) {
    int count = 0;

    for (int i = 5; n / i >= 1; i *= 5) {
      count += n / i;
    }

    return count;
  }
}
