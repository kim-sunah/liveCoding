package javatutorials;

import  java.util.*;

public class test {
    public static void main(String[] args) {
        int[] array = {6,2,3,6,5,6};
        solution(array);
    }
        public static int solution(int[] array) {
            int maxCount = 0;
            int answer = 0;
            Map<Integer, Integer> map = new HashMap<>();
            for(int number : array){
                int count = map.getOrDefault(number, 0) +1;
                if(count > maxCount){
                    maxCount = count;
                    answer = number;
                }
                else  if(count == maxCount){
                    answer = -1;
                }
                map.put(number, count);
            }
            return answer;
        }

}
