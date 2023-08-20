package javatutorials.scope;

class C{
    int v=10;
    void m(){
        int v =20;
        System.out.println(v);
        /**
         * TODO
         * this
         * 전역변수
         */
        System.out.println(this.v);
    }
}
public class ScopeDemo6 {
    public static void main(String[] args) {
        C c1 = new C();
        c1.m();
    }
}
