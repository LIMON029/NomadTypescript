function Main() {
    console.log("[ClassInterfacePractice.ts] 스크립트 시작")

    forClass()

    console.log("[ClassInterfacePractice.ts] 스크립트 종료")
}

function forHashMap() {
    type Words = {[key:string]: string}

    class Dict {
        private words: Words
        constructor() {
            this.words = {}
        }
        add(word: Word) {
            if(this.words[word.term] === undefined) {
                this.words[word.term] = word.def
            }
        }
        def(term:string) {
            return this.words[term]
        }
        // 삭제, 업데이트
    }

    class Word {
        constructor(
            public term: string,
            public def: string
        ) {}
        // 단어 정의 추가, 수정, 단어 출력
    }

    const dict = new Dict()

    dict.add(new Word("kimchi", "김치"))
    dict.add(new Word("cider", "사이다"))
}

function forClass(){
    // 자바스크립트에는 private, public 구분 X
    abstract class User {
        constructor(
            protected firstName: string,
            protected lastName: string,
            protected nickName: string
        ) {}
        abstract getNickName():void
        getFullName() {
            return `${this.firstName} ${this.lastName}`
        }
    }

    class Player extends User {
        getNickName(): void {
            console.log(this.nickName)
        }
    }
    const nico = new Player("nico", "las", "니꼬")
    nico.getFullName()
    nico.getNickName()
}

export default Main