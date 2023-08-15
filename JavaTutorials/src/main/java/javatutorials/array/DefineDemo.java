package javatutorials.array;

public class DefineDemo {
    public static void main(String[] args) {
        String[] classGroup = {"나","너","우리"};
        System.out.println(classGroup[0]);
        System.out.println(classGroup[1]);
        System.out.println(classGroup[2]);


        String[] group = new String[4];
        group[0] = "1";
        System.out.println(group.length);
        group[1] = "2";
        System.out.println(group.length);
        group[2] = "3";
        System.out.println(group.length);
    }
}
