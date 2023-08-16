package javatutorials.method;

public class MethodDemo4 {
    public static void main(String[] args) {
        numbering(3,5);
    }

    private static void numbering(int a, int b) {
        int i = a;
        while (i < b) {
            System.out.println(i);
            i++;
        }
    }
}
