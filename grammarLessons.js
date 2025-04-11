const grammarLessons = {
    // B1 Lessons (25 total)
    'b1-lesson1': {
        description: `
            <h3>Present Tense Regular Verbs</h3>
            <p>Regular verbs in the present tense follow predictable patterns based on their endings: -ar, -er, -ir.</p>
            <p><strong>-ar verbs</strong>: -o, -as, -a, -amos, -áis, -an</p>
            <p>Example: <em>hablar</em> (to speak)</p>
            <ul>
                <li>yo hablo</li>
                <li>tú hablas</li>
                <li>él/ella habla</li>
                <li>nosotros hablamos</li>
                <li>vosotros habláis</li>
                <li>ellos/ellas hablan</li>
            </ul>
            <p><strong>-er verbs</strong>: -o, -es, -e, -emos, -éis, -en</p>
            <p><strong>-ir verbs</strong>: -o, -es, -e, -imos, -ís, -en</p>
        `,
        exercises: [
            { question: "Conjugate 'comer' for 'tú' in the present tense.", options: ["comes", "come", "comemos", "comen"], correct: "comes" },
            { question: "Conjugate 'vivir' for 'ellos' in the present tense.", options: ["viven", "vive", "vivimos", "vivo"], correct: "viven" },
            { question: "Conjugate 'hablar' for 'nosotros' in the present tense.", options: ["hablamos", "hablan", "hablo", "hablais"], correct: "hablamos" }
        ]
    },
    'b1-lesson2': {
        description: `
            <h3>Ser vs. Estar</h3>
            <p><em>Ser</em> is used for permanent states (identity, characteristics), while <em>estar</em> is used for temporary states (feelings, location).</p>
            <p>Examples:</p>
            <ul>
                <li><em>Soy estudiante</em> (I am a student - permanent).</li>
                <li><em>Estoy cansado</em> (I am tired - temporary).</li>
            </ul>
        `,
        exercises: [
            { question: "Choose the correct verb: 'Ella ___ muy simpática.'", options: ["es", "está"], correct: "es" },
            { question: "Choose the correct verb: 'Nosotros ___ en la escuela.'", options: ["somos", "estamos"], correct: "estamos" },
            { question: "Choose the correct verb: 'El café ___ caliente.'", options: ["es", "está"], correct: "está" }
        ]
    },
    'b1-lesson3': {
        description: `
            <h3>Direct Object Pronouns</h3>
            <p>Direct object pronouns replace nouns that receive the action: me, te, lo/la, nos, os, los/las.</p>
            <p>Example: <em>Veo el libro</em> → <em>Lo veo</em> (I see it).</p>
        `,
        exercises: [
            { question: "Replace the noun: 'Lavo los platos.'", options: ["los lavo", "lo lavo", "las lavo", "la lavo"], correct: "los lavo" },
            { question: "Replace the noun: 'Ella lee la carta.'", options: ["la lee", "lo lee", "le lee", "los lee"], correct: "la lee" },
            { question: "Complete: 'Nosotros ___ (ver) en el cine.'", options: ["los vemos", "lo vemos", "las vemos", "la vemos"], correct: "los vemos" }
        ]
    },
    'b1-lesson4': {
        description: `
            <h3>Present Tense Irregular Verbs</h3>
            <p>Some verbs are irregular in the present tense, like <em>tener</em> (to have): tengo, tienes, tiene, tenemos, tenéis, tienen.</p>
            <p>Example: <em>Yo tengo un perro</em> (I have a dog).</p>
        `,
        exercises: [
            { question: "Conjugate 'hacer' for 'yo' in the present tense.", options: ["hago", "haces", "hace", "hacemos"], correct: "hago" },
            { question: "Conjugate 'salir' for 'tú' in the present tense.", options: ["sales", "sale", "salgo", "salimos"], correct: "sales" },
            { question: "Conjugate 'decir' for 'él' in the present tense.", options: ["dice", "dices", "digo", "dicen"], correct: "dice" }
        ]
    },
    'b1-lesson5': {
        description: `
            <h3>Reflexive Verbs</h3>
            <p>Reflexive verbs indicate the subject acts on itself, using pronouns: me, te, se, nos, os, se.</p>
            <p>Example: <em>Me levanto</em> (I get up).</p>
        `,
        exercises: [
            { question: "Conjugate 'lavarse' for 'yo' in the present tense.", options: ["me lavo", "te lavas", "se lava", "nos lavamos"], correct: "me lavo" },
            { question: "Conjugate 'vestirse' for 'tú' in the present tense.", options: ["te vistes", "me visto", "se viste", "nos vestimos"], correct: "te vistes" },
            { question: "Conjugate 'acostarse' for 'ellos' in the present tense.", options: ["se acuestan", "me acuesto", "te acuestas", "nos acostamos"], correct: "se acuestan" }
        ]
    },
    'b1-lesson6': {
        description: `
            <h3>Preterite Tense Regular Verbs</h3>
            <p>The preterite tense describes completed past actions. Regular endings:</p>
            <ul>
                <li><strong>-ar verbs</strong>: -é, -aste, -ó, -amos, -asteis, -aron</li>
                <li><strong>-er/-ir verbs</strong>: -í, -iste, -ió, -imos, -isteis, -ieron</li>
            </ul>
            <p>Example: <em>comer</em> → <em>comí</em> (I ate).</p>
        `,
        exercises: [
            { question: "Conjugate 'hablar' in the preterite for 'yo'.", options: ["hablé", "hablaste", "habló", "hablamos"], correct: "hablé" },
            { question: "Conjugate 'vivir' in the preterite for 'tú'.", options: ["viviste", "viví", "vivió", "vivimos"], correct: "viviste" },
            { question: "Conjugate 'comer' in the preterite for 'ellos'.", options: ["comieron", "comí", "comiste", "comimos"], correct: "comieron" }
        ]
    },
    'b1-lesson7': {
        description: `
            <h3>Possessive Adjectives</h3>
            <p>Possessive adjectives show ownership and agree with the noun: mi, tu, su, nuestro/a, vuestro/a, su.</p>
            <p>Example: <em>Mi casa es grande</em> (My house is big).</p>
        `,
        exercises: [
            { question: "Choose the correct possessive: '___ libro es rojo.' (my)", options: ["mi", "tu", "su", "nuestro"], correct: "mi" },
            { question: "Choose the correct possessive: '___ padres viven lejos.' (our)", options: ["mi", "tu", "su", "nuestros"], correct: "nuestros" },
            { question: "Choose the correct possessive: 'Es ___ coche.' (your, singular)", options: ["mi", "tu", "su", "nuestro"], correct: "tu" }
        ]
    },
    'b1-lesson8': {
        description: `
            <h3>Adverbs of Frequency</h3>
            <p>Adverbs like <em>siempre</em> (always), <em>a veces</em> (sometimes), <em>nunca</em> (never) describe how often something happens.</p>
            <p>Example: <em>Siempre estudio por la noche</em> (I always study at night).</p>
        `,
        exercises: [
            { question: "Choose the correct adverb: '___ voy al cine.' (sometimes)", options: ["siempre", "a veces", "nunca", "todos los días"], correct: "a veces" },
            { question: "Choose the correct adverb: 'Ella ___ llega tarde.' (never)", options: ["siempre", "a veces", "nunca", "a menudo"], correct: "nunca" },
            { question: "Choose the correct adverb: '___ comemos juntos.' (always)", options: ["siempre", "a veces", "nunca", "rara vez"], correct: "siempre" }
        ]
    },
    'b1-lesson9': {
        description: `
            <h3>Demonstrative Adjectives</h3>
            <p>Demonstratives (este, ese, aquel) indicate proximity and agree with the noun: este (this), ese (that), aquel (that over there).</p>
            <p>Example: <em>Este libro es mío</em> (This book is mine).</p>
        `,
        exercises: [
            { question: "Choose the correct demonstrative: '___ casa es bonita.' (this)", options: ["esta", "esa", "aquella", "este"], correct: "esta" },
            { question: "Choose the correct demonstrative: '___ perro está lejos.' (that over there)", options: ["este", "ese", "aquel", "esta"], correct: "aquel" },
            { question: "Choose the correct demonstrative: '___ libros son nuevos.' (those)", options: ["estos", "esos", "aquellos", "estas"], correct: "esos" }
        ]
    },
    'b1-lesson10': {
        description: `
            <h3>Basic Prepositions</h3>
            <p>Prepositions like <em>a</em>, <em>de</em>, <em>en</em>, <em>con</em>, <em>por</em>, and <em>para</em> show relationships.</p>
            <p>Example: <em>Vivo en España</em> (I live in Spain).</p>
        `,
        exercises: [
            { question: "Choose the correct preposition: 'Voy ___ la escuela.'", options: ["a", "de", "en", "con"], correct: "a" },
            { question: "Choose the correct preposition: 'El libro es ___ María.'", options: ["a", "de", "en", "para"], correct: "de" },
            { question: "Choose the correct preposition: 'Hablo ___ mis amigos.'", options: ["a", "de", "con", "en"], correct: "con" }
        ]
    },
    'b1-lesson11': {
        description: `
            <h3>Imperfect Tense Regular Verbs</h3>
            <p>The imperfect tense describes ongoing or habitual past actions. Regular endings:</p>
            <ul>
                <li><strong>-ar verbs</strong>: -aba, -abas, -aba, -ábamos, -abais, -aban</li>
                <li><strong>-er/-ir verbs</strong>: -ía, -ías, -ía, -íamos, -íais, -ían</li>
            </ul>
            <p>Example: <em>vivir</em> → <em>vivía</em> (I was living).</p>
        `,
        exercises: [
            { question: "Conjugate 'hablar' in the imperfect for 'yo'.", options: ["hablaba", "hablabas", "habló", "hablábamos"], correct: "hablaba" },
            { question: "Conjugate 'comer' in the imperfect for 'tú'.", options: ["comías", "comía", "comiste", "comíamos"], correct: "comías" },
            { question: "Conjugate 'vivir' in the imperfect for 'ellos'.", options: ["vivían", "vivía", "vivieron", "vivíamos"], correct: "vivían" }
        ]
    },
    'b1-lesson12': {
        description: `
            <h3>Definite and Indefinite Articles</h3>
            <p>Definite articles (el, la, los, las) specify a noun, while indefinite articles (un, una, unos, unas) are less specific.</p>
            <p>Example: <em>El perro</em> (the dog), <em>Un perro</em> (a dog).</p>
        `,
        exercises: [
            { question: "Choose the correct article: '___ gato es negro.' (the)", options: ["el", "la", "los", "las"], correct: "el" },
            { question: "Choose the correct article: 'Necesito ___ silla.' (a)", options: ["un", "una", "unos", "unas"], correct: "una" },
            { question: "Choose the correct article: '___ niños juegan.' (the)", options: ["el", "la", "los", "las"], correct: "los" }
        ]
    },
    'b1-lesson13': {
        description: `
            <h3>Adjectives of Quantity</h3>
            <p>Adjectives like <em>mucho</em>, <em>poco</em>, <em>alguno</em>, and <em>ninguno</em> describe quantity and agree in gender and number with the noun.</p>
            <p>Example: <em>Tengo muchos libros</em> (I have many books).</p>
        `,
        exercises: [
            { question: "Choose the correct adjective: 'Hay ___ agua en la botella.' (little)", options: ["mucha", "poca", "mucho", "poco"], correct: "poca" },
            { question: "Choose the correct adjective: 'No tengo ___ problema.' (no)", options: ["algún", "ningún", "alguna", "ninguna"], correct: "ningún" },
            { question: "Choose the correct adjective: 'Quiero ___ dulces.' (some)", options: ["algún", "algunos", "ningún", "ningunos"], correct: "algunos" }
        ]
    },
    'b1-lesson14': {
        description: `
            <h3>Present Progressive</h3>
            <p>The present progressive describes actions happening now, using <em>estar</em> + gerund (-ando for -ar verbs, -iendo for -er/-ir verbs).</p>
            <p>Example: <em>Estoy estudiando</em> (I am studying).</p>
        `,
        exercises: [
            { question: "Form the present progressive: 'Yo ___ (trabajar).'", options: ["estoy trabajando", "estás trabajando", "está trabajando", "trabajo"], correct: "estoy trabajando" },
            { question: "Form the present progressive: 'Ellos ___ (comer).'", options: ["están comiendo", "estás comiendo", "estoy comiendo", "comen"], correct: "están comiendo" },
            { question: "Form the present progressive: 'Tú ___ (vivir).'", options: ["estás viviendo", "estoy viviendo", "está viviendo", "vives"], correct: "estás viviendo" }
        ]
    },
    'b1-lesson15': {
        description: `
            <h3>Basic Question Words</h3>
            <p>Question words like <em>qué</em>, <em>quién</em>, <em>dónde</em>, <em>cuándo</em>, <em>por qué</em>, and <em>cómo</em> are used to form questions.</p>
            <p>Example: <em>¿Dónde vives?</em> (Where do you live?)</p>
        `,
        exercises: [
            { question: "Choose the correct question word: '___ es tu nombre?'", options: ["Qué", "Quién", "Dónde", "Cómo"], correct: "Qué" },
            { question: "Choose the correct question word: '___ estás aquí?'", options: ["Qué", "Quién", "Por qué", "Cuándo"], correct: "Por qué" },
            { question: "Choose the correct question word: '___ es tu amigo?'", options: ["Qué", "Quién", "Dónde", "Cómo"], correct: "Quién" }
        ]
    },
    'b1-lesson16': {
        description: `
            <h3>Comparatives and Superlatives</h3>
            <p>Comparatives use <em>más...que</em> (more than), <em>menos...que</em> (less than), or <em>tan...como</em> (as...as). Superlatives use <em>el/la más/menos</em>.</p>
            <p>Examples:</p>
            <ul>
                <li><em>Más alto que</em> (taller than)</li>
                <li><em>El más alto</em> (the tallest)</li>
            </ul>
        `,
        exercises: [
            { question: "Complete: 'Ana es ___ alta ___ María.' (more...than)", options: ["más...que", "menos...que", "tan...como", "el más"], correct: "más...que" },
            { question: "Complete: 'Es ___ libro interesante.' (the most)", options: ["el más", "más que", "menos que", "tan como"], correct: "el más" },
            { question: "Complete: 'Juan es ___ rápido ___ Pedro.' (as...as)", options: ["más...que", "menos...que", "tan...como", "el más"], correct: "tan...como" }
        ]
    },
    'b1-lesson17': {
        description: `
            <h3>Negation</h3>
            <p>Use <em>no</em> before the verb to negate a sentence. Double negatives like <em>nada</em>, <em>nadie</em>, <em>nunca</em> are common.</p>
            <p>Example: <em>No veo nada</em> (I don’t see anything).</p>
        `,
        exercises: [
            { question: "Negate: 'Voy a la fiesta.'", options: ["No voy a la fiesta.", "Voy no a la fiesta.", "Voy a no fiesta.", "No voy fiesta."], correct: "No voy a la fiesta." },
            { question: "Choose the correct word: 'No hay ___ en la casa.' (nobody)", options: ["nada", "nadie", "nunca", "ninguno"], correct: "nadie" },
            { question: "Choose the correct word: 'No tengo ___ tiempo.' (no)", options: ["nada", "nadie", "nunca", "ningún"], correct: "ningún" }
        ]
    },
    'b1-lesson18': {
        description: `
            <h3>Stem-Changing Verbs (Present Tense)</h3>
            <p>Stem-changing verbs change their stem vowel in the present tense (e.g., e→ie, o→ue, e→i), except in nosotros/vosotros forms.</p>
            <p>Example: <em>querer</em> (e→ie)</p>
            <ul>
                <li>yo quiero</li>
                <li>tú quieres</li>
                <li>él/ella quiere</li>
                <li>nosotros queremos</li>
                <li>vosotros queréis</li>
                <li>ellos/ellas quieren</li>
            </ul>
        `,
        exercises: [
            { question: "Conjugate 'poder' for 'yo' in the present tense.", options: ["puedo", "puedes", "puede", "podemos"], correct: "puedo" },
            { question: "Conjugate 'dormir' for 'tú' in the present tense.", options: ["duermo", "duermes", "duerme", "dormimos"], correct: "duermes" },
            { question: "Conjugate 'pedir' for 'ellos' in the present tense.", options: ["pido", "pides", "pide", "piden"], correct: "piden" }
        ]
    },
    'b1-lesson19': {
        description: `
            <h3>Adverbs Ending in -mente</h3>
            <p>Adverbs are formed by adding <em>-mente</em> to the feminine form of adjectives.</p>
            <p>Example: <em>rápido</em> → <em>rápida</em> → <em>rápidamente</em> (quickly).</p>
        `,
        exercises: [
            { question: "Form the adverb from 'claro'.", options: ["claramente", "claromente", "clara", "claro"], correct: "claramente" },
            { question: "Form the adverb from 'lento'.", options: ["lentamente", "lentomente", "lenta", "lento"], correct: "lentamente" },
            { question: "Form the adverb from 'fácil'.", options: ["fácilmente", "fácilamente", "fácila", "fácil"], correct: "fácilmente" }
        ]
    },
    'b1-lesson20': {
        description: `
            <h3>Time Expressions</h3>
            <p>Time expressions like <em>hace</em>, <em>desde</em>, and <em>dentro de</em> indicate duration or points in time.</p>
            <p>Examples:</p>
            <ul>
                <li><em>Hace dos años</em> (two years ago)</li>
                <li><em>Desde 2020</em> (since 2020)</li>
            </ul>
        `,
        exercises: [
            { question: "Complete: 'Vivo aquí ___ tres años.' (for)", options: ["hace", "desde", "dentro de", "en"], correct: "desde" },
            { question: "Complete: 'Lo vi ___ una hora.' (ago)", options: ["hace", "desde", "dentro de", "en"], correct: "hace" },
            { question: "Complete: 'Terminaré ___ dos días.' (in)", options: ["hace", "desde", "dentro de", "en"], correct: "dentro de" }
        ]
    },
    'b1-lesson21': {
        description: `
            <h3>Commands (Imperative Mood - Affirmative Tú)</h3>
            <p>The affirmative <em>tú</em> command for regular verbs uses the third-person singular present indicative form. It’s used for giving instructions or orders.</p>
            <ul>
                <li><strong>-ar verbs</strong>: e.g., <em>hablar</em> → <em>habla</em> (speak)</li>
                <li><strong>-er verbs</strong>: e.g., <em>comer</em> → <em>come</em> (eat)</li>
                <li><strong>-ir verbs</strong>: e.g., <em>vivir</em> → <em>vive</em> (live)</li>
            </ul>
            <p>Example: <em>¡Habla conmigo!</em> (Talk to me!)</p>
        `,
        exercises: [
            { question: "Form the affirmative tú command for 'escuchar'.", options: ["escucha", "escuchas", "escuche", "escucho"], correct: "escucha" },
            { question: "Form the affirmative tú command for 'abrir'.", options: ["abre", "abres", "abra", "abro"], correct: "abre" },
            { question: "Form the affirmative tú command for 'cantar'.", options: ["canta", "cantas", "cante", "canto"], correct: "canta" }
        ]
    },
    'b1-lesson22': {
        description: `
            <h3>Introduction to Present Subjunctive</h3>
            <p>The present subjunctive is used for desires, doubts, or suggestions, often after expressions like <em>espero que</em> or <em>quiero que</em>. For regular verbs:</p>
            <ul>
                <li><strong>-ar verbs</strong>: -e, -es, -e, -emos, -éis, -en</li>
                <li><strong>-er/-ir verbs</strong>: -a, -as, -a, -amos, -áis, -an</li>
            </ul>
            <p>Example: <em>Espero que hables</em> (I hope you speak).</p>
        `,
        exercises: [
            { question: "Conjugate 'hablar' for 'tú' after 'espero que'.", options: ["hablas", "hables", "habla", "hablamos"], correct: "hables" },
            { question: "Conjugate 'comer' for 'él' after 'quiero que'.", options: ["come", "coma", "comes", "comamos"], correct: "coma" },
            { question: "Complete: 'Espero que ___ (vivir) aquí.'", options: ["vivas", "vives", "viva", "vivimos"], correct: "vivas" }
        ]
    },
    'b1-lesson23': {
        description: `
            <h3>Indirect Object Pronouns</h3>
            <p>Indirect object pronouns (me, te, le, nos, os, les) indicate to whom or for whom an action is done. They’re placed before conjugated verbs or attached to infinitives.</p>
            <p>Example: <em>Doy un libro a María</em> → <em>Le doy un libro</em> (I give her a book).</p>
        `,
        exercises: [
            { question: "Replace the noun: 'Doy un regalo a Juan.'", options: ["le doy", "lo doy", "me doy", "te doy"], correct: "le doy" },
            { question: "Replace the noun: 'Ella dice la verdad a nosotros.'", options: ["nos dice", "les dice", "lo dice", "te dice"], correct: "nos dice" },
            { question: "Complete: '___ (dar) un regalo a Juan.'", options: ["le doy", "lo doy", "me doy", "te doy"], correct: "le doy" }
        ]
    },
    'b1-lesson24': {
        description: `
            <h3>Preterite Irregular Verbs</h3>
            <p>Some verbs have irregular forms in the preterite tense, such as <em>hacer</em> (to do/make) → <em>hice</em> or <em>ir</em> (to go) → <em>fui</em>.</p>
            <p>Example: <em>venir</em> (to come)</p>
            <ul>
                <li>yo vine</li>
                <li>tú viniste</li>
                <li>él/ella vino</li>
                <li>nosotros vinimos</li>
                <li>vosotros vinisteis</li>
                <li>ellos/ellas vinieron</li>
            </ul>
        `,
        exercises: [
            { question: "Conjugate 'hacer' for 'yo' in the preterite.", options: ["hice", "hiciste", "hizo", "hicimos"], correct: "hice" },
            { question: "Conjugate 'ir' for 'tú' in the preterite.", options: ["fui", "fuiste", "fue", "fuimos"], correct: "fuiste" },
            { question: "Conjugate 'venir' for 'ellos' in the preterite.", options: ["vine", "viniste", "vino", "vinieron"], correct: "vinieron" }
        ]
    },
    'b1-lesson25': {
        description: `
            <h3>Gustar and Similar Verbs</h3>
            <p>Verbs like <em>gustar</em> (to like), <em>interesar</em> (to interest), and <em>doler</em> (to hurt) use indirect object pronouns and are structured differently from English.</p>
            <p>Example: <em>Me gusta el libro</em> (I like the book, lit. The book is pleasing to me).</p>
            <ul>
                <li>Singular: <em>gusta</em></li>
                <li>Plural: <em>gustan</em></li>
            </ul>
        `,
        exercises: [
            { question: "Complete: 'A mí ___ la música.' (I like)", options: ["me gusta", "me gustan", "te gusta", "le gusta"], correct: "me gusta" },
            { question: "Complete: 'A ellos ___ los libros.' (They like)", options: ["les gusta", "les gustan", "me gustan", "te gustan"], correct: "les gustan" },
            { question: "Complete: 'A ti ___ el pie?' (Does it hurt)", options: ["te duele", "te duelen", "me duele", "le duele"], correct: "te duele" }
        ]
    },
    'b2-lesson1': {
        description: `
            <h3>Present Subjunctive Regular Verbs</h3>
            <p>The present subjunctive is used for desires, doubts, wishes, or hypothetical situations, often after expressions like <em>espero que</em> or <em>quiero que</em>. Regular verb endings are:</p>
            <ul>
                <li><strong>-ar verbs</strong>: -e, -es, -e, -emos, -éis, -en</li>
                <li><strong>-er/-ir verbs</strong>: -a, -as, -a, -amos, -áis, -an</li>
            </ul>
            <p>Example: <em>trabajar</em> (to work)</p>
            <ul>
                <li>que yo trabaje</li>
                <li>que tú trabajes</li>
                <li>que él/ella trabaje</li>
                <li>que nosotros trabajemos</li>
                <li>que vosotros trabajéis</li>
                <li>que ellos/ellas trabajen</li>
            </ul>
        `,
        exercises: [
            { question: "Conjugate 'hablar' in the present subjunctive for 'tú'.", options: ["hablas", "hables", "habla", "hablamos"], correct: "hables" },
            { question: "Conjugate 'comer' in the present subjunctive for 'él'.", options: ["come", "coma", "comes", "comamos"], correct: "coma" },
            { question: "Conjugate 'vivir' in the present subjunctive for 'nosotros'.", options: ["vivimos", "vivamos", "vivan", "vivas"], correct: "vivamos" }
        ]
    },
    'b2-lesson2': {
        description: `
            <h3>Past Perfect Tense</h3>
            <p>The past perfect (pluscuamperfecto) describes actions completed before another past action. It uses the imperfect of <em>haber</em> (había, habías, había, habíamos, habíais, habían) plus the past participle (-ado for -ar verbs, -ido for -er/-ir verbs).</p>
            <p>Example: <em>vivir</em> (to live)</p>
            <ul>
                <li>yo había vivido</li>
                <li>tú habías vivido</li>
                <li>él/ella había vivido</li>
                <li>nosotros habíamos vivido</li>
                <li>vosotros habíais vivido</li>
                <li>ellos/ellas habían vivido</li>
            </ul>
        `,
        exercises: [
            { question: "Conjugate 'hablar' in the past perfect for 'yo'.", options: ["había hablado", "habías hablado", "había hablada", "habíamos hablado"], correct: "había hablado" },
            { question: "Conjugate 'comer' in the past perfect for 'nosotros'.", options: ["había comido", "habíamos comido", "habíais comido", "habían comido"], correct: "habíamos comido" },
            { question: "Complete: 'Ella ___ (vivir) en España antes de mudarse.'", options: ["había vivido", "habías vivido", "había viviendo", "habíamos vivido"], correct: "había vivido" }
        ]
    },
    'b2-lesson3': {
        description: `
            <h3>Indirect Object Pronouns</h3>
            <p>Indirect object pronouns indicate to whom or for whom an action is done: me, te, le, nos, os, les. They are placed before conjugated verbs or attached to infinitives/gerunds.</p>
            <p>Example: <em>Escribo una carta a María</em> → <em>Le escribo una carta</em> (I write her a letter).</p>
        `,
        exercises: [
            { question: "Replace the noun: 'Doy un regalo a Juan.'", options: ["le doy", "lo doy", "me doy", "te doy"], correct: "le doy" },
            { question: "Replace the noun: 'Ella cuenta un cuento a los niños.'", options: ["les cuenta", "los cuenta", "le cuenta", "nos cuenta"], correct: "les cuenta" },
            { question: "Complete: 'Nosotros ___ (enviar) invitaciones a los amigos.'", options: ["les enviamos", "los enviamos", "le enviamos", "te enviamos"], correct: "les enviamos" }
        ]
    },
    'b2-lesson4': {
        description: `
            <h3>Imperfect Subjunctive</h3>
            <p>The imperfect subjunctive is used for hypothetical situations, wishes, or doubts in the past, often after <em>si</em> or verbs like <em>quería que</em>. Endings are:</p>
            <ul>
                <li><strong>-ar verbs</strong>: -ara, -aras, -ara, -áramos, -arais, -aran</li>
                <li><strong>-er/-ir verbs</strong>: -iera, -ieras, -iera, -iéramos, -ierais, -ieran</li>
            </ul>
            <p>Example: <em>hablar</em> → <em>que yo hablara</em> (that I was speaking).</p>
        `,
        exercises: [
            { question: "Conjugate 'vivir' in the imperfect subjunctive for 'yo'.", options: ["viviera", "vivieras", "viviera", "viviéramos"], correct: "viviera" },
            { question: "Conjugate 'comer' in the imperfect subjunctive for 'tú'.", options: ["comiera", "comieras", "comiera", "comiéramos"], correct: "comieras" },
            { question: "Complete: 'Quería que nosotros ___ (trabajar) juntos.'", options: ["trabajáramos", "trabajamos", "trabajaran", "trabajas"], correct: "trabajáramos" }
        ]
    },
    'b2-lesson5': {
        description: `
            <h3>Future Tense</h3>
            <p>The future tense expresses actions that will happen. It’s formed by adding endings to the infinitive: -é, -ás, -á, -emos, -éis, -án.</p>
            <p>Example: <em>aprender</em> (to learn)</p>
            <ul>
                <li>yo aprenderé</li>
                <li>tú aprenderás</li>
                <li>él/ella aprenderá</li>
                <li>nosotros aprenderemos</li>
                <li>vosotros aprenderéis</li>
                <li>ellos/ellas aprenderán</li>
            </ul>
        `,
        exercises: [
            { question: "Conjugate 'vivir' in the future tense for 'yo'.", options: ["viviré", "vivirás", "vivirá", "viviremos"], correct: "viviré" },
            { question: "Conjugate 'comer' in the future tense for 'tú'.", options: ["comeré", "comerás", "comerá", "comeremos"], correct: "comerás" },
            { question: "Conjugate 'hablar' in the future tense for 'ellos'.", options: ["hablaré", "hablarás", "hablará", "hablarán"], correct: "hablarán" }
        ]
    },
    'b2-lesson6': {
        description: `
            <h3>Conditional Tense</h3>
            <p>The conditional tense expresses what would happen under certain conditions. It uses the infinitive plus endings: -ía, -ías, -ía, -íamos, -íais, -ían.</p>
            <p>Example: <em>comer</em> (to eat)</p>
            <ul>
                <li>yo comería</li>
                <li>tú comerías</li>
                <li>él/ella comería</li>
                <li>nosotros comeríamos</li>
                <li>vosotros comeríais</li>
                <li>ellos/ellas comerían</li>
            </ul>
        `,
        exercises: [
            { question: "Conjugate 'hablar' in the conditional tense for 'yo'.", options: ["hablaría", "hablarías", "hablaría", "hablaríamos"], correct: "hablaría" },
            { question: "Conjugate 'vivir' in the conditional tense for 'tú'.", options: ["viviría", "vivirías", "viviría", "viviríamos"], correct: "vivirías" },
            { question: "Complete: 'Ellos ___ (aprender) si estudiaran.'", options: ["aprenderían", "aprenderías", "aprendería", "aprenderíamos"], correct: "aprenderían" }
        ]
    },
    'b2-lesson7': {
        description: `
            <h3>Por vs. Para</h3>
            <p><em>Por</em> and <em>para</em> are prepositions with distinct uses:</p>
            <ul>
                <li><strong>Por</strong>: Indicates cause, means, duration, or exchange (e.g., <em>Gracias por tu ayuda</em> - Thanks for your help).</li>
                <li><strong>Para</strong>: Indicates purpose, destination, or deadlines (e.g., <em>Estudio para aprender</em> - I study to learn).</li>
            </ul>
        `,
        exercises: [
            { question: "Choose the correct preposition: 'Trabajo ___ ganar dinero.'", options: ["por", "para"], correct: "para" },
            { question: "Choose the correct preposition: 'Caminé ___ el parque.'", options: ["por", "para"], correct: "por" },
            { question: "Choose the correct preposition: 'Compré un regalo ___ mi madre.'", options: ["por", "para"], correct: "para" }
        ]
    },
    'b2-lesson8': {
        description: `
            <h3>Relative Pronouns</h3>
            <p>Relative pronouns (que, quien, el que, lo que) connect clauses and refer to a noun or idea. <em>Que</em> is the most common, used for people or things.</p>
            <p>Example: <em>El libro que leí es interesante</em> (The book that I read is interesting).</p>
        `,
        exercises: [
            { question: "Choose the correct pronoun: 'La chica ___ conocí es amable.'", options: ["que", "quien", "el que", "lo que"], correct: "que" },
            { question: "Choose the correct pronoun: 'No entiendo ___ dijiste.'", options: ["que", "quien", "el que", "lo que"], correct: "lo que" },
            { question: "Choose the correct pronoun: 'Es una persona ___ ayuda a todos.'", options: ["que", "quien", "el que", "lo que"], correct: "quien" }
        ]
    },
    'b2-lesson9': {
        description: `
            <h3>Preterite vs. Imperfect</h3>
            <p>The preterite describes completed actions, while the imperfect describes ongoing or habitual past actions.</p>
            <ul>
                <li><strong>Preterite</strong>: <em>Ayer comí pizza</em> (Yesterday I ate pizza).</li>
                <li><strong>Imperfect</strong>: <em>Comía pizza cada viernes</em> (I was eating pizza every Friday).</li>
            </ul>
        `,
        exercises: [
            { question: "Choose the correct tense: 'Ayer ___ (llover) todo el día.'", options: ["llovió", "llovía"], correct: "llovió" },
            { question: "Choose the correct tense: 'Cuando era niño, ___ (jugar) mucho.'", options: ["jugué", "jugaba"], correct: "jugaba" },
            { question: "Choose the correct tense: 'Ella ___ (cantar) cuando llegué.'", options: ["cantó", "cantaba"], correct: "cantaba" }
        ]
    },
    'b2-lesson10': {
        description: `
            <h3>Commands (Imperative Mood)</h3>
            <p>The imperative mood gives commands. For <em>tú</em> affirmative commands, use the third-person singular present indicative for regular verbs.</p>
            <ul>
                <li><em>hablar</em> → <em>habla</em> (speak)</li>
                <li><em>comer</em> → <em>come</em> (eat)</li>
                <li><em>vivir</em> → <em>vive</em> (live)</li>
            </ul>
            <p>Negative commands use the present subjunctive.</p>
        `,
        exercises: [
            { question: "Form the affirmative tú command for 'hablar'.", options: ["habla", "hables", "hablo", "hablamos"], correct: "habla" },
            { question: "Form the negative tú command for 'comer'.", options: ["come", "no comas", "no come", "comas"], correct: "no comas" },
            { question: "Form the affirmative tú command for 'vivir'.", options: ["vive", "vivas", "vivo", "vivimos"], correct: "vive" }
        ]
    },
    'b2-lesson11': {
        description: `
            <h3>Present Subjunctive Irregular Verbs</h3>
            <p>Irregular verbs in the present subjunctive often have stem changes or unique forms, e.g., <em>saber</em> → <em>sepa</em>, <em>ir</em> → <em>vaya</em>.</p>
            <p>Example: <em>tener</em> (to have)</p>
            <ul>
                <li>que yo tenga</li>
                <li>que tú tengas</li>
                <li>que él/ella tenga</li>
                <li>que nosotros tengamos</li>
                <li>que vosotros tengáis</li>
                <li>que ellos/ellas tengan</li>
            </ul>
        `,
        exercises: [
            { question: "Conjugate 'saber' in the present subjunctive for 'yo'.", options: ["sepa", "sepas", "sabe", "sepamos"], correct: "sepa" },
            { question: "Conjugate 'ir' in the present subjunctive for 'tú'.", options: ["vas", "vayas", "va", "vamos"], correct: "vayas" },
            { question: "Conjugate 'hacer' in the present subjunctive for 'ellos'.", options: ["hagan", "hagas", "haga", "hagamos"], correct: "hagan" }
        ]
    },
    'b2-lesson12': {
        description: `
            <h3>Reflexive Verbs in Subjunctive</h3>
            <p>Reflexive verbs in the present subjunctive follow the same conjugation rules, with reflexive pronouns (me, te, se, etc.).</p>
            <p>Example: <em>levantarse</em> (to get up)</p>
            <ul>
                <li>que yo me levante</li>
                <li>que tú te levantes</li>
                <li>que él/ella se levante</li>
                <li>que nosotros nos levantemos</li>
                <li>que vosotros os levantéis</li>
                <li>que ellos/ellas se levanten</li>
            </ul>
        `,
        exercises: [
            { question: "Conjugate 'ducharse' in the present subjunctive for 'yo'.", options: ["me duche", "te duches", "se duche", "nos duchemos"], correct: "me duche" },
            { question: "Conjugate 'acostarse' in the present subjunctive for 'tú'.", options: ["te acuestes", "me acueste", "se acueste", "nos acostemos"], correct: "te acuestes" },
            { question: "Complete: 'Espero que ellos ___ (despertarse) temprano.'", options: ["se despierten", "se despiertan", "te despiertes", "me despierte"], correct: "se despierten" }
        ]
    },
    'b2-lesson13': {
        description: `
            <h3>Se for Impersonal and Passive</h3>
            <p>The pronoun <em>se</em> is used for impersonal expressions (general subjects) or passive constructions.</p>
            <p>Examples:</p>
            <ul>
                <li>Impersonal: <em>Se habla español</em> (Spanish is spoken).</li>
                <li>Passive: <em>Se vendieron los libros</em> (The books were sold).</li>
            </ul>
        `,
        exercises: [
            { question: "Choose the correct form: '___ inglés en esta escuela.' (English is taught)", options: ["Se enseña", "Se enseñan", "Enseña", "Enseñan"], correct: "Se enseña" },
            { question: "Choose the correct form: '___ los platos después de comer.' (The dishes are washed)", options: ["Se lava", "Se lavan", "Lava", "Lavan"], correct: "Se lavan" },
            { question: "Complete: '___ que es peligroso.' (It is said)", options: ["Se dice", "Se dicen", "Dice", "Dicen"], correct: "Se dice" }
        ]
    },
    'b2-lesson14': {
        description: `
            <h3>Past Subjunctive Triggers</h3>
            <p>The imperfect subjunctive is often triggered by past-tense verbs expressing doubt, desire, or hypothetical situations, e.g., <em>quería que</em>, <em>si</em>.</p>
            <p>Example: <em>Quería que vinieras</em> (I wanted you to come).</p>
        `,
        exercises: [
            { question: "Complete: 'Esperaba que tú ___ (estudiar).'", options: ["estudiaras", "estudiabas", "estudias", "estudiara"], correct: "estudiaras" },
            { question: "Complete: 'Si ___ (tener) tiempo, viajaría.'", options: ["tuviera", "tenía", "tengo", "tuviese"], correct: "tuviera" },
            { question: "Complete: 'Dudaba que ellos ___ (llegar) a tiempo.'", options: ["llegaran", "llegaban", "llegasen", "llegaron"], correct: "llegaran" }
        ]
    },
    'b2-lesson15': {
        description: `
            <h3>Conditional Sentences with Si</h3>
            <p>Conditional sentences with <em>si</em> (if) use the imperfect subjunctive for hypothetical situations and the conditional for the result.</p>
            <p>Example: <em>Si tuviera dinero, viajaría</em> (If I had money, I would travel).</p>
        `,
        exercises: [
            { question: "Complete: 'Si ___ (saber) la verdad, te lo diría.'", options: ["supiera", "sabía", "sé", "supiese"], correct: "supiera" },
            { question: "Complete: 'Si estudiaras, ___ (aprobar).'", options: ["aprobarías", "aprobabas", "apruebas", "aprobarías"], correct: "aprobarías" },
            { question: "Complete: 'Si ___ (ser) rico, compraría una casa.'", options: ["fuera", "era", "es", "fuese"], correct: "fuera" }
        ]
    },
    'b2-lesson16': {
        description: `
            <h3>Gerunds and Infinitives</h3>
            <p>Gerunds (-ando, -iendo) describe ongoing actions, while infinitives are used after certain verbs like <em>querer</em> or prepositions.</p>
            <p>Examples:</p>
            <ul>
                <li><em>Estoy corriendo</em> (I’m running).</li>
                <li><em>Quiero aprender</em> (I want to learn).</li>
            </ul>
        `,
        exercises: [
            { question: "Choose the correct form: 'Me gusta ___ (cantar).'", options: ["cantar", "cantando", "canto", "cantas"], correct: "cantar" },
            { question: "Choose the correct form: 'Ellos están ___ (trabajar).'", options: ["trabajando", "trabajar", "trabajan", "trabajas"], correct: "trabajando" },
            { question: "Complete: 'Después de ___ (comer), descansaré.'", options: ["comer", "comiendo", "comí", "como"], correct: "comer" }
        ]
    },
    'b2-lesson17': {
        description: `
            <h3>Double Object Pronouns</h3>
            <p>When using direct and indirect object pronouns together, the indirect pronoun comes first (e.g., me lo, te la).</p>
            <p>Example: <em>Dámelo</em> (Give it to me).</p>
        `,
        exercises: [
            { question: "Complete: 'Ella ___ (dar, el libro, a mí).'", options: ["me lo da", "lo me da", "me la da", "la me da"], correct: "me lo da" },
            { question: "Complete: 'Nosotros ___ (enviar, la carta, a ellos).'", options: ["se la enviamos", "la se enviamos", "se lo enviamos", "lo se enviamos"], correct: "se la enviamos" },
            { question: "Complete: 'Tú ___ (comprar, el regalo, a ella).'", options: ["se lo compras", "lo se compras", "se la compras", "la se compras"], correct: "se lo compras" }
        ]
    },
    'b2-lesson18': {
        description: `
            <h3>Preterite Irregular Verbs</h3>
            <p>Some verbs have irregular stems in the preterite, e.g., <em>hacer</em> → <em>hice</em>, <em>venir</em> → <em>vine</em>.</p>
            <p>Example: <em>querer</em> (to want)</p>
            <ul>
                <li>yo quise</li>
                <li>tú quisiste</li>
                <li>él/ella quiso</li>
                <li>nosotros quisimos</li>
                <li>vosotros quisisteis</li>
                <li>ellos/ellas quisieron</li>
            </ul>
        `,
        exercises: [
            { question: "Conjugate 'hacer' in the preterite for 'yo'.", options: ["hice", "hiciste", "hizo", "hicimos"], correct: "hice" },
            { question: "Conjugate 'venir' in the preterite for 'tú'.", options: ["vine", "viniste", "vino", "vinimos"], correct: "viniste" },
            { question: "Conjugate 'saber' in the preterite for 'ellos'.", options: ["supe", "supiste", "supo", "supieron"], correct: "supieron" }
        ]
    },
    'b2-lesson19': {
        description: `
            <h3>Subjunctive with Conjunctions</h3>
            <p>Certain conjunctions like <em>a menos que</em>, <em>para que</em>, and <em>sin que</em> trigger the subjunctive when expressing purpose or condition.</p>
            <p>Example: <em>Estudiaré para que apruebe</em> (I’ll study so that I pass).</p>
        `,
        exercises: [
            { question: "Complete: 'No iré ___ (tú, venir) conmigo.'", options: ["a menos que vengas", "a menos que vienes", "para que vengas", "sin que vengas"], correct: "a menos que vengas" },
            { question: "Complete: 'Trabajo ___ (ellos, estar) contentos.'", options: ["para que estén", "para que están", "sin que estén", "a menos que estén"], correct: "para que estén" },
            { question: "Complete: 'Lo hice ___ (nadie, saberlo).'", options: ["sin que lo sepa", "sin que lo sabe", "para que lo sepa", "a menos que lo sepa"], correct: "sin que lo sepa" }
        ]
    },
    'b2-lesson20': {
        description: `
            <h3>Adverbial Clauses</h3>
            <p>Adverbial clauses with <em>cuando</em>, <em>mientras</em>, or <em>antes de que</em> may use the subjunctive for future or hypothetical actions.</p>
            <p>Example: <em>Llámame antes de que vengas</em> (Call me before you come).</p>
        `,
        exercises: [
            { question: "Complete: 'Te ayudaré ___ (tú, terminar).'", options: ["cuando termines", "cuando terminaste", "mientras termines", "antes de que termines"], correct: "cuando termines" },
            { question: "Complete: 'Estudiaré ___ (llegar, ellos).'", options: ["antes de que lleguen", "antes de que llegaron", "mientras lleguen", "cuando lleguen"], correct: "antes de que lleguen" },
            { question: "Complete: 'Hablábamos ___ (él, trabajar).'", options: ["mientras trabajaba", "mientras trabaje", "antes de que trabaje", "cuando trabaje"], correct: "mientras trabajaba" }
        ]
    },
    'b2-lesson21': {
        description: `
            <h3>Past Perfect Subjunctive</h3>
            <p>The past perfect subjunctive (pluscuamperfecto de subjuntivo) is used for hypothetical past situations, often with <em>si</em> or <em>ojalá</em>. It’s formed with the imperfect subjunctive of <em>haber</em> (hubiera, hubieras, etc.) + past participle.</p>
            <p>Example: <em>vivir</em> (to live)</p>
            <ul>
                <li>hubiera vivido</li>
                <li>hubieras vivido</li>
                <li>hubiera vivido</li>
                <li>hubiéramos vivido</li>
                <li>hubierais vivido</li>
                <li>hubieran vivido</li>
            </ul>
            <p>Example: <em>Si hubiera vivido aquí, habría sido feliz</em> (If I had lived here, I would have been happy).</p>
        `,
        exercises: [
            { question: "Conjugate 'hablar' in the past perfect subjunctive for 'yo'.", options: ["hubiera hablado", "hubieras hablado", "había hablado", "hubiéramos hablado"], correct: "hubiera hablado" },
            { question: "Complete: 'Ojalá ___ (comer) contigo.'", options: ["hubiera comido", "había comido", "hubieras comido", "comiera"], correct: "hubiera comido" },
            { question: "Complete: 'Si ___ (vivir) en España, habría aprendido español.'", options: ["hubiera vivido", "había vivido", "viviera", "hubieras vivido"], correct: "hubiera vivido" }
        ]
    },
    'b2-lesson22': {
        description: `
            <h3>Double Object Pronouns with Commands</h3>
            <p>When using double object pronouns (indirect + direct) with commands, attach them to affirmative commands and place them before negative commands.</p>
            <p>Examples:</p>
            <ul>
                <li>Affirmative: <em>Dame el libro</em> → <em>Dámelo</em> (Give it to me).</li>
                <li>Negative: <em>No me lo des</em> (Don’t give it to me).</li>
            </ul>
        `,
        exercises: [
            { question: "Form the affirmative tú command: 'Dame la carta.'", options: ["dámela", "me la da", "dame la", "no me la des"], correct: "dámela" },
            { question: "Form the negative tú command: 'No des el libro a Juan.'", options: ["no se lo des", "no lo des", "no le des", "dáselo"], correct: "no se lo des" },
            { question: "Form the affirmative tú command: 'Compra el regalo para mí.'", options: ["cómpramelo", "me lo compra", "cómpralo", "no me lo compres"], correct: "cómpramelo" }
        ]
    },
    'b2-lesson23': {
        description: `
            <h3>Subjunctive with Adverbial Clauses (Advanced)</h3>
            <p>Advanced adverbial clauses with <em>aunque</em> (although), <em>hasta que</em> (until), or <em>en caso de que</em> (in case) use the subjunctive for uncertainty or future actions.</p>
            <p>Example: <em>Te esperaré hasta que llegues</em> (I’ll wait until you arrive).</p>
        `,
        exercises: [
            { question: "Complete: 'Saldré ___ (tú, estar) listo.'", options: ["hasta que estés", "hasta que estás", "cuando estés", "mientras estés"], correct: "hasta que estés" },
            { question: "Complete: '___ (llover), me quedaré en casa.'", options: ["en caso de que llueva", "en caso de que llueve", "aunque llueva", "hasta que llueva"], correct: "en caso de que llueva" },
            { question: "Complete: '___ (ser) tarde, llegaré.'", options: ["aunque sea", "aunque es", "hasta que sea", "en caso de que sea"], correct: "aunque sea" }
        ]
    },
    'b2-lesson24': {
        description: `
            <h3>Future Perfect</h3>
            <p>The future perfect describes actions that will have been completed by a future point. It’s formed with <em>haber</em> in the future tense (habré, habrás, etc.) + past participle.</p>
            <p>Example: <em>hablar</em> (to speak)</p>
            <ul>
                <li>habré hablado</li>
                <li>habrás hablado</li>
                <li>habrá hablado</li>
                <li>habremos hablado</li>
                <li>habréis hablado</li>
                <li>habrán hablado</li>
            </ul>
            <p>Example: <em>Habré terminado para mañana</em> (I will have finished by tomorrow).</p>
        `,
        exercises: [
            { question: "Conjugate 'vivir' in the future perfect for 'yo'.", options: ["habré vivido", "habrás vivido", "habrá vivido", "habremos vivido"], correct: "habré vivido" },
            { question: "Conjugate 'comer' in the future perfect for 'tú'.", options: ["habré comido", "habrás comido", "habrá comido", "habremos comido"], correct: "habrás comido" },
            { question: "Complete: 'Ellos ___ (llegar) antes de las 5.'", options: ["habrán llegado", "habré llegado", "habrás llegado", "llegarán"], correct: "habrán llegado" }
        ]
    },
    'b2-lesson25': {
        description: `
            <h3>Conditional Perfect</h3>
            <p>The conditional perfect expresses what would have happened under certain conditions. It’s formed with <em>haber</em> in the conditional (habría, habrías, etc.) + past participle.</p>
            <p>Example: <em>aprender</em> (to learn)</p>
            <ul>
                <li>habría aprendido</li>
                <li>habrías aprendido</li>
                <li>habría aprendido</li>
                <li>habríamos aprendido</li>
                <li>habríais aprendido</li>
                <li>habrían aprendido</li>
            </ul>
            <p>Example: <em>Habría aprendido si hubiera estudiado</em> (I would have learned if I had studied).</p>
        `,
        exercises: [
            { question: "Conjugate 'hablar' in the conditional perfect for 'yo'.", options: ["habría hablado", "habrías hablado", "habré hablado", "habríamos hablado"], correct: "habría hablado" },
            { question: "Complete: 'Tú ___ (terminar) si hubieras empezado antes.'", options: ["habrías terminado", "habrás terminado", "terminarías", "habría terminado"], correct: "habrías terminado" },
            { question: "Complete: 'Ellos ___ (vivir) aquí si pudieran.'", options: ["habrían vivido", "habrán vivido", "vivirían", "habrías vivido"], correct: "habrían vivido" }
        ]
    }
};