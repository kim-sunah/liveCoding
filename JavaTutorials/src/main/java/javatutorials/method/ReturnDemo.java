package javatutorials.method;

public class ReturnDemo {


    public static void main(String[] args) {
        String[] members = getMembers();
        System.out.println(members.length);
    }

    private static String[] getMembers() {
        String[] members = {"나","너","우리"};
        return members;
    }
}
