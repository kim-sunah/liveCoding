package javatutorials;

import  java.util.*;

public class test {
    public static void main(String[] args) {
        int[] array = {1,2,3,4,5,6};
        solution(array);
    }
    public static int[] solution(int[] num_list) {
        return Arrays.stream(num_list).map(i->i*2).toArray();
    }

}
