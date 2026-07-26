/* ============================
   FRAGEN-SYSTEM
============================ */

const questions = {
  sport: {
100: [
  // ⚽ Fußball
  { q: "Fußball: Wie viele Spieler stehen pro Team gleichzeitig auf dem Spielfeld?", a: "11" },
  { q: "Fußball: Wie lange dauert eine Halbzeit im Profifußball?", a: "45 Minuten" },
  { q: "Fußball: Wie viele Punkte erhält ein Team für ein Unentschieden?", a: "1 Punkt" },
  { q: "Fußball: Wie viele Auswechslungen sind nach den aktuellen FIFA-Regeln in den meisten Wettbewerben während der regulären Spielzeit erlaubt?", a: "5" },
  { q: "Fußball: Wie groß ist der Torraum?", a: "5,5 Meter" },
  { q: "Fußball: Wie viele Schiedsrichterassistenten stehen normalerweise an den Seitenlinien?", a: "2" },
  { q: "Fußball: Wie lange dauert eine Verlängerung insgesamt?", a: "30 Minuten" },

  // 🏀 Basketball
  { q: "Basketball: Wie viele Spieler stehen pro Team gleichzeitig auf dem Spielfeld?", a: "5" },
  { q: "Basketball: Wie viele Punkte gibt ein Wurf hinter der Dreipunktlinie?", a: "3 Punkte" },
  { q: "Basketball: Wie viele Viertel hat ein Basketballspiel?", a: "4" },
  { q: "Basketball: Wie lange dauert ein Viertel in der NBA?", a: "12 Minuten" },
  { q: "Basketball: Wie viele Punkte zählt ein Korb innerhalb der Dreipunktlinie?", a: "2 Punkte" },

  // 🏐 Volleyball
  { q: "Volleyball: Wie viele Spieler stehen pro Team gleichzeitig auf dem Feld?", a: "6" },
  { q: "Volleyball: Wie viele Ballberührungen sind pro Team erlaubt, bevor der Ball über das Netz gespielt werden muss?", a: "3" },
  { q: "Volleyball: Wie viele Punkte benötigt ein Team normalerweise, um einen Satz zu gewinnen?", a: "25 Punkte" },
  { q: "Volleyball: Wie viele Sätze muss ein Team gewinnen, um ein Best-of-Five-Spiel zu gewinnen?", a: "3 Sätze" },
  { q: "Volleyball: Wie viele Liberos dürfen in internationalen Wettbewerben auf dem Spielbericht stehen?", a: "2" },

  // 🎾 Tennis
  { q: "Tennis: Wie viele Spieler stehen bei einem Einzel auf dem Platz?", a: "2" },
  { q: "Tennis: Wie viele Aufschlagversuche hat ein Spieler pro Punkt?", a: "2" },
  { q: "Tennis: Wie viele Gewinnsätze sind bei den meisten Turnieren erforderlich, um ein Match zu gewinnen?", a: "2" },
  { q: "Tennis: Wie viele Punkte muss ein Spieler mindestens gewinnen, um ein Spiel (Game) zu gewinnen?", a: "4 Punkte" },
  { q: "Tennis: Wie viele Spieler stehen bei einem Doppel auf dem Platz?", a: "4" },

  // 🏒 Eishockey
  { q: "Eishockey: Wie viele Spieler stehen pro Team gleichzeitig auf dem Eis?", a: "6" },
  { q: "Eishockey: Wie viele Drittel hat ein Eishockeyspiel?", a: "3" },
  { q: "Eishockey: Wie lange dauert ein Drittel?", a: "20 Minuten" },
  { q: "Eishockey: Wie lange dauert eine kleine Zeitstrafe?", a: "2 Minuten" },
  { q: "Eishockey: Wie viele Tore zählt ein erfolgreich verwandelter Penalty?", a: "1" },

  // 🤾 Handball
  { q: "Handball: Wie viele Spieler stehen pro Team gleichzeitig auf dem Spielfeld?", a: "7" },
  { q: "Handball: Wie lange dauert eine Halbzeit?", a: "30 Minuten" },
  { q: "Handball: Wie viele Schritte darf ein Feldspieler ohne Dribbling machen?", a: "3 Schritte" },
  { q: "Handball: Wie viele Team-Timeouts sind pro Spiel erlaubt?", a: "3" },
  { q: "Handball: Wie viele Tore zählt ein regulärer Treffer?", a: "1" },

  // 🏸 Badminton
  { q: "Badminton: Wie viele Spieler stehen bei einem Einzel auf dem Feld?", a: "2" },
  { q: "Badminton: Wie viele Punkte benötigt man, um einen Satz zu gewinnen?", a: "21 Punkte" },
  { q: "Badminton: Wie viele Gewinnsätze sind erforderlich, um ein Match zu gewinnen?", a: "2" },
  { q: "Badminton: Wie viele Spieler stehen bei einem Doppel auf dem Feld?", a: "4" }
],

200: [
  // ⚽ Fußball
  { q: "Fußball: Welches Land gewann die FIFA-Weltmeisterschaft 2014?", a: "Deutschland" },
  { q: "Fußball: Welcher Spieler hält den Rekord für die meisten Tore bei FIFA-Weltmeisterschaften?", a: "Miroslav Klose" },
  { q: "Fußball: Wie viele Mannschaften nehmen seit 2016 an einer EM-Endrunde teil?", a: "24" },
  { q: "Fußball: Mit wie vielen Punkten qualifiziert sich ein Team in einer WM-Gruppenphase häufig für das Achtelfinale?", a: "6 Punkte" },
  { q: "Fußball: Wie viele Schützen treten pro Team zunächst in einem Elfmeterschießen an?", a: "5" },

  // 🏀 Basketball
  { q: "Basketball: Wie viele Sekunden hat ein Team in der NBA und nach FIBA-Regeln für einen Angriff?", a: "24 Sekunden" },
  { q: "Basketball: Nach wie vielen persönlichen Fouls wird ein Spieler in der NBA ausgeschlossen?", a: "6 Fouls" },
  { q: "Basketball: Wie viele Punkte erzielte Wilt Chamberlain im punktreichsten NBA-Spiel eines Spielers?", a: "100 Punkte" },
  { q: "Basketball: Wie viele Spieler nehmen an einem Sprungball zu Spielbeginn im Mittelkreis teil?", a: "2" },
  { q: "Basketball: Wie viele reguläre Auszeiten hat ein NBA-Team pro Spiel?", a: "7" },

  // 🏐 Volleyball
  { q: "Volleyball: Mit wie vielen Punkten Vorsprung muss ein Satz gewonnen werden?", a: "2 Punkte" },
  { q: "Volleyball: Wie viele Spieler rotieren nach dem Rückgewinn des Aufschlagrechts jeweils eine Position weiter?", a: "6" },
  { q: "Volleyball: Wie viele Sätze kann ein Best-of-Five-Spiel maximal dauern?", a: "5" },
  { q: "Volleyball: Wie viele Punkte werden im Entscheidungssatz (Tiebreak) zum Sieg benötigt?", a: "15 Punkte" },
  { q: "Volleyball: Wie viele Liberos dürfen in internationalen Wettbewerben auf dem Spielbericht stehen?", a: "2" },

  // 🎾 Tennis
  { q: "Tennis: Wie viele Grand-Slam-Turniere finden pro Jahr statt?", a: "4" },
  { q: "Tennis: Wie viele Spiele muss ein Spieler mindestens gewinnen, um einen Satz mit Tiebreak zu gewinnen?", a: "6 Spiele" },
  { q: "Tennis: Wie viele Punkte sind mindestens nötig, um einen Tiebreak zu gewinnen?", a: "7 Punkte mit 2 Punkten Vorsprung" },
  { q: "Tennis: Wie viele Challenges pro Satz stehen einem Spieler bei vielen Turnieren zunächst zur Verfügung?", a: "3" },
  { q: "Tennis: Wie viele Spieler stehen bei einem Mixed-Doppel auf dem Platz?", a: "4" },

  // 🏒 Eishockey
  { q: "Eishockey: Wie viele Spieler sitzen bei einer 5-Minuten-Strafe auf der Strafbank?", a: "1" },
  { q: "Eishockey: Wie viele Schiedsrichter befinden sich bei NHL-Spielen auf dem Eis?", a: "4" },
  { q: "Eishockey: Wie viele Spiele umfasst eine reguläre NHL-Saison pro Team?", a: "82" },
  { q: "Eishockey: Wie viele Feldspieler darf ein Team bei einem Powerplay maximal gleichzeitig auf dem Eis haben?", a: "5" },
  { q: "Eishockey: Wie viele Drittel werden vor einer möglichen Overtime gespielt?", a: "3" },

  // 🤾 Handball
  { q: "Handball: Aus wie vielen Feldspielern und Torwart besteht eine Mannschaft auf dem Spielfeld?", a: "6 Feldspieler und 1 Torwart" },
  { q: "Handball: Wie lange dauert eine Zeitstrafe?", a: "2 Minuten" },
  { q: "Handball: Wie viele Schritte darf ein Spieler ohne Dribbling machen?", a: "3 Schritte" },
  { q: "Handball: Wie viele Spieler des anwerfenden Teams befinden sich beim Anwurf im Mittelkreis?", a: "1" },
  { q: "Handball: Wie viele Tore erzielte Kiril Lazarov im Rekordspiel einer Handball-Weltmeisterschaft?", a: "13 Tore" },

  // 🏸 Badminton
  { q: "Badminton: Wie viele Punkte kann ein Satz maximal erreichen?", a: "30 Punkte" },
  { q: "Badminton: Wie viele Gewinnsätze benötigt man zum Matchgewinn?", a: "2" },
  { q: "Badminton: Wie viele Spieler stehen bei einem Mixed-Doppel auf dem Feld?", a: "4" },
  { q: "Badminton: Mit wie vielen Punkten Vorsprung muss ein Satz gewonnen werden?", a: "2 Punkte (außer bei 30:29)" },
  { q: "Badminton: Wie viele Schläge darf ein Team maximal ausführen, bevor der Ball über das Netz gespielt werden muss?", a: "1" }
],

300: [
  // ⚽ Fußball
  { q: "Fußball: Welcher Verein gewann die UEFA Champions League 2020?", a: "Bayern München" },
  { q: "Fußball: Wie viele Tore erzielte Lionel Messi in der La-Liga-Saison 2011/12?", a: "50" },
  { q: "Fußball: Wie viele Mannschaften spielen seit der Saison 1992/93 in der Bundesliga?", a: "18" },
  { q: "Fußball: Wie viele Weltmeistertitel gewann Brasilien bis einschließlich 2022?", a: "5" },
  { q: "Fußball: Wie viele Gruppenspiele bestreitet jede Mannschaft bei einer FIFA-Weltmeisterschaft?", a: "3" },

  // 🏀 Basketball
  { q: "Basketball: Wie viele NBA-Meisterschaften gewann Michael Jordan mit den Chicago Bulls?", a: "6" },
  { q: "Basketball: Wie viele Teams spielen in der NBA?", a: "30" },
  { q: "Basketball: Wie lange beträgt die reguläre Spielzeit eines NBA-Spiels?", a: "48 Minuten" },
  { q: "Basketball: Wie viele persönliche Fouls führen nach FIBA-Regeln zum Ausschluss eines Spielers?", a: "5" },
  { q: "Basketball: Wie lange dauert eine Verlängerung (Overtime) in der NBA?", a: "5 Minuten" },

  // 🏐 Volleyball
  { q: "Volleyball: Wie viele Spieler dürfen gleichzeitig einen Block bilden?", a: "3" },
  { q: "Volleyball: Mit welchem Mindestvorsprung muss ein Tiebreak gewonnen werden?", a: "2 Punkte" },
  { q: "Volleyball: Wie viele Spieler können einen Doppelblock bilden?", a: "2" },
  { q: "Volleyball: Wie viele Sätze gewinnt das Siegerteam in einem Best-of-Five-Spiel?", a: "3" },
  { q: "Volleyball: Wie hoch ist das Netz bei den Herren?", a: "2,43 Meter" },

  // 🎾 Tennis
  { q: "Tennis: Wie viele Grand-Slam-Einzeltitel gewann Roger Federer?", a: "20" },
  { q: "Tennis: Wie viele Spiele muss ein Spieler mindestens gewinnen, um einen Satz zu gewinnen?", a: "6" },
  { q: "Tennis: Mit welchem Mindestvorsprung wird ein Tiebreak gewonnen?", a: "2 Punkte" },
  { q: "Tennis: Wie viele Spieler stehen bei einem Mixed-Doppel auf dem Platz?", a: "4" },
  { q: "Tennis: Was passiert mit Challenges, wenn sie erfolgreich sind?", a: "Sie werden nicht vom Kontingent abgezogen" },

  // 🏒 Eishockey
  { q: "Eishockey: Wie viele Stanley-Cup-Titel gewannen die Montreal Canadiens?", a: "24" },
  { q: "Eishockey: Wie viele Feldspieler hat ein Team bei einer doppelten Unterzahl (5 gegen 3) auf dem Eis?", a: "3" },
  { q: "Eishockey: Wie lange dauert eine Major-Strafe?", a: "5 Minuten" },
  { q: "Eishockey: Wie viele Spiele kann eine Best-of-Seven-Serie maximal umfassen?", a: "7" },
  { q: "Eishockey: Wie viele Linienrichter sind zusätzlich zu den Hauptschiedsrichtern auf dem Eis?", a: "2" },

  // 🤾 Handball
  { q: "Handball: Wie viele Kreisspieler darf ein Team gleichzeitig auf dem Spielfeld haben?", a: "1" },
  { q: "Handball: Wie viele Tore erzielte Deutschland im WM-Finale 2007?", a: "29" },
  { q: "Handball: Wie viele Spieler umfasste ein Kader bei internationalen Turnieren vor der WM-Regeländerung 2021?", a: "16" },
  { q: "Handball: Wie lange dauert eine Verlängerung im Handball insgesamt?", a: "10 Minuten" },
  { q: "Handball: Wie viele Schritte darf ein Spieler nach erneutem Prellen machen?", a: "3 Schritte" },

  // 🏸 Badminton
  { q: "Badminton: Wie viele Punkte kann ein Satz maximal erreichen?", a: "30" },
  { q: "Badminton: Wie viele Spieler stehen bei einem Herren-Doppel auf dem Feld?", a: "4" },
  { q: "Badminton: Mit welchem Mindestvorsprung wird ein Satz gewonnen?", a: "2 Punkte (außer bei 30:29)" },
  { q: "Badminton: Wie viele Schläge darf ein Doppelteam maximal ausführen, bevor der Ball zurückgespielt werden muss?", a: "1" },
  { q: "Badminton: Wie viele Gewinnsätze sind im internationalen Wettkampf für den Matchgewinn erforderlich?", a: "2" }
],
400: [
  // ⚽ Fußball
  { q: "Fußball: Wie viele Ballon-d'Or-Auszeichnungen gewann Lionel Messi bis einschließlich 2023?", a: "8" },
  { q: "Fußball: Wie viele UEFA-Champions-League-Titel gewann Real Madrid zwischen 2014 und 2022?", a: "5" },
  { q: "Fußball: Wie viele Tore erzielte Cristiano Ronaldo in der UEFA Champions League?", a: "140" },
  { q: "Fußball: Wie viele Vereine spielen in der Premier League?", a: "20" },
  { q: "Fußball: Wie viele Weltmeistertitel gewann Italien bis einschließlich 2022?", a: "4" },

  // 🏀 Basketball
  { q: "Basketball: Wie viele MVP-Auszeichnungen gewann LeBron James bis einschließlich 2023?", a: "4" },
  { q: "Basketball: Wie viele NBA-Meisterschaften gewannen die Boston Celtics bis einschließlich 2024?", a: "18" },
  { q: "Basketball: Wie viele Punkte erzielte Kareem Abdul-Jabbar in seiner NBA-Karriere?", a: "38387" },
  { q: "Basketball: Wie viele Teams qualifizieren sich pro Conference direkt für die NBA-Playoffs?", a: "6" },
  { q: "Basketball: Wie viele Siege benötigt ein Team mindestens, um eine Best-of-Seven-Serie zu gewinnen?", a: "4" },

  // 🏐 Volleyball
  { q: "Volleyball: Wie viele Spieler dürfen gleichzeitig einen Block bilden?", a: "3" },
  { q: "Volleyball: Wie viele Punkte werden zum Gewinn eines Satzes im Rally-Point-System benötigt?", a: "25 Punkte mit 2 Punkten Vorsprung" },
  { q: "Volleyball: Wie viele Spieler umfasst ein offizieller Kader bei internationalen Turnieren?", a: "14" },
  { q: "Volleyball: Wie viele Rotationspositionen gibt es auf dem Spielfeld?", a: "6" },
  { q: "Volleyball: Wie viele Liberos dürfen in internationalen Wettbewerben auf dem Spielbericht stehen?", a: "2" },

  // 🎾 Tennis
  { q: "Tennis: Wie viele Grand-Slam-Einzeltitel gewann Novak Djokovic bis einschließlich 2023?", a: "24" },
  { q: "Tennis: Mit welchem Mindestvorsprung muss ein Advantage-Satz gewonnen werden?", a: "2 Spiele" },
  { q: "Tennis: Wie viele Punkte sind mindestens nötig, um einen Tiebreak zu gewinnen?", a: "7 Punkte mit 2 Punkten Vorsprung" },
  { q: "Tennis: Wie viele Spieler stehen bei einem Mixed-Doppel auf dem Platz?", a: "4" },
  { q: "Tennis: Wie viele erfolglose Challenges stehen einem Spieler pro Satz bei vielen Turnieren zunächst zur Verfügung?", a: "3" },

  // 🏒 Eishockey
  { q: "Eishockey: Wie viele Stanley-Cup-Titel gewann Wayne Gretzky als Spieler?", a: "4" },
  { q: "Eishockey: Wie viele Spiele kann eine Best-of-Seven-Serie maximal dauern?", a: "7" },
  { q: "Eishockey: Wie viele Feldspieler hat ein Team bei einer 5-gegen-3-Unterzahl auf dem Eis?", a: "3" },
  { q: "Eishockey: Wie lange dauert eine doppelte kleine Strafe?", a: "4 Minuten" },
  { q: "Eishockey: Wie viele Teams spielen in der NHL?", a: "32" },

  // 🤾 Handball
  { q: "Handball: Wie viele Feldspieler dürfen gleichzeitig zusammen mit dem Torwart auf dem Spielfeld stehen?", a: "6" },
  { q: "Handball: Wie viele Tore erzielte Kiril Lazarov bei der Handball-WM 2009 insgesamt?", a: "92" },
  { q: "Handball: Wie lange dauert eine doppelte Verlängerung insgesamt?", a: "20 Minuten" },
  { q: "Handball: Wie viele Spieler umfasst ein WM-Kader seit der Regeländerung 2021?", a: "20" },
  { q: "Handball: Wie viele Schritte darf ein Spieler nach erneutem Prellen machen?", a: "3 Schritte" },

  // 🏸 Badminton
  { q: "Badminton: Wie viele Punkte erzielte Lin Dan im entscheidenden Satz des Olympiafinales 2008?", a: "21" },
  { q: "Badminton: Wie viele Punkte kann ein Satz maximal erreichen?", a: "30" },
  { q: "Badminton: Wie viele Spieler stehen bei einem Damen-Doppel auf dem Feld?", a: "4" },
  { q: "Badminton: Mit welchem Mindestvorsprung wird ein Satz gewonnen?", a: "2 Punkte (außer bei 30:29)" },
  { q: "Badminton: Wie viele Gewinnsätze sind für den Matchgewinn im internationalen Format erforderlich?", a: "2" }
],
500: [
  // ⚽ Fußball
  { q: "Fußball: Welcher Verein gewann die UEFA Champions League 2005 nach einem 0:3-Halbzeitrückstand?", a: "FC Liverpool" },
  { q: "Fußball: Welcher Spieler hält den Rekord für die meisten Einsätze in der UEFA Champions League?", a: "Cristiano Ronaldo" },
  { q: "Fußball: Welches Land gewann die erste FIFA-Weltmeisterschaft 1930?", a: "Uruguay" },
  { q: "Fußball: Welcher Verein wurde erster Deutscher Meister der Bundesliga 1963/64?", a: "1. FC Köln" },
  { q: "Fußball: Welcher Spieler erzielte das sogenannte 'Tor des Jahrhunderts' bei der WM 1986?", a: "Diego Maradona" },

  // 🏀 Basketball
  { q: "Basketball: Welches Team gewann den ersten NBA-Titel (Saison 1946/47)?", a: "Philadelphia Warriors" },
  { q: "Basketball: Welcher Spieler hält den NBA-Rekord für die meisten Karriere-Assists?", a: "John Stockton" },
  { q: "Basketball: Welches Team gewann die NBA Finals 2016 nach einem 1:3-Serienrückstand?", a: "Cleveland Cavaliers" },
  { q: "Basketball: Wer war der erste europäische NBA-MVP?", a: "Dirk Nowitzki" },
  { q: "Basketball: Welcher Spieler erzielte die meisten Punkte in einem einzelnen NBA-Spiel?", a: "Wilt Chamberlain" },

  // 🏐 Volleyball
  { q: "Volleyball: Welches Land gewann die erste Volleyball-Weltmeisterschaft der Männer 1949?", a: "Sowjetunion" },
  { q: "Volleyball: Welches Land gewann das olympische Goldturnier der Männer 2012?", a: "Russland" },
  { q: "Volleyball: Welches Land ist Rekordweltmeister bei den Volleyball-Weltmeisterschaften der Frauen?", a: "Sowjetunion" },
  { q: "Volleyball: Welches Land gewann die Volleyball Nations League der Männer 2021?", a: "Brasilien" },
  { q: "Volleyball: Wie hoch ist das Netz bei den Damen?", a: "2,24 Meter" },

  // 🎾 Tennis
  { q: "Tennis: Wer gewann als erster Spieler alle vier Grand-Slam-Turniere in einem Kalenderjahr?", a: "Don Budge" },
  { q: "Tennis: Wer gewann die meisten French-Open-Einzeltitel?", a: "Rafael Nadal" },
  { q: "Tennis: Welche Spielerin gewann als erste 23 Grand-Slam-Einzeltitel in der Open Era?", a: "Serena Williams" },
  { q: "Tennis: Wer gewann Wimbledon 2001 als Qualifikant?", a: "Goran Ivanišević" },
  { q: "Tennis: Welcher Spieler gewann den längsten Davis-Cup-Einzelpunkt der Geschichte?", a: "Leonardo Mayer" },

  // 🏒 Eishockey
  { q: "Eishockey: Welches Team gewann 1893 den ersten Stanley Cup?", a: "Montreal Hockey Club" },
  { q: "Eishockey: Welcher Spieler hält den NHL-Rekord für die meisten Karrierepunkte?", a: "Wayne Gretzky" },
  { q: "Eishockey: Welches Land gewann die erste Eishockey-Weltmeisterschaft 1930?", a: "Kanada" },
  { q: "Eishockey: Welches Team beendete 2010 mit dem Stanley Cup eine 49-jährige Titeldurststrecke?", a: "Chicago Blackhawks" },
  { q: "Eishockey: Welcher Torwart hält den NHL-Rekord für die meisten Siege?", a: "Martin Brodeur" },

  // 🤾 Handball
  { q: "Handball: Welches Land gewann die erste Handball-Weltmeisterschaft der Männer 1938?", a: "Deutschland" },
  { q: "Handball: Welcher Spieler hält den Rekord für die meisten Tore bei einer einzelnen Handball-Weltmeisterschaft?", a: "Kiril Lazarov" },
  { q: "Handball: Welches Land gewann das olympische Handballturnier der Männer 2008?", a: "Frankreich" },
  { q: "Handball: Welcher Verein gewann die meisten EHF-Champions-League-Titel?", a: "FC Barcelona" },
  { q: "Handball: Welches Land gewann überraschend die Handball-Europameisterschaft 2016?", a: "Deutschland" },

  // 🏸 Badminton
  { q: "Badminton: Welches Land gewann den Thomas Cup am häufigsten?", a: "Indonesien" },
  { q: "Badminton: Welcher Spieler gewann als erster alle neun Super-Series-Turniere?", a: "Lee Chong Wei" },
  { q: "Badminton: Welches Land gewann Olympia-Gold im Herreneinzel 2021?", a: "Dänemark" },
  { q: "Badminton: Welcher Spieler gewann als erster den Karriere-Super-Grand-Slam (Olympia, WM, All England, Thomas Cup, Sudirman Cup und alle BWF-Superseries-Titel)?", a: "Lin Dan" },
  { q: "Badminton: Welcher Spieler gilt als einer der erfolgreichsten Badmintonspieler aller Zeiten und gewann fünf All-England-Titel in Folge?", a: "Rudy Hartono" },

  // 🏃 Leichtathletik
  { q: "Leichtathletik: Wie lautet der Weltrekord über 100 Meter der Männer von Usain Bolt?", a: "9,58 Sekunden" }
]
  },

  wirtschaft: {
    100: [
  { q: "Was bedeutet BIP?", a: "Bruttoinlandsprodukt" },
  { q: "Welches Unternehmen stellt das iPhone her?", a: "Apple" },
  { q: "Welches Unternehmen ist für die Marke 'PlayStation' verantwortlich?", a: "Sony" },
  { q: "Was bedeutet Export?", a: "Ausfuhr von Waren ins Ausland" },
  { q: "Welches Unternehmen ist der größte Onlinehändler der Welt?", a: "Amazon" },

  { q: "Was bedeutet Inflation?", a: "Allgemeine Preissteigerung" },
  { q: "Welches Unternehmen produziert die Automarke 'Golf'?", a: "Volkswagen" },
  { q: "Was bedeutet Umsatz?", a: "Gesamter Verkaufserlös eines Unternehmens" },
  { q: "Welches Unternehmen ist für die Marke 'Coca-Cola' verantwortlich?", a: "The Coca-Cola Company" },
  { q: "Was bedeutet Gewinn?", a: "Umsatz minus Kosten" },

  { q: "Welches Unternehmen stellt die Marke 'Galaxy' her?", a: "Samsung" },
  { q: "Was bedeutet Import?", a: "Einfuhr von Waren aus dem Ausland" },
  { q: "Welches Unternehmen ist der größte Sportartikelhersteller Europas?", a: "Adidas" },
  { q: "Was bedeutet Nachfrage?", a: "Menge an Gütern, die gekauft werden sollen" },
  { q: "Welches Unternehmen ist für die Marke 'Nivea' bekannt?", a: "Beiersdorf" },

  { q: "Was bedeutet Angebot?", a: "Menge an Gütern, die verkauft werden sollen" },
  { q: "Welches Unternehmen stellt die Automarke 'Tesla' her?", a: "Tesla" },
  { q: "Was bedeutet Kredit?", a: "Geliehenes Geld, das zurückgezahlt werden muss" },
  { q: "Welches Unternehmen ist der größte Lebensmittel- und Getränkekonzern der Welt?", a: "Nestlé" },
  { q: "Was bedeutet Börse?", a: "Handelsplatz für Aktien und Wertpapiere" },

  { q: "Welches Unternehmen ist für die Marke 'IKEA' verantwortlich?", a: "Inter IKEA Group" },
  { q: "Was bedeutet Kapital?", a: "Finanzielle Mittel eines Unternehmens" },
  { q: "Welches Unternehmen stellt die Marke 'Red Bull' her?", a: "Red Bull GmbH" },
  { q: "Was bedeutet Rohstoff?", a: "Grundmaterial zur Herstellung von Produkten" },
  { q: "Welches Unternehmen ist der größte Softwarehersteller der Welt?", a: "Microsoft" }
    ],
    200: [
{ q: "Welches Unternehmen ist der größte Autohersteller der Welt nach Verkaufszahlen?", a: "Toyota" },
{ q: "Welches Unternehmen gehört die Marke 'Instagram'?", a: "Meta" },
{ q: "Welches Unternehmen ist der größte Lebensmittelkonzern der Welt?", a: "Nestlé" },
{ q: "Welches Unternehmen produziert die Marke 'Mercedes-Benz'?", a: "Daimler" },
{ q: "Welches Unternehmen ist Marktführer im Bereich Streaming?", a: "Netflix" },

{ q: "Welches Unternehmen stellt die Marke 'Puma' her?", a: "Puma SE" },
{ q: "Welches Unternehmen ist der größte Sportartikelhersteller der Welt?", a: "Nike" },
{ q: "Welches Unternehmen gehört die Marke 'YouTube'?", a: "Google" },
{ q: "Welches Unternehmen ist der größte Möbelhändler der Welt?", a: "IKEA" },
{ q: "Welches Unternehmen produziert die Marke 'Oreo'?", a: "Mondelēz International" },

{ q: "Welches Unternehmen ist der größte Smartphone-Hersteller weltweit?", a: "Samsung" },
{ q: "Welches Unternehmen produziert die Marke 'Ferrero Rocher'?", a: "Ferrero" },
{ q: "Welches Unternehmen ist der größte Onlinehändler Europas?", a: "Amazon" },
{ q: "Welches Unternehmen stellt die Marke 'BMW' her?", a: "BMW Group" },
{ q: "Welches Unternehmen ist der größte Bierhersteller der Welt?", a: "AB InBev" },

{ q: "Welches Unternehmen produziert die Marke 'Nescafé'?", a: "Nestlé" },
{ q: "Welches Unternehmen ist der größte Softwarehersteller der Welt?", a: "Microsoft" },
{ q: "Welches Unternehmen gehört die Marke 'WhatsApp'?", a: "Meta" },
{ q: "Welches Unternehmen produziert die Marke 'Sprite'?", a: "The Coca-Cola Company" },
{ q: "Welches Unternehmen ist der größte Modehändler der Welt?", a: "Inditex (Zara)" },

{ q: "Welches Unternehmen stellt die Marke 'Audi' her?", a: "Volkswagen" },
{ q: "Welches Unternehmen ist der größte Energiekonzern Deutschlands?", a: "E.ON" },
{ q: "Welches Unternehmen produziert die Marke 'Pringles'?", a: "Kellogg's" },
{ q: "Welches Unternehmen ist der größte Handelskonzern Deutschlands?", a: "Schwarz-Gruppe (Lidl, Kaufland)" },
{ q: "Welches Unternehmen gehört die Marke 'PayPal'?", a: "PayPal Holdings" }
    ],
    300: [
{ q: "Welches Unternehmen ist der größte Autohersteller Europas?", a: "Volkswagen" },
{ q: "Welches Unternehmen besitzt die Marke 'Lexus'?", a: "Toyota" },
{ q: "Welches Unternehmen ist der größte Chiphersteller der Welt?", a: "Intel" },
{ q: "Welches Unternehmen gehört die Marke 'WhatsApp'?", a: "Meta" },
{ q: "Welches Unternehmen ist der größte Getränkehersteller der Welt?", a: "The Coca-Cola Company" },

{ q: "Welches Unternehmen produziert die Marke 'Ben & Jerry’s'?", a: "Unilever" },
{ q: "Welches Unternehmen ist der größte Modekonzern der Welt?", a: "Inditex (Zara)" },
{ q: "Welches Unternehmen stellt die Marke 'PlayStation' her?", a: "Sony" },
{ q: "Welches Unternehmen ist der größte Pharmakonzern Deutschlands?", a: "Bayer" },
{ q: "Welches Unternehmen produziert die Marke 'KitKat'?", a: "Nestlé" },

{ q: "Welches Unternehmen ist der größte Cloud-Anbieter der Welt?", a: "Amazon (AWS)" },
{ q: "Welches Unternehmen stellt die Marke 'Dyson' her?", a: "Dyson Ltd." },
{ q: "Welches Unternehmen ist der größte Handelskonzern Deutschlands?", a: "Schwarz-Gruppe (Lidl, Kaufland)" },
{ q: "Welches Unternehmen produziert die Marke 'Corona' Bier?", a: "AB InBev" },
{ q: "Welches Unternehmen ist der größte Streaminganbieter für Musik?", a: "Spotify" },

{ q: "Welches Unternehmen stellt die Marke 'H&M' her?", a: "H&M Group" },
{ q: "Welches Unternehmen ist der größte Smartphone-Hersteller Europas?", a: "Samsung" },
{ q: "Welches Unternehmen produziert die Marke 'Milka'?", a: "Mondelēz International" },
{ q: "Welches Unternehmen ist der größte Flugzeughersteller der Welt?", a: "Airbus" },
{ q: "Welches Unternehmen gehört die Marke 'LinkedIn'?", a: "Microsoft" },

{ q: "Welches Unternehmen ist der größte Kaffeehausbetreiber der Welt?", a: "Starbucks" },
{ q: "Welches Unternehmen produziert die Marke 'Nutella'?", a: "Ferrero" },
{ q: "Welches Unternehmen ist der größte Luxusgüterkonzern der Welt?", a: "LVMH" },
{ q: "Welches Unternehmen stellt die Marke 'TikTok' bereit?", a: "ByteDance" },
{ q: "Welches Unternehmen ist der größte Sportartikelhersteller Deutschlands?", a: "Adidas" }
    ],
    400: [
      { q: "Wie nennt man einen Markt mit fallenden Kursen?", a: "Bärenmarkt" },
{ q: "Welches Unternehmen übernahm 2017 die Marke 'Whole Foods'?", a: "Amazon" },
{ q: "Welches Unternehmen ist der größte Luxusgüterkonzern der Welt?", a: "LVMH" },
{ q: "Welches Unternehmen kaufte 2016 die Marke 'LinkedIn'?", a: "Microsoft" },
{ q: "Welches Unternehmen ist der größte Halbleiter-Auftragsfertiger der Welt?", a: "TSMC" },
{ q: "Welches Unternehmen gehört die Marke 'Marvel'?", a: "Disney" },

{ q: "Welches Unternehmen übernahm 2022 die Spielefirma 'Activision Blizzard'?", a: "Microsoft" },
{ q: "Welches Unternehmen ist der größte Automobilhersteller der USA?", a: "General Motors" },
{ q: "Welches Unternehmen besitzt die Marke 'Louis Vuitton'?", a: "LVMH" },
{ q: "Welches Unternehmen ist der größte Online-Modehändler Europas?", a: "Zalando" },
{ q: "Welches Unternehmen kaufte 2014 die Marke 'Beats'?", a: "Apple" },

{ q: "Welches Unternehmen ist der größte Energiekonzern der Welt?", a: "Saudi Aramco" },
{ q: "Welches Unternehmen produziert die Marke 'Budweiser'?", a: "AB InBev" },
{ q: "Welches Unternehmen ist der größte Chemiekonzern Deutschlands?", a: "BASF" },
{ q: "Welches Unternehmen übernahm 2018 die Marke 'Time Warner'?", a: "AT&T" },
{ q: "Welches Unternehmen ist der größte Sportartikelhersteller Asiens?", a: "Li-Ning" },

{ q: "Welches Unternehmen ist der größte Flugzeughersteller der USA?", a: "Boeing" },
{ q: "Welches Unternehmen kaufte 2006 die Marke 'YouTube'?", a: "Google" },
{ q: "Welches Unternehmen ist der größte Handelskonzern der Welt?", a: "Walmart" },
{ q: "Welches Unternehmen produziert die Marke 'Heinz'?", a: "Kraft Heinz Company" },
{ q: "Welches Unternehmen ist der größte Telekommunikationsanbieter Europas?", a: "Deutsche Telekom" },

{ q: "Welches Unternehmen besitzt die Marke 'TikTok'?", a: "ByteDance" },
{ q: "Welches Unternehmen ist der größte Automobilzulieferer der Welt?", a: "Bosch" },
{ q: "Welches Unternehmen kaufte 2020 die Marke 'Fitbit'?", a: "Google" },
{ q: "Welches Unternehmen ist der größte Kaffeeproduzent der Welt?", a: "Nestlé" },
{ q: "Welches Unternehmen ist der größte Airline-Konzern Europas?", a: "Lufthansa Group" }
    ],
    500: [
      { q: "Was bedeutet Rezession?", a: "Mindestens zwei Quartale negatives Wachstum" },
{ q: "Welches Unternehmen ist weltweit der größte Vermögensverwalter?", a: "BlackRock" },
{ q: "Welches Unternehmen übernahm 2017 den Industriekonzern 'Monsanto'?", a: "Bayer" },
{ q: "Welches Unternehmen ist der größte Ölproduzent der Welt?", a: "Saudi Aramco" },
{ q: "Welches Unternehmen kaufte 2022 die Spielefirma 'Bungie'?", a: "Sony" },
{ q: "Welches Unternehmen ist der größte Halbleiterhersteller nach Umsatz?", a: "Samsung" },

{ q: "Welches Unternehmen besitzt die Luxusmarken Dior, Fendi und TAG Heuer?", a: "LVMH" },
{ q: "Welches Unternehmen ist der größte Logistikkonzern der Welt?", a: "UPS" },
{ q: "Welches Unternehmen übernahm 2019 die Firma 'Fitbit'?", a: "Google" },
{ q: "Welches Unternehmen ist der größte Stahlproduzent der Welt?", a: "ArcelorMittal" },
{ q: "Welches Unternehmen ist der größte Telekommunikationsanbieter der Welt?", a: "China Mobile" },

{ q: "Welches Unternehmen ist der größte Lebensmittelhändler der USA?", a: "Walmart" },
{ q: "Welches Unternehmen kaufte 2018 die Plattform 'GitHub'?", a: "Microsoft" },
{ q: "Welches Unternehmen ist der größte Flugzeughersteller der Welt?", a: "Airbus" },
{ q: "Welches Unternehmen besitzt die Marken Gucci, Balenciaga und Yves Saint Laurent?", a: "Kering" },
{ q: "Welches Unternehmen ist der größte Energiekonzern Europas?", a: "Shell" },

{ q: "Welches Unternehmen übernahm 2020 die Firma 'ARM Holdings' (geplant, später gescheitert)?", a: "Nvidia" },
{ q: "Welches Unternehmen ist der größte Kaffeeproduzent der Welt?", a: "Nestlé" },
{ q: "Welches Unternehmen ist der größte Autozulieferer der Welt?", a: "Bosch" },
{ q: "Welches Unternehmen besitzt die Marke 'TikTok'?", a: "ByteDance" },
{ q: "Welches Unternehmen ist der größte Airline-Konzern der Welt?", a: "American Airlines Group" },

{ q: "Welches Unternehmen ist der größte Chemiekonzern der Welt?", a: "BASF" },
{ q: "Welches Unternehmen kaufte 2017 die Firma 'Mobileye'?", a: "Intel" },
{ q: "Welches Unternehmen ist der größte Getränkehersteller der Welt?", a: "The Coca-Cola Company" },
{ q: "Welches Unternehmen ist der größte Modekonzern Asiens?", a: "Fast Retailing (Uniqlo)" },
{ q: "Welches Unternehmen ist der größte Streaminganbieter für Filme weltweit?", a: "Netflix" }
    ]
  },

tiere: {
  100: [
    { q: "Welches Tier ist das größte an Land?", a: "Elefant" },
    { q: "Welches Tier ist das schnellste an Land?", a: "Gepard" },
    { q: "Welches Tier ist das größte im Meer?", a: "Blauwal" },
    { q: "Welches Tier hat einen langen Hals?", a: "Giraffe" },
    { q: "Welches Tier bellt?", a: "Hund" },
    { q: "Welches Tier miaut?", a: "Katze" },
    { q: "Welches Tier legt Eier?", a: "Huhn" },
    { q: "Welches Tier hat einen Panzer?", a: "Schildkröte" },
    { q: "Welches Tier hat Streifen?", a: "Zebra" },
    { q: "Welches Tier hat Flossen?", a: "Fisch" },
    { q: "Welches Tier hat einen Rüssel?", a: "Elefant" },
    { q: "Welches Tier springt weit?", a: "Känguru" },
    { q: "Welches Tier frisst Bambus?", a: "Panda" },
    { q: "Welches Tier ist der König der Tiere?", a: "Löwe" },
    { q: "Welches Tier hat eine Mähne?", a: "Pferd" },
    { q: "Welches Tier summt?", a: "Biene" },
    { q: "Welches Tier lebt im Wald und frisst Honig?", a: "Bär" },
    { q: "Welches Tier kann nicht fliegen, obwohl es Flügel hat?", a: "Pinguin" },
    { q: "Welches Tier hat Stacheln?", a: "Igel" },
    { q: "Welches Tier ist sehr klein und kann springen?", a: "Frosch" },
    { q: "Welches Tier hat Hörner und lebt auf der Weide?", a: "Kuh" },
    { q: "Welches Tier ist ein Haustier und lebt im Käfig?", a: "Hamster" },
    { q: "Welches Tier hat Schuppen?", a: "Fisch" },
    { q: "Welches Tier lebt im Dschungel und klettert gut?", a: "Affe" },
    { q: "Welches Tier hat große Ohren und lebt in Afrika?", a: "Elefant" }
  ],

  200: [
    { q: "Welches Tier ist das größte Raubtier an Land?", a: "Eisbär" },
    { q: "Welches Tier hat die stärkste Bisskraft?", a: "Salzwasserkrokodil" },
    { q: "Welches Tier ist das schnellste im Wasser?", a: "Schwarzer Marlin" },
    { q: "Welches Tier lebt am längsten?", a: "Grönlandwal" },
    { q: "Welches Tier hat die größten Augen?", a: "Riesenkalmar" },
    { q: "Welches Tier ist das lauteste?", a: "Pottwal" },
    { q: "Welches Tier kann rückwärts fliegen?", a: "Kolibri" },
    { q: "Welches Tier hat die längste Zunge relativ zum Körper?", a: "Chamäleon" },
    { q: "Welches Tier hat die meisten Beine?", a: "Tausendfüßer" },
    { q: "Welches Tier hat die stärkste Sprungkraft?", a: "Känguru" },
    { q: "Welches Tier hat die längste Wanderung?", a: "Grauwal" },
    { q: "Welches Tier hat die größte Spannweite?", a: "Wanderalbatros" },
    { q: "Welches Tier ist das giftigste der Welt?", a: "Würfelqualle" },
    { q: "Welches Tier hat die längsten Zähne?", a: "Narwal" },
    { q: "Welches Tier hat die schnellste Schlagbewegung?", a: "Fangschreckenkrebs" },
    { q: "Welches Tier hat die dickste Haut?", a: "Elefant" },
    { q: "Welches Tier ist der größte Vogel?", a: "Strauß" },
    { q: "Welches Tier ist der kleinste Vogel?", a: "Bienenelfe" },
    { q: "Welches Tier hat die längste Schwangerschaft?", a: "Elefant" },
    { q: "Welches Tier hat die meisten Zähne?", a: "Schnecke" },
    { q: "Welches Tier ist der größte Frosch?", a: "Goliathfrosch" },
    { q: "Welches Tier ist der größte Hai?", a: "Walhai" },
    { q: "Welches Tier hat die stärkste Stimme?", a: "Brüllaffe" },
    { q: "Welches Tier hat die längste Mähne?", a: "Löwe" },
    { q: "Welches Tier hat die größte Population unter Wildtieren?", a: "Rote Waldameise" }
  ],

  300: [
    { q: "Welches Tier hat die höchste Körpertemperatur?", a: "Huhn" },
    { q: "Welches Tier hat die längste Halswirbelsäule?", a: "Giraffe" },
    { q: "Welches Tier hat die größte Lunge?", a: "Blauwal" },
    { q: "Welches Tier hat die meisten Gehirnzellen?", a: "Pottwal" },
    { q: "Welches Tier hat die stärkste Hornstruktur?", a: "Nashorn" },
    { q: "Welches Tier riecht am besten?", a: "Hai" },
    { q: "Welches Tier hat die schnellste Herzfrequenz?", a: "Kolibri" },
    { q: "Welches Tier hat die längste Schwanzlänge?", a: "Giraffe" },
    { q: "Welches Tier hat die stärkste Flügelmuskulatur?", a: "Adler" },
    { q: "Welches Tier legt die größten Eier?", a: "Strauß" },
    { q: "Welches Tier wandert am weitesten unter Insekten?", a: "Monarchfalter" },
    { q: "Welches Tier hat die beste Orientierung im Dunkeln?", a: "Fledermaus" },
    { q: "Welches Tier lebt am längsten unter Vögeln?", a: "Albatros" },
    { q: "Welches Tier hat die stärkste Kiefermuskulatur?", a: "Hyäne" },
    { q: "Welches Tier hat die längste Zunge aller Säugetiere?", a: "Ameisenbär" },
    { q: "Welches Tier hört am weitesten?", a: "Elefant" },
    { q: "Welches Tier hat die stärkste Hautpanzerung?", a: "Krokodil" },
    { q: "Welches Tier hat die größte Flossenfläche?", a: "Walhai" },
    { q: "Welches Tier hat die stärkste Knochenstruktur?", a: "Nilpferd" },
    { q: "Welches Tier lebt am längsten unter Reptilien?", a: "Galápagos-Schildkröte" },
    { q: "Welches Tier hat die stärkste Giftwirkung unter Spinnen?", a: "Sydney-Trichternetzspinne" },
    { q: "Welches Tier hat die längste Migration unter Vögeln?", a: "Küstenseeschwalbe" },
    { q: "Welches Tier hat die stärkste Panzerung unter Insekten?", a: "Riesenkäfer" },
    { q: "Welches Tier hat die komplexeste Sozialstruktur unter Vögeln?", a: "Rabe" },
    { q: "Welches Tier hat die größte Gehirnmasse relativ zum Körper?", a: "Delfin" }
  ],

  400: [
    { q: "Welches Tier hat die komplexeste Lautsprache?", a: "Delfin" },
    { q: "Welches Tier hat die stärkste soziale Bindung?", a: "Elefant" },
    { q: "Welches Tier hat die längste dokumentierte Jagdzeit?", a: "Orca" },
    { q: "Welches Tier hat die höchste Sprunghöhe aller Säugetiere?", a: "Puma" },
    { q: "Welches Tier hat die stärkste Tarnung?", a: "Blattfisch" },
    { q: "Welches Tier hat die schnellste Drehbewegung?", a: "Fangschreckenkrebs" },
    { q: "Welches Tier hat die größte Gehirnkomplexität unter Vögeln?", a: "Rabe" },
    { q: "Welches Tier hat die längste Paarungszeit?", a: "Anglerfisch" },
    { q: "Welches Tier hat die stärkste Ausdauerleistung?", a: "Wolf" },
    { q: "Welches Tier hat die höchste Kälteresistenz?", a: "Kaiserpinguin" },
    { q: "Welches Tier hat die höchste Hitzeresistenz?", a: "Dromedar" },
    { q: "Welches Tier schläft am längsten?", a: "Koala" },
    { q: "Welches Tier hat die stärkste Muskelkraft relativ zum Körper?", a: "Mistkäfer" },
    { q: "Welches Tier hat die komplexeste Jagdstrategie?", a: "Orca" },
    { q: "Welches Tier hat die größte Flügelkraft?", a: "Harpyie" },
    { q: "Welches Tier hat die stärkste Verteidigung?", a: "Honigdachs" },
    { q: "Welches Tier lebt am längsten unter Fischen?", a: "Grönlandhai" },
    { q: "Welches Tier hat die stärkste Giftwirkung unter Amphibien?", a: "Pfeilgiftfrosch" },
    { q: "Welches Tier hat die größte Gehirnmasse unter Landtieren?", a: "Elefant" },
    { q: "Welches Tier hat die komplexeste Sozialstruktur?", a: "Schimpanse" },
    { q: "Welches Tier nutzt Magnetfelder am stärksten?", a: "Meeresschildkröte" },
    { q: "Welches Tier wandert am weitesten unter Vögeln?", a: "Küstenseeschwalbe" },
    { q: "Welches Tier hat die stärkste Panzerung unter Wirbeltieren?", a: "Krokodil" },
    { q: "Welches Tier hat die höchste Intelligenz nach Primaten?", a: "Delfin" },
    { q: "Welches Tier hat die stärkste Orientierung über Infraschall?", a: "Elefant" }
  ],

  500: [
    { q: "Welches Tier hat die höchste neuronale Verarbeitungsgeschwindigkeit?", a: "Fangschreckenkrebs" },
    { q: "Welches Tier nutzt Werkzeuge am komplexesten außer Primaten?", a: "Krähen" },
    { q: "Welches Tier hat die stärkste chemische Verteidigung?", a: "Bombardierkäfer" },
    { q: "Welches Tier hat die höchste Jagderfolgsquote?", a: "Libelle" },
    { q: "Welches Tier hat die komplexeste Echoortung?", a: "Fledermaus" },
    { q: "Welches Tier hat die stärkste neuronale Vernetzung relativ zum Körper?", a: "Oktopus" },
    { q: "Welches Tier hat die längste Paarungsbindung?", a: "Albatros" },
    { q: "Welches Tier regeneriert sich am stärksten?", a: "Axolotl" },
    { q: "Welches Tier navigiert am komplexesten über Magnetfelder?", a: "Meeresschildkröte" },
    { q: "Welches Tier hat die stärkste Sprungkraft relativ zum Gewicht?", a: "Floh" },
    { q: "Welches Tier hat die stärkste Giftwirkung aller Arten?", a: "Würfelqualle" },
    { q: "Welches Tier jagt am komplexesten im Team?", a: "Orca" },
    { q: "Welches Tier lebt am längsten unter Wirbeltieren?", a: "Grönlandhai" },
    { q: "Welches Tier hat die stärkste Knochenstruktur?", a: "Nilpferd" },
    { q: "Welches Tier hat die komplexeste Lautsprache unter Nicht-Säugetieren?", a: "Papagei" },
    { q: "Welches Tier hat die höchste neuronale Dichte im visuellen System?", a: "Adler" },
    { q: "Welches Tier hat die stärkste Muskelkraft absolut?", a: "Blauwal" },
    { q: "Welches Tier hat die komplexeste Sozialstruktur unter Insekten?", a: "Ameisen" },
    { q: "Welches Tier ist das schnellste Wirbeltier?", a: "Wanderfalke" },
    { q: "Welches Tier hat die stärkste Panzerung unter Wirbeltieren?", a: "Krokodil" },
    { q: "Welches Tier hat die komplexeste Gehirnstruktur unter Meeressäugern?", a: "Delfin" },
    { q: "Welches Tier hat die stärkste Ausdauerleistung?", a: "Wolf" },
    { q: "Welches Tier tarnt sich am komplexesten?", a: "Oktopus" },
    { q: "Welches Tier hat die stärkste Bisskraft aller lebenden Arten?", a: "Salzwasserkrokodil" },
    { q: "Welches Tier hat die komplexeste Jagdkoordination?", a: "Orca" }
  ]
},

geografie: {
  100: [
    { q: "Was ist die Hauptstadt von Frankreich?", a: "Paris" },
    { q: "Was ist die Hauptstadt von Deutschland?", a: "Berlin" },
    { q: "Was ist die Hauptstadt von Italien?", a: "Rom" },
    { q: "Was ist die Hauptstadt von Spanien?", a: "Madrid" },
    { q: "Was ist die Hauptstadt von Österreich?", a: "Wien" },
    { q: "Welches Land ist das größte in Europa?", a: "Russland" },
    { q: "Welches Land ist das kleinste der Welt?", a: "Vatikanstadt" },
    { q: "Welcher Kontinent ist der größte?", a: "Asien" },
    { q: "Welcher Kontinent ist der kleinste?", a: "Australien" },
    { q: "Welches Meer liegt zwischen Afrika und Europa?", a: "Mittelmeer" },
    { q: "Welcher Fluss fließt durch London?", a: "Themse" },
    { q: "Welcher Fluss fließt durch Paris?", a: "Seine" },
    { q: "Welcher Fluss fließt durch Rom?", a: "Tiber" },
    { q: "Welches Land hat die Flagge mit rotem Kreis?", a: "Japan" },
    { q: "Welches Land ist für Pizza bekannt?", a: "Italien" },
    { q: "Welches Land ist für Pyramiden bekannt?", a: "Ägypten" },
    { q: "Welches Land ist für Kängurus bekannt?", a: "Australien" },
    { q: "Welches Land ist für den Eiffelturm bekannt?", a: "Frankreich" },
    { q: "Welches Land ist für den Big Ben bekannt?", a: "Großbritannien" },
    { q: "Welches Land ist für den Taj Mahal bekannt?", a: "Indien" },
    { q: "Welches Land ist für die Freiheitsstatue bekannt?", a: "USA" },
    { q: "Welches Land ist für den Machu Picchu bekannt?", a: "Peru" },
    { q: "Welches Land ist für den Zuckerhut bekannt?", a: "Brasilien" },
    { q: "Welches Land ist für den Mount Fuji bekannt?", a: "Japan" },
    { q: "Welches Land ist für den Burj Khalifa bekannt?", a: "Vereinigte Arabische Emirate" }
  ],

  200: [
    { q: "Welches Land hat die meisten Einwohner?", a: "China" },
    { q: "Welches Land hat die zweitmeisten Einwohner?", a: "Indien" },
    { q: "Welches Land hat die drittmeisten Einwohner?", a: "USA" },
    { q: "Welches Land hat die größte Fläche?", a: "Russland" },
    { q: "Welches Land hat die zweitgrößte Fläche?", a: "Kanada" },
    { q: "Welches Land hat die drittgrößte Fläche?", a: "China" },
    { q: "Welches Land hat die meisten Nachbarländer?", a: "China" },
    { q: "Welches Land hat die längste Küste?", a: "Kanada" },
    { q: "Welches Land hat die meisten Inseln?", a: "Schweden" },
    { q: "Welches Land hat die meisten Vulkane?", a: "Indonesien" },
    { q: "Welches Land hat die meisten Sprachen?", a: "Papua-Neuguinea" },
    { q: "Welches Land hat die höchste Bevölkerungsdichte?", a: "Monaco" },
    { q: "Welches Land hat die niedrigste Bevölkerungsdichte?", a: "Mongolei" },
    { q: "Welches Land hat die meisten Flughäfen?", a: "USA" },
    { q: "Welches Land hat die meisten UNESCO-Welterbestätten?", a: "Italien" },
    { q: "Welches Land hat die meisten Zeitzonen?", a: "Frankreich" },
    { q: "Welches Land hat die meisten Berge über 8000 Meter?", a: "Nepal" },
    { q: "Welches Land hat die meisten Seen?", a: "Kanada" },
    { q: "Welches Land hat die meisten Wüstenflächen?", a: "Australien" },
    { q: "Welches Land hat die meisten Städte über 1 Million Einwohner?", a: "China" },
    { q: "Welches Land hat die größte Wüste?", a: "Antarktis" },
    { q: "Welches Land hat die größte tropische Regenwaldfläche?", a: "Brasilien" },
    { q: "Welches Land hat die meisten Flüsse?", a: "China" },
    { q: "Welches Land hat die meisten Gebirge?", a: "China" },
    { q: "Welches Land hat die meisten Nationalparks?", a: "Australien" }
  ],

  300: [
    { q: "Welches ist der längste Fluss der Welt?", a: "Nil" },
    { q: "Welches ist der zweitlängste Fluss der Welt?", a: "Amazonas" },
    { q: "Welches ist der tiefste Ozean?", a: "Pazifik" },
    { q: "Welches ist der größte See der Welt?", a: "Kaspisches Meer" },
    { q: "Welches ist der höchste aktive Vulkan der Welt?", a: "Ojos del Salado" },
    { q: "Welches ist die größte Insel der Welt?", a: "Grönland" },
    { q: "Welches ist die größte Halbinsel der Welt?", a: "Arabische Halbinsel" },
    { q: "Welches ist die größte Bucht der Welt?", a: "Bucht von Bengalen" },
    { q: "Welches ist die größte Wüste der Welt?", a: "Antarktis" },
    { q: "Welches ist die größte Hochebene der Welt?", a: "Tibet" },
    { q: "Welches ist die tiefste Stelle der Erde?", a: "Marianengraben" },
    { q: "Welches ist der höchste Wasserfall der Welt?", a: "Angel Falls" },
    { q: "Welches ist der größte Regenwald der Welt?", a: "Amazonas" },
    { q: "Welches ist die größte Stadt der Welt nach Einwohnern?", a: "Tokio" },
    { q: "Welches ist die größte Stadt der Welt nach Fläche?", a: "New York" },
    { q: "Welches ist die kälteste Hauptstadt der Welt?", a: "Ulaanbaatar" },
    { q: "Welches ist die heißeste Hauptstadt der Welt?", a: "Kuwait-Stadt" },
    { q: "Welches ist die höchstgelegene Hauptstadt der Welt?", a: "La Paz" },
    { q: "Welches ist die am niedrigsten gelegene Hauptstadt der Welt?", a: "Baku" },
    { q: "Welches ist der breiteste Fluss der Welt?", a: "Amazonas" },
    { q: "Welches ist der salzigste See der Welt?", a: "Totes Meer" },
    { q: "Welches ist der größte Fjord der Welt?", a: "Scoresby Sund" },
    { q: "Welches ist die größte Vulkaninsel der Welt?", a: "Island" },
    { q: "Welches ist die größte Steppe der Welt?", a: "Eurasische Steppe" },
    { q: "Welches ist die größte Gebirgskette der Welt?", a: "Anden" }
  ],

  400: [
    { q: "Welches Land hat die höchste durchschnittliche Höhe?", a: "Nepal" },
    { q: "Welches Land hat die niedrigste durchschnittliche Höhe?", a: "Niederlande" },
    { q: "Welches Land hat die meisten aktiven Vulkane?", a: "Indonesien" },
    { q: "Welches Land hat die meisten Erdbeben pro Jahr?", a: "Japan" },
    { q: "Welches Land hat die höchste Lebenserwartung?", a: "Japan" },
    { q: "Welches Land hat die niedrigste Lebenserwartung?", a: "Tschad" },
    { q: "Welches Land hat die höchste Alphabetisierungsrate?", a: "Finnland" },
    { q: "Welches Land hat die niedrigste Alphabetisierungsrate?", a: "Niger" },
    { q: "Welches Land hat die höchste Bevölkerungsdichte?", a: "Monaco" },
    { q: "Welches Land hat die niedrigste Bevölkerungsdichte?", a: "Mongolei" },
    { q: "Welches Land hat die meisten UNESCO-Welterbestätten?", a: "Italien" },
    { q: "Welches Land hat die meisten Flughäfen?", a: "USA" },
    { q: "Welches Land hat die meisten Zeitzonen?", a: "Frankreich" },
    { q: "Welches Land hat die meisten Inseln?", a: "Schweden" },
    { q: "Welches Land hat die meisten Städte über 10 Millionen Einwohner?", a: "China" },
    { q: "Welches Land hat die höchste Geburtenrate?", a: "Niger" },
    { q: "Welches Land hat die niedrigste Geburtenrate?", a: "Südkorea" },
    { q: "Welches Land hat die höchste Arbeitslosenquote?", a: "Südafrika" },
    { q: "Welches Land hat die niedrigste Arbeitslosenquote?", a: "Katar" },
    { q: "Welches Land hat die meisten Binnenstaaten als Nachbarn?", a: "China" },
    { q: "Welches Land hat die meisten Wüsten?", a: "Australien" },
    { q: "Welches Land hat die meisten Gebirge?", a: "China" },
    { q: "Welches Land hat die meisten Flüsse?", a: "China" },
    { q: "Welches Land hat die meisten Nationalparks?", a: "Australien" },
    { q: "Welches Land hat die meisten Klimazonen?", a: "USA" }
  ],

  500: [
    { q: "Wie heißt der höchste Berg der Welt?", a: "Mount Everest" },
    { q: "Wie heißt der zweithöchste Berg der Welt?", a: "K2" },
    { q: "Wie heißt der dritthöchste Berg der Welt?", a: "Kangchendzönga" },
    { q: "Wie heißt der tiefste Punkt der Erde?", a: "Challenger-Tief" },
    { q: "Wie heißt der höchste aktive Vulkan der Erde?", a: "Ojos del Salado" },
    { q: "Wie heißt der größte Gletscher der Erde?", a: "Lambert-Gletscher" },
    { q: "Wie heißt der größte Canyon der Erde?", a: "Grand Canyon" },
    { q: "Wie heißt der größte Wasserfall der Erde?", a: "Angel Falls" },
    { q: "Wie heißt der größte Ozean der Erde?", a: "Pazifik" },
    { q: "Wie heißt der tiefste See der Erde?", a: "Baikalsee" },
    { q: "Wie heißt die größte Wüste der Erde?", a: "Antarktis" },
    { q: "Wie heißt die größte Halbinsel der Erde?", a: "Arabische Halbinsel" },
    { q: "Wie heißt die größte Insel der Erde?", a: "Grönland" },
    { q: "Wie heißt die größte Bucht der Erde?", a: "Bucht von Bengalen" },
    { q: "Wie heißt die größte Hochebene der Erde?", a: "Tibet" },
    { q: "Wie heißt die größte Gebirgskette der Erde?", a: "Anden" },
    { q: "Wie heißt die größte Vulkaninsel der Erde?", a: "Island" },
    { q: "Wie heißt die größte Steppe der Erde?", a: "Eurasische Steppe" },
    { q: "Wie heißt die größte Lagune der Erde?", a: "Lagune von Venedig" },
    { q: "Wie heißt die größte Wüste Afrikas?", a: "Sahara" },
    { q: "Wie heißt die größte Wüste Asiens?", a: "Gobi" },
    { q: "Wie heißt die größte Wüste Australiens?", a: "Great Victoria Desert" },
    { q: "Wie heißt die größte Wüste Nordamerikas?", a: "Große Beckenwüste" },
    { q: "Wie heißt die größte Wüste Südamerikas?", a: "Atacama" },
    { q: "Wie heißt die größte Stadt der Erde nach Fläche?", a: "New York" }
  ]
},

"unützes Wissen": {
  100: [
    { q: "Wie viele Herzen hat ein Oktopus?", a: "3" },
    { q: "Wie viele Farben hat ein Regenbogen?", a: "7" },
    { q: "Wie viele Knochen hat ein Mensch?", a: "206" },
    { q: "Wie viele Planeten hat unser Sonnensystem?", a: "8" },
    { q: "Welches Tier kann nicht springen?", a: "Elefant" },
    { q: "Wie viele Zähne hat ein erwachsener Mensch?", a: "32" },
    { q: "Wie viele Kontinente gibt es?", a: "7" },
    { q: "Wie viele Tage hat ein Jahr?", a: "365" },
    { q: "Wie viele Sekunden hat eine Minute?", a: "60" },
    { q: "Wie viele Buchstaben hat das Alphabet?", a: "26" },
    { q: "Wie viele Beine hat eine Spinne?", a: "8" },
    { q: "Wie viele Beine hat ein Insekt?", a: "6" },
    { q: "Wie viele Augen hat ein Mensch?", a: "2" },
    { q: "Wie viele Augen hat eine Biene?", a: "5" },
    { q: "Wie viele Spieler stehen beim Fußball pro Team auf dem Feld?", a: "11" },
    { q: "Wie viele Monate hat ein Jahr?", a: "12" },
    { q: "Wie viele Stunden hat ein Tag?", a: "24" },
    { q: "Wie viele Minuten hat eine Stunde?", a: "60" },
    { q: "Wie viele Kontinente berührt der Äquator?", a: "3" },
    { q: "Wie viele Finger hat ein Mensch?", a: "10" },
    { q: "Wie viele Zehen hat ein Mensch?", a: "10" },
    { q: "Wie viele Planeten sind Gasriesen?", a: "4" },
    { q: "Wie viele Zähne hat ein Hai ungefähr?", a: "300" },
    { q: "Wie viele Flügel hat ein Vogel?", a: "2" },
    { q: "Wie viele Herzen hat ein Regenwurm?", a: "5" }
  ],

  200: [
    { q: "Welches Tier hat das größte Auge?", a: "Riesenkalmar" },
    { q: "Welches Tier hat die längste Zunge relativ zum Körper?", a: "Chamäleon" },
    { q: "Welches Tier hat die meisten Beine?", a: "Tausendfüßer" },
    { q: "Welches Tier hat die stärkste Stimme?", a: "Brüllaffe" },
    { q: "Welches Tier hat die meisten Zähne?", a: "Schnecke" },
    { q: "Welches Tier hat die dickste Haut?", a: "Elefant" },
    { q: "Welches Tier hat die längste Schwangerschaft?", a: "Elefant" },
    { q: "Welches Tier hat die größte Spannweite?", a: "Wanderalbatros" },
    { q: "Welches Tier hat die stärkste Sprungkraft?", a: "Känguru" },
    { q: "Welches Tier hat die längste Wanderung?", a: "Grauwal" },
    { q: "Welches Tier hat die meisten Gehirnzellen?", a: "Pottwal" },
    { q: "Welches Tier hat die stärkste Kieferkraft?", a: "Hyäne" },
    { q: "Welches Tier hat die längste Zunge aller Säugetiere?", a: "Ameisenbär" },
    { q: "Welches Tier hat die stärkste Orientierung im Dunkeln?", a: "Fledermaus" },
    { q: "Welches Tier hat die größte Flossenfläche?", a: "Walhai" },
    { q: "Welches Tier hat die stärkste Knochenstruktur?", a: "Nilpferd" },
    { q: "Welches Tier hat die längste Lebensdauer unter Reptilien?", a: "Galápagos-Schildkröte" },
    { q: "Welches Tier hat die stärkste Giftwirkung unter Spinnen?", a: "Sydney-Trichternetzspinne" },
    { q: "Welches Tier hat die längste Migration unter Vögeln?", a: "Küstenseeschwalbe" },
    { q: "Welches Tier hat die stärkste Panzerung unter Insekten?", a: "Riesenkäfer" },
    { q: "Welches Tier hat die komplexeste Sozialstruktur unter Vögeln?", a: "Rabe" },
    { q: "Welches Tier hat die größte Gehirnmasse relativ zum Körper?", a: "Delfin" },
    { q: "Welches Tier hat die stärkste Hautpanzerung?", a: "Krokodil" },
    { q: "Welches Tier hat die stärkste Stimme unter Vögeln?", a: "Kakadu" },
    { q: "Welches Tier hat die längste dokumentierte Lebensdauer unter Fischen?", a: "Grönlandhai" }
  ],

  300: [
    { q: "Wie viele Muskeln hat ein Mensch?", a: "Über 600" },
    { q: "Wie viele Liter Blut hat ein Mensch?", a: "5 bis 6" },
    { q: "Wie viele Chromosomen hat ein Mensch?", a: "46" },
    { q: "Wie viele Knochen hat ein Baby?", a: "270" },
    { q: "Wie viele Geschmacksrichtungen kann ein Mensch unterscheiden?", a: "5" },
    { q: "Wie viele Haare hat ein Mensch durchschnittlich?", a: "100.000" },
    { q: "Wie viele Nervenzellen hat ein Mensch?", a: "86 Milliarden" },
    { q: "Wie viele Meter ist ein Marathon?", a: "42.195" },
    { q: "Wie viele Meter tief ist der Marianengraben?", a: "11.000" },
    { q: "Wie viele Meter hoch ist der Mount Everest?", a: "8.849" },
    { q: "Wie viele Länder gibt es auf der Welt?", a: "195" },
    { q: "Wie viele Sprachen gibt es weltweit?", a: "Über 7000" },
    { q: "Wie viele Menschen leben auf der Erde?", a: "Über 8 Milliarden" },
    { q: "Wie viele Kontinente berührt der Äquator?", a: "3" },
    { q: "Wie viele Länder liegen am Mittelmeer?", a: "21" },
    { q: "Wie viele Länder grenzen an Deutschland?", a: "9" },
    { q: "Wie viele Zeitzonen gibt es weltweit?", a: "24" },
    { q: "Wie viele Vulkane sind aktiv?", a: "Über 1500" },
    { q: "Wie viele Sterne sieht man mit bloßem Auge?", a: "Etwa 6000" },
    { q: "Wie viele Monde hat Jupiter?", a: "95" },
    { q: "Wie viele Monde hat Saturn?", a: "146" },
    { q: "Wie viele Knochen hat ein Hai?", a: "0" },
    { q: "Wie viele Augen hat eine Spinne?", a: "8" },
    { q: "Wie viele Beine hat ein Tausendfüßer maximal?", a: "750" },
    { q: "Wie viele Zähne hat ein Krokodil?", a: "66" }
  ],

  400: [
    { q: "Welches Land hat die meisten Zeitzonen?", a: "Frankreich" },
    { q: "Welches Land hat die meisten Inseln?", a: "Schweden" },
    { q: "Welches Land hat die meisten Flughäfen?", a: "USA" },
    { q: "Welches Land hat die meisten Sprachen?", a: "Papua-Neuguinea" },
    { q: "Welches Land hat die meisten UNESCO-Welterbestätten?", a: "Italien" },
    { q: "Welches Land hat die höchste Bevölkerungsdichte?", a: "Monaco" },
    { q: "Welches Land hat die niedrigste Bevölkerungsdichte?", a: "Mongolei" },
    { q: "Welches Land hat die meisten Städte über 1 Million Einwohner?", a: "China" },
    { q: "Welches Land hat die meisten Nationalparks?", a: "Australien" },
    { q: "Welches Land hat die meisten Gebirge?", a: "China" },
    { q: "Welches Land hat die meisten Flüsse?", a: "China" },
    { q: "Welches Land hat die meisten Wüsten?", a: "Australien" },
    { q: "Welches Land hat die meisten Vulkane?", a: "Indonesien" },
    { q: "Welches Land hat die meisten Binnenstaaten als Nachbarn?", a: "China" },
    { q: "Welches Land hat die meisten Klimazonen?", a: "USA" },
    { q: "Welches Land hat die meisten Seen?", a: "Kanada" },
    { q: "Welches Land hat die meisten Flughäfen pro Einwohner?", a: "Island" },
    { q: "Welches Land hat die meisten Flüsse pro Fläche?", a: "Bangladesch" },
    { q: "Welches Land hat die meisten Berge über 8000 Meter?", a: "Nepal" },
    { q: "Welches Land hat die meisten Wüstenflächen?", a: "Australien" },
    { q: "Welches Land hat die meisten Küstenkilometer?", a: "Kanada" },
    { q: "Welches Land hat die meisten Inselstaaten als Nachbarn?", a: "Indonesien" },
    { q: "Welches Land hat die meisten aktiven Erdbeben?", a: "Japan" },
    { q: "Welches Land hat die meisten Flüsse, die ins Meer münden?", a: "China" },
    { q: "Welches Land hat die meisten Gebirgsketten?", a: "China" }
  ],

  500: [
    { q: "Wie viele Sterne hat die Milchstraße ungefähr?", a: "200–400 Milliarden" },
    { q: "Wie viele Galaxien gibt es im beobachtbaren Universum?", a: "Über 2 Billionen" },
    { q: "Wie viele Atome hat ein menschlicher Körper ungefähr?", a: "7 Oktillionen" },
    { q: "Wie viele Kilometer ist die Erde im Umfang?", a: "40.075 km" },
    { q: "Wie viele Kilometer ist die Erde vom Mond entfernt?", a: "384.400 km" },
    { q: "Wie viele Kilometer ist die Erde von der Sonne entfernt?", a: "149,6 Millionen km" },
    { q: "Wie viele Jahre dauert ein Sonnenumlauf der Erde?", a: "1 Jahr" },
    { q: "Wie viele Jahre dauert ein Umlauf des Pluto?", a: "248 Jahre" },
    { q: "Wie viele Monde hat die Erde?", a: "1" },
    { q: "Wie viele Monde hat Mars?", a: "2" },
    { q: "Wie viele Sterne sieht man im perfekten Dunkel?", a: "Etwa 2500" },
    { q: "Wie viele Kilometer tief ist der Marianengraben?", a: "11.000 m" },
    { q: "Wie viele Kilometer hoch ist der Mount Everest?", a: "8.849 m" },
    { q: "Wie viele Kilometer ist der Amazonas lang?", a: "7.000 km" },
    { q: "Wie viele Kilometer ist der Nil lang?", a: "6.650 km" },
    { q: "Wie viele Länder gibt es in Afrika?", a: "54" },
    { q: "Wie viele Länder gibt es in Europa?", a: "44" },
    { q: "Wie viele Länder gibt es in Asien?", a: "48" },
    { q: "Wie viele Länder gibt es in Südamerika?", a: "12" },
    { q: "Wie viele Länder gibt es in Ozeanien?", a: "14" },
    { q: "Wie viele Kontinente gibt es?", a: "7" },
    { q: "Wie viele Menschen leben auf der Erde?", a: "Über 8 Milliarden" },
    { q: "Wie viele Sprachen gibt es weltweit?", a: "Über 7000" },
    { q: "Wie viele Sterne hat das Universum ungefähr?", a: "10⁴⁸" }
  ]
},

musik: {
  100: [
    { q: "Wer sang 'Shape of You'?", a: "Ed Sheeran" },
    { q: "Wer sang 'Blinding Lights'?", a: "The Weeknd" },
    { q: "Wer sang 'Bad Guy'?", a: "Billie Eilish" },
    { q: "Wer sang 'Someone Like You'?", a: "Adele" },
    { q: "Wer sang 'Happy'?", a: "Pharrell Williams" },
    { q: "Wer sang 'Poker Face'?", a: "Lady Gaga" },
    { q: "Wer sang 'Uptown Funk'?", a: "Bruno Mars" },
    { q: "Wer sang 'Rolling in the Deep'?", a: "Adele" },
    { q: "Wer sang 'Havana'?", a: "Camila Cabello" },
    { q: "Wer sang 'Waka Waka'?", a: "Shakira" },
    { q: "Wer sang 'Old Town Road'?", a: "Lil Nas X" },
    { q: "Wer sang 'All of Me'?", a: "John Legend" },
    { q: "Wer sang 'Roar'?", a: "Katy Perry" },
    { q: "Wer sang 'Sorry'?", a: "Justin Bieber" },
    { q: "Wer sang 'Viva La Vida'?", a: "Coldplay" },
    { q: "Wer sang 'Hey Ya!'?", a: "Outkast" },
    { q: "Wer sang 'Halo'?", a: "Beyoncé" },
    { q: "Wer sang 'Lose Yourself'?", a: "Eminem" },
    { q: "Wer sang 'Wonderwall'?", a: "Oasis" },
    { q: "Wer sang 'Billie Jean'?", a: "Michael Jackson" },
    { q: "Wer sang 'Smells Like Teen Spirit'?", a: "Nirvana" },
    { q: "Wer sang 'Seven Nation Army'?", a: "The White Stripes" },
    { q: "Wer sang 'Take On Me'?", a: "A-ha" },
    { q: "Wer sang 'Africa'?", a: "Toto" },
    { q: "Wer sang 'Beat It'?", a: "Michael Jackson" }
  ],

  200: [
    { q: "Wer ist der King of Pop?", a: "Michael Jackson" },
    { q: "Wer ist die Queen of Pop?", a: "Madonna" },
    { q: "Wer ist der King of Rock 'n' Roll?", a: "Elvis Presley" },
    { q: "Wer ist der erfolgreichste Rapper weltweit?", a: "Drake" },
    { q: "Wer ist die erfolgreichste Sängerin weltweit?", a: "Madonna" },
    { q: "Wer sang 'Like a Rolling Stone'?", a: "Bob Dylan" },
    { q: "Wer sang 'Purple Rain'?", a: "Prince" },
    { q: "Wer sang 'I Will Always Love You'?", a: "Whitney Houston" },
    { q: "Wer sang 'Single Ladies'?", a: "Beyoncé" },
    { q: "Wer sang 'Thriller'?", a: "Michael Jackson" },
    { q: "Wer sang 'Smooth Criminal'?", a: "Michael Jackson" },
    { q: "Wer sang 'Firework'?", a: "Katy Perry" },
    { q: "Wer sang 'Grenade'?", a: "Bruno Mars" },
    { q: "Wer sang 'Lose Yourself to Dance'?", a: "Daft Punk" },
    { q: "Wer sang 'Radioactive'?", a: "Imagine Dragons" },
    { q: "Wer sang 'Boulevard of Broken Dreams'?", a: "Green Day" },
    { q: "Wer sang 'In the End'?", a: "Linkin Park" },
    { q: "Wer sang 'Numb'?", a: "Linkin Park" },
    { q: "Wer sang 'Zombie'?", a: "The Cranberries" },
    { q: "Wer sang 'Eye of the Tiger'?", a: "Survivor" },
    { q: "Wer sang 'Beat It'?", a: "Michael Jackson" },
    { q: "Wer sang 'Billie Jean'?", a: "Michael Jackson" },
    { q: "Wer sang 'Back in Black'?", a: "AC/DC" },
    { q: "Wer sang 'Enter Sandman'?", a: "Metallica" },
    { q: "Wer sang 'Thunderstruck'?", a: "AC/DC" }
  ],

  300: [
    { q: "Welche Band sang 'Bohemian Rhapsody'?", a: "Queen" },
    { q: "Welche Band sang 'Hotel California'?", a: "Eagles" },
    { q: "Welche Band sang 'Stairway to Heaven'?", a: "Led Zeppelin" },
    { q: "Welche Band sang 'Sweet Child O' Mine'?", a: "Guns N' Roses" },
    { q: "Welche Band sang 'Smells Like Teen Spirit'?", a: "Nirvana" },
    { q: "Welche Band sang 'Wonderwall'?", a: "Oasis" },
    { q: "Welche Band sang 'Don't Stop Believin''?", a: "Journey" },
    { q: "Welche Band sang 'Another Brick in the Wall'?", a: "Pink Floyd" },
    { q: "Welche Band sang 'Nothing Else Matters'?", a: "Metallica" },
    { q: "Welche Band sang 'Highway to Hell'?", a: "AC/DC" },
    { q: "Welche Band sang 'Seven Nation Army'?", a: "The White Stripes" },
    { q: "Welche Band sang 'Take On Me'?", a: "A-ha" },
    { q: "Welche Band sang 'Africa'?", a: "Toto" },
    { q: "Welche Band sang 'Killing in the Name'?", a: "Rage Against the Machine" },
    { q: "Welche Band sang 'Californication'?", a: "Red Hot Chili Peppers" },
    { q: "Welche Band sang 'Viva La Vida'?", a: "Coldplay" },
    { q: "Welche Band sang 'Radioactive'?", a: "Imagine Dragons" },
    { q: "Welche Band sang 'Believer'?", a: "Imagine Dragons" },
    { q: "Welche Band sang 'Clocks'?", a: "Coldplay" },
    { q: "Welche Band sang 'Fix You'?", a: "Coldplay" },
    { q: "Welche Band sang 'Back in Black'?", a: "AC/DC" },
    { q: "Welche Band sang 'Enter Sandman'?", a: "Metallica" },
    { q: "Welche Band sang 'Thunderstruck'?", a: "AC/DC" },
    { q: "Welche Band sang 'Black Hole Sun'?", a: "Soundgarden" },
    { q: "Welche Band sang 'Creep'?", a: "Radiohead" }
  ],

  400: [
    { q: "Welcher Musiker hat die meisten Streams weltweit?", a: "Drake" },
    { q: "Welcher Künstler hat die meisten Spotify-Hörer?", a: "The Weeknd" },
    { q: "Welcher Künstler hat die meisten verkauften Singles weltweit?", a: "Elton John" },
    { q: "Welcher Künstler hat die meisten verkauften Alben weltweit?", a: "The Beatles" },
    { q: "Welcher Künstler hat die meisten Grammy Awards gewonnen?", a: "Beyoncé" },
    { q: "Welcher Künstler hat die meisten Nummer-1-Hits in den USA?", a: "The Beatles" },
    { q: "Welcher Künstler hat die meisten Nummer-1-Hits weltweit?", a: "Mariah Carey" },
    { q: "Welcher Künstler hat die meisten Tournee-Einnahmen erzielt?", a: "Ed Sheeran" },
    { q: "Welcher Künstler hat die erfolgreichste Tour aller Zeiten?", a: "Elton John" },
    { q: "Welcher Künstler hat die meisten Musikvideos mit über 1 Milliarde Views?", a: "Justin Bieber" },
    { q: "Welcher Künstler hat die meisten Songs über 1 Milliarde Streams?", a: "Drake" },
    { q: "Welcher Künstler hat die meisten Platin-Schallplatten?", a: "Garth Brooks" },
    { q: "Welcher Künstler hat die meisten verkauften digitalen Songs?", a: "Rihanna" },
    { q: "Welcher Künstler hat die meisten verkauften Vinyls?", a: "The Beatles" },
    { q: "Welcher Künstler hat die meisten verkauften Live-Alben?", a: "Bruce Springsteen" },
    { q: "Welcher Künstler hat die meisten verkauften Rap-Alben?", a: "Eminem" },
    { q: "Welcher Künstler hat die meisten verkauften Rock-Alben?", a: "AC/DC" },
    { q: "Welcher Künstler hat die meisten verkauften Pop-Alben?", a: "Michael Jackson" },
    { q: "Welcher Künstler hat die meisten verkauften Metal-Alben?", a: "Metallica" },
    { q: "Welcher Künstler hat die meisten verkauften Country-Alben?", a: "Garth Brooks" },
    { q: "Welcher Künstler hat die meisten verkauften Latin-Alben?", a: "Bad Bunny" },
    { q: "Welcher Künstler hat die meisten verkauften Hip-Hop-Singles?", a: "Drake" },
    { q: "Welcher Künstler hat die meisten verkauften R&B-Alben?", a: "Whitney Houston" },
    { q: "Welcher Künstler hat die meisten verkauften Soundtracks?", a: "Whitney Houston" },
    { q: "Welcher Künstler hat die meisten verkauften Weihnachtsalben?", a: "Mariah Carey" }
  ],

  500: [
    { q: "Welches Album ist das meistverkaufte aller Zeiten?", a: "Thriller" },
    { q: "Welches Album ist das zweitmeistverkaufte aller Zeiten?", a: "Back in Black" },
    { q: "Welches Album ist das drittmeistverkaufte aller Zeiten?", a: "The Dark Side of the Moon" },
    { q: "Welches Album ist das meistgestreamte aller Zeiten?", a: "Divide" },
    { q: "Welches Album gewann die meisten Grammys?", a: "How to Dismantle an Atomic Bomb" },
    { q: "Welches Album hielt am längsten Platz 1 der Charts?", a: "Thriller" },
    { q: "Welches Album ist das meistverkaufte Debütalbum?", a: "Appetite for Destruction" },
    { q: "Welches Album ist das meistverkaufte Live-Album?", a: "Frampton Comes Alive!" },
    { q: "Welches Album ist das meistverkaufte Soundtrack-Album?", a: "The Bodyguard" },
    { q: "Welches Album ist das meistverkaufte Rap-Album?", a: "The Marshall Mathers LP" },
    { q: "Welches Album ist das meistverkaufte Metal-Album?", a: "Metallica (Black Album)" },
    { q: "Welches Album ist das meistverkaufte Pop-Album?", a: "Thriller" },
    { q: "Welches Album ist das meistverkaufte Rock-Album?", a: "Back in Black" },
    { q: "Welches Album ist das meistverkaufte Country-Album?", a: "Double Live" },
    { q: "Welches Album ist das meistverkaufte Jazz-Album?", a: "Kind of Blue" },
    { q: "Welches Album ist das meistverkaufte Klassik-Album?", a: "The Three Tenors" },
    { q: "Welches Album ist das meistverkaufte Latin-Album?", a: "X 100PRE" },
    { q: "Welches Album ist das meistverkaufte R&B-Album?", a: "Whitney" },
    { q: "Welches Album ist das meistverkaufte Hip-Hop-Album?", a: "The Marshall Mathers LP" },
    { q: "Welches Album ist das meistverkaufte Weihnachtsalbum?", a: "Merry Christmas" },
    { q: "Welches Album ist das meistverkaufte Compilation-Album?", a: "Greatest Hits (Queen)" },
    { q: "Welches Album ist das meistverkaufte Live-Rock-Album?", a: "Frampton Comes Alive!" },
    { q: "Welches Album ist das meistverkaufte Soundtrack der 90er?", a: "The Bodyguard" },
    { q: "Welches Album ist das meistverkaufte Album eines Duos?", a: "Simon & Garfunkel – Bridge Over Troubled Water" },
    { q: "Welches Album ist das meistverkaufte Album einer Band?", a: "Back in Black" }
  ]
},

"geschichte": {
  100: [
    { q: "Wer war der erste Präsident der USA?", a: "George Washington" },
    { q: "Wer war der erste Kaiser von Deutschland?", a: "Wilhelm I." },
    { q: "Wer entdeckte Amerika 1492?", a: "Christoph Kolumbus" },
    { q: "Wer war der berühmteste Pharao Ägyptens?", a: "Tutanchamun" },
    { q: "Wer war der König der Griechen in der Antike?", a: "Alexander der Große" },
    { q: "Wer war der erste Mensch im Weltall?", a: "Juri Gagarin" },
    { q: "Wer war der erste Mensch auf dem Mond?", a: "Neil Armstrong" },
    { q: "Wer war der bekannteste römische Feldherr?", a: "Julius Caesar" },
    { q: "Wer war der berühmteste Maler der Mona Lisa?", a: "Leonardo da Vinci" },
    { q: "Wer war der bekannteste Reformator?", a: "Martin Luther" },
    { q: "Wer war der berühmteste Physiker der Geschichte?", a: "Albert Einstein" },
    { q: "Wer war der bekannteste britische Premierminister im Zweiten Weltkrieg?", a: "Winston Churchill" },
    { q: "Wer war der erste Bundeskanzler Deutschlands?", a: "Konrad Adenauer" },
    { q: "Wer war der bekannteste König Frankreichs?", a: "Ludwig XIV." },
    { q: "Wer war der bekannteste Feldherr Karthagos?", a: "Hannibal" },
    { q: "Wer war der bekannteste Philosoph der Antike?", a: "Sokrates" },
    { q: "Wer war der bekannteste griechische Mathematiker?", a: "Pythagoras" },
    { q: "Wer war der bekannteste römische Kaiser?", a: "Augustus" },
    { q: "Wer war der bekannteste Entdecker Portugals?", a: "Vasco da Gama" },
    { q: "Wer war der bekannteste Entdecker des Pazifiks?", a: "James Cook" },
    { q: "Wer war der bekannteste Erfinder des Buchdrucks?", a: "Johannes Gutenberg" },
    { q: "Wer war der bekannteste Feldherr Spartas?", a: "Leonidas" },
    { q: "Wer war der bekannteste Herrscher des Osmanischen Reiches?", a: "Süleyman der Prächtige" },
    { q: "Wer war der bekannteste Herrscher des Mongolenreichs?", a: "Dschingis Khan" },
    { q: "Wer war der bekannteste Königssohn Englands?", a: "Prinz Charles" }
  ],

  200: [
    { q: "Wie heißt die berühmteste Mauer in Deutschland?", a: "Berliner Mauer" },
    { q: "Wie heißt die Hauptstadt des Römischen Reiches?", a: "Rom" },
    { q: "Wie heißt die Hauptstadt des Osmanischen Reiches?", a: "Konstantinopel" },
    { q: "Wie heißt die Hauptstadt des Byzantinischen Reiches?", a: "Konstantinopel" },
    { q: "Wie heißt die Hauptstadt des alten Ägyptens?", a: "Memphis" },
    { q: "Wie heißt die Hauptstadt des antiken Griechenlands?", a: "Athen" },
    { q: "Wie heißt die Hauptstadt des Perserreichs?", a: "Persepolis" },
    { q: "Wie heißt die Hauptstadt des Inka-Reiches?", a: "Cusco" },
    { q: "Wie heißt die Hauptstadt des Maya-Reiches?", a: "Tikal" },
    { q: "Wie heißt die Hauptstadt des Azteken-Reiches?", a: "Tenochtitlán" },
    { q: "Wie heißt die berühmteste Bibliothek der Antike?", a: "Bibliothek von Alexandria" },
    { q: "Wie heißt die berühmteste Straße des Römischen Reiches?", a: "Via Appia" },
    { q: "Wie heißt die berühmteste Schlacht der Antike?", a: "Schlacht bei Marathon" },
    { q: "Wie heißt die berühmteste Schlacht des Mittelalters?", a: "Schlacht von Hastings" },
    { q: "Wie heißt die berühmteste Schlacht des 1. Weltkriegs?", a: "Schlacht an der Somme" },
    { q: "Wie heißt die berühmteste Schlacht des 2. Weltkriegs?", a: "Stalingrad" },
    { q: "Wie heißt die berühmteste Burg Deutschlands?", a: "Neuschwanstein" },
    { q: "Wie heißt die berühmteste chinesische Mauer?", a: "Chinesische Mauer" },
    { q: "Wie heißt die berühmteste Handelsroute der Antike?", a: "Seidenstraße" },
    { q: "Wie heißt die berühmteste Stadt der Renaissance?", a: "Florenz" },
    { q: "Wie heißt die berühmteste Stadt der Industrialisierung?", a: "Manchester" },
    { q: "Wie heißt die berühmteste Stadt der Goldrausch-Zeit?", a: "San Francisco" },
    { q: "Wie heißt die berühmteste Stadt der Wikinger?", a: "Haithabu" },
    { q: "Wie heißt die berühmteste Stadt der Römer in Deutschland?", a: "Trier" },
    { q: "Wie heißt die berühmteste Stadt der Kelten?", a: "Alesia" }
  ],

  300: [
    { q: "Wie heißt der Krieg zwischen Sparta und Athen?", a: "Peloponnesischer Krieg" },
    { q: "Wie heißt der Krieg zwischen Rom und Karthago?", a: "Punische Kriege" },
    { q: "Wie heißt der Krieg zwischen England und Frankreich im Mittelalter?", a: "Hundertjähriger Krieg" },
    { q: "Wie heißt der Krieg zwischen Nord- und Südstaaten der USA?", a: "Sezessionskrieg" },
    { q: "Wie heißt der Krieg zwischen Deutschland und Frankreich 1870?", a: "Deutsch-Französischer Krieg" },
    { q: "Wie heißt der Krieg zwischen den Alliierten und Deutschland 1914–1918?", a: "Erster Weltkrieg" },
    { q: "Wie heißt der Krieg zwischen den Alliierten und Deutschland 1939–1945?", a: "Zweiter Weltkrieg" },
    { q: "Wie heißt der Krieg zwischen USA und Vietnam?", a: "Vietnamkrieg" },
    { q: "Wie heißt der Krieg zwischen USA und Irak 1991?", a: "Golfkrieg" },
    { q: "Wie heißt der Krieg zwischen Rom und Gallien?", a: "Gallischer Krieg" },
    { q: "Wie heißt der Krieg zwischen Rom und Germanen?", a: "Germanenkriege" },
    { q: "Wie heißt der Krieg zwischen Griechen und Persern?", a: "Perserkriege" },
    { q: "Wie heißt der Krieg zwischen Japan und USA 1941–1945?", a: "Pazifikkrieg" },
    { q: "Wie heißt der Krieg zwischen Russland und Napoleon?", a: "Russlandfeldzug" },
    { q: "Wie heißt der Krieg zwischen Napoleon und Europa?", a: "Koalitionskriege" },
    { q: "Wie heißt der Krieg zwischen England und Schottland?", a: "Unabhängigkeitskriege" },
    { q: "Wie heißt der Krieg zwischen Rom und Britannien?", a: "Britannienfeldzug" },
    { q: "Wie heißt der Krieg zwischen Rom und Judäa?", a: "Jüdischer Krieg" },
    { q: "Wie heißt der Krieg zwischen Spanien und Azteken?", a: "Eroberung Mexikos" },
    { q: "Wie heißt der Krieg zwischen Spanien und Inka?", a: "Eroberung Perus" },
    { q: "Wie heißt der Krieg zwischen Osmanen und Europa?", a: "Türkenkriege" },
    { q: "Wie heißt der Krieg zwischen Russland und Japan 1904?", a: "Russisch-Japanischer Krieg" },
    { q: "Wie heißt der Krieg zwischen Griechenland und Türkei 1919?", a: "Griechisch-Türkischer Krieg" },
    { q: "Wie heißt der Krieg zwischen England und Buren?", a: "Burenkrieg" },
    { q: "Wie heißt der Krieg zwischen Rom und Spartacus?", a: "Spartacus-Aufstand" }
  ],

  400: [
    { q: "Welches Jahr gilt als Beginn des Mittelalters?", a: "476" },
    { q: "Welches Jahr gilt als Beginn der Neuzeit?", a: "1492" },
    { q: "Welches Jahr gilt als Beginn der Industrialisierung?", a: "1760" },
    { q: "Welches Jahr gilt als Beginn des Ersten Weltkriegs?", a: "1914" },
    { q: "Welches Jahr gilt als Beginn des Zweiten Weltkriegs?", a: "1939" },
    { q: "Welches Jahr gilt als Ende des Zweiten Weltkriegs?", a: "1945" },
    { q: "Welches Jahr gilt als Wiedervereinigung Deutschlands?", a: "1990" },
    { q: "Welches Jahr gilt als Beginn der Französischen Revolution?", a: "1789" },
    { q: "Welches Jahr gilt als Beginn der Reformation?", a: "1517" },
    { q: "Welches Jahr gilt als Gründung Roms?", a: "753 v. Chr." },
    { q: "Welches Jahr gilt als Untergang Roms?", a: "476" },
    { q: "Welches Jahr gilt als Entdeckung Amerikas?", a: "1492" },
    { q: "Welches Jahr gilt als Mondlandung?", a: "1969" },
    { q: "Welches Jahr gilt als Beginn des Kalten Kriegs?", a: "1947" },
    { q: "Welches Jahr gilt als Ende des Kalten Kriegs?", a: "1991" },
    { q: "Welches Jahr gilt als Beginn des Römischen Reiches?", a: "27 v. Chr." },
    { q: "Welches Jahr gilt als Beginn des Byzantinischen Reiches?", a: "330" },
    { q: "Welches Jahr gilt als Beginn des Osmanischen Reiches?", a: "1299" },
    { q: "Welches Jahr gilt als Beginn des Mongolenreiches?", a: "1206" },
    { q: "Welches Jahr gilt als Beginn des Perserreiches?", a: "550 v. Chr." },
    { q: "Welches Jahr gilt als Beginn der Renaissance?", a: "1400" },
    { q: "Welches Jahr gilt als Beginn der Aufklärung?", a: "1700" },
    { q: "Welches Jahr gilt als Beginn der Steinzeit?", a: "2,5 Mio. v. Chr." },
    { q: "Welches Jahr gilt als Beginn der Bronzezeit?", a: "3000 v. Chr." },
    { q: "Welches Jahr gilt als Beginn der Eisenzeit?", a: "1200 v. Chr." }
  ],

  500: [
    { q: "Welches Reich war das größte der Geschichte?", a: "Mongolenreich" },
    { q: "Welches Reich war das langlebigste der Geschichte?", a: "Byzantinisches Reich" },
    { q: "Welches Reich war das reichste der Antike?", a: "Römisches Reich" },
    { q: "Welches Reich war das mächtigste im Mittelalter?", a: "Osmanisches Reich" },
    { q: "Welches Reich war das mächtigste der Neuzeit?", a: "Britisches Empire" },
    { q: "Welches Reich hatte die größte Armee der Antike?", a: "Perserreich" },
    { q: "Welches Reich hatte die größte Flotte der Antike?", a: "Athen" },
    { q: "Welches Reich hatte die größte Stadt der Antike?", a: "Rom" },
    { q: "Welches Reich hatte die größte Stadt des Mittelalters?", a: "Konstantinopel" },
    { q: "Welches Reich hatte die größte Stadt der Neuzeit?", a: "London" },
    { q: "Welches Reich hatte die meisten Kolonien?", a: "Britisches Empire" },
    { q: "Welches Reich hatte die meisten Soldaten im Zweiten Weltkrieg?", a: "Sowjetunion" },
    { q: "Welches Reich hatte die meisten Opfer im Zweiten Weltkrieg?", a: "Sowjetunion" },
    { q: "Welches Reich hatte die meisten Schlachten gegen Rom?", a: "Germanen" },
    { q: "Welches Reich hatte die meisten Schlachten gegen Griechenland?", a: "Perserreich" },
    { q: "Welches Reich hatte die meisten Schlachten gegen China?", a: "Mongolen" },
    { q: "Welches Reich hatte die meisten Schlachten gegen Indien?", a: "Mogulreich" },
    { q: "Welches Reich hatte die meisten Schlachten gegen Japan?", a: "China" },
    { q: "Welches Reich hatte die meisten Schlachten gegen Russland?", a: "Deutschland" },
    { q: "Welches Reich hatte die meisten Schlachten gegen Frankreich?", a: "England" },
    { q: "Welches Reich hatte die meisten Schlachten gegen Spanien?", a: "Mauren" },
    { q: "Welches Reich hatte die meisten Schlachten gegen die USA?", a: "Britisches Empire" },
    { q: "Welches Reich hatte die meisten Schlachten gegen die Türkei?", a: "Byzantinisches Reich" },
    { q: "Welches Reich hatte die meisten Schlachten gegen Ägypten?", a: "Hethiter" },
    { q: "Welches Reich hatte die meisten Schlachten gegen Babylon?", a: "Assyrer" }
  ]
},
"social Media": {
  100: [
    { q: "Welche Plattform ist für kurze Videos bekannt?", a: "TikTok" },
    { q: "Wer ist der meistgefolgte Mensch auf Instagram?", a: "Cristiano Ronaldo" },
    { q: "Welche Plattform gehört zu Meta?", a: "Instagram" },
    { q: "Wer ist der meistgefolgte deutsche Influencer auf Instagram?", a: "Pamela Reif" },
    { q: "Welche Plattform nutzt Reels?", a: "Instagram" },
    { q: "Wer ist der meistgefolgte Creator auf TikTok?", a: "Khaby Lame" },
    { q: "Welche Plattform nutzt Shorts?", a: "YouTube" },
    { q: "Wer ist der meistgefolgte deutsche TikToker?", a: "Younes Zarou" },
    { q: "Welche Plattform ist für Livestreams bekannt?", a: "Twitch" },
    { q: "Wer ist der meistgefolgte YouTuber weltweit?", a: "MrBeast" },
    { q: "Welche Plattform nutzt Snaps?", a: "Snapchat" },
    { q: "Wer ist der meistgefolgte deutsche Streamer?", a: "MontanaBlack" },
    { q: "Welche Plattform ist für Memes bekannt?", a: "Reddit" },
    { q: "Wer ist der meistgefolgte deutsche YouTuber?", a: "Gronkh" },
    { q: "Welche Plattform ist für Bilder bekannt?", a: "Pinterest" },
    { q: "Wer ist der meistgefolgte deutsche Musiker auf Instagram?", a: "Capital Bra" },
    { q: "Welche Plattform zeigt Tweets?", a: "Twitter / X" },
    { q: "Wer ist der meistgefolgte deutsche Comedy‑YouTuber?", a: "Rezo" },
    { q: "Welche Plattform ist für Stories bekannt?", a: "Instagram" },
    { q: "Wer ist der meistgefolgte deutsche Mode‑Influencer?", a: "Caro Daur" },
    { q: "Welche Plattform ist für Challenges bekannt?", a: "TikTok" },
    { q: "Wer ist der meistgefolgte deutsche Beauty‑Influencer?", a: "Mrs Bella" },
    { q: "Welche Plattform ist für Vlogs bekannt?", a: "YouTube" },
    { q: "Wer ist der meistgefolgte deutsche Lifestyle‑Influencer?", a: "Dagi Bee" },
    { q: "Welche Plattform ist für Diskussionen bekannt?", a: "Reddit" }
  ],

  200: [
    { q: "Wie heißt die Funktion für kurze Videos auf Instagram?", a: "Reels" },
    { q: "Wie heißt die Funktion für kurze Videos auf YouTube?", a: "Shorts" },
    { q: "Wie heißt die Funktion für kurze Videos auf TikTok?", a: "TikTok Videos" },
    { q: "Wie heißt die Funktion für verschwindende Bilder?", a: "Stories" },
    { q: "Wie heißt die Funktion für verschwindende Nachrichten?", a: "Snaps" },
    { q: "Wie heißt die Funktion für Livestreams auf TikTok?", a: "TikTok Live" },
    { q: "Wie heißt die Funktion für Livestreams auf Instagram?", a: "Instagram Live" },
    { q: "Wie heißt die Funktion für Livestreams auf YouTube?", a: "YouTube Live" },
    { q: "Wie heißt die Funktion für Livestreams auf Twitch?", a: "Streams" },
    { q: "Wie heißt die Funktion für kurze Texte auf Twitter/X?", a: "Tweets" },
    { q: "Wie heißt die Funktion für Creator‑Bezahlung auf TikTok?", a: "Creator Fund" },
    { q: "Wie heißt die Funktion für Creator‑Abos auf YouTube?", a: "Channel Memberships" },
    { q: "Wie heißt die Funktion für Creator‑Abos auf Twitch?", a: "Subscriptions" },
    { q: "Wie heißt die Funktion für Creator‑Abos auf Instagram?", a: "Instagram Subscriptions" },
    { q: "Wie heißt die Funktion für Creator‑Abos auf TikTok?", a: "TikTok Subscriptions" },
    { q: "Wie heißt die Funktion für Creator‑Werbung auf Instagram?", a: "Instagram Ads" },
    { q: "Wie heißt die Funktion für Creator‑Werbung auf YouTube?", a: "YouTube Ads" },
    { q: "Wie heißt die Funktion für Creator‑Werbung auf TikTok?", a: "TikTok Ads" },
    { q: "Wie heißt die Funktion für Creator‑Werbung auf Facebook?", a: "Facebook Ads" },
    { q: "Wie heißt die Funktion für Creator‑Werbung auf Snapchat?", a: "Snap Ads" },
    { q: "Wie heißt die Funktion für Creator‑Statistiken auf YouTube?", a: "YouTube Analytics" },
    { q: "Wie heißt die Funktion für Creator‑Statistiken auf Instagram?", a: "Insights" },
    { q: "Wie heißt die Funktion für Creator‑Statistiken auf TikTok?", a: "Analytics" },
    { q: "Wie heißt die Funktion für Creator‑Statistiken auf Twitch?", a: "Channel Analytics" },
    { q: "Wie heißt die Funktion für Creator‑Statistiken auf Facebook?", a: "Meta Business Suite" }
  ],

  300: [
    { q: "Wie viele Follower hat Cristiano Ronaldo auf Instagram (ungefähr)?", a: "Über 600 Millionen" },
    { q: "Wie viele Abonnenten hat MrBeast auf YouTube (ungefähr)?", a: "Über 250 Millionen" },
    { q: "Wie viele Follower hat Khaby Lame auf TikTok (ungefähr)?", a: "Über 160 Millionen" },
    { q: "Wie viele Follower haben Lisa & Lena auf Instagram (ungefähr)?", a: "Über 20 Millionen" },
    { q: "Wie viele Follower hat Younes Zarou auf TikTok (ungefähr)?", a: "Über 50 Millionen" },
    { q: "Wie viele Follower hat Pamela Reif auf Instagram (ungefähr)?", a: "Über 10 Millionen" },
    { q: "Wie viele Follower hat Capital Bra auf Instagram (ungefähr)?", a: "Über 4 Millionen" },
    { q: "Wie viele Follower hat MontanaBlack auf Twitch (ungefähr)?", a: "Über 5 Millionen" },
    { q: "Wie viele Abonnenten hat Gronkh auf YouTube (ungefähr)?", a: "Über 5 Millionen" },
    { q: "Wie viele Follower hat Charli D'Amelio auf TikTok (ungefähr)?", a: "Über 150 Millionen" },
    { q: "Wie viele Follower hat Kylie Jenner auf Instagram (ungefähr)?", a: "Über 400 Millionen" },
    { q: "Wie viele Follower hat Elon Musk auf Twitter/X (ungefähr)?", a: "Über 180 Millionen" },
    { q: "Wie viele Follower hat PewDiePie auf YouTube (ungefähr)?", a: "Über 110 Millionen" },
    { q: "Wie viele Follower hat The Rock auf Instagram (ungefähr)?", a: "Über 390 Millionen" },
    { q: "Wie viele Follower hat Neymar auf Instagram (ungefähr)?", a: "Über 220 Millionen" },
    { q: "Wie viele Follower hat Taylor Swift auf Instagram (ungefähr)?", a: "Über 300 Millionen" },
    { q: "Wie viele Follower hat Billie Eilish auf Instagram (ungefähr)?", a: "Über 100 Millionen" },
    { q: "Wie viele Follower hat Kim Kardashian auf Instagram (ungefähr)?", a: "Über 360 Millionen" },
    { q: "Wie viele Follower hat Justin Bieber auf Instagram (ungefähr)?", a: "Über 290 Millionen" },
    { q: "Wie viele Follower hat Messi auf Instagram (ungefähr)?", a: "Über 500 Millionen" },
    { q: "Wie viele Follower hat Shirin David auf Instagram (ungefähr)?", a: "Über 6 Millionen" },
    { q: "Wie viele Follower hat Apache 207 auf Instagram (ungefähr)?", a: "Über 2 Millionen" },
    { q: "Wie viele Follower hat Lisa & Lena auf TikTok (ungefähr)?", a: "Über 13 Millionen" },
    { q: "Wie viele Follower hat Herr Anwalt auf TikTok (ungefähr)?", a: "Über 6 Millionen" },
    { q: "Wie viele Follower hat Caro Daur auf Instagram (ungefähr)?", a: "Über 4 Millionen" }
  ],

  400: [
    { q: "Welcher Influencer machte den 'Renegade'-Tanz weltweit bekannt?", a: "Charli D'Amelio" },
    { q: "Welcher Influencer machte die 'Elevator Boys' viral?", a: "Elevator Boys" },
    { q: "Welcher Influencer machte die 'Bottle Cap Challenge' viral?", a: "Jason Statham" },
    { q: "Welcher Influencer machte den 'In My Feelings'-Dance viral?", a: "Shiggy" },
    { q: "Welcher Influencer machte den 'Ice Bucket Challenge' Trend groß?", a: "ALS Association" },
    { q: "Welcher Influencer machte den 'Deez Nuts' Trend viral?", a: "Welven Da Great" },
    { q: "Welcher Influencer machte den 'Damn Daniel' Trend viral?", a: "Daniel Lara" },
    { q: "Welcher Influencer machte den 'What are those?' Trend viral?", a: "Brandon Moore" },
    { q: "Welcher Influencer machte den 'Karma is a cat' TikTok‑Trend viral?", a: "Taylor Swift Fans" },
    { q: "Welcher Influencer machte den 'NPC Livestream' Trend groß?", a: "Pinkydoll" },
    { q: "Welcher Influencer machte den 'Skibidi Toilet' Trend groß?", a: "DaFuq!?Boom!" },
    { q: "Welcher Influencer machte den 'Sigma Face' Trend groß?", a: "Jschlatt Fans" },
    { q: "Welcher Influencer machte den 'Ohio' Meme groß?", a: "TikTok Community" },
    { q: "Welcher Influencer machte den 'Corn Kid' viral?", a: "Tariq" },
    { q: "Welcher Influencer machte den 'Wednesday Dance' viral?", a: "Jenna Ortega" },
    { q: "Welcher Influencer machte den 'Griddy Dance' viral?", a: "Allen Davis" },
    { q: "Welcher Influencer machte den 'NPC Trend' groß?", a: "Pinkydoll" },
    { q: "Welcher Influencer machte den 'TikTok Rizz' Trend groß?", a: "Kai Cenat" },
    { q: "Welcher Influencer machte den 'Fanum Tax' Trend groß?", a: "Fanum" },
    { q: "Welcher Influencer machte den 'Gyatt' Trend groß?", a: "YourRAGE" },
    { q: "Welcher Influencer machte den 'Wenlo' Trend groß?", a: "TikTok Community" },
    { q: "Welcher Influencer machte den 'NPC Ice Cream' Trend groß?", a: "Pinkydoll" },
    { q: "Welcher Influencer machte den 'TikTok CapCut Templates' Trend groß?", a: "CapCut Creator Community" },
    { q: "Welcher Influencer machte den 'Subway Surfers Hintergrundvideo' Trend groß?", a: "TikTok Community" },
    { q: "Welcher Influencer machte den 'TikTok Greenscreen Memes' Trend groß?", a: "TikTok Community" }
  ],

  500: [
    { q: "Welcher Influencer hat weltweit die meisten Follower über alle Plattformen kombiniert?", a: "Cristiano Ronaldo" },
    { q: "Welcher Influencer hat die meisten monatlichen YouTube‑Views?", a: "MrBeast" },
    { q: "Welcher Influencer hat die höchste TikTok‑Engagement‑Rate?", a: "Khaby Lame" },
    { q: "Welcher Influencer hat die meisten Instagram‑Likes auf einem Bild?", a: "Das Ei (World Record Egg)" },
    { q: "Welcher Influencer hat die meisten Livestream‑Zuschauer auf Twitch?", a: "Ibai Llanos" },
    { q: "Welcher Influencer hat die meisten TikTok‑Likes insgesamt?", a: "Charli D'Amelio" },
    { q: "Welcher Influencer hat die meisten YouTube‑Shorts‑Views?", a: "MrBeast" },
    { q: "Welcher Influencer hat die meisten TikTok‑Follower in Deutschland?", a: "Younes Zarou" },
    { q: "Welcher Influencer hat die meisten Instagram‑Follower in Deutschland?", a: "Pamela Reif" },
    { q: "Welcher Influencer hat die meisten YouTube‑Abonnenten in Deutschland?", a: "Kurzgesagt" },
    { q: "Welcher Influencer hat die meisten Twitch‑Follower in Deutschland?", a: "MontanaBlack" },
    { q: "Welcher Influencer hat die meisten TikTok‑Views 2023?", a: "Khaby Lame" },
    { q: "Welcher Influencer hat die meisten Instagram‑Reels‑Views 2023?", a: "Khaby Lame" },
    { q: "Welcher Influencer hat die meisten YouTube‑Views 2023?", a: "MrBeast" },
    { q: "Welcher Influencer hat die meisten TikTok‑Likes 2023?", a: "Charli D'Amelio" },
    { q: "Welcher Influencer hat die meisten Instagram‑Likes 2023?", a: "Lionel Messi" },
    { q: "Welcher Influencer hat die meisten TikTok‑Follower 2023?", a: "Khaby Lame" },
    { q: "Welcher Influencer hat die meisten Instagram‑Follower 2023?", a: "Cristiano Ronaldo" },
    { q: "Welcher Influencer hat die meisten YouTube‑Abonnenten 2023?", a: "MrBeast" },
    { q: "Welcher Influencer hat die meisten Twitch‑Views 2023?", a: "Kai Cenat" },
    { q: "Welcher Influencer hat die meisten TikTok‑Shares 2023?", a: "Charli D'Amelio" },
    { q: "Welcher Influencer hat die meisten Instagram‑Story‑Views 2023?", a: "Kim Kardashian" },
    { q: "Welcher Influencer hat die meisten TikTok‑Duet‑Videos?", a: "Khaby Lame" },
    { q: "Welcher Influencer hat die meisten TikTok‑Challenges gestartet?", a: "Charli D'Amelio" },
    { q: "Welcher Influencer hat die meisten viralen Trends ausgelöst?", a: "MrBeast" }
  ]
},

"filme & Serien": {
  100: [
    { q: "Wer spielt Harry Potter?", a: "Daniel Radcliffe" },
    { q: "Wer spielt Iron Man?", a: "Robert Downey Jr." },
    { q: "Wer spielt Captain Jack Sparrow?", a: "Johnny Depp" },
    { q: "Wer spielt Batman in 'The Dark Knight'?", a: "Christian Bale" },
    { q: "Wer spielt Wolverine?", a: "Hugh Jackman" },
    { q: "Wer spielt Elsa in 'Die Eiskönigin' (Stimme)?", a: "Idina Menzel" },
    { q: "Wer spielt Simba (Stimme)?", a: "Matthew Broderick" },
    { q: "Wer spielt Shrek (Stimme)?", a: "Mike Myers" },
    { q: "Wer spielt Marty McFly?", a: "Michael J. Fox" },
    { q: "Wer spielt Spider-Man im MCU?", a: "Tom Holland" },
    { q: "Wer spielt Thor?", a: "Chris Hemsworth" },
    { q: "Wer spielt Black Widow?", a: "Scarlett Johansson" },
    { q: "Wer spielt Deadpool?", a: "Ryan Reynolds" },
    { q: "Wer spielt Sherlock Holmes (Guy Ritchie Filme)?", a: "Robert Downey Jr." },
    { q: "Wer spielt Katniss Everdeen?", a: "Jennifer Lawrence" },
    { q: "Wer spielt Neo in 'Matrix'?", a: "Keanu Reeves" },
    { q: "Wer spielt James Bond in 'Skyfall'?", a: "Daniel Craig" },
    { q: "Wer spielt Pennywise (2017)?", a: "Bill Skarsgård" },
    { q: "Wer spielt Joker (2019)?", a: "Joaquin Phoenix" },
    { q: "Wer spielt Rocky Balboa?", a: "Sylvester Stallone" },
    { q: "Wer spielt Rambo?", a: "Sylvester Stallone" },
    { q: "Wer spielt Gandalf?", a: "Ian McKellen" },
    { q: "Wer spielt Frodo?", a: "Elijah Wood" },
    { q: "Wer spielt Darth Vader (Stimme)?", a: "James Earl Jones" },
    { q: "Wer spielt Indiana Jones?", a: "Harrison Ford" }
  ],

  200: [
    { q: "Wie heißt der Vater von Simba?", a: "Mufasa" },
    { q: "Wie heißt der Löwe aus 'Madagascar'?", a: "Alex" },
    { q: "Wie heißt der Fischvater in 'Findet Nemo'?", a: "Marlin" },
    { q: "Wie heißt der Roboter aus 'Wall-E'?", a: "Wall-E" },
    { q: "Wie heißt der Schneemann aus 'Die Eiskönigin'?", a: "Olaf" },
    { q: "Wie heißt der Affe aus 'Aladdin'?", a: "Abu" },
    { q: "Wie heißt der Drache aus 'Mulan'?", a: "Mushu" },
    { q: "Wie heißt der Tiger aus 'Aladdin'?", a: "Rajah" },
    { q: "Wie heißt der Bösewicht in 'König der Löwen'?", a: "Scar" },
    { q: "Wie heißt der Clownfisch aus 'Findet Nemo'?", a: "Nemo" },
    { q: "Wie heißt der Cowboy aus 'Toy Story'?", a: "Woody" },
    { q: "Wie heißt der Astronaut aus 'Toy Story'?", a: "Buzz Lightyear" },
    { q: "Wie heißt der Panda aus 'Kung Fu Panda'?", a: "Po" },
    { q: "Wie heißt der Faultier aus 'Ice Age'?", a: "Sid" },
    { q: "Wie heißt der Mammut aus 'Ice Age'?", a: "Manny" },
    { q: "Wie heißt der Säbelzahntiger aus 'Ice Age'?", a: "Diego" },
    { q: "Wie heißt der Roboter aus 'Big Hero 6'?", a: "Baymax" },
    { q: "Wie heißt der Bösewicht in 'Die Unglaublichen'?", a: "Syndrome" },
    { q: "Wie heißt der Fisch aus 'Findet Dorie'?", a: "Dorie" },
    { q: "Wie heißt der Drache aus 'Drachenzähmen leicht gemacht'?", a: "Ohnezahn" },
    { q: "Wie heißt der Junge aus 'Drachenzähmen leicht gemacht'?", a: "Hicks" },
    { q: "Wie heißt der Bösewicht in 'Aladdin'?", a: "Dschafar" },
    { q: "Wie heißt der Hund aus 'Oben'?", a: "Dug" },
    { q: "Wie heißt der Bösewicht in 'Rapunzel'?", a: "Mutter Gothel" },
    { q: "Wie heißt der Schneeleopard aus 'Kung Fu Panda'?", a: "Tai Lung" }
  ],

  300: [
    { q: "Wie heißt der Bösewicht in Star Wars?", a: "Darth Vader" },
    { q: "Wie heißt der Sith-Lord mit rotem Gesicht?", a: "Darth Maul" },
    { q: "Wie heißt der Meister von Obi-Wan?", a: "Qui-Gon Jinn" },
    { q: "Wie heißt der Mentor von Luke Skywalker?", a: "Obi-Wan Kenobi" },
    { q: "Wie heißt der grüne Jedi-Meister?", a: "Yoda" },
    { q: "Wie heißt der Droide aus Star Wars, der piept?", a: "R2-D2" },
    { q: "Wie heißt der goldene Droide aus Star Wars?", a: "C-3PO" },
    { q: "Wie heißt der Bösewicht in 'Avengers: Infinity War'?", a: "Thanos" },
    { q: "Wie heißt der Bösewicht in 'The Dark Knight'?", a: "Joker" },
    { q: "Wie heißt der Bösewicht in 'Spider-Man' (Green Goblin)?", a: "Norman Osborn" },
    { q: "Wie heißt der Bösewicht in 'Harry Potter 1'?", a: "Lord Voldemort" },
    { q: "Wie heißt der Zauberer, der Harry unterrichtet?", a: "Dumbledore" },
    { q: "Wie heißt der Halbriese in Harry Potter?", a: "Hagrid" },
    { q: "Wie heißt der Bösewicht in 'Batman Begins'?", a: "Ra's al Ghul" },
    { q: "Wie heißt der Bösewicht in 'Iron Man 1'?", a: "Obadiah Stane" },
    { q: "Wie heißt der Bösewicht in 'Thor 1'?", a: "Loki" },
    { q: "Wie heißt der Bösewicht in 'Black Panther'?", a: "Killmonger" },
    { q: "Wie heißt der Bösewicht in 'The Lion King'?", a: "Scar" },
    { q: "Wie heißt der Bösewicht in 'Frozen'?", a: "Hans" },
    { q: "Wie heißt der Bösewicht in 'Toy Story 1'?", a: "Sid" },
    { q: "Wie heißt der Bösewicht in 'Aladdin'?", a: "Dschafar" },
    { q: "Wie heißt der Bösewicht in 'Rapunzel'?", a: "Mutter Gothel" },
    { q: "Wie heißt der Bösewicht in 'Kung Fu Panda'?", a: "Tai Lung" },
    { q: "Wie heißt der Bösewicht in 'Shrek'?", a: "Lord Farquaad" },
    { q: "Wie heißt der Bösewicht in 'Die Unglaublichen'?", a: "Syndrome" }
  ],

  400: [
    { q: "Welcher Film gewann 1997 den Oscar für den besten Film?", a: "Titanic" },
    { q: "Welcher Film gewann 1994 den Oscar für den besten Film?", a: "Forrest Gump" },
    { q: "Welcher Film gewann 2001 den Oscar für den besten Film?", a: "Gladiator" },
    { q: "Welcher Film gewann 2004 den Oscar für den besten Film?", a: "Der Herr der Ringe: Die Rückkehr des Königs" },
    { q: "Welcher Film gewann 2010 den Oscar für den besten Film?", a: "The Hurt Locker" },
    { q: "Welcher Film gewann 2019 den Oscar für den besten Film?", a: "Green Book" },
    { q: "Welcher Film gewann 2020 den Oscar für den besten Film?", a: "Parasite" },
    { q: "Welcher Film gewann 2021 den Oscar für den besten Film?", a: "Nomadland" },
    { q: "Welcher Film gewann 2022 den Oscar für den besten Film?", a: "CODA" },
    { q: "Welcher Film gewann 2023 den Oscar für den besten Film?", a: "Everything Everywhere All at Once" },
    { q: "Welcher Film gewann den Oscar für die besten visuellen Effekte 2009?", a: "Avatar" },
    { q: "Welcher Film gewann den Oscar für den besten Animationsfilm 2010?", a: "Toy Story 3" },
    { q: "Welcher Film gewann den Oscar für den besten Animationsfilm 2014?", a: "Die Eiskönigin" },
    { q: "Welcher Film gewann den Oscar für den besten Animationsfilm 2018?", a: "Coco" },
    { q: "Welcher Film gewann den Oscar für den besten Animationsfilm 2023?", a: "Guillermo del Toro’s Pinocchio" },
    { q: "Welcher Film gewann den Oscar für den besten Soundtrack 1994?", a: "Der König der Löwen" },
    { q: "Welcher Film gewann den Oscar für den besten Soundtrack 2001?", a: "Der Herr der Ringe: Die Gefährten" },
    { q: "Welcher Film gewann den Oscar für den besten Soundtrack 2017?", a: "La La Land" },
    { q: "Welcher Film gewann den Oscar für den besten Soundtrack 2020?", a: "Joker" },
    { q: "Welcher Film gewann den Oscar für den besten Soundtrack 2022?", a: "Dune" },
    { q: "Welcher Film gewann den Oscar für den besten Schnitt 1999?", a: "Matrix" },
    { q: "Welcher Film gewann den Oscar für den besten Schnitt 2014?", a: "Whiplash" },
    { q: "Welcher Film gewann den Oscar für den besten Schnitt 2023?", a: "Everything Everywhere All at Once" },
    { q: "Welcher Film gewann den Oscar für die beste Regie 1998?", a: "Der Soldat James Ryan" },
    { q: "Welcher Film gewann den Oscar für die beste Regie 2020?", a: "Parasite" }
  ],

  500: [
    { q: "Welcher Film hat die höchsten Einnahmen aller Zeiten?", a: "Avatar" },
    { q: "Welcher Film hat die zweithöchsten Einnahmen aller Zeiten?", a: "Avengers: Endgame" },
    { q: "Welcher Film hat die dritthöchsten Einnahmen aller Zeiten?", a: "Titanic" },
    { q: "Welcher Film ist der erfolgreichste Animationsfilm aller Zeiten?", a: "Die Eiskönigin 2" },
    { q: "Welcher Film ist der erfolgreichste Superheldenfilm aller Zeiten?", a: "Avengers: Endgame" },
    { q: "Welcher Film ist der erfolgreichste Science-Fiction-Film aller Zeiten?", a: "Avatar" },
    { q: "Welcher Film ist der erfolgreichste Horrorfilm aller Zeiten?", a: "Es (2017)" },
    { q: "Welcher Film ist der erfolgreichste Comedyfilm aller Zeiten?", a: "Hangover" },
    { q: "Welcher Film ist der erfolgreichste Animationsfilm von Pixar?", a: "Die Unglaublichen 2" },
    { q: "Welcher Film ist der erfolgreichste Film von Disney?", a: "Die Eiskönigin 2" },
    { q: "Welcher Film ist der erfolgreichste Film von Marvel?", a: "Avengers: Endgame" },
    { q: "Welcher Film ist der erfolgreichste Film von DC?", a: "Aquaman" },
    { q: "Welcher Film ist der erfolgreichste Film von Universal?", a: "Jurassic World" },
    { q: "Welcher Film ist der erfolgreichste Film von Warner Bros?", a: "Harry Potter und die Heiligtümer des Todes – Teil 2" },
    { q: "Welcher Film ist der erfolgreichste Film von Sony?", a: "Spider-Man: No Way Home" },
    { q: "Welcher Film ist der erfolgreichste Film von Fox?", a: "Avatar" },
    { q: "Welcher Film ist der erfolgreichste Film von Paramount?", a: "Titanic" },
    { q: "Welcher Film ist der erfolgreichste Film von Lionsgate?", a: "Die Tribute von Panem – Catching Fire" },
    { q: "Welcher Film ist der erfolgreichste Film von Illumination?", a: "Minions" },
    { q: "Welcher Film ist der erfolgreichste Film von DreamWorks?", a: "Shrek 2" },
    { q: "Welcher Film ist der erfolgreichste Film der 90er?", a: "Titanic" },
    { q: "Welcher Film ist der erfolgreichste Film der 2000er?", a: "Avatar" },
    { q: "Welcher Film ist der erfolgreichste Film der 2010er?", a: "Avengers: Endgame" },
    { q: "Welcher Film ist der erfolgreichste Film der 2020er?", a: "Avatar: The Way of Water" },
    { q: "Welcher Film ist der erfolgreichste Film aller Zeiten inflationsbereinigt?", a: "Vom Winde verweht" }
  ],
},
"wissenschaft": {
  100: [
    { q: "Wie viele Planeten hat unser Sonnensystem?", a: "8" },
    { q: "Welches Gas atmen wir hauptsächlich ein?", a: "Stickstoff" },
    { q: "Welches Organ pumpt Blut durch den Körper?", a: "Herz" },
    { q: "Welches Element hat das Symbol O?", a: "Sauerstoff" },
    { q: "Welches Tier legt Eier?", a: "Vögel" },
    { q: "Welcher Planet ist der größte im Sonnensystem?", a: "Jupiter" },
    { q: "Welches Organ ist für das Denken verantwortlich?", a: "Gehirn" },
    { q: "Welches Element hat das Symbol H?", a: "Wasserstoff" },
    { q: "Welches Tier hat acht Beine?", a: "Spinne" },
    { q: "Welches Organ filtert Blut?", a: "Niere" },
    { q: "Welches Tier ist das größte an Land?", a: "Elefant" },
    { q: "Welches Tier ist das schnellste?", a: "Gepard" },
    { q: "Welches Organ ist für das Atmen verantwortlich?", a: "Lunge" },
    { q: "Welches Element hat das Symbol Fe?", a: "Eisen" },
    { q: "Welcher Planet ist der Sonne am nächsten?", a: "Merkur" },
    { q: "Welches Tier hat ein Horn?", a: "Nashorn" },
    { q: "Welches Organ produziert Insulin?", a: "Bauchspeicheldrüse" },
    { q: "Welches Element hat das Symbol Au?", a: "Gold" },
    { q: "Welches Tier hat einen Panzer?", a: "Schildkröte" },
    { q: "Welches Organ ist für das Sehen verantwortlich?", a: "Auge" },
    { q: "Welches Element hat das Symbol Na?", a: "Natrium" },
    { q: "Welches Tier ist ein Säugetier?", a: "Hund" },
    { q: "Welches Organ ist für das Hören verantwortlich?", a: "Ohr" },
    { q: "Welches Element hat das Symbol C?", a: "Kohlenstoff" },
    { q: "Welches Tier lebt im Wasser?", a: "Fisch" }
  ],

  200: [
    { q: "Wie heißt der Prozess, bei dem Pflanzen Energie aus Licht gewinnen?", a: "Photosynthese" },
    { q: "Wie heißt die Kraft, die uns auf der Erde hält?", a: "Gravitation" },
    { q: "Wie heißt das Gas, das Pflanzen ausstoßen?", a: "Sauerstoff" },
    { q: "Wie heißt das Gas, das Menschen ausstoßen?", a: "Kohlenstoffdioxid" },
    { q: "Wie heißt die Flüssigkeit, die Blut transportiert?", a: "Plasma" },
    { q: "Wie heißt die kleinste Einheit des Lebens?", a: "Zelle" },
    { q: "Wie heißt der Prozess, bei dem Wasser verdunstet?", a: "Evaporation" },
    { q: "Wie heißt der Prozess, bei dem Wasser zu Eis wird?", a: "Gefrieren" },
    { q: "Wie heißt der Prozess, bei dem Eis zu Wasser wird?", a: "Schmelzen" },
    { q: "Wie heißt die Kraft, die Elektronen bewegt?", a: "Elektrizität" },
    { q: "Wie heißt die Energieform, die Wärme erzeugt?", a: "Thermische Energie" },
    { q: "Wie heißt die Energieform, die Bewegung erzeugt?", a: "Kinetische Energie" },
    { q: "Wie heißt die Energieform, die Lage erzeugt?", a: "Potentielle Energie" },
    { q: "Wie heißt die Wissenschaft der Sterne?", a: "Astronomie" },
    { q: "Wie heißt die Wissenschaft der Lebewesen?", a: "Biologie" },
    { q: "Wie heißt die Wissenschaft der Stoffe?", a: "Chemie" },
    { q: "Wie heißt die Wissenschaft der Kräfte?", a: "Physik" },
    { q: "Wie heißt die Wissenschaft der Erde?", a: "Geologie" },
    { q: "Wie heißt die Wissenschaft der Pflanzen?", a: "Botanik" },
    { q: "Wie heißt die Wissenschaft der Tiere?", a: "Zoologie" },
    { q: "Wie heißt die Wissenschaft der Krankheiten?", a: "Medizin" },
    { q: "Wie heißt die Wissenschaft der Zahlen?", a: "Mathematik" },
    { q: "Wie heißt die Wissenschaft der Gene?", a: "Genetik" },
    { q: "Wie heißt die Wissenschaft der Umwelt?", a: "Ökologie" },
    { q: "Wie heißt die Wissenschaft der Atome?", a: "Atomphysik" }
  ],

  300: [
    { q: "Wie heißt das größte Organ des Menschen?", a: "Haut" },
    { q: "Wie heißt das stärkste Muskelorgan des Menschen?", a: "Herz" },
    { q: "Wie heißt die Struktur, die DNA enthält?", a: "Chromosomen" },
    { q: "Wie heißt der Prozess, bei dem Zellen sich teilen?", a: "Mitose" },
    { q: "Wie heißt der Prozess, bei dem Keimzellen entstehen?", a: "Meiose" },
    { q: "Wie heißt das Organ, das Hormone produziert?", a: "Hypophyse" },
    { q: "Wie heißt das Organ, das Blut reinigt?", a: "Niere" },
    { q: "Wie heißt das Organ, das Galle produziert?", a: "Leber" },
    { q: "Wie heißt das Organ, das Nahrung verdaut?", a: "Magen" },
    { q: "Wie heißt das Organ, das Sauerstoff transportiert?", a: "Blut" },
    { q: "Wie heißt die Struktur, die Nerven verbindet?", a: "Synapsen" },
    { q: "Wie heißt die Struktur, die Signale im Gehirn überträgt?", a: "Neuronen" },
    { q: "Wie heißt die Struktur, die Licht im Auge bricht?", a: "Linse" },
    { q: "Wie heißt die Struktur, die Schall im Ohr überträgt?", a: "Trommelfell" },
    { q: "Wie heißt die Struktur, die Knochen verbindet?", a: "Gelenke" },
    { q: "Wie heißt die Struktur, die Muskeln mit Knochen verbindet?", a: "Sehnen" },
    { q: "Wie heißt die Struktur, die Knochen mit Knochen verbindet?", a: "Bänder" },
    { q: "Wie heißt die Struktur, die Blut bildet?", a: "Knochenmark" },
    { q: "Wie heißt die Struktur, die Hormone steuert?", a: "Hypothalamus" },
    { q: "Wie heißt die Struktur, die Atmung steuert?", a: "Medulla oblongata" },
    { q: "Wie heißt die Struktur, die Gleichgewicht steuert?", a: "Kleinhirn" },
    { q: "Wie heißt die Struktur, die Emotionen steuert?", a: "Amygdala" },
    { q: "Wie heißt die Struktur, die Erinnerungen speichert?", a: "Hippocampus" },
    { q: "Wie heißt die Struktur, die Blutdruck steuert?", a: "Herz" },
    { q: "Wie heißt die Struktur, die Körpertemperatur steuert?", a: "Hypothalamus" }
  ],

  400: [
    { q: "Welches Element hat die höchste Dichte?", a: "Osmium" },
    { q: "Welches Element ist das leichteste?", a: "Wasserstoff" },
    { q: "Welches Element ist das härteste natürlich vorkommende?", a: "Diamant" },
    { q: "Welches Element ist das häufigste im Universum?", a: "Wasserstoff" },
    { q: "Welches Element ist das häufigste in der Erdkruste?", a: "Sauerstoff" },
    { q: "Welches Element ist das häufigste im menschlichen Körper?", a: "Sauerstoff" },
    { q: "Welches Element ist radioaktiv und bekannt aus Kernkraftwerken?", a: "Uran" },
    { q: "Welches Element wird in Atomuhren verwendet?", a: "Cäsium" },
    { q: "Welches Element ist für rote Blutkörperchen wichtig?", a: "Eisen" },
    { q: "Welches Element ist für Knochen wichtig?", a: "Kalzium" },
    { q: "Welches Element ist für Schilddrüsen wichtig?", a: "Jod" },
    { q: "Welches Element ist für elektrische Leitfähigkeit bekannt?", a: "Kupfer" },
    { q: "Welches Element ist für Batterien wichtig?", a: "Lithium" },
    { q: "Welches Element ist für Halbleiter wichtig?", a: "Silizium" },
    { q: "Welches Element ist für Edelmetalle bekannt?", a: "Gold" },
    { q: "Welches Element ist für Schmuck bekannt?", a: "Silber" },
    { q: "Welches Element ist für Münzen bekannt?", a: "Nickel" },
    { q: "Welches Element ist für Glasherstellung wichtig?", a: "Silizium" },
    { q: "Welches Element ist für Dünger wichtig?", a: "Phosphor" },
    { q: "Welches Element ist für Pflanzenwachstum wichtig?", a: "Stickstoff" },
    { q: "Welches Element ist für Atmung wichtig?", a: "Sauerstoff" },
    { q: "Welches Element ist für Feuer wichtig?", a: "Sauerstoff" },
    { q: "Welches Element ist für Leben wichtig?", a: "Kohlenstoff" },
    { q: "Welches Element ist für DNA wichtig?", a: "Phosphor" },
    { q: "Welches Element ist für Proteine wichtig?", a: "Stickstoff" }
  ],

  500: [
    { q: "Welches ist das größte bekannte Sternsystem?", a: "IC 1101" },
    { q: "Welches ist der heißeste Planet im Sonnensystem?", a: "Venus" },
    { q: "Welches ist der kälteste Planet im Sonnensystem?", a: "Neptun" },
    { q: "Welches ist der schnellste Planet im Sonnensystem?", a: "Merkur" },
    { q: "Welches ist der langsamste Planet im Sonnensystem?", a: "Neptun" },
    { q: "Welches ist der größte Mond im Sonnensystem?", a: "Ganymed" },
    { q: "Welches ist der aktivste Vulkan im Sonnensystem?", a: "Io" },
    { q: "Welches ist der hellste Stern am Himmel?", a: "Sirius" },
    { q: "Welches ist der nächste Stern zur Erde?", a: "Proxima Centauri" },
    { q: "Welches ist die größte Galaxie in unserer Nähe?", a: "Andromeda" },
    { q: "Welches ist das größte Teleskop der Welt?", a: "James-Webb-Teleskop" },
    { q: "Welches ist das größte Teilchenforschungszentrum?", a: "CERN" },
    { q: "Welches ist das schnellste Teilchen im Universum?", a: "Photon" },
    { q: "Welches ist die stärkste Kraft im Universum?", a: "Starke Kernkraft" },
    { q: "Welches ist die schwächste Kraft im Universum?", a: "Gravitation" },
    { q: "Welches ist die kleinste Einheit der Materie?", a: "Quark" },
    { q: "Welches ist die kleinste Einheit der Energie?", a: "Photon" },
    { q: "Welches ist die kleinste Einheit der Information?", a: "Bit" },
    { q: "Welches ist die kleinste Einheit der Zeit?", a: "Planck-Zeit" },
    { q: "Welches ist die kleinste Einheit der Länge?", a: "Planck-Länge" },
    { q: "Welches ist die größte Struktur im Universum?", a: "Kosmisches Netz" },
    { q: "Welches ist die älteste bekannte Galaxie?", a: "GN-z11" },
    { q: "Welches ist die älteste bekannte Sternengruppe?", a: "Kugelsternhaufen" },
    { q: "Welches ist die älteste bekannte Fossilart?", a: "Cyanobakterien" },
    { q: "Welches ist die älteste bekannte Lebensform?", a: "Einzeller" }
  ]
},
"essen & Trinken": {
  100: [
    { q: "Welches Obst ist gelb und krumm?", a: "Banane" },
    { q: "Welches Getränk wird aus Trauben hergestellt?", a: "Wein" },
    { q: "Welches Gemüse ist orange und lang?", a: "Karotte" },
    { q: "Welches Getränk enthält Koffein?", a: "Kaffee" },
    { q: "Welches Obst ist rot und hat Kerne?", a: "Apfel" },
    { q: "Welches Getränk ist typisch für Bayern?", a: "Bier" },
    { q: "Welches Gericht besteht aus Nudeln und Tomatensoße?", a: "Spaghetti" },
    { q: "Welches Obst ist grün und hat eine raue Schale?", a: "Kiwi" },
    { q: "Welches Getränk ist klar und lebenswichtig?", a: "Wasser" },
    { q: "Welches Gemüse hat Schichten?", a: "Zwiebel" },
    { q: "Welches Obst ist groß und hat eine harte Schale?", a: "Wassermelone" },
    { q: "Welches Getränk wird aus Äpfeln gemacht?", a: "Apfelsaft" },
    { q: "Welches Gericht kommt aus Italien und hat Käse?", a: "Pizza" },
    { q: "Welches Getränk ist schwarz und bitter?", a: "Kaffee" },
    { q: "Welches Obst ist klein und blau?", a: "Blaubeere" },
    { q: "Welches Gemüse ist grün und baumartig?", a: "Brokkoli" },
    { q: "Welches Getränk ist süß und mit Kohlensäure?", a: "Limonade" },
    { q: "Welches Obst hat eine harte Schale und weiße Innenhaut?", a: "Kokosnuss" },
    { q: "Welches Gemüse ist rot und rund?", a: "Tomate" },
    { q: "Welches Getränk wird aus Hopfen gemacht?", a: "Bier" },
    { q: "Welches Obst ist bekannt aus Smoothies?", a: "Banane" },
    { q: "Welches Gemüse ist bekannt aus Salaten?", a: "Gurke" },
    { q: "Welches Getränk ist typisch zum Frühstück?", a: "Orangensaft" },
    { q: "Welches Obst ist bekannt für Vitamin C?", a: "Orange" },
    { q: "Welches Getränk ist heiß und wird aus Blättern gemacht?", a: "Tee" }
  ],

  200: [
    { q: "Welches Land ist für Pizza bekannt?", a: "Italien" },
    { q: "Welches Land ist für Sushi bekannt?", a: "Japan" },
    { q: "Welches Land ist für Tacos bekannt?", a: "Mexiko" },
    { q: "Welches Land ist für Curry bekannt?", a: "Indien" },
    { q: "Welches Land ist für Croissants bekannt?", a: "Frankreich" },
    { q: "Welches Getränk wird aus Gerste hergestellt?", a: "Bier" },
    { q: "Welches Getränk wird aus Kakaobohnen hergestellt?", a: "Kakao" },
    { q: "Welches Getränk wird aus Trauben vergoren?", a: "Wein" },
    { q: "Welches Getränk wird aus Zuckerrohr hergestellt?", a: "Rum" },
    { q: "Welches Getränk wird aus Kartoffeln hergestellt?", a: "Wodka" },
    { q: "Welches Gericht besteht aus Reis und rohem Fisch?", a: "Sushi" },
    { q: "Welches Gericht besteht aus Nudeln und Käse?", a: "Mac and Cheese" },
    { q: "Welches Gericht besteht aus Brot, Fleisch und Salat?", a: "Burger" },
    { q: "Welches Gericht besteht aus Kartoffeln und Öl?", a: "Pommes" },
    { q: "Welches Gericht besteht aus Teig und Käsefüllung?", a: "Calzone" },
    { q: "Welches Obst wird oft zu Marmelade verarbeitet?", a: "Erdbeere" },
    { q: "Welches Gemüse wird oft zu Pommes verarbeitet?", a: "Kartoffel" },
    { q: "Welches Getränk enthält viel Zucker?", a: "Cola" },
    { q: "Welches Getränk enthält Vitamin C?", a: "Orangensaft" },
    { q: "Welches Obst hat viele kleine Kerne außen?", a: "Erdbeere" },
    { q: "Welches Gemüse hat viele kleine Röschen?", a: "Blumenkohl" },
    { q: "Welches Obst ist bekannt aus Obstsalat?", a: "Apfel" },
    { q: "Welches Getränk ist typisch für Partys?", a: "Sekt" },
    { q: "Welches Getränk ist typisch für Kinder?", a: "Kakao" },
    { q: "Welches Obst ist bekannt für Smoothie Bowls?", a: "Beeren" }
  ],

  300: [
    { q: "Welches Vitamin bekommt man durch Sonnenlicht?", a: "Vitamin D" },
    { q: "Welches Vitamin ist wichtig für die Augen?", a: "Vitamin A" },
    { q: "Welches Vitamin ist wichtig für das Immunsystem?", a: "Vitamin C" },
    { q: "Welches Vitamin ist wichtig für die Knochen?", a: "Vitamin D" },
    { q: "Welches Vitamin ist wichtig für die Blutbildung?", a: "Vitamin B12" },
    { q: "Welches Mineral ist wichtig für Knochen?", a: "Kalzium" },
    { q: "Welches Mineral ist wichtig für Blut?", a: "Eisen" },
    { q: "Welches Mineral ist wichtig für Muskeln?", a: "Magnesium" },
    { q: "Welches Mineral ist wichtig für Schilddrüsen?", a: "Jod" },
    { q: "Welches Mineral ist wichtig für Nerven?", a: "Kalium" },
    { q: "Welches Lebensmittel enthält viel Protein?", a: "Eier" },
    { q: "Welches Lebensmittel enthält viel Kohlenhydrate?", a: "Reis" },
    { q: "Welches Lebensmittel enthält viel Fett?", a: "Avocado" },
    { q: "Welches Lebensmittel enthält viel Zucker?", a: "Schokolade" },
    { q: "Welches Lebensmittel enthält viel Ballaststoffe?", a: "Haferflocken" },
    { q: "Welches Getränk enthält Antioxidantien?", a: "Grüner Tee" },
    { q: "Welches Getränk enthält viel Zucker?", a: "Limonade" },
    { q: "Welches Getränk enthält Elektrolyte?", a: "Sportgetränke" },
    { q: "Welches Getränk enthält Alkohol?", a: "Bier" },
    { q: "Welches Getränk enthält Kohlensäure?", a: "Mineralwasser" },
    { q: "Welches Obst enthält viel Vitamin C?", a: "Orange" },
    { q: "Welches Gemüse enthält viel Vitamin K?", a: "Spinat" },
    { q: "Welches Obst enthält viel Kalium?", a: "Banane" },
    { q: "Welches Gemüse enthält viel Eisen?", a: "Spinat" },
    { q: "Welches Obst enthält viele Antioxidantien?", a: "Blaubeeren" }
  ],

  400: [
    { q: "Welches Land konsumiert weltweit am meisten Kaffee?", a: "Finnland" },
    { q: "Welches Land konsumiert weltweit am meisten Schokolade?", a: "Schweiz" },
    { q: "Welches Land konsumiert weltweit am meisten Käse?", a: "Frankreich" },
    { q: "Welches Land konsumiert weltweit am meisten Bier?", a: "Tschechien" },
    { q: "Welches Land konsumiert weltweit am meisten Wein?", a: "Italien" },
    { q: "Welches Land konsumiert weltweit am meisten Tee?", a: "China" },
    { q: "Welches Land konsumiert weltweit am meisten Fleisch?", a: "USA" },
    { q: "Welches Land konsumiert weltweit am meisten Fisch?", a: "Japan" },
    { q: "Welches Land konsumiert weltweit am meisten Brot?", a: "Deutschland" },
    { q: "Welches Land konsumiert weltweit am meisten Nudeln?", a: "Italien" },
    { q: "Welches Land konsumiert weltweit am meisten Reis?", a: "China" },
    { q: "Welches Land konsumiert weltweit am meisten Kartoffeln?", a: "Deutschland" },
    { q: "Welches Land konsumiert weltweit am meisten Olivenöl?", a: "Spanien" },
    { q: "Welches Land konsumiert weltweit am meisten Tomaten?", a: "China" },
    { q: "Welches Land konsumiert weltweit am meisten Bananen?", a: "Indien" },
    { q: "Welches Land konsumiert weltweit am meisten Zucker?", a: "Brasilien" },
    { q: "Welches Land konsumiert weltweit am meisten Salz?", a: "China" },
    { q: "Welches Land konsumiert weltweit am meisten Milch?", a: "USA" },
    { q: "Welches Land konsumiert weltweit am meisten Joghurt?", a: "Türkei" },
    { q: "Welches Land konsumiert weltweit am meisten Käse pro Kopf?", a: "Frankreich" },
    { q: "Welches Land konsumiert weltweit am meisten Kaffee pro Kopf?", a: "Finnland" },
    { q: "Welches Land konsumiert weltweit am meisten Bier pro Kopf?", a: "Tschechien" },
    { q: "Welches Land konsumiert weltweit am meisten Tee pro Kopf?", a: "Türkei" },
    { q: "Welches Land konsumiert weltweit am meisten Schokolade pro Kopf?", a: "Schweiz" },
    { q: "Welches Land konsumiert weltweit am meisten Wein pro Kopf?", a: "Portugal" }
  ],

  500: [
    { q: "Welches ist das teuerste Gewürz der Welt?", a: "Safran" },
    { q: "Welches ist das teuerste Fleisch der Welt?", a: "Wagyu" },
    { q: "Welches ist das teuerste Obst der Welt?", a: "Yubari-Melone" },
    { q: "Welches ist das teuerste Gemüse der Welt?", a: "Hopfenspargel" },
    { q: "Welches ist das teuerste Getränk der Welt?", a: "Isabella Islay Whisky" },
    { q: "Welches ist das schärfste Chili der Welt?", a: "Carolina Reaper" },
    { q: "Welches ist das süßeste Obst der Welt?", a: "Mango" },
    { q: "Welches ist das bitterste Getränk der Welt?", a: "Wermut" },
    { q: "Welches ist das proteinreichste Lebensmittel?", a: "Sojabohnen" },
    { q: "Welches ist das kohlenhydratreichste Lebensmittel?", a: "Reis" },
    { q: "Welches ist das fettreichste Lebensmittel?", a: "Butter" },
    { q: "Welches ist das salzreichste Lebensmittel?", a: "Sojasauce" },
    { q: "Welches ist das wasserreichste Lebensmittel?", a: "Gurke" },
    { q: "Welches ist das vitaminreichste Obst?", a: "Acerola" },
    { q: "Welches ist das mineralreichste Gemüse?", a: "Spinat" },
    { q: "Welches ist das antioxidantienreichste Obst?", a: "Blaubeeren" },
    { q: "Welches ist das nährstoffreichste Lebensmittel?", a: "Leber" },
    { q: "Welches ist das kalorienreichste Lebensmittel?", a: "Nüsse" },
    { q: "Welches ist das kalorienärmste Lebensmittel?", a: "Sellerie" },
    { q: "Welches ist das meistverkaufte Getränk der Welt?", a: "Wasser" },
    { q: "Welches ist das meistverkaufte Obst der Welt?", a: "Banane" },
    { q: "Welches ist das meistverkaufte Gemüse der Welt?", a: "Tomate" },
    { q: "Welches ist das meistverkaufte Gewürz der Welt?", a: "Pfeffer" },
    { q: "Welches ist das meistverkaufte Fleisch der Welt?", a: "Hähnchen" },
    { q: "Welches ist das meistverkaufte Getreide der Welt?", a: "Mais" }
  ]
},
"gaming": {
  100: [
    { q: "Wie heißt der Klempner aus Nintendo?", a: "Mario" },
    { q: "Wie heißt der grüne Dino aus Mario?", a: "Yoshi" },
    { q: "Wie heißt der Bruder von Mario?", a: "Luigi" },
    { q: "Wie heißt der Held aus Zelda?", a: "Link" },
    { q: "Wie heißt die Prinzessin aus Mario?", a: "Peach" },
    { q: "Wie heißt der Igel von Sega?", a: "Sonic" },
    { q: "Wie heißt die Konsole von Sony?", a: "PlayStation" },
    { q: "Wie heißt die Konsole von Microsoft?", a: "Xbox" },
    { q: "Wie heißt die Konsole von Nintendo?", a: "Switch" },
    { q: "Wie heißt das bekannteste Spiel von Mojang?", a: "Minecraft" },
    { q: "Wie heißt das bekannteste Battle Royale?", a: "Fortnite" },
    { q: "Wie heißt das bekannteste Fußballspiel?", a: "FIFA" },
    { q: "Wie heißt das bekannteste Rennspiel?", a: "Mario Kart" },
    { q: "Wie heißt das bekannteste Sandbox-Spiel?", a: "Minecraft" },
    { q: "Wie heißt das bekannteste Shooter-Spiel?", a: "Call of Duty" },
    { q: "Wie heißt das bekannteste Bauernhof-Spiel?", a: "Stardew Valley" },
    { q: "Wie heißt das bekannteste MOBA-Spiel?", a: "League of Legends" },
    { q: "Wie heißt das bekannteste Kartenspiel online?", a: "Hearthstone" },
    { q: "Wie heißt das bekannteste Rhythmusspiel?", a: "Just Dance" },
    { q: "Wie heißt das bekannteste Horror-Indie-Spiel?", a: "Five Nights at Freddy's" },
    { q: "Wie heißt das bekannteste Jump’n’Run?", a: "Super Mario Bros." },
    { q: "Wie heißt das bekannteste Open-World-Spiel?", a: "GTA V" },
    { q: "Wie heißt das bekannteste VR-Spiel?", a: "Beat Saber" },
    { q: "Wie heißt das bekannteste Pokémon-Spiel?", a: "Pokémon Rot/Blau" },
    { q: "Wie heißt das bekannteste Blockspiel?", a: "Minecraft" }
  ],

  200: [
    { q: "Wie heißt der Endboss in Minecraft?", a: "Enderdrache" },
    { q: "Wie heißt die Würfelwelt in Minecraft?", a: "Overworld" },
    { q: "Wie heißt die Hölle in Minecraft?", a: "Nether" },
    { q: "Wie heißt die Enddimension in Minecraft?", a: "End" },
    { q: "Wie heißt der Entwickler von Minecraft?", a: "Markus Persson (Notch)" },
    { q: "Wie heißt die Firma hinter Minecraft?", a: "Mojang" },
    { q: "Wie heißt die Firma hinter Fortnite?", a: "Epic Games" },
    { q: "Wie heißt die Firma hinter League of Legends?", a: "Riot Games" },
    { q: "Wie heißt die Firma hinter GTA?", a: "Rockstar Games" },
    { q: "Wie heißt die Firma hinter FIFA?", a: "EA Sports" },
    { q: "Wie heißt die Firma hinter Call of Duty?", a: "Activision" },
    { q: "Wie heißt die Firma hinter Pokémon?", a: "Game Freak" },
    { q: "Wie heißt die Firma hinter Mario?", a: "Nintendo" },
    { q: "Wie heißt die Firma hinter Sonic?", a: "Sega" },
    { q: "Wie heißt die Firma hinter The Witcher?", a: "CD Projekt Red" },
    { q: "Wie heißt die Firma hinter Cyberpunk 2077?", a: "CD Projekt Red" },
    { q: "Wie heißt die Firma hinter Fortnite?", a: "Epic Games" },
    { q: "Wie heißt die Firma hinter Overwatch?", a: "Blizzard" },
    { q: "Wie heißt die Firma hinter World of Warcraft?", a: "Blizzard" },
    { q: "Wie heißt die Firma hinter Clash of Clans?", a: "Supercell" },
    { q: "Wie heißt die Firma hinter Brawl Stars?", a: "Supercell" },
    { q: "Wie heißt die Firma hinter Roblox?", a: "Roblox Corporation" },
    { q: "Wie heißt die Firma hinter Valorant?", a: "Riot Games" },
    { q: "Wie heißt die Firma hinter Apex Legends?", a: "Respawn Entertainment" },
    { q: "Wie heißt die Firma hinter Elden Ring?", a: "FromSoftware" }
  ],

  300: [
    { q: "Wie heißt die Währung in Fortnite?", a: "V-Bucks" },
    { q: "Wie heißt die Währung in League of Legends?", a: "Blue Essence" },
    { q: "Wie heißt die Währung in GTA Online?", a: "GTA-Dollar" },
    { q: "Wie heißt die Währung in Pokémon?", a: "Pokédollar" },
    { q: "Wie heißt die Währung in Roblox?", a: "Robux" },
    { q: "Wie heißt die Währung in Clash of Clans?", a: "Juwelen" },
    { q: "Wie heißt die Währung in Brawl Stars?", a: "Gems" },
    { q: "Wie heißt die Währung in Minecraft?", a: "Emeralds" },
    { q: "Wie heißt die Währung in Elden Ring?", a: "Runen" },
    { q: "Wie heißt die Währung in World of Warcraft?", a: "Gold" },
    { q: "Wie heißt die Währung in Valorant?", a: "VP (Valorant Points)" },
    { q: "Wie heißt die Währung in Overwatch?", a: "Credits" },
    { q: "Wie heißt die Währung in FIFA Ultimate Team?", a: "Coins" },
    { q: "Wie heißt die Währung in Apex Legends?", a: "Apex Coins" },
    { q: "Wie heißt die Währung in Rocket League?", a: "Credits" },
    { q: "Wie heißt die Währung in Skyrim?", a: "Septims" },
    { q: "Wie heißt die Währung in The Witcher 3?", a: "Kronen" },
    { q: "Wie heißt die Währung in Cyberpunk 2077?", a: "Eurodollar" },
    { q: "Wie heißt die Währung in Animal Crossing?", a: "Sternis" },
    { q: "Wie heißt die Währung in Mario Kart?", a: "Münzen" },
    { q: "Wie heißt die Währung in Zelda?", a: "Rubine" },
    { q: "Wie heißt die Währung in Fallout?", a: "Bottle Caps" },
    { q: "Wie heißt die Währung in Diablo?", a: "Gold" },
    { q: "Wie heißt die Währung in Path of Exile?", a: "Orbs" },
    { q: "Wie heißt die Währung in Roblox Adopt Me?", a: "Bucks" }
  ],

  400: [
    { q: "Welches Spiel ist das meistverkaufte der Welt?", a: "Minecraft" },
    { q: "Welches Spiel ist das meistverkaufte Konsolenspiel?", a: "Wii Sports" },
    { q: "Welches Spiel ist das meistverkaufte PlayStation-Spiel?", a: "GTA V" },
    { q: "Welches Spiel ist das meistverkaufte Nintendo-Spiel?", a: "Mario Kart 8 Deluxe" },
    { q: "Welches Spiel ist das meistverkaufte PC-Spiel?", a: "Minecraft" },
    { q: "Welches Spiel hat die meisten Spieler weltweit?", a: "Roblox" },
    { q: "Welches Spiel hat die meisten täglichen Spieler?", a: "Fortnite" },
    { q: "Welches Spiel hat die meisten eSports-Spieler?", a: "League of Legends" },
    { q: "Welches Spiel hat die meisten Turnierpreise?", a: "Dota 2" },
    { q: "Welches Spiel hat die meisten Twitch-Zuschauer?", a: "League of Legends" },
    { q: "Welches Spiel hat die meisten YouTube-Views?", a: "Minecraft" },
    { q: "Welches Spiel hat die meisten Speedruns?", a: "Super Mario 64" },
    { q: "Welches Spiel hat die meisten Mods?", a: "Minecraft" },
    { q: "Welches Spiel hat die größte Open World?", a: "Elden Ring" },
    { q: "Welches Spiel hat die längste Story?", a: "Red Dead Redemption 2" },
    { q: "Welches Spiel hat die meisten Charaktere?", a: "Super Smash Bros. Ultimate" },
    { q: "Welches Spiel hat die meisten Waffen?", a: "Borderlands 2" },
    { q: "Welches Spiel hat die meisten Level?", a: "Candy Crush" },
    { q: "Welches Spiel hat die meisten Skins?", a: "Fortnite" },
    { q: "Welches Spiel hat die meisten Updates?", a: "Fortnite" },
    { q: "Welches Spiel hat die meisten DLCs?", a: "The Sims 4" },
    { q: "Welches Spiel hat die meisten Bosse?", a: "Dark Souls" },
    { q: "Welches Spiel hat die meisten Enden?", a: "Detroit: Become Human" },
    { q: "Welches Spiel hat die meisten Dialoge?", a: "Baldur's Gate 3" },
    { q: "Welches Spiel hat die meisten Quests?", a: "The Witcher 3" }
  ],

  500: [
    { q: "Welches Spiel hat das höchste eSports-Preisgeld aller Zeiten?", a: "Dota 2 (The International)" },
    { q: "Welches Spiel hat die größte Map aller Zeiten?", a: "Fuel" },
    { q: "Welches Spiel hat die meisten registrierten Accounts?", a: "Roblox" },
    { q: "Welches Spiel hat die meisten gleichzeitigen Spieler?", a: "PUBG" },
    { q: "Welches Spiel hat die meisten Verkäufe in einem Jahr?", a: "GTA V" },
    { q: "Welches Spiel hat die meisten Verkäufe in 24 Stunden?", a: "GTA V" },
    { q: "Welches Spiel hat die meisten Verkäufe in einer Woche?", a: "Cyberpunk 2077" },
    { q: "Welches Spiel hat die meisten Verkäufe auf Steam?", a: "Counter-Strike: Global Offensive" },
    { q: "Welches Spiel hat die meisten Spieler auf Steam?", a: "CS:GO" },
    { q: "Welches Spiel hat die meisten Spieler auf Xbox?", a: "Fortnite" },
    { q: "Welches Spiel hat die meisten Spieler auf PlayStation?", a: "FIFA" },
    { q: "Welches Spiel hat die meisten Spieler auf Nintendo?", a: "Mario Kart 8 Deluxe" },
    { q: "Welches Spiel hat die meisten Spieler auf Mobile?", a: "Candy Crush" },
    { q: "Welches Spiel hat die meisten Einnahmen aller Zeiten?", a: "Fortnite" },
    { q: "Welches Spiel hat die meisten Downloads aller Zeiten?", a: "Subway Surfers" },
    { q: "Welches Spiel hat die meisten täglichen Mobile-Spieler?", a: "Roblox" },
    { q: "Welches Spiel hat die meisten täglichen Konsolenspieler?", a: "Fortnite" },
    { q: "Welches Spiel hat die meisten täglichen PC-Spieler?", a: "League of Legends" },
    { q: "Welches Spiel hat die meisten täglichen VR-Spieler?", a: "Beat Saber" },
    { q: "Welches Spiel hat die meisten täglichen Switch-Spieler?", a: "Mario Kart 8 Deluxe" },
    { q: "Welches Spiel hat die meisten täglichen PlayStation-Spieler?", a: "Fortnite" },
    { q: "Welches Spiel hat die meisten täglichen Xbox-Spieler?", a: "Fortnite" },
    { q: "Welches Spiel hat die meisten täglichen Steam-Spieler?", a: "CS:GO" },
    { q: "Welches Spiel hat die meisten täglichen Mobile-Downloads?", a: "Subway Surfers" },
    { q: "Welches Spiel hat die meisten täglichen Roblox-Spieler?", a: "Brookhaven" }
  ]
},
"kunst & Kultur": {
  100: [
    { q: "Wie heißt der Maler der Mona Lisa?", a: "Leonardo da Vinci" },
    { q: "Wie heißt der Künstler, der die Sternennacht malte?", a: "Vincent van Gogh" },
    { q: "Wie heißt der Künstler, der den Schrei malte?", a: "Edvard Munch" },
    { q: "Wie heißt der Künstler, der die Sixtinische Kapelle bemalte?", a: "Michelangelo" },
    { q: "Wie heißt der Künstler, der die Guernica malte?", a: "Pablo Picasso" },
    { q: "Wie heißt der Künstler, der die Campbell’s Soup Cans schuf?", a: "Andy Warhol" },
    { q: "Wie heißt der Künstler, der die Wasserlilien malte?", a: "Claude Monet" },
    { q: "Wie heißt der Künstler, der die David‑Statue schuf?", a: "Michelangelo" },
    { q: "Wie heißt der Künstler, der die Nachtwache malte?", a: "Rembrandt" },
    { q: "Wie heißt der Künstler, der die Geburt der Venus malte?", a: "Sandro Botticelli" },
    { q: "Wie heißt der Künstler, der die amerikanische Gothic malte?", a: "Grant Wood" },
    { q: "Wie heißt der Künstler, der die Sonnenblumen malte?", a: "Vincent van Gogh" },
    { q: "Wie heißt der Künstler, der die Mädchen mit dem Perlenohrring malte?", a: "Johannes Vermeer" },
    { q: "Wie heißt der Künstler, der die Denker‑Skulptur schuf?", a: "Auguste Rodin" },
    { q: "Wie heißt der Künstler, der die Brücke von Arles malte?", a: "Vincent van Gogh" },
    { q: "Wie heißt der Künstler, der die Dali‑Uhren malte?", a: "Salvador Dalí" },
    { q: "Wie heißt der Künstler, der die Freiheit führt das Volk malte?", a: "Eugène Delacroix" },
    { q: "Wie heißt der Künstler, der die Nighthawks malte?", a: "Edward Hopper" },
    { q: "Wie heißt der Künstler, der die große Welle von Kanagawa schuf?", a: "Hokusai" },
    { q: "Wie heißt der Künstler, der die Vitruvianische Mensch zeichnete?", a: "Leonardo da Vinci" },
    { q: "Wie heißt der Künstler, der die Sagrada Família entwarf?", a: "Antoni Gaudí" },
    { q: "Wie heißt der Künstler, der die Brandenburger Tor‑Quadriga schuf?", a: "Johann Gottfried Schadow" },
    { q: "Wie heißt der Künstler, der die Berliner Siegessäule entwarf?", a: "Heinrich Strack" },
    { q: "Wie heißt der Künstler, der die Freiheitsstatue entwarf?", a: "Frédéric Auguste Bartholdi" },
    { q: "Wie heißt der Künstler, der den Eiffelturm entwarf?", a: "Gustave Eiffel" }
  ],

  200: [
    { q: "Wie heißt die Kunstrichtung von Picasso?", a: "Kubismus" },
    { q: "Wie heißt die Kunstrichtung von Monet?", a: "Impressionismus" },
    { q: "Wie heißt die Kunstrichtung von Dalí?", a: "Surrealismus" },
    { q: "Wie heißt die Kunstrichtung von Kandinsky?", a: "Abstrakte Kunst" },
    { q: "Wie heißt die Kunstrichtung von Rembrandt?", a: "Barock" },
    { q: "Wie heißt die Kunstrichtung von Michelangelo?", a: "Renaissance" },
    { q: "Wie heißt die Kunstrichtung von Vermeer?", a: "Barock" },
    { q: "Wie heißt die Kunstrichtung von Hopper?", a: "Realismus" },
    { q: "Wie heißt die Kunstrichtung von Munch?", a: "Expressionismus" },
    { q: "Wie heißt die Kunstrichtung von Warhol?", a: "Pop-Art" },
    { q: "Wie heißt die Kunstrichtung von Hokusai?", a: "Ukiyo-e" },
    { q: "Wie heißt die Kunstrichtung von Botticelli?", a: "Renaissance" },
    { q: "Wie heißt die Kunstrichtung von Rodin?", a: "Moderne Skulptur" },
    { q: "Wie heißt die Kunstrichtung von Cézanne?", a: "Postimpressionismus" },
    { q: "Wie heißt die Kunstrichtung von Goya?", a: "Romantik" },
    { q: "Wie heißt die Kunstrichtung von Klimt?", a: "Jugendstil" },
    { q: "Wie heißt die Kunstrichtung von El Greco?", a: "Manierismus" },
    { q: "Wie heißt die Kunstrichtung von Caravaggio?", a: "Barock" },
    { q: "Wie heißt die Kunstrichtung von Turner?", a: "Romantik" },
    { q: "Wie heißt die Kunstrichtung von Pollock?", a: "Action Painting" },
    { q: "Wie heißt die Kunstrichtung von Banksy?", a: "Street Art" },
    { q: "Wie heißt die Kunstrichtung von Basquiat?", a: "Neoexpressionismus" },
    { q: "Wie heißt die Kunstrichtung von Magritte?", a: "Surrealismus" },
    { q: "Wie heißt die Kunstrichtung von Lichtenstein?", a: "Pop-Art" },
    { q: "Wie heißt die Kunstrichtung von Mondrian?", a: "Neoplastizismus" }
  ],

  300: [
    { q: "Wie heißt das berühmteste Museum in Paris?", a: "Louvre" },
    { q: "Wie heißt das berühmteste Museum in New York?", a: "Metropolitan Museum of Art" },
    { q: "Wie heißt das berühmteste Museum in London?", a: "British Museum" },
    { q: "Wie heißt das berühmteste Museum in Berlin?", a: "Pergamonmuseum" },
    { q: "Wie heißt das berühmteste Museum in Madrid?", a: "Museo del Prado" },
    { q: "Wie heißt das berühmteste Museum in Amsterdam?", a: "Rijksmuseum" },
    { q: "Wie heißt das berühmteste Museum in Florenz?", a: "Uffizien" },
    { q: "Wie heißt das berühmteste Museum in Rom?", a: "Vatikanische Museen" },
    { q: "Wie heißt das berühmteste Museum in Los Angeles?", a: "Getty Center" },
    { q: "Wie heißt das berühmteste Museum in Tokio?", a: "Tokyo National Museum" },
    { q: "Wie heißt das berühmteste Museum in Wien?", a: "Kunsthistorisches Museum" },
    { q: "Wie heißt das berühmteste Museum in München?", a: "Alte Pinakothek" },
    { q: "Wie heißt das berühmteste Museum in St. Petersburg?", a: "Eremitage" },
    { q: "Wie heißt das berühmteste Museum in Chicago?", a: "Art Institute of Chicago" },
    { q: "Wie heißt das berühmteste Museum in Barcelona?", a: "Museu Picasso" },
    { q: "Wie heißt das berühmteste Museum in Kairo?", a: "Ägyptisches Museum" },
    { q: "Wie heißt das berühmteste Museum in Athen?", a: "Akropolismuseum" },
    { q: "Wie heißt das berühmteste Museum in Seoul?", a: "National Museum of Korea" },
    { q: "Wie heißt das berühmteste Museum in Istanbul?", a: "Hagia Sophia Museum" },
    { q: "Wie heißt das berühmteste Museum in Washington D.C.?", a: "Smithsonian" },
    { q: "Wie heißt das berühmteste Museum in San Francisco?", a: "SFMOMA" },
    { q: "Wie heißt das berühmteste Museum in Stockholm?", a: "Vasa-Museum" },
    { q: "Wie heißt das berühmteste Museum in Oslo?", a: "Munch-Museum" },
    { q: "Wie heißt das berühmteste Museum in Zürich?", a: "Kunsthaus Zürich" },
    { q: "Wie heißt das berühmteste Museum in Brüssel?", a: "Königliche Museen der Schönen Künste" }
  ],

  400: [
    { q: "Welches Gemälde ist das teuerste der Welt?", a: "Salvator Mundi" },
    { q: "Welches Gemälde ist das berühmteste der Welt?", a: "Mona Lisa" },
    { q: "Welches Gemälde ist das größte im Louvre?", a: "Die Hochzeit zu Kana" },
    { q: "Welches Gemälde ist das bekannteste von Picasso?", a: "Guernica" },
    { q: "Welches Gemälde ist das bekannteste von van Gogh?", a: "Sternennacht" },
    { q: "Welches Gemälde ist das bekannteste von Monet?", a: "Wasserlilien" },
    { q: "Welches Gemälde ist das bekannteste von Vermeer?", a: "Mädchen mit dem Perlenohrring" },
    { q: "Welches Gemälde ist das bekannteste von Munch?", a: "Der Schrei" },
    { q: "Welches Gemälde ist das bekannteste von Dalí?", a: "Die Beständigkeit der Erinnerung" },
    { q: "Welches Gemälde ist das bekannteste von Rembrandt?", a: "Die Nachtwache" },
    { q: "Welches Gemälde ist das bekannteste von Botticelli?", a: "Die Geburt der Venus" },
    { q: "Welches Gemälde ist das bekannteste von Hopper?", a: "Nighthawks" },
    { q: "Welches Gemälde ist das bekannteste von Klimt?", a: "Der Kuss" },
    { q: "Welches Gemälde ist das bekannteste von Goya?", a: "Der dritte Mai 1808" },
    { q: "Welches Gemälde ist das bekannteste von Cézanne?", a: "Die Kartenspieler" },
    { q: "Welches Gemälde ist das bekannteste von Turner?", a: "The Fighting Temeraire" },
    { q: "Welches Gemälde ist das bekannteste von Pollock?", a: "No. 5, 1948" },
    { q: "Welches Gemälde ist das bekannteste von Magritte?", a: "Der Mann mit der Melone" },
    { q: "Welches Gemälde ist das bekannteste von Lichtenstein?", a: "Whaam!" },
    { q: "Welches Gemälde ist das bekannteste von Mondrian?", a: "Komposition mit Rot, Blau und Gelb" },
    { q: "Welches Gemälde ist das bekannteste von Basquiat?", a: "Untitled (1982)" },
    { q: "Welches Gemälde ist das bekannteste von Hokusai?", a: "Die große Welle von Kanagawa" },
    { q: "Welches Gemälde ist das bekannteste von El Greco?", a: "Der Ritter mit der Hand auf der Brust" },
    { q: "Welches Gemälde ist das bekannteste von Caravaggio?", a: "Die Berufung des Matthäus" },
    { q: "Welches Gemälde ist das bekannteste von Rodin?", a: "Der Denker" }
  ],

  500: [
    { q: "Welches Kunstwerk ist das teuerste jemals verkaufte?", a: "Salvator Mundi" },
    { q: "Welches Museum hat die meisten Besucher weltweit?", a: "Louvre" },
    { q: "Welches Gebäude gilt als größtes Kunstmuseum der Welt?", a: "Louvre" },
    { q: "Welches Kunstwerk ist das älteste bekannte Höhlenbild?", a: "Höhlenmalerei von Chauvet" },
    { q: "Welches Kunstwerk gilt als erstes abstraktes Gemälde?", a: "Kandinsky – Ohne Titel (1910)" },
    { q: "Welches Kunstwerk gilt als bedeutendstes Werk der Renaissance?", a: "Mona Lisa" },
    { q: "Welches Kunstwerk gilt als bedeutendstes Werk des Barock?", a: "Die Nachtwache" },
    { q: "Welches Kunstwerk gilt als bedeutendstes Werk des Impressionismus?", a: "Impression, Sonnenaufgang" },
    { q: "Welches Kunstwerk gilt als bedeutendstes Werk des Surrealismus?", a: "Die Beständigkeit der Erinnerung" },
    { q: "Welches Kunstwerk gilt als bedeutendstes Werk der Pop-Art?", a: "Campbell’s Soup Cans" },
    { q: "Welches Kunstwerk gilt als bedeutendstes Werk der Moderne?", a: "Les Demoiselles d’Avignon" },
    { q: "Welches Kunstwerk gilt als bedeutendstes Werk der Romantik?", a: "Der Wanderer über dem Nebelmeer" },
    { q: "Welches Kunstwerk gilt als bedeutendstes Werk der Gotik?", a: "Glasfenster der Kathedrale von Chartres" },
    { q: "Welches Kunstwerk gilt als bedeutendstes Werk der Antike?", a: "Venus von Milo" },
    { q: "Welches Kunstwerk gilt als bedeutendstes Werk der ägyptischen Kunst?", a: "Büste der Nofretete" },
    { q: "Welches Kunstwerk gilt als bedeutendstes Werk der griechischen Kunst?", a: "Laokoon-Gruppe" },
    { q: "Welches Kunstwerk gilt als bedeutendstes Werk der römischen Kunst?", a: "Augustus von Primaporta" },
    { q: "Welches Kunstwerk gilt als bedeutendstes Werk der chinesischen Kunst?", a: "Terrakotta-Armee" },
    { q: "Welches Kunstwerk gilt als bedeutendstes Werk der japanischen Kunst?", a: "Die große Welle von Kanagawa" },
    { q: "Welches Kunstwerk gilt als bedeutendstes Werk der islamischen Kunst?", a: "Alhambra" },
    { q: "Welches Kunstwerk gilt als bedeutendstes Werk der indischen Kunst?", a: "Taj Mahal" },
    { q: "Welches Kunstwerk gilt als bedeutendstes Werk der afrikanischen Kunst?", a: "Benin-Bronzen" },
    { q: "Welches Kunstwerk gilt als bedeutendstes Werk der südamerikanischen Kunst?", a: "Nazca-Linien" },
    { q: "Welches Kunstwerk gilt als bedeutendstes Werk der mittelalterlichen Kunst?", a: "Bayeux-Stickerei" },
    { q: "Welches Kunstwerk gilt als bedeutendstes Werk der modernen Architektur?", a: "Fallingwater" }
  ]
},

"auto & Verkehr": {
  100: [
    { q: "Wie sieht das Verkehrsschild für STOP aus?", a: "Rotes Achteck mit weißem STOP" },
    { q: "Wie sieht das Verkehrsschild für Vorfahrt gewähren aus?", a: "Umgedrehtes Dreieck mit rotem Rand" },
    { q: "Wie sieht das Verkehrsschild für Einbahnstraße aus?", a: "Blaues Rechteck mit weißem Pfeil" },
    { q: "Wie sieht das Verkehrsschild für Tempo 30 aus?", a: "Weißer Kreis mit rotem Rand und 30" },
    { q: "Wie sieht das Verkehrsschild für Parken aus?", a: "Blaues Quadrat mit weißem P" },
    { q: "Wie sieht das Verkehrsschild für Fußgänger aus?", a: "Blauer Kreis mit Person" },
    { q: "Wie sieht das Verkehrsschild für Fahrradweg aus?", a: "Blauer Kreis mit Fahrrad" },
    { q: "Wie sieht das Verkehrsschild für Baustelle aus?", a: "Dreieck mit Arbeiter" },
    { q: "Wie sieht das Verkehrsschild für Wildwechsel aus?", a: "Dreieck mit Hirsch" },
    { q: "Wie sieht das Verkehrsschild für Bahnübergang aus?", a: "Dreieck mit Zug" },
    { q: "Wie sieht das Verkehrsschild für Kreisverkehr aus?", a: "Blauer Kreis mit Pfeilen" },
    { q: "Wie sieht das Verkehrsschild für Sackgasse aus?", a: "Blaues Schild mit rotem Balken" },
    { q: "Wie sieht das Verkehrsschild für Spielstraße aus?", a: "Blaues Schild mit Familie" },
    { q: "Wie sieht das Verkehrsschild für Gefälle aus?", a: "Dreieck mit Prozentangabe" },
    { q: "Wie sieht das Verkehrsschild für Steigung aus?", a: "Dreieck mit Prozentangabe" },
    { q: "Wie sieht das Verkehrsschild für Ampelwarnung aus?", a: "Dreieck mit Ampel" },
    { q: "Wie sieht das Verkehrsschild für Tunnel aus?", a: "Dreieck mit Tunnel" },
    { q: "Wie sieht das Verkehrsschild für Halteverbot aus?", a: "Blauer Kreis mit rotem X" },
    { q: "Wie sieht das Verkehrsschild für Einfahrt verboten aus?", a: "Roter Kreis mit weißem Balken" },
    { q: "Wie sieht das Verkehrsschild für Überholverbot aus?", a: "Roter Kreis mit zwei Autos" },
    { q: "Wie sieht das Verkehrsschild für Fußgängerüberweg aus?", a: "Blaues Dreieck mit Zebrastreifen" },
    { q: "Wie sieht das Verkehrsschild für Autobahn aus?", a: "Blaues Schild mit weißer Brücke" },
    { q: "Wie sieht das Verkehrsschild für Wohngebiet aus?", a: "Blaues Schild mit Häusern" },
    { q: "Wie sieht das Verkehrsschild für Gefahrstelle aus?", a: "Dreieck mit Ausrufezeichen" },
    { q: "Wie sieht das Verkehrsschild für Bushaltestelle aus?", a: "Gelbes H im grünen Kreis" }
  ],

200: [
  { q: "Was muss man bei rechts vor links beachten?", a: "Fahrzeuge von rechts haben Vorrang" },
  { q: "Wann darf man den Blinker setzen?", a: "Vor jedem Abbiegen oder Spurwechsel" },
  { q: "Was bedeutet eine durchgezogene Linie?", a: "Überfahren verboten" },
  { q: "Was bedeutet eine gestrichelte Linie?", a: "Überholen erlaubt" },
  { q: "Wann muss man eine Rettungsgasse bilden?", a: "Bei Stau auf Autobahn oder Schnellstraße" },
  { q: "Was bedeutet ein grüner Pfeil an der Ampel?", a: "Rechts abbiegen nach Stopp erlaubt" },
  { q: "Was zeigt ein Reifendrucksensor an?", a: "Zu niedrigen Reifendruck" },
  { q: "Was zeigt ein Airbag-Symbol an?", a: "Airbagfehler" },
  { q: "Was zeigt ein ABS-Symbol an?", a: "ABS gestört" },
  { q: "Was zeigt ein ESP-Symbol an?", a: "Stabilitätskontrolle aktiv" },
  { q: "Wann muss man Winterreifen nutzen?", a: "Bei Glätte, Schnee oder Eis" },
  { q: "Was ist ein Hybridauto?", a: "Auto mit Elektro- und Verbrennungsmotor" },
  { q: "Was ist ein Elektroauto?", a: "Auto mit Elektromotor" },
  { q: "Was ist ein SUV?", a: "Großes, hohes Fahrzeug" },
  { q: "Was ist ein Kleinwagen?", a: "Kompaktes kleines Auto" },
  { q: "Was ist ein Kombi?", a: "Auto mit großem Kofferraum" },
  { q: "Was ist ein Cabrio?", a: "Auto mit offenem Dach" },
  { q: "Was ist ein Transporter?", a: "Großes Nutzfahrzeug" },
  { q: "Was ist ein Wohnmobil?", a: "Fahrzeug mit Wohnbereich" },
  { q: "Was ist ein Anhänger?", a: "Ladefläche hinter einem Auto" },
  { q: "Was ist ein Motorrad?", a: "Zweirad mit Motor" },
  { q: "Was ist ein Bus?", a: "Großes Fahrzeug für viele Personen" },
  { q: "Was ist ein LKW?", a: "Großes Fahrzeug für Gütertransport" },
  { q: "Was ist ein Tempomat?", a: "Hält die Geschwindigkeit" },
  { q: "Was ist ein Abstandstempomat?", a: "Hält Abstand automatisch" }
],
300: [
  { q: "Was ist Aquaplaning?", a: "Wenn das Auto auf Wasser aufschwimmt" },
  { q: "Was ist Untersteuern?", a: "Wenn das Auto über die Vorderachse schiebt" },
  { q: "Was ist Übersteuern?", a: "Wenn das Heck ausbricht" },
  { q: "Was ist der Bremsweg?", a: "Der Weg vom Bremsen bis zum Stillstand" },
  { q: "Was ist der Reaktionsweg?", a: "Der Weg bis zur Reaktion des Fahrers" },
  { q: "Was ist der Anhalteweg?", a: "Reaktionsweg plus Bremsweg" },
  { q: "Was ist eine Rettungsgasse?", a: "Freie Mitte für Einsatzfahrzeuge" },
  { q: "Was ist das Rechtsfahrgebot?", a: "Rechts fahren, links überholen" },
  { q: "Was ist ein Hybridauto?", a: "Auto mit Elektro- und Verbrennungsmotor" },
  { q: "Was ist ein Elektroauto?", a: "Auto mit reinem Elektromotor" },
  { q: "Was ist ein SUV?", a: "Großes, hohes Fahrzeug" },
  { q: "Was ist ein Kleinwagen?", a: "Kleines, kompaktes Auto" },
  { q: "Was ist ein Kombi?", a: "Auto mit großem Kofferraum" },
  { q: "Was ist ein Cabrio?", a: "Auto mit offenem Dach" },
  { q: "Was ist ein Transporter?", a: "Großes Nutzfahrzeug" },
  { q: "Was ist ein Wohnmobil?", a: "Fahrzeug mit Wohnbereich" },
  { q: "Was ist ein Anhänger?", a: "Ladefläche hinter einem Auto" },
  { q: "Was ist ein LKW?", a: "Großes Fahrzeug für Gütertransport" },
  { q: "Was ist ein Tempomat?", a: "Hält die Geschwindigkeit" },
  { q: "Was ist ein Abstandstempomat?", a: "Hält Abstand automatisch" },
  { q: "Was ist ein Spurassistent?", a: "Hält das Auto in der Spur" },
  { q: "Was ist ein Notbremsassistent?", a: "Automatische Vollbremsung" },
  { q: "Was ist ein Reifendrucksensor?", a: "Überwacht den Reifendruck" },
  { q: "Was ist ein Airbag?", a: "Schutzkissen bei Aufprall" },
  { q: "Was ist ABS?", a: "Verhindert Blockieren der Räder" }
],

400: [
  { q: "Was ist Rekuperation?", a: "Rückgewinnung von Bremsenergie" },
  { q: "Was ist Aerodynamik?", a: "Form zur Verringerung des Luftwiderstands" },
  { q: "Was ist ein Spoiler?", a: "Erzeugt Abtrieb" },
  { q: "Was ist ein Diffusor?", a: "Luftführung am Heck" },
  { q: "Was ist ein Fahrwerk?", a: "Federung und Dämpfung" },
  { q: "Was ist Bodenfreiheit?", a: "Abstand zwischen Auto und Straße" },
  { q: "Was ist der Wendekreis?", a: "Platz, den ein Auto zum Umdrehen braucht" },
  { q: "Was ist Drehmoment?", a: "Kraft des Motors" },
  { q: "Was ist Leistung?", a: "Stärke des Motors" },
  { q: "Was ist Verbrauch?", a: "Liter pro 100 km" },
  { q: "Was ist Reichweite?", a: "Kilometer bis der Tank/Akku leer ist" },
  { q: "Was ist ein Totwinkelassistent?", a: "Warnt vor Fahrzeugen im toten Winkel" },
  { q: "Was ist ein Spurwechselassistent?", a: "Hilft beim sicheren Spurwechsel" },
  { q: "Was ist ein Müdigkeitswarner?", a: "Warnt bei Müdigkeit" },
  { q: "Was ist ein Regensensor?", a: "Schaltet Wischer automatisch" },
  { q: "Was ist ein Lichtsensor?", a: "Schaltet Licht automatisch" },
  { q: "Was ist ein Head-Up-Display?", a: "Infos auf der Windschutzscheibe" },
  { q: "Was ist ein Sportfahrwerk?", a: "Tiefer und härter" },
  { q: "Was ist ein Offroadfahrwerk?", a: "Hoch und robust" },
  { q: "Was ist ein Allwetterreifen?", a: "Für alle Jahreszeiten geeignet" },
  { q: "Was ist ein Winterreifen?", a: "Für Schnee und Glätte" },
  { q: "Was ist ein Sommerreifen?", a: "Für warme Temperaturen" },
  { q: "Was ist ein Anhängermodus?", a: "Optimiert für Anhängerbetrieb" },
  { q: "Was ist eine Notbremsung?", a: "Maximale Bremskraft" },
  { q: "Was ist eine Vollbremsung?", a: "Bremsen mit maximaler Kraft" }
],

500: [
  { q: "Was ist Torque-Vectoring?", a: "Kraftverteilung zwischen einzelnen Rädern" },
  { q: "Was ist Allradlenkung?", a: "Hinterräder lenken mit" },
  { q: "Was ist aktive Aerodynamik?", a: "Bewegliche Spoiler und Klappen" },
  { q: "Was ist eine Wärmepumpe im Auto?", a: "Effiziente Heizung/Kühlung" },
  { q: "Was ist Batterievorkonditionierung?", a: "Akku wird fürs Schnellladen vorbereitet" },
  { q: "Was ist Batteriekühlung?", a: "Hält Akku auf optimaler Temperatur" },
  { q: "Was ist Level-2-Autonomie?", a: "Teilautomatisiertes Fahren" },
  { q: "Was ist Level-3-Autonomie?", a: "Auto fährt zeitweise selbst" },
  { q: "Was ist ein Differenzial?", a: "Verteilt Kraft zwischen Rädern" },
  { q: "Was ist eine Untersetzung?", a: "Mehr Kraft im Gelände" },
  { q: "Was ist ein Turbolader?", a: "Verdichtet Luft für mehr Leistung" },
  { q: "Was ist ein Kompressor?", a: "Mechanische Luftverdichtung" },
  { q: "Was ist ein Ottomotor?", a: "Benzinmotor" },
  { q: "Was ist ein Dieselmotor?", a: "Dieselmotor" },
  { q: "Was ist ein Elektromotor?", a: "Motor mit Strom" },
  { q: "Was ist ein Hybridantrieb?", a: "Verbrenner + Elektro" },
  { q: "Was ist ein Plug-in-Hybrid?", a: "Extern aufladbar" },
  { q: "Was ist ein Wasserstoffauto?", a: "Fährt mit Brennstoffzelle" },
  { q: "Was ist ein Aerodynamik-Splitter?", a: "Luftführung an der Front" },
  { q: "Was ist ein Heckdiffusor?", a: "Luftführung am Heck" },
  { q: "Was ist ein Rennfahrwerk?", a: "Sehr tiefe, harte Federung" },
  { q: "Was ist ein Slickreifen?", a: "Reifen ohne Profil" },
  { q: "Was ist ein Offroadreifen?", a: "Reifen mit grobem Profil" },
  { q: "Was ist ein Dragreifen?", a: "Sehr weiche Mischung für Beschleunigung" },
  { q: "Was ist ein Aerodynamikpaket?", a: "Spoiler, Splitter, Diffusor" }
]
},
"mode & Lifestyle": {
  "100": [
    { "q": "Was ist Adidas?", "a": "Sportmarke für Kleidung und Schuhe" },
    { "q": "Was ist Nike?", "a": "Sportmarke mit Swoosh‑Logo" },
    { "q": "Was ist H&M?", "a": "Modekette für günstige Kleidung" },
    { "q": "Was ist ein Hoodie?", "a": "Pullover mit Kapuze" },
    { "q": "Was ist ein T‑Shirt?", "a": "Kurzärmeliges Oberteil" },
    { "q": "Was ist ein Sneaker?", "a": "Bequemer Sportschuh" },
    { "q": "Was ist ein Kleid?", "a": "Einteiliges Damenkleidungsstück" },
    { "q": "Was ist eine Jeans?", "a": "Hose aus Denim" },
    { "q": "Was ist ein Parfüm?", "a": "Duftflüssigkeit für den Körper" },
    { "q": "Was ist Mascara?", "a": "Make‑up für die Wimpern" },
    { "q": "Was ist ein Schal?", "a": "Stoff zum Wärmen des Halses" },
    { "q": "Was ist ein Ring?", "a": "Schmuck für den Finger" },
    { "q": "Was ist ein Armband?", "a": "Schmuck für das Handgelenk" },
    { "q": "Was ist ein Rucksack?", "a": "Tasche für den Rücken" },
    { "q": "Was ist ein Gürtel?", "a": "Band zum Festziehen der Hose" },
    { "q": "Was ist ein Lippenstift?", "a": "Make‑up für die Lippen" },
    { "q": "Was ist ein Haargummi?", "a": "Band zum Zusammenbinden der Haare" },
    { "q": "Was ist ein Pyjama?", "a": "Kleidung zum Schlafen" },
    { "q": "Was ist ein Tanktop?", "a": "Ärmelloses Oberteil" },
    { "q": "Was ist eine Sonnenbrille?", "a": "Brille gegen Sonnenlicht" }
  ],

  "200": [
    { "q": "Was ist Gucci?", "a": "Italienische Luxusmodemarke" },
    { "q": "Was ist Louis Vuitton?", "a": "Luxusmarke mit Monogramm‑Logo" },
    { "q": "Was ist Chanel?", "a": "Französische Luxusmarke mit CC‑Logo" },
    { "q": "Was ist ein Crop Top?", "a": "Kurzes Oberteil über dem Bauch" },
    { "q": "Was ist Streetwear?", "a": "Mode aus Jugend‑ und Straßenkultur" },
    { "q": "Was ist ein Blazer?", "a": "Elegante Jacke" },
    { "q": "Was ist ein Dresscode?", "a": "Vorgeschriebener Kleidungsstil" },
    { "q": "Was ist ein Highlighter?", "a": "Make‑up zum Hervorheben" },
    { "q": "Was ist ein Primer?", "a": "Grundierung vor dem Make‑up" },
    { "q": "Was ist ein Jogger?", "a": "Bequeme Sporthose" },
    { "q": "Was ist ein Cardigan?", "a": "Strickjacke" },
    { "q": "Was ist ein Parka?", "a": "Warme Outdoorjacke" },
    { "q": "Was ist ein Bucket Hat?", "a": "Hut mit breiter Krempe" },
    { "q": "Was ist Faux Fur?", "a": "Kunstfell" },
    { "q": "Was ist ein Lookbook?", "a": "Sammlung von Outfit‑Fotos" },
    { "q": "Was ist ein Haarglätter?", "a": "Gerät zum Glätten der Haare" },
    { "q": "Was ist ein Concealer?", "a": "Make‑up zum Abdecken" },
    { "q": "Was ist ein Sneaker Drop?", "a": "Release eines neuen Modells" },
    { "q": "Was ist ein Basic Outfit?", "a": "Schlichte Grundkleidung" },
    { "q": "Was ist ein Influencer?", "a": "Person mit großer Online‑Reichweite" }
  ],

  "300": [
    { "q": "Was ist Balenciaga?", "a": "Luxusmarke bekannt für futuristische Designs" },
    { "q": "Was ist Off‑White?", "a": "Streetwear‑Marke von Virgil Abloh" },
    { "q": "Was ist Fast Fashion?", "a": "Billige, schnell produzierte Mode" },
    { "q": "Was ist Sustainable Fashion?", "a": "Nachhaltige Mode" },
    { "q": "Was ist eine Capsule Wardrobe?", "a": "Kleiner Kleiderschrank mit Kombiteilen" },
    { "q": "Was ist Haute Couture?", "a": "Luxus‑Mode aus Handarbeit" },
    { "q": "Was ist Pret‑à‑Porter?", "a": "Fertige Designer‑Mode" },
    { "q": "Was ist Vintage Mode?", "a": "Kleidung aus früheren Jahrzehnten" },
    { "q": "Was ist Color Blocking?", "a": "Kräftige Farbkombinationen" },
    { "q": "Was ist Layering?", "a": "Mehrere Kleidungsschichten" },
    { "q": "Was ist Athleisure?", "a": "Sportmode im Alltag" },
    { "q": "Was ist ein Serum?", "a": "Konzentrierte Hautpflege" },
    { "q": "Was ist ein Toner?", "a": "Gesichtswasser nach der Reinigung" },
    { "q": "Was ist Dry Shampoo?", "a": "Trockenshampoo" },
    { "q": "Was ist eine Haarkur?", "a": "Intensivpflege für Haare" },
    { "q": "Was ist Sneaker Resell?", "a": "Wiederverkauf seltener Sneaker" },
    { "q": "Was ist eine Collab?", "a": "Zusammenarbeit von Marken" },
    { "q": "Was ist Body Positivity?", "a": "Akzeptanz des eigenen Körpers" },
    { "q": "Was ist ein Signature Duft?", "a": "Typischer Lieblingsduft einer Person" },
    { "q": "Was ist Streetstyle Fotografie?", "a": "Modefotos auf der Straße" }
  ],

  "400": [
    { "q": "Was ist Dior?", "a": "Französische Luxusmarke mit Fokus auf Couture" },
    { "q": "Was ist Hermès?", "a": "Luxusmarke bekannt für Birkin‑Taschen" },
    { "q": "Was ist Slow Fashion?", "a": "Langsam produzierte, hochwertige Mode" },
    { "q": "Was ist Upcycling?", "a": "Altes Material kreativ wiederverwenden" },
    { "q": "Was ist Fair Trade Mode?", "a": "Mode aus fairer Produktion" },
    { "q": "Was ist ein Monochrome Outfit?", "a": "Outfit in einer Farbe" },
    { "q": "Was ist Kaschmir?", "a": "Feine Wolle von Kaschmirziegen" },
    { "q": "Was ist Viskose?", "a": "Halbsynthetische Faser aus Zellstoff" },
    { "q": "Was ist Polyester?", "a": "Synthetische Faser" },
    { "q": "Was ist die Fashion Week?", "a": "Große Modenschau‑Events weltweit" },
    { "q": "Was ist ein Runway?", "a": "Laufsteg für Models" },
    { "q": "Was ist Editorial Fashion?", "a": "Mode für Magazine" },
    { "q": "Was ist Heat Damage?", "a": "Haarschäden durch Hitze" },
    { "q": "Was ist die Skin Barrier?", "a": "Schutzschicht der Haut" },
    { "q": "Was sind Duftnoten?", "a": "Kopf‑, Herz‑ und Basisnoten eines Parfüms" },
    { "q": "Was ist Personal Branding?", "a": "Selbstvermarktung als Marke" },
    { "q": "Was ist ein Signature Look?", "a": "Typischer Stil einer Person" },
    { "q": "Was ist ein Fashion Trend Forecast?", "a": "Vorhersage zukünftiger Trends" },
    { "q": "Was ist ein Designer‑House?", "a": "Großes Modeunternehmen" },
    { "q": "Was ist ein Couture Atelier?", "a": "Werkstatt für Maßanfertigung" }
  ],

  "500": [
    { "q": "Was ist Avantgarde Mode?", "a": "Experimentelle, künstlerische Mode" },
    { "q": "Was ist Deconstructed Fashion?", "a": "Mode mit bewusst zerstörten Formen" },
    { "q": "Was ist Haute Parfumerie?", "a": "Luxus‑Parfümkunst" },
    { "q": "Was ist Fashion Semiotics?", "a": "Bedeutungslehre von Kleidung" },
    { "q": "Was ist Fashion Forecasting?", "a": "Professionelle Trendvorhersage" },
    { "q": "Was ist Couture Draping?", "a": "Stoffmodellierung direkt am Körper" },
    { "q": "Was ist ein Fashion Archive?", "a": "Sammlung historischer Designerstücke" },
    { "q": "Was ist Luxury Heritage Branding?", "a": "Markenaufbau durch Tradition" },
    { "q": "Was ist Biohacking Lifestyle?", "a": "Körperoptimierung durch Routinen" },
    { "q": "Was ist Sublimation Printing?", "a": "Hochwertiges Textildruckverfahren" },
    { "q": "Was ist Thermoregulative Stofftechnologie?", "a": "Material passt sich Temperatur an" },
    { "q": "Was ist enzymatische Textilreinigung?", "a": "Reinigung durch Enzyme" },
    { "q": "Was ist Couture Tailoring?", "a": "Extrem präzise Maßanfertigung" },
    { "q": "Was ist ein Fashion Moodboard?", "a": "Visuelle Inspirationssammlung" },
    { "q": "Was ist ein Luxury Capsule Drop?", "a": "Kleine exklusive Designer‑Kollektion" },
    { "q": "Was ist ein Fragrance Accord?", "a": "Duftkombination aus mehreren Noten" },
    { "q": "Was ist ein Creative Director?", "a": "Künstlerischer Leiter einer Modemarke" },
    { "q": "Was ist ein Couture Pattern?", "a": "Maßschnitt für Luxusmode" },
    { "q": "Was ist ein Runway Sample?", "a": "Vorproduziertes Modell für Shows" },
    { "q": "Was ist ein Archival Reissue?", "a": "Neuauflage historischer Designerstücke" }
  ]
},

"Reise & Kulturen": {
  "100": [
    { "q": "Wie heißt die Hauptstadt von Italien?", "a": "Rom" },
    { "q": "Wie hoch ist der Eiffelturm?", "a": "324 Meter" },
    { "q": "Nenne ein UNESCO‑Weltkulturerbe in Deutschland.", "a": "Kölner Dom" },
    { "q": "Welches Land ist für Pizza bekannt?", "a": "Italien" },
    { "q": "Welches Land ist für Sushi bekannt?", "a": "Japan" },
    { "q": "In welchem Land liegt die Stadt Paris?", "a": "Frankreich" },
    { "q": "Welches Meer liegt an Spanien?", "a": "Mittelmeer" },
    { "q": "Welches Land hat die Flagge mit rotem Kreis auf weißem Grund?", "a": "Japan" },
    { "q": "Nenne eine berühmte Wüste.", "a": "Sahara" },
    { "q": "Welches Land ist für Flamenco bekannt?", "a": "Spanien" },
    { "q": "Welches Land feiert das Oktoberfest?", "a": "Deutschland" },
    { "q": "Welche Sprache spricht man in Brasilien?", "a": "Portugiesisch" },
    { "q": "Welches Land ist für Tempel und Pagoden bekannt?", "a": "Thailand" },
    { "q": "Welches Land ist für die Alpen bekannt?", "a": "Österreich" },
    { "q": "Welches Land ist für Tacos bekannt?", "a": "Mexiko" },
    { "q": "Welches Land hat die Stadt London?", "a": "Großbritannien" },
    { "q": "Nenne ein typisches italienisches Gericht.", "a": "Pasta" },
    { "q": "Welches Land ist für die Pyramiden bekannt?", "a": "Ägypten" },
    { "q": "Welches Land ist für die Freiheitsstatue bekannt?", "a": "USA" },
    { "q": "Welches Land ist für Curry bekannt?", "a": "Indien" }
  ],

  "200": [
    { "q": "Nenne ein UNESCO‑Weltkulturerbe in Italien.", "a": "Kolosseum" },
    { "q": "In welchem Land liegt der Taj Mahal?", "a": "Indien" },
    { "q": "Welche Stadt ist für die Oper von Sydney bekannt?", "a": "Sydney" },
    { "q": "Welches Land feiert den Karneval in Rio?", "a": "Brasilien" },
    { "q": "Welche Sprache spricht man in Kanada neben Englisch?", "a": "Französisch" },
    { "q": "Welches Land ist für die Siesta bekannt?", "a": "Spanien" },
    { "q": "Welches Land hat die Stadt Marrakesch?", "a": "Marokko" },
    { "q": "Nenne ein typisches japanisches Gericht.", "a": "Ramen" },
    { "q": "Welches Land ist für die Alpen und Seen bekannt?", "a": "Schweiz" },
    { "q": "Welches Land ist für die Tempelanlage Angkor Wat bekannt?", "a": "Kambodscha" },
    { "q": "Welches Land ist für die Maori‑Kultur bekannt?", "a": "Neuseeland" },
    { "q": "Welches Land hat die Stadt Istanbul?", "a": "Türkei" },
    { "q": "Welches Land ist für die Sahara bekannt?", "a": "Algerien" },
    { "q": "Welches Land ist für die Akropolis bekannt?", "a": "Griechenland" },
    { "q": "Welches Land ist für die Nordlichter bekannt?", "a": "Island" },
    { "q": "Welches Land ist für die K‑Pop‑Kultur bekannt?", "a": "Südkorea" },
    { "q": "Welches Land ist für die Teezeremonie bekannt?", "a": "Japan" },
    { "q": "Welches Land ist für die Wüste Gobi bekannt?", "a": "Mongolei" },
    { "q": "Welches Land ist für die Victoriafälle bekannt?", "a": "Sambia" },
    { "q": "Welches Land ist für die Kreml‑Architektur bekannt?", "a": "Russland" }
  ],

  "300": [
    { "q": "Nenne ein UNESCO‑Weltkulturerbe in China.", "a": "Chinesische Mauer" },
    { "q": "In welchem Land liegt Machu Picchu?", "a": "Peru" },
    { "q": "Welche Stadt ist für die Freiheitsstatue bekannt?", "a": "New York" },
    { "q": "Welches Land ist für die Inka‑Kultur bekannt?", "a": "Peru" },
    { "q": "Welches Land ist für die Maya‑Ruinen bekannt?", "a": "Mexiko" },
    { "q": "Welches Land ist für die Wüste Atacama bekannt?", "a": "Chile" },
    { "q": "Welches Land ist für die Samurai‑Geschichte bekannt?", "a": "Japan" },
    { "q": "Welches Land ist für die Bollywood‑Filme bekannt?", "a": "Indien" },
    { "q": "Welches Land ist für die Kaffeezeremonie bekannt?", "a": "Äthiopien" },
    { "q": "Welches Land ist für die Fjorde bekannt?", "a": "Norwegen" },
    { "q": "Welches Land ist für die Tempelstadt Bagan bekannt?", "a": "Myanmar" },
    { "q": "Welches Land ist für die Maori‑Tätowierungen bekannt?", "a": "Neuseeland" },
    { "q": "Welches Land ist für die Anden bekannt?", "a": "Bolivien" },
    { "q": "Welches Land ist für die Sahara‑Nomaden bekannt?", "a": "Mali" },
    { "q": "Welches Land ist für die Osterinsel bekannt?", "a": "Chile" },
    { "q": "Welches Land ist für die Wüste Namib bekannt?", "a": "Namibia" },
    { "q": "Welches Land ist für die Tempel von Kyoto bekannt?", "a": "Japan" },
    { "q": "Welches Land ist für die Karibikstrände bekannt?", "a": "Dominikanische Republik" },
    { "q": "Welches Land ist für die Andenmusik bekannt?", "a": "Ecuador" },
    { "q": "Welches Land ist für die Balkanmusik bekannt?", "a": "Serbien" }
  ],

  "400": [
    { "q": "Nenne ein UNESCO‑Weltkulturerbe in Australien.", "a": "Great Barrier Reef" },
    { "q": "In welchem Land liegt Petra?", "a": "Jordanien" },
    { "q": "Welches Land ist für die Aborigine‑Kultur bekannt?", "a": "Australien" },
    { "q": "Welches Land ist für die Berber‑Kultur bekannt?", "a": "Marokko" },
    { "q": "Welches Land ist für die orthodoxe Kultur bekannt?", "a": "Griechenland" },
    { "q": "Welches Land ist für die polynesische Kultur bekannt?", "a": "Samoa" },
    { "q": "Welches Land ist für die tibetische Kultur bekannt?", "a": "China" },
    { "q": "Welches Land ist für die Nomadenkultur bekannt?", "a": "Mongolei" },
    { "q": "Welches Land ist für die persische Kultur bekannt?", "a": "Iran" },
    { "q": "Welches Land ist für die mesoamerikanische Kultur bekannt?", "a": "Guatemala" },
    { "q": "Welches Land ist für die kreolische Küche bekannt?", "a": "Haiti" },
    { "q": "Welches Land ist für die levantinische Küche bekannt?", "a": "Libanon" },
    { "q": "Welches Land ist für die Sami‑Kultur bekannt?", "a": "Norwegen" },
    { "q": "Welches Land ist für die Tuareg‑Kultur bekannt?", "a": "Niger" },
    { "q": "Welches Land ist für die polynesische Navigation bekannt?", "a": "Fidschi" },
    { "q": "Welches Land ist für die Anden‑Kosmologie bekannt?", "a": "Bolivien" },
    { "q": "Welches Land ist für die afrokaribische Kultur bekannt?", "a": "Jamaika" },
    { "q": "Welches Land ist für die Levante‑Region bekannt?", "a": "Syrien" },
    { "q": "Welches Land ist für die tibetische Medizin bekannt?", "a": "Nepal" }
  ],

  "500": [
    { "q": "Nenne ein UNESCO‑Weltkulturerbe in Kambodscha.", "a": "Angkor" },
    { "q": "In welchem Land liegt die antike Stadt Persepolis?", "a": "Iran" },
    { "q": "Welches Land ist für die Yoruba‑Kultur bekannt?", "a": "Nigeria" },
    { "q": "Welches Land ist für die Ainu‑Kultur bekannt?", "a": "Japan" },
    { "q": "Welches Land ist für die Sogdische Kultur bekannt?", "a": "Usbekistan" },
    { "q": "Welches Land ist für die Zoroastrische Religion bekannt?", "a": "Iran" },
    { "q": "Welches Land ist für die polynesische Mythologie bekannt?", "a": "Tonga" },
    { "q": "Welches Land ist für die Berber‑Schrift Tifinagh bekannt?", "a": "Marokko" },
    { "q": "Welches Land ist für die Anden‑Textilkunst bekannt?", "a": "Peru" },
    { "q": "Welches Land ist für die Maori‑Tattoo‑Tradition bekannt?", "a": "Neuseeland" },
    { "q": "Welches Land ist für die Inuit‑Jagdtradition bekannt?", "a": "Kanada" },
    { "q": "Welches Land ist für die Sufi‑Mystik bekannt?", "a": "Pakistan" },
    { "q": "Welches Land ist für die Anden‑Quipu‑Schrift bekannt?", "a": "Peru" },
    { "q": "Welches Land ist für die polynesische Tattoo‑Kultur bekannt?", "a": "Samoa" },
    { "q": "Welches Land ist für die tibetische Klostertradition bekannt?", "a": "China" },
    { "q": "Welches Land ist für die Khmer‑Kultur bekannt?", "a": "Kambodscha" },
    { "q": "Welches Land ist für die polynesische Seefahrt bekannt?", "a": "Hawaii" },
    { "q": "Welches Land ist für die Anden‑Kosmologie bekannt?", "a": "Bolivien" },
    { "q": "Welches Land ist für die polynesische Tattoo‑Kultur bekannt?", "a": "Tahiti" },
    { "q": "Welches Land ist für die Ainu‑Traditionen bekannt?", "a": "Japan" }
  ]
},
"natur": {
  "100": [
    { "q": "Wie hoch ist der Mount Everest?", "a": "8.849 Meter" },
    { "q": "Nenne ein großes Meerestier.", "a": "Blauwal" },
    { "q": "Wie heißt der längste Fluss der Welt?", "a": "Nil" },
    { "q": "Welches Tier legt Eier?", "a": "Huhn" },
    { "q": "Welcher Planet ist der Erde am nächsten?", "a": "Venus" },
    { "q": "Nenne einen Baum, der Nadeln hat.", "a": "Tanne" },
    { "q": "Wie nennt man gefrorenes Wasser?", "a": "Eis" },
    { "q": "Welches Tier brüllt laut?", "a": "Löwe" },
    { "q": "Wie nennt man Wasser in Gasform?", "a": "Wasserdampf" },
    { "q": "Welches Tier hat einen langen Hals?", "a": "Giraffe" },
    { "q": "Wie nennt man einen großen Vogel, der nicht fliegen kann?", "a": "Strauß" },
    { "q": "Welches Tier lebt im Korallenriff?", "a": "Clownfisch" },
    { "q": "Wie nennt man die Jahreszeit mit Schnee?", "a": "Winter" },
    { "q": "Welches Tier hat Streifen?", "a": "Zebra" },
    { "q": "Wie heißt der größte Ozean?", "a": "Pazifik" },
    { "q": "Welches Tier hat einen Panzer?", "a": "Schildkröte" },
    { "q": "Wie nennt man eine große Sandlandschaft?", "a": "Wüste" },
    { "q": "Welches Tier kann fliegen?", "a": "Adler" },
    { "q": "Wie nennt man Pflanzenfresser?", "a": "Herbivoren" },
    { "q": "Welches Tier lebt im Wald?", "a": "Reh" }
  ],

  "200": [
    { "q": "Nenne ein Raubtier aus Afrika.", "a": "Löwe" },
    { "q": "Wie nennt man den Lebensraum von Pinguinen?", "a": "Antarktis" },
    { "q": "Welches Tier hat einen Rüssel?", "a": "Elefant" },
    { "q": "Wie nennt man den Prozess, bei dem Pflanzen Sauerstoff produzieren?", "a": "Fotosynthese" },
    { "q": "Welches Tier ist das schnellste an Land?", "a": "Gepard" },
    { "q": "Wie nennt man eine große Gruppe von Bäumen?", "a": "Wald" },
    { "q": "Welches Tier lebt im Amazonas?", "a": "Jaguar" },
    { "q": "Wie nennt man die Schicht der Erde, auf der wir leben?", "a": "Erdkruste" },
    { "q": "Welches Tier hat einen Giftstachel?", "a": "Skorpion" },
    { "q": "Wie nennt man den Wechsel von Raupe zu Schmetterling?", "a": "Metamorphose" },
    { "q": "Welches Tier lebt im Great Barrier Reef?", "a": "Seepferdchen" },
    { "q": "Wie nennt man eine große Graslandschaft?", "a": "Savanne" },
    { "q": "Welches Tier hat Flossen und lebt im Meer?", "a": "Delfin" },
    { "q": "Wie nennt man die Jahreszeit, in der Blumen blühen?", "a": "Frühling" },
    { "q": "Welches Tier hat Hörner und lebt in den Alpen?", "a": "Steinbock" },
    { "q": "Wie nennt man den Lebensraum von Kamelen?", "a": "Wüste" },
    { "q": "Welches Tier hat ein schwarz‑weißes Fell und lebt in China?", "a": "Panda" },
    { "q": "Wie nennt man eine große Wasserfläche im Inland?", "a": "See" },
    { "q": "Welches Tier lebt im Regenwald und kann klettern?", "a": "Affe" },
    { "q": "Wie nennt man die Schicht der Atmosphäre, in der Flugzeuge fliegen?", "a": "Troposphäre" }
  ],

  "300": [
    { "q": "Wie nennt man Tiere, die nachts aktiv sind?", "a": "Nachtaktiv" },
    { "q": "Welches Tier hat die stärkste Bisskraft?", "a": "Salzwasserkrokodil" },
    { "q": "Wie nennt man die Wanderung von Vögeln im Winter?", "a": "Zugvögel" },
    { "q": "Welches Tier ist der größte Vogel der Welt?", "a": "Strauß" },
    { "q": "Wie nennt man das größte Korallenriff der Erde?", "a": "Great Barrier Reef" },
    { "q": "Welches Tier hat die längste Lebensdauer?", "a": "Grönlandwal" },
    { "q": "Wie nennt man die Zone, in der Pflanzen und Tiere leben?", "a": "Biosphäre" },
    { "q": "Welches Tier kann seinen Schwanz abwerfen?", "a": "Eidechse" },
    { "q": "Wie nennt man die Region rund um den Äquator?", "a": "Tropen" },
    { "q": "Welches Tier ist der größte Landräuber?", "a": "Eisbär" },
    { "q": "Wie nennt man die Schicht unter der Erdkruste?", "a": "Erdmantel" },
    { "q": "Welches Tier hat die längste Migration?", "a": "Kaiserpinguin" },
    { "q": "Wie nennt man Pflanzen, die nur in einem Gebiet vorkommen?", "a": "Endemisch" },
    { "q": "Welches Tier ist der größte Fisch der Welt?", "a": "Walhai" },
    { "q": "Wie nennt man die Kraft, die Objekte zur Erde zieht?", "a": "Gravitation" },
    { "q": "Welches Tier hat die größten Ohren?", "a": "Fennek" },
    { "q": "Wie nennt man die Zone zwischen Wald und Wüste?", "a": "Steppe" },
    { "q": "Welches Tier hat die längste Zunge?", "a": "Ameisenbär" },
    { "q": "Wie nennt man die Schicht der Erde, die flüssig ist?", "a": "Äußerer Kern" },
    { "q": "Welches Tier ist der größte Primat?", "a": "Gorilla" }
  ],

  "400": [
    { "q": "Wie nennt man die Wissenschaft der Pflanzen?", "a": "Botanik" },
    { "q": "Welches Tier hat das stärkste Gift?", "a": "Würfelqualle" },
    { "q": "Wie nennt man die Zone, in der Korallen leben?", "a": "Flachwasserzone" },
    { "q": "Welches Tier hat die größte Spannweite?", "a": "Wanderalbatros" },
    { "q": "Wie nennt man die Region mit dauerhaft gefrorenem Boden?", "a": "Permafrost" },
    { "q": "Welches Tier ist der größte Amphibie?", "a": "Chinesischer Riesensalamander" },
    { "q": "Wie nennt man die Schicht der Atmosphäre, in der die Ozonschicht liegt?", "a": "Stratosphäre" },
    { "q": "Welches Tier hat die stärkste Muskelkraft im Verhältnis zur Größe?", "a": "Mistkäfer" },
    { "q": "Wie nennt man die Zone, in der kaum Licht ins Meer gelangt?", "a": "Aphotic Zone" },
    { "q": "Welches Tier hat die längste Lebensdauer unter Insekten?", "a": "Termitenkönigin" },
    { "q": "Wie nennt man die Region, in der Mangroven wachsen?", "a": "Küstenzone" },
    { "q": "Welches Tier hat die größte Gehirnmasse?", "a": "Pottwal" },
    { "q": "Wie nennt man die Wissenschaft der Tiere?", "a": "Zoologie" },
    { "q": "Welches Tier hat die stärkste Stimme?", "a": "Brüllaffe" },
    { "q": "Wie nennt man die Zone, in der Vulkane entstehen?", "a": "Subduktionszone" },
    { "q": "Welches Tier hat die längste Flügelspannweite aller lebenden Tiere?", "a": "Wanderalbatros" },
    { "q": "Wie nennt man die Region, in der die größten Bäume wachsen?", "a": "Temperierter Regenwald" },
    { "q": "Welches Tier hat die stärkste Panzerung?", "a": "Gürteltier" },
    { "q": "Wie nennt man die Zone, in der die meisten Pflanzen wachsen?", "a": "Photosynthesezone" },
    { "q": "Welches Tier hat die längste Schnauze?", "a": "Säbelantilope" }
  ],

  "500": [
    { "q": "Wie nennt man die Zone, in der Tiefseefische ohne Licht leben?", "a": "Hadalzone" },
    { "q": "Welches Tier hat die höchste Körpertemperatur?", "a": "Kolibri" },
    { "q": "Wie nennt man die Region, in der die ältesten Bäume der Welt stehen?", "a": "White Mountains (USA)" },
    { "q": "Welches Tier hat die stärkste elektrische Spannung?", "a": "Zitteraal" },
    { "q": "Wie nennt man die Zone, in der die größten Korallenarten wachsen?", "a": "Mesophotic Zone" },
    { "q": "Welches Tier hat die längste dokumentierte Migration?", "a": "Grönlandhai" },
    { "q": "Wie nennt man die Region, in der die meisten endemischen Arten leben?", "a": "Hotspots der Biodiversität" },
    { "q": "Welches Tier hat die stärkste Regenerationsfähigkeit?", "a": "Axolotl" },
    { "q": "Wie nennt man die Zone, in der die stärksten Winde auftreten?", "a": "Jetstream" },
    { "q": "Welches Tier hat die längste bekannte Lebensdauer?", "a": "Grönlandwal" },
    { "q": "Wie nennt man die Region, in der die größten Sanddünen liegen?", "a": "Rub al‑Khali" },
    { "q": "Welches Tier hat die stärkste Kälteanpassung?", "a": "Kaiserpinguin" },
    { "q": "Wie nennt man die Zone, in der die stärksten Erdbeben entstehen?", "a": "Benioff‑Zone" },
    { "q": "Welches Tier hat die stärkste Tarnung?", "a": "Blattfisch" },
    { "q": "Wie nennt man die Region, in der die größten Wasserfälle liegen?", "a": "Iguazú‑Region" },
    { "q": "Welches Tier hat die stärkste Hitzeresistenz?", "a": "Kamel" },
    { "q": "Wie nennt man die Zone, in der die ältesten Fossilien gefunden wurden?", "a": "Präkambrium‑Schichten" },
    { "q": "Welches Tier hat die stärkste Sprungkraft?", "a": "Känguru" },
    { "q": "Wie nennt man die Region, in der die größten Gletscher liegen?", "a": "Antarktis" },
    { "q": "Welches Tier hat die stärkste Giftwirkung im Meer?", "a": "Würfelqualle" }
  ]
},
  "technik": {
    "100": [
      { "q": "Warum wird ein Handy warm, wenn man es lange benutzt?", "a": "Weil der Prozessor viel arbeitet." },
      { "q": "Wie erkennt man, ob ein Kabel beschädigt ist?", "a": "Wenn es Risse hat oder wackelt." },
      { "q": "Warum lädt ein Smartphone schneller mit einem starken Netzteil?", "a": "Weil mehr Strom fließt." },
      { "q": "Wie funktioniert die Lautstärkeregelung bei Kopfhörern?", "a": "Das Signal wird stärker oder schwächer gemacht." },
      { "q": "Warum braucht ein Gerät eine SIM‑Karte?", "a": "Damit es ins Handynetz kommt." },
      { "q": "Wie erkennt man, ob WLAN eingeschaltet ist?", "a": "Am WLAN‑Symbol." },
      { "q": "Warum blinkt eine LED?", "a": "Weil sie schnell ein‑ und ausgeschaltet wird." },
      { "q": "Wie funktioniert ein Lichtschalter?", "a": "Er trennt oder verbindet den Strom." },
      { "q": "Warum muss man Batterien richtig herum einlegen?", "a": "Wegen Plus und Minus." },
      { "q": "Wie funktioniert ein Fahrraddynamo?", "a": "Er erzeugt Strom beim Drehen." },
      { "q": "Warum wird ein Laptop laut, wenn er heiß wird?", "a": "Der Lüfter dreht schneller." },
      { "q": "Wie erkennt man, ob Bluetooth verbunden ist?", "a": "Am Symbol oder einer Meldung." },
      { "q": "Warum braucht ein Fernseher eine Fernbedienung?", "a": "Zum Steuern aus der Entfernung." },
      { "q": "Wie funktioniert ein USB‑Ladeanschluss?", "a": "Er gibt Strom ab." },
      { "q": "Warum geht ein Gerät aus, wenn der Akku leer ist?", "a": "Weil kein Strom mehr da ist." },
      { "q": "Wie funktioniert ein Bewegungsmelder?", "a": "Er merkt, wenn sich etwas bewegt." },
      { "q": "Warum hat ein Auto einen Rückspiegel?", "a": "Damit man hinten sieht." },
      { "q": "Wie funktioniert ein Wasserkocher technisch?", "a": "Ein Heizstab wird heiß." },
      { "q": "Warum braucht ein PC einen Lüfter?", "a": "Damit er nicht überhitzt." },
      { "q": "Wie funktioniert ein Fahrradschloss?", "a": "Es blockiert den Mechanismus." },
      { "q": "Warum hat ein Auto Scheinwerfer?", "a": "Damit man nachts sieht." },
      { "q": "Wie funktioniert ein Rauchmelder?", "a": "Er erkennt Rauch in der Luft." },
      { "q": "Warum hat ein Smartphone mehrere Kameras?", "a": "Für verschiedene Fotoarten." },
      { "q": "Wie funktioniert ein Touchpad am Laptop?", "a": "Es merkt Berührungen." },
      { "q": "Warum braucht ein Gerät ein Update?", "a": "Damit Fehler behoben werden." }
    ],

    "200": [
      { "q": "Wie misst ein Thermometer die Temperatur?", "a": "Es reagiert auf Wärme." },
      { "q": "Wie erkennt ein Auto, dass der Airbag ausgelöst werden muss?", "a": "Ein Sensor merkt den Aufprall." },
      { "q": "Wie funktioniert die Helligkeitsautomatik eines Smartphones?", "a": "Ein Sensor misst Licht." },
      { "q": "Wie misst ein Multimeter Spannung?", "a": "Es vergleicht die elektrische Energie." },
      { "q": "Wie funktioniert ein Elektromotor im E‑Scooter?", "a": "Magnete drehen den Motor." },
      { "q": "Wie erkennt ein Roboter Hindernisse?", "a": "Mit Sensoren oder Kameras." },
      { "q": "Wie funktioniert ein Induktionskochfeld?", "a": "Es erhitzt den Topf direkt." },
      { "q": "Wie misst ein Auto die Geschwindigkeit?", "a": "Über die Raddrehung." },
      { "q": "Wie funktioniert ein Lautsprecher technisch?", "a": "Eine Membran bewegt Luft." },
      { "q": "Wie erkennt ein Smartphone seine Lage?", "a": "Durch Bewegungssensoren." },
      { "q": "Wie funktioniert ein Barcode‑Scanner?", "a": "Er liest schwarze und weiße Linien." },
      { "q": "Wie misst ein Stromzähler den Verbrauch?", "a": "Er zählt den Stromfluss." },
      { "q": "Wie funktioniert ein Elektroschloss?", "a": "Ein Magnet zieht den Riegel." },
      { "q": "Wie erkennt ein Auto den Reifendruck?", "a": "Ein Sensor misst den Druck." },
      { "q": "Wie funktioniert ein Mikrofon technisch?", "a": "Es wandelt Schall in Strom." },
      { "q": "Wie misst ein Laser‑Entfernungsmesser Distanz?", "a": "Er misst die Zeit des Lichtes." },
      { "q": "Wie funktioniert ein WLAN‑Router intern?", "a": "Er sendet Daten per Funk." },
      { "q": "Wie erkennt ein PC eine neue Maus?", "a": "Er merkt das USB‑Signal." },
      { "q": "Wie funktioniert ein 3D‑Drucker mechanisch?", "a": "Er baut Schichten übereinander." },
      { "q": "Wie misst ein Auto den Kraftstoffverbrauch?", "a": "Es berechnet die Einspritzmenge." },
      { "q": "Wie funktioniert ein Elektromagnet?", "a": "Strom erzeugt Magnetkraft." },
      { "q": "Wie erkennt ein Smartphone Fingerabdrücke?", "a": "Es scannt das Muster." },
      { "q": "Wie funktioniert ein Kühlschrank als Wärmepumpe?", "a": "Er leitet Wärme nach außen." },
      { "q": "Wie misst ein GPS‑Empfänger Position?", "a": "Er vergleicht Satellitensignale." },
      { "q": "Wie funktioniert ein Modellbau‑Servo?", "a": "Ein kleiner Motor bewegt den Arm." }
    ],

    "300": [
      { "q": "Wie regelt ein PID‑Controller die Drehzahl eines Motors?", "a": "Er passt die Leistung an." },
      { "q": "Wie funktioniert Sensorfusion in einem Roboter?", "a": "Er kombiniert mehrere Messwerte." },
      { "q": "Wie erkennt ein Computer defekte Festplattensektoren?", "a": "Wenn Daten nicht lesbar sind." },
      { "q": "Wie funktioniert ein Frequenzumrichter?", "a": "Er ändert die Motorfrequenz." },
      { "q": "Wie misst ein Auto Abstand per Radar?", "a": "Es misst die Rückkehr des Signals." },
      { "q": "Wie funktioniert ein Lithium‑Ionen‑Akku beim Laden?", "a": "Ionen bewegen sich im Akku." },
      { "q": "Wie erkennt ein Mikrocontroller analoge Spannungen?", "a": "Er wandelt sie digital um." },
      { "q": "Wie funktioniert ein Glasfaser‑Empfänger?", "a": "Er macht Licht zu Strom." },
      { "q": "Wie erkennt ein Roboter seine Position (SLAM)?", "a": "Er baut eine Karte und vergleicht sie." },
      { "q": "Wie funktioniert ein Wärmetauscher im Auto?", "a": "Er überträgt Wärme." },
      { "q": "Wie misst ein Oszilloskop Signale?", "a": "Es zeigt Spannungsverläufe." },
      { "q": "Wie funktioniert ein Digital‑Analog‑Wandler?", "a": "Er erzeugt eine Spannung aus Zahlen." },
      { "q": "Wie erkennt ein Computer Tastendrücke?", "a": "Er prüft, welche Taste Kontakt hat." },
      { "q": "Wie funktioniert ein Ultraschallsensor?", "a": "Er misst Echozeiten." },
      { "q": "Wie misst ein Auto Motortemperatur?", "a": "Ein Sensor misst die Wärme." },
      { "q": "Wie funktioniert ein Relais?", "a": "Ein Magnet schaltet einen Kontakt." },
      { "q": "Wie erkennt ein KI‑System Objekte?", "a": "Durch Muster in Bildern." },
      { "q": "Wie funktioniert ein Wechselstrommotor?", "a": "Ein Drehfeld bewegt den Rotor." },
      { "q": "Wie misst ein Stromsensor Stromfluss?", "a": "Er misst Magnetfelder." },
      { "q": "Wie funktioniert ein RFID‑Leser?", "a": "Er liest Funkchips." },
      { "q": "Wie erkennt ein Auto Motordrehzahl?", "a": "Ein Sensor zählt Umdrehungen." },
      { "q": "Wie funktioniert ein Klimaanlagen‑Kompressor?", "a": "Er drückt das Kältemittel zusammen." },
      { "q": "Wie misst ein Laserscanner Oberflächen?", "a": "Er misst reflektiertes Licht." },
      { "q": "Wie funktioniert ein Mikrocontroller‑Timer?", "a": "Er zählt Takte." },
      { "q": "Wie erkennt ein PC CPU‑Temperatur?", "a": "Ein Sensor misst die Hitze." }
    ],

    "400": [
      { "q": "Wie steuert ein autonomes Fahrzeug seine Lenkung?", "a": "Ein Motor bewegt die Lenkung." },
      { "q": "Wie funktioniert Echtzeit‑Kommunikation zwischen Robotern?", "a": "Sie tauschen Daten sehr schnell aus." },
      { "q": "Wie erkennt ein neuronales Netz Produktionsfehler?", "a": "Durch ungewöhnliche Muster." },
      { "q": "Wie funktioniert ein Lidar‑System zur 3D‑Kartierung?", "a": "Es misst Entfernungen mit Laser." },
      { "q": "Wie steuert ein Frequenzumrichter Motoren unter Last?", "a": "Er passt Strom und Frequenz an." },
      { "q": "Wie funktioniert eine Wasserstoff‑Brennstoffzelle?", "a": "Sie erzeugt Strom aus Wasserstoff." },
      { "q": "Wie erkennt KI Bewegungen in Videos?", "a": "Durch Bildvergleich." },
      { "q": "Wie funktioniert ein HGÜ‑Netz?", "a": "Es überträgt Strom weit per Gleichspannung." },
      { "q": "Wie steuert ein Roboterarm Gelenke?", "a": "Er berechnet die Bewegungen." },
      { "q": "Wie funktioniert ein supraleitender Magnet?", "a": "Er hat keinen elektrischen Widerstand." },
      { "q": "Wie erkennt ein Auto Straßenmarkierungen?", "a": "Durch Kameras." },
      { "q": "Wie funktioniert ein Transformer‑Modell?", "a": "Es achtet auf wichtige Wörter." },
      { "q": "Wie misst ein Quantencomputer Qubits?", "a": "Durch eine Messung des Zustands." },
      { "q": "Wie funktioniert ein Interferometer?", "a": "Es vergleicht Lichtwellen." },
      { "q": "Wie erkennt ein Roboter Kollisionen?", "a": "Wenn Kräfte zu hoch werden." },
      { "q": "Wie funktioniert ein Plasmaantrieb?", "a": "Er beschleunigt Gas elektrisch." },
      { "q": "Wie steuert ein Echtzeit‑Scheduler Prozesse?", "a": "Er entscheidet, was zuerst läuft." },
      { "q": "Wie funktioniert ein Autoencoder?", "a": "Er komprimiert Daten." },
      { "q": "Wie erkennt ein Drohnenschwarm seine Formation?", "a": "Durch Positionsdaten." },
      { "q": "Wie funktioniert ein Compiler‑Backend?", "a": "Es macht aus Code Maschinencode." },
      { "q": "Wie misst ein Laser‑Interferometer Gravitationswellen?", "a": "Durch winzige Längenänderungen." },
      { "q": "Wie funktioniert ein Graph‑Neural‑Network?", "a": "Es verarbeitet Daten als Netz." },
      { "q": "Wie erkennt ein Auto Fußgänger?", "a": "Durch KI‑Analyse." },
      { "q": "Wie funktioniert Kryokühlung für Qubits?", "a": "Durch extrem kalte Temperaturen." },
      { "q": "Wie steuert ein Roboter Bahnplanung?", "a": "Er berechnet den besten Weg." }
    ],

    "500": [
      { "q": "Wie funktioniert Quantenfehlerkorrektur?", "a": "Durch zusätzliche Qubits." },
      { "q": "Wie berechnet ein autonomes Fahrzeug Trajektorien?", "a": "Es sucht den besten Weg." },
      { "q": "Wie funktioniert Tokamak‑Plasmaeinschluss?", "a": "Mit starken Magneten." },
      { "q": "Wie erkennt ein Diffusionsmodell Rauschen?", "a": "Es entfernt es Schritt für Schritt." },
      { "q": "Wie funktioniert Grovers Algorithmus praktisch?", "a": "Er findet Dinge schneller." },
      { "q": "Wie optimiert ein Compiler Register?", "a": "Er verteilt sie sinnvoll." },
      { "q": "Wie arbeitet ein Flux‑Qubit?", "a": "Es nutzt Magnetfelder." },
      { "q": "Wie funktioniert Echtzeit‑Objektverfolgung?", "a": "Es verfolgt Bewegungen im Bild." },
      { "q": "Wie berechnet ein Roboterarm inverse Dynamik?", "a": "Er berechnet Kräfte." },
      { "q": "Wie funktioniert ein Ionentriebwerk?", "a": "Es schießt Ionen nach hinten." },
      { "q": "Wie erkennt KI komplexe Gesten?", "a": "Durch Körperpunkte." },
      { "q": "Wie funktioniert ein Quantenlaser?", "a": "Er nutzt Quantenübergänge." },
      { "q": "Wie berechnet ein Drohnenschwarm Flugbahnen?", "a": "Sie stimmen sich ab." },
      { "q": "Wie funktioniert neuronale Sprachsynthese?", "a": "Sie erzeugt Sprache aus Text." },
      { "q": "Wie erkennt ein Auto komplexe Verkehrssituationen?", "a": "Durch viele Sensorsignale." },
      { "q": "Wie funktioniert ein Quanteninterferometer?", "a": "Es vergleicht Quantenphasen." },
      { "q": "Wie berechnet KI semantische Zusammenhänge?", "a": "Durch Wortbeziehungen." },
      { "q": "Wie arbeitet ein Josephson‑Qubit?", "a": "Es nutzt supraleitende Übergänge." },
      { "q": "Wie erkennt ein Roboter Materialspannungen?", "a": "Durch Messsensoren." },
      { "q": "Wie funktioniert Lock‑Free‑Multithreading?", "a": "Ohne Blockieren von Threads." }
    ]
  },
  "haushalt": {
    "100": [
      { "q": "Mit welchem Mittel bekommt man Fett am besten weg?", "a": "Mit Spülmittel." },
      { "q": "Wie entfernt man Staub am einfachsten?", "a": "Mit einem Staubtuch." },
      { "q": "Wie bekommt man Krümel vom Tisch?", "a": "Mit einem Lappen oder Handfeger." },
      { "q": "Wie reinigt man eine verschmutzte Pfanne?", "a": "Mit warmem Wasser und Spülmittel." },
      { "q": "Wie bekommt man Fingerabdrücke vom Glas?", "a": "Mit Glasreiniger." },
      { "q": "Wie entfernt man leichte Flecken aus Kleidung?", "a": "Mit Wasser und etwas Waschmittel." },
      { "q": "Wie bekommt man Kalk vom Wasserhahn?", "a": "Mit Essig." },
      { "q": "Wie reinigt man den Esstisch nach dem Essen?", "a": "Mit einem feuchten Lappen." },
      { "q": "Wie entfernt man Brotkrümel vom Boden?", "a": "Mit dem Staubsauger." },
      { "q": "Wie bekommt man Schmutz aus dem Waschbecken?", "a": "Mit Badreiniger." },
      { "q": "Wie reinigt man eine Mikrowelle innen?", "a": "Mit warmem Wasser und einem Lappen." },
      { "q": "Wie bekommt man Fett vom Herd?", "a": "Mit Fettlöser." },
      { "q": "Wie entfernt man Flecken vom Küchentisch?", "a": "Mit Allzweckreiniger." },
      { "q": "Wie reinigt man eine verschmutzte Tasse?", "a": "Mit heißem Wasser und Spülmittel." },
      { "q": "Wie bekommt man Staub von Regalen?", "a": "Mit einem Mikrofasertuch." },
      { "q": "Wie reinigt man eine klebrige Stelle?", "a": "Mit warmem Wasser und Spülmittel." },
      { "q": "Wie bekommt man Schmutz vom Fußboden?", "a": "Mit einem Wischmopp." },
      { "q": "Wie reinigt man eine schmutzige Türklinke?", "a": "Mit Desinfektionsmittel." },
      { "q": "Wie bekommt man Flecken vom Spiegel?", "a": "Mit Glasreiniger." },
      { "q": "Wie entfernt man Krümel aus dem Bett?", "a": "Mit einem Handstaubsauger." },
      { "q": "Wie reinigt man eine klebrige Tischkante?", "a": "Mit warmem Wasser." },
      { "q": "Wie bekommt man Schmutz aus der Spüle?", "a": "Mit Spülmittel und einem Schwamm." },
      { "q": "Wie entfernt man leichte Fettflecken von Kleidung?", "a": "Mit etwas Spülmittel vor dem Waschen." },
      { "q": "Wie reinigt man eine verschmutzte Herdplatte?", "a": "Mit Ceranfeldreiniger." },
      { "q": "Wie bekommt man Staub aus Ecken?", "a": "Mit einem kleinen Bürstenaufsatz." }
    ],

    "200": [
      { "q": "Wie entfernt man hartnäckiges Fett in der Küche?", "a": "Mit starkem Fettlöser." },
      { "q": "Wie bekommt man Kalk aus der Dusche?", "a": "Mit Essig oder Entkalker." },
      { "q": "Wie reinigt man Backbleche?", "a": "Mit heißem Wasser und Spülmittel einweichen." },
      { "q": "Wie entfernt man Schmutz aus Fugen?", "a": "Mit einer kleinen Bürste." },
      { "q": "Wie bekommt man Eingebranntes aus Töpfen?", "a": "Mit Backpulver und heißem Wasser." },
      { "q": "Wie reinigt man eine stark verschmutzte Arbeitsplatte?", "a": "Mit Allzweckreiniger." },
      { "q": "Wie entfernt man Fett vom Backofen?", "a": "Mit Backofenreiniger." },
      { "q": "Wie bekommt man Kalk vom Duschkopf?", "a": "In Essig einlegen." },
      { "q": "Wie reinigt man eine klebrige Kühlschranktür?", "a": "Mit warmem Wasser und Spülmittel." },
      { "q": "Wie entfernt man Schmutz aus dem Abfluss?", "a": "Mit Abflussreiniger." },
      { "q": "Wie bekommt man Flecken aus Teppichen?", "a": "Mit Teppichreiniger." },
      { "q": "Wie reinigt man eine fettige Pfanne?", "a": "Mit heißem Wasser und Spülmittel." },
      { "q": "Wie entfernt man Schimmel im Bad?", "a": "Mit Schimmelentferner." },
      { "q": "Wie bekommt man Kalk vom Wasserkocher?", "a": "Mit Entkalker." },
      { "q": "Wie reinigt man eine klebrige Schublade?", "a": "Mit warmem Wasser." },
      { "q": "Wie entfernt man Fett von Küchenschränken?", "a": "Mit Fettlöser." },
      { "q": "Wie bekommt man Flecken aus Polstermöbeln?", "a": "Mit Polsterreiniger." },
      { "q": "Wie reinigt man eine schmutzige Waschmaschine?", "a": "Mit Maschinenreiniger." },
      { "q": "Wie entfernt man Kalk vom Waschbecken?", "a": "Mit Essigreiniger." },
      { "q": "Wie bekommt man Schmutz aus dem Kühlschrank?", "a": "Mit warmem Wasser und Spülmittel." },
      { "q": "Wie reinigt man eine fettige Dunstabzugshaube?", "a": "Mit Fettlöser." },
      { "q": "Wie entfernt man Flecken von Fliesen?", "a": "Mit Fliesenreiniger." },
      { "q": "Wie bekommt man Schmutz aus dem Backofenboden?", "a": "Mit Backofenreiniger." },
      { "q": "Wie reinigt man eine klebrige Herdknopf-Leiste?", "a": "Mit warmem Wasser." },
      { "q": "Wie entfernt man Kalk aus der Toilette?", "a": "Mit WC‑Reiniger." }
    ],

    "300": [
      { "q": "Wie entfernt man eingebranntes Fett im Backofen?", "a": "Mit starkem Backofenreiniger." },
      { "q": "Wie bekommt man Kalk aus Fliesenfugen?", "a": "Mit Essig und Bürste." },
      { "q": "Wie reinigt man stark verschmutzte Pfannen?", "a": "Mit Einweichlösung und Spülmittel." },
      { "q": "Wie entfernt man hartnäckige Flecken aus Kleidung?", "a": "Mit Fleckentferner." },
      { "q": "Wie bekommt man Fett von der Dunstabzugshaube?", "a": "Mit heißem Wasser und Fettlöser." },
      { "q": "Wie reinigt man eine stark verkalkte Dusche?", "a": "Mit Entkalker und Bürste." },
      { "q": "Wie entfernt man Schmutz aus Heizkörpern?", "a": "Mit einer Heizkörperbürste." },
      { "q": "Wie bekommt man Gerüche aus dem Kühlschrank?", "a": "Mit Natron." },
      { "q": "Wie reinigt man eine stark verschmutzte Spüle?", "a": "Mit Scheuermilch." },
      { "q": "Wie entfernt man Fett von Küchenfliesen?", "a": "Mit Fettlöser." },
      { "q": "Wie bekommt man Kalk aus dem Wasserhahn?", "a": "Mit Essig einwirken lassen." },
      { "q": "Wie reinigt man eine stark verschmutzte Waschmaschine?", "a": "Mit Maschinenreiniger bei 60°C." },
      { "q": "Wie entfernt man Schmutz aus Teppichfasern?", "a": "Mit Teppichbürste und Reiniger." },
      { "q": "Wie bekommt man Fett von Backblechen?", "a": "Mit Einweichen und Spülmittel." },
      { "q": "Wie reinigt man eine klebrige Kühlschrankdichtung?", "a": "Mit warmem Wasser." },
      { "q": "Wie entfernt man Kalk aus dem Duschkopf?", "a": "In Essig einlegen." },
      { "q": "Wie bekommt man Schmutz aus dem Abfluss?", "a": "Mit Abflussreiniger." },
      { "q": "Wie reinigt man eine stark verschmutzte Herdplatte?", "a": "Mit Ceranfeldreiniger." },
      { "q": "Wie entfernt man Fett von Küchengeräten?", "a": "Mit Fettlöser." },
      { "q": "Wie bekommt man Kalk aus dem WC?", "a": "Mit starkem WC‑Reiniger." },
      { "q": "Wie reinigt man eine klebrige Mikrowelle?", "a": "Mit warmem Wasser und Spülmittel." },
      { "q": "Wie entfernt man Schmutz aus Fensterrahmen?", "a": "Mit Bürste und Reiniger." },
      { "q": "Wie bekommt man Fett aus Kleidung?", "a": "Mit Spülmittel vor dem Waschen." },
      { "q": "Wie reinigt man eine stark verschmutzte Arbeitsplatte?", "a": "Mit Allzweckreiniger." },
      { "q": "Wie entfernt man Kalk aus dem Wasserkocher?", "a": "Mit Entkalker." }
    ],

    "400": [
      { "q": "Wie entfernt man extrem hartnäckiges Fett im Backofen?", "a": "Mit Backofenreiniger über Nacht." },
      { "q": "Wie bekommt man Kalk aus stark verschmutzten Fliesen?", "a": "Mit Entkalker und Bürste." },
      { "q": "Wie reinigt man eine stark verkalkte Toilette?", "a": "Mit starkem WC‑Reiniger und Bürste." },
      { "q": "Wie entfernt man Fett von Küchenschränken?", "a": "Mit heißem Wasser und Fettlöser." },
      { "q": "Wie bekommt man Schimmel aus der Dusche?", "a": "Mit Schimmelentferner." },
      { "q": "Wie reinigt man eine stark verschmutzte Dunstabzugshaube?", "a": "Mit Fettlöser und heißem Wasser." },
      { "q": "Wie entfernt man Kalk aus dem Duschglas?", "a": "Mit Essigreiniger und Abzieher." },
      { "q": "Wie bekommt man Gerüche aus Polstermöbeln?", "a": "Mit Natron einreiben." },
      { "q": "Wie reinigt man eine stark verschmutzte Spülmaschine?", "a": "Mit Maschinenreiniger." },
      { "q": "Wie entfernt man Fett aus dem Backofenboden?", "a": "Mit Backofenreiniger." },
      { "q": "Wie bekommt man Kalk aus dem Wasserhahn innen?", "a": "Perlator abschrauben und einlegen." },
      { "q": "Wie reinigt man eine stark verschmutzte Herdplatte?", "a": "Mit Ceranfeldschaber." },
      { "q": "Wie entfernt man Schmutz aus Heizkörperlamellen?", "a": "Mit Heizkörperbürste." },
      { "q": "Wie bekommt man Fett aus Küchengeräten?", "a": "Mit starkem Fettlöser." },
      { "q": "Wie reinigt man eine stark verschmutzte Mikrowelle?", "a": "Mit Dampf und Spülmittel." },
      { "q": "Wie entfernt man Kalk aus dem Wasserkocher stark?", "a": "Mit starkem Entkalker." },
      { "q": "Wie bekommt man Schmutz aus Fensterrahmen tief?", "a": "Mit Bürste und Reiniger." },
      { "q": "Wie reinigt man eine stark verschmutzte Arbeitsplatte?", "a": "Mit Scheuermilch." },
      { "q": "Wie entfernt man Fett aus Kleidung stark?", "a": "Mit Fleckentferner." },
      { "q": "Wie bekommt man Kalk aus der Toilette unten?", "a": "Mit WC‑Reiniger über Nacht." },
      { "q": "Wie reinigt man eine stark verschmutzte Dusche?", "a": "Mit Entkalker und Bürste." },
      { "q": "Wie entfernt man Fett aus Backblechen stark?", "a": "Mit Einweichen und Reiniger." },
      { "q": "Wie bekommt man Schmutz aus Teppichen tief?", "a": "Mit Teppichmaschine." },
      { "q": "Wie reinigt man eine stark verschmutzte Küche?", "a": "Mit Fettlöser und heißem Wasser." },
      { "q": "Wie entfernt man Kalk aus Fliesen stark?", "a": "Mit Entkalker." }
    ],

    "500": [
      { "q": "Wie entfernt man extrem eingebranntes Fett im Backofen?", "a": "Mit Backofenreiniger und langer Einwirkzeit." },
      { "q": "Wie bekommt man Kalk aus stark verkalkten Armaturen?", "a": "Mit starkem Entkalker." },
      { "q": "Wie reinigt man eine komplett verkalkte Dusche?", "a": "Mit Entkalker und intensiver Bürste." },
      { "q": "Wie entfernt man extrem hartnäckige Flecken aus Kleidung?", "a": "Mit Spezialfleckentferner." },
      { "q": "Wie bekommt man Schimmel aus Fugen?", "a": "Mit Schimmelentferner und Bürste." },
      { "q": "Wie reinigt man eine stark verschmutzte Dunstabzugshaube innen?", "a": "Mit Fettlöser und heißem Wasser." },
      { "q": "Wie entfernt man Kalk aus dem Wasserkocher komplett?", "a": "Mit starkem Entkalker und Einweichen." },
      { "q": "Wie bekommt man Gerüche aus Teppichen?", "a": "Mit Teppichreiniger und Natron." },
      { "q": "Wie reinigt man eine stark verschmutzte Waschmaschine?", "a": "Mit Maschinenreiniger bei hoher Temperatur." },
      { "q": "Wie entfernt man Fett aus Küchenschränken stark?", "a": "Mit heißem Wasser und Fettlöser." },
      { "q": "Wie bekommt man Kalk aus der Toilette komplett?", "a": "Mit starkem WC‑Reiniger über Nacht." },
      { "q": "Wie reinigt man eine stark verschmutzte Mikrowelle komplett?", "a": "Mit Dampf und Reiniger." },
      { "q": "Wie entfernt man Schmutz aus Heizkörpern tief?", "a": "Mit Heizkörperbürste und Staubsauger." },
      { "q": "Wie bekommt man Fett aus Backblechen komplett?", "a": "Mit Einweichen und Scheuermilch." },
      { "q": "Wie reinigt man eine stark verschmutzte Küche komplett?", "a": "Mit Fettlöser und heißem Wasser." },
      { "q": "Wie entfernt man Kalk aus Fliesen komplett?", "a": "Mit starkem Entkalker." },
      { "q": "Wie bekommt man Schmutz aus Teppichen komplett?", "a": "Mit Teppichmaschine." },
      { "q": "Wie reinigt man eine stark verschmutzte Arbeitsplatte komplett?", "a": "Mit Scheuermilch und Bürste." },
      { "q": "Wie entfernt man Fett aus Kleidung komplett?", "a": "Mit starkem Fleckentferner." },
      { "q": "Wie bekommt man Kalk aus dem Duschkopf komplett?", "a": "Mit Entkalker über Nacht." }
    ]
  }
};

