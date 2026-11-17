# Sito società di pattinaggio artistico

Design realizzato in Claude (artifact con tavole). Questa cartella contiene il design di riferimento e i token. **Esiste già una codebase**: il lavoro è integrare questo design nel progetto esistente, seguendone le convenzioni. Non creare un nuovo progetto e non sovrascrivere configurazioni già presenti.

## Stack e metodologia
- Feature-Sliced Design (FSD)
- Astro + React (isole React dove serve interattività)
- shadcn/ui
- Tailwind CSS + tailwind-variants (`tv`) per le varianti dei componenti
- Embla è già installato ma **per ora non usarlo**: carosello e slideshow restano segnaposto statici, da rimandare.

Prima di scrivere codice, leggi la codebase esistente: struttura delle cartelle, alias, come sono mappati i layer FSD con le rotte di Astro, come sono configurati Tailwind e shadcn, quali componenti shadcn esistono già. Segui ciò che trovi, non inventare convenzioni nuove.

## Regole di sviluppo
- **FSD**: rispetta i layer (`app`, `pages`, `widgets`, `features`, `entities`, `shared`), l'import solo verso i layer sottostanti e l'API pubblica di ogni slice (`index.ts`). Niente import incrociati tra slice dello stesso layer.
- **SOLID**: ogni componente ha una sola responsabilità, dipende da props e astrazioni, non da dettagli di altre slice. Estendi con varianti e composizione, non con condizioni sparse.
- **Componenti piccoli**: niente componenti giganti. Una sezione di pagina diventa un widget composto da pezzi piccoli (per esempio una riga disciplina, un ritratto dello staff, una colonna del footer). Se un file supera circa 100–150 righe, dividilo.
- **Varianti**: usa `tv` di tailwind-variants per forme e stati (pulsanti a pillola, card, maschere foto), non stringhe di classi duplicate.
- **Dati separati dalla UI**: elenchi come discipline, staff, corsi ed eventi vanno in array tipizzati (nelle entità o in file di dati della slice), non scritti dentro il markup.
- **shadcn**: usa i componenti shadcn e personalizzali tramite token e varianti. Non riscrivere componenti già presenti.
- **Astro vs React**: usa componenti Astro per le parti statiche e React solo dove serve stato o interazione (cambio tema, filtri staff).

## Cosa NON fare
- **Non creare le pagine delle maschere** (`design/Maschere*.dc.html`): sono solo prove di esplorazione. Non implementarle come pagine né come demo.
- **Non creare immagini** per ora: niente generazione, ritagli, ottimizzazione, SVG illustrativi o file immagine nuovi. Dove serve una foto usa un segnaposto (blocco con il colore `wood` e l'etichetta `[FOTO]`). I PNG in `assets/` sono solo riferimento: non copiarli nel progetto.
- Non usare Embla per ora.
- Non sovrascrivere `components.json`, la configurazione Tailwind o i CSS globali già presenti: confronta e unisci.

## Contenuto della cartella
- `styles/globals.css`: tema shadcn completo (token oklch, coppie surface/foreground, token del brand `gold`, `gold-text`, `wood`, `band`, utility `shape-blob`, `shape-leaf`, `kicker`). Da **unire** ai CSS globali esistenti, non da copiare sopra.
- `components.json`: configurazione shadcn di esempio. Il progetto ha già il suo: usa questo file solo come confronto.
- `design/*.dc.html`: tavole di riferimento. Il markup è in stile inline e usa variabili CSS: leggilo come specifica di layout, non come codice da riusare. Non si apre da solo nel browser (serve il runtime di Claude). I file `X.dc.html` sono in tema chiaro, `X-scuro.dc.html` in tema scuro.
- `assets/atleta-1.png`, `assets/atleta-2.png`: ritagli senza sfondo, solo riferimento.

## Tavole
- `Main` / `Scuro`: home. `MainSlide` / `ScuroSlide`: home con hero a slideshow (versione preferita).
- `Corsi`, `Galleria`, `Contatti`: pagine interne.
- `DesignSystem`: token, tipografia, raggi, forme, componenti.
- `Maschere`, `Maschere2`, `Maschere3`: **non implementare**, solo esplorazione.

## Decisioni di design prese
- Carattere titoli: Cormorant Garamond 700. Testo: Jost.
- Pulsanti, input e chip a pillola (`rounded-full`). Card con `rounded-2xl`.
- Discipline: righe editoriali con numero, titolo, descrizione e freccia (niente card).
- Staff: griglia `auto-fill` con ritratti circolari e anello d'oro sfalsato, filtri per ruolo, pulsante "Mostra tutto". Deve reggere molti membri.
- Hero: foto dentro la mask organica `shape-blob`, con scia e ellissi d'oro sopra. Nel design è uno slideshow con dissolvenza; per ora implementare una sola foto segnaposto.
- Carosello "Momenti in pista": nel design è uno scorrimento orizzontale; per ora segnaposto statico, da fare con Embla in seguito.
- Footer: onda con filo d'oro sul bordo, fascia blu notte con colonne Pagine, Contatti, Seguici.
- Maschera foto scelta: rettangolo morbido con scia dorata. Variante ancora da decidere (scia dentro la foto, affusolata, cornice interna, contorno aperto). L'arco è scartato.

## Da fare / non definito
- Il menu tra le pagine è solo grafico, non collegato.
- Filtri dello staff solo grafici.
- Tutti i testi, nomi, date, indirizzi e foto sono segnaposto tra parentesi quadre.
- Componente `PhotoFrame` (rounded-3xl + scia dorata) da definire dopo aver scelto la variante.
- Cambio tema: classe `dark` su `html`, seguendo ciò che il progetto già usa.

## Ordine di lavoro suggerito
1. Leggere la codebase e proporre un piano con le slice e i widget da creare, prima di scrivere codice.
2. Unire i token di `globals.css` ai CSS esistenti e verificare tema chiaro e scuro.
3. Creare le varianti `tv` per pulsanti, input, badge e card (pillola e `rounded-2xl`).
4. Costruire i widget uno alla volta: header, footer a onda, hero, discipline, staff, eventi, contatti.
5. Comporre la home, poi Corsi, Galleria e Contatti.
