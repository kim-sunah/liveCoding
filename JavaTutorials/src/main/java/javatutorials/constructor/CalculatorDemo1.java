package javatutorials.constructor;

class Calculator {
    int left, right;

    public Calculator(int left, int right) {
        this.left = left;
        this.right = right;
    }

    public void avg() {
        System.out.println((this.left + this.right) / 2);
    }

    public void sum() {
        System.out.println(this.left + this.right);
    }
}
public class CalculatorDemo1 {
    public static void main(String[] args) {
        Calculator c1= new Calculator(10,20);
        c1.sum();
        c1.avg();

        Calculator c2 = new Calculator(20,40);
        c2.avg();
        c2.sum();

    }
}
