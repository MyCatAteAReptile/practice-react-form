const throttle = <T extends any[]>(cb: (...args: T) => void, timeout: number) => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    return (...args: T) => {
        if (timer) return;

        timer = setTimeout(() => {
            cb(...args);

            clearTimeout(timer!);
            timer = null;
        }, timeout);
    };
};

export default throttle;
