// Vocabulary categorized by type
        const vocabularyByCategory = {
            nouns: [
    // Basic B1 nouns
    {spanish: "el hombre", english: "man"},
    {spanish: "la mujer", english: "woman"},
    {spanish: "el niño", english: "boy"},
    {spanish: "la niña", english: "girl"},
    {spanish: "el perro", english: "dog"},
    {spanish: "el gato", english: "cat"},
    
    // Common B1 nouns
    {spanish: "la casa", english: "house"},
    {spanish: "el trabajo", english: "work/job"},
    {spanish: "la escuela", english: "school"},
    {spanish: "el libro", english: "book"},
    {spanish: "la comida", english: "food"},
    {spanish: "el tiempo", english: "time/weather"},
    {spanish: "la ciudad", english: "city"},
    {spanish: "el país", english: "country"},
    {spanish: "la familia", english: "family"},
    {spanish: "el amigo", english: "friend"},
    {spanish: "la vida", english: "life"},
    {spanish: "el dinero", english: "money"},
    {spanish: "el coche", english: "car"},
    {spanish: "la mesa", english: "table"},
    {spanish: "la silla", english: "chair"},
    
    // Natural environment B1-B2
    {spanish: "el bosque", english: "forest"},
    {spanish: "la montaña", english: "mountain"},
    {spanish: "el río", english: "river"},
    {spanish: "el mar", english: "sea"},
    {spanish: "el lago", english: "lake"},
    {spanish: "la playa", english: "beach"},
    {spanish: "el desierto", english: "desert"},
    {spanish: "la isla", english: "island"},
    {spanish: "la costa", english: "coast"},
    {spanish: "el cielo", english: "sky"},
    {spanish: "las nubes", english: "clouds"},
    {spanish: "la lluvia", english: "rain"},
    {spanish: "la nieve", english: "snow"},
    {spanish: "el clima", english: "climate"},
    
    // B2 level nouns
    {spanish: "el asunto", english: "matter/issue"},
    {spanish: "la decisión", english: "decision"},
    {spanish: "el gobierno", english: "government"},
    {spanish: "la empresa", english: "company/business"},
    {spanish: "el sistema", english: "system"},
    {spanish: "la sociedad", english: "society"},
    {spanish: "el desarrollo", english: "development"},
    {spanish: "la necesidad", english: "necessity/need"},
    {spanish: "el cambio", english: "change"},
    {spanish: "la situación", english: "situation"},
    {spanish: "el momento", english: "moment"},
    {spanish: "la forma", english: "form/shape"},
    {spanish: "el punto", english: "point"},
    {spanish: "la posibilidad", english: "possibility"},
    {spanish: "el caso", english: "case"},
    {spanish: "la información", english: "information"},
    {spanish: "el grupo", english: "group"},
    {spanish: "la experiencia", english: "experience"},
    {spanish: "el resultado", english: "result"},
    {spanish: "la actividad", english: "activity"},
    
    // Technology B2
    {spanish: "el ordenador", english: "computer"},
    {spanish: "la computadora", english: "computer (Latin America)"},
    {spanish: "el teléfono", english: "telephone"},
    {spanish: "el móvil", english: "mobile phone"},
    {spanish: "la red", english: "network"},
    {spanish: "el internet", english: "internet"},
    {spanish: "la aplicación", english: "application/app"},
    {spanish: "el dispositivo", english: "device"},
    {spanish: "la pantalla", english: "screen"},
    {spanish: "el teclado", english: "keyboard"},
    {spanish: "el ratón", english: "mouse (computer)"},
    {spanish: "la impresora", english: "printer"},
    {spanish: "la tecnología", english: "technology"},
    {spanish: "el programa", english: "program/software"},
    {spanish: "el archivo", english: "file"},
    {spanish: "la contraseña", english: "password"},
    
    // Academic B2-C1
    {spanish: "el conocimiento", english: "knowledge"},
    {spanish: "la investigación", english: "research/investigation"},
    {spanish: "el estudio", english: "study"},
    {spanish: "la universidad", english: "university"},
    {spanish: "la carrera", english: "career/degree"},
    {spanish: "el título", english: "degree/title"},
    {spanish: "la asignatura", english: "subject (academic)"},
    {spanish: "el examen", english: "exam"},
    {spanish: "el ensayo", english: "essay"},
    {spanish: "la tesis", english: "thesis"},
    {spanish: "el doctorado", english: "doctorate"},
    {spanish: "la ciencia", english: "science"},
    {spanish: "la teoría", english: "theory"},
    {spanish: "el análisis", english: "analysis"},
    {spanish: "la hipótesis", english: "hypothesis"},
    {spanish: "el argumento", english: "argument"},
    {spanish: "la conclusión", english: "conclusion"},
    {spanish: "el debate", english: "debate"},
    
    // Professional C1
    {spanish: "el emprendedor", english: "entrepreneur"},
    {spanish: "el ejecutivo", english: "executive"},
    {spanish: "la ejecutiva", english: "executive (female)"},
    {spanish: "el directivo", english: "manager/director"},
    {spanish: "la directiva", english: "manager/director (female)"},
    {spanish: "el empleado", english: "employee"},
    {spanish: "la empleada", english: "employee (female)"},
    {spanish: "el colega", english: "colleague"},
    {spanish: "el jefe", english: "boss"},
    {spanish: "la jefa", english: "boss (female)"},
    {spanish: "el cliente", english: "client"},
    {spanish: "la clienta", english: "client (female)"},
    {spanish: "el proveedor", english: "supplier/provider"},
    {spanish: "la proveedora", english: "supplier/provider (female)"},
    {spanish: "el contrato", english: "contract"},
    {spanish: "la negociación", english: "negotiation"},
    {spanish: "el acuerdo", english: "agreement"},
    {spanish: "la reunión", english: "meeting"},
    {spanish: "el presupuesto", english: "budget"},
    {spanish: "la inversión", english: "investment"},
    
    // Abstract nouns C1
    {spanish: "la identidad", english: "identity"},
    {spanish: "la responsabilidad", english: "responsibility"},
    {spanish: "la libertad", english: "freedom"},
    {spanish: "la justicia", english: "justice"},
    {spanish: "el bienestar", english: "well-being"},
    {spanish: "la igualdad", english: "equality"},
    {spanish: "la diversidad", english: "diversity"},
    {spanish: "la sostenibilidad", english: "sustainability"},
    {spanish: "la innovación", english: "innovation"},
    {spanish: "la perspectiva", english: "perspective"},
    {spanish: "el concepto", english: "concept"},
    {spanish: "la estrategia", english: "strategy"},
    {spanish: "la influencia", english: "influence"},
    {spanish: "el impacto", english: "impact"},
    {spanish: "la consecuencia", english: "consequence"},
    {spanish: "el equilibrio", english: "balance/equilibrium"},
    {spanish: "la conciencia", english: "consciousness/awareness"},
    {spanish: "la mentalidad", english: "mentality/mindset"},
    {spanish: "el paradigma", english: "paradigm"},
    {spanish: "la ambigüedad", english: "ambiguity"},
    
    // Advanced C1
    {spanish: "el ámbito", english: "scope/field/area"},
    {spanish: "el rasgo", english: "trait/feature"},
    {spanish: "la incertidumbre", english: "uncertainty"},
    {spanish: "el matiz", english: "nuance/shade"},
    {spanish: "la coyuntura", english: "situation/conjuncture"},
    {spanish: "el criterio", english: "criterion/judgment"},
    {spanish: "la índole", english: "nature/type"},
    {spanish: "el planteamiento", english: "approach/proposal"},
    {spanish: "la tesitura", english: "situation/position"},
    {spanish: "el patrimonio", english: "heritage/patrimony"},
    {spanish: "la trayectoria", english: "trajectory/career path"},
    {spanish: "el entorno", english: "environment/surroundings"},
    {spanish: "el auge", english: "peak/height/rise"},
    {spanish: "la repercusión", english: "repercussion/impact"},
    {spanish: "el desempeño", english: "performance/execution"},
    {spanish: "la envergadura", english: "magnitude/scope"},
    {spanish: "el eje", english: "axis/central element"},
    {spanish: "el sello", english: "stamp/seal/hallmark"},
    {spanish: "la divergencia", english: "divergence/difference"},
    {spanish: "la controversia", english: "controversy"},
    {spanish: "el hito", english: "milestone/landmark"},
    {spanish: "el estigma", english: "stigma"},
    {spanish: "la cúspide", english: "peak/summit/zenith"},
    {spanish: "el contraste", english: "contrast"},
    {spanish: "la premisa", english: "premise"},
    {spanish: "el escrutinio", english: "scrutiny"},
    {spanish: "la disyuntiva", english: "dilemma/choice"},
    {spanish: "el desafío", english: "challenge"},
    {spanish: "la vertiente", english: "aspect/side/slope"},
    {spanish: "el respaldo", english: "support/backing"}
],
            
verbs: [
    // Common B1 verbs
    {spanish: "hablar", english: "to speak"},
    {spanish: "comer", english: "to eat"},
    {spanish: "beber", english: "to drink"},
    {spanish: "vivir", english: "to live"},
    {spanish: "trabajar", english: "to work"},
    {spanish: "estudiar", english: "to study"},
    {spanish: "aprender", english: "to learn"},
    {spanish: "enseñar", english: "to teach"},
    {spanish: "comprar", english: "to buy"},
    {spanish: "vender", english: "to sell"},
    {spanish: "pagar", english: "to pay"},
    {spanish: "gastar", english: "to spend"},
    {spanish: "ahorrar", english: "to save (money)"},
    {spanish: "ganar", english: "to win/earn"},
    {spanish: "perder", english: "to lose"},
    
    // Irregular but common B1 verbs
    {spanish: "ir", english: "to go"},
    {spanish: "ser", english: "to be (permanent)"},
    {spanish: "estar", english: "to be (temporary)"},
    {spanish: "tener", english: "to have"},
    {spanish: "hacer", english: "to do/make"},
    {spanish: "decir", english: "to say/tell"},
    {spanish: "venir", english: "to come"},
    {spanish: "poner", english: "to put/place"},
    {spanish: "salir", english: "to leave/go out"},
    {spanish: "ver", english: "to see"},
    {spanish: "dar", english: "to give"},
    {spanish: "saber", english: "to know (facts)"},
    {spanish: "conocer", english: "to know (people/places)"},
    {spanish: "poder", english: "to be able to/can"},
    {spanish: "querer", english: "to want"},
    
    // Daily activities B1-B2
    {spanish: "despertarse", english: "to wake up"},
    {spanish: "levantarse", english: "to get up"},
    {spanish: "ducharse", english: "to shower"},
    {spanish: "vestirse", english: "to get dressed"},
    {spanish: "desayunar", english: "to have breakfast"},
    {spanish: "almorzar", english: "to have lunch"},
    {spanish: "cenar", english: "to have dinner"},
    {spanish: "dormirse", english: "to fall asleep"},
    {spanish: "acostarse", english: "to go to bed"},
    {spanish: "preparar", english: "to prepare"},
    {spanish: "cocinar", english: "to cook"},
    {spanish: "limpiar", english: "to clean"},
    {spanish: "lavar", english: "to wash"},
    {spanish: "planchar", english: "to iron"},
    
    // Communications B1-B2
    {spanish: "llamar", english: "to call"},
    {spanish: "contestar", english: "to answer"},
    {spanish: "preguntar", english: "to ask"},
    {spanish: "responder", english: "to respond"},
    {spanish: "explicar", english: "to explain"},
    {spanish: "describir", english: "to describe"},
    {spanish: "charlar", english: "to chat"},
    {spanish: "discutir", english: "to discuss/argue"},
    {spanish: "negociar", english: "to negotiate"},
    {spanish: "enviar", english: "to send"},
    {spanish: "recibir", english: "to receive"},
    {spanish: "entender", english: "to understand"},
    {spanish: "malinterpretar", english: "to misunderstand"},
    {spanish: "confundir", english: "to confuse"},
    
    // Action verbs B1-B2
    {spanish: "correr", english: "to run"},
    {spanish: "caminar", english: "to walk"},
    {spanish: "nadar", english: "to swim"},
    {spanish: "saltar", english: "to jump"},
    {spanish: "caer", english: "to fall"},
    {spanish: "subir", english: "to go up/climb"},
    {spanish: "bajar", english: "to go down/descend"},
    {spanish: "empujar", english: "to push"},
    {spanish: "tirar", english: "to pull/throw"},
    {spanish: "abrir", english: "to open"},
    {spanish: "cerrar", english: "to close"},
    {spanish: "entrar", english: "to enter"},
    {spanish: "salir", english: "to exit/leave"},
    {spanish: "llegar", english: "to arrive"},
    {spanish: "partir", english: "to depart"},
    
    // B2 level verbs
    {spanish: "considerar", english: "to consider"},
    {spanish: "suponer", english: "to suppose/assume"},
    {spanish: "recordar", english: "to remember"},
    {spanish: "olvidar", english: "to forget"},
    {spanish: "convertir", english: "to convert/transform"},
    {spanish: "desarrollar", english: "to develop"},
    {spanish: "mejorar", english: "to improve"},
    {spanish: "empeorar", english: "to worsen"},
    {spanish: "mantener", english: "to maintain/keep"},
    {spanish: "cambiar", english: "to change"},
    {spanish: "crear", english: "to create"},
    {spanish: "destruir", english: "to destroy"},
    {spanish: "construir", english: "to build/construct"},
    {spanish: "establecer", english: "to establish"},
    {spanish: "permitir", english: "to permit/allow"},
    {spanish: "prohibir", english: "to prohibit/forbid"},
    {spanish: "intentar", english: "to try/attempt"},
    {spanish: "lograr", english: "to achieve"},
    {spanish: "fallar", english: "to fail"},
    
    // Cognitive B2-C1
    {spanish: "pensar", english: "to think"},
    {spanish: "creer", english: "to believe"},
    {spanish: "dudar", english: "to doubt"},
    {spanish: "reflexionar", english: "to reflect/ponder"},
    {spanish: "analizar", english: "to analyze"},
    {spanish: "evaluar", english: "to evaluate"},
    {spanish: "comparar", english: "to compare"},
    {spanish: "contrastar", english: "to contrast"},
    {spanish: "deducir", english: "to deduce"},
    {spanish: "inferir", english: "to infer"},
    {spanish: "concluir", english: "to conclude"},
    {spanish: "percibir", english: "to perceive"},
    {spanish: "intuir", english: "to intuit"},
    {spanish: "imaginar", english: "to imagine"},
    {spanish: "soñar", english: "to dream"},
    {spanish: "interpretar", english: "to interpret"},
    
    // Professional/Business C1
    {spanish: "gestionar", english: "to manage"},
    {spanish: "coordinar", english: "to coordinate"},
    {spanish: "delegar", english: "to delegate"},
    {spanish: "supervisar", english: "to supervise"},
    {spanish: "implementar", english: "to implement"},
    {spanish: "administrar", english: "to administer"},
    {spanish: "dirigir", english: "to direct/lead"},
    {spanish: "presidir", english: "to preside over"},
    {spanish: "representar", english: "to represent"},
    {spanish: "invertir", english: "to invest"},
    {spanish: "financiar", english: "to finance"},
    {spanish: "rentabilizar", english: "to make profitable"},
    {spanish: "facturar", english: "to bill/invoice"},
    {spanish: "comercializar", english: "to market"},
    {spanish: "promocionar", english: "to promote"},
    
    // Advanced C1 verbs
    {spanish: "abarcar", english: "to encompass/cover"},
    {spanish: "abordar", english: "to address/tackle"},
    {spanish: "acatar", english: "to comply with/obey"},
    {spanish: "acentuar", english: "to emphasize/accentuate"},
    {spanish: "acotar", english: "to limit/define boundaries"},
    {spanish: "aludir", english: "to allude to/refer to"},
    {spanish: "atenuar", english: "to mitigate/attenuate"},
    {spanish: "atribuir", english: "to attribute"},
    {spanish: "cuestionar", english: "to question"},
    {spanish: "decrecer", english: "to decrease"},
    {spanish: "denotar", english: "to denote/indicate"},
    {spanish: "desempeñar", english: "to perform/carry out"},
    {spanish: "destacar", english: "to highlight/stand out"},
    {spanish: "discernir", english: "to discern/distinguish"},
    {spanish: "discrepar", english: "to disagree"},
    {spanish: "disuadir", english: "to dissuade"},
    {spanish: "divulgar", english: "to disseminate/publish"},
    {spanish: "ejercer", english: "to exercise/practice (profession)"},
    {spanish: "enfatizar", english: "to emphasize"},
    {spanish: "enmarcar", english: "to frame/contextualize"},
    {spanish: "esbozar", english: "to sketch/outline"},
    {spanish: "estimar", english: "to estimate/consider"},
    {spanish: "evocar", english: "to evoke"},
    {spanish: "fomentar", english: "to promote/encourage"},
    {spanish: "indagar", english: "to investigate/inquire"},
    {spanish: "incidir", english: "to affect/influence"},
    {spanish: "inferir", english: "to infer"},
    {spanish: "matizar", english: "to qualify/nuance"},
    {spanish: "plasmar", english: "to capture/express"},
    {spanish: "plantear", english: "to pose/raise (question)"},
    {spanish: "ponderar", english: "to weigh/consider carefully"},
    {spanish: "postergar", english: "to postpone/delay"},
    {spanish: "prescindir", english: "to do without/dispense with"},
    {spanish: "propugnar", english: "to advocate/defend"},
    {spanish: "redundar", english: "to result in/redound"},
    {spanish: "relegar", english: "to relegate/sideline"},
    {spanish: "soslayar", english: "to avoid/evade"},
    {spanish: "suscitar", english: "to provoke/raise"},
    {spanish: "trascender", english: "to transcend"},
    {spanish: "vislumbrar", english: "to glimpse/envision"}
],
            

    // ... (other categories like nouns, verbs, adjectives)
  
    expressions: [
      // Basic Greetings and Politeness
      { 
        spanish: "buenos días", 
        english: "good morning", 
        example: { 
          spanish: "Buenos días, ¿cómo amaneciste hoy?", 
          english: "Good morning, how did you wake up today?" 
        } 
      },
      { 
        spanish: "buenas tardes", 
        english: "good afternoon", 
        example: { 
          spanish: "Buenas tardes, ¿ya almorzaste?", 
          english: "Good afternoon, have you already had lunch?" 
        } 
      },
      { 
        spanish: "buenas noches", 
        english: "good evening/night", 
        example: { 
          spanish: "Buenas noches, que descanses bien.", 
          english: "Good evening/night, rest well." 
        } 
      },
      { 
        spanish: "hola", 
        english: "hello", 
        example: { 
          spanish: "Hola, ¿cómo te va hoy?", 
          english: "Hello, how are you doing today?" 
        } 
      },
      { 
        spanish: "adiós", 
        english: "goodbye", 
        example: { 
          spanish: "Adiós, nos vemos la próxima semana.", 
          english: "Goodbye, see you next week." 
        } 
      },
      { 
        spanish: "por favor", 
        english: "please", 
        example: { 
          spanish: "Por favor, ¿me pasas la sal?", 
          english: "Please, can you pass me the salt?" 
        } 
      },
      { 
        spanish: "gracias", 
        english: "thank you", 
        example: { 
          spanish: "Gracias por ayudarme con esto.", 
          english: "Thank you for helping me with this." 
        } 
      },
      { 
        spanish: "de nada", 
        english: "you're welcome", 
        example: { 
          spanish: "De nada, siempre es un placer ayudarte.", 
          english: "You're welcome, it’s always a pleasure to help you." 
        } 
      },
      { 
        spanish: "¿cómo estás?", 
        english: "how are you?", 
        example: { 
          spanish: "¿Cómo estás? Te noto un poco cansado.", 
          english: "How are you? You seem a bit tired." 
        } 
      },
      { 
        spanish: "estoy bien", 
        english: "I'm fine", 
        example: { 
          spanish: "Estoy bien, gracias por preguntar.", 
          english: "I'm fine, thanks for asking." 
        } 
      },
      { 
        spanish: "mucho gusto", 
        english: "nice to meet you", 
        example: { 
          spanish: "Mucho gusto, soy Ana, ¿y tú?", 
          english: "Nice to meet you, I’m Ana, and you?" 
        } 
      },
      { 
        spanish: "disculpe", 
        english: "excuse me", 
        example: { 
          spanish: "Disculpe, ¿sabe dónde está la estación?", 
          english: "Excuse me, do you know where the station is?" 
        } 
      },
      { 
        spanish: "lo siento", 
        english: "I'm sorry", 
        example: { 
          spanish: "Lo siento, llegué tarde por el tráfico.", 
          english: "I’m sorry, I arrived late because of traffic." 
        } 
      },
      { 
        spanish: "¿qué hora es?", 
        english: "what time is it?", 
        example: { 
          spanish: "¿Qué hora es? No quiero llegar tarde.", 
          english: "What time is it? I don’t want to be late." 
        } 
      },
      { 
        spanish: "¿dónde está...?", 
        english: "where is...?", 
        example: { 
          spanish: "¿Dónde está el supermercado más cercano?", 
          english: "Where is the nearest supermarket?" 
        } 
      },
      { 
        spanish: "hasta luego", 
        english: "see you later", 
        example: { 
          spanish: "Hasta luego, cuídate mucho.", 
          english: "See you later, take care." 
        } 
      },
      { 
        spanish: "¿cómo te llamas?", 
        english: "what's your name?", 
        example: { 
          spanish: "¿Cómo te llamas? No nos hemos presentado.", 
          english: "What’s your name? We haven’t introduced ourselves." 
        } 
      },
      { 
        spanish: "me llamo...", 
        english: "my name is...", 
        example: { 
          spanish: "Me llamo Carlos, ¿y tú?", 
          english: "My name is Carlos, and yours?" 
        } 
      },
      { 
        spanish: "no entiendo", 
        english: "I don't understand", 
        example: { 
          spanish: "No entiendo, ¿puedes explicarlo otra vez?", 
          english: "I don’t understand, can you explain it again?" 
        } 
      },
      { 
        spanish: "¿puedes repetir, por favor?", 
        english: "can you repeat, please?", 
        example: { 
          spanish: "¿Puedes repetir, por favor? No te escuché bien.", 
          english: "Can you repeat, please? I didn’t hear you well." 
        } 
      },
      { 
        spanish: "hablo un poco de español", 
        english: "I speak a little Spanish", 
        example: { 
          spanish: "Hablo un poco de español, pero necesito practicar.", 
          english: "I speak a little Spanish, but I need to practice." 
        } 
      },
      { 
        spanish: "¿cuánto cuesta?", 
        english: "how much does it cost?", 
        example: { 
          spanish: "¿Cuánto cuesta esta camiseta?", 
          english: "How much does this shirt cost?" 
        } 
      },
      { 
        spanish: "quiero...", 
        english: "I want...", 
        example: { 
          spanish: "Quiero un café con leche, por favor.", 
          english: "I want a coffee with milk, please." 
        } 
      },
      { 
        spanish: "necesito ayuda", 
        english: "I need help", 
        example: { 
          spanish: "Necesito ayuda con este formulario.", 
          english: "I need help with this form." 
        } 
      },
      { 
        spanish: "¿dónde está el baño?", 
        english: "where is the bathroom?", 
        example: { 
          spanish: "¿Dónde está el baño? Lo necesito urgente.", 
          english: "Where is the bathroom? I need it urgently." 
        } 
      },
      { 
        spanish: "estoy perdido/a", 
        english: "I'm lost", 
        example: { 
          spanish: "Estoy perdido, ¿puedes ayudarme a encontrar mi hotel?", 
          english: "I’m lost, can you help me find my hotel?" 
        } 
      },
      { 
        spanish: "puedes ayudarme", 
        english: "can you help me?", 
        example: { 
          spanish: "Puedes ayudarme, no sé cómo llegar al centro.", 
          english: "Can you help me? I don’t know how to get to the city center." 
        } 
      },
      { 
        spanish: "tengo una pregunta", 
        english: "I have a question", 
        example: { 
          spanish: "Tengo una pregunta, ¿a qué hora cierra la tienda?", 
          english: "I have a question, what time does the store close?" 
        } 
      },
      { 
        spanish: "¿a qué hora abre/cierra?", 
        english: "what time does it open/close?", 
        example: { 
          spanish: "¿A qué hora abre el museo mañana?", 
          english: "What time does the museum open tomorrow?" 
        } 
      },
      { 
        spanish: "está cerca de aquí", 
        english: "is it near here?", 
        example: { 
          spanish: "¿El restaurante está cerca de aquí?", 
          english: "Is the restaurant near here?" 
        } 
      },
      { 
        spanish: "me gustaría...", 
        english: "I would like...", 
        example: { 
          spanish: "Me gustaría reservar una mesa para dos.", 
          english: "I would like to reserve a table for two." 
        } 
      },
      { 
        spanish: "no hay problema", 
        english: "no problem", 
        example: { 
          spanish: "No hay problema, puedo esperar un poco más.", 
          english: "No problem, I can wait a bit longer." 
        } 
      },
      { 
        spanish: "¿qué significa...?", 
        english: "what does... mean?", 
        example: { 
          spanish: "¿Qué significa ‘rápido’ en español?", 
          english: "What does ‘rápido’ mean in Spanish?" 
        } 
      },
      { 
        spanish: "un momento, por favor", 
        english: "one moment, please", 
        example: { 
          spanish: "Un momento, por favor, voy a buscar mi cartera.", 
          english: "One moment, please, I’ll go get my wallet." 
        } 
      },
      { 
        spanish: "feliz cumpleaños", 
        english: "happy birthday", 
        example: { 
          spanish: "Feliz cumpleaños, espero que tengas un gran día.", 
          english: "Happy birthday, I hope you have a great day." 
        } 
      },
      { 
        spanish: "¡salud!", 
        english: "cheers! / bless you!", 
        example: { 
          spanish: "¡Salud! Brindo por nuestra amistad.", 
          english: "Cheers! I toast to our friendship." 
        } 
      },
      { 
        spanish: "¿cómo se dice... en español?", 
        english: "how do you say... in Spanish?", 
        example: { 
          spanish: "¿Cómo se dice ‘dog’ en español?", 
          english: "How do you say ‘dog’ in Spanish?" 
        } 
      },
      { 
        spanish: "tengo hambre", 
        english: "I'm hungry", 
        example: { 
          spanish: "Tengo hambre, ¿vamos a comer algo?", 
          english: "I’m hungry, shall we go eat something?" 
        } 
      },
      { 
        spanish: "tengo sed", 
        english: "I'm thirsty", 
        example: { 
          spanish: "Tengo sed, ¿me traes un vaso de agua?", 
          english: "I’m thirsty, can you bring me a glass of water?" 
        } 
      },
      { 
        spanish: "¿puedo pagar con tarjeta?", 
        english: "can I pay with a card?", 
        example: { 
          spanish: "¿Puedo pagar con tarjeta o solo aceptan efectivo?", 
          english: "Can I pay with a card, or do you only accept cash?" 
        } 
      },
      { 
        spanish: "la cuenta, por favor", 
        english: "the bill, please", 
        example: { 
          spanish: "La cuenta, por favor, ya terminamos de comer.", 
          english: "The bill, please, we’re done eating." 
        } 
      },
      { 
        spanish: "estoy cansado/a", 
        english: "I'm tired", 
        example: { 
          spanish: "Estoy cansado, fue un día muy largo.", 
          english: "I’m tired, it was a very long day." 
        } 
      },
      { 
        spanish: "vivo en...", 
        english: "I live in...", 
        example: { 
          spanish: "Vivo en Madrid, ¿y tú dónde vives?", 
          english: "I live in Madrid, and where do you live?" 
        } 
      },
      { 
        spanish: "¿de dónde eres?", 
        english: "where are you from?", 
        example: { 
          spanish: "¿De dónde eres? Tienes un acento interesante.", 
          english: "Where are you from? You have an interesting accent." 
        } 
      },
      { 
        spanish: "soy de...", 
        english: "I'm from...", 
        example: { 
          spanish: "Soy de México, ¿y tú de dónde eres?", 
          english: "I’m from Mexico, and where are you from?" 
        } 
      },
      { 
        spanish: "hace buen/mal tiempo", 
        english: "the weather is good/bad", 
        example: { 
          spanish: "Hace buen tiempo, ¿salimos a pasear?", 
          english: "The weather is good, shall we go for a walk?" 
        } 
      },
      { 
        spanish: "¿qué recomiendas?", 
        english: "what do you recommend?", 
        example: { 
          spanish: "¿Qué recomiendas para el almuerzo?", 
          english: "What do you recommend for lunch?" 
        } 
      },
      { 
        spanish: "espero que sí", 
        english: "I hope so", 
        example: { 
          spanish: "¿Crees que llegaremos a tiempo? Espero que sí.", 
          english: "Do you think we’ll arrive on time? I hope so." 
        } 
      },
      { 
        spanish: "quizás mañana", 
        english: "maybe tomorrow", 
        example: { 
          spanish: "No puedo hoy, pero quizás mañana sí.", 
          english: "I can’t today, but maybe tomorrow I can." 
        } 
      },
      { 
        spanish: "no estoy seguro/a", 
        english: "I'm not sure", 
        example: { 
          spanish: "No estoy seguro de cuál es el camino correcto.", 
          english: "I’m not sure which way is the right one." 
        } 
      },
  
      // Socializing and Conversations
      { 
        spanish: "¡qué buena onda!", 
        english: "how cool!", 
        example: { 
          spanish: "¡Qué buena onda! Me encanta tu energía.", 
          english: "How cool! I love your energy." 
        } 
      },
      { 
        spanish: "cuéntame más", 
        english: "tell me more", 
        example: { 
          spanish: "Eso suena interesante, cuéntame más.", 
          english: "That sounds interesting, tell me more." 
        } 
      },
      { 
        spanish: "¿qué tal tu día?", 
        english: "how’s your day going?", 
        example: { 
          spanish: "¿Qué tal tu día? ¿Algo emocionante?", 
          english: "How’s your day going? Anything exciting?" 
        } 
      },
      { 
        spanish: "estoy de acuerdo", 
        english: "I agree", 
        example: { 
          spanish: "Estoy de acuerdo, esa idea es perfecta.", 
          english: "I agree, that idea is perfect." 
        } 
      },
      { 
        spanish: "no estoy de acuerdo", 
        english: "I don’t agree", 
        example: { 
          spanish: "No estoy de acuerdo, creo que hay otra solución.", 
          english: "I don’t agree, I think there’s another solution." 
        } 
      },
      { 
        spanish: "¿qué opinas?", 
        english: "what do you think?", 
        example: { 
          spanish: "¿Qué opinas de este restaurante?", 
          english: "What do you think of this restaurant?" 
        } 
      },
      { 
        spanish: "me parece genial", 
        english: "I think that’s great", 
        example: { 
          spanish: "Me parece genial que hayas ganado el premio.", 
          english: "I think that’s great that you won the award." 
        } 
      },
      { 
        spanish: "¡qué interesante!", 
        english: "how interesting!", 
        example: { 
          spanish: "¡Qué interesante! No sabía eso de ti.", 
          english: "How interesting! I didn’t know that about you." 
        } 
      },
      { 
        spanish: "bromeas, ¿verdad?", 
        english: "you’re kidding, right?", 
        example: { 
          spanish: "Bromeas, ¿verdad? No puede ser cierto.", 
          english: "You’re kidding, right? That can’t be true." 
        } 
      },
      { 
        spanish: "me da igual", 
        english: "I don’t care", 
        example: { 
          spanish: "Me da igual, elige tú el lugar.", 
          english: "I don’t care, you choose the place." 
        } 
      },
      { 
        spanish: "¡qué casualidad!", 
        english: "what a coincidence!", 
        example: { 
          spanish: "¡Qué casualidad! Yo también estuve allí ayer.", 
          english: "What a coincidence! I was there yesterday too." 
        } 
      },
      { 
        spanish: "¿te cae bien?", 
        english: "do you like him/her?", 
        example: { 
          spanish: "¿Te cae bien Juan? Es muy simpático.", 
          english: "Do you like Juan? He’s very nice." 
        } 
      },
      { 
        spanish: "es un placer charlar contigo", 
        english: "it’s a pleasure talking to you", 
        example: { 
          spanish: "Es un placer charlar contigo, siempre aprendo algo.", 
          english: "It’s a pleasure talking to you, I always learn something." 
        } 
      },
      { 
        spanish: "mantengamos el contacto", 
        english: "let’s keep in touch", 
        example: { 
          spanish: "Mantengamos el contacto, no quiero perderte de vista.", 
          english: "Let’s keep in touch, I don’t want to lose sight of you." 
        } 
      },
      { 
        spanish: "¡qué divertido!", 
        english: "how fun!", 
        example: { 
          spanish: "¡Qué divertido! Me reí mucho con tu historia.", 
          english: "How fun! I laughed a lot with your story." 
        } 
      },
      { 
        spanish: "¿cuándo nos vemos?", 
        english: "when do we meet up?", 
        example: { 
          spanish: "¿Cuándo nos vemos? Tengo muchas ganas de verte.", 
          english: "When do we meet up? I’m really looking forward to seeing you." 
        } 
      },
      { 
        spanish: "estoy emocionado/a", 
        english: "I’m excited", 
        example: { 
          spanish: "Estoy emocionado por el concierto de esta noche.", 
          english: "I’m excited about tonight’s concert." 
        } 
      },
      { 
        spanish: "me haces reír", 
        english: "you make me laugh", 
        example: { 
          spanish: "Me haces reír con tus bromas, eres muy gracioso.", 
          english: "You make me laugh with your jokes, you’re very funny." 
        } 
      },
      { 
        spanish: "¿qué planes tienes?", 
        english: "what are your plans?", 
        example: { 
          spanish: "¿Qué planes tienes para el fin de semana?", 
          english: "What are your plans for the weekend?" 
        } 
      },
      { 
        spanish: "vamos a salir", 
        english: "let’s go out", 
        example: { 
          spanish: "Vamos a salir esta noche, ¿te unes?", 
          english: "Let’s go out tonight, are you joining us?" 
        } 
      },
      { 
        spanish: "¡qué sorpresa!", 
        english: "what a surprise!", 
        example: { 
          spanish: "¡Qué sorpresa! No esperaba verte aquí.", 
          english: "What a surprise! I didn’t expect to see you here." 
        } 
      },
      { 
        spanish: "te entiendo perfectamente", 
        english: "I totally get you", 
        example: { 
          spanish: "Te entiendo perfectamente, yo también lo he pasado.", 
          english: "I totally get you, I’ve been through that too." 
        } 
      },
      { 
        spanish: "eso suena increíble", 
        english: "that sounds amazing", 
        example: { 
          spanish: "Eso suena increíble, ¿cuándo lo harás?", 
          english: "That sounds amazing, when are you doing it?" 
        } 
      },
      { 
        spanish: "me siento un poco nervioso/a", 
        english: "I feel a bit nervous", 
        example: { 
          spanish: "Me siento un poco nervioso antes de la entrevista.", 
          english: "I feel a bit nervous before the interview." 
        } 
      },
      { 
        spanish: "¡qué lindo gesto!", 
        english: "what a nice gesture!", 
        example: { 
          spanish: "¡Qué lindo gesto! Gracias por el regalo.", 
          english: "What a nice gesture! Thanks for the gift." 
        } 
      },
      { 
        spanish: "¿cómo lo llevas?", 
        english: "how are you holding up?", 
        example: { 
          spanish: "¿Cómo lo llevas con tanto trabajo?", 
          english: "How are you holding up with so much work?" 
        } 
      },
      { 
        spanish: "es una larga historia", 
        english: "it’s a long story", 
        example: { 
          spanish: "Es una larga historia, pero te la cuento si quieres.", 
          english: "It’s a long story, but I’ll tell you if you want." 
        } 
      },
      { 
        spanish: "no me lo esperaba", 
        english: "I didn’t expect that", 
        example: { 
          spanish: "No me lo esperaba, fue una gran sorpresa.", 
          english: "I didn’t expect that, it was a big surprise." 
        } 
      },
      { 
        spanish: "¡qué alivio!", 
        english: "what a relief!", 
        example: { 
          spanish: "¡Qué alivio! Pensé que había perdido mi teléfono.", 
          english: "What a relief! I thought I had lost my phone." 
        } 
      },
      { 
        spanish: "te apoyo totalmente", 
        english: "I totally support you", 
        example: { 
          spanish: "Te apoyo totalmente en tu decisión.", 
          english: "I totally support you in your decision." 
        } 
      },
      { 
        spanish: "¿cómo te sientes?", 
        english: "how are you feeling?", 
        example: { 
          spanish: "¿Cómo te sientes después de la noticia?", 
          english: "How are you feeling after the news?" 
        } 
      },
      { 
        spanish: "me dio mucha pena", 
        english: "I felt really bad", 
        example: { 
          spanish: "Me dio mucha pena no poder asistir a tu fiesta.", 
          english: "I felt really bad for not being able to attend your party." 
        } 
      },
      { 
        spanish: "¡qué envidia!", 
        english: "I’m so jealous!", 
        example: { 
          spanish: "¡Qué envidia! Tus vacaciones parecen increíbles.", 
          english: "I’m so jealous! Your vacation looks amazing." 
        } 
      },
      { 
        spanish: "estoy de buen humor", 
        english: "I’m in a good mood", 
        example: { 
          spanish: "Estoy de buen humor, hoy todo salió bien.", 
          english: "I’m in a good mood, everything went well today." 
        } 
      },
      { 
        spanish: "no te preocupes", 
        english: "don’t worry", 
        example: { 
          spanish: "No te preocupes, todo va a salir bien.", 
          english: "Don’t worry, everything will turn out fine." 
        } 
      },
      { 
        spanish: "¡venga, anímate!", 
        english: "come on, cheer up!", 
        example: { 
          spanish: "¡Venga, anímate! Vamos a divertirnos.", 
          english: "Come on, cheer up! Let’s have some fun." 
        } 
      },
      { 
        spanish: "me encantó conocerte", 
        english: "I loved meeting you", 
        example: { 
          spanish: "Me encantó conocerte, eres muy amable.", 
          english: "I loved meeting you, you’re very kind." 
        } 
      },
      { 
        spanish: "espero verte pronto", 
        english: "I hope to see you soon", 
        example: { 
          spanish: "Espero verte pronto, fue un placer charlar.", 
          english: "I hope to see you soon, it was a pleasure to chat." 
        } 
      },
      { 
        spanish: "¿qué tal si...?", 
        english: "how about...?", 
        example: { 
          spanish: "¿Qué tal si vamos al cine esta tarde?", 
          english: "How about we go to the movies this afternoon?" 
        } 
      },
      { 
        spanish: "tienes toda la razón", 
        english: "you’re absolutely right", 
        example: { 
          spanish: "Tienes toda la razón, no lo había pensado.", 
          english: "You’re absolutely right, I hadn’t thought of that." 
        } 
      },
      { 
        spanish: "me parece justo", 
        english: "that seems fair", 
        example: { 
          spanish: "Me parece justo dividir los gastos a la mitad.", 
          english: "That seems fair to split the expenses in half." 
        } 
      },
      { 
        spanish: "¡qué exagerado/a!", 
        english: "how exaggerated!", 
        example: { 
          spanish: "¡Qué exagerado! No fue para tanto.", 
          english: "How exaggerated! It wasn’t that big of a deal." 
        } 
      },
      { 
        spanish: "me estás tomando el pelo", 
        english: "you’re pulling my leg", 
        example: { 
          spanish: "Me estás tomando el pelo, ¿verdad? No puede ser.", 
          english: "You’re pulling my leg, right? That can’t be true." 
        } 
      },
      { 
        spanish: "no me convence", 
        english: "I’m not convinced", 
        example: { 
          spanish: "No me convence esa idea, creo que hay riesgos.", 
          english: "I’m not convinced by that idea, I think there are risks." 
        } 
      },
      { 
        spanish: "es una pasada", 
        english: "it’s awesome", 
        example: { 
          spanish: "Este lugar es una pasada, me encanta.", 
          english: "This place is awesome, I love it." 
        } 
      },
      { 
        spanish: "¿y tú qué dices?", 
        english: "and what do you say?", 
        example: { 
          spanish: "Yo pienso que sí, ¿y tú qué dices?", 
          english: "I think yes, and what do you say?" 
        } 
      },
      { 
        spanish: "me da curiosidad", 
        english: "I’m curious", 
        example: { 
          spanish: "Me da curiosidad saber cómo lo hiciste.", 
          english: "I’m curious to know how you did it." 
        } 
      },
      { 
        spanish: "¡qué emoción!", 
        english: "how exciting!", 
        example: { 
          spanish: "¡Qué emoción! Vamos a viajar juntos.", 
          english: "How exciting! We’re going to travel together." 
        } 
      },
      { 
        spanish: "estoy flipando", 
        english: "I’m freaking out", 
        example: { 
          spanish: "Estoy flipando con las noticias, no lo creo.", 
          english: "I’m freaking out with the news, I can’t believe it." 
        } 
      },
  
      // Dining and Restaurants
      { 
        spanish: "¿tienen menú del día?", 
        english: "do you have a daily menu?", 
        example: { 
          spanish: "¿Tienen menú del día? Quiero algo económico.", 
          english: "Do you have a daily menu? I want something affordable." 
        } 
      },
      { 
        spanish: "¿qué lleva este plato?", 
        english: "what’s in this dish?", 
        example: { 
          spanish: "¿Qué lleva este plato? Soy alérgico al marisco.", 
          english: "What’s in this dish? I’m allergic to seafood." 
        } 
      },
      { 
        spanish: "soy alérgico/a a...", 
        english: "I’m allergic to...", 
        example: { 
          spanish: "Soy alérgico a los cacahuates, ¿este plato los tiene?", 
          english: "I’m allergic to peanuts, does this dish have them?" 
        } 
      },
      { 
        spanish: "¿pueden hacerlo rápido?", 
        english: "can you make it quick?", 
        example: { 
          spanish: "¿Pueden hacerlo rápido? Tengo prisa.", 
          english: "Can you make it quick? I’m in a hurry." 
        } 
      },
      { 
        spanish: "está delicioso", 
        english: "it’s delicious", 
        example: { 
          spanish: "Este postre está delicioso, gracias por la recomendación.", 
          english: "This dessert is delicious, thanks for the recommendation." 
        } 
      },
      { 
        spanish: "¿tienen opciones vegetarianas?", 
        english: "do you have vegetarian options?", 
        example: { 
          spanish: "¿Tienen opciones vegetarianas en el menú?", 
          english: "Do you have vegetarian options on the menu?" 
        } 
      },
      { 
        spanish: "sin gluten, por favor", 
        english: "gluten-free, please", 
        example: { 
          spanish: "Sin gluten, por favor, tengo intolerancia.", 
          english: "Gluten-free, please, I have an intolerance." 
        } 
      },
      { 
        spanish: "¿pueden separar la cuenta?", 
        english: "can you split the bill?", 
        example: { 
          spanish: "¿Pueden separar la cuenta? Somos tres personas.", 
          english: "Can you split the bill? There are three of us." 
        } 
      },
      { 
        spanish: "está un poco frío", 
        english: "it’s a bit cold", 
        example: { 
          spanish: "La sopa está un poco fría, ¿pueden calentarla?", 
          english: "The soup is a bit cold, can you heat it up?" 
        } 
      },
      { 
        spanish: "¿me traes más agua?", 
        english: "can you bring more water?", 
        example: { 
          spanish: "¿Me traes más agua? Este plato está picante.", 
          english: "Can you bring more water? This dish is spicy." 
        } 
      },
      { 
        spanish: "no quiero cebolla", 
        english: "I don’t want onion", 
        example: { 
          spanish: "No quiero cebolla en mi ensalada, por favor.", 
          english: "I don’t want onion in my salad, please." 
        } 
      },
      { 
        spanish: "¿tienen postres caseros?", 
        english: "do you have homemade desserts?", 
        example: { 
          spanish: "¿Tienen postres caseros? Me gustaría probar algo especial.", 
          english: "Do you have homemade desserts? I’d like to try something special." 
        } 
      },
      { 
        spanish: "está muy salado", 
        english: "it’s too salty", 
        example: { 
          spanish: "Este plato está muy salado, ¿pueden ajustarlo?", 
          english: "This dish is too salty, can you adjust it?" 
        } 
      },
      { 
        spanish: "¿me das un tenedor, por favor?", 
        english: "can I have a fork, please?", 
        example: { 
          spanish: "¿Me das un tenedor, por favor? Se me cayó el mío.", 
          english: "Can I have a fork, please? I dropped mine." 
        } 
      },
      { 
        spanish: "quiero hacer una reserva", 
        english: "I want to make a reservation", 
        example: { 
          spanish: "Quiero hacer una reserva para esta noche a las ocho.", 
          english: "I want to make a reservation for tonight at eight." 
        } 
      },
      { 
        spanish: "¿tienen terraza?", 
        english: "do you have an outdoor area?", 
        example: { 
          spanish: "¿Tienen terraza? Me gustaría comer afuera.", 
          english: "Do you have an outdoor area? I’d like to eat outside." 
        } 
      },
      { 
        spanish: "para dos personas", 
        english: "for two people", 
        example: { 
          spanish: "Una mesa para dos personas, por favor.", 
          english: "A table for two people, please." 
        } 
      },
      { 
        spanish: "¿cuál es el plato estrella?", 
        english: "what’s the signature dish?", 
        example: { 
          spanish: "¿Cuál es el plato estrella de este restaurante?", 
          english: "What’s the signature dish of this restaurant?" 
        } 
      },
      { 
        spanish: "está todo perfecto", 
        english: "everything’s perfect", 
        example: { 
          spanish: "Está todo perfecto, gracias por la atención.", 
          english: "Everything’s perfect, thanks for the service." 
        } 
      },
      { 
        spanish: "¿me lo envuelves para llevar?", 
        english: "can you wrap it to go?", 
        example: { 
          spanish: "¿Me lo envuelves para llevar? No terminé mi comida.", 
          english: "Can you wrap it to go? I didn’t finish my food." 
        } 
      },
      { 
        spanish: "no me gustó mucho", 
        english: "I didn’t like it much", 
        example: { 
          spanish: "No me gustó mucho el postre, estaba muy dulce.", 
          english: "I didn’t like the dessert much, it was too sweet." 
        } 
      },
      { 
        spanish: "¿tienen vino de la casa?", 
        english: "do you have house wine?", 
        example: { 
          spanish: "¿Tienen vino de la casa? Quiero probar algo local.", 
          english: "Do you have house wine? I want to try something local." 
        } 
      },
      { 
        spanish: "una mesa cerca de la ventana", 
        english: "a table by the window", 
        example: { 
          spanish: "Quiero una mesa cerca de la ventana, por favor.", 
          english: "I want a table by the window, please." 
        } 
      },
      { 
        spanish: "¿cuánto tiempo de espera?", 
        english: "how long is the wait?", 
        example: { 
          spanish: "¿Cuánto tiempo de espera hay para una mesa?", 
          english: "How long is the wait for a table?" 
        } 
      },
      { 
        spanish: "esto no es lo que pedí", 
        english: "this isn’t what I ordered", 
        example: { 
          spanish: "Esto no es lo que pedí, yo quería pollo.", 
          english: "This isn’t what I ordered, I wanted chicken." 
        } 
      },
  
      // Shopping
      { 
        spanish: "¿dónde están los probadores?", 
        english: "where are the fitting rooms?", 
        example: { 
          spanish: "¿Dónde están los probadores? Quiero probarme esta chaqueta.", 
          english: "Where are the fitting rooms? I want to try on this jacket." 
        } 
      },
      { 
        spanish: "¿tienen esta talla?", 
        english: "do you have this size?", 
        example: { 
          spanish: "¿Tienen esta talla en azul? Me gusta este vestido.", 
          english: "Do you have this size in blue? I like this dress." 
        } 
      },
      { 
        spanish: "¿puedo devolverlo?", 
        english: "can I return it?", 
        example: { 
          spanish: "¿Puedo devolverlo si no me queda bien?", 
          english: "Can I return it if it doesn’t fit me?" 
        } 
      },
      { 
        spanish: "¿hay descuento?", 
        english: "is there a discount?", 
        example: { 
          spanish: "¿Hay descuento en estos zapatos? Me gustan mucho.", 
          english: "Is there a discount on these shoes? I really like them." 
        } 
      },
      { 
        spanish: "me lo llevo", 
        english: "I’ll take it", 
        example: { 
          spanish: "Me lo llevo, este suéter es perfecto.", 
          english: "I’ll take it, this sweater is perfect." 
        } 
      },
      { 
        spanish: "¿en qué pasillo está...?", 
        english: "in which aisle is...?", 
        example: { 
          spanish: "¿En qué pasillo está el arroz? No lo encuentro.", 
          english: "In which aisle is the rice? I can’t find it." 
        } 
      },
      { 
        spanish: "¿tienen algo más barato?", 
        english: "do you have something cheaper?", 
        example: { 
          spanish: "¿Tienen algo más barato? Esto está fuera de mi presupuesto.", 
          english: "Do you have something cheaper? This is out of my budget." 
        } 
      },
      { 
        spanish: "está en oferta", 
        english: "it’s on sale", 
        example: { 
          spanish: "Este bolso está en oferta, ¿lo quieres?", 
          english: "This bag is on sale, do you want it?" 
        } 
      },
      { 
        spanish: "¿me das una bolsa?", 
        english: "can you give me a bag?", 
        example: { 
          spanish: "¿Me das una bolsa? Compré varias cosas.", 
          english: "Can you give me a bag? I bought several things." 
        } 
      },
      { 
        spanish: "¿aceptan efectivo?", 
        english: "do you accept cash?", 
        example: { 
          spanish: "¿Aceptan efectivo o solo tarjeta?", 
          english: "Do you accept cash or only card?" 
        } 
      },
      { 
        spanish: "no me queda bien", 
        english: "it doesn’t fit me", 
        example: { 
          spanish: "No me queda bien, creo que necesito una talla más grande.", 
          english: "It doesn’t fit me, I think I need a larger size." 
        } 
      },
      { 
        spanish: "¿tienen garantía?", 
        english: "does it come with a warranty?", 
        example: { 
          spanish: "¿Tienen garantía estos audífonos?", 
          english: "Does it come with a warranty for these headphones?" 
        } 
      },
      { 
        spanish: "quiero cambiarlo", 
        english: "I want to exchange it", 
        example: { 
          spanish: "Quiero cambiarlo, este color no me gusta.", 
          english: "I want to exchange it, I don’t like this color." 
        } 
      },
      { 
        spanish: "¿cuál es el precio final?", 
        english: "what’s the final price?", 
        example: { 
          spanish: "¿Cuál es el precio final con impuestos incluidos?", 
          english: "What’s the final price with taxes included?" 
        } 
      },
      { 
        spanish: "está un poco caro", 
        english: "it’s a bit expensive", 
        example: { 
          spanish: "Está un poco caro, ¿pueden hacerme un descuento?", 
          english: "It’s a bit expensive, can you give me a discount?" 
        } 
      },
      { 
        spanish: "¿pueden envolverlo para regalo?", 
        english: "can you gift-wrap it?", 
        example: { 
          spanish: "¿Pueden envolverlo para regalo? Es para un cumpleaños.", 
          english: "Can you gift-wrap it? It’s for a birthday." 
        } 
      },
      { 
        spanish: "¿tienen stock?", 
        english: "do you have it in stock?", 
        example: { 
          spanish: "¿Tienen stock de este modelo de teléfono?", 
          english: "Do you have this phone model in stock?" 
        } 
      },
      { 
        spanish: "lo vi más barato en otro lado", 
        english: "I saw it cheaper elsewhere", 
        example: { 
          spanish: "Lo vi más barato en otro lado, ¿pueden igualar el precio?", 
          english: "I saw it cheaper elsewhere, can you match the price?" 
        } 
      },
      { 
        spanish: "¿cuándo llega?", 
        english: "when will it arrive?", 
        example: { 
          spanish: "¿Cuándo llega mi pedido si lo compro hoy?", 
          english: "When will my order arrive if I buy it today?" 
        } 
      },
      { 
        spanish: "quiero hacer un reclamo", 
        english: "I want to make a complaint", 
        example: { 
          spanish: "Quiero hacer un reclamo, este producto está defectuoso.", 
          english: "I want to make a complaint, this product is defective." 
        } 
      },
  
      // Travel and Directions
      { 
        spanish: "¿cómo llego a...?", 
        english: "how do I get to...?", 
        example: { 
          spanish: "¿Cómo llego a la plaza principal?", 
          english: "How do I get to the main square?" 
        } 
      },
      { 
        spanish: "¿es lejos de aquí?", 
        english: "is it far from here?", 
        example: { 
          spanish: "¿Es lejos de aquí el museo?", 
          english: "Is the museum far from here?" 
        } 
      },
      { 
        spanish: "gira a la derecha", 
        english: "turn right", 
        example: { 
          spanish: "Gira a la derecha en la próxima esquina.", 
          english: "Turn right at the next corner." 
        } 
      },
      { 
        spanish: "gira a la izquierda", 
        english: "turn left", 
        example: { 
          spanish: "Gira a la izquierda después del semáforo.", 
          english: "Turn left after the traffic light." 
        } 
      },
      { 
        spanish: "sigue recto", 
        english: "go straight", 
        example: { 
          spanish: "Sigue recto por dos calles y lo verás.", 
          english: "Go straight for two streets, and you’ll see it." 
        } 
      },
      { 
        spanish: "¿dónde está la estación?", 
        english: "where’s the station?", 
        example: { 
          spanish: "¿Dónde está la estación de tren más cercana?", 
          english: "Where’s the nearest train station?" 
        } 
      },
      { 
        spanish: "un billete de ida", 
        english: "a one-way ticket", 
        example: { 
          spanish: "Quiero un billete de ida a Barcelona.", 
          english: "I want a one-way ticket to Barcelona." 
        } 
      },
      { 
        spanish: "un billete de ida y vuelta", 
        english: "a round-trip ticket", 
        example: { 
          spanish: "Un billete de ida y vuelta a Madrid, por favor.", 
          english: "A round-trip ticket to Madrid, please." 
        } 
      },
      { 
        spanish: "¿a qué hora sale el tren?", 
        english: "what time does the train leave?", 
        example: { 
          spanish: "¿A qué hora sale el tren a Valencia?", 
          english: "What time does the train to Valencia leave?" 
        } 
      },
      { 
        spanish: "¿cuál es el próximo autobús?", 
        english: "when’s the next bus?", 
        example: { 
          spanish: "¿Cuál es el próximo autobús al centro?", 
          english: "When’s the next bus to the city center?" 
        } 
      },
      { 
        spanish: "me bajé en la parada equivocada", 
        english: "I got off at the wrong stop", 
        example: { 
          spanish: "Me bajé en la parada equivocada, ¿cómo regreso?", 
          english: "I got off at the wrong stop, how do I get back?" 
        } 
      },
      { 
        spanish: "¿dónde está la salida?", 
        english: "where’s the exit?", 
        example: { 
          spanish: "¿Dónde está la salida? Estoy un poco perdido.", 
          english: "Where’s the exit? I’m a bit lost." 
        } 
      },
      { 
        spanish: "necesito un taxi", 
        english: "I need a taxi", 
        example: { 
          spanish: "Necesito un taxi para ir al aeropuerto.", 
          english: "I need a taxi to go to the airport." 
        } 
      },
      { 
        spanish: "¿cuánto es hasta el aeropuerto?", 
        english: "how much to the airport?", 
        example: { 
          spanish: "¿Cuánto es hasta el aeropuerto en taxi?", 
          english: "How much to the airport by taxi?" 
        } 
      },
      { 
        spanish: "¿pueden llevar mi equipaje?", 
        english: "can you take my luggage?", 
        example: { 
          spanish: "¿Pueden llevar mi equipaje? Es un poco pesado.", 
          english: "Can you take my luggage? It’s a bit heavy." 
        } 
      },
      { 
        spanish: "perdí mi maleta", 
        english: "I lost my suitcase", 
        example: { 
          spanish: "Perdí mi maleta en el aeropuerto, ¿dónde reporto?", 
          english: "I lost my suitcase at the airport, where do I report it?" 
        } 
      },
      { 
        spanish: "¿dónde está la oficina de turismo?", 
        english: "where’s the tourist office?", 
        example: { 
          spanish: "¿Dónde está la oficina de turismo? Necesito información.", 
          english: "Where’s the tourist office? I need information." 
        } 
      },
      { 
        spanish: "¿tienen un mapa?", 
        english: "do you have a map?", 
        example: { 
          spanish: "¿Tienen un mapa de la ciudad?", 
          english: "Do you have a map of the city?" 
        } 
      },
      { 
        spanish: "quiero alquilar un coche", 
        english: "I want to rent a car", 
        example: { 
          spanish: "Quiero alquilar un coche por tres días.", 
          english: "I want to rent a car for three days." 
        } 
      },
      { 
        spanish: "¿cuál es el límite de velocidad?", 
        english: "what’s the speed limit?", 
        example: { 
          spanish: "¿Cuál es el límite de velocidad en esta carretera?", 
          english: "What’s the speed limit on this road?" 
        } 
      },
      { 
        spanish: "¿es seguro caminar por aquí?", 
        english: "is it safe to walk here?", 
        example: { 
          spanish: "¿Es seguro caminar por aquí de noche?", 
          english: "Is it safe to walk here at night?" 
        } 
      },
      { 
        spanish: "¿dónde puedo cambiar dinero?", 
        english: "where can I exchange money?", 
        example: { 
          spanish: "¿Dónde puedo cambiar dinero? Necesito euros.", 
          english: "Where can I exchange money? I need euros." 
        } 
      },
      { 
        spanish: "¿cuál es la mejor ruta?", 
        english: "what’s the best route?", 
        example: { 
          spanish: "¿Cuál es la mejor ruta para llegar al castillo?", 
          english: "What’s the best route to get to the castle?" 
        } 
      },
      { 
        spanish: "estoy buscando un hotel", 
        english: "I’m looking for a hotel", 
        example: { 
          spanish: "Estoy buscando un hotel cerca del centro.", 
          english: "I’m looking for a hotel near the city center." 
        } 
      },
      { 
        spanish: "¿tienen habitaciones disponibles?", 
        english: "do you have any rooms available?", 
        example: { 
          spanish: "¿Tienen habitaciones disponibles para esta noche?", 
          english: "Do you have any rooms available for tonight?" 
        } 
      },
      { 
        spanish: "quiero una habitación individual", 
        english: "I want a single room", 
        example: { 
          spanish: "Quiero una habitación individual con vista al mar.", 
          english: "I want a single room with a sea view." 
        } 
      },
      { 
        spanish: "¿incluye desayuno?", 
        english: "does it include breakfast?", 
        example: { 
          spanish: "¿El precio incluye desayuno o es aparte?", 
          english: "Does the price include breakfast, or is it separate?" 
        } 
      },
      { 
        spanish: "la llave de mi habitación", 
        english: "the key to my room", 
        example: { 
          spanish: "Se me olvidó la llave de mi habitación, ¿me das otra?", 
          english: "I forgot the key to my room, can you give me another one?" 
        } 
      },
      { 
        spanish: "¿dónde está el ascensor?", 
        english: "where’s the elevator?", 
        example: { 
          spanish: "¿Dónde está el ascensor? Mi habitación está en el piso 5.", 
          english: "Where’s the elevator? My room is on the 5th floor." 
        } 
      },
      { 
        spanish: "no funciona el aire acondicionado", 
        english: "the air conditioning isn’t working", 
        example: { 
          spanish: "No funciona el aire acondicionado, hace mucho calor.", 
          english: "The air conditioning isn’t working, it’s very hot." 
        } 
      },
      { 
        spanish: "¿pueden limpiar mi habitación?", 
        english: "can you clean my room?", 
        example: { 
          spanish: "¿Pueden limpiar mi habitación mientras estoy fuera?", 
          english: "Can you clean my room while I’m out?" 
        } 
      },
      { 
        spanish: "¿a qué hora es el check-out?", 
        english: "what time is check-out?", 
        example: { 
          spanish: "¿A qué hora es el check-out? Tengo un vuelo temprano.", 
          english: "What time is check-out? I have an early flight." 
        } 
      },
      { 
        spanish: "quiero extender mi estancia", 
        english: "I want to extend my stay", 
        example: { 
          spanish: "Quiero extender mi estancia por dos días más.", 
          english: "I want to extend my stay for two more days." 
        } 
      },
      { 
        spanish: "¿dónde está el parking?", 
        english: "where’s the parking?", 
        example: { 
          spanish: "¿Dónde está el parking? Alquilé un coche.", 
          english: "Where’s the parking? I rented a car." 
        } 
      },
      { 
        spanish: "¿es una zona turística?", 
        english: "is it a tourist area?", 
        example: { 
          spanish: "¿Es una zona turística? Quiero explorar un poco.", 
          english: "Is it a tourist area? I want to explore a bit." 
        } 
      },
      { 
        spanish: "¿qué lugares recomiendas visitar?", 
        english: "what places do you recommend visiting?", 
        example: { 
          spanish: "¿Qué lugares recomiendas visitar en esta ciudad?", 
          english: "What places do you recommend visiting in this city?" 
        } 
      },
      { 
        spanish: "necesito un guía", 
        english: "I need a guide", 
        example: { 
          spanish: "Necesito un guía para recorrer las ruinas.", 
          english: "I need a guide to tour the ruins." 
        } 
      },
      { 
        spanish: "¿hay wifi gratis?", 
        english: "is there free wifi?", 
        example: { 
          spanish: "¿Hay wifi gratis en el hotel?", 
          english: "Is there free wifi in the hotel?" 
        } 
      },
      { 
        spanish: "¿cuál es la contraseña del wifi?", 
        english: "what’s the wifi password?", 
        example: { 
          spanish: "¿Cuál es la contraseña del wifi? Quiero conectarme.", 
          english: "What’s the wifi password? I want to connect." 
        } 
      },
      { 
        spanish: "perdí mi pasaporte", 
        english: "I lost my passport", 
        example: { 
          spanish: "Perdí mi pasaporte, ¿qué debo hacer?", 
          english: "I lost my passport, what should I do?" 
        } 
      },
      { 
        spanish: "¿dónde está la embajada?", 
        english: "where’s the embassy?", 
        example: { 
          spanish: "¿Dónde está la embajada de mi país?", 
          english: "Where’s the embassy of my country?" 
        } 
      },
      { 
        spanish: "necesito un adaptador de enchufe", 
        english: "I need a plug adapter", 
        example: { 
          spanish: "Necesito un adaptador de enchufe para mi cargador.", 
          english: "I need a plug adapter for my charger." 
        } 
      },
  
      // Work and Professional Settings
      { 
        spanish: "¿cuándo es la reunión?", 
        english: "when’s the meeting?", 
        example: { 
          spanish: "¿Cuándo es la reunión con el cliente?", 
          english: "When’s the meeting with the client?" 
        } 
      },
      { 
        spanish: "necesito enviar un correo", 
        english: "I need to send an email", 
        example: { 
          spanish: "Necesito enviar un correo al equipo ahora.", 
          english: "I need to send an email to the team now." 
        } 
      },
      { 
        spanish: "¿puedes revisarlo?", 
        english: "can you review it?", 
        example: { 
          spanish: "¿Puedes revisarlo antes de enviarlo?", 
          english: "Can you review it before sending it?" 
        } 
      },
      { 
        spanish: "estoy trabajando en ello", 
        english: "I’m working on it", 
        example: { 
          spanish: "Estoy trabajando en ello, lo tendré listo pronto.", 
          english: "I’m working on it, I’ll have it ready soon." 
        }
      }
    ],
            
        adjectives: [
  { spanish: "accesible", english: "accessible", example: { spanish: "Este edificio es muy accesible para personas con discapacidad.", english: "This building is very accessible for people with disabilities." } },
  { spanish: "acogedor", english: "cozy", example: { spanish: "Su casa es muy acogedora en invierno.", english: "Her house is very cozy in winter." } },
  { spanish: "actual", english: "current", example: { spanish: "El actual presidente es muy popular.", english: "The current president is very popular." } },
  { spanish: "adecuado", english: "appropriate", example: { spanish: "Ese vestido no es adecuado para la boda.", english: "That dress is not appropriate for the wedding." } },
  { spanish: "agradable", english: "pleasant", example: { spanish: "Fue un día muy agradable en el parque.", english: "It was a very pleasant day at the park." } },
  { spanish: "ahorrador", english: "thrifty", example: { spanish: "Mi padre es muy ahorrador con el dinero.", english: "My father is very thrifty with money." } },
  { spanish: "alegre", english: "cheerful", example: { spanish: "Ella siempre está alegre por las mañanas.", english: "She is always cheerful in the mornings." } },
  { spanish: "alentador", english: "encouraging", example: { spanish: "Su discurso fue muy alentador para el equipo.", english: "His speech was very encouraging for the team." } },
  { spanish: "alto", english: "tall/high", example: { spanish: "Ese edificio es muy alto.", english: "That building is very tall." } },
  { spanish: "amable", english: "kind", example: { spanish: "La vecina es muy amable con todos.", english: "The neighbor is very kind to everyone." } },
  { spanish: "ambicioso", english: "ambitious", example: { spanish: "Es un hombre muy ambicioso en su carrera.", english: "He is a very ambitious man in his career." } },
  { spanish: "amplio", english: "spacious", example: { spanish: "El apartamento es muy amplio para una familia.", english: "The apartment is very spacious for a family." } },
  { spanish: "antiguo", english: "old/ancient", example: { spanish: "Este castillo es muy antiguo.", english: "This castle is very ancient." } },
  { spanish: "anunciado", english: "advertised", example: { spanish: "El producto anunciado no es tan bueno.", english: "The advertised product isn’t that good." } },
  { spanish: "apasionado", english: "passionate", example: { spanish: "Es un músico muy apasionado.", english: "He is a very passionate musician." } },
  { spanish: "apropiado", english: "suitable", example: { spanish: "Este lugar es apropiado para la reunión.", english: "This place is suitable for the meeting." } },
  { spanish: "arriesgado", english: "risky", example: { spanish: "Ese plan es muy arriesgado.", english: "That plan is very risky." } },
  { spanish: "arrogante", english: "arrogant", example: { spanish: "No me gusta su actitud arrogante.", english: "I don’t like his arrogant attitude." } },
  { spanish: "asequible", english: "affordable", example: { spanish: "Este coche es muy asequible para mi presupuesto.", english: "This car is very affordable for my budget." } },
  { spanish: "atractivo", english: "attractive", example: { spanish: "Ella es muy atractiva y simpática.", english: "She is very attractive and friendly." } },
  { spanish: "auténtico", english: "authentic", example: { spanish: "Este restaurante sirve comida auténtica.", english: "This restaurant serves authentic food." } },
  { spanish: "avanzado", english: "advanced", example: { spanish: "Este curso es muy avanzado para principiantes.", english: "This course is very advanced for beginners." } },
  { spanish: "aventurero", english: "adventurous", example: { spanish: "Mi hermano es muy aventurero y le gusta viajar.", english: "My brother is very adventurous and loves to travel." } },
  { spanish: "bajo", english: "short/low", example: { spanish: "Ese árbol es muy bajo.", english: "That tree is very short." } },
  { spanish: "barato", english: "cheap", example: { spanish: "Este mercado tiene productos muy baratos.", english: "This market has very cheap products." } },
  { spanish: "bello", english: "beautiful", example: { spanish: "El paisaje es muy bello al atardecer.", english: "The landscape is very beautiful at sunset." } },
  { spanish: "beneficioso", english: "beneficial", example: { spanish: "Hacer ejercicio es muy beneficioso para la salud.", english: "Exercising is very beneficial for health." } },
  { spanish: "brillante", english: "bright/brilliant", example: { spanish: "El sol está muy brillante hoy.", english: "The sun is very bright today." } },
  { spanish: "bullicioso", english: "bustling", example: { spanish: "El mercado es muy bullicioso los fines de semana.", english: "The market is very bustling on weekends." } },
  { spanish: "caliente", english: "hot", example: { spanish: "El café está muy caliente, ten cuidado.", english: "The coffee is very hot, be careful." } },
  { spanish: "cálido", english: "warm", example: { spanish: "El clima es cálido en primavera.", english: "The weather is warm in spring." } },
  { spanish: "calmado", english: "calm", example: { spanish: "Él siempre está calmado en situaciones difíciles.", english: "He is always calm in difficult situations." } },
  { spanish: "capaz", english: "capable", example: { spanish: "Ella es muy capaz de liderar el equipo.", english: "She is very capable of leading the team." } },
  { spanish: "carismático", english: "charismatic", example: { spanish: "El profesor es muy carismático y divertido.", english: "The teacher is very charismatic and fun." } },
  { spanish: "caro", english: "expensive", example: { spanish: "Este reloj es muy caro para mi presupuesto.", english: "This watch is very expensive for my budget." } },
  { spanish: "caótico", english: "chaotic", example: { spanish: "El tráfico está muy caótico hoy.", english: "The traffic is very chaotic today." } },
  { spanish: "cercano", english: "nearby", example: { spanish: "Hay un supermercado cercano a mi casa.", english: "There is a nearby supermarket to my house." } },
  { spanish: "cómodo", english: "comfortable", example: { spanish: "Este sofá es muy cómodo para descansar.", english: "This sofa is very comfortable for resting." } },
  { spanish: "complicado", english: "complicated", example: { spanish: "Este problema es muy complicado de resolver.", english: "This problem is very complicated to solve." } },
  { spanish: "comprensivo", english: "understanding", example: { spanish: "Mi jefe es muy comprensivo con los empleados.", english: "My boss is very understanding with the employees." } },
  { spanish: "confiable", english: "reliable", example: { spanish: "Este coche es muy confiable para viajes largos.", english: "This car is very reliable for long trips." } },
  { spanish: "confuso", english: "confusing", example: { spanish: "El mapa es muy confuso, no entiendo nada.", english: "The map is very confusing, I don’t understand anything." } },
  { spanish: "conocido", english: "well-known", example: { spanish: "Es un actor muy conocido en España.", english: "He is a very well-known actor in Spain." } },
  { spanish: "considerado", english: "considerate", example: { spanish: "Es muy considerado con sus amigos.", english: "He is very considerate with his friends." } },
  { spanish: "constante", english: "consistent", example: { spanish: "Su esfuerzo es muy constante, siempre trabaja duro.", english: "Her effort is very consistent, she always works hard." } },
  { spanish: "contagioso", english: "contagious", example: { spanish: "Su risa es muy contagiosa.", english: "Her laughter is very contagious." } },
  { spanish: "contento", english: "happy", example: { spanish: "Estoy muy contento con mi nuevo trabajo.", english: "I am very happy with my new job." } },
  { spanish: "conveniente", english: "convenient", example: { spanish: "Es muy conveniente vivir cerca del trabajo.", english: "It’s very convenient to live near work." } },
  { spanish: "cooperativo", english: "cooperative", example: { spanish: "El equipo es muy cooperativo en los proyectos.", english: "The team is very cooperative in projects." } },
  { spanish: "corriente", english: "ordinary", example: { spanish: "Es un día corriente, nada especial.", english: "It’s an ordinary day, nothing special." } },
  { spanish: "costoso", english: "costly", example: { spanish: "Reparar el coche fue muy costoso.", english: "Repairing the car was very costly." } },
  { spanish: "creativo", english: "creative", example: { spanish: "Ella es muy creativa con sus diseños.", english: "She is very creative with her designs." } },
  { spanish: "crítico", english: "critical", example: { spanish: "Su opinión es muy crítica sobre el proyecto.", english: "His opinion is very critical about the project." } },
  { spanish: "crucial", english: "crucial", example: { spanish: "Es un momento crucial para la empresa.", english: "It’s a crucial moment for the company." } },
  { spanish: "cuidadoso", english: "careful", example: { spanish: "Es muy cuidadoso al manejar.", english: "He is very careful when driving." } },
  { spanish: "culto", english: "cultured", example: { spanish: "Mi profesor es muy culto y sabe mucho.", english: "My teacher is very cultured and knows a lot." } },
  { spanish: "curioso", english: "curious", example: { spanish: "El niño es muy curioso y hace muchas preguntas.", english: "The child is very curious and asks a lot of questions." } },
  { spanish: "decepcionante", english: "disappointing", example: { spanish: "El resultado fue muy decepcionante.", english: "The result was very disappointing." } },
  { spanish: "decidido", english: "determined", example: { spanish: "Está muy decidido a terminar el proyecto.", english: "He is very determined to finish the project." } },
  { spanish: "dedicado", english: "dedicated", example: { spanish: "Es un trabajador muy dedicado.", english: "He is a very dedicated worker." } },
  { spanish: "definitivo", english: "definitive", example: { spanish: "Esta es la decisión definitiva.", english: "This is the definitive decision." } },
  { spanish: "delicado", english: "delicate", example: { spanish: "Este tejido es muy delicado, ten cuidado.", english: "This fabric is very delicate, be careful." } },
  { spanish: "delicioso", english: "delicious", example: { spanish: "La comida está muy deliciosa hoy.", english: "The food is very delicious today." } },
  { spanish: "dependiente", english: "dependent", example: { spanish: "Es muy dependiente de sus padres.", english: "He is very dependent on his parents." } },
  { spanish: "deprimente", english: "depressing", example: { spanish: "El clima está muy deprimente hoy.", english: "The weather is very depressing today." } },
  { spanish: "desafiante", english: "challenging", example: { spanish: "Este examen es muy desafiante.", english: "This exam is very challenging." } },
  { spanish: "desagradable", english: "unpleasant", example: { spanish: "Fue una experiencia muy desagradable.", english: "It was a very unpleasant experience." } },
  { spanish: "desastroso", english: "disastrous", example: { spanish: "El evento fue muy desastroso.", english: "The event was very disastrous." } },
  { spanish: "desconfiado", english: "distrustful", example: { spanish: "Es muy desconfiado con los desconocidos.", english: "He is very distrustful of strangers." } },
  { spanish: "desconsiderado", english: "inconsiderate", example: { spanish: "Fue muy desconsiderado de su parte.", english: "That was very inconsiderate of him." } },
  { spanish: "desorganizado", english: "disorganized", example: { spanish: "Mi escritorio está muy desorganizado.", english: "My desk is very disorganized." } },
  { spanish: "detallado", english: "detailed", example: { spanish: "El informe es muy detallado.", english: "The report is very detailed." } },
  { spanish: "diferente", english: "different", example: { spanish: "Este libro es muy diferente al otro.", english: "This book is very different from the other one." } },
  { spanish: "difícil", english: "difficult", example: { spanish: "El examen fue muy difícil.", english: "The exam was very difficult." } },
  { spanish: "dinámico", english: "dynamic", example: { spanish: "El equipo es muy dinámico y creativo.", english: "The team is very dynamic and creative." } },
  { spanish: "directo", english: "direct", example: { spanish: "Prefiero un enfoque más directo.", english: "I prefer a more direct approach." } },
  { spanish: "discreto", english: "discreet", example: { spanish: "Es muy discreto con sus problemas personales.", english: "He is very discreet about his personal problems." } },
  { spanish: "divertido", english: "fun", example: { spanish: "La fiesta fue muy divertida.", english: "The party was very fun." } },
  { spanish: "dramático", english: "dramatic", example: { spanish: "Su reacción fue muy dramática.", english: "Her reaction was very dramatic." } },
  { spanish: "duradero", english: "lasting", example: { spanish: "Este material es muy duradero.", english: "This material is very lasting." } },
  { spanish: "económico", english: "economical", example: { spanish: "Este coche es muy económico en combustible.", english: "This car is very economical on fuel." } },
  { spanish: "educado", english: "polite", example: { spanish: "El niño es muy educado con los mayores.", english: "The child is very polite with elders." } },
  { spanish: "eficaz", english: "effective", example: { spanish: "Este método es muy eficaz para aprender.", english: "This method is very effective for learning." } },
  { spanish: "eficiente", english: "efficient", example: { spanish: "El sistema es muy eficiente y rápido.", english: "The system is very efficient and fast." } },
  { spanish: "elegante", english: "elegant", example: { spanish: "Ella lleva un vestido muy elegante.", english: "She is wearing a very elegant dress." } },
  { spanish: "emocionado", english: "excited", example: { spanish: "Estoy muy emocionado por el viaje.", english: "I am very excited about the trip." } },
  { spanish: "emocionante", english: "exciting", example: { spanish: "Fue una aventura muy emocionante.", english: "It was a very exciting adventure." } },
  { spanish: "encantador", english: "charming", example: { spanish: "El pueblo es muy encantador y tranquilo.", english: "The village is very charming and peaceful." } },
  { spanish: "enérgico", english: "energetic", example: { spanish: "El entrenador es muy enérgico durante los partidos.", english: "The coach is very energetic during matches." } },
  { spanish: "enfadado", english: "angry", example: { spanish: "Está muy enfadado por lo que pasó.", english: "He is very angry about what happened." } },
  { spanish: "enfermo", english: "sick", example: { spanish: "Me siento muy enfermo hoy.", english: "I feel very sick today." } },
  { spanish: "enorme", english: "enormous", example: { spanish: "El elefante es un animal enorme.", english: "The elephant is an enormous animal." } },
  { spanish: "entretenido", english: "entertaining", example: { spanish: "La película fue muy entretenida.", english: "The movie was very entertaining." } },
  { spanish: "entusiasta", english: "enthusiastic", example: { spanish: "Es muy entusiasta con su nuevo proyecto.", english: "She is very enthusiastic about her new project." } },
  { spanish: "escalofriante", english: "creepy", example: { spanish: "Esa casa abandonada es muy escalofriante.", english: "That abandoned house is very creepy." } },
  { spanish: "escandaloso", english: "scandalous", example: { spanish: "Su comportamiento fue muy escandaloso.", english: "His behavior was very scandalous." } },
  { spanish: "especial", english: "special", example: { spanish: "Hoy es un día muy especial para mí.", english: "Today is a very special day for me." } },
  { spanish: "espectacular", english: "spectacular", example: { spanish: "El concierto fue muy espectacular.", english: "The concert was very spectacular." } },
  { spanish: "espontáneo", english: "spontaneous", example: { spanish: "Me gusta su carácter espontáneo.", english: "I like her spontaneous personality." } },
  { spanish: "estable", english: "stable", example: { spanish: "La economía está muy estable este año.", english: "The economy is very stable this year." } },
  { spanish: "estiloso", english: "stylish", example: { spanish: "Ese abrigo es muy estiloso.", english: "That coat is very stylish." } },
  { spanish: "estresado", english: "stressed", example: { spanish: "Estoy muy estresado por el trabajo.", english: "I am very stressed about work." } },
  { spanish: "estricto", english: "strict", example: { spanish: "El profesor es muy estricto con las reglas.", english: "The teacher is very strict with the rules." } },
  { spanish: "estúpido", english: "stupid", example: { spanish: "Fue un comentario muy estúpido.", english: "That was a very stupid comment." } },
  { spanish: "exagerado", english: "exaggerated", example: { spanish: "Su reacción fue muy exagerada.", english: "Her reaction was very exaggerated." } },
  { spanish: "excelente", english: "excellent", example: { spanish: "El servicio fue muy excelente.", english: "The service was very excellent." } },
  { spanish: "exigente", english: "demanding", example: { spanish: "Mi jefe es muy exigente con los plazos.", english: "My boss is very demanding with deadlines." } },
  { spanish: "exótico", english: "exotic", example: { spanish: "Probamos un plato muy exótico en el restaurante.", english: "We tried a very exotic dish at the restaurant." } },
  { spanish: "experimentado", english: "experienced", example: { spanish: "Es un ingeniero muy experimentado.", english: "He is a very experienced engineer." } },
  { spanish: "extraordinario", english: "extraordinary", example: { spanish: "Fue un logro muy extraordinario.", english: "It was a very extraordinary achievement." } },
  { spanish: "extravagante", english: "extravagant", example: { spanish: "Su estilo es muy extravagante.", english: "Her style is very extravagant." } },
  { spanish: "fácil", english: "easy", example: { spanish: "Este ejercicio es muy fácil.", english: "This exercise is very easy." } },
  { spanish: "falso", english: "false", example: { spanish: "Esa noticia es muy falsa.", english: "That news is very false." } },
  { spanish: "famoso", english: "famous", example: { spanish: "Es un cantante muy famoso en todo el mundo.", english: "He is a very famous singer worldwide." } },
  { spanish: "fantástico", english: "fantastic", example: { spanish: "El viaje fue muy fantástico.", english: "The trip was very fantastic." } },
  { spanish: "fascinante", english: "fascinating", example: { spanish: "La historia es muy fascinante.", english: "The story is very fascinating." } },
  { spanish: "favorable", english: "favorable", example: { spanish: "Las condiciones son muy favorables para el negocio.", english: "The conditions are very favorable for the business." } },
  { spanish: "feliz", english: "happy", example: { spanish: "Estoy muy feliz con mi nueva casa.", english: "I am very happy with my new house." } },
  { spanish: "fiable", english: "trustworthy", example: { spanish: "Es un amigo muy fiable.", english: "He is a very trustworthy friend." } },
  { spanish: "fiel", english: "faithful", example: { spanish: "Mi perro es muy fiel y siempre me sigue.", english: "My dog is very faithful and always follows me." } },
  { spanish: "firme", english: "firm", example: { spanish: "Su decisión es muy firme, no cambiará.", english: "His decision is very firm, he won’t change it." } },
  { spanish: "flexible", english: "flexible", example: { spanish: "El horario es muy flexible en este trabajo.", english: "The schedule is very flexible in this job." } },
  { spanish: "flojo", english: "lazy", example: { spanish: "Es muy flojo y nunca termina sus tareas.", english: "He is very lazy and never finishes his tasks." } },
  { spanish: "formal", english: "formal", example: { spanish: "La reunión fue muy formal.", english: "The meeting was very formal." } },
  { spanish: "frágil", english: "fragile", example: { spanish: "Este vaso es muy frágil, ten cuidado.", english: "This glass is very fragile, be careful." } },
  { spanish: "franco", english: "frank", example: { spanish: "Es muy franco y siempre dice la verdad.", english: "He is very frank and always tells the truth." } },
  { spanish: "frecuente", english: "frequent", example: { spanish: "Es muy frecuente verlo por aquí.", english: "It’s very frequent to see him around here." } },
  { spanish: "frío", english: "cold", example: { spanish: "El agua está muy fría hoy.", english: "The water is very cold today." } },
  { spanish: "frustrado", english: "frustrated", example: { spanish: "Estoy muy frustrado con este problema.", english: "I am very frustrated with this problem." } },
  { spanish: "fuerte", english: "strong", example: { spanish: "El viento es muy fuerte esta tarde.", english: "The wind is very strong this afternoon." } },
  { spanish: "funcional", english: "functional", example: { spanish: "Este diseño es muy funcional para la oficina.", english: "This design is very functional for the office." } },
  { spanish: "generoso", english: "generous", example: { spanish: "Es muy generoso con su tiempo y dinero.", english: "He is very generous with his time and money." } },
  { spanish: "genial", english: "great", example: { spanish: "La idea es muy genial, me encanta.", english: "The idea is very great, I love it." } },
  { spanish: "grave", english: "serious", example: { spanish: "Es un problema muy grave.", english: "It’s a very serious problem." } },
  { spanish: "grueso", english: "thick", example: { spanish: "Este libro es muy grueso.", english: "This book is very thick." } },
  { spanish: "habilidoso", english: "skillful", example: { spanish: "Es muy habilidoso con las manos.", english: "He is very skillful with his hands." } },
  { spanish: "hábil", english: "able", example: { spanish: "Es muy hábil para resolver problemas.", english: "She is very able at solving problems." } },
  { spanish: "hermoso", english: "beautiful", example: { spanish: "El atardecer es muy hermoso hoy.", english: "The sunset is very beautiful today." } },
  { spanish: "histórico", english: "historic", example: { spanish: "Este edificio es muy histórico.", english: "This building is very historic." } },
  { spanish: "honesto", english: "honest", example: { spanish: "Es muy honesto y nunca miente.", english: "He is very honest and never lies." } },
  { spanish: "horrible", english: "horrible", example: { spanish: "El accidente fue muy horrible.", english: "The accident was very horrible." } },
  { spanish: "húmedo", english: "humid", example: { spanish: "El clima está muy húmedo hoy.", english: "The weather is very humid today." } },
  { spanish: "humilde", english: "humble", example: { spanish: "Es una persona muy humilde a pesar de su éxito.", english: "He is a very humble person despite his success." } },
  { spanish: "ideal", english: "ideal", example: { spanish: "Este lugar es ideal para las vacaciones.", english: "This place is ideal for vacations." } },
  { spanish: "idóneo", english: "suitable", example: { spanish: "Es un candidato idóneo para el puesto.", english: "He is a suitable candidate for the position." } },
  { spanish: "ignorante", english: "ignorant", example: { spanish: "Es muy ignorante sobre este tema.", english: "He is very ignorant about this topic." } },
  { spanish: "imparcial", english: "impartial", example: { spanish: "El juez debe ser muy imparcial.", english: "The judge must be very impartial." } },
  { spanish: "impaciente", english: "impatient", example: { spanish: "Es muy impaciente y no puede esperar.", english: "She is very impatient and can’t wait." } },
  { spanish: "impecable", english: "impeccable", example: { spanish: "Su trabajo es siempre impecable.", english: "Her work is always impeccable." } },
  { spanish: "importante", english: "important", example: { spanish: "Es muy importante llegar a tiempo.", english: "It’s very important to arrive on time." } },
  { spanish: "imposible", english: "impossible", example: { spanish: "Es muy imposible terminar esto hoy.", english: "It’s very impossible to finish this today." } },
  { spanish: "impresionante", english: "impressive", example: { spanish: "El espectáculo fue muy impresionante.", english: "The show was very impressive." } },
  { spanish: "imprevisible", english: "unpredictable", example: { spanish: "El clima es muy imprevisible en esta región.", english: "The weather is very unpredictable in this region." } },
  { spanish: "inapropiado", english: "inappropriate", example: { spanish: "Su comentario fue muy inapropiado.", english: "His comment was very inappropriate." } },
  { spanish: "increíble", english: "incredible", example: { spanish: "La vista desde aquí es muy increíble.", english: "The view from here is very incredible." } },
  { spanish: "independiente", english: "independent", example: { spanish: "Ella es muy independiente y vive sola.", english: "She is very independent and lives alone." } },
  { spanish: "indiferente", english: "indifferent", example: { spanish: "Es muy indiferente a los problemas de los demás.", english: "He is very indifferent to others’ problems." } },
  { spanish: "indirecto", english: "indirect", example: { spanish: "Prefiero un enfoque más indirecto.", english: "I prefer a more indirect approach." } },
  { spanish: "inesperado", english: "unexpected", example: { spanish: "Fue un cambio muy inesperado.", english: "It was a very unexpected change." } },
  { spanish: "inestable", english: "unstable", example: { spanish: "La situación es muy inestable ahora.", english: "The situation is very unstable now." } },
  { spanish: "inferior", english: "inferior", example: { spanish: "Este producto es muy inferior al otro.", english: "This product is very inferior to the other one." } },
  { spanish: "influyente", english: "influential", example: { spanish: "Es una persona muy influyente en la industria.", english: "She is a very influential person in the industry." } },
  { spanish: "informal", english: "informal", example: { spanish: "La reunión fue muy informal y relajada.", english: "The meeting was very informal and relaxed." } },
  { spanish: "ingenioso", english: "ingenious", example: { spanish: "Su solución fue muy ingeniosa.", english: "His solution was very ingenious." } },
  { spanish: "injusto", english: "unfair", example: { spanish: "Es muy injusto que no te paguen por tu trabajo.", english: "It’s very unfair that they don’t pay you for your work." } },
  { spanish: "inmenso", english: "immense", example: { spanish: "El océano es muy inmenso.", english: "The ocean is very immense." } },
  { spanish: "inocente", english: "innocent", example: { spanish: "El niño parece muy inocente.", english: "The child seems very innocent." } },
  { spanish: "inquieto", english: "restless", example: { spanish: "Está muy inquieto porque no puede dormir.", english: "He is very restless because he can’t sleep." } },
  { spanish: "insatisfecho", english: "dissatisfied", example: { spanish: "Estoy muy insatisfecho con el servicio.", english: "I am very dissatisfied with the service." } },
  { spanish: "inseguro", english: "insecure", example: { spanish: "Se siente muy inseguro en su nuevo trabajo.", english: "He feels very insecure in his new job." } },
  { spanish: "insoportable", english: "unbearable", example: { spanish: "El calor es muy insoportable hoy.", english: "The heat is very unbearable today." } },
  { spanish: "inspirador", english: "inspiring", example: { spanish: "Su discurso fue muy inspirador.", english: "Her speech was very inspiring." } },
  { spanish: "inteligente", english: "intelligent", example: { spanish: "Es una estudiante muy inteligente.", english: "She is a very intelligent student." } },
  { spanish: "intenso", english: "intense", example: { spanish: "El partido fue muy intenso.", english: "The match was very intense." } },
  { spanish: "interesante", english: "interesting", example: { spanish: "El libro es muy interesante.", english: "The book is very interesting." } },
  { spanish: "internacional", english: "international", example: { spanish: "Es una empresa muy internacional.", english: "It’s a very international company." } },
  { spanish: "inútil", english: "useless", example: { spanish: "Este aparato es muy inútil.", english: "This device is very useless." } },
  { spanish: "invaluable", english: "invaluable", example: { spanish: "Su ayuda fue muy invaluable.", english: "His help was very invaluable." } },
  { spanish: "irritante", english: "irritating", example: { spanish: "Ese ruido es muy irritante.", english: "That noise is very irritating." } },
  { spanish: "joven", english: "young", example: { spanish: "Es un hombre muy joven para ese puesto.", english: "He is a very young man for that position." } },
  { spanish: "jubilado", english: "retired", example: { spanish: "Mi abuelo está jubilado y disfruta su tiempo libre.", english: "My grandfather is retired and enjoys his free time." } },
  { spanish: "justo", english: "fair", example: { spanish: "Es un jefe muy justo con todos.", english: "He is a very fair boss with everyone." } },
  { spanish: "largo", english: "long", example: { spanish: "El camino es muy largo.", english: "The road is very long." } },
  { spanish: "leal", english: "loyal", example: { spanish: "Es muy leal a su familia.", english: "She is very loyal to her family." } },
  { spanish: "lento", english: "slow", example: { spanish: "El tren es muy lento hoy.", english: "The train is very slow today." } },
  { spanish: "ligero", english: "light", example: { spanish: "Este bolso es muy ligero.", english: "This bag is very light." } },
  { spanish: "limpio", english: "clean", example: { spanish: "La casa está muy limpia después de la limpieza.", english: "The house is very clean after the cleaning." } },
  { spanish: "lindo", english: "cute", example: { spanish: "Ese bebé es muy lindo.", english: "That baby is very cute." } },
  { spanish: "lógico", english: "logical", example: { spanish: "Su explicación es muy lógica.", english: "His explanation is very logical." } },
  { spanish: "lujoso", english: "luxurious", example: { spanish: "El hotel es muy lujoso.", english: "The hotel is very luxurious." } },
  { spanish: "maduro", english: "mature", example: { spanish: "Es muy maduro para su edad.", english: "He is very mature for his age." } },
  { spanish: "maleducado", english: "rude", example: { spanish: "Fue muy maleducado con el camarero.", english: "He was very rude to the waiter." } },
  { spanish: "maravilloso", english: "wonderful", example: { spanish: "El día fue muy maravilloso.", english: "The day was very wonderful." } },
  { spanish: "mediocre", english: "mediocre", example: { spanish: "El rendimiento fue muy mediocre.", english: "The performance was very mediocre." } },
  { spanish: "mejor", english: "better", example: { spanish: "Este libro es mucho mejor que el otro.", english: "This book is much better than the other one." } },
  { spanish: "memorable", english: "memorable", example: { spanish: "Fue un viaje muy memorable.", english: "It was a very memorable trip." } },
  { spanish: "misterioso", english: "mysterious", example: { spanish: "El bosque es muy misterioso por la noche.", english: "The forest is very mysterious at night." } },
  { spanish: "moderno", english: "modern", example: { spanish: "El diseño es muy moderno y elegante.", english: "The design is very modern and elegant." } },
  { spanish: "molesto", english: "annoying", example: { spanish: "Ese sonido es muy molesto.", english: "That sound is very annoying." } },
  { spanish: "motivado", english: "motivated", example: { spanish: "Está muy motivado para aprender español.", english: "He is very motivated to learn Spanish." } },
  { spanish: "nervioso", english: "nervous", example: { spanish: "Estoy muy nervioso por el examen.", english: "I am very nervous about the exam." } },
  { spanish: "nítido", english: "clear", example: { spanish: "El sonido es muy nítido en este altavoz.", english: "The sound is very clear in this speaker." } },
  { spanish: "novedoso", english: "innovative", example: { spanish: "El producto es muy novedoso y útil.", english: "The product is very innovative and useful." } },
  { spanish: "nuevo", english: "new", example: { spanish: "Tengo un coche nuevo.", english: "I have a new car." } },
  { spanish: "numeroso", english: "numerous", example: { spanish: "Hay numerosos libros en la biblioteca.", english: "There are numerous books in the library." } },
  { spanish: "obvio", english: "obvious", example: { spanish: "Es muy obvio que no quiere venir.", english: "It’s very obvious that he doesn’t want to come." } },
  { spanish: "ocupado", english: "busy", example: { spanish: "Estoy muy ocupado con el trabajo.", english: "I am very busy with work." } },
  { spanish: "odioso", english: "hateful", example: { spanish: "Su comentario fue muy odioso.", english: "His comment was very hateful." } },
  { spanish: "ofensivo", english: "offensive", example: { spanish: "Ese chiste fue muy ofensivo.", english: "That joke was very offensive." } },
  { spanish: "oportuno", english: "timely", example: { spanish: "Su llegada fue muy oportuna.", english: "His arrival was very timely." } },
  { spanish: "optimista", english: "optimistic", example: { spanish: "Es muy optimista sobre el futuro.", english: "She is very optimistic about the future." } },
  { spanish: "organizado", english: "organized", example: { spanish: "Mi hermano es muy organizado con sus cosas.", english: "My brother is very organized with his things." } },
  { spanish: "original", english: "original", example: { spanish: "La idea es muy original y creativa.", english: "The idea is very original and creative." } },
  { spanish: "paciente", english: "patient", example: { spanish: "Es muy paciente con los niños.", english: "She is very patient with children." } },
  { spanish: "peligroso", english: "dangerous", example: { spanish: "Es muy peligroso caminar por aquí de noche.", english: "It’s very dangerous to walk here at night." } },
  { spanish: "pequeño", english: "small", example: { spanish: "El perro es muy pequeño y adorable.", english: "The dog is very small and adorable." } },
  { spanish: "perfecto", english: "perfect", example: { spanish: "El plan es muy perfecto para nosotros.", english: "The plan is very perfect for us." } },
  { spanish: "permanente", english: "permanent", example: { spanish: "Es un cambio muy permanente.", english: "It’s a very permanent change." } },
  { spanish: "pesado", english: "heavy", example: { spanish: "Esta caja es muy pesada.", english: "This box is very heavy." } },
  { spanish: "pesimista", english: "pessimistic", example: { spanish: "Es muy pesimista sobre el proyecto.", english: "He is very pessimistic about the project." } },
  { spanish: "pobre", english: "poor", example: { spanish: "Es una familia muy pobre, pero feliz.", english: "It’s a very poor but happy family." } },
  { spanish: "poderoso", english: "powerful", example: { spanish: "El motor es muy poderoso.", english: "The engine is very powerful." } },
  { spanish: "popular", english: "popular", example: { spanish: "Es una canción muy popular este año.", english: "It’s a very popular song this year." } },
  { spanish: "positivo", english: "positive", example: { spanish: "Tiene una actitud muy positiva.", english: "He has a very positive attitude." } },
  { spanish: "posible", english: "possible", example: { spanish: "Es muy posible que llueva esta tarde.", english: "It’s very possible that it will rain this afternoon." } },
  { spanish: "práctico", english: "practical", example: { spanish: "Este bolso es muy práctico para viajar.", english: "This bag is very practical for traveling." } },
  { spanish: "preciso", english: "precise", example: { spanish: "Necesito una respuesta muy precisa.", english: "I need a very precise answer." } },
  { spanish: "preferible", english: "preferable", example: { spanish: "Es muy preferible llegar temprano.", english: "It’s very preferable to arrive early." } },
  { spanish: "preocupado", english: "worried", example: { spanish: "Estoy muy preocupado por mi amigo.", english: "I am very worried about my friend." } },
  { spanish: "prestigioso", english: "prestigious", example: { spanish: "Es una universidad muy prestigiosa.", english: "It’s a very prestigious university." } },
  { spanish: "productivo", english: "productive", example: { spanish: "Hoy fue un día muy productivo.", english: "Today was a very productive day." } },
  { spanish: "profesional", english: "professional", example: { spanish: "Su trabajo es muy profesional.", english: "Her work is very professional." } },
  { spanish: "profundo", english: "deep", example: { spanish: "El lago es muy profundo.", english: "The lake is very deep." } },
  { spanish: "prometedor", english: "promising", example: { spanish: "Es un proyecto muy prometedor.", english: "It’s a very promising project." } },
  { spanish: "pronto", english: "prompt", example: { spanish: "Su respuesta fue muy pronta.", english: "His response was very prompt." } },
  { spanish: "próximo", english: "next", example: { spanish: "El próximo tren llega en diez minutos.", english: "The next train arrives in ten minutes." } },
  { spanish: "público", english: "public", example: { spanish: "Es un evento muy público.", english: "It’s a very public event." } },
  { spanish: "puro", english: "pure", example: { spanish: "El agua es muy pura en esta región.", english: "The water is very pure in this region." } },
  { spanish: "rápido", english: "fast", example: { spanish: "El coche es muy rápido.", english: "The car is very fast." } },
  { spanish: "raro", english: "strange", example: { spanish: "Es un comportamiento muy raro.", english: "It’s a very strange behavior." } },
  { spanish: "razonable", english: "reasonable", example: { spanish: "El precio es muy razonable.", english: "The price is very reasonable." } },
  { spanish: "reciente", english: "recent", example: { spanish: "Es una noticia muy reciente.", english: "It’s a very recent news." } },
  { spanish: "reconfortante", english: "comforting", example: { spanish: "Su abrazo fue muy reconfortante.", english: "Her hug was very comforting." } },
  { spanish: "recto", english: "straight", example: { spanish: "El camino es muy recto.", english: "The road is very straight." } },
  { spanish: "recuperado", english: "recovered", example: { spanish: "Ya estoy muy recuperado de la gripe.", english: "I am very recovered from the flu." } },
  { spanish: "refrescante", english: "refreshing", example: { spanish: "El jugo es muy refrescante.", english: "The juice is very refreshing." } },
  { spanish: "regular", english: "average", example: { spanish: "Su desempeño fue muy regular.", english: "His performance was very average." } },
  { spanish: "relajado", english: "relaxed", example: { spanish: "Me siento muy relajado después del masaje.", english: "I feel very relaxed after the massage." } },
  { spanish: "relevante", english: "relevant", example: { spanish: "La información es muy relevante para el caso.", english: "The information is very relevant to the case." } },
  { spanish: "rentable", english: "profitable", example: { spanish: "El negocio es muy rentable este año.", english: "The business is very profitable this year." } },
  { spanish: "reservado", english: "reserved", example: { spanish: "Es muy reservado con sus sentimientos.", english: "He is very reserved with his feelings." } },
  { spanish: "resistente", english: "resistant", example: { spanish: "Este material es muy resistente al agua.", english: "This material is very resistant to water." } },
  { spanish: "respetuoso", english: "respectful", example: { spanish: "Es muy respetuoso con sus mayores.", english: "He is very respectful to his elders." } },
  { spanish: "responsable", english: "responsible", example: { spanish: "Es muy responsable con sus tareas.", english: "She is very responsible with her tasks." } },
  { spanish: "rico", english: "rich", example: { spanish: "Es una familia muy rica.", english: "It’s a very rich family." } },
  { spanish: "ridículo", english: "ridiculous", example: { spanish: "Ese precio es muy ridículo.", english: "That price is very ridiculous." } },
  { spanish: "robusto", english: "robust", example: { spanish: "El sistema es muy robusto y confiable.", english: "The system is very robust and reliable." } },
  { spanish: "romántico", english: "romantic", example: { spanish: "La cena fue muy romántica.", english: "The dinner was very romantic." } },
  { spanish: "ruidoso", english: "noisy", example: { spanish: "El vecino es muy ruidoso por las noches.", english: "The neighbor is very noisy at night." } },
  { spanish: "sano", english: "healthy", example: { spanish: "Es muy sano comer frutas y verduras.", english: "It’s very healthy to eat fruits and vegetables." } },
  { spanish: "satisfactorio", english: "satisfactory", example: { spanish: "El resultado fue muy satisfactorio.", english: "The result was very satisfactory." } },
  { spanish: "seguro", english: "safe", example: { spanish: "Este barrio es muy seguro para vivir.", english: "This neighborhood is very safe to live in." } },
  { spanish: "sencillo", english: "simple", example: { spanish: "El diseño es muy sencillo y elegante.", english: "The design is very simple and elegant." } },
  { spanish: "sensato", english: "sensible", example: { spanish: "Es una decisión muy sensata.", english: "It’s a very sensible decision." } },
  { spanish: "sensible", english: "sensitive", example: { spanish: "Es muy sensible a las críticas.", english: "She is very sensitive to criticism." } },
  { spanish: "serio", english: "serious", example: { spanish: "Es un hombre muy serio en el trabajo.", english: "He is a very serious man at work." } },
  { spanish: "silencioso", english: "quiet", example: { spanish: "El bosque es muy silencioso por la noche.", english: "The forest is very quiet at night." } },
  { spanish: "simpático", english: "friendly", example: { spanish: "El camarero es muy simpático.", english: "The waiter is very friendly." } },
  { spanish: "sincero", english: "sincere", example: { spanish: "Es muy sincero con sus opiniones.", english: "He is very sincere with his opinions." } },
  { spanish: "singular", english: "unique", example: { spanish: "Tiene un estilo muy singular.", english: "She has a very unique style." } },
  { spanish: "situado", english: "located", example: { spanish: "El hotel está muy bien situado.", english: "The hotel is very well located." } },
  { spanish: "sofisticado", english: "sophisticated", example: { spanish: "El sistema es muy sofisticado.", english: "The system is very sophisticated." } },
  { spanish: "sólido", english: "solid", example: { spanish: "El mueble es muy sólido y resistente.", english: "The furniture is very solid and resistant." } },
  { spanish: "soltero", english: "single", example: { spanish: "Mi hermano está soltero y feliz.", english: "My brother is single and happy." } },
  { spanish: "sorprendente", english: "surprising", example: { spanish: "Fue un resultado muy sorprendente.", english: "It was a very surprising result." } },
  { spanish: "suave", english: "soft", example: { spanish: "La tela es muy suave al tacto.", english: "The fabric is very soft to the touch." } },
  { spanish: "subestimado", english: "underestimated", example: { spanish: "Su talento está muy subestimado.", english: "Her talent is very underestimated." } },
  { spanish: "sucio", english: "dirty", example: { spanish: "El suelo está muy sucio después de la fiesta.", english: "The floor is very dirty after the party." } },
  { spanish: "superior", english: "superior", example: { spanish: "Este modelo es muy superior al anterior.", english: "This model is very superior to the previous one." } },
  { spanish: "suspicaz", english: "suspicious", example: { spanish: "Es muy suspicaz con los desconocidos.", english: "He is very suspicious of strangers." } },
  { spanish: "talentoso", english: "talented", example: { spanish: "Es un artista muy talentoso.", english: "He is a very talented artist." } },
  { spanish: "técnico", english: "technical", example: { spanish: "Es un problema muy técnico.", english: "It’s a very technical problem." } },
  { spanish: "temeroso", english: "fearful", example: { spanish: "El perro está muy temeroso después del ruido.", english: "The dog is very fearful after the noise." } },
  { spanish: "tenso", english: "tense", example: { spanish: "La situación está muy tensa.", english: "The situation is very tense." } },
  { spanish: "terrible", english: "terrible", example: { spanish: "Fue un día muy terrible.", english: "It was a very terrible day." } },
  { spanish: "tímido", english: "shy", example: { spanish: "Es muy tímido con las personas nuevas.", english: "He is very shy with new people." } },
  { spanish: "típico", english: "typical", example: { spanish: "Es un plato muy típico de España.", english: "It’s a very typical dish from Spain." } },
  { spanish: "tolerante", english: "tolerant", example: { spanish: "Es muy tolerante con las opiniones de otros.", english: "She is very tolerant of others’ opinions." } },
  { spanish: "tóxico", english: "toxic", example: { spanish: "Esa relación es muy tóxica.", english: "That relationship is very toxic." } },
  { spanish: "tranquilo", english: "calm", example: { spanish: "El lugar es muy tranquilo para descansar.", english: "The place is very calm for resting." } },
  { spanish: "triste", english: "sad", example: { spanish: "Estoy muy triste por la noticia.", english: "I am very sad about the news." } },
  { spanish: "unido", english: "united", example: { spanish: "El equipo está muy unido.", english: "The team is very united." } },
  { spanish: "útil", english: "useful", example: { spanish: "Este libro es muy útil para aprender.", english: "This book is very useful for learning." } },
  { spanish: "valiente", english: "brave", example: { spanish: "Es muy valiente al enfrentar sus miedos.", english: "She is very brave in facing her fears." } },
  { spanish: "valioso", english: "valuable", example: { spanish: "Este collar es muy valioso para mí.", english: "This necklace is very valuable to me." } },
  { spanish: "variado", english: "varied", example: { spanish: "El menú es muy variado y delicioso.", english: "The menu is very varied and delicious." } },
  { spanish: "verdadero", english: "true", example: { spanish: "Es un amigo muy verdadero.", english: "He is a very true friend." } },
  { spanish: "versátil", english: "versatile", example: { spanish: "Es un actor muy versátil.", english: "He is a very versatile actor." } },
  { spanish: "viejo", english: "old", example: { spanish: "Mi coche es muy viejo y necesita reparaciones.", english: "My car is very old and needs repairs." } },
  { spanish: "violento", english: "violent", example: { spanish: "La película es muy violenta.", english: "The movie is very violent." } },
  { spanish: "visible", english: "visible", example: { spanish: "La luna es muy visible esta noche.", english: "The moon is very visible tonight." } },
  { spanish: "vivo", english: "lively", example: { spanish: "El mercado es muy vivo los fines de semana.", english: "The market is very lively on weekends." } },
  { spanish: "vulnerable", english: "vulnerable", example: { spanish: "Se siente muy vulnerable después de la discusión.", english: "She feels very vulnerable after the argument." } }
]
        };
