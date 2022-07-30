function Main() {
    console.log("[TypePractice.ts] 스크립트 시작");
    const playerMaker = (name) => ({ name });
    const nico = playerMaker("nico");
    nico.age = 12;
    const tuplePlayer = ["nico", 1, true];
    let a;
    if (typeof a === 'number') {
        let b = a + 1;
    }
    if (typeof a === 'string') {
        let b = a.toUpperCase();
    }
    console.log("[TypePractice.ts] 스크립트 종료");
}
export default Main;
