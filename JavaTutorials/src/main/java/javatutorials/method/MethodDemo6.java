package javatutorials.method;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class MethodDemo6 {
    public static String numbering(int i, int j) {
        int result = i;
        String output = "";
        while (result<j){
            output += result;
            result++;
        }
        return output;
    }

    public static void main(String[] args) {
        String result = numbering(1,5);
        System.out.println(result);

        try {//무시
            //다음행은 out.txt라는 파일에 numbering이라는 메소드가 반환한 값을 저장합니다.
            BufferedWriter out = new BufferedWriter(new FileWriter("out.txt"));
            out.write(result);
            out.close();
        }catch (IOException e){
            //무시
        }
    }
}
