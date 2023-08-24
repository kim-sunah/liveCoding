package javatutorials.abstractclass.example1;


abstract class A{
    public abstract int b();
    /**
     * TODO
     * 본체가 있는 메소드는 abstract 키워드를 가질 수 없다.
     * public abstract int c() {System.out.println("Hello"};
     * 추상 클래스 내에는 추상 메소드가 아닌 메소드가 존재할수 있다.
     */
    public void d(){
        System.out.println("world");
    }
}

class B extends A{
    public int b(){
        return 1;
    }
}

public class AbstractDemo {
    public static void main(String[] args) {
        /**
         * abstractclass.example1.A is abstract; cannot be instantiated
         * 추상 클래스는 반드시 상속해서 사용해야 한다.
         */
//        A obj = new A();

        B obj = new B();
    }
}
