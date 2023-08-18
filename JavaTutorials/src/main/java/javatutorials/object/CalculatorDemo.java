package javatutorials.object;

public class CalculatorDemo {

    public static void sum(int i, int j){
        System.out.println(i+j);
    }
    public static void main(String[] args) {
        //아래의 로직이 100줄 이상의 복잡한 로직이라 가정했을때 sum 메소드 호출

        sum(10,20);
        sum(10,20);
    }

}
