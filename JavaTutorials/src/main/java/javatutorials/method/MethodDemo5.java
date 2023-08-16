package javatutorials.method;

public class MethodDemo5 {
    public static String numbering(int i, int j) {
        int result = i;
        String output = "";
        while (result<j){
            output += result;
            result++;
        }
        return output;
    }

    public static void main(String[] args) {
        String result = numbering(1,5);
        System.out.println(result);
    }
}
