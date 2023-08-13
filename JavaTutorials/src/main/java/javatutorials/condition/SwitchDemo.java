package javatutorials.condition;

public class SwitchDemo {
    public static void main(String[] args) {
        System.out.println("swith(1)");
        switch (4) {
            case 1:
                System.out.println("one");
                break;
            case 2:
                System.out.println("two");
                break;
            case 3:
                System.out.println("three");
                break;
            default:
                System.out.println("default");
        }
        System.out.println();
        System.out.println("swith(2)");
        switch (2) {
            case 1:
                System.out.println("one");
            case 2:
                System.out.println("two");
            case 3:
                System.out.println("three");
        }
        System.out.println();
        System.out.println("swith(3)");
        switch (1) {
            case 1:
                System.out.println("one");
            case 2:
                System.out.println("two");
            case 3:
                System.out.println("three");
        }
        int val =1;

        if(val == 1){
            System.out.println("one");
        }else if(val ==2){
            System.out.println("two");
        }else{
            System.out.println("three");
        }
    }
}
