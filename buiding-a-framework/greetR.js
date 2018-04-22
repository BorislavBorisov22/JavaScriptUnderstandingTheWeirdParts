;
(function(global, $) {
    const EMPTY_STRING = '';

    const supportedLanguages = ['en', 'es'];

    const greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    const formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    const logMessages = {
        en: 'Logged in',
        es: 'Inici Session'
    };

    const GreetR = function(firstName, lastName, language) {
        return new GreetR.init(firstName, lastName, language);
    };

    GreetR.prototype = {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        validate() {
            const langIndex = supportedLanguages.indexOf(this.language);
            if (langIndex < 0) {
                throw new Error('Invalid language');
            }
        },
        greeting() {
            return `${greetings[this.language]} ${this.firstName}!`
        },
        formalGreeting() {
            return `${formalGreetings[this.language]}, ${this.fullName()}`
        },
        greet(formal) {
            const msg = formal ? this.formalGreeting() : this.greeting();

            if (console) {
                console.log(msg);
            }

            return this;
        },
        log() {
            if (console) {
                console.log(logMessages[this.language], this.fullName);
            }

            return this;
        },
        greetDOM(selector, formal) {
            if (!$) {
                throw new Error('jQuery not loaded');
            }

            if (!selector) {
                throw new Error('selector not provided');
            }

            const greeting = formal ? this.formalGreeting() : this.greeting();
            $(selector).html(greeting);
            return this;
        },
        setLang(newLanguage) {
            this.language = newLanguage;
            this.validate();

            return this;
        }
    };

    GreetR.init = function(firstName, lastName, language) {
        const self = this;

        self.firstName = firstName || EMPTY_STRING;
        self.lastName = lastName || EMPTY_STRING;
        self.language = language || 'en';

        this.validate();
    };

    GreetR.init.prototype = GreetR.prototype;

    global.GreetR = global.G$ = GreetR;

}(window, jQuery));