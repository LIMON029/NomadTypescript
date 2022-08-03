function Main() {
    console.log("[TypePractice.ts] 스크립트 시작")

    type Player = {
        readonly name: string
        age ?: number
    }

    const playerMaker = (name: string): Player => ({name})

    const nico = playerMaker("nico")
    nico.age = 12

    const tuplePlayer: readonly [string, number, boolean] = ["nico", 1, true]

    let a:unknown

    if(typeof a === 'number'){
        let b = a + 1
    }
    if(typeof a === 'string'){
        let b = a.toUpperCase()
    }

    type TeamColor = "red" | "blud" | "yellow"
    type TeamHealth = 1 | 5 | 10
    interface Team {
        name: string
        color: TeamColor
        health: TeamHealth
    }

    const myTeam: Team = {
        name: "nico",
        color: "red",
        health: 5
    }

    console.log("[TypePractice.ts] 스크립트 종료")
}

export default Main