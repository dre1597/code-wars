// https://www.codewars.com/kata/5813d19765d81c592200001a

import java.util.stream.IntStream;

public class Kata {
  public static int dontGiveMeFive(int start, int end) {
    return (int) IntStream
        .rangeClosed(start, end)
        .boxed()
        .filter(num -> !String.valueOf(num).contains("5"))
        .mapToInt(Integer::intValue)
        .count();
  }
}