/* ============================
   PREMIUM CHECK
============================ */

const hasPremium = localStorage.getItem("premium") === "true";

/* ============================
   CATEGORY SETUP
============================ */

const categorySelect = document.getElementById("category");

function loadCategories() {
  categorySelect.innerHTML = "";

  const free = document.createElement("option");
  free.value = "zufall";
  free.textContent = "Zufall";
  categorySelect.appendChild(free);

  const premiumCats = ["sport", "wirtschaft", "tiere", "geografie", "unützes Wissen", "musik", "filme & Serien", "geschichte", "social Media", "wissenschaft", "essen & Trinken", "gaming", "kunst & Kultur", "auto & Verkehr", "mode & Lifestyle", "Reise & Kulturen", "natur", "technik", "haushalt"];

  premiumCats.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;

    if (hasPremium) {
      opt.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
      opt.disabled = false;
    } else {
      opt.textContent = cat.charAt(0).toUpperCase() + cat.slice(1) + " (Premium 💎)";
      opt.disabled = true;
    }

    categorySelect.appendChild(opt);
  });
}

loadCategories();

/* ============================
   TEAM SETUP
============================ */

const teamCountSelect = document.getElementById("team-count");
const teamNamesDiv = document.getElementById("team-names");

teamCountSelect.addEventListener("change", () => {
  teamNamesDiv.innerHTML = "";
  const count = parseInt(teamCountSelect.value);

  for (let i = 1; i <= count; i++) {
    const input = document.createElement("input");
    input.placeholder = "Team " + i + " Name";
    input.id = "team-" + i;
    teamNamesDiv.appendChild(input);
  }
});

/* ============================
   GAME LOGIC
============================ */

let teams = [];
let scores = {};
let currentTeamIndex = 0;
let usedFields = {};
let currentCategory = "";
let currentPoints = 0;
let currentButton = null;

document.getElementById("start-game").addEventListener("click", () => {
  const count = parseInt(teamCountSelect.value);
  teams = [];

  for (let i = 1; i <= count; i++) {
    const name = document.getElementById("team-" + i).value || ("Team " + i);
    teams.push(name);
    scores[name] = 0;
  }

  currentCategory = categorySelect.value;

  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");

  currentTeamIndex = Math.floor(Math.random() * teams.length);
  document.getElementById("current-team").textContent = "Team: "  + teams[currentTeamIndex];

  createBoard();
  updateScoreboard();
});

/* ============================
   BOARD CREATION
============================ */

function createBoard() {
  const board = document.getElementById("board");
  board.innerHTML = "";

  let categories;

  if (currentCategory === "zufall") {
    const all = ["sport", "wirtschaft", "tiere", "geografie", "unützes Wissen", "musik", "filme & Serien", "geschichte", "social Media", "wissenschaft", "essen & Trinken", "gaming", "kunst & Kultur", "auto & Verkehr", "mode & Lifestyle", "Reise & Kulturen", "natur", "technik", "haushalt"];
    categories = all.sort(() => Math.random() - 0.5).slice(0, 4);
  } else {
    categories = [currentCategory, currentCategory, currentCategory, currentCategory];
  }

  usedFields = {};

  categories.forEach((cat, index) => {
    const key = cat + "_" + index;
    usedFields[key] = {100:false,200:false,300:false,400:false,500:false};

    const col = document.createElement("div");
    col.className = "board-column col-" + index;

    const header = document.createElement("div");
    header.className = "col-header";
    header.textContent = cat.toUpperCase();
    col.appendChild(header);

    [100,200,300,400,500].forEach(points => {
      const btn = document.createElement("button");
      btn.textContent = points;
      btn.onclick = () => selectField(cat, points, btn, key);
      col.appendChild(btn);
    });

    board.appendChild(col);
  });
}

/* ============================
   FIELD SELECTION
============================ */

function selectField(cat, points, btn, key) {
  currentPoints = points;
  currentButton = btn;

  const pool = questions[cat][points];
  const random = pool[Math.floor(Math.random() * pool.length)];

  const question = random.q;
  const answer = random.a;

  popup(question, () => {
    popup(answer, () => {
      popup("War die Antwort richtig?", () => {
        scoreCorrect(key, points);
      }, () => {
        scoreWrong(key, points);
      });
    });
  });
}

/* ============================
   POPUP SYSTEM
============================ */

function popup(text, onNext, onNo) {
  const p = document.getElementById("popup");
  p.innerHTML = "";

  const content = document.createElement("div");
  content.innerHTML = "<h3>" + text + "</h3>";
  p.appendChild(content);

  if (onNext && onNo) {
    const yesBtn = document.createElement("button");
    yesBtn.textContent = "Richtig";
    yesBtn.className = "menu-button";
    yesBtn.onclick = () => {
      p.classList.add("hidden");
      onNext();
    };

    const noBtn = document.createElement("button");
    noBtn.textContent = "Falsch";
    noBtn.className = "menu-button";
    noBtn.onclick = () => {
      p.classList.add("hidden");
      onNo();
    };

    p.appendChild(yesBtn);
    p.appendChild(noBtn);
  } else {
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Weiter";
    nextBtn.className = "menu-button";
    nextBtn.onclick = () => {
      p.classList.add("hidden");
      onNext();
    };
    p.appendChild(nextBtn);
  }

  p.classList.remove("hidden");
}

/* ============================
   ANIMATION SYSTEM
============================ */

function showPointAnimation(points, btn) {
  const anim = document.createElement("div");
  anim.className = "point-float";
  anim.textContent = "+" + points;

  const rect = btn.getBoundingClientRect();
  anim.style.left = rect.left + rect.width / 2 + "px";
  anim.style.top = rect.top + "px";

  document.body.appendChild(anim);

  setTimeout(() => anim.remove(), 1000);
}

function animateScoreboard(team) {
  const sb = document.getElementById("scoreboard");
  const lines = sb.querySelectorAll("div");

  lines.forEach(line => {
    if (line.dataset.team === team) {
      line.classList.add("score-anim");
      setTimeout(() => line.classList.remove("score-anim"), 600);
    }
  });
}

/* ============================
   SCORE HANDLING
============================ */

function scoreCorrect(key, points) {
  const team = teams[currentTeamIndex];
  scores[team] += currentPoints;

  showPointAnimation(points, currentButton);

  updateScoreboard();
  animateScoreboard(team);

  usedFields[key][points] = true;
  currentButton.classList.add("used");

  nextTeam();
}

function scoreWrong(key, points) {
  usedFields[key][points] = true;
  currentButton.classList.add("used");

  nextTeam();
}

/* ============================
   TEAM ROTATION
============================ */

