function Main() {
    console.log("[FuncPractice.ts] 스크립트 시작")

    type Config = {
        path: string
        state: object
    }

    type Push = {
        (path: string): void
        (config: Config): void
    }

    const push: Push = (config) => {
        if(typeof config === "string") console.log(config)
        else {
            console.log(config.path)
        }
    }

    type Add = {
        (a: number, b: number): number
        (a: number, b: number, c: number): number
    }

    const add: Add = (a, b, c?:number) => {
        if(c) return a + b + c
        return a + b
    }

    type SuperPrint = { <T>(arr: T[]): void }
    type SuperReturn = { <T>(arr: T[]): T }

    const superPrint: SuperPrint = (arr) => {
        arr.forEach(i => console.log(i))
    }
    const superReturn: SuperReturn = (arr) => arr[0]

    superPrint([1, 2, false, true])
    console.log(superReturn([1, 2, 3, 4]))

    type Player<E> = {
        name:string
        extraInfo: E
    }

    const nico: Player<{favFood: string}> = {
        name: "nico",
        extraInfo: {
            favFood: "kimchi"
        }
    }

    console.log("[FuncPractice.ts] 스크립트 종료")
}

export default Main