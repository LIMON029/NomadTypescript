function Main() {
    console.log("[FuncPractice.ts] 스크립트 시작");
    const push = (config) => {
        if (typeof config === "string")
            console.log(config);
        else {
            console.log(config.path);
        }
    };
    const add = (a, b, c) => {
        if (c)
            return a + b + c;
        return a + b;
    };
    const superPrint = (arr) => {
        arr.forEach(i => console.log(i));
    };
    const superReturn = (arr) => arr[0];
    superPrint([1, 2, false, true]);
    console.log(superReturn([1, 2, 3, 4]));
    const nico = {
        name: "nico",
        extraInfo: {
            favFood: "kimchi"
        }
    };
    console.log("[FuncPractice.ts] 스크립트 종료");
}
export default Main;
