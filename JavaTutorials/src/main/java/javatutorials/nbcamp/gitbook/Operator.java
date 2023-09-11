package javatutorials.nbcamp.gitbook;

import java.util.Arrays;

public class Operator {
    public static void main(String[] args) {
        int a = 19;
        int b = 2;
        System.out.println(isPalindrome(121));
    }

    public static boolean isPalindrome(int x) {
        if(x>0 &&(Arrays.toString(iList(x)).equals(Arrays.toString(yList(x))))){
            return true;
        }
        return false;
    }

    public static int xLength(int x){
        int i=(int)(Math.log10(x)+1);
        return i;
    }

    public static int[] iList(int x){
        int[] iList = new int[(int)(Math.log10(x)+1)];
        int i =0;
        while(x > 0){
            iList[i]  = x % 10;
            x = x / 10;
            i++;
        }
        return iList;
    }

//    public static int[] iList(int x){
//        int[] iList = new int[(int)(Math.log10(x)+1)];
//        for(int i = 0; i< (int)(Math.log10(x)+2); i++){
//            iList[i] = (x%10);
//            System.out.println(x);
//            x = x/10;
//            System.out.println(x);
//        }
//        System.out.println("iList : " + Arrays.toString(iList));
//        return iList;
//    }

    public static int[] yList(int x){
        int[] yList = new int[(int)(Math.log10(x)+1)];
        for(int i =  (int)(Math.log10(x)); i>=0 ; i--){
            yList[i] = (x%10);
            x = x/10;
        }
        System.out.println("yList : " + Arrays.toString(yList));
        return yList;
    }
}
