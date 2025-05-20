const {
    reverseString,
    isPalindrome,
    truncateString,
    countCharacters,
} = require('./src/stringUtils');

describe("Test sulla funzione reverseString", () => {
    test("Verifica l'inversione della stringa 'Ciao'", () => {
        let stringa = "Ciao";
        let stringa_inversa = "oaiC";
        expect(reverseString(stringa)).toBe(stringa_inversa);
    });

    test("La stringa vuota rimane la stringa vuota", () => {
        let stringa = "";
        let stringa_inversa = "";
        expect(reverseString(stringa)).toBe(stringa_inversa);
    });

    test("La stringa palindroma rimane la stessa", () => {
        let stringa = "anna";
        let stringa_inversa = "anna";
        expect(reverseString(stringa)).toBe(stringa_inversa);
    });
});

describe("Test sulla funzione isPalindrome", () => {
    test("La stringa 'anna' deve essere palindroma", () => {
        let stringa = "anna";
        expect(isPalindrome(stringa)).toBe(true);
    });

    test("La stringa 'AnNa' deve essere palindroma nonostante le maiuscole", () => {
        let stringa = "AnNa";
        expect(isPalindrome(stringa)).toBe(true);
    });

    test("La stringa vuota deve essere palindroma", () => {
        let stringa = "";
        expect(isPalindrome(stringa)).toBe(true);
    });

    test("La stringa 'Ciao' non deve essere palindroma", () => {
        let stringa = "Ciao";
        expect(isPalindrome(stringa)).toBe(false);
    });

    test("La stringa '(())' non deve essere palindroma", () => {
        let stringa = "(())";
        expect(isPalindrome(stringa)).toBe(false);
    });
});

describe("Test sulla funzione truncateString", () => {
    test("La stringa 'Buongiorno' con length=5 viene troncata a 'Buong...", () => {
        let stringa = "Buongiorno";
        let stringa_troncata = "Buong...";
        let maxLength = 5;
        expect(truncateString(stringa, 5)).toBe(stringa_troncata);
    });
});

describe("Test sulla funzione truncateString", () => {
    test("La stringa 'Salve' con length=5 viene troncata a 'Salve", () => {
        let stringa = "Salve";
        let stringa_troncata = "Salve";
        let maxLength = 5;
        expect(truncateString(stringa, 5)).toBe(stringa_troncata);
    });

    test("La stringa vuota con qualsiasi length restituisce la stringa vuota", () => {
        let stringa = "";
        let stringa_troncata = "";
        let maxLength = 3292;
        expect(truncateString(stringa, 3292)).toBe(stringa_troncata);
    });
    
    test("La stringa 'Oroka da na' con length=6 viene troncata a 'Oroka ...'", () => {
        let stringa = "Oroka da na";
        let stringa_troncata = "Oroka ...";
        let maxLength = 6;
        expect(truncateString(stringa, 6)).toBe(stringa_troncata);
    });
});

describe("Test sulla funzione countCharacters", () => {
    test("La stringa 'Ciao' conta [C = 1; i = 1; a = 1; o = 1]", () => {
        let stringa = "Ciao";
        let risultato = {"C": 1, "i": 1, "a": 1, "o": 1};
        expect(countCharacters(stringa)).toEqual(risultato);
    });

    test("La stringa 'Ciaoooo' conta [C = 1; i = 1; a = 1; o = 4]", () => {
        let stringa = "Ciaoooo";
        let risultato = {"C": 1, "i": 1, "a": 1, "o": 4};
        expect(countCharacters(stringa)).toEqual(risultato);
    });

    test("La stringa vuota non conta nulla", () => {
        let stringa = "";
        let risultato = {};
        expect(countCharacters(stringa)).toEqual(risultato);
    });
});
