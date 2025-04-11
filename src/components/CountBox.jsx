import React from 'react'
import counterStore from '../stores/counterStore';

const CountBox = () => {

    const { factors, enteredValue } = counterStore();

    if (enteredValue === null) return null;

    return (
        <div style={{ marginTop: '50px' }}>
            입력한 값 {enteredValue}의 소인수는
            <br />
            {factors.length === 1
                ? `${factors[0]} 하나로 소수`
                : factors.join(' × ')
            }
            입니다.
        </div>
    )
}

export default CountBox