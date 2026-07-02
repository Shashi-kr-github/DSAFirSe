class Solution {
    public static void reverseStack(Stack<Integer> st) {
        if(st.isEmpty()){
            return;
        }
        
        Integer temp = st.pop();
        
        reverseStack(st);
        insert(st, temp);
    }
    
    public static void insert(Stack<Integer> st ,Integer temp){
        if(st.isEmpty()){
            st.push(temp);
            return;
        }
        
        Integer val = st.pop();
        
        insert(st, temp);
        
        st.push(val);
        
    }
}
