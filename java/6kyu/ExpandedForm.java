// https://www.codewars.com/kata/5842df8ccbd22792a4000245

import java.util.stream.IntStream;

public class Kata {
  public static String expandedForm(int num) {
  return IntStream
    .range(0, String.valueOf(num).length())
    .mapToObj(i -> String.valueOf(num).charAt(i) + "0".repeat(String.valueOf(num).length() - 1 - i))
    .filter(s -> s.charAt(0) != '0')
    .reduce((a, b) -> a + " + " + b)
    .orElse("0");
  }
}
