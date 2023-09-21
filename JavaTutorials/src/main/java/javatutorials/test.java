package javatutorials;

import  java.util.*;

public class test {
    public static void main(String[] args) {
        int[] array = {1,1,1};
        System.out.println(solution(array));
        System.out.println(solution2(array));

    }
    public static int solution2(int[] array) {
        int maxCount = 0;
        int answer = 0;
        Map<Integer, Integer> map = new HashMap<>();

        //array의 값을 number에 넣으면서 array.length만큼 반복
        for(int number : array){

            //map 안에있는 key를 찾아서 value의 +1
            int count = map.getOrDefault(number, 0) + 1;

            if(count > maxCount){
                maxCount = count;
                answer = number;
            }
            else  if(count == maxCount){
                answer = -1;
            }

            //map안에 값을 덮어씌운다
            map.put(number, count);
        }
        return answer;
    }
        public static int solution(int[] array) {
            int answer = 0;
            int[] count = new int [1000];
            int max = 0;
            int index=0;
            //배열 정렬
            for (int i=0;i<array.length;i++) {
                for (int j=i+1;j<array.length;j++){
                    if (array[i]>array[j]) {
                        int tmp = array[j];
                        array[j] = array[i];
                        array[i] = tmp;
                    }
                }
            }
            //1개짜리 배열 일 때
            if (array.length==1) {
                answer=array[0];
            }

            //2개 이상이면서 모든 값이 동일 할 때
            else if (array[0]==array[array.length-1]) {
                answer=-1;
            }
            else {
                //바로 앞뒤 비교해서 같으면 카운트 올린다
                for (int i=0;i<array.length-1;i++) {

                    //같으면 카운트 올림
                    if (array[i]==array[i+1]) {
                        count[array[i]]++;

                        //카운트 올린값이 최대값이면 max를 바꾸고 array[i]를 저장
                        if (count[array[i]] > max) {
                            max = count[array[i]];
                            index = array[i];

                        }
                        //max랑 같으면 index에 -1 저장
                        else if (count[array[i]]==max) {
                            index = -1;
                        }
                    }
                }
                //index 활용
                //모두 다르면 max가 0
                if (max==0) {
                    answer=-1;
                }
                else if (max!=0) {
                    answer=index;
                }
            }
            return answer;
        }


}
