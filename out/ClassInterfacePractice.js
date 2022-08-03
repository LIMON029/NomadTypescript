function Main() {
    console.log("[ClassInterfacePractice.ts] 스크립트 시작");
    forPolymorphism();
    console.log("[ClassInterfacePractice.ts] 스크립트 종료");
}
function forHashMap() {
    class Dict {
        constructor() {
            this.words = {};
        }
        add(word) {
            if (this.words[word.term] === undefined) {
                this.words[word.term] = word.def;
            }
        }
        def(term) {
            return this.words[term];
        }
    }
    class Word {
        constructor(term, def) {
            this.term = term;
            this.def = def;
        }
    }
    const dict = new Dict();
    dict.add(new Word("kimchi", "김치"));
    dict.add(new Word("cider", "사이다"));
}
function forClass() {
    // 자바스크립트에는 private, public 구분 X
    class User {
        constructor(firstName, lastName, nickName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.nickName = nickName;
        }
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
    class Player extends User {
        getNickName() {
            console.log(this.nickName);
        }
    }
    const nico = new Player("nico", "las", "니꼬");
    nico.getFullName();
    nico.getNickName();
}
function forInterface() {
    const myUser = {
        name: "nico",
        TeamName: "nico Team"
    };
}
function forInterfaceUsage() {
    class Player {
        constructor(firstName, lastName, health) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.health = health;
        }
        sayHi(name) {
            return `Hello ${name}. My name is ${this.fullName()}.`;
        }
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
    function makeUser(user) {
        return user;
    }
    makeUser({
        firstName: "nico",
        lastName: "last",
        sayHi: (name) => `Hello ${name}.`,
        fullName: () => `${this.firstName} ${this.lastName}`
    });
}
function forPolymorphism() {
    class LocalStorage {
        constructor() {
            this.storage = {};
        }
        set(key, value) {
            if (this.storage[key] !== undefined) {
                throw Error("This key is already exist.");
            }
            this.storage[key] = value;
        }
        get(key) {
            if (this.storage[key] === undefined) {
                throw Error("This key is not exist.");
            }
            return this.storage[key];
        }
        remove(key) {
            if (this.storage[key] === undefined) {
                throw Error("This key is not exist.");
            }
            delete this.storage[key];
        }
        clear() {
            this.storage = {};
        }
    }
    const stringStorage = new LocalStorage();
    stringStorage.set("s", "aa");
    stringStorage.get("s");
    const booleanStorage = new LocalStorage();
    booleanStorage.get("s");
}
export default Main;
