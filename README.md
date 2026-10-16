# Produktseite — Handelsregister für Salesforce

Die Vertriebs- und Webseite zum Salesforce-Add-on. Statisches HTML, keine
Abhängigkeiten, kein Build — `index.html` lässt sich direkt im Browser öffnen.

```
index.html        die Produktseite, Deutsch und Englisch im selben Markup
impressum.html    Anbieterkennzeichnung
datenschutz.html  Datenschutzerklärung
styles.css        Farbtokens oben, Dark Mode inbegriffen
app.js            Sprachumschalter
img/              Screenshots aus einer laufenden Org mit echten Registerdaten
```

## Sprachen

Jeder übersetzte Text steht zweimal im Markup, in `<span data-lang="de">` und
`<span data-lang="en">`. CSS blendet die jeweils inaktive Sprache aus. Texte
ändern heißt also: im HTML beide Varianten anfassen, nichts kompilieren.

Die Startsprache richtet sich nach der Browsersprache und wird danach in
`localStorage` gemerkt.

## Hosting

Die Seite liegt in einem eigenen, öffentlichen Repository und wird über GitHub
Pages ausgeliefert (*Settings → Pages → Branch `main`, Ordner `/ (root)`*). Das
Produktrepository bleibt privat, damit Backend, Terraform und interne
Dokumentation nicht mitveröffentlicht werden.

Dieser Ordner ist die Quelle. Änderungen hier, dann veröffentlichen mit:

```bash
./site/publish.sh "Impressum ergänzt"
```

- Seite: <https://sebastianwindeck.github.io/company-register-for-salesforce/>
- Repository: <https://github.com/sebastianwindeck/company-register-for-salesforce>

Eine eigene Domain wird unter *Settings → Pages → Custom domain* eingetragen,
dazu ein CNAME auf `<benutzer>.github.io`.

## Noch offen

- **Impressum vervollständigen.** Die gelb markierten Felder in
  `impressum.html` sind Platzhalter; solange sie stehen, ist die Seite in
  Deutschland abmahnfähig. Die Warnbox oben auf der Seite entfernen, sobald
  alle ersetzt sind.
- **`noindex` entfernen.** `index.html` trägt bis dahin ein
  `<meta name="robots" content="noindex">`, damit die Seite nicht indexiert wird.
- **Telefonnummer und Registerangaben** ergänzen, falls vorhanden.
