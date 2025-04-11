import { create } from "zustand"

const counterStore = create((set, get) => ({
    count: 0,
    factors: [], // 소인수
    enteredValue: null, // 입력값
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
    increaseBy: (value) => set((state) => ({
        count: state.count + value,
    })),
    decreaseBy: (value) => set((state) => ({
        count: state.count - value,
    })),
    resetBy: () => set(() => ({ count: 0, factors: [], enteredValue: null })),
    factorize: () => {
        const n = get().count; // n에 입력 값 저장

        if (n < 1) {
            alert("양의 정수만 입력하세요!"); // 음수 입력시 오류
            return;
        }

        const result = [];
        let num = n;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            while (num % i === 0) { // 나눈 나머지가 0이면
                result.push(i); // 나눈 수를 result에 넣고
                num = num / i; // 나눈 후 몫으로 입력 값을 바꾼다.
            }
        }

        if (num > 1) { // for문을 빠져나온 후 마지막 남은 num을 소인수로 포함시키는 함수임
            result.push(num);
        }

        set({ factors: result, enteredValue: n }); // 소인수 배열과 입력한 값을 저장
    },
}));

export default counterStore;