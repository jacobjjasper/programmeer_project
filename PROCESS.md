# Process report Jacob Jasper, Programmeer project, 10650385


# Week 1

## 7 juni
- Bezig geweest met het preprocessen van mijn data en het omzetten naar een JSON.
Aangezien ik vastliep in week 3 daarmee, had ik daar nu ook weer moeite mee.
- Ik kwam erachter tijdens het proprocessen dat mijn data soms verschilt in
jaren en neit volledig overeenkomt.

## 8 juni
- Besloten om mijn visualisaties iets aan te passen. jaren lopen van 1990-2012
nu voor de heatmap, voor de scatter kan je kiezen tussen de jaren 1990-2010 met
verschillende gaps van jaren ertussen (1990, 1995, 2000, 2005, 2006, 2010). en
de line graph loopt van 1980 tot 2012 ook. Deze keuzes zijn gemaakt op basis van
de data die beschikbaar is, kwam erachter dat mijn data niet overal hetzelfde is
op de site waar ik het vandaag haal (7 juni).
- Ook besloten de volgorde van de visualisaties iets aan te passen op aanraden
van Sasha, dit kwam naar voren uit de feedback.
- Dit ook aangepast in mijn proposal.

# Week 2

## 11 juni
- Bezig geweest met het nog een keer doorlezen van mijn data en beter beeld te
verkrijgen voordat ik echt aan het werk ga.
- Mijn localhost werkt niet, hier loop ik vast en kan ik dus niet controleren of
mijn kaart goed geladen wordt. (opgelost)
- Ik heb besloten om door te gaan met mijn andere visualisaties en de wereldkaart
nu even te laten voor wat het is (want ik kom niet  verder daarmee en ben daar
  de hele dag mee bezig geweest en eigenlijk niet echt begrijp hoe het nou
  precies werkt). Hier moet ik morgen met een begeleider even mee gaan zitten.
- Proposal en design bijgewerkt.

## 12 juni
- Vandaag heel veel problemen gehad met het goed structureren van mijn data. Het
is nu bijna gelukt, enige wat ik nog moet doen is dat ik het zo structureer dat
het makkelijk per jaar te selecteren is voor het dropdown menu.
- Nog niet toegekomen aan scatter, dus kom een beetje in tijdnood als ik al mijn
visualisaties af wil hebben, zoals ik wilde.

## 13 juni
- Ben vandaag de hele dag bezig geweest met mijn scatterplot. Ging veel minder
goed dan verwacht en hij is dan ook nog niet af. Heb ook nog kleine aanpassingen
gemaakt bij mijn datanamen zodat die wat makkelijker zijn. Loop nu vast bij mijn
scatter, omdat die sommige waardes NaN geeft. Zelfs als ik de functie "Number"
ervoor zet ziet die het als indefined. Heel erg vervelend, want wil vrijdag mijn
mv... wel af hebben.

## 14 juni
- Heb mijn proces_data_scatter omgeschreven, maar als nog niet voor elkaar
gekregen om de niet overeenkomende landen met python eruit te halen. Heb nu de
drie landen die niet overeenkwamen met de hand verwijderd. Nu doet mijn scatter
het wel goed, dus daar ben ik blij mee. Ga beginnen met mijn Linegraph.
- Heb gezocht naar voorbeelden, kwam er niet helemaal uit (elk voorbeeld
gebruikt parseTime, terwijl ik dat niet nodig heb als het goed is met mijn
jaren). Morgen verder met linegraph en hoop dat ik die af krijg, zodat ik in
het weekend mijn map kan maken.

## 15 juni
- Na de presentaties ben ik bezig geweest met het verbeteren van mijn linegraph.
- Hierna ben ik op zoek gegaan naar mijn datamap. Veel gevonden die ik niet
aan het werk kreeg en niet zo goed begreep. Nu ervoor gekozen om toch datamaps
te doen. Moet alleen kijken hoe ik d3 v3 en d3 v4 combineer in verschillende
files.

## 16 juni
- net mijn d3 worldmap ingeladen, dit lukt. Heb hem echter direct in de html
gezet, dus moet nu gaan kijken hoe dit in js zet.
- In js gezet, nu gaan kijken hoe ik met een jaar de kleur kan veranderen. Zodra
ik dit weet kan ik de slider implementeren en proberen te updaten.

# week 3

## 18 juni
- Kaart ingekleurd gekregen met laatste jaar. kleurenpalette werkt. Nu uitzoeken
hoe ik de jaren apart krijg en verbind aan een slider. Moet er ook rekening mee
houden als er op een land wordt geklikt in de map je ws een land code krijgt
ipv land naam en misshcien dus nog een toevoeging moet doen aan mijn update_line
functie.
- Scatter gelinkt aan linegraph. Update nu. nu uitzoeken hoe ik scatter laat
updaten aan de and van jaren button en daarna kijken hoe ik de data krijg
aangepast als ik van variabele op de y as wil wisselen.

## 19 juni
- Update_scatter maken voor jaren.
- Lukt niet echt goed, heb nu voor elkaar gekregen om dropdown menu te laten
werken samen met nigel, deze deed het eerst niet. Nu dat werkt en de juiste data
wordt geselecteerd moet ik de datapunten updaten. Dit gebeurt echter nog niet en
snap niet helemaal waarom.
- Heb mijn scatter_update aan het werk gekregen met hulp van tim, code klopte
maar vergeten een variabele te hernoemen. Het is echter nu zo dat ik een error
krijg (Cannot read property 'createSVGPoint' of undefined) waarvan ik niet
precies weet waar die vandaan komt,het is waarschijnlijk iets met de benamingen
van mijn svg's en tooltips, want hiervoor deed die het niet.

## 20 juni
- Update voor mijn scatter lukt nu. Gebruik gemaakt van een extra file, omdat
dit voor mezelf overzichtelijker is. Om consequent te blijven heb ik dit nu ook
gedaan voor mijn linegraph update functie. Nu nog een knop bouwen die mijn y-as
verandert. Uitdaging is hier, hoe ik bijhoudt welke variabele er staat en dat
mijn update functie anders werkt dus afhankelijk van de variabele. Dit doe ik
later.
- Repository aangepast met verschillende overzichtelijke mappen.
- Data voor mijn stacked barchart geconvert naar JSON, dit was exact hetzelfde
proces als daarvoor maar moest nog gebeuren. Deze data had ik al wel gevonden
maar nog niet omgezet, omdat ik eerst mijn mvp grotendeels af wilde hebben.
- Werken aan mijn slider en update map colors.

## 21 juni
- Map met slider afgemaakt en werkend gekregen.
- Update voor mijn Y-as begonnen.
- Achter gekomen dat mijn data voor mijn stacked_bar toch niet helemaal goed is,
besloten om een normale bargraph te doen.
- Update functie voor mijn y_axis_scatter gemaakt, om zo van variabele te
wisselen.

## 22 juni
- Achter gekomen dat mijn tool_tip niet goed werkt bij het veranderen van de
y_axis_scatter.

## 25 juni
- Gewerkt aan het verbeteren van mijn tool_tip.
- Begin gemaakt van mijn bargraph morgen aan verder.

## 26 juni
- Achter gekomen dat ik ben vergeten te pushen afgelopen dagen, heel dom.
- Verder werken aan mijn bargraph en mijn tool_tip beter werkend krijgen.
- Fout tool_tip lag aan het definieren van een algemene variabele die
hetzelfde heet in andere documenten, al eerder gehad nu werkt die.
-
