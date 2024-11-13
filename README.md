# README

## System för bokning av biobiljett

Webbapplikation byggt i React för att boka platser för i en biograf. I applikationen kan besökaren välja film ur det nuvarande utbudet, fylla i hur många platser denne vill ha, få en uträknad totalkostnad för antalet platser samt fylla i sina uppgifter för att boka biobesöket. 

## Ramverk, dataformat och verktyg

### React
React har använts på grund av dess fördelar och enkelhet när det kommer till att bygga upp och strukturera komponenter för att sätta samman hemsidor. Uppdateringar kan snabbt tillämpas eftersom dessa renderas genom den virtuella DOM:en. Detta gör att hela sidan inte behöver göras om varje gång utan endast elementet som påverkades. 

### JSON
Projektet hämtar data om filmerna från en JSON-fil. JSON håller informationen på ett strukturerat och lättläsligt sätt som både människor och datorer lätt kan tolka. Detta projekt använder JavaScript och genom att förvara datan i JSON-format kan information lätt hämtas och appliceras i React-komponenterna. 

### ESLint
Verktyg för kontroll av kodkvalitet som använts i detta projekt för att hitta och identifiera problem i JavaScript-koden. ESLint säkerställer att koden håller sig lättläslig och logisk samtidigt som den är bra på att upptäcka fel tidigt, bland annat innan koden ens körs. Dess stöd för plugin såsom React var anledningen till att det användes i detta projekt. 

## Installation och användning
Instruktioner för att starta projektet lokalt.

### 1. Installera projektet
```
git clone <repository-url>
cd <project-directory>
```

### 2. Ladda ner beroenden.
Se till att Node.js och npm installerat. Kör detta kommando för att installera beroenden för projektet: 

```
npm install
```

### 3. Starta projektet
Starta utvecklingsservern med:
```
npm start
```

## Användning
1. Välj valfri film från dropdown-menyn.
2. Välj antal platser du vill ha av de som är tillgängliga. Du kommer få en sammanfattning av hur många platser du valt samt vad dessa kostar baserat på vilken film du valt.  
3. Klicka på knappen "Boka platser" när du känner dig nöjd. När detta är gjort visas en pop-up med en sammanställning av din bokning, och du har möjlighet att fylla i ditt namn och telefonnummer för att bekräfta bokningen.

## Licens
Projektet är fritt att använda och modifiera. 