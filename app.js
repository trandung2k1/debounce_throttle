document.addEventListener(
    'DOMContentLoaded',
    function () {
        const btn = document.getElementById('btn');
        //Debounce
        function debounce(callback, delay) {
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    callback(...args);
                }, delay);
            };
        }
        const getDataDebounce = debounce(() => {
            console.log('Fetching data using debounce ...');
        }, 3000);
        //Throttle
        function throttle(callback, delay) {
            let shouldWait = false;
            return (...args) => {
                if (shouldWait) return;
                callback(...args);
                shouldWait = true;
                setTimeout(() => {
                    shouldWait = false;
                }, delay);
            };
        }
        const getDataThrottle = throttle(() => {
            console.log('Fetching data using throttle...');
        }, 1000);
        btn.onclick = function () {
            getDataDebounce();
            getDataThrottle();
        };
    },
    false,
);
