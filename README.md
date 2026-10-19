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
Pages ausgeliefert. Das Produktrepository bleibt privat, damit Backend,
Terraform und interne Dokumentation nicht mitveröffentlicht werden.

- Repository: <https://github.com/sebastianwindeck/company-register-for-salesforce>
- Aktuell erreichbar unter:
  <https://sebastianwindeck.github.io/company-register-for-salesforce/>
- Zieladresse: <https://crm-register.com>

Dieser Ordner ist die Quelle. Änderungen hier, dann veröffentlichen mit:

```bash
./site/publish.sh "Was sich geändert hat"
```

### Umzug auf crm-register.com — in dieser Reihenfolge

Eine `CNAME`-Datei im veröffentlichten Ordner schaltet die eigene Domain
scharf. **Sie darf erst dazukommen, wenn der DNS steht**: sobald sie da ist,
leitet GitHub die bisherige Adresse auf `crm-register.com` um, und solange die
Domain nicht zeigt, ist die Seite nicht erreichbar.

1. Bei Namecheap (dort liegt die Zone) eintragen:

   | Typ | Host | Wert |
   | --- | --- | --- |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `sebastianwindeck.github.io.` |

   Die Parking-Einträge von Namecheap müssen dabei weg.
2. Prüfen, dass `dig +short crm-register.com` die vier Adressen liefert.
3. `echo crm-register.com > site/CNAME`, dann `./site/publish.sh`.
4. In den Repository-Einstellungen unter *Pages* *Enforce HTTPS* setzen, sobald
   GitHub das Zertifikat ausgestellt hat (dauert nach dem ersten Treffer einige
   Minuten).

## Stand

Impressum und Datenschutzerklärung sind vollständig, die Seite ist für
Suchmaschinen freigegeben. Ändert sich die Firmierung, sind
`impressum.html`, `datenschutz.html` und die Fußzeile von `index.html`
anzupassen.
