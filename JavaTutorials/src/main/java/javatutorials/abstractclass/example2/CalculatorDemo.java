package javatutorials.abstractclass.example2;

abstract class Calculator {
    int left, right;

    public void setOprands(int left, int right) {
        this.left = left;
        this.right = right;
    }

    int _sum() {
        return this.left + this.right;
    }

    public abstract void sum();

    public abstract void avg();

    public void run() {
        sum();
        avg();
    }
}

class CalculatorDemoPlus extends Calculator {
    public void sum() {
        System.out.println("+ sum : " + _sum());
    }

    public void avg() {
        System.out.println("+ avg : " + (this.left + this.right) / 2);
    }
}

class CalculatorDemoMinus extends Calculator {
    public void sum() {
        System.out.println("- sum : " + _sum());
    }

    public void avg() {
        System.out.println("- avg : " + (this.left + this.right) / 2);
    }
}

public class CalculatorDemo {

    public static void main(String[] args) {
        CalculatorDemoPlus c1 = new CalculatorDemoPlus();
        c1.setOprands(10, 20);
        c1.run();
    }
}

