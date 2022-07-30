class Dict {
    constructor() {
        this.words = {};
    }
    add(word) {
        if (this.words[word.getTerm()] === undefined) {
            this.words[word.getTerm()] = word.getDef();
        }
        else {
            console.log(`This term(${word.getTerm()}) is already exist.`);
        }
    }
    def(term) {
        return this.words[term];
    }
    del(word) {
        let term;
        if (typeof (word) === "string") {
            term = word;
        }
        else {
            term = word.getTerm();
        }
        if (this.words[term] !== undefined) {
            delete this.words[term];
        }
        else {
            console.log(`This term(${term}) is not exist.`);
        }
    }
    update(arg1, arg2) {
        let term, def;
        if (arg2) {
            term = arg1;
            def = arg2;
        }
        else {
            term = arg1.getTerm();
            def = arg1.getDef();
        }
        this.words[term] = def;
    }
    print() {
        console.log(this.words);
    }
}
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
        this.getTerm = () => this.term;
        this.getDef = () => this.def;
    }
    addDef(extraDef) {
        this.def = `${this.def}, ${extraDef}`;
    }
    updateDef(newDef) {
        this.def = newDef;
    }
    print() {
        console.log(`${this.term}: ${this.def}`);
    }
}
const dict = new Dict();
const kimchi = new Word("kimchi", "김치");
const cider = new Word("cider", "사이다");
dict.add(kimchi);
dict.add(cider);
kimchi.updateDef("한국의 음식, 김치");
kimchi.print();
cider.addDef("탄산음료");
cider.print();
dict.update(kimchi);
dict.update(cider);
dict.del("cider");
dict.del(kimchi);
dict.print();
const light = new Word("light", "빛");
dict.add(light);
dict.print();
