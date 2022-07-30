function Main() {
    console.log("[ClassInterfacePractice.ts] 스크립트 시작");
    forClass();
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
export default Main;
