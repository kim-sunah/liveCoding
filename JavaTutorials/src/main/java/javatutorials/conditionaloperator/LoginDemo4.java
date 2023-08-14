package javatutorials.conditionaloperator;

public class LoginDemo4 {
    public static void main(String[] args) {
        String id = args[0];
        String password = args[1];

        if ((id.equals("egoing") || id.equals("k1111") || id.equals("k2222"))
                && password.equals("1111")) {
            System.out.println("right");
        } else {
            System.out.println("wrong");
        }
    }
}
