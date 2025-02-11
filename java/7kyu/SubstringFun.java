// https://www.codewars.com/kata/565b112d09c1adfdd500019c/java

public class SubstringFun {
  public static String nthChar(String[] words) {
    String result = "";

    for(int i = 0; i < words.length; i++) {
      result += words[i].substring(i, i + 1);
    }
    return result;
  }
}
