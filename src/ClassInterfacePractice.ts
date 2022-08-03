function Main() {
    console.log("[ClassInterfacePractice.ts] 스크립트 시작")

    forPolymorphism()

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
    }

    class Word {
        constructor(
            public term: string,
            public def: string
        ) {}
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

function forInterface() {
    interface User {
        name: string
    }

    interface TeamUser extends User {
        TeamName: string
    }

    const myUser: TeamUser = {
        name: "nico",
        TeamName: "nico Team"
    }
}

function forInterfaceUsage() {
    // abstract class는 js 변환 시 class와 구분 불가
    // inerface는 js에 존재하지 않음 -> js코드에 보여지지 않음
    interface User {
        firstName: string,
        lastName: string
        sayHi(name: string): string
        fullName(): string
    }

    interface Human {
        health: number
    }

    class Player implements User, Human {
        constructor(
            public firstName: string,
            public lastName: string,
            public health: number
        ) {}
        sayHi(name: string): string {
            return `Hello ${name}. My name is ${this.fullName()}.`
        }
        fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
    }

    function makeUser(user: User): User {
        return user
    }

    makeUser({
        firstName: "nico",
        lastName: "last",
        sayHi: (name: string) => `Hello ${name}.`,
        fullName: () => `${this.firstName} ${this.lastName}`
    })
}

function forPolymorphism() {
    interface MyStorage<T> {
        [key: string]: T
    }

    class LocalStorage<T> {
        private storage: MyStorage<T> = {}
        set(key: string, value: T) {
            if(this.storage[key] !== undefined) {
                throw Error("This key is already exist.")
            }
            this.storage[key] = value
        }
        get(key: string): T {
            if(this.storage[key] === undefined) {
                throw Error("This key is not exist.")
            }
            return this.storage[key]
        }
        remove(key: string) {
            if(this.storage[key] === undefined) {
                throw Error("This key is not exist.")
            }
            delete this.storage[key]
        }
        clear() {
            this.storage = {}
        }
    }

    const stringStorage = new LocalStorage<string>()
    stringStorage.set("s", "aa")
    stringStorage.get("s")

    const booleanStorage = new LocalStorage<boolean>()
    booleanStorage.get("s")
}

export default Main