package javatutorials.object;

class Calculator {
    int left, rigit;

    public void setOprands(int left, int right) {
        this.left = left;
        this.rigit = right;
    }

    public void avg() {
        System.out.println((this.left + this.rigit) / 2);
    }

    public void sum() {
        System.out.println(this.left + this.rigit);
    }
}

public class CalculatorDemo4 {
    public static void main(String[] args) {
        Calculator c1 = new Calculator();
        c1.setOprands(10, 20);
        c1.sum();
        c1.avg();

        Calculator c2 = new Calculator();
        c1.setOprands(20, 40);
        c1.sum();
        c1.avg();
    }
}
