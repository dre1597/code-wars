import java.util.HashMap;
import java.util.Map;

public class Kata {
  public static Map<Character, Integer> count(String str) {
    Map<Character, Integer> countMap = new HashMap<>();

    if (str.trim().isEmpty()) {
      return countMap;
    }

    for (char c : str.toCharArray()) {
      countMap.put(c, countMap.getOrDefault(c, 0) + 1);
    }

    return countMap;
  }
}