function nextTeam() {
  currentTeamIndex = (currentTeamIndex + 1) % teams.length;

  document.getElementById("current-team").textContent =
    "Team: " + teams[currentTeamIndex];

  updateScoreboard();

  if (allFieldsUsed()) {
    endGame();
  }
}

/* ============================
   ALL FIELDS USED?
============================ */

function allFieldsUsed() {
  for (let key in usedFields) {
    for (let p in usedFields[key]) {
      if (!usedFields[key][p]) return false;
    }
  }
  return true;
}

/* ============================
   SCOREBOARD
============================ */

function updateScoreboard() {
  const sb = document.getElementById("scoreboard");
  sb.innerHTML = "<h3>Punkte</h3>";

  teams.forEach(t => {
    const line = document.createElement("div");
    line.dataset.team = t;
    line.textContent = `${t}: ${scores[t]} Punkte`;
    sb.appendChild(line);
  });
}

/* ============================
   END GAME
============================ */

function endGame() {
  document.getElementById("game-screen").classList.add("hidden");
  document.getElementById("end-screen").classList.remove("hidden");

  let winner = teams[0];
  teams.forEach(t => {
    if (scores[t] > scores[winner]) winner = t;
  });

  document.getElementById("final-winner").textContent = "Gewinner: " + winner;

  const fs = document.getElementById("final-scoreboard");
  fs.innerHTML = "<h3>Endstand</h3>";
  teams.forEach(t => {
    fs.innerHTML += t + ": " + scores[t] + "<br>";
  });
}

document.getElementById("restart-game").addEventListener("click", () => {
  location.reload();
});
