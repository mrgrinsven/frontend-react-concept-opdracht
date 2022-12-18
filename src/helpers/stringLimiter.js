function stringLimiter(string) {
    if (string.length >= 100) {
        return string.slice(0, 100) + '...';
    } else {
        return string;
    }
}

export default stringLimiter;