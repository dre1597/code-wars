// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class SequenceSum {

  public static String showSequence(int value) {
    if (value < 0) {
      return value + "<0";
    } else if (value == 0) {
      return "0=0";
    }
    
    List<Integer> numbers = new ArrayList<>();
    int sum = 0;

    for (int i = 0; i <= value; i++) {
      numbers.add(i);
      sum += i;
    }

    return numbers.stream()
        .map(String::valueOf)
        .collect(Collectors.joining("+", "", " = " + sum));
  }
}
