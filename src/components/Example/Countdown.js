import React, { useEffect, useState } from 'react';

/// CLASS

class Countdown extends React.Component {
    time = null;
    state = {
        count: 10,
    };

    componentDidMount() {
        console.log('did mount...');
        this.timer = setInterval(() => {
            this.setState({ count: this.state.count - 1 });
        }, 1000);
    }
    onTimesup = () => {
        alert('Times up !!!');
    };

    componentDidUpdate(prevProps, prevState) {
        // console.log('prev props: ', prevProps, ' | prev State: ', prevState);
        if (this.state.count === 0) {
            this.onTimesup();
            clearInterval(this.timer);
        }
    }

    render() {
        return <div>{this.state.count}</div>;
    }
}

export { Countdown };

// FUNCTION

function NewCountdown() {
    const [count, setCount] = useState(10);

    useEffect(() => {
        if (count === 0) return;

        let timer = setInterval(() => {
            setCount(count - 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [count]);

    return <div>{count}</div>;
}

export { NewCountdown };
