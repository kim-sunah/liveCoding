package javatutorials.array;

public class ArrayLoopDemo {
    public static void main(String[] args) {
        String[] members = {"나","너","우리"};

        for(int i =0; i< members.length; i++){
            String member= members[i];
            System.out.println(member + "가 상담을 받았습니다.");
        }
    }
}
