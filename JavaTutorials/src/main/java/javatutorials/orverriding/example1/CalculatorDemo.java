package javatutorials.orverriding.example1;

class Calculator {
    int left, right;

    public void setOprands(int left, int right) {
        this.left = left;
        this.right = right;
    }

    public void sum() {
        System.out.println(this.left + this.right);
    }

    public int avg() {
        return ((this.left + this.right) / 2);
    }
}

class SubstractionableCalculator extends Calculator{
    public void sum(){
        System.out.println("실행결과는 " + (this.left+this.right)+" 입니다.");
    }

    public int substract(){
        return super.avg();
    }
}
public class CalculatorDemo {

    public static void main(String[] args) {
        SubstractionableCalculator c1 = new SubstractionableCalculator();
        c1.setOprands(10,20);
        c1.sum();
        c1.avg();
        c1.substract();

        System.out.println("실행결과는 "+ c1.avg());
    }

}
