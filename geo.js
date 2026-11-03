const subGamesData = {
    geography: [

        { id: 'all_countries', name: 'Alle Länder der Erde', count: 197, group: 'Hauptspiele', infoType: 'pop' },
        { id: 'europe_countries', name: 'Alle Länder Europas', count: 47, group: 'Kontinente', infoType: 'pop' },
{ id: 'countries_in_space', name: 'Länder, die bereits eine Person im All hatten', count: 50, group: 'Eigenschaften & Merkmale', infoType: 'custom', desc: 'Staaten, deren Bürger (Astronauten/Kosmonauten) bereits im Weltraum waren (inkl. Name einer Person als Lösung).' },
        { id: 'top15_animal_species', name: 'Top 15 Länder mit den meisten Tierarten', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit der weltweit größten Biodiversität an Wirbeltieren und Insekten.' },
        { id: 'top15_snake_bites', name: 'Top 15 Länder mit den meisten tödlichen Schlangenbissen', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit den meisten Todesfällen durch Schlangenbisse pro Jahr.' },
        { id: 'european_non_latin_alphabet', name: 'Europäische Länder ohne lateinisches Alphabet', count: 7, group: 'Eigenschaften & Merkmale', infoType: 'custom', desc: 'Europäische Staaten, die standardmäßig ein anderes Alphabet (z.B. Kyrillisch oder Griechisch) nutzen.' },
        { id: 'countries_mountain_6000m', name: 'Länder mit einem Berg über 6000 Meter', count: 15, group: 'Eigenschaften & Merkmale', infoType: 'custom', desc: 'Staaten, auf deren Gebiet sich mindestens ein Berg mit über 6.000 Metern Höhe befindet.' },
        { id: 'top15_richest_wealth', name: 'Top 15 reichste Länder (Durchschnittsvermögen)', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit dem höchsten durchschnittlichen Vermögen pro erwachsener Person.' },
        { id: 'top15_poorest_wealth', name: 'Top 15 ärmste Länder (Durchschnittsvermögen)', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit dem niedrigsten durchschnittlichen Vermögen pro erwachsener Person.' },
        
        { id: 'asien_countries', name: 'Alle Länder Asiens', count: 47, group: 'Kontinente', infoType: 'pop' },
        { id: 'afrika_countries', name: 'Alle Länder Afrikas', count: 54, group: 'Kontinente', infoType: 'pop' },
        { id: 'amerika_countries', name: 'Alle Länder Nord-/Südamerikas', count: 35, group: 'Kontinente', infoType: 'pop' },
        { id: 'ozeanien_countries', name: 'Alle Länder Ozeaniens', count: 14, group: 'Kontinente', infoType: 'pop' },
// Neue Kategorien für subGamesData:
{ id: 'top15_meat_consumption', name: 'Top 15 Länder mit dem höchsten Fleischkonsum', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit dem höchsten jährlichen Fleischkonsum pro Kopf (in kg).' },
{ id: 'bundesliga_players_countries', name: 'Länder mit den meisten Bundesliga-Spielern', count: 10, group: 'Eigenschaften & Merkmale', infoType: 'custom', desc: 'Die Herkunftsländer, aus denen die meisten Spieler in der Fußball-Bundesliga kommen.' },
{ id: 'top15_tourists', name: 'Top 15 Länder mit den meisten Touristen', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit den weltweit meisten internationalen Touristenankünften pro Jahr.' },
{ id: 'soviet_union_current', name: 'Länder der ehemaligen Sowjetunion (heutige Staaten)', count: 15, group: 'Eigenschaften & Merkmale', infoType: 'custom', desc: 'Die 15 unabhängigen Staaten, die heute aus der ehemaligen Sowjetunion hervorgegangen sind.' },
{ id: 'danube_countries', name: 'Länder an der Donau', count: 10, group: 'Eigenschaften & Merkmale', infoType: 'custom', desc: 'Staaten, die direkt am oder im Einzugsgebiet der Donau liegen (offizielle Anrainerstaaten).' },
{ id: 'india_borders', name: 'Länder, die an Indien grenzen', count: 6, group: 'Eigenschaften & Merkmale', infoType: 'custom', desc: 'Die direkten Landnachbarn von Indien.' },
{ id: 'top15_german_tourists', name: 'Top 15 Reiseziele der Deutschen', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder, die von deutschen Touristen am häufigsten bereist werden.' },
{ id: 'top15_best_cuisine', name: 'Top 15 Länder mit der besten Küche', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit international am besten bewerteter Esskultur (nach TasteAtlas-Index).' },
{ id: 'top15_highest_inflation', name: 'Top 15 Länder mit der höchsten Inflation', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit der aktuell höchsten Inflationsrate im Jahr 2026 (jährliche Teuerungsrate).' },
{ id: 'ending_with_i', name: 'Länder, die auf "i" enden', count: 18, group: 'Alphabetisch A-Z', infoType: 'capital', desc: 'Souveräne Staaten auf Deutsch, deren Name auf den Buchstaben "i" endet.' },
{ id: 'four_letter_countries', name: 'Länder mit genau 4 Buchstaben', count: 8, group: 'Alphabetisch A-Z', infoType: 'capital', desc: 'Staaten, deren deutscher Name exakt aus 4 Buchstaben besteht.' },
{ id: 'top15_most_letters', name: 'Top 15 Länder mit den meisten Buchstaben', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Die Länder mit den längsten offiziellen deutschen Namen (reine Buchstaben gezählt).' },
{ id: 'top15_olympics', name: 'Top 15 Länder mit den meisten olympischen Medaillen', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Die erfolgreichsten Nationen der olympischen Geschichte nach Gesamtzahl der Medaillen.' },
        { id: 'top15_holidays', name: 'Top 15 Länder mit den meisten Feiertagen im Jahr', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit den meisten offiziellen gesetzlichen Feiertagen pro Jahr.' },
        { id: 'transcontinental_countries', name: 'Länder auf 2 Kontinenten', count: 5, group: 'Eigenschaften & Merkmale', infoType: 'custom', desc: 'Staaten, die geografisch auf zwei Kontinenten liegen.' },
        { id: 'enclaved_countries', name: 'Länder komplett von einem Land umschlossen', count: 3, group: 'Eigenschaften & Merkmale', infoType: 'custom', desc: 'Enklaven, die vollständig vom Staatsgebiet eines einzigen anderen Landes umgeben sind.' },
        { id: 'mediterranean_countries', name: 'Länder mit Küste zum Mittelmeer', count: 21, group: 'Eigenschaften & Merkmale', infoType: 'pop', desc: 'Alle Anrainerstaaten des Mittelmeers.' },
        { id: 'usd_countries', name: 'Länder mit US-Dollar als Währung', count: 9, group: 'Eigenschaften & Merkmale', infoType: 'pop', desc: 'Staaten, die den US-Dollar als offizielles Zahlungsmittel nutzen.' },
        { id: 'north_equator', name: 'Länder nördlich des Äquators', count: 158, group: 'Eigenschaften & Merkmale', infoType: 'pop', desc: 'Länder, die ganz oder größtenteils auf der Nordhalbkugel liegen.' },
        { id: 'south_equator', name: 'Länder südlich des Äquators', count: 46, group: 'Eigenschaften & Merkmale', infoType: 'pop', desc: 'Länder, die ganz oder größtenteils auf der Südhalbkugel liegen.' },
        { id: 'top15_newest_countries', name: 'Top 15 jüngste Länder', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Die nach Gründungsjahr jüngsten unabhängigen Staaten der Erde.' },
        
        { id: 'population_100m', name: 'Länder mit über 100 Mio. Einwohnern', count: 16, group: 'Eigenschaften & Merkmale', infoType: 'pop', desc: 'Staaten mit einer Bevölkerung von über 100 Millionen Menschen.' },
        { id: 'eu_countries', name: 'Länder der Europäischen Union', count: 27, group: 'Eigenschaften & Merkmale', infoType: 'pop', desc: 'Alle aktuellen Mitgliedstaaten der Europäischen Union.' },
        { id: 'island_countries', name: 'Inselstaaten', count: 39, group: 'Eigenschaften & Merkmale', infoType: 'pop', desc: 'Inselstaaten, die keine direkten Landgrenzen zu anderen Ländern besitzen.' },
        { id: 'binnenstaaten', name: 'Binnenstaaten', count: 44, group: 'Eigenschaften & Merkmale', infoType: 'pop', desc: 'Staaten, die vollständig von Land umgeben sind und keinen eigenen Meereszugang haben.' },
        { id: 'monarchies', name: 'Monarchien', count: 44, group: 'Eigenschaften & Merkmale', infoType: 'pop', desc: 'Staaten, deren Staatsoberhaupt ein Monarch (König, Kaiser, Fürst etc.) ist.' },
        { id: 'population_1m', name: 'Kleinstaaten', count: 40, group: 'Eigenschaften & Merkmale', infoType: 'pop', desc: 'Staaten mit jeweils unter 1 Million Einwohnern.' },
        { id: 'g20_countries', name: 'G20-Staaten', count: 18, group: 'Eigenschaften & Merkmale', infoType: 'pop', desc: 'Die wichtigsten Industrie- und Schwellenländer der Welt.' },
        { id: 'nato_countries', name: 'NATO-Mitglieder', count: 32, group: 'Eigenschaften & Merkmale', infoType: 'pop', desc: 'Mitgliedstaaten des nordatlantischen Verteidigungsbündnisses.' },
        { id: 'euro_countries', name: 'Länder mit Euro-Währung', count: 21, group: 'Eigenschaften & Merkmale', infoType: 'pop', desc: 'Länder der europäischen Wirtschafts- und Währungsunion, die den Euro als offizielles Zahlungsmittel nutzen.' },


{ id: 'top15_area_high', name: 'Top 15 Länder mit der meisten Fläche', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Die nach Gesamtfläche größten Länder der Erde (in km²).' },
        { id: 'top15_area_low', name: 'Top 15 Länder mit der niedrigsten Fläche', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Die kleinsten souveränen Staaten der Welt nach Fläche (in km²).' },
        { id: 'one_neighbor', name: 'Länder mit nur einem Nachbarstaat', count: 14, group: 'Eigenschaften & Merkmale', infoType: 'pop', desc: 'Staaten, die exakt eine einzige internationale Landgrenze besitzen.' },
        { id: 'top15_temp_high', name: 'Top 15 Länder mit der höchsten Durchschnittstemperatur', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit den höchsten landesweiten Jahrestemperaturen (in °C).' },
        { id: 'top15_temp_low', name: 'Top 15 Länder mit der niedrigsten Durchschnittstemperatur', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Die kältesten Länder der Welt nach durchschnittlicher Jahrestemperatur (in °C).' },
        { id: 'top15_coffee', name: 'Top 15 Länder mit dem höchsten Kaffeekonsum', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Der jährliche Kaffeekonsum pro Kopf (in kg).' },
        { id: 'top15_beer', name: 'Top 15 Länder mit dem höchsten Bierkonsum', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Der jährliche Bierkonsum pro Kopf (in Litern).' },
        { id: 'top15_fastfood', name: 'Top 15 Länder mit den meisten Fast-Food-Restaurants', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit der absoluten Höchstanzahl an großen Fast-Food-Ketten.' },
        { id: 'top15_forest', name: 'Top 15 waldreichsten Länder', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit dem größten prozentualen Waldanteil an der Gesamtlandesfläche.' },
        { id: 'top15_young_pop', name: 'Top 15 Länder mit der jüngsten Bevölkerung', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit dem niedrigsten Altersdurchschnitt der Bevölkerung.' },
        { id: 'top15_old_pop', name: 'Top 15 Länder mit der ältesten Bevölkerung', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit dem höchsten Altersdurchschnitt der Bevölkerung.' },
        { id: 'top15_happy', name: 'Top 15 glücklichste Länder', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Die bestplatzierten Länder im World Happiness Report.' },
        { id: 'top15_safe', name: 'Top 15 sicherste Länder', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit den niedrigsten Kriminalitäts- und Mordraten weltweit.' },
        { id: 'top15_military', name: 'Top 15 Länder mit dem größten Militär', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit den meisten aktiven Soldaten im Militär.' },
        { id: 'top15_rain_high', name: 'Top 15 regenreichsten Länder', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit dem höchsten durchschnittlichen Jahresniederschlag (in mm pro Jahr).' },
        { id: 'top15_elevation_low', name: 'Top 15 Länder mit der niedrigsten Durchschnittshöhe', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Die flachsten Länder der Welt gemessen an der durchschnittlichen Höhe über dem Meeresspiegel (in m).' },
        { id: 'top15_elevation_high', name: 'Top 15 Länder mit der höchsten Durchschnittshöhe', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Die am höchsten gelegenen Gebirgsländer der Welt nach durchschnittlicher Höhe (in m).' },
        { id: 'top15_timezones', name: 'Top 15 Länder mit den meisten Zeitzonen', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder sortiert nach der Gesamtzahl der Zeitzonen inklusive Überseegebiete.' },
        { id: 'top15_borders', name: 'Top 15 Länder mit den meisten Nachbarn', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder, die die meisten direkten internationalen Landgrenzen teilen.' },
{ id: 'top15_life_expectancy', name: 'Top 15 Länder mit der höchsten Lebenserwartung', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder, in denen die Menschen bei der Geburt statistisch gesehen die höchste Lebenserwartung haben.' },
{ id: 'top15_old_pop_median', name: 'Top 15 Länder mit dem höchsten Durchschnittsalter', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Die Staaten mit dem weltweit höchsten Median-Alter der Bevölkerung.' },
{ id: 'top15_young_pop_median', name: 'Top 15 Länder mit dem niedrigsten Durchschnittsalter', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Die Staaten mit dem weltweit niedrigsten Median-Alter der Bevölkerung.' },
        { id: 'top15_low_density', name: 'Top 15 Länder mit der niedrigsten Dichte', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Die am dünnsten besiedelten Länder der Welt (gemessen an Einwohnern pro km²).' },
        { id: 'top15_languages', name: 'Top 15 Länder mit den meisten Sprachen', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit den meisten offiziell anerkannten Amtssprachen.' },
        { id: 'top15_islands', name: 'Top 15 Länder mit den meisten Inseln', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit den weltweitem Inselreichtum (Tausende Inseln).' },
        { id: 'top15_coastline', name: 'Top 15 Länder mit den längsten Küsten', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Die Länder mit der insgesamt längsten Meeresküstenlinie in Kilometern.' },
        { id: 'top15_high_birth', name: 'Top 15 Länder mit den höchsten Geburten', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit den höchsten Geburtenraten (Geburten pro 1.000 Einwohner).' },
        { id: 'top15_low_birth', name: 'Top 15 Länder mit den niedrigsten Geburten', count: 15, group: 'Top 15 Rekorde', infoType: 'custom', desc: 'Länder mit den niedrigsten Geburtenraten (Geburten pro 1.000 Einwohner).' },

        { id: 'spanish_speaking', name: 'Spanischsprachige Länder', count: 20, group: 'Sprachen', infoType: 'lang' },
        { id: 'french_speaking', name: 'Französischsprachige Länder', count: 28, group: 'Sprachen', infoType: 'lang' },
        { id: 'arabic_speaking', name: 'Arabischsprachige Länder', count: 23, group: 'Sprachen', infoType: 'lang' },

        { id: 'starting_with_a', name: 'Länder mit A', count: 10, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_b', name: 'Länder mit B', count: 17, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_c', name: 'Länder mit C', count: 3, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_d', name: 'Länder mit D', count: 6, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_e', name: 'Länder mit E', count: 6, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_f', name: 'Länder mit F', count: 3, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_g', name: 'Länder mit G', count: 10, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_h', name: 'Länder mit H', count: 2, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_i', name: 'Länder mit I', count: 8, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_j', name: 'Länder mit J', count: 4, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_k', name: 'Länder mit K', count: 15, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_l', name: 'Länder mit L', count: 9, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_m', name: 'Länder mit M', count: 18, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_n', name: 'Länder mit N', count: 11, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_o', name: 'Länder mit O', count: 2, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_p', name: 'Länder mit P', count: 10, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_r', name: 'Länder mit R', count: 4, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_s', name: 'Länder mit S', count: 28, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_t', name: 'Länder mit T', count: 13, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_u', name: 'Länder mit U', count: 5, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_v', name: 'Länder mit V', count: 7, group: 'Alphabetisch A-Z', infoType: 'capital' },
        { id: 'starting_with_z', name: 'Länder mit Z', count: 2, group: 'Alphabetisch A-Z', infoType: 'capital' }
    ]
};

const countriesDatabase = {
    all_countries: [
        { name: "🇹🇷 Türkei", cleanName: "Türkei", continent: "Europa", pop: "85 Mio. Einw.", capital: "Ankara", lang: "Türkisch" },
        { name: "🇩🇪 Deutschland", cleanName: "Deutschland", continent: "Europa", pop: "84 Mio. Einw.", capital: "Berlin", lang: "Deutsch" },
        { name: "🇫🇷 Frankreich", cleanName: "Frankreich", continent: "Europa", pop: "68 Mio. Einw.", capital: "Paris", lang: "Französisch" },
        { name: "🇮🇹 Italien", cleanName: "Italien", continent: "Europa", pop: "59 Mio. Einw.", capital: "Rom", lang: "Italienisch" },
        { name: "🇪🇸 Spanien", cleanName: "Spanien", continent: "Europa", pop: "48 Mio. Einw.", capital: "Madrid", lang: "Spanisch" },
        { name: "🇬🇧 Vereinigtes Königreich / Großbritannien", cleanName: "Vereinigtes Königreich / Großbritannien", continent: "Europa", pop: "67 Mio. Einw.", capital: "London", lang: "Englisch" },
        { name: "🇵🇱 Polen", cleanName: "Polen", continent: "Europa", pop: "37 Mio. Einw.", capital: "Warschau", lang: "Polnisch" },
        { name: "🇺🇦 Ukraine", cleanName: "Ukraine", continent: "Europa", pop: "38 Mio. Einw.", capital: "Kiew", lang: "Ukrainisch" },
        { name: "🇷🇴 Rumänien", cleanName: "Rumänien", continent: "Europa", pop: "19 Mio. Einw.", capital: "Bukarest", lang: "Rumänisch" },
        { name: "🇳🇱 Niederlande", cleanName: "Niederlande", continent: "Europa", pop: "18 Mio. Einw.", capital: "Amsterdam", lang: "Niederländisch" },
        { name: "🇧🇪 Belgien", cleanName: "Belgien", continent: "Europa", pop: "11,7 Mio. Einw.", capital: "Brüssel", lang: "Niederländisch/Französisch" },
        { name: "🇨🇿 Tschechien", cleanName: "Tschechien", continent: "Europa", pop: "10,8 Mio. Einw.", capital: "Prag", lang: "Tschechisch" },
        { name: "🇬🇷 Griechenland", cleanName: "Griechenland", continent: "Europa", pop: "10,4 Mio. Einw.", capital: "Athen", lang: "Griechisch" },
        { name: "🇸🇪 Schweden", cleanName: "Schweden", continent: "Europa", pop: "10,5 Mio. Einw.", capital: "Stockholm", lang: "Schwedisch" },
        { name: "🇵🇹 Portugal", cleanName: "Portugal", continent: "Europa", pop: "10,4 Mio. Einw.", capital: "Lissabon", lang: "Portugiesisch" },
        { name: "🇭🇺 Ungarn", cleanName: "Ungarn", continent: "Europa", pop: "9,6 Mio. Einw.", capital: "Budapest", lang: "Ungarisch" },
        { name: "🇦🇹 Österreich", cleanName: "Österreich", continent: "Europa", pop: "9,1 Mio. Einw.", capital: "Wien", lang: "Deutsch" },
        { name: "🇨🇭 Schweiz", cleanName: "Schweiz", continent: "Europa", pop: "8,9 Mio. Einw.", capital: "Bern", lang: "Deutsch/Französisch" },
        { name: "🇷🇸 Serbien", cleanName: "Serbien", continent: "Europa", pop: "6,6 Mio. Einw.", capital: "Belgrad", lang: "Serbisch" },
        { name: "🇧🇬 Bulgarien", cleanName: "Bulgarien", continent: "Europa", pop: "6,4 Mio. Einw.", capital: "Sofia", lang: "Bulgarisch" },
        { name: "🇩🇰 Dänemark", cleanName: "Dänemark", continent: "Europa", pop: "5,9 Mio. Einw.", capital: "Kopenhagen", lang: "Dänisch" },
        { name: "🇫🇮 Finnland", cleanName: "Finnland", continent: "Europa", pop: "5,6 Mio. Einw.", capital: "Helsinki", lang: "Finnisch" },
        { name: "🇸🇰 Slowakei", cleanName: "Slowakei", continent: "Europa", pop: "5,4 Mio. Einw.", capital: "Bratislava", lang: "Slowakisch" },
        { name: "🇳🇴 Norwegen", cleanName: "Norwegen", continent: "Europa", pop: "5,5 Mio. Einw.", capital: "Oslo", lang: "Norwegisch" },
        { name: "🇮🇪 Irland", cleanName: "Irland", continent: "Europa", pop: "5,3 Mio. Einw.", capital: "Dublin", lang: "Englisch/Irisch" },
        { name: "🇭🇷 Kroatien", cleanName: "Kroatien", continent: "Europa", pop: "3,8 Mio. Einw.", capital: "Zagreb", lang: "Kroatisch" },
        { name: "🇧🇦 Bosnien und Herzegowina", cleanName: "Bosnien und Herzegowina", continent: "Europa", pop: "3,2 Mio. Einw.", capital: "Sarajewo", lang: "Bosnisch/Kroatisch/Serbisch" },
        { name: "🇦🇱 Albanien", cleanName: "Albanien", continent: "Europa", pop: "2,7 Mio. Einw.", capital: "Tirana", lang: "Albanisch" },
        { name: "🇱🇹 Litauen", cleanName: "Litauen", continent: "Europa", pop: "2,8 Mio. Einw.", capital: "Vilnius", lang: "Litauisch" },
        { name: "🇸🇮 Slowenien", cleanName: "Slowenien", continent: "Europa", pop: "2,1 Mio. Einw.", capital: "Ljubljana", lang: "Slowenisch" },
        { name: "🇱🇻 Lettland", cleanName: "Lettland", continent: "Europa", pop: "1,8 Mio. Einw.", capital: "Riga", lang: "Lettisch" },
        { name: "🇽🇰 Kosovo", cleanName: "Kosovo", continent: "Europa", pop: "1,7 Mio. Einw.", capital: "Pristina", lang: "Albanisch/Serbisch" },
        { name: "🇪🇪 Estland", cleanName: "Estland", continent: "Europa", pop: "1,3 Mio. Einw.", capital: "Tallinn", lang: "Estnisch" },
        { name: "🇲🇪 Montenegro", cleanName: "Montenegro", continent: "Europa", pop: "620 Tsd. Einw.", capital: "Podgorica", lang: "Montenegrinisch" },
        { name: "🇱🇺 Luxemburg", cleanName: "Luxemburg", continent: "Europa", pop: "660 Tsd. Einw.", capital: "Luxemburg", lang: "Luxemburgisch/Französisch" },
        { name: "🇲🇹 Malta", cleanName: "Malta", continent: "Europa", pop: "530 Tsd. Einw.", capital: "Valletta", lang: "Maltesisch/Englisch" },
        { name: "🇮🇸 Island", cleanName: "Island", continent: "Europa", pop: "390 Tsd. Einw.", capital: "Reykjavík", lang: "Isländisch" },
        { name: "🇦🇩 Andorra", cleanName: "Andorra", continent: "Europa", pop: "80 Tsd. Einw.", capital: "Andorra la Vella", lang: "Katalanisch" },
        { name: "🇲🇨 Monaco", cleanName: "Monaco", continent: "Europa", pop: "39 Tsd. Einw.", capital: "Monaco", lang: "Französisch" },
        { name: "🇱🇮 Liechtenstein", cleanName: "Liechtenstein", continent: "Europa", pop: "40 Tsd. Einw.", capital: "Vaduz", lang: "Deutsch" },
        { name: "🇸🇲 San Marino", cleanName: "San Marino", continent: "Europa", pop: "34 Tsd. Einw.", capital: "San Marino", lang: "Italienisch" },
        { name: "🇻🇦 Vatikanstadt", cleanName: "Vatikanstadt", continent: "Europa", pop: "800 Einw.", capital: "Vatikanstadt", lang: "Italienisch/Latein" },
        { name: "🇲🇰 Nordmazedonien", cleanName: "Nordmazedonien", continent: "Europa", pop: "1,8 Mio. Einw.", capital: "Skopje", lang: "Mazedonisch" },
        { name: "🇲🇩 Moldau", cleanName: "Moldau", continent: "Europa", pop: "2,4 Mio. Einw.", capital: "Chisinau", lang: "Rumänisch" },
        { name: "🇧🇾 Belarus", cleanName: "Belarus", continent: "Europa", pop: "9,2 Mio. Einw.", capital: "Minsk", lang: "Belarussisch/Russisch" },
        { name: "🇷🇺 Russland", cleanName: "Russland", continent: "Europa", pop: "144 Mio. Einw.", capital: "Moskau", lang: "Russisch" },

        { name: "🇨🇳 China", cleanName: "China", continent: "Asien", pop: "1,41 Mrd. Einw.", capital: "Peking", lang: "Chinesisch" },
        { name: "🇮🇳 Indien", cleanName: "Indien", continent: "Asien", pop: "1,43 Mrd. Einw.", capital: "Neu-Delhi", lang: "Hindi/Englisch" },
        { name: "🇮🇩 Indonesien", cleanName: "Indonesien", continent: "Asien", pop: "277 Mio. Einw.", capital: "Jakarta", lang: "Indonesisch" },
        { name: "🇵🇰 Pakistan", cleanName: "Pakistan", continent: "Asien", pop: "240 Mio. Einw.", capital: "Islamabad", lang: "Urdu/Englisch" },
        { name: "🇧🇩 Bangladesch", cleanName: "Bangladesch", continent: "Asien", pop: "173 Mio. Einw.", capital: "Dhaka", lang: "Bengalisch" },
        { name: "🇯🇵 Japan", cleanName: "Japan", continent: "Asien", pop: "124 Mio. Einw.", capital: "Tokio", lang: "Japanisch" },
        { name: "🇵🇭 Philippinen", cleanName: "Philippinen", continent: "Asien", pop: "117 Mio. Einw.", capital: "Manila", lang: "Filipino/Englisch" },
        { name: "🇻🇳 Vietnam", cleanName: "Vietnam", continent: "Asien", pop: "98 Mio. Einw.", capital: "Hanoi", lang: "Vietnamesisch" },
        { name: "🇮🇷 Iran", cleanName: "Iran", continent: "Asien", pop: "89 Mio. Einw.", capital: "Teheran", lang: "Persisch" },
        { name: "🇹🇭 Thailand", cleanName: "Thailand", continent: "Asien", pop: "71 Mio. Einw.", capital: "Bangkok", lang: "Thailändisch" },
        { name: "🇰🇷 Südkorea", cleanName: "Südkorea", continent: "Asien", pop: "51 Mio. Einw.", capital: "Seoul", lang: "Koreanisch" },
        { name: "🇮🇶 Irak", cleanName: "Irak", continent: "Asien", pop: "45 Mio. Einw.", capital: "Bagdad", lang: "Arabisch/Kurdisch" },
        { name: "🇦🇫 Afghanistan", cleanName: "Afghanistan", continent: "Asien", pop: "42 Mio. Einw.", capital: "Kabul", lang: "Paschtu/Dari" },
        { name: "🇸🇦 Saudi-Arabien", cleanName: "Saudi-Arabien", continent: "Asien", pop: "36 Mio. Einw.", capital: "Riad", lang: "Arabisch" },
        { name: "🇺🇿 Usbekistan", cleanName: "Usbekistan", continent: "Asien", pop: "36 Mio. Einw.", capital: "Taschkent", lang: "Usbekisch" },
        { name: "🇾🇪 Jemen", cleanName: "Jemen", continent: "Asien", pop: "34 Mio. Einw.", capital: "Sana'a", lang: "Arabisch" },
        { name: "🇲🇾 Malaysia", cleanName: "Malaysia", continent: "Asien", pop: "34 Mio. Einw.", capital: "Kuala Lumpur", lang: "Malaiisch" },
        { name: "🇳🇵 Nepal", cleanName: "Nepal", continent: "Asien", pop: "30 Mio. Einw.", capital: "Kathmandu", lang: "Nepalesisch" },
        { name: "🇰🇵 Nordkorea", cleanName: "Nordkorea", continent: "Asien", pop: "26 Mio. Einw.", capital: "Pjöngjang", lang: "Koreanisch" },
        { name: "🇸🇾 Syrien", cleanName: "Syrien", continent: "Asien", pop: "23 Mio. Einw.", capital: "Damaskus", lang: "Arabisch" },
        { name: "🇰🇿 Kasachstan", cleanName: "Kasachstan", continent: "Asien", pop: "20 Mio. Einw.", capital: "Astana", lang: "Kasachisch/Russisch" },
        { name: "🇱🇰 Sri Lanka", cleanName: "Sri Lanka", continent: "Asien", pop: "22 Mio. Einw.", capital: "Sri Jayewardenepura Kotte", lang: "Singhalesisch/Tamil" },
        { name: "🇦🇪 Vereinigte Arabische Emirate", cleanName: "Vereinigte Arabische Emirate", continent: "Asien", pop: "9,5 Mio. Einw.", capital: "Abu Dhabi", lang: "Arabisch" },
        { name: "🇯🇴 Jordanien", cleanName: "Jordanien", continent: "Asien", pop: "11,3 Mio. Einw.", capital: "Amman", lang: "Arabisch" },
        { name: "🇦🇿 Aserbaidschan", cleanName: "Aserbaidschan", continent: "Asien", pop: "10,4 Mio. Einw.", capital: "Baku", lang: "Aserbaidschanisch" },
        { name: "🇹🇯 Tadschikistan", cleanName: "Tadschikistan", continent: "Asien", pop: "10,1 Mio. Einw.", capital: "Duschanbe", lang: "Tadschikisch" },
        { name: "🇮🇱 Israel", cleanName: "Israel", continent: "Asien", pop: "9,8 Mio. Einw.", capital: "Jerusalem", lang: "Hebräisch/Arabisch" },
        { name: "🇱🇦 Laos", cleanName: "Laos", continent: "Asien", pop: "7,6 Mio. Einw.", capital: "Vientiane", lang: "Lao" },
        { name: "🇱🇧 Libanon", cleanName: "Libanon", continent: "Asien", pop: "5,3 Mio. Einw.", capital: "Beirut", lang: "Arabisch" },
        { name: "🇰🇬 Kirgisistan", cleanName: "Kirgisistan", continent: "Asien", pop: "7,1 Mio. Einw.", capital: "Bischkek", lang: "Kirgisisch/Russisch" },
        { name: "🇹🇲 Turkmenistan", cleanName: "Turkmenistan", continent: "Asien", pop: "6,4 Mio. Einw.", capital: "Aschgabat", lang: "Turkmenisch" },
        { name: "🇸🇬 Singapur", cleanName: "Singapur", continent: "Asien", pop: "6,0 Mio. Einw.", capital: "Singapur", lang: "Englisch/Mandarin/Malaiisch/Tamil" },
        { name: "🇴🇲 Oman", cleanName: "Oman", continent: "Asien", pop: "4,6 Mio. Einw.", capital: "Maskat", lang: "Arabisch" },
        { name: "🇰🇼 Kuwait", cleanName: "Kuwait", continent: "Asien", pop: "4,3 Mio. Einw.", capital: "Kuwait-Stadt", lang: "Arabisch" },
        { name: "🇬🇪 Georgien", cleanName: "Georgien", continent: "Asien", pop: "3,7 Mio. Einw.", capital: "Tiflis", lang: "Georgisch" },
        { name: "🇲🇳 Mongolei", cleanName: "Mongolei", continent: "Asien", pop: "3,4 Mio. Einw.", capital: "Ulaanbaatar", lang: "Mongolisch" },
        { name: "🇦🇲 Armenien", cleanName: "Armenien", continent: "Asien", pop: "3,0 Mio. Einw.", capital: "Jerewan", lang: "Armenisch" },
        { name: "🇶🇦 Katar", cleanName: "Katar", continent: "Asien", pop: "2,7 Mio. Einw.", capital: "Doha", lang: "Arabisch" },
        { name: "🇧🇭 Bahrain", cleanName: "Bahrain", continent: "Asien", pop: "1,5 Mio. Einw.", capital: "Manama", lang: "Arabisch" },
        { name: "🇨🇾 Zypern", cleanName: "Zypern", continent: "Europa", pop: "1,2 Mio. Einw.", capital: "Nikosia", lang: "Griechisch/Türkisch" },
        { name: "🇧🇹 Bhutan", cleanName: "Bhutan", continent: "Asien", pop: "780 Tsd. Einw.", capital: "Thimphu", lang: "Dzongkha" },
        { name: "🇲🇻 Malediven", cleanName: "Malediven", continent: "Asien", pop: "520 Tsd. Einw.", capital: "Malé", lang: "Dhivehi" },
        { name: "🇧🇳 Brunei", cleanName: "Brunei", continent: "Asien", pop: "450 Tsd. Einw.", capital: "Bandar Seri Begawan", lang: "Malaiisch" },

        { name: "🇳🇬 Nigeria", cleanName: "Nigeria", continent: "Afrika", pop: "224 Mio. Einw.", capital: "Abuja", lang: "Englisch" },
        { name: "🇪🇹 Äthiopien", cleanName: "Äthiopien", continent: "Afrika", pop: "126 Mio. Einw.", capital: "Addis Abeba", lang: "Amharisch" },
        { name: "🇪🇬 Ägypten", cleanName: "Ägypten", continent: "Afrika", pop: "112 Mio. Einw.", capital: "Kairo", lang: "Arabisch" },
        { name: "🇹🇿 Tansania", cleanName: "Tansania", continent: "Afrika", pop: "65 Mio. Einw.", capital: "Dodoma", lang: "Suaheli/Englisch" },
        { name: "🇿🇦 Südafrika", cleanName: "Südafrika", continent: "Afrika", pop: "60 Mio. Einw.", capital: "Pretoria", lang: "Afrikaans/Englisch/Zulu" },
        { name: "🇰🇪 Kenia", cleanName: "Kenia", continent: "Afrika", pop: "55 Mio. Einw.", capital: "Nairobi", lang: "Suaheli/Englisch" },
        { name: "🇺🇬 Uganda", cleanName: "Uganda", continent: "Afrika", pop: "48 Mio. Einw.", capital: "Kampala", lang: "Englisch/Suaheli" },
        { name: "🇩🇿 Algerien", cleanName: "Algerien", continent: "Afrika", pop: "45 Mio. Einw.", capital: "Algiers", lang: "Arabisch" },
        { name: "🇲🇦 Marokko", cleanName: "Marokko", continent: "Afrika", pop: "37 Mio. Einw.", capital: "Rabat", lang: "Arabisch" },
        { name: "🇬🇭 Ghana", cleanName: "Ghana", continent: "Afrika", pop: "34 Mio. Einw.", capital: "Accra", lang: "Englisch" },
        { name: "🇲🇬 Madagaskar", cleanName: "Madagaskar", continent: "Afrika", pop: "30 Mio. Einw.", capital: "Antananarivo", lang: "Malagasy/Französisch" },
        { name: "🇨🇲 Kamerun", cleanName: "Kamerun", continent: "Afrika", pop: "28 Mio. Einw.", capital: "Jaunde", lang: "Französisch/Englisch" },
        { name: "🇳🇪 Niger", cleanName: "Niger", continent: "Afrika", pop: "27 Mio. Einw.", capital: "Niamey", lang: "Französisch" },
        { name: "🇲🇱 Mali", cleanName: "Mali", continent: "Afrika", pop: "23 Mio. Einw.", capital: "Bamako", lang: "Französisch" },
        { name: "🇸🇳 Senegal", cleanName: "Senegal", continent: "Afrika", pop: "18 Mio. Einw.", capital: "Dakar", lang: "Französisch" },
        { name: "🇹🇳 Tunesien", cleanName: "Tunesien", continent: "Afrika", pop: "12 Mio. Einw.", capital: "Tunis", lang: "Arabisch" },
        { name: "🇱🇾 Libyen", cleanName: "Libyen", continent: "Afrika", pop: "6,8 Mio. Einw.", capital: "Tripolis", lang: "Arabisch" },
        { name: "🇳🇦 Namibia", cleanName: "Namibia", continent: "Afrika", pop: "3,0 Mio. Einw.", capital: "Windhoek", lang: "Englisch" },
        { name: "🇬🇲 Gambia", cleanName: "Gambia", continent: "Afrika", pop: "2,7 Mio. Einw.", capital: "Banjul", lang: "Englisch" },
        { name: "🇷🇼 Ruanda", cleanName: "Ruanda", continent: "Afrika", pop: "14 Mio. Einw.", capital: "Kigali", lang: "Kinyarwanda/Französisch/Englisch" },
        { name: "🇸🇴 Somalia", cleanName: "Somalia", continent: "Afrika", pop: "18 Mio. Einw.", capital: "Mogadischu", lang: "Somali/Arabisch" },
        { name: "🇿🇲 Sambia", cleanName: "Sambia", continent: "Afrika", pop: "20 Mio. Einw.", capital: "Lusaka", lang: "Englisch" },
        { name: "🇿🇼 Simbabwe", cleanName: "Simbabwe", continent: "Afrika", pop: "16 Mio. Einw.", capital: "Harare", lang: "Englisch/Shona" },
        { name: "🇲🇼 Malawi", cleanName: "Malawi", continent: "Afrika", pop: "20 Mio. Einw.", capital: "Lilongwe", lang: "Englisch/Chichewa" },
        { name: "🇸🇩 Sudan", cleanName: "Sudan", continent: "Afrika", pop: "47 Mio. Einw.", capital: "Khartum", lang: "Arabisch/Englisch" },
        { name: "🇸🇸 Südsudan", cleanName: "Südsudan", continent: "Afrika", pop: "11 Mio. Einw.", capital: "Dschuba", lang: "Englisch" },
        { name: "🇦🇴 Angola", cleanName: "Angola", continent: "Afrika", pop: "36 Mio. Einw.", capital: "Luanda", lang: "Portugiesisch" },
        { name: "🇲🇿 Mosambik", cleanName: "Mosambik", continent: "Afrika", pop: "33 Mio. Einw.", capital: "Maputo", lang: "Portugiesisch" },

        { name: "🇺🇸 Vereinigte Staaten / USA", cleanName: "Vereinigte Staaten / USA", continent: "Nordamerika", pop: "340 Mio. Einw.", capital: "Washington, D.C.", lang: "Englisch" },
        { name: "🇲🇽 Mexiko", cleanName: "Mexiko", continent: "Nordamerika", pop: "128 Mio. Einw.", capital: "Mexiko-Stadt", lang: "Spanisch" },
        { name: "🇨🇦 Kanada", cleanName: "Kanada", continent: "Nordamerika", pop: "39 Mio. Einw.", capital: "Ottawa", lang: "Englisch/Französisch" },
        { name: "🇬🇹 Guatemala", cleanName: "Guatemala", continent: "Nordamerika", pop: "18 Mio. Einw.", capital: "Guatemala-Stadt", lang: "Spanisch" },
        { name: "🇨🇺 Kuba", cleanName: "Kuba", continent: "Nordamerika", pop: "11 Mio. Einw.", capital: "Havanna", lang: "Spanisch" },
        { name: "🇩🇴 Dominikanische Republik", cleanName: "Dominikanische Republik", continent: "Nordamerika", pop: "11 Mio. Einw.", capital: "Santo Domingo", lang: "Spanisch" },
        { name: "🇭🇹 Haiti", cleanName: "Haiti", continent: "Nordamerika", pop: "11,5 Mio. Einw.", capital: "Port-au-Prince", lang: "Französisch/Haitianisch" },
        { name: "🇭🇳 Honduras", cleanName: "Honduras", continent: "Nordamerika", pop: "10,6 Mio. Einw.", capital: "Tegucigalpa", lang: "Spanisch" },
        { name: "🇳🇮 Nicaragua", cleanName: "Nicaragua", continent: "Nordamerika", pop: "7,0 Mio. Einw.", capital: "Managua", lang: "Spanisch" },
        { name: "🇸🇻 El Salvador", cleanName: "El Salvador", continent: "Nordamerika", pop: "6,3 Mio. Einw.", capital: "San Salvador", lang: "Spanisch" },
        { name: "🇨🇷 Costa Rica", cleanName: "Costa Rica", continent: "Nordamerika", pop: "5,2 Mio. Einw.", capital: "San José", lang: "Spanisch" },
        { name: "🇵🇦 Panama", cleanName: "Panama", continent: "Nordamerika", pop: "4,5 Mio. Einw.", capital: "Panama-Stadt", lang: "Spanisch" },
        { name: "🇯🇲 Jamaika", cleanName: "Jamaika", continent: "Nordamerika", pop: "2,8 Mio. Einw.", capital: "Kingston", lang: "Englisch" },
        { name: "🇧🇸 Bahamas", cleanName: "Bahamas", continent: "Nordamerika", pop: "410 Tsd. Einw.", capital: "Nassau", lang: "Englisch" },
        { name: "🇧🇿 Belize", cleanName: "Belize", continent: "Nordamerika", pop: "410 Tsd. Einw.", capital: "Belmopan", lang: "Englisch" },
        { name: "🇹🇹 Trinidad und Tobago", cleanName: "Trinidad und Tobago", continent: "Nordamerika", pop: "1,5 Mio. Einw.", capital: "Port of Spain", lang: "Englisch" },

        { name: "🇧🇷 Brasilien", cleanName: "Brasilien", continent: "Südamerika", pop: "216 Mio. Einw.", capital: "Brasília", lang: "Portugiesisch" },
        { name: "🇨🇴 Kolumbien", cleanName: "Kolumbien", continent: "Südamerika", pop: "52 Mio. Einw.", capital: "Bogotá", lang: "Spanisch" },
        { name: "🇦🇷 Argentinien", cleanName: "Argentinien", continent: "Südamerika", pop: "46 Mio. Einw.", capital: "Buenos Aires", lang: "Spanisch" },
        { name: "🇵🇪 Peru", cleanName: "Peru", continent: "Südamerika", pop: "34 Mio. Einw.", capital: "Lima", lang: "Spanisch" },
        { name: "🇻🇪 Venezuela", cleanName: "Venezuela", continent: "Südamerika", pop: "28 Mio. Einw.", capital: "Caracas", lang: "Spanisch" },
        { name: "🇨🇱 Chile", cleanName: "Chile", continent: "Südamerika", pop: "20 Mio. Einw.", capital: "Santiago de Chile", lang: "Spanisch" },
        { name: "🇪🇨 Ecuador", cleanName: "Ecuador", continent: "Südamerika", pop: "18 Mio. Einw.", capital: "Quito", lang: "Spanisch" },
        { name: "🇧🇴 Bolivien", cleanName: "Bolivien", continent: "Südamerika", pop: "12 Mio. Einw.", capital: "Sucre", lang: "Spanisch" },
        { name: "🇵🇾 Paraguay", cleanName: "Paraguay", continent: "Südamerika", pop: "6,8 Mio. Einw.", capital: "Asunción", lang: "Spanisch/Guaraní" },
        { name: "🇺🇾 Uruguay", cleanName: "Uruguay", continent: "Südamerika", pop: "3,4 Mio. Einw.", capital: "Montevideo", lang: "Spanisch" },
        { name: "🇬🇾 Guyana", cleanName: "Guyana", continent: "Südamerika", pop: "810 Tsd. Einw.", capital: "Georgetown", lang: "Englisch" },
        { name: "🇸🇷 Suriname", cleanName: "Suriname", continent: "Südamerika", pop: "620 Tsd. Einw.", capital: "Paramaribo", lang: "Niederländisch" },

        { name: "🇦🇺 Australien", cleanName: "Australien", continent: "Ozeanien", pop: "26,6 Mio. Einw.", capital: "Canberra", lang: "Englisch" },
        { name: "🇳🇿 Neuseeland", cleanName: "Neuseeland", continent: "Ozeanien", pop: "5,2 Mio. Einw.", capital: "Wellington", lang: "Englisch/Māori" },
        { name: "🇵🇬 Papua-Neuguinea", cleanName: "Papua-Neuguinea", continent: "Ozeanien", pop: "10,3 Mio. Einw.", capital: "Port Moresby", lang: "Englisch" },
        { name: "🇫🇯 Fidschi", cleanName: "Fidschi", continent: "Ozeanien", pop: "930 Tsd. Einw.", capital: "Suva", lang: "Englisch/Fidschi" },

        { name: "🇲🇲 Myanmar", cleanName: "Myanmar", continent: "Asien", pop: "55 Mio. Einw.", capital: "Naypyidaw", lang: "Burmesisch" },
        { name: "🇹🇼 Taiwan", cleanName: "Taiwan", continent: "Asien", pop: "23,9 Mio. Einw.", capital: "Taipeh", lang: "Mandarin" },
        { name: "🇰🇭 Kambodscha", cleanName: "Kambodscha", continent: "Asien", pop: "18 Mio. Einw.", capital: "Phnom Penh", lang: "Khmer" },
        { name: "🇵🇸 Palästina", cleanName: "Palästina", continent: "Asien", pop: "5,6 Mio. Einw.", capital: "Ramallah", lang: "Arabisch" },
        { name: "🇹🇱 Osttimor", cleanName: "Osttimor", continent: "Asien", pop: "1,4 Mio. Einw.", capital: "Dili", lang: "Tetum/Portugiesisch" },

        { name: "🇨🇩 Demokratische Republik Kongo", cleanName: "Demokratische Republik Kongo", continent: "Afrika", pop: "116 Mio. Einw.", capital: "Kinshasa", lang: "Französisch" },
        { name: "🇨🇬 Republik Kongo", cleanName: "Republik Kongo", continent: "Afrika", pop: "6,6 Mio. Einw.", capital: "Brazzaville", lang: "Französisch" },
        { name: "🇨🇮 Elfenbeinküste", cleanName: "Elfenbeinküste", continent: "Afrika", pop: "33 Mio. Einw.", capital: "Yamoussoukro", lang: "Französisch" },
        { name: "🇧🇫 Burkina Faso", cleanName: "Burkina Faso", continent: "Afrika", pop: "24,6 Mio. Einw.", capital: "Ouagadougou", lang: "Französisch" },
        { name: "🇧🇯 Benin", cleanName: "Benin", continent: "Afrika", pop: "15,1 Mio. Einw.", capital: "Porto-Novo", lang: "Französisch" },
        { name: "🇹🇬 Togo", cleanName: "Togo", continent: "Afrika", pop: "9,9 Mio. Einw.", capital: "Lomé", lang: "Französisch" },
        { name: "🇸🇱 Sierra Leone", cleanName: "Sierra Leone", continent: "Afrika", pop: "9,0 Mio. Einw.", capital: "Freetown", lang: "Englisch" },
        { name: "🇱🇷 Liberia", cleanName: "Liberia", continent: "Afrika", pop: "5,8 Mio. Einw.", capital: "Monrovia", lang: "Englisch" },
        { name: "🇬🇳 Guinea", cleanName: "Guinea", continent: "Afrika", pop: "15,4 Mio. Einw.", capital: "Conakry", lang: "Französisch" },
        { name: "🇬🇼 Guinea-Bissau", cleanName: "Guinea-Bissau", continent: "Afrika", pop: "2,3 Mio. Einw.", capital: "Bissau", lang: "Portugiesisch" },
        { name: "🇬🇶 Äquatorialguinea", cleanName: "Äquatorialguinea", continent: "Afrika", pop: "1,9 Mio. Einw.", capital: "Malabo", lang: "Spanisch/Französisch" },
        { name: "🇬🇦 Gabun", cleanName: "Gabun", continent: "Afrika", pop: "2,6 Mio. Einw.", capital: "Libreville", lang: "Französisch" },
        { name: "🇪🇷 Eritrea", cleanName: "Eritrea", continent: "Afrika", pop: "3,7 Mio. Einw.", capital: "Asmara", lang: "Tigrinya" },
        { name: "🇩🇯 Dschibuti", cleanName: "Dschibuti", continent: "Afrika", pop: "1,2 Mio. Einw.", capital: "Dschibuti", lang: "Arabisch/Französisch" },
        { name: "🇹🇩 Tschad", cleanName: "Tschad", continent: "Afrika", pop: "21,5 Mio. Einw.", capital: "N’Djamena", lang: "Französisch/Arabisch" },
        { name: "🇨🇫 Zentralafrikanische Republik", cleanName: "Zentralafrikanische Republik", continent: "Afrika", pop: "5,7 Mio. Einw.", capital: "Bangui", lang: "Sango/Französisch" },
        { name: "🇧🇮 Burundi", cleanName: "Burundi", continent: "Afrika", pop: "14,7 Mio. Einw.", capital: "Gitega", lang: "Rundi/Französisch" },
        { name: "🇸🇿 Eswatini", cleanName: "Eswatini", continent: "Afrika", pop: "1,2 Mio. Einw.", capital: "Mbabane", lang: "Swasi/Englisch" },
        { name: "🇲🇷 Mauretanien", cleanName: "Mauretanien", continent: "Afrika", pop: "5,4 Mio. Einw.", capital: "Nouakchott", lang: "Arabisch" },
        { name: "🇧🇼 Botswana", cleanName: "Botswana", continent: "Afrika", pop: "2,6 Mio. Einw.", capital: "Gaborone", lang: "Englisch/Setswana" },
        { name: "🇲🇺 Mauritius", cleanName: "Mauritius", continent: "Afrika", pop: "1,2 Mio. Einw.", capital: "Port Louis", lang: "Englisch" },
        { name: "🇸🇨 Seychellen", cleanName: "Seychellen", continent: "Afrika", pop: "120 Tsd. Einw.", capital: "Victoria", lang: "Seychellenkreol/Englisch/Französisch" },
        { name: "🇨🇻 Kap Verde", cleanName: "Kap Verde", continent: "Afrika", pop: "600 Tsd. Einw.", capital: "Praia", lang: "Portugiesisch" },
        { name: "🇰🇲 Komoren", cleanName: "Komoren", continent: "Afrika", pop: "850 Tsd. Einw.", capital: "Moroni", lang: "Komorisch/Arabisch/Französisch" },
        { name: "🇸🇹 São Tomé und Príncipe", cleanName: "São Tomé und Príncipe", continent: "Afrika", pop: "230 Tsd. Einw.", capital: "São Tomé", lang: "Portugiesisch" },
        { name: "🇱🇸 Lesotho", cleanName: "Lesotho", continent: "Afrika", pop: "2,3 Mio. Einw.", capital: "Maseru", lang: "Sotho/Englisch" },

        { name: "🇧🇧 Barbados", cleanName: "Barbados", continent: "Nordamerika", pop: "280 Tsd. Einw.", capital: "Bridgetown", lang: "Englisch" },
        { name: "🇱🇨 Saint Lucia", cleanName: "Saint Lucia", continent: "Nordamerika", pop: "180 Tsd. Einw.", capital: "Castries", lang: "Englisch" },
        { name: "🇬🇩 Grenada", cleanName: "Grenada", continent: "Nordamerika", pop: "125 Tsd. Einw.", capital: "St. George’s", lang: "Englisch" },
        { name: "🇦🇬 Antigua und Barbuda", cleanName: "Antigua und Barbuda", continent: "Nordamerika", pop: "100 Tsd. Einw.", capital: "St. John’s", lang: "Englisch" },
        { name: "🇰🇳 Saint Kitts und Nevis", cleanName: "Saint Kitts und Nevis", continent: "Nordamerika", pop: "48 Tsd. Einw.", capital: "Basseterre", lang: "Englisch" },
        { name: "🇻🇨 Saint Vincent und die Grenadinen", cleanName: "Saint Vincent und die Grenadinen", continent: "Nordamerika", pop: "103 Tsd. Einw.", capital: "Kingstown", lang: "Englisch" },
        { name: "🇩🇲 Dominica", cleanName: "Dominica", continent: "Nordamerika", pop: "73 Tsd. Einw.", capital: "Roseau", lang: "Englisch" },

        { name: "🇼🇸 Samoa", cleanName: "Samoa", continent: "Ozeanien", pop: "220 Tsd. Einw.", capital: "Apia", lang: "Samoanisch/Englisch" },
        { name: "🇹🇴 Tonga", cleanName: "Tonga", continent: "Ozeanien", pop: "105 Tsd. Einw.", capital: "Nukuʻalofa", lang: "Tongaisch/Englisch" },
        { name: "🇻🇺 Vanuatu", cleanName: "Vanuatu", continent: "Ozeanien", pop: "330 Tsd. Einw.", capital: "Port Vila", lang: "Bislama/Englisch/Französisch" },
        { name: "🇸🇧 Salomonen", cleanName: "Salomonen", continent: "Ozeanien", pop: "740 Tsd. Einw.", capital: "Honiara", lang: "Englisch" },
        { name: "🇫🇲 Mikronesien", cleanName: "Mikronesien", continent: "Ozeanien", pop: "115 Tsd. Einw.", capital: "Palikir", lang: "Englisch" },
        { name: "🇵🇼 Palau", cleanName: "Palau", continent: "Ozeanien", pop: "18 Tsd. Einw.", capital: "Ngerulmud", lang: "Palauisch/Englisch" },
        { name: "🇲🇭 Marshallinseln", cleanName: "Marshallinseln", continent: "Ozeanien", pop: "42 Tsd. Einw.", capital: "Majuro", lang: "Marschallesisch/Englisch" },
        { name: "🇰🇮 Kiribati", cleanName: "Kiribati", continent: "Ozeanien", pop: "130 Tsd. Einw.", capital: "South Tarawa", lang: "Gilbertesisch/Englisch" },
        { name: "🇳🇷 Nauru", cleanName: "Nauru", continent: "Ozeanien", pop: "12 Tsd. Einw.", capital: "Yaren", lang: "Nauruisch/Englisch" },
        { name: "🇹🇻 Tuvalu", cleanName: "Tuvalu", continent: "Ozeanien", pop: "10 Tsd. Einw.", capital: "Funafuti", lang: "Tuvaluisch/Englisch" }
    ],

    top_cities: [
        { name: "🇯🇵 Tokio", cleanName: "Tokio", continent: "Asien", pop: "37,4 Mio. Einw.", capital: "Japan" },
        { name: "🇮🇳 Neu-Delhi", cleanName: "Neu-Delhi", continent: "Asien", pop: "32,9 Mio. Einw.", capital: "Indien" },
        { name: "🇨🇳 Shanghai", cleanName: "Shanghai", continent: "Asien", pop: "29,2 Mio. Einw.", capital: "China" },
        { name: "🇧🇩 Dhaka", cleanName: "Dhaka", continent: "Asien", pop: "23,2 Mio. Einw.", capital: "Bangladesch" },
        { name: "🇪🇬 Kairo", cleanName: "Kairo", continent: "Afrika", pop: "22,6 Mio. Einw.", capital: "Ägypten" },
        { name: "🇲🇽 Mexiko-Stadt", cleanName: "Mexiko-Stadt", continent: "Nordamerika", pop: "22,2 Mio. Einw.", capital: "Mexiko" },
        { name: "🇨🇳 Peking", cleanName: "Peking", continent: "Asien", pop: "22,2 Mio. Einw.", capital: "China" },
        { name: "🇮🇳 Mumbai", cleanName: "Mumbai", continent: "Asien", pop: "21,2 Mio. Einw.", capital: "Indien" },
        { name: "🇯🇵 Osaka", cleanName: "Osaka", continent: "Asien", pop: "19,0 Mio. Einw.", capital: "Japan" },
        { name: "🇺🇸 New York", cleanName: "New York", continent: "Nordamerika", pop: "18,9 Mio. Einw.", capital: "USA" },
        { name: "🇵🇰 Karatschi", cleanName: "Karatschi", continent: "Asien", pop: "17,6 Mio. Einw.", capital: "Pakistan" },
        { name: "🇨🇳 Chongqing", cleanName: "Chongqing", continent: "Asien", pop: "17,4 Mio. Einw.", capital: "China" },
        { name: "🇹🇷 Istanbul", cleanName: "Istanbul", continent: "Europa", pop: "15,8 Mio. Einw.", capital: "Türkei" },
        { name: "🇦🇷 Buenos Aires", cleanName: "Buenos Aires", continent: "Südamerika", pop: "15,6 Mio. Einw.", capital: "Argentinien" },
        { name: "🇮🇳 Kalkutta", cleanName: "Kalkutta", continent: "Asien", pop: "15,5 Mio. Einw.", capital: "Indien" },
        { name: "🇵🇭 Manila", cleanName: "Manila", continent: "Asien", pop: "14,4 Mio. Einw.", capital: "Philippinen" },
        { name: "🇳🇬 Lagos", cleanName: "Lagos", continent: "Afrika", pop: "16,5 Mio. Einw.", capital: "Nigeria" },
        { name: "🇧🇷 São Paulo", cleanName: "São Paulo", continent: "Südamerika", pop: "22,6 Mio. Einw.", capital: "Brasilien" },
        { name: "🇰🇷 Seoul", cleanName: "Seoul", continent: "Asien", pop: "9,9 Mio. Einw.", capital: "Südkorea" },
        { name: "🇩🇪 Berlin", cleanName: "Berlin", continent: "Europa", pop: "3,8 Mio. Einw.", capital: "Deutschland" }
    ]
};
countriesDatabase.top15_olympics = [
    { name: "🇺🇸 Vereinigte Staaten / USA", cleanName: "Vereinigte Staaten / USA", continent: "Nordamerika", customVal: "über 2.900 Medaillen" },
    { name: "🇬🇧 Vereinigtes Königreich / Großbritannien", cleanName: "Vereinigtes Königreich / Großbritannien", continent: "Europa", customVal: "über 900 Medaillen" },
    { name: "🇩🇪 Deutschland", cleanName: "Deutschland", continent: "Europa", customVal: "über 1.400 Medaillen (inkl. DDR/BRD)" },
    { name: "🇫🇷 Frankreich", cleanName: "Frankreich", continent: "Europa", customVal: "über 900 Medaillen" },
    { name: "🇮🇹 Italien", cleanName: "Italien", continent: "Europa", customVal: "über 750 Medaillen" },
    { name: "🇨🇳 China", cleanName: "China", continent: "Asien", customVal: "über 700 Medaillen" },
    { name: "🇦🇺 Australien", cleanName: "Australien", continent: "Ozeanien", customVal: "über 600 Medaillen" },
    { name: "🇸🇪 Schweden", cleanName: "Schweden", continent: "Europa", customVal: "über 650 Medaillen" },
    { name: "🇯🇵 Japan", cleanName: "Japan", continent: "Asien", customVal: "über 500 Medaillen" },
    { name: "🇨🇦 Kanada", cleanName: "Kanada", continent: "Nordamerika", customVal: "über 500 Medaillen" },
    { name: "🇭🇺 Ungarn", cleanName: "Ungarn", continent: "Europa", customVal: "über 500 Medaillen" },
    { name: "🇷🇺 Russland", cleanName: "Russland", continent: "Europa", customVal: "über 600 Medaillen" },
    { name: "🇳🇱 Niederlande", cleanName: "Niederlande", continent: "Europa", customVal: "über 350 Medaillen" },
    { name: "🇷🇴 Rumänien", cleanName: "Rumänien", continent: "Europa", customVal: "über 300 Medaillen" },
    { name: "🇰🇷 Südkorea", cleanName: "Südkorea", continent: "Asien", customVal: "über 350 Medaillen" }
];
countriesDatabase.top15_meat_consumption = [
    { name: "🇦🇺 Australien", cleanName: "Australien", continent: "Ozeanien", customVal: "ca. 116 kg pro Kopf" },
    { name: "🇺🇸 Vereinigte Staaten / USA", cleanName: "Vereinigte Staaten / USA", continent: "Nordamerika", customVal: "ca. 115 kg pro Kopf" },
    { name: "🇦🇷 Argentinien", cleanName: "Argentinien", continent: "Südamerika", customVal: "ca. 110 kg pro Kopf" },
    { name: "🇮🇱 Israel", cleanName: "Israel", continent: "Asien", customVal: "ca. 86 kg pro Kopf" },
    { name: "🇧🇷 Brasilien", cleanName: "Brasilien", continent: "Südamerika", customVal: "ca. 85 kg pro Kopf" },
    { name: "🇨🇦 Kanada", cleanName: "Kanada", continent: "Nordamerika", customVal: "ca. 82 kg pro Kopf" },
    { name: "🇪🇸 Spanien", cleanName: "Spanien", continent: "Europa", customVal: "ca. 80 kg pro Kopf" },
    { name: "🇷🇺 Russland", cleanName: "Russland", continent: "Europa", customVal: "ca. 77 kg pro Kopf" },
    { name: "🇨🇱 Chile", cleanName: "Chile", continent: "Südamerika", customVal: "ca. 77 kg pro Kopf" },
    { name: "🇩🇪 Deutschland", cleanName: "Deutschland", continent: "Europa", customVal: "ca. 52 kg pro Kopf" },
    { name: "🇲🇽 Mexiko", cleanName: "Mexiko", continent: "Nordamerika", customVal: "ca. 75 kg pro Kopf" },
    { name: "🇰🇷 Südkorea", cleanName: "Südkorea", continent: "Asien", customVal: "ca. 74 kg pro Kopf" },
    { name: "🇺🇾 Uruguay", cleanName: "Uruguay", continent: "Südamerika", customVal: "ca. 73 kg pro Kopf" },
    { name: "🇳🇿 Neuseeland", cleanName: "Neuseeland", continent: "Ozeanien", customVal: "ca. 73 kg pro Kopf" },
    { name: "🇵🇹 Portugal", cleanName: "Portugal", continent: "Europa", customVal: "ca. 70 kg pro Kopf" }
];

countriesDatabase.bundesliga_players_countries = [
    { name: "🇩🇪 Deutschland", cleanName: "Deutschland", continent: "Europa", customVal: "ca. 275 Spieler" },
    { name: "🇫🇷 Frankreich", cleanName: "Frankreich", continent: "Europa", customVal: "ca. 30 Spieler" },
    { name: "🇦🇹 Österreich", cleanName: "Österreich", continent: "Europa", customVal: "ca. 25 Spieler" },
    { name: "🇳🇱 Niederlande", cleanName: "Niederlande", continent: "Europa", customVal: "ca. 15 Spieler" },
    { name: "🇨🇭 Schweiz", cleanName: "Schweiz", continent: "Europa", customVal: "ca. 15 Spieler" },
    { name: "🇩🇰 Dänemark", cleanName: "Dänemark", continent: "Europa", customVal: "ca. 12 Spieler" },
    { name: "🇭🇷 Kroatien", cleanName: "Kroatien", continent: "Europa", customVal: "ca. 10 Spieler" },
    { name: "🇵🇱 Polen", cleanName: "Polen", continent: "Europa", customVal: "ca. 9 Spieler" },
    { name: "🇪🇸 Spanien", cleanName: "Spanien", continent: "Europa", customVal: "ca. 8 Spieler" },
    { name: "🇯🇵 Japan", cleanName: "Japan", continent: "Asien", customVal: "ca. 8 Spieler" }
];

countriesDatabase.top15_german_tourists = [
    { name: "🇪🇸 Spanien", cleanName: "Spanien", continent: "Europa", customVal: "ca. 11,2 Mio. Reisen" },
    { name: "🇮🇹 Italien", cleanName: "Italien", continent: "Europa", customVal: "ca. 6,4 Mio. Reisen" },
    { name: "🇦🇹 Österreich", cleanName: "Österreich", continent: "Europa", customVal: "ca. 5,8 Mio. Reisen" },
    { name: "🇫🇷 Frankreich", cleanName: "Frankreich", continent: "Europa", customVal: "ca. 3,5 Mio. Reisen" },
    { name: "🇹🇷 Türkei", cleanName: "Türkei", continent: "Europa", customVal: "ca. 3,2 Mio. Reisen" },
    { name: "🇳🇱 Niederlande", cleanName: "Niederlande", continent: "Europa", customVal: "ca. 3,0 Mio. Reisen" },
    { name: "🇬🇷 Griechenland", cleanName: "Griechenland", continent: "Europa", customVal: "ca. 3,0 Mio. Reisen" },
    { name: "🇭🇷 Kroatien", cleanName: "Kroatien", continent: "Europa", customVal: "ca. 2,5 Mio. Reisen" },
    { name: "🇩🇰 Dänemark", cleanName: "Dänemark", continent: "Europa", customVal: "ca. 2,1 Mio. Reisen" },
    { name: "🇵🇹 Portugal", cleanName: "Portugal", continent: "Europa", customVal: "ca. 1,2 Mio. Reisen" },
    { name: "🇺🇸 Vereinigte Staaten / USA", cleanName: "Vereinigte Staaten / USA", continent: "Nordamerika", customVal: "ca. 1,8 Mio. Reisen" },
    { name: "🇨🇭 Schweiz", cleanName: "Schweiz", continent: "Europa", customVal: "ca. 1,4 Mio. Reisen" },
    { name: "🇪🇬 Ägypten", cleanName: "Ägypten", continent: "Afrika", customVal: "ca. 1,0 Mio. Reisen" },
    { name: "🇵🇱 Polen", cleanName: "Polen", continent: "Europa", customVal: "ca. 1,5 Mio. Reisen" },
    { name: "🇸🇪 Schweden", cleanName: "Schweden", continent: "Europa", customVal: "ca. 900 Tsd. Reisen" }
];

countriesDatabase.top15_best_cuisine = [
    { name: "🇮🇹 Italien", cleanName: "Italien", continent: "Europa", customVal: "4.72 / 5.0 Punkte" },
    { name: "🇯🇵 Japan", cleanName: "Japan", continent: "Asien", customVal: "4.65 / 5.0 Punkte" },
    { name: "🇬🇷 Griechenland", cleanName: "Griechenland", continent: "Europa", customVal: "4.64 / 5.0 Punkte" },
    { name: "🇲🇽 Mexiko", cleanName: "Mexiko", continent: "Nordamerika", customVal: "4.58 / 5.0 Punkte" },
    { name: "🇨🇳 China", cleanName: "China", continent: "Asien", customVal: "4.56 / 5.0 Punkte" },
    { name: "🇪🇸 Spanien", cleanName: "Spanien", continent: "Europa", customVal: "4.55 / 5.0 Punkte" },
    { name: "🇮🇳 Indien", cleanName: "Indien", continent: "Asien", customVal: "4.54 / 5.0 Punkte" },
    { name: "🇫🇷 Frankreich", cleanName: "Frankreich", continent: "Europa", customVal: "4.52 / 5.0 Punkte" },
    { name: "🇹🇭 Thailand", cleanName: "Thailand", continent: "Asien", customVal: "4.50 / 5.0 Punkte" },
    { name: "🇵🇹 Portugal", cleanName: "Portugal", continent: "Europa", customVal: "4.48 / 5.0 Punkte" },
    { name: "🇻🇳 Vietnam", cleanName: "Vietnam", continent: "Asien", customVal: "4.45 / 5.0 Punkte" },
    { name: "🇹🇷 Türkei", cleanName: "Türkei", continent: "Europa", customVal: "4.43 / 5.0 Punkte" },
    { name: "🇰🇷 Südkorea", cleanName: "Südkorea", continent: "Asien", customVal: "4.40 / 5.0 Punkte" },
    { name: "🇦🇷 Argentinien", cleanName: "Argentinien", continent: "Südamerika", customVal: "4.38 / 5.0 Punkte" },
    { name: "🇵🇪 Peru", cleanName: "Peru", continent: "Südamerika", customVal: "4.35 / 5.0 Punkte" }
];

countriesDatabase.top15_highest_inflation = [
    { name: "🇻🇪 Venezuela", cleanName: "Venezuela", continent: "Südamerika", customVal: "ca. 467% Inflation" },
    { name: "🇮🇷 Iran", cleanName: "Iran", continent: "Asien", customVal: "ca. 79% Inflation" },
    { name: "🇸🇩 Sudan", cleanName: "Sudan", continent: "Afrika", customVal: "ca. 41% Inflation" },
    { name: "🇦🇷 Argentinien", cleanName: "Argentinien", continent: "Südamerika", customVal: "ca. 33% Inflation" },
    { name: "🇹🇷 Türkei", cleanName: "Türkei", continent: "Europa", customVal: "ca. 32% Inflation" },
    { name: "🇸🇸 Südsudan", cleanName: "Südsudan", continent: "Afrika", customVal: "ca. 28% Inflation" },
    { name: "🇲🇼 Malawi", cleanName: "Malawi", continent: "Afrika", customVal: "ca. 22% Inflation" },
    { name: "🇭🇹 Haiti", cleanName: "Haiti", continent: "Nordamerika", customVal: "ca. 21% Inflation" },
    { name: "🇲🇲 Myanmar", cleanName: "Myanmar", continent: "Asien", customVal: "ca. 20% Inflation" },
    { name: "🇳🇬 Nigeria", cleanName: "Nigeria", continent: "Afrika", customVal: "ca. 16% Inflation" },
    { name: "🇱🇾 Libyen", cleanName: "Libyen", continent: "Afrika", customVal: "ca. 14% Inflation" },
    { name: "🇸🇱 Sierra Leone", cleanName: "Sierra Leone", continent: "Afrika", customVal: "ca. 13% Inflation" },
    { name: "🇪🇬 Ägypten", cleanName: "Ägypten", continent: "Afrika", customVal: "ca. 13% Inflation" },
    { name: "🇧🇴 Bolivien", cleanName: "Bolivien", continent: "Südamerika", customVal: "ca. 12% Inflation" },
    { name: "🇰🇬 Kirgisistan", cleanName: "Kirgisistan", continent: "Asien", customVal: "ca. 12% Inflation" }
];
countriesDatabase.top15_life_expectancy = [
    { name: "🇲🇨 Monaco", cleanName: "Monaco", continent: "Europa", customVal: "ca. 89,5 Jahre" },
    { name: "🇭🇰 Hongkong", cleanName: "Hongkong", continent: "Asien", customVal: "ca. 85,3 Jahre" },
    { name: "🇲🇴 Macau", cleanName: "Macau", continent: "Asien", customVal: "ca. 84,8 Jahre" },
    { name: "🇯🇵 Japan", cleanName: "Japan", continent: "Asien", customVal: "ca. 84,6 Jahre" },
    { name: "🇨🇭 Schweiz", cleanName: "Schweiz", continent: "Europa", customVal: "ca. 84,2 Jahre" },
    { name: "🇸🇬 Singapur", cleanName: "Singapur", continent: "Asien", customVal: "ca. 84,0 Jahre" },
    { name: "🇮🇹 Italien", cleanName: "Italien", continent: "Europa", customVal: "ca. 83,8 Jahre" },
    { name: "🇪🇸 Spanien", cleanName: "Spanien", continent: "Europa", customVal: "ca. 83,8 Jahre" },
    { name: "🇦🇺 Australien", cleanName: "Australien", continent: "Ozeanien", customVal: "ca. 83,5 Jahre" },
    { name: "🇸🇪 Schweden", cleanName: "Schweden", continent: "Europa", customVal: "ca. 83,3 Jahre" },
    { name: "🇮🇸 Island", cleanName: "Island", continent: "Europa", customVal: "ca. 83,1 Jahre" },
    { name: "🇰🇷 Südkorea", cleanName: "Südkorea", continent: "Asien", customVal: "ca. 83,0 Jahre" },
    { name: "🇳🇴 Norwegen", cleanName: "Norwegen", continent: "Europa", customVal: "ca. 82,9 Jahre" },
    { name: "🇫🇷 Frankreich", cleanName: "Frankreich", continent: "Europa", customVal: "ca. 82,8 Jahre" },
    { name: "🇮🇪 Irland", cleanName: "Irland", continent: "Europa", customVal: "ca. 82,7 Jahre" }
];

countriesDatabase.top15_old_pop_median = [
    { name: "🇲🇨 Monaco", cleanName: "Monaco", continent: "Europa", customVal: "ca. 55,4 Jahre Medianalter" },
    { name: "🇯🇵 Japan", cleanName: "Japan", continent: "Asien", customVal: "ca. 49,5 Jahre Medianalter" },
    { name: "🇮🇹 Italien", cleanName: "Italien", continent: "Europa", customVal: "ca. 48,4 Jahre Medianalter" },
    { name: "🇭🇰 Hongkong", cleanName: "Hongkong", continent: "Asien", customVal: "ca. 46,3 Jahre Medianalter" },
    { name: "🇵🇹 Portugal", cleanName: "Portugal", continent: "Europa", customVal: "ca. 46,8 Jahre Medianalter" },
    { name: "🇩🇪 Deutschland", cleanName: "Deutschland", continent: "Europa", customVal: "ca. 45,8 Jahre Medianalter" },
    { name: "🇬🇷 Griechenland", cleanName: "Griechenland", continent: "Europa", customVal: "ca. 45,7 Jahre Medianalter" },
    { name: "🇰🇷 Südkorea", cleanName: "Südkorea", continent: "Asien", customVal: "ca. 45,6 Jahre Medianalter" },
    { name: "🇧🇬 Bulgarien", cleanName: "Bulgarien", continent: "Europa", customVal: "ca. 45,3 Jahre Medianalter" },
    { name: "🇪🇸 Spanien", cleanName: "Spanien", continent: "Europa", customVal: "ca. 45,1 Jahre Medianalter" },
    { name: "🇦🇹 Österreich", cleanName: "Österreich", continent: "Europa", customVal: "ca. 44,5 Jahre Medianalter" },
    { name: "🇭🇺 Ungarn", cleanName: "Ungarn", continent: "Europa", customVal: "ca. 44,3 Jahre Medianalter" },
    { name: "🇱🇻 Lettland", cleanName: "Lettland", continent: "Europa", customVal: "ca. 44,1 Jahre Medianalter" },
    { name: "🇫🇮 Finnland", cleanName: "Finnland", continent: "Europa", customVal: "ca. 43,1 Jahre Medianalter" },
    { name: "🇨🇭 Schweiz", cleanName: "Schweiz", continent: "Europa", customVal: "ca. 43,3 Jahre Medianalter" }
];

countriesDatabase.top15_young_pop_median = [
    { name: "🇳🇬 Niger", cleanName: "Niger", continent: "Afrika", customVal: "ca. 14,8 Jahre Medianalter" },
    { name: "🇹🇩 Tschad", cleanName: "Tschad", continent: "Afrika", customVal: "ca. 16,3 Jahre Medianalter" },
    { name: "🇲🇱 Mali", cleanName: "Mali", continent: "Afrika", customVal: "ca. 16,3 Jahre Medianalter" },
    { name: "🇧🇮 Burundi", cleanName: "Burundi", continent: "Afrika", customVal: "ca. 17,0 Jahre Medianalter" },
    { name: "🇸🇴 Somalia", cleanName: "Somalia", continent: "Afrika", customVal: "ca. 17,1 Jahre Medianalter" },
    { name: "🇨🇩 Demokratische Republik Kongo", cleanName: "Demokratische Republik Kongo", continent: "Afrika", customVal: "ca. 17,2 Jahre Medianalter" },
    { name: "🇦🇴 Angola", cleanName: "Angola", continent: "Afrika", customVal: "ca. 17,3 Jahre Medianalter" },
    { name: "🇧🇫 Burkina Faso", cleanName: "Burkina Faso", continent: "Afrika", customVal: "ca. 17,9 Jahre Medianalter" },
    { name: "🇲🇼 Malawi", cleanName: "Malawi", continent: "Afrika", customVal: "ca. 18,1 Jahre Medianalter" },
    { name: "🇺🇬 Uganda", cleanName: "Uganda", continent: "Afrika", customVal: "ca. 18,1 Jahre Medianalter" },
    { name: "🇿🇲 Sambia", cleanName: "Sambia", continent: "Afrika", customVal: "ca. 18,3 Jahre Medianalter" },
    { name: "🇲🇿 Mosambik", cleanName: "Mosambik", continent: "Afrika", customVal: "ca. 18,3 Jahre Medianalter" },
    { name: "🇸🇸 Südsudan", cleanName: "Südsudan", continent: "Afrika", customVal: "ca. 18,6 Jahre Medianalter" },
    { name: "🇧🇯 Benin", cleanName: "Benin", continent: "Afrika", customVal: "ca. 18,8 Jahre Medianalter" },
    { name: "🇲🇬 Madagaskar", cleanName: "Madagaskar", continent: "Afrika", customVal: "ca. 19,6 Jahre Medianalter" }
];

countriesDatabase.top15_tourists = [
    { name: "🇫🇷 Frankreich", cleanName: "Frankreich", continent: "Europa", customVal: "Über 90 Mio. Gäste" },
    { name: "🇪🇸 Spanien", cleanName: "Spanien", continent: "Europa", customVal: "Über 80 Mio. Gäste" },
    { name: "🇺🇸 Vereinigte Staaten / USA", cleanName: "Vereinigte Staaten / USA", continent: "Nordamerika", customVal: "Über 50 Mio. Gäste" },
    { name: "🇮🇹 Italien", cleanName: "Italien", continent: "Europa", customVal: "Über 60 Mio. Gäste" },
    { name: "🇹🇷 Türkei", cleanName: "Türkei", continent: "Europa", customVal: "Über 50 Mio. Gäste" },
    { name: "🇲🇽 Mexiko", cleanName: "Mexiko", continent: "Nordamerika", customVal: "Über 40 Mio. Gäste" },
    { name: "🇬🇧 Vereinigtes Königreich / Großbritannien", cleanName: "Vereinigtes Königreich / Großbritannien", continent: "Europa", customVal: "Über 35 Mio. Gäste" },
    { name: "🇩🇪 Deutschland", cleanName: "Deutschland", continent: "Europa", customVal: "Über 30 Mio. Gäste" },
    { name: "🇬🇷 Griechenland", cleanName: "Griechenland", continent: "Europa", customVal: "Über 30 Mio. Gäste" },
    { name: "🇦🇹 Österreich", cleanName: "Österreich", continent: "Europa", customVal: "Über 25 Mio. Gäste" },
    { name: "🇯🇵 Japan", cleanName: "Japan", continent: "Asien", customVal: "Über 25 Mio. Gäste" },
    { name: "🇻🇳 Vietnam", cleanName: "Vietnam", continent: "Asien", customVal: "Starker Tourismus" },
    { name: "🇨🇳 China", cleanName: "China", continent: "Asien", customVal: "Kultur-Tourismus" },
    { name: "🇹🇭 Thailand", cleanName: "Thailand", continent: "Asien", customVal: "Über 35 Mio. Gäste" },
    { name: "🇵🇹 Portugal", cleanName: "Portugal", continent: "Europa", customVal: "Über 20 Mio. Gäste" }
];

countriesDatabase.soviet_union_current = [
    { name: "🇷🇺 Russland", cleanName: "Russland", continent: "Europa", customVal: "Größter Nachfolgestaat" },
    { name: "🇺🇦 Ukraine", cleanName: "Ukraine", continent: "Europa", customVal: "Osteuropa" },
    { name: "🇧🇾 Belarus", cleanName: "Belarus", continent: "Europa", customVal: "Osteuropa" },
    { name: "🇰🇿 Kasachstan", cleanName: "Kasachstan", continent: "Asien", customVal: "Zentralasien" },
    { name: "🇺🇿 Usbekistan", cleanName: "Usbekistan", continent: "Asien", customVal: "Zentralasien" },
    { name: "🇰🇬 Kirgisistan", cleanName: "Kirgisistan", continent: "Asien", customVal: "Zentralasien" },
    { name: "🇹🇯 Tadschikistan", cleanName: "Tadschikistan", continent: "Asien", customVal: "Zentralasien" },
    { name: "🇹🇲 Turkmenistan", cleanName: "Turkmenistan", continent: "Asien", customVal: "Zentralasien" },
    { name: "🇬🇪 Georgien", cleanName: "Georgien", continent: "Asien", customVal: "Kaukasus" },
    { name: "🇦🇲 Armenien", cleanName: "Armenien", continent: "Asien", customVal: "Kaukasus" },
    { name: "🇦🇿 Aserbaidschan", cleanName: "Aserbaidschan", continent: "Asien", customVal: "Kaukasus" },
    { name: "🇲🇩 Moldau", cleanName: "Moldau", continent: "Europa", customVal: "Osteuropa" },
    { name: "🇱🇹 Litauen", cleanName: "Litauen", continent: "Europa", customVal: "Baltikum" },
    { name: "🇱🇻 Lettland", cleanName: "Lettland", continent: "Europa", customVal: "Baltikum" },
    { name: "🇪🇪 Estland", cleanName: "Estland", continent: "Europa", customVal: "Baltikum" }
];

countriesDatabase.danube_countries = [
    { name: "🇩🇪 Deutschland", cleanName: "Deutschland", continent: "Europa", customVal: "Ursprung / Quelle in Donaueschingen" },
    { name: "🇦🇹 Österreich", cleanName: "Österreich", continent: "Europa", customVal: "Fließt durch Linz und Wien" },
    { name: "🇸🇰 Slowakei", cleanName: "Slowakei", continent: "Europa", customVal: "Fließt vorbei an Bratislava" },
    { name: "🇭🇺 Ungarn", cleanName: "Ungarn", continent: "Europa", customVal: "Fließt mitten durch Budapest" },
    { name: "🇭🇷 Kroatien", cleanName: "Kroatien", continent: "Europa", customVal: "Grenze / Flusslauf im Osten" },
    { name: "🇷🇸 Serbien", cleanName: "Serbien", continent: "Europa", customVal: "Fließt durch Belgrad" },
    { name: "🇷🇴 Rumänien", cleanName: "Rumänien", continent: "Europa", customVal: "Bildet das große Donaudelta" },
    { name: "🇧🇬 Bulgarien", cleanName: "Bulgarien", continent: "Europa", customVal: "Grenze zu Rumänien" },
    { name: "🇲🇩 Moldau", cleanName: "Moldau", continent: "Europa", customVal: "Kurzer Zugang bei Giurgiulești" },
    { name: "🇺🇦 Ukraine", cleanName: "Ukraine", continent: "Europa", customVal: "Mündung ins Schwarze Meer" }
];

countriesDatabase.india_borders = [
    { name: "🇵🇰 Pakistan", cleanName: "Pakistan", continent: "Asien", customVal: "Westlicher Nachbar" },
    { name: "🇨🇳 China", cleanName: "China", continent: "Asien", customVal: "Nördlicher Nachbar" },
    { name: "🇳🇵 Nepal", cleanName: "Nepal", continent: "Asien", customVal: "Nördlicher Nachbar im Himalaya" },
    { name: "🇧🇹 Bhutan", cleanName: "Bhutan", continent: "Asien", customVal: "Nördlicher Nachbar" },
    { name: "🇧🇩 Bangladesch", cleanName: "Bangladesch", continent: "Asien", customVal: "Östlicher Nachbar" },
    { name: "🇲🇲 Myanmar", cleanName: "Myanmar", continent: "Asien", customVal: "Südöstlicher Nachbar" }
];


countriesDatabase.ending_with_i = countriesDatabase.all_countries.filter(c => c.cleanName.toLowerCase().endsWith('i'));

countriesDatabase.four_letter_countries = countriesDatabase.all_countries.filter(c => c.cleanName.length === 4);

countriesDatabase.top15_most_letters = [
    { name: "🇧🇦 Bosnien und Herzegowina", cleanName: "Bosnien und Herzegowina", continent: "Europa", customVal: "25 Buchstaben" },
    { name: "🇻🇨 Saint Vincent und die Grenadinen", cleanName: "Saint Vincent und die Grenadinen", continent: "Nordamerika", customVal: "35 Buchstaben" },
    { name: "🇹🇹 Trinidad und Tobago", cleanName: "Trinidad und Tobago", continent: "Nordamerika", customVal: "22 Buchstaben" },
    { name: "🇨🇫 Zentralafrikanische Republik", cleanName: "Zentralafrikanische Republik", continent: "Afrika", customVal: "30 Buchstaben" },
    { name: "🇰🇳 Saint Kitts und Nevis", cleanName: "Saint Kitts und Nevis", continent: "Nordamerika", customVal: "24 Buchstaben" },
    { name: "🇬🇼 Guinea-Bissau", cleanName: "Guinea-Bissau", continent: "Afrika", customVal: "14 Buchstaben" },
    { name: "🇬🇶 Äquatorialguinea", cleanName: "Äquatorialguinea", continent: "Afrika", customVal: "18 Buchstaben" },
    { name: "🇩🇴 Dominikanische Republik", cleanName: "Dominikanische Republik", continent: "Nordamerika", customVal: "25 Buchstaben" },
    { name: "🇬🇧 Vereinigtes Königreich / Großbritannien", cleanName: "Vereinigtes Königreich / Großbritannien", continent: "Europa", customVal: "35 Buchstaben" },
    { name: "🇸🇹 São Tomé und Príncipe", cleanName: "São Tomé und Príncipe", continent: "Afrika", customVal: "22 Buchstaben" },
    { name: "🇦🇬 Antigua und Barbuda", cleanName: "Antigua und Barbuda", continent: "Nordamerika", customVal: "21 Buchstaben" },
    { name: "🇦🇪 Vereinigte Arabische Emirate", cleanName: "Vereinigte Arabische Emirate", continent: "Asien", customVal: "31 Buchstaben" },
    { name: "🇺🇸 Vereinigte Staaten / USA", cleanName: "Vereinigte Staaten / USA", continent: "Nordamerika", customVal: "26 Buchstaben" },
    { name: "🇰🇵 Nordkorea", cleanName: "Nordkorea", continent: "Asien", customVal: "10 Buchstaben" },
    { name: "🇰🇷 Südkorea", cleanName: "Südkorea", continent: "Asien", customVal: "9 Buchstaben" }
].sort((a, b) => b.cleanName.replace(/[^a-zA-ZäöüÄÖÜß]/g, "").length - a.cleanName.replace(/[^a-zA-ZäöüÄÖÜß]/g, "").length);
countriesDatabase.top15_holidays = [
    { name: "🇮🇷 Iran", cleanName: "Iran", continent: "Asien", customVal: "26 Feiertage" },
    { name: "🇰🇭 Kambodscha", cleanName: "Kambodscha", continent: "Asien", customVal: "28 Feiertage" },
    { name: "🇱🇰 Sri Lanka", cleanName: "Sri Lanka", continent: "Asien", customVal: "25 Feiertage" },
    { name: "🇮🇳 Indien", cleanName: "Indien", continent: "Asien", customVal: "21 Feiertage" },
    { name: "🇨🇴 Kolumbien", cleanName: "Kolumbien", continent: "Südamerika", customVal: "18 Feiertage" },
    { name: "🇵🇭 Philippinen", cleanName: "Philippinen", continent: "Asien", customVal: "18 Feiertage" },
    { name: "🇹🇭 Thailand", cleanName: "Thailand", continent: "Asien", customVal: "16 Feiertage" },
    { name: "🇦🇷 Argentinien", cleanName: "Argentinien", continent: "Südamerika", customVal: "16 Feiertage" },
    { name: "🇯🇵 Japan", cleanName: "Japan", continent: "Asien", customVal: "16 Feiertage" },
    { name: "🇸🇪 Schweden", cleanName: "Schweden", continent: "Europa", customVal: "15 Feiertage" },
    { name: "🇸🇰 Slowakei", cleanName: "Slowakei", continent: "Europa", customVal: "15 Feiertage" },
    { name: "🇨🇾 Zypern", cleanName: "Zypern", continent: "Europa", customVal: "15 Feiertage" },
    { name: "🇧🇬 Bulgarien", cleanName: "Bulgarien", continent: "Europa", customVal: "15 Feiertage" },
    { name: "🇪🇸 Spanien", cleanName: "Spanien", continent: "Europa", customVal: "14 Feiertage" },
    { name: "🇮🇩 Indonesien", cleanName: "Indonesien", continent: "Asien", customVal: "16 Feiertage" }
];

countriesDatabase.transcontinental_countries = [
    { name: "🇷🇺 Russland", cleanName: "Russland", continent: "Europa", customVal: "Europa & Asien" },
    { name: "🇹🇷 Türkei", cleanName: "Türkei", continent: "Europa", customVal: "Europa & Asien" },
    { name: "🇰🇿 Kasachstan", cleanName: "Kasachstan", continent: "Europa / Asien", customVal: "Europa & Asien" },
    { name: "🇪🇬 Ägypten", cleanName: "Ägypten", continent: "Afrika / Asien", customVal: "Afrika & Asien" },
    { name: "🇵🇦 Panama", cleanName: "Panama", continent: "Nordamerika / Südamerika", customVal: "Nordamerika & Südamerika" }
];

countriesDatabase.enclaved_countries = [
    { name: "🇻🇦 Vatikanstadt", cleanName: "Vatikanstadt", continent: "Europa", customVal: "Umschlossen von: Italien" },
    { name: "🇸🇲 San Marino", cleanName: "San Marino", continent: "Europa", customVal: "Umschlossen von: Italien" },
    { name: "🇱🇸 Lesotho", cleanName: "Lesotho", continent: "Afrika", customVal: "Umschlossen von: Südafrika" }
];

countriesDatabase.countries_in_space = [
    { name: "🇷🇺 Russland", cleanName: "Russland", continent: "Europa", customVal: "Juri Gagarin" },
    { name: "🇺🇸 Vereinigte Staaten / USA", cleanName: "Vereinigte Staaten / USA", continent: "Nordamerika", customVal: "Alan Shepard" },
    { name: "🇨🇳 China", cleanName: "China", continent: "Asien", customVal: "Yang Liwei" },
    { name: "🇩🇪 Deutschland", cleanName: "Deutschland", continent: "Europa", customVal: "Sigmund Jähn / Ulf Merbold" },
    { name: "🇫🇷 Frankreich", cleanName: "Frankreich", continent: "Europa", customVal: "Jean-Loup Chrétien" },
    { name: "🇮🇹 Italien", cleanName: "Italien", continent: "Europa", customVal: "Franco Malerba" },
    { name: "🇨🇦 Kanada", cleanName: "Kanada", continent: "Nordamerika", customVal: "Marc Garneau" },
    { name: "🇯🇵 Japan", cleanName: "Japan", continent: "Asien", customVal: "Toyohiro Akiyama" },
    { name: "🇬🇧 Vereinigtes Königreich", cleanName: "Vereinigtes Königreich", continent: "Europa", customVal: "Helen Sharman" },
    { name: "🇮🇳 Indien", cleanName: "Indien", continent: "Asien", customVal: "Rakesh Sharma" },
    { name: "🇺🇦 Ukraine", cleanName: "Ukraine", continent: "Europa", customVal: "Pawel Popowitsch" },
    { name: "🇨🇭 Schweiz", cleanName: "Schweiz", continent: "Europa", customVal: "Claude Nicollier" },
    { name: "🇸🇪 Schweden", cleanName: "Schweden", continent: "Europa", customVal: "Christer Fuglesang" },
    { name: "🇪🇸 Spanien", cleanName: "Spanien", continent: "Europa", customVal: "Pedro Duque" },
    { name: "🇧🇪 Belgien", cleanName: "Belgien", continent: "Europa", customVal: "Dirk Frimout" },
    { name: "🇳🇱 Niederlande", cleanName: "Niederlande", continent: "Europa", customVal: "Wubbo Ockels" },
    { name: "🇲🇽 Mexiko", cleanName: "Mexiko", continent: "Nordamerika", customVal: "Rodolfo Neri Vela" },
    { name: "🇰🇷 Südkorea", cleanName: "Südkorea", continent: "Asien", customVal: "Yi So-yeon" },
    { name: "🇧🇷 Brasilien", cleanName: "Brasilien", continent: "Südamerika", customVal: "Marcos Pontes" },
    { name: "🇸🇦 Saudi-Arabien", cleanName: "Saudi-Arabien", continent: "Asien", customVal: "Sultan bin Salman Al Saud" },
    { name: "🇦🇪 Vereinigte Arabische Emirate", cleanName: "Vereinigte Arabische Emirate", continent: "Asien", customVal: "Hazza Al Mansoori" },
    { name: "🇦🇹 Österreich", cleanName: "Österreich", continent: "Europa", customVal: "Franz Viehböck" },
    { name: "🇵🇱 Polen", cleanName: "Polen", continent: "Europa", customVal: "Mirosław Hermaszewski" },
    { name: "🇨🇿 Tschechien", cleanName: "Tschechien", continent: "Europa", customVal: "Vladimír Remek" },
    { name: "🇷🇴 Rumänien", cleanName: "Rumänien", continent: "Europa", customVal: "Dumitru Prunariu" },
    { name: "🇭🇺 Ungarn", cleanName: "Ungarn", continent: "Europa", customVal: "Bertalan Farkas" },
    { name: "🇧🇬 Bulgarien", cleanName: "Bulgarien", continent: "Europa", customVal: "Georgi Iwanow" },
    { name: "🇨🇺 Kuba", cleanName: "Kuba", continent: "Nordamerika", customVal: "Arnaldo Tamayo Méndez" },
    { name: "🇻🇳 Vietnam", cleanName: "Vietnam", continent: "Asien", customVal: "Pham Tuân" },
    { name: "🇲🇳 Mongolei", cleanName: "Mongolei", continent: "Asien", customVal: "Dschügrütdijn Gürsatschach" },
    { name: "🇸🇾 Syrien", cleanName: "Syrien", continent: "Asien", customVal: "Muhammed Faris" },
    { name: "🇦🇫 Afghanistan", cleanName: "Afghanistan", continent: "Asien", customVal: "Abdul Ahad Mohmand" },
    { name: "🇿🇦 Südafrika", cleanName: "Südafrika", continent: "Afrika", customVal: "Mark Shuttleworth" },
    { name: "🇮🇷 Iran", cleanName: "Iran", continent: "Asien", customVal: "Anousheh Ansari" },
    { name: "🇮🇱 Israel", cleanName: "Israel", continent: "Asien", customVal: "Ilan Ramon" },
    { name: "🇸🇰 Slowakei", cleanName: "Slowakei", continent: "Europa", customVal: "Ivan Bella" },
    { name: "🇦🇺 Australien", cleanName: "Australien", continent: "Ozeanien", customVal: "Paul Scully-Power" },
    { name: "🇩🇰 Dänemark", cleanName: "Dänemark", continent: "Europa", customVal: "Andreas Mogensen" },
    { name: "🇰🇿 Kasachstan", cleanName: "Kasachstan", continent: "Asien", customVal: "Toktar Aubakirov" },
    { name: "🇧🇾 Belarus", cleanName: "Belarus", continent: "Europa", customVal: "Pyotr Klimuk / Marina Wassilewskaja" },
    { name: "🇲🇾 Malaysia", cleanName: "Malaysia", continent: "Asien", customVal: "Sheikh Muszaphar Shukor" },
    { name: "🇸🇬 Singapur", cleanName: "Singapur", continent: "Asien", customVal: "Quotengast / Privat" },
    { name: "🇪🇸 Spanien", cleanName: "Spanien", continent: "Europa", customVal: "Pedro Duque" },
    { name: "🇸🇪 Schweden", cleanName: "Schweden", continent: "Europa", customVal: "Christer Fuglesang" },
    { name: "🇹🇷 Türkei", cleanName: "Türkei", continent: "Europa", customVal: "Alper Gezeravcı" },
    { name: "🇸🇪 Schweden", cleanName: "Schweden", continent: "Europa", customVal: "Christer Fuglesang" },
    { name: "🇸🇬 Singapur", cleanName: "Singapur", continent: "Asien", customVal: "Privatflug" },
    { name: "🇦🇿 Aserbaidschan", cleanName: "Aserbaidschan", continent: "Asien", customVal: "Musad Israpilov (Sowjet-Kontext)" },
    { name: "🇱🇹 Litauen", cleanName: "Litauen", continent: "Europa", customVal: "Rimantas Stankevičius (Testpilot)" },
    { name: "🇪🇸 Spanien", cleanName: "Spanien", continent: "Europa", customVal: "Pedro Duque" }
];
countriesDatabase.top15_animal_species = [
    { name: "🇧🇷 Brasilien", cleanName: "Brasilien", continent: "Südamerika", customVal: "Über 120.000 Tierarten" },
    { name: "🇮🇩 Indonesien", cleanName: "Indonesien", continent: "Asien", customVal: "Über 100.000 Tierarten" },
    { name: "🇨🇴 Kolumbien", cleanName: "Kolumbien", continent: "Südamerika", customVal: "Über 55.000 Tierarten" },
    { name: "🇨🇳 China", cleanName: "China", continent: "Asien", customVal: "Über 50.000 Tierarten" },
    { name: "🇲🇽 Mexiko", cleanName: "Mexiko", continent: "Nordamerika", customVal: "Über 50.000 Tierarten" },
    { name: "🇦🇺 Australien", cleanName: "Australien", continent: "Ozeanien", customVal: "Über 45.000 Tierarten" },
    { name: "🇵🇪 Peru", cleanName: "Peru", continent: "Südamerika", customVal: "Über 40.000 Tierarten" },
    { name: "🇮🇳 Indien", cleanName: "Indien", continent: "Asien", customVal: "Über 90.000 Tierarten gesamt" },
    { name: "🇪🇨 Ecuador", cleanName: "Ecuador", continent: "Südamerika", customVal: "Sehr hohe Artenvielfalt" },
    { name: "🇻🇪 Venezuela", cleanName: "Venezuela", continent: "Südamerika", customVal: "Über 35.000 Tierarten" },
    { name: "🇲🇾 Malaysia", cleanName: "Malaysia", continent: "Asien", customVal: "Über 30.000 Tierarten" },
    { name: "🇺🇸 Vereinigte Staaten / USA", cleanName: "Vereinigte Staaten / USA", continent: "Nordamerika", customVal: "Über 30.000 Tierarten" },
    { name: "🇲🇬 Madagaskar", cleanName: "Madagaskar", continent: "Afrika", customVal: "Hohe Endemiten-Rate" },
    { name: "🇨🇩 Demokratische Republik Kongo", cleanName: "Demokratische Republik Kongo", continent: "Afrika", customVal: "Reiche Fauna" },
    { name: "🇿🇦 Südafrika", cleanName: "Südafrika", continent: "Afrika", customVal: "Über 25.000 Tierarten" }
];

countriesDatabase.top15_snake_bites = [
    { name: "🇮🇳 Indien", cleanName: "Indien", continent: "Asien", customVal: "ca. 58.000 Tode / Jahr" },
    { name: "🇵🇰 Pakistan", cleanName: "Pakistan", continent: "Asien", customVal: "ca. 8.000 Tode / Jahr" },
    { name: "🇧🇩 Bangladesch", cleanName: "Bangladesch", continent: "Asien", customVal: "ca. 6.000 Tode / Jahr" },
    { name: "🇳🇬 Nigeria", cleanName: "Nigeria", continent: "Afrika", customVal: "ca. 2.000 Tode / Jahr" },
    { name: "🇧🇷 Brasilien", cleanName: "Brasilien", continent: "Südamerika", customVal: "Häufig in Amazonas-Region" },
    { name: "🇲🇲 Myanmar", cleanName: "Myanmar", continent: "Asien", customVal: "Hohe Fallzahlen" },
    { name: "🇳🇵 Nepal", cleanName: "Nepal", continent: "Asien", customVal: "Häufig im Terai-Tiefland" },
    { name: "🇱🇰 Sri Lanka", cleanName: "Sri Lanka", continent: "Asien", customVal: "Hohes Risiko auf dem Land" },
    { name: "🇰🇭 Kambodscha", cleanName: "Kambodscha", continent: "Asien", customVal: "Regionale Risiken" },
    { name: "🇻🇳 Vietnam", cleanName: "Vietnam", continent: "Asien", customVal: "Regionale Risiken" },
    { name: "🇹🇿 Tansania", cleanName: "Tansania", continent: "Afrika", customVal: "Häufig in ländlichen Regionen" },
    { name: "🇰🇪 Kenia", cleanName: "Kenia", continent: "Afrika", customVal: "Häufig in ländlichen Regionen" },
    { name: "🇨🇩 Demokratische Republik Kongo", cleanName: "Demokratische Republik Kongo", continent: "Afrika", customVal: "Hohes Tropen-Risiko" },
    { name: "🇨🇴 Kolumbien", cleanName: "Kolumbien", continent: "Südamerika", customVal: "Häufig im Dschungel" },
    { name: "🇻🇪 Venezuela", cleanName: "Venezuela", continent: "Südamerika", customVal: "Häufig im Tiefland" }
];

countriesDatabase.european_non_latin_alphabet = [
    { name: "🇬🇷 Griechenland", cleanName: "Griechenland", continent: "Europa", customVal: "Griechisches Alphabet" },
    { name: "🇷🇺 Russland", cleanName: "Russland", continent: "Europa", customVal: "Kyrillisches Alphabet" },
    { name: "🇧🇬 Bulgarien", cleanName: "Bulgarien", continent: "Europa", customVal: "Kyrillisches Alphabet" },
    { name: "🇷🇸 Serbien", cleanName: "Serbien", continent: "Europa", customVal: "Kyrillisches Alphabet (auch Latein)" },
    { name: "🇧🇾 Belarus", cleanName: "Belarus", continent: "Europa", customVal: "Kyrillisches Alphabet" },
    { name: "🇺🇦 Ukraine", cleanName: "Ukraine", continent: "Europa", customVal: "Kyrillisches Alphabet" },
    { name: "🇲🇰 Nordmazedonien", cleanName: "Nordmazedonien", continent: "Europa", customVal: "Kyrillisches Alphabet" }
];

countriesDatabase.countries_mountain_6000m = [
    { name: "🇨🇳 China", cleanName: "China", continent: "Asien", customVal: "Mount Everest (8.848 m)" },
    { name: "🇳🇵 Nepal", cleanName: "Nepal", continent: "Asien", customVal: "Mount Everest (8.848 m)" },
    { name: "🇵🇰 Pakistan", cleanName: "Pakistan", continent: "Asien", customVal: "K2 (8.611 m)" },
    { name: "🇮🇳 Indien", cleanName: "Indien", continent: "Asien", customVal: "Kangchendzönga (8.586 m)" },
    { name: "🇧🇹 Bhutan", cleanName: "Bhutan", continent: "Asien", customVal: "Gangkhar Puensum (7.570 m)" },
    { name: "🇹🇯 Tadschikistan", cleanName: "Tadschikistan", continent: "Asien", customVal: "Pik Ismoil Somoni (7.495 m)" },
    { name: "🇰🇬 Kirgisistan", cleanName: "Kirgisistan", continent: "Asien", customVal: "Pik Dschengis (7.439 m)" },
    { name: "🇦🇷 Argentinien", cleanName: "Argentinien", continent: "Südamerika", customVal: "Aconcagua (6.961 m)" },
    { name: "🇨🇱 Chile", cleanName: "Chile", continent: "Südamerika", customVal: "Ojos del Salado (6.893 m)" },
    { name: "🇵🇪 Peru", cleanName: "Peru", continent: "Südamerika", customVal: "Huascarán (6.768 m)" },
    { name: "🇧🇴 Bolivien", cleanName: "Bolivien", continent: "Südamerika", customVal: "Nevado Sajama (6.542 m)" },
    { name: "🇦🇫 Afghanistan", cleanName: "Afghanistan", continent: "Asien", customVal: "Noshaq (7.492 m)" },
    { name: "🇰🇿 Kasachstan", cleanName: "Kasachstan", continent: "Asien", customVal: "Khan Tengri (7.010 m)" },
    { name: "🇲🇲 Myanmar", cleanName: "Myanmar", continent: "Asien", customVal: "Hkakabo Razi (5.881 m - knapp darunter, aber oft gelistet)" },
    { name: "🇺🇸 Vereinigte Staaten / USA", cleanName: "Vereinigte Staaten / USA", continent: "Nordamerika", customVal: "Denali (6.190 m)" },
    { name: "🇪🇨 Ecuador", cleanName: "Ecuador", continent: "Südamerika", customVal: "Chimborazo (6.263 m)" },
    { name: "🇲🇽 Mexiko", cleanName: "Mexiko", continent: "Nordamerika", customVal: "Pico de Orizaba (5.636 m - entfernt)" },
    { name: "🇮🇷 Iran", cleanName: "Iran", continent: "Asien", customVal: "Damavand (5.610 m - entfernt)" },
    { name: "🇹🇿 Tansania", cleanName: "Tansania", continent: "Afrika", customVal: "Kilimandscharo (5.895 m - entfernt)" }
].filter(c => !["Mexiko", "Iran", "Tansania", "Myanmar"].includes(c.cleanName)); // Nur echte über 6000m

countriesDatabase.top15_richest_wealth = [
    { name: "🇨🇭 Schweiz", cleanName: "Schweiz", continent: "Europa", customVal: "Über 680.000 $ pro Kopf" },
    { name: "🇺🇸 Vereinigte Staaten / USA", cleanName: "Vereinigte Staaten / USA", continent: "Nordamerika", customVal: "Über 550.000 $ pro Kopf" },
    { name: "🇭🇰 Hongkong", cleanName: "Hongkong", continent: "Asien", customVal: "Über 580.000 $ pro Kopf" },
    { name: "🇦🇺 Australien", cleanName: "Australien", continent: "Ozeanien", customVal: "Über 420.000 $ pro Kopf" },
    { name: "🇩🇰 Dänemark", cleanName: "Dänemark", continent: "Europa", customVal: "Über 400.000 $ pro Kopf" },
    { name: "🇸🇬 Singapur", cleanName: "Singapur", continent: "Asien", customVal: "Über 380.000 $ pro Kopf" },
    { name: "🇳🇿 Neuseeland", cleanName: "Neuseeland", continent: "Ozeanien", customVal: "Über 370.000 $ pro Kopf" },
    { name: "🇨🇦 Kanada", cleanName: "Kanada", continent: "Nordamerika", customVal: "Über 360.000 $ pro Kopf" },
    { name: "🇳🇱 Niederlande", cleanName: "Niederlande", continent: "Europa", customVal: "Über 350.000 $ pro Kopf" },
    { name: "🇧🇪 Belgien", cleanName: "Belgien", continent: "Europa", customVal: "Über 350.000 $ pro Kopf" },
    { name: "🇳🇴 Norwegen", cleanName: "Norwegen", continent: "Europa", customVal: "Über 340.000 $ pro Kopf" },
    { name: "🇸🇪 Schweden", cleanName: "Schweden", continent: "Europa", customVal: "Über 330.000 $ pro Kopf" },
    { name: "🇫🇷 Frankreich", cleanName: "Frankreich", continent: "Europa", customVal: "Über 310.000 $ pro Kopf" },
    { name: "🇩🇪 Deutschland", cleanName: "Deutschland", continent: "Europa", customVal: "Über 300.000 $ pro Kopf" },
    { name: "🇬🇧 Vereinigtes Königreich", cleanName: "Vereinigtes Königreich", continent: "Europa", customVal: "Über 300.000 $ pro Kopf" }
];

countriesDatabase.top15_poorest_wealth = [
    { name: "🇦🇫 Afghanistan", cleanName: "Afghanistan", continent: "Asien", customVal: "Unter 2.000 $ pro Kopf" },
    { name: "🇧🇮 Burundi", cleanName: "Burundi", continent: "Afrika", customVal: "Unter 1.000 $ pro Kopf" },
    { name: "🇸🇸 Südsudan", cleanName: "Südsudan", continent: "Afrika", customVal: "Unter 1.500 $ pro Kopf" },
    { name: "🇲🇱 Mali", cleanName: "Mali", continent: "Afrika", customVal: "Unter 2.500 $ pro Kopf" },
    { name: "🇳🇬 Niger", cleanName: "Niger", continent: "Afrika", customVal: "Unter 2.500 $ pro Kopf" },
    { name: "🇲🇼 Malawi", cleanName: "Malawi", continent: "Afrika", customVal: "Unter 2.000 $ pro Kopf" },
    { name: "🇨🇫 Zentralafrikanische Republik", cleanName: "Zentralafrikanische Republik", continent: "Afrika", customVal: "Unter 2.000 $ pro Kopf" },
    { name: "🇲🇿 Mosambik", cleanName: "Mosambik", continent: "Afrika", customVal: "Unter 2.500 $ pro Kopf" },
    { name: "🇲🇦 Madagaskar", cleanName: "Madagaskar", continent: "Afrika", customVal: "Unter 3.000 $ pro Kopf" },
    { name: "🇸🇱 Sierra Leone", cleanName: "Sierra Leone", continent: "Afrika", customVal: "Unter 2.500 $ pro Kopf" },
    { name: "🇨🇩 Demokratische Republik Kongo", cleanName: "Demokratische Republik Kongo", continent: "Afrika", customVal: "Unter 2.000 $ pro Kopf" },
    { name: "🇱🇷 Liberia", cleanName: "Liberia", continent: "Afrika", customVal: "Unter 3.000 $ pro Kopf" },
    { name: "🇹🇩 Tschad", cleanName: "Tschad", continent: "Afrika", customVal: "Unter 2.500 $ pro Kopf" },
    { name: "🇬🇼 Guinea-Bissau", cleanName: "Guinea-Bissau", continent: "Afrika", customVal: "Unter 3.000 $ pro Kopf" },
    { name: "🇾🇪 Jemen", cleanName: "Jemen", continent: "Asien", customVal: "Unter 3.000 $ pro Kopf" }
];

countriesDatabase.top15_coldest_countries = [
    { name: "🇨🇦 Kanada", cleanName: "Kanada", continent: "Nordamerika", customVal: "-5.3 °C Durchschnitt" },
    { name: "🇷🇺 Russland", cleanName: "Russland", continent: "Europa", customVal: "-5.1 °C Durchschnitt" },
    { name: "🇲🇳 Mongolei", cleanName: "Mongolei", continent: "Asien", customVal: "-0.7 °C Durchschnitt" },
    { name: "🇳🇴 Norwegen", cleanName: "Norwegen", continent: "Europa", customVal: "1.5 °C Durchschnitt" },
    { name: "🇫🇮 Finnland", cleanName: "Finnland", continent: "Europa", customVal: "1.7 °C Durchschnitt" },
    { name: "🇮🇸 Island", cleanName: "Island", continent: "Europa", customVal: "1.7 °C Durchschnitt" },
    { name: "🇸🇪 Schweden", cleanName: "Schweden", continent: "Europa", customVal: "2.1 °C Durchschnitt" },
    { name: "🇰🇬 Kirgisistan", cleanName: "Kirgisistan", continent: "Asien", customVal: "1.5 °C Durchschnitt" },
    { name: "🇹🇯 Tadschikistan", cleanName: "Tadschikistan", continent: "Asien", customVal: "2.0 °C Durchschnitt" },
    { name: "🇪🇪 Estland", cleanName: "Estland", continent: "Europa", customVal: "5.1 °C Durchschnitt" },
    { name: "🇱🇻 Lettland", cleanName: "Lettland", continent: "Europa", customVal: "5.6 °C Durchschnitt" },
    { name: "🇰🇿 Kasachstan", cleanName: "Kasachstan", continent: "Asien", customVal: "6.4 °C Durchschnitt" },
    { name: "🇱🇹 Litauen", cleanName: "Litauen", continent: "Europa", customVal: "6.2 °C Durchschnitt" },
    { name: "🇧🇾 Belarus", cleanName: "Belarus", continent: "Europa", customVal: "6.1 °C Durchschnitt" },
    { name: "🇨🇿 Tschechien", cleanName: "Tschechien", continent: "Europa", customVal: "7.0 °C Durchschnitt" }
];

countriesDatabase.top15_warmest_countries = [
    { name: "🇲🇱 Mali", cleanName: "Mali", continent: "Afrika", customVal: "28.8 °C Durchschnitt" },
    { name: "🇧🇫 Burkina Faso", cleanName: "Burkina Faso", continent: "Afrika", customVal: "28.3 °C Durchschnitt" },
    { name: "🇸🇳 Senegal", cleanName: "Senegal", continent: "Afrika", customVal: "28.3 °C Durchschnitt" },
    { name: "🇹🇩 Tschad", cleanName: "Tschad", continent: "Afrika", customVal: "28.2 °C Durchschnitt" },
    { name: "🇲🇷 Mauretanien", cleanName: "Mauretanien", continent: "Afrika", customVal: "28.1 °C Durchschnitt" },
    { name: "🇩🇯 Dschibuti", cleanName: "Dschibuti", continent: "Afrika", customVal: "28.0 °C Durchschnitt" },
    { name: "🇹🇬 Togo", cleanName: "Togo", continent: "Afrika", customVal: "27.9 °C Durchschnitt" },
    { name: "🇬🇲 Gambia", cleanName: "Gambia", continent: "Afrika", customVal: "27.9 °C Durchschnitt" },
    { name: "🇧🇯 Benin", cleanName: "Benin", continent: "Afrika", customVal: "27.9 °C Durchschnitt" },
    { name: "🇵🇼 Palau", cleanName: "Palau", continent: "Ozeanien", customVal: "27.8 °C Durchschnitt" },
    { name: "🇸🇩 Sudan", cleanName: "Sudan", continent: "Afrika", customVal: "27.7 °C Durchschnitt" },
    { name: "🇬🇭 Ghana", cleanName: "Ghana", continent: "Afrika", customVal: "27.6 °C Durchschnitt" },
    { name: "🇰🇮 Kiribati", cleanName: "Kiribati", continent: "Ozeanien", customVal: "27.6 °C Durchschnitt" },
    { name: "🇲🇻 Malediven", cleanName: "Malediven", continent: "Asien", customVal: "27.6 °C Durchschnitt" },
    { name: "🇸🇸 Südsudan", cleanName: "Südsudan", continent: "Afrika", customVal: "27.6 °C Durchschnitt" }
];
countriesDatabase.mediterranean_countries = countriesDatabase.all_countries.filter(c => [
    "Spanien", "Frankreich", "Monaco", "Italien", "Malta", "Slowenien", "Kroatien",
    "Bosnien und Herzegowina", "Montenegro", "Albanien", "Griechenland", "Türkei",
    "Zypern", "Syrien", "Libanon", "Israel", "Ägypten", "Libyen", "Tunesien",
    "Algerien", "Marokko"
].includes(c.cleanName));

countriesDatabase.usd_countries = countriesDatabase.all_countries.filter(c => [
    "Vereinigte Staaten / USA", "Ecuador", "El Salvador", "Panama", "Simbabwe",
    "Osttimor", "Mikronesien", "Palau", "Marshallinseln"
].includes(c.cleanName));

countriesDatabase.north_equator = countriesDatabase.all_countries.filter(c => 
    ["Europa", "Nordamerika"].includes(c.continent) || 
    ["Asien", "Afrika"].includes(c.continent) && !["Südafrika", "Lesotho", "Eswatini", "Sambia", "Simbabwe", "Botswana", "Namibia", "Angola", "Mosambik", "Madagaskar", "Mauritius", "Komoren", "Seychellen"].includes(c.cleanName)
);

countriesDatabase.south_equator = countriesDatabase.all_countries.filter(c => 
    ["Südamerika", "Ozeanien"].includes(c.continent) || 
    ["Afrika"].includes(c.continent) && ["Südafrika", "Lesotho", "Eswatini", "Sambia", "Simbabwe", "Botswana", "Namibia", "Angola", "Mosambik", "Madagaskar", "Mauritius", "Komoren", "Seychellen", "Tansania", "Republik Kongo", "Demokratische Republik Kongo", "Gabun", "Kenia", "Malawi", "Ruanda", "Burundi"].includes(c.cleanName)
);

countriesDatabase.top15_newest_countries = [
    { name: "🇸🇸 Südsudan", cleanName: "Südsudan", continent: "Afrika", customVal: "Entstanden 2011" },
    { name: "🇷🇸 Serbien", cleanName: "Serbien", continent: "Europa", customVal: "Entstanden 2006" },
    { name: "🇲🇪 Montenegro", cleanName: "Montenegro", continent: "Europa", customVal: "Entstanden 2006" },
    { name: "🇹🇱 Osttimor", cleanName: "Osttimor", continent: "Asien", customVal: "Entstanden 2002" },
    { name: "🇵🇼 Palau", cleanName: "Palau", continent: "Ozeanien", customVal: "Entstanden 1994" },
    { name: "🇪🇷 Eritrea", cleanName: "Eritrea", continent: "Afrika", customVal: "Entstanden 1993" },
    { name: "🇸🇰 Slowakei", cleanName: "Slowakei", continent: "Europa", customVal: "Entstanden 1993" },
    { name: "🇨🇿 Tschechien", cleanName: "Tschechien", continent: "Europa", customVal: "Entstanden 1993" },
    { name: "🇭🇷 Kroatien", cleanName: "Kroatien", continent: "Europa", customVal: "Entstanden 1991" },
    { name: "🇸🇮 Slowenien", cleanName: "Slowenien", continent: "Europa", customVal: "Entstanden 1991" },
    { name: "🇧🇦 Bosnien und Herzegowina", cleanName: "Bosnien und Herzegowina", continent: "Europa", customVal: "Entstanden 1992" },
    { name: "🇲🇰 Nordmazedonien", cleanName: "Nordmazedonien", continent: "Europa", customVal: "Entstanden 1991" },
    { name: "🇪🇪 Estland", cleanName: "Estland", continent: "Europa", customVal: "Entstanden 1991" },
    { name: "🇱🇻 Lettland", cleanName: "Lettland", continent: "Europa", customVal: "Entstanden 1991" },
    { name: "🇱🇹 Litauen", cleanName: "Litauen", continent: "Europa", customVal: "Entstanden 1991" }
];
countriesDatabase.top15_area_high = [
    { name: "🇷🇺 Russland", cleanName: "Russland", continent: "Europa", customVal: "17.098.242 km²" },
    { name: "🇨🇦 Kanada", cleanName: "Kanada", continent: "Nordamerika", customVal: "9.984.670 km²" },
    { name: "🇨🇳 China", cleanName: "China", continent: "Asien", customVal: "9.596.961 km²" },
    { name: "🇺🇸 Vereinigte Staaten / USA", cleanName: "Vereinigte Staaten / USA", continent: "Nordamerika", customVal: "9.833.517 km²" },
    { name: "🇧🇷 Brasilien", cleanName: "Brasilien", continent: "Südamerika", customVal: "8.515.767 km²" },
    { name: "🇦🇺 Australien", cleanName: "Australien", continent: "Ozeanien", customVal: "7.692.024 km²" },
    { name: "🇮🇳 Indien", cleanName: "Indien", continent: "Asien", customVal: "3.287.263 km²" },
    { name: "🇦🇷 Argentinien", cleanName: "Argentinien", continent: "Südamerika", customVal: "2.780.400 km²" },
    { name: "🇰🇿 Kasachstan", cleanName: "Kasachstan", continent: "Asien", customVal: "2.724.900 km²" },
    { name: "🇩🇿 Algerien", cleanName: "Algerien", continent: "Afrika", customVal: "2.381.741 km²" },
    { name: "🇨🇩 Demokratische Republik Kongo", cleanName: "Demokratische Republik Kongo", continent: "Afrika", customVal: "2.344.858 km²" },
    { name: "🇸🇦 Saudi-Arabien", cleanName: "Saudi-Arabien", continent: "Asien", customVal: "2.149.690 km²" },
    { name: "🇲🇽 Mexiko", cleanName: "Mexiko", continent: "Nordamerika", customVal: "1.964.375 km²" },
    { name: "🇮🇩 Indonesien", cleanName: "Indonesien", continent: "Asien", customVal: "1.904.569 km²" },
    { name: "🇸🇩 Sudan", cleanName: "Sudan", continent: "Afrika", customVal: "1.861.484 km²" }
];

countriesDatabase.top15_area_low = [
    { name: "🇻🇦 Vatikanstadt", cleanName: "Vatikanstadt", continent: "Europa", customVal: "0,49 km²" },
    { name: "🇲🇨 Monaco", cleanName: "Monaco", continent: "Europa", customVal: "2,02 km²" },
    { name: "🇳🇷 Nauru", cleanName: "Nauru", continent: "Ozeanien", customVal: "21 km²" },
    { name: "🇹🇻 Tuvalu", cleanName: "Tuvalu", continent: "Ozeanien", customVal: "26 km²" },
    { name: "🇸🇲 San Marino", cleanName: "San Marino", continent: "Europa", customVal: "61 km²" },
    { name: "🇱🇮 Liechtenstein", cleanName: "Liechtenstein", continent: "Europa", customVal: "160 km²" },
    { name: "🇲🇭 Marshallinseln", cleanName: "Marshallinseln", continent: "Ozeanien", customVal: "181 km²" },
    { name: "🇰🇳 Saint Kitts und Nevis", cleanName: "Saint Kitts und Nevis", continent: "Nordamerika", customVal: "261 km²" },
    { name: "🇲🇻 Malediven", cleanName: "Malediven", continent: "Asien", customVal: "300 km²" },
    { name: "🇲🇹 Malta", cleanName: "Malta", continent: "Europa", customVal: "316 km²" },
    { name: "🇬🇩 Grenada", cleanName: "Grenada", continent: "Nordamerika", customVal: "344 km²" },
    { name: "🇸🇨 Seychellen", cleanName: "Seychellen", continent: "Afrika", customVal: "452 km²" },
    { name: "🇦🇩 Andorra", cleanName: "Andorra", continent: "Europa", customVal: "468 km²" },
    { name: "🇦🇬 Antigua und Barbuda", cleanName: "Antigua und Barbuda", continent: "Nordamerika", customVal: "442 km²" },
    { name: "🇧🇧 Barbados", cleanName: "Barbados", continent: "Nordamerika", customVal: "430 km²" }
];

countriesDatabase.one_neighbor = countriesDatabase.all_countries.filter(c => [
    "Portugal", "Irland", "Vereinigtes Königreich / Großbritannien", "Vatikanstadt",
    "San Marino", "Monaco", "Papua-Neuguinea", "Haiti", "Dominikanische Republik",
    "Korea, Südkorea", "Südkorea", "Lesotho", "Gambia", "Katar", "Brunei"
].includes(c.cleanName));

countriesDatabase.top15_temp_high = [
    { name: "🇲🇱 Mali", cleanName: "Mali", continent: "Afrika", customVal: "29.6 °C" },
    { name: "🇧🇫 Burkina Faso", cleanName: "Burkina Faso", continent: "Afrika", customVal: "29.2 °C" },
    { name: "🇩🇯 Dschibuti", cleanName: "Dschibuti", continent: "Afrika", customVal: "29.1 °C" },
    { name: "🇦🇪 Vereinigte Arabische Emirate", cleanName: "Vereinigte Arabische Emirate", continent: "Asien", customVal: "28.9 °C" },
    { name: "🇸🇳 Senegal", cleanName: "Senegal", continent: "Afrika", customVal: "28.5 °C" },
    { name: "🇳🇪 Niger", cleanName: "Niger", continent: "Afrika", customVal: "28.4 °C" },
    { name: "🇧🇯 Benin", cleanName: "Benin", continent: "Afrika", customVal: "28.3 °C" },
    { name: "🇴🇲 Oman", cleanName: "Oman", continent: "Asien", customVal: "28.3 °C" },
    { name: "🇲🇷 Mauretanien", cleanName: "Mauretanien", continent: "Afrika", customVal: "28.2 °C" },
    { name: "🇸🇸 Südsudan", cleanName: "Südsudan", continent: "Afrika", customVal: "28.2 °C" },
    { name: "🇬🇲 Gambia", cleanName: "Gambia", continent: "Afrika", customVal: "28.4 °C" },
    { name: "🇲🇻 Malediven", cleanName: "Malediven", continent: "Asien", customVal: "28.1 °C" },
    { name: "🇶🇦 Katar", cleanName: "Katar", continent: "Asien", customVal: "28.0 °C" },
    { name: "🇬🇼 Guinea-Bissau", cleanName: "Guinea-Bissau", continent: "Afrika", customVal: "28.0 °C" },
    { name: "🇸🇩 Sudan", cleanName: "Sudan", continent: "Afrika", customVal: "28.0 °C" }
];

countriesDatabase.top15_temp_low = [
    { name: "🇨🇦 Kanada", cleanName: "Kanada", continent: "Nordamerika", customVal: "-4.0 °C" },
    { name: "🇷🇺 Russland", cleanName: "Russland", continent: "Europa", customVal: "-3.8 °C" },
    { name: "🇲🇳 Mongolei", cleanName: "Mongolei", continent: "Asien", customVal: "1.1 °C" },
    { name: "🇮🇸 Island", cleanName: "Island", continent: "Europa", customVal: "1.9 °C" },
    { name: "🇳🇴 Norwegen", cleanName: "Norwegen", continent: "Europa", customVal: "2.2 °C" },
    { name: "🇫🇮 Finnland", cleanName: "Finnland", continent: "Europa", customVal: "2.5 °C" },
    { name: "🇰🇬 Kirgisistan", cleanName: "Kirgisistan", continent: "Asien", customVal: "2.7 °C" },
    { name: "🇸🇪 Schweden", cleanName: "Schweden", continent: "Europa", customVal: "3.2 °C" },
    { name: "🇹🇯 Tadschikistan", cleanName: "Tadschikistan", continent: "Asien", customVal: "3.9 °C" },
    { name: "🇪🇪 Estland", cleanName: "Estland", continent: "Europa", customVal: "6.3 °C" },
    { name: "🇱🇻 Lettland", cleanName: "Lettland", continent: "Europa", customVal: "6.5 °C" },
    { name: "🇱🇹 Litauen", cleanName: "Litauen", continent: "Europa", customVal: "7.0 °C" },
    { name: "🇧🇾 Belarus", cleanName: "Belarus", continent: "Europa", customVal: "6.7 °C" },
    { name: "🇰🇿 Kasachstan", cleanName: "Kasachstan", continent: "Asien", customVal: "6.4 °C" },
    { name: "🇨🇿 Tschechien", cleanName: "Tschechien", continent: "Europa", customVal: "7.5 °C" }
];

countriesDatabase.top15_coffee = [
    { name: "🇫🇮 Finnland", cleanName: "Finnland", continent: "Europa", customVal: "12.0 kg pro Kopf" },
    { name: "🇳🇴 Norwegen", cleanName: "Norwegen", continent: "Europa", customVal: "9.9 kg pro Kopf" },
    { name: "🇮🇸 Island", cleanName: "Island", continent: "Europa", customVal: "9.0 kg pro Kopf" },
    { name: "🇩🇰 Dänemark", cleanName: "Dänemark", continent: "Europa", customVal: "8.7 kg pro Kopf" },
    { name: "🇳🇱 Niederlande", cleanName: "Niederlande", continent: "Europa", customVal: "8.4 kg pro Kopf" },
    { name: "🇸🇪 Schweden", cleanName: "Schweden", continent: "Europa", customVal: "8.2 kg pro Kopf" },
    { name: "🇨🇭 Schweiz", cleanName: "Schweiz", continent: "Europa", customVal: "7.9 kg pro Kopf" },
    { name: "比利时 Belgien", cleanName: "Belgien", continent: "Europa", customVal: "6.8 kg pro Kopf" },
    { name: "🇱🇺 Luxemburg", cleanName: "Luxemburg", continent: "Europa", customVal: "6.5 kg pro Kopf" },
    { name: "🇨🇦 Kanada", cleanName: "Kanada", continent: "Nordamerika", customVal: "6.2 kg pro Kopf" },
    { name: "🇩🇪 Deutschland", cleanName: "Deutschland", continent: "Europa", customVal: "5.5 kg pro Kopf" },
    { name: "🇧🇷 Brasilien", cleanName: "Brasilien", continent: "Südamerika", customVal: "5.1 kg pro Kopf" },
    { name: "🇪🇪 Estland", cleanName: "Estland", continent: "Europa", customVal: "4.8 kg pro Kopf" },
    { name: "🇸🇮 Slowenien", cleanName: "Slowenien", continent: "Europa", customVal: "4.7 kg pro Kopf" },
    { name: "🇦🇹 Österreich", cleanName: "Österreich", continent: "Europa", customVal: "4.6 kg pro Kopf" }
];

countriesDatabase.top15_beer = [
    { name: "🇨🇿 Tschechien", cleanName: "Tschechien", continent: "Europa", customVal: "188.5 Liter" },
    { name: "🇦🇹 Österreich", cleanName: "Österreich", continent: "Europa", customVal: "101.2 Liter" },
    { name: "🇵🇱 Polen", cleanName: "Polen", continent: "Europa", customVal: "99.6 Liter" },
    { name: "🇮🇪 Irland", cleanName: "Irland", continent: "Europa", customVal: "99.3 Liter" },
    { name: "🇱🇹 Litauen", cleanName: "Litauen", continent: "Europa", customVal: "97.6 Liter" },
    { name: "🇪🇸 Spanien", cleanName: "Spanien", continent: "Europa", customVal: "95.1 Liter" },
    { name: "🇩🇪 Deutschland", cleanName: "Deutschland", continent: "Europa", customVal: "93.3 Liter" },
    { name: "🇪🇪 Estland", cleanName: "Estland", continent: "Europa", customVal: "93.1 Liter" },
    { name: "🇷🇴 Rumänien", cleanName: "Rumänien", continent: "Europa", customVal: "91.6 Liter" },
    { name: "🇳🇦 Namibia", cleanName: "Namibia", continent: "Afrika", customVal: "90.8 Liter" },
    { name: "🇭🇷 Kroatien", cleanName: "Kroatien", continent: "Europa", customVal: "90.0 Liter" },
    { name: "🇱🇻 Lettland", cleanName: "Lettland", continent: "Europa", customVal: "86.0 Liter" },
    { name: "🇸🇮 Slowenien", cleanName: "Slowenien", continent: "Europa", customVal: "83.9 Liter" },
    { name: "🇬🇦 Gabun", cleanName: "Gabun", continent: "Afrika", customVal: "82.5 Liter" },
    { name: "🇧🇬 Bulgarien", cleanName: "Bulgarien", continent: "Europa", customVal: "80.4 Liter" }
];

countriesDatabase.top15_fastfood = [
    { name: "🇺🇸 Vereinigte Staaten / USA", cleanName: "Vereinigte Staaten / USA", continent: "Nordamerika", customVal: "über 200.000 Filialen" },
    { name: "🇨🇳 China", cleanName: "China", continent: "Asien", customVal: "über 50.000 Filialen" },
    { name: "🇯🇵 Japan", cleanName: "Japan", continent: "Asien", customVal: "über 30.000 Filialen" },
    { name: "🇧🇷 Brasilien", cleanName: "Brasilien", continent: "Südamerika", customVal: "über 15.000 Filialen" },
    { name: "🇬🇧 Vereinigtes Königreich / Großbritannien", cleanName: "Vereinigtes Königreich / Großbritannien", continent: "Europa", customVal: "über 13.000 Filialen" },
    { name: "🇨🇦 Kanada", cleanName: "Kanada", continent: "Nordamerika", customVal: "über 12.000 Filialen" },
    { name: "🇲🇽 Mexiko", cleanName: "Mexiko", continent: "Nordamerika", customVal: "über 10.000 Filialen" },
    { name: "🇩🇪 Deutschland", cleanName: "Deutschland", continent: "Europa", customVal: "über 8.000 Filialen" },
    { name: "🇫🇷 Frankreich", cleanName: "Frankreich", continent: "Europa", customVal: "über 7.500 Filialen" },
    { name: "🇦🇺 Australien", cleanName: "Australien", continent: "Ozeanien", customVal: "über 7.000 Filialen" },
    { name: "🇮🇳 Indien", cleanName: "Indien", continent: "Asien", customVal: "über 6.500 Filialen" },
    { name: "🇰🇷 Südkorea", cleanName: "Südkorea", continent: "Asien", customVal: "über 6.000 Filialen" },
    { name: "🇪🇸 Spanien", cleanName: "Spanien", continent: "Europa", customVal: "über 5.000 Filialen" },
    { name: "🇮🇹 Italien", cleanName: "Italien", continent: "Europa", customVal: "über 4.000 Filialen" },
    { name: "🇵🇱 Polen", cleanName: "Polen", continent: "Europa", customVal: "über 3.500 Filialen" }
];

countriesDatabase.top15_forest = [
    { name: "🇸🇷 Suriname", cleanName: "Suriname", continent: "Südamerika", customVal: "97.4 % Wald" },
    { name: "🇫🇲 Mikronesien", cleanName: "Mikronesien", continent: "Ozeanien", customVal: "91.9 % Wald" },
    { name: "🇬🇦 Gabun", cleanName: "Gabun", continent: "Afrika", customVal: "90.0 % Wald" },
    { name: "🇸🇱 Sierra Leone", cleanName: "Sierra Leone", continent: "Afrika", customVal: "79.0 % Wald" },
    { name: "🇯🇵 Japan", cleanName: "Japan", continent: "Asien", customVal: "68.4 % Wald" },
    { name: "🇫🇮 Finnland", cleanName: "Finnland", continent: "Europa", customVal: "73.7 % Wald" },
    { name: "🇸🇪 Schweden", cleanName: "Schweden", continent: "Europa", customVal: "68.7 % Wald" },
    { name: "🇧🇷 Brasilien", cleanName: "Brasilien", continent: "Südamerika", customVal: "59.4 % Wald" },
    { name: "🇰🇷 Südkorea", cleanName: "Südkorea", continent: "Asien", customVal: "63.0 % Wald" },
    { name: "🇨🇩 Demokratische Republik Kongo", cleanName: "Demokratische Republik Kongo", continent: "Afrika", customVal: "55.6 % Wald" },
    { name: "🇸🇱 Laotische Demokratische Volksrepublik / Laos", cleanName: "Laos", continent: "Asien", customVal: "64.5 % Wald" },
    { name: "🇨🇴 Kolumbien", cleanName: "Kolumbien", continent: "Südamerika", customVal: "52.3 % Wald" },
    { name: "🇲🇾 Malaysia", cleanName: "Malaysia", continent: "Asien", customVal: "58.2 % Wald" },
    { name: "🇮🇩 Indonesien", cleanName: "Indonesien", continent: "Asien", customVal: "49.1 % Wald" },
    { name: "🇪🇪 Estland", cleanName: "Estland", continent: "Europa", customVal: "53.0 % Wald" }
];

countriesDatabase.top15_young_pop = [
    { name: "🇳🇬 Niger", cleanName: "Niger", continent: "Afrika", customVal: "14.8 Jahre" },
    { name: "🇹🇩 Tschad", cleanName: "Tschad", continent: "Afrika", customVal: "16.3 Jahre" },
    { name: "🇲🇱 Mali", cleanName: "Mali", continent: "Afrika", customVal: "16.3 Jahre" },
    { name: "🇧🇮 Burundi", cleanName: "Burundi", continent: "Afrika", customVal: "17.0 Jahre" },
    { name: "🇸🇴 Somalia", cleanName: "Somalia", continent: "Afrika", customVal: "17.1 Jahre" },
    { name: "🇨🇩 Demokratische Republik Kongo", cleanName: "Demokratische Republik Kongo", continent: "Afrika", customVal: "17.2 Jahre" },
    { name: "🇦🇴 Angola", cleanName: "Angola", continent: "Afrika", customVal: "17.3 Jahre" },
    { name: "🇧🇫 Burkina Faso", cleanName: "Burkina Faso", continent: "Afrika", customVal: "17.9 Jahre" },
    { name: "🇲🇼 Malawi", cleanName: "Malawi", continent: "Afrika", customVal: "18.1 Jahre" },
    { name: "🇺🇬 Uganda", cleanName: "Uganda", continent: "Afrika", customVal: "18.1 Jahre" },
    { name: "🇿🇲 Sambia", cleanName: "Sambia", continent: "Afrika", customVal: "18.3 Jahre" },
    { name: "🇲🇿 Mosambik", cleanName: "Mosambik", continent: "Afrika", customVal: "18.3 Jahre" },
    { name: "🇸🇸 Südsudan", cleanName: "Südsudan", continent: "Afrika", customVal: "18.6 Jahre" },
    { name: "🇧🇯 Benin", cleanName: "Benin", continent: "Afrika", customVal: "18.8 Jahre" },
    { name: "🇲🇦 Madagaskar", cleanName: "Madagaskar", continent: "Afrika", customVal: "19.6 Jahre" }
];

countriesDatabase.top15_old_pop = [
    { name: "🇲🇨 Monaco", cleanName: "Monaco", continent: "Europa", customVal: "55.4 Jahre" },
    { name: "🇯🇵 Japan", cleanName: "Japan", continent: "Asien", customVal: "49.5 Jahre" },
    { name: "🇮🇹 Italien", cleanName: "Italien", continent: "Europa", customVal: "48.4 Jahre" },
    { name: "🇭🇰 Hongkong", cleanName: "Hongkong", continent: "Asien", customVal: "46.3 Jahre" },
    { name: "🇵🇹 Portugal", cleanName: "Portugal", continent: "Europa", customVal: "46.8 Jahre" },
    { name: "🇩🇪 Deutschland", cleanName: "Deutschland", continent: "Europa", customVal: "45.8 Jahre" },
    { name: "🇬🇷 Griechenland", cleanName: "Griechenland", continent: "Europa", customVal: "45.7 Jahre" },
    { name: "🇫🇮 Finnland", cleanName: "Finnland", continent: "Europa", customVal: "43.1 Jahre" },
    { name: "🇪🇸 Spanien", cleanName: "Spanien", continent: "Europa", customVal: "45.1 Jahre" },
    { name: "🇦🇹 Österreich", cleanName: "Österreich", continent: "Europa", customVal: "44.5 Jahre" },
    { name: "🇰🇷 Südkorea", cleanName: "Südkorea", continent: "Asien", customVal: "45.6 Jahre" },
    { name: "🇧🇬 Bulgarien", cleanName: "Bulgarien", continent: "Europa", customVal: "45.3 Jahre" },
    { name: "🇭🇺 Ungarn", cleanName: "Ungarn", continent: "Europa", customVal: "44.3 Jahre" },
    { name: "🇨🇭 Schweiz", cleanName: "Schweiz", continent: "Europa", customVal: "43.3 Jahre" },
    { name: "🇱🇻 Lettland", cleanName: "Lettland", continent: "Europa", customVal: "44.1 Jahre" }
];

countriesDatabase.top15_happy = [
    { name: "🇫🇮 Finnland", cleanName: "Finnland", continent: "Europa", customVal: "7.74 Score" },
    { name: "🇩🇰 Dänemark", cleanName: "Dänemark", continent: "Europa", customVal: "7.52 Score" },
    { name: "🇮🇸 Island", cleanName: "Island", continent: "Europa", customVal: "7.52 Score" },
    { name: "🇸🇪 Schweden", cleanName: "Schweden", continent: "Europa", customVal: "7.35 Score" },
    { name: "🇳🇱 Niederlande", cleanName: "Niederlande", continent: "Europa", customVal: "7.31 Score" },
    { name: "🇨🇷 Costa Rica", cleanName: "Costa Rica", continent: "Nordamerika", customVal: "7.27 Score" },
    { name: "🇳🇴 Norwegen", cleanName: "Norwegen", continent: "Europa", customVal: "7.26 Score" },
    { name: "🇮🇱 Israel", cleanName: "Israel", continent: "Asien", customVal: "7.23 Score" },
    { name: "🇱🇺 Luxemburg", cleanName: "Luxemburg", continent: "Europa", customVal: "7.12 Score" },
    { name: "🇲🇽 Mexiko", cleanName: "Mexiko", continent: "Nordamerika", customVal: "6.98 Score" },
    { name: "🇦🇺 Australien", cleanName: "Australien", continent: "Ozeanien", customVal: "6.97 Score" },
    { name: "🇳🇿 Neuseeland", cleanName: "Neuseeland", continent: "Ozeanien", customVal: "6.95 Score" },
    { name: "🇨🇭 Schweiz", cleanName: "Schweiz", continent: "Europa", customVal: "6.94 Score" },
    { name: "🇧🇪 Belgien", cleanName: "Belgien", continent: "Europa", customVal: "6.91 Score" },
    { name: "🇮🇪 Irland", cleanName: "Irland", continent: "Europa", customVal: "6.89 Score" }
];

countriesDatabase.top15_safe = [
    { name: "🇮🇸 Island", cleanName: "Island", continent: "Europa", customVal: "Sehr niedrig (Platz 1)" },
    { name: "🇸🇬 Singapur", cleanName: "Singapur", continent: "Asien", customVal: "Sehr niedrig" },
    { name: "🇮🇪 Irland", cleanName: "Irland", continent: "Europa", customVal: "Niedrig" },
    { name: "🇦🇹 Österreich", cleanName: "Österreich", continent: "Europa", customVal: "Niedrig" },
    { name: "🇳🇿 Neuseeland", cleanName: "Neuseeland", continent: "Ozeanien", customVal: "Niedrig" },
    { name: "🇸🇬 Singapur", cleanName: "Singapur", continent: "Asien", customVal: "Niedrig" },
    { name: "🇨🇭 Schweiz", cleanName: "Schweiz", continent: "Europa", customVal: "Niedrig" },
    { name: "🇵🇹 Portugal", cleanName: "Portugal", continent: "Europa", customVal: "Niedrig" },
    { name: "🇩🇰 Dänemark", cleanName: "Dänemark", continent: "Europa", customVal: "Niedrig" },
    { name: "🇸🇮 Slowenien", cleanName: "Slowenien", continent: "Europa", customVal: "Niedrig" },
    { name: "🇲🇾 Malaysia", cleanName: "Malaysia", continent: "Asien", customVal: "Niedrig" },
    { name: "🇨🇿 Tschechien", cleanName: "Tschechien", continent: "Europa", customVal: "Niedrig" },
    { name: "🇨🇦 Kanada", cleanName: "Kanada", continent: "Nordamerika", customVal: "Niedrig" },
    { name: "🇯🇵 Japan", cleanName: "Japan", continent: "Asien", customVal: "Sehr niedrig" },
    { name: "🇫🇮 Finnland", cleanName: "Finnland", continent: "Europa", customVal: "Niedrig" }
];

countriesDatabase.top15_military = [
    { name: "🇨🇳 China", cleanName: "China", continent: "Asien", customVal: "ca. 2,0 Mio. Soldaten" },
    { name: "🇮🇳 Indien", cleanName: "Indien", continent: "Asien", customVal: "ca. 1,45 Mio. Soldaten" },
    { name: "🇺🇸 Vereinigte Staaten / USA", cleanName: "Vereinigte Staaten / USA", continent: "Nordamerika", customVal: "ca. 1,35 Mio. Soldaten" },
    { name: "🇰🇵 Nordkorea", cleanName: "Nordkorea", continent: "Asien", customVal: "ca. 1,28 Mio. Soldaten" },
    { name: "🇷🇺 Russland", cleanName: "Russland", continent: "Europa", customVal: "ca. 1,15 Mio. Soldaten" },
    { name: "🇵🇰 Pakistan", cleanName: "Pakistan", continent: "Asien", customVal: "ca. 650 Tsd. Soldaten" },
    { name: "🇰🇷 Südkorea", cleanName: "Südkorea", continent: "Asien", customVal: "ca. 550 Tsd. Soldaten" },
    { name: "🇮🇷 Iran", cleanName: "Iran", continent: "Asien", customVal: "ca. 520 Tsd. Soldaten" },
    { name: "🇻🇳 Vietnam", cleanName: "Vietnam", continent: "Asien", customVal: "ca. 470 Tsd. Soldaten" },
    { name: "🇪🇬 Ägypten", cleanName: "Ägypten", continent: "Afrika", customVal: "ca. 450 Tsd. Soldaten" },
    { name: "🇹🇷 Türkei", cleanName: "Türkei", continent: "Europa", customVal: "ca. 355 Tsd. Soldaten" },
    { name: "🇲🇲 Myanmar", cleanName: "Myanmar", continent: "Asien", customVal: "ca. 350 Tsd. Soldaten" },
    { name: "🇨🇴 Kolumbien", cleanName: "Kolumbien", continent: "Südamerika", customVal: "ca. 290 Tsd. Soldaten" },
    { name: "🇹🇼 Taiwan", cleanName: "Taiwan", continent: "Asien", customVal: "ca. 170 Tsd. Soldaten" },
    { name: "🇸🇦 Saudi-Arabien", cleanName: "Saudi-Arabien", continent: "Asien", customVal: "ca. 225 Tsd. Soldaten" }
];

countriesDatabase.top15_rain_high = [
    { name: "🇨🇴 Kolumbien", cleanName: "Kolumbien", continent: "Südamerika", customVal: "3.240 mm / Jahr" },
    { name: "🇸🇹 São Tomé und Príncipe", cleanName: "São Tomé und Príncipe", continent: "Afrika", customVal: "3.200 mm / Jahr" },
    { name: "🇵🇬 Papua-Neuguinea", cleanName: "Papua-Neuguinea", continent: "Ozeanien", customVal: "3.142 mm / Jahr" },
    { name: "ソロモン / Salomonen", cleanName: "Salomonen", continent: "Ozeanien", customVal: "3.028 mm / Jahr" },
    { name: "🇵🇦 Panama", cleanName: "Panama", continent: "Nordamerika", customVal: "2.928 mm / Jahr" },
    { name: "🇨🇷 Costa Rica", cleanName: "Costa Rica", continent: "Nordamerika", customVal: "2.926 mm / Jahr" },
    { name: "🇲🇾 Malaysia", cleanName: "Malaysia", continent: "Asien", customVal: "2.875 mm / Jahr" },
    { name: "🇧🇳 Brunei", cleanName: "Brunei", continent: "Asien", customVal: "2.722 mm / Jahr" },
    { name: "🇮🇩 Indonesien", cleanName: "Indonesien", continent: "Asien", customVal: "2.702 mm / Jahr" },
    { name: "🇧🇩 Bangladesch", cleanName: "Bangladesch", continent: "Asien", customVal: "2.666 mm / Jahr" },
    { name: "🇱🇷 Liberia", cleanName: "Liberia", continent: "Afrika", customVal: "2.585 mm / Jahr" },
    { name: "🇸🇷 Suriname", cleanName: "Suriname", continent: "Südamerika", customVal: "2.545 mm / Jahr" },
    { name: "🇫🇯 Fidschi", cleanName: "Fidschi", continent: "Ozeanien", customVal: "2.596 mm / Jahr" },
    { name: "🇸🇱 Sierra Leone", cleanName: "Sierra Leone", continent: "Afrika", customVal: "2.526 mm / Jahr" },
    { name: "🇬🇾 Guyana", cleanName: "Guyana", continent: "Südamerika", customVal: "2.480 mm / Jahr" }
];

countriesDatabase.top15_elevation_low = [
    { name: "🇲🇻 Malediven", cleanName: "Malediven", continent: "Asien", customVal: "1.5 m Höhe" },
    { name: "🇹🇻 Tuvalu", cleanName: "Tuvalu", continent: "Ozeanien", customVal: "1.8 m Höhe" },
    { name: "🇰🇮 Kiribati", cleanName: "Kiribati", continent: "Ozeanien", customVal: "2 m Höhe" },
    { name: "🇲🇭 Marshallinseln", cleanName: "Marshallinseln", continent: "Ozeanien", customVal: "2 m Höhe" },
    { name: "🇸🇬 Singapur", cleanName: "Singapur", continent: "Asien", customVal: "15 m Höhe" },
    { name: "🇶🇦 Katar", cleanName: "Katar", continent: "Asien", customVal: "28 m Höhe" },
    { name: "🇳🇱 Niederlande", cleanName: "Niederlande", continent: "Europa", customVal: "30 m Höhe" },
    { name: "🇩🇰 Dänemark", cleanName: "Dänemark", continent: "Europa", customVal: "34 m Höhe" },
    { name: "🇬🇲 Gambia", cleanName: "Gambia", continent: "Afrika", customVal: "34 m Höhe" },
    { name: "🇪🇪 Estland", cleanName: "Estland", continent: "Europa", customVal: "61 m Höhe" },
    { name: "🇸🇳 Senegal", cleanName: "Senegal", continent: "Afrika", customVal: "69 m Höhe" },
    { name: "🇬🇼 Guinea-Bissau", cleanName: "Guinea-Bissau", continent: "Afrika", customVal: "70 m Höhe" },
    { name: "🇹🇹 Trinidad und Tobago", cleanName: "Trinidad und Tobago", continent: "Nordamerika", customVal: "83 m Höhe" },
    { name: "🇧🇩 Bangladesch", cleanName: "Bangladesch", continent: "Asien", customVal: "85 m Höhe" },
    { name: "🇱🇻 Lettland", cleanName: "Lettland", continent: "Europa", customVal: "87 m Höhe" }
];

countriesDatabase.top15_elevation_high = [
    { name: "🇧🇹 Bhutan", cleanName: "Bhutan", continent: "Asien", customVal: "3.280 m Höhe" },
    { name: "🇳🇵 Nepal", cleanName: "Nepal", continent: "Asien", customVal: "3.265 m Höhe" },
    { name: "🇹🇯 Tadschikistan", cleanName: "Tadschikistan", continent: "Asien", customVal: "3.186 m Höhe" },
    { name: "🇰🇬 Kirgisistan", cleanName: "Kirgisistan", continent: "Asien", customVal: "2.988 m Höhe" },
    { name: "🇱🇸 Lesotho", cleanName: "Lesotho", continent: "Afrika", customVal: "2.161 m Höhe" },
    { name: "🇦🇫 Afghanistan", cleanName: "Afghanistan", continent: "Asien", customVal: "1.884 m Höhe" },
    { name: "🇦🇲 Armenien", cleanName: "Armenien", continent: "Asien", customVal: "1.792 m Höhe" },
    { name: "🇷🇼 Ruanda", cleanName: "Ruanda", continent: "Afrika", customVal: "1.598 m Höhe" },
    { name: "🇨🇭 Schweiz", cleanName: "Schweiz", continent: "Europa", customVal: "1.353 m Höhe" },
    { name: "🇧🇴 Bolivien", cleanName: "Bolivien", continent: "Südamerika", customVal: "1.192 m Höhe" },
    { name: "🇪🇹 Äthiopien", cleanName: "Äthiopien", continent: "Afrika", customVal: "1.330 m Höhe" },
    { name: "Mongolia", cleanName: "Mongolei", continent: "Asien", customVal: "1.528 m Höhe" },
    { name: "🇬🇪 Georgien", cleanName: "Georgien", continent: "Asien", customVal: "1.410 m Höhe" },
    { name: "🇪🇨 Ecuador", cleanName: "Ecuador", continent: "Südamerika", customVal: "1.117 m Höhe" },
    { name: "🇨🇱 Chile", cleanName: "Chile", continent: "Südamerika", customVal: "1.871 m Höhe" }
];

countriesDatabase.top15_timezones = [
    { name: "🇫🇷 Frankreich", cleanName: "Frankreich", continent: "Europa", customVal: "12 Zeitzonen" },
    { name: "🇷🇺 Russland", cleanName: "Russland", continent: "Europa", customVal: "11 Zeitzonen" },
    { name: "🇺🇸 Vereinigte Staaten / USA", cleanName: "Vereinigte Staaten / USA", continent: "Nordamerika", customVal: "11 Zeitzonen" },
    { name: "🇦🇺 Australien", cleanName: "Australien", continent: "Ozeanien", customVal: "9 Zeitzonen" },
    { name: "🇬🇧 Vereinigtes Königreich / Großbritannien", cleanName: "Vereinigtes Königreich / Großbritannien", continent: "Europa", customVal: "9 Zeitzonen" },
    { name: "🇨🇦 Kanada", cleanName: "Kanada", continent: "Nordamerika", customVal: "6 Zeitzonen" },
    { name: "🇩🇰 Dänemark", cleanName: "Dänemark", continent: "Europa", customVal: "5 Zeitzonen" },
    { name: "🇳🇿 Neuseeland", cleanName: "Neuseeland", continent: "Ozeanien", customVal: "5 Zeitzonen" },
    { name: "🇧🇷 Brasilien", cleanName: "Brasilien", continent: "Südamerika", customVal: "4 Zeitzonen" },
    { name: "🇲🇽 Mexiko", cleanName: "Mexiko", continent: "Nordamerika", customVal: "4 Zeitzonen" },
    { name: "🇮🇩 Indonesien", cleanName: "Indonesien", continent: "Asien", customVal: "3 Zeitzonen" },
    { name: "🇰🇮 Kiribati", cleanName: "Kiribati", continent: "Ozeanien", customVal: "3 Zeitzonen" },
    { name: "🇨🇩 Demokratische Republik Kongo", cleanName: "Demokratische Republik Kongo", continent: "Afrika", customVal: "2 Zeitzonen" },
    { name: "🇲🇳 Mongolei", cleanName: "Mongolei", continent: "Asien", customVal: "2 Zeitzonen" },
    { name: "🇵🇬 Papua-Neuguinea", cleanName: "Papua-Neuguinea", continent: "Ozeanien", customVal: "2 Zeitzonen" }
];

countriesDatabase.top15_borders = [
    { name: "🇨🇳 China", cleanName: "China", continent: "Asien", customVal: "14 Nachbarn" },
    { name: "🇷🇺 Russland", cleanName: "Russland", continent: "Europa", customVal: "14 Nachbarn" },
    { name: "🇧🇷 Brasilien", cleanName: "Brasilien", continent: "Südamerika", customVal: "10 Nachbarn" },
    { name: "🇩🇿 Algerien", cleanName: "Algerien", continent: "Afrika", customVal: "7 Nachbarn" },
    { name: "🇨🇩 Demokratische Republik Kongo", cleanName: "Demokratische Republik Kongo", continent: "Afrika", customVal: "9 Nachbarn" },
    { name: "🇩🇪 Deutschland", cleanName: "Deutschland", continent: "Europa", customVal: "9 Nachbarn" },
    { name: "🇹🇷 Türkei", cleanName: "Türkei", continent: "Europa", customVal: "8 Nachbarn" },
    { name: "🇸🇦 Saudi-Arabien", cleanName: "Saudi-Arabien", continent: "Asien", customVal: "7 Nachbarn" },
    { name: "🇮🇳 Indien", cleanName: "Indien", continent: "Asien", customVal: "6 Nachbarn" },
    { name: "🇫🇷 Frankreich", cleanName: "Frankreich", continent: "Europa", customVal: "8 Nachbarn" },
    { name: "🇦🇹 Österreich", cleanName: "Österreich", continent: "Europa", customVal: "8 Nachbarn" },
    { name: "🇿🇲 Sambia", cleanName: "Sambia", continent: "Afrika", customVal: "8 Nachbarn" },
    { name: "🇹🇿 Tansania", cleanName: "Tansania", continent: "Afrika", customVal: "8 Nachbarn" },
    { name: "🇫🇮 Finnland", cleanName: "Finnland", continent: "Europa", customVal: "3 Nachbarn" },
    { name: "🇰🇪 Kenia", cleanName: "Kenia", continent: "Afrika", customVal: "5 Nachbarn" }
].sort((a, b) => parseInt(b.customVal) - parseInt(a.customVal));

countriesDatabase.top15_low_density = [
    { name: "🇲🇳 Mongolei", cleanName: "Mongolei", continent: "Asien", customVal: "2 Einw./km²" },
    { name: "🇳🇦 Namibia", cleanName: "Namibia", continent: "Afrika", customVal: "3 Einw./km²" },
    { name: "🇦🇺 Australien", cleanName: "Australien", continent: "Ozeanien", customVal: "3 Einw./km²" },
    { name: "🇮🇸 Island", cleanName: "Island", continent: "Europa", customVal: "4 Einw./km²" },
    { name: "🇱🇾 Libyen", cleanName: "Libyen", continent: "Afrika", customVal: "4 Einw./km²" },
    { name: "🇬🇾 Guyana", cleanName: "Guyana", continent: "Südamerika", customVal: "4 Einw./km²" },
    { name: "🇸🇷 Suriname", cleanName: "Suriname", continent: "Südamerika", customVal: "4 Einw./km²" },
    { name: "🇨🇦 Kanada", cleanName: "Kanada", continent: "Nordamerika", customVal: "4 Einw./km²" },
    { name: "🇲🇷 Mauretanien", cleanName: "Mauretanien", continent: "Afrika", customVal: "5 Einw./km²" },
    { name: "🇬🇦 Gabun", cleanName: "Gabun", continent: "Afrika", customVal: "10 Einw./km²" },
    { name: "🇧🇼 Botswana", cleanName: "Botswana", continent: "Afrika", customVal: "4 Einw./km²" },
    { name: "🇰🇿 Kasachstan", cleanName: "Kasachstan", continent: "Asien", customVal: "7 Einw./km²" },
    { name: "中央afrikanische Republik", cleanName: "Zentralafrikanische Republik", continent: "Afrika", customVal: "8 Einw./km²" },
    { name: "🇹🇩 Tschad", cleanName: "Tschad", continent: "Afrika", customVal: "10 Einw./km²" },
    { name: "🇧🇴 Bolivien", cleanName: "Bolivien", continent: "Südamerika", customVal: "11 Einw./km²" }
];

countriesDatabase.top15_languages = [
    { name: "🇧🇴 Bolivien", cleanName: "Bolivien", continent: "Südamerika", customVal: "37 Amtssprachen" },
    { name: "🇮🇳 Indien", cleanName: "Indien", continent: "Asien", customVal: "22 Amtssprachen" },
    { name: "🇿🇦 Südafrika", cleanName: "Südafrika", continent: "Afrika", customVal: "12 Amtssprachen" },
    { name: "🇷🇼 Ruanda", cleanName: "Ruanda", continent: "Afrika", customVal: "5 Amtssprachen" },
    { name: "🇸🇬 Singapur", cleanName: "Singapur", continent: "Asien", customVal: "4 Amtssprachen" },
    { name: "🇨🇭 Schweiz", cleanName: "Schweiz", continent: "Europa", customVal: "4 Amtssprachen" },
    { name: "🇻🇺 Vanuatu", cleanName: "Vanuatu", continent: "Ozeanien", customVal: "3 Amtssprachen" },
    { name: "🇧🇦 Bosnien und Herzegowina", cleanName: "Bosnien und Herzegowina", continent: "Europa", customVal: "3 Amtssprachen" },
    { name: "🇧🇪 Belgien", cleanName: "Belgien", continent: "Europa", customVal: "3 Amtssprachen" },
    { name: "🇳🇿 Neuseeland", cleanName: "Neuseeland", continent: "Ozeanien", customVal: "3 Amtssprachen" },
    { name: "🇫🇯 Fidschi", cleanName: "Fidschi", continent: "Ozeanien", customVal: "3 Amtssprachen" },
    { name: "🇵🇬 Papua-Neuguinea", cleanName: "Papua-Neuguinea", continent: "Ozeanien", customVal: "3 Amtssprachen" },
    { name: "🇰🇲 Komoren", cleanName: "Komoren", continent: "Afrika", customVal: "3 Amtssprachen" },
    { name: "🇸🇨 Seychellen", cleanName: "Seychellen", continent: "Afrika", customVal: "3 Amtssprachen" },
    { name: "🇨🇦 Kanada", cleanName: "Kanada", continent: "Nordamerika", customVal: "2 Amtssprachen" }
];

countriesDatabase.top15_islands = [
    { name: "🇸🇪 Schweden", cleanName: "Schweden", continent: "Europa", customVal: "über 260.000 Inseln" },
    { name: "🇳🇴 Norwegen", cleanName: "Norwegen", continent: "Europa", customVal: "über 239.000 Inseln" },
    { name: "🇫🇮 Finnland", cleanName: "Finnland", continent: "Europa", customVal: "über 178.000 Inseln" },
    { name: "🇨🇦 Kanada", cleanName: "Kanada", continent: "Nordamerika", customVal: "über 52.000 Inseln" },
    { name: "🇺🇸 Vereinigte Staaten / USA", cleanName: "Vereinigte Staaten / USA", continent: "Nordamerika", customVal: "über 18.000 Inseln" },
    { name: "🇮🇩 Indonesien", cleanName: "Indonesien", continent: "Asien", customVal: "ca. 17.500 Inseln" },
    { name: "🇯🇵 Japan", cleanName: "Japan", continent: "Asien", customVal: "über 14.000 Inseln" },
    { name: "🇵🇭 Philippinen", cleanName: "Philippinen", continent: "Asien", customVal: "ca. 7.640 Inseln" },
    { name: "🇬🇧 Vereinigtes Königreich / Großbritannien", cleanName: "Vereinigtes Königreich / Großbritannien", continent: "Europa", customVal: "über 6.000 Inseln" },
    { name: "🇦🇺 Australien", cleanName: "Australien", continent: "Ozeanien", customVal: "über 8.000 Inseln" },
    { name: "🇨🇱 Chile", cleanName: "Chile", continent: "Südamerika", customVal: "über 5.000 Inseln" },
    { name: "🇩🇰 Dänemark", cleanName: "Dänemark", continent: "Europa", customVal: "über 400 Inseln" },
    { name: "🇬🇷 Griechenland", cleanName: "Griechenland", continent: "Europa", customVal: "bis zu 6.000 Inseln" },
    { name: "🇮🇹 Italien", cleanName: "Italien", continent: "Europa", customVal: "über 400 Inseln" },
    { name: "🇪🇸 Spanien", cleanName: "Spanien", continent: "Europa", customVal: "über 60 Inseln" }
];

countriesDatabase.top15_coastline = [
    { name: "🇨🇦 Kanada", cleanName: "Kanada", continent: "Nordamerika", customVal: "202.080 km" },
    { name: "🇳🇴 Norwegen", cleanName: "Norwegen", continent: "Europa", customVal: "101.450 km" },
    { name: "🇮🇩 Indonesien", cleanName: "Indonesien", continent: "Asien", customVal: "54.716 km" },
    { name: "🇷🇺 Russland", cleanName: "Russland", continent: "Europa", customVal: "37.653 km" },
    { name: "🇵🇭 Philippinen", cleanName: "Philippinen", continent: "Asien", customVal: "36.289 km" },
    { name: "🇯🇵 Japan", cleanName: "Japan", continent: "Asien", customVal: "29.751 km" },
    { name: "🇦🇺 Australien", cleanName: "Australien", continent: "Ozeanien", customVal: "25.760 km" },
    { name: "🇺🇸 Vereinigte Staaten / USA", cleanName: "Vereinigte Staaten / USA", continent: "Nordamerika", customVal: "19.924 km" },
    { name: "🇳🇿 Neuseeland", cleanName: "Neuseeland", continent: "Ozeanien", customVal: "15.134 km" },
    { name: "🇨🇳 China", cleanName: "China", continent: "Asien", customVal: "14.500 km" },
    { name: "🇬🇧 Vereinigtes Königreich / Großbritannien", cleanName: "Vereinigtes Königreich / Großbritannien", continent: "Europa", customVal: "12.429 km" },
    { name: "🇮🇳 Indien", cleanName: "Indien", continent: "Asien", customVal: "7.000 km" },
    { name: "🇧🇷 Brasilien", cleanName: "Brasilien", continent: "Südamerika", customVal: "7.491 km" },
    { name: "🇲🇽 Mexiko", cleanName: "Mexiko", continent: "Nordamerika", customVal: "9.330 km" },
    { name: "🇮🇹 Italien", cleanName: "Italien", continent: "Europa", customVal: "7.600 km" }
];

countriesDatabase.top15_high_birth = [
    { name: "🇳🇬 Niger", cleanName: "Niger", continent: "Afrika", customVal: "ca. 46 Geburten / 1000 Einw." },
    { name: "🇹🇩 Tschad", cleanName: "Tschad", continent: "Afrika", customVal: "ca. 42 Geburten / 1000 Einw." },
    { name: "🇨🇩 Demokratische Republik Kongo", cleanName: "Demokratische Republik Kongo", continent: "Afrika", customVal: "ca. 41 Geburten / 1000 Einw." },
    { name: "🇸🇴 Somalia", cleanName: "Somalia", continent: "Afrika", customVal: "ca. 40 Geburten / 1000 Einw." },
    { name: "🇨🇫 Zentralafrikanische Republik", cleanName: "Zentralafrikanische Republik", continent: "Afrika", customVal: "ca. 39 Geburten / 1000 Einw." },
    { name: "🇲🇱 Mali", cleanName: "Mali", continent: "Afrika", customVal: "ca. 39 Geburten / 1000 Einw." },
    { name: "🇦🇴 Angola", cleanName: "Angola", continent: "Afrika", customVal: "ca. 39 Geburten / 1000 Einw." },
    { name: "🇧🇮 Burundi", cleanName: "Burundi", continent: "Afrika", customVal: "ca. 37 Geburten / 1000 Einw." },
    { name: "🇳🇬 Nigeria", cleanName: "Nigeria", continent: "Afrika", customVal: "ca. 36 Geburten / 1000 Einw." },
    { name: "🇲🇼 Malawi", cleanName: "Malawi", continent: "Afrika", customVal: "ca. 34 Geburten / 1000 Einw." },
    { name: "🇧🇫 Burkina Faso", cleanName: "Burkina Faso", continent: "Afrika", customVal: "ca. 34 Geburten / 1000 Einw." },
    { name: "🇸🇸 Südsudan", cleanName: "Südsudan", continent: "Afrika", customVal: "ca. 34 Geburten / 1000 Einw." },
    { name: "🇲🇿 Mosambik", cleanName: "Mosambik", continent: "Afrika", customVal: "ca. 34 Geburten / 1000 Einw." },
    { name: "🇧🇯 Benin", cleanName: "Benin", continent: "Afrika", customVal: "ca. 33 Geburten / 1000 Einw." },
    { name: "🇬🇼 Guinea-Bissau", cleanName: "Guinea-Bissau", continent: "Afrika", customVal: "ca. 32 Geburten / 1000 Einw." }
];

countriesDatabase.top15_low_birth = [
    { name: "🇹🇼 Taiwan", cleanName: "Taiwan", continent: "Asien", customVal: "ca. 6 Geburten / 1000 Einw." },
    { name: "🇰🇷 Südkorea", cleanName: "Südkorea", continent: "Asien", customVal: "ca. 7 Geburten / 1000 Einw." },
    { name: "🇭🇰 Hongkong", cleanName: "Hongkong", continent: "Asien", customVal: "ca. 7 Geburten / 1000 Einw." },
    { name: "🇺🇦 Ukraine", cleanName: "Ukraine", continent: "Europa", customVal: "ca. 7 Geburten / 1000 Einw." },
    { name: "🇪🇸 Spanien", cleanName: "Spanien", continent: "Europa", customVal: "ca. 7 Geburten / 1000 Einw." },
    { name: "🇮🇹 Italien", cleanName: "Italien", continent: "Europa", customVal: "ca. 7 Geburten / 1000 Einw." },
    { name: "🇵🇷 Puerto Rico", cleanName: "Puerto Rico", continent: "Nordamerika", customVal: "ca. 7 Geburten / 1000 Einw." },
    { name: "🇸🇲 San Marino", cleanName: "San Marino", continent: "Europa", customVal: "ca. 7 Geburten / 1000 Einw." },
    { name: "🇲🇹 Malta", cleanName: "Malta", continent: "Europa", customVal: "ca. 8 Geburten / 1000 Einw." },
    { name: "🇬🇷 Griechenland", cleanName: "Griechenland", continent: "Europa", customVal: "ca. 8 Geburten / 1000 Einw." },
    { name: "🇯🇵 Japan", cleanName: "Japan", continent: "Asien", customVal: "ca. 7 Geburten / 1000 Einw." },
    { name: "🇵🇹 Portugal", cleanName: "Portugal", continent: "Europa", pop: "10,4 Mio. Einw.", customVal: "ca. 8 Geburten / 1000 Einw." },
    { name: "🇨🇳 China", cleanName: "China", continent: "Asien", customVal: "ca. 8 Geburten / 1000 Einw." },
    { name: "🇸🇬 Singapur", cleanName: "Singapur", continent: "Asien", customVal: "ca. 9 Geburten / 1000 Einw." },
    { name: "🇧🇦 Bosnien und Herzegowina", cleanName: "Bosnien und Herzegowina", continent: "Europa", customVal: "ca. 8 Geburten / 1000 Einw." }
];

// Filterzuordnungen für die restlichen Standards
countriesDatabase.europe_countries = countriesDatabase.all_countries.filter(c => c.continent === 'Europa');
countriesDatabase.ozeanien_countries = countriesDatabase.all_countries.filter(c => c.continent === 'Ozeanien');
countriesDatabase.asien_countries = countriesDatabase.all_countries.filter(c => c.continent === 'Asien');
countriesDatabase.afrika_countries = countriesDatabase.all_countries.filter(c => c.continent === 'Afrika');
countriesDatabase.amerika_countries = countriesDatabase.all_countries.filter(c => c.continent === 'Nordamerika' || c.continent === 'Südamerika');

countriesDatabase.population_100m = countriesDatabase.all_countries.filter(c => [
    "Indien", "China", "Vereinigte Staaten / USA", "Indonesien", "Pakistan", 
    "Nigeria", "Brasilien", "Bangladesch", "Russland", "Mexiko", 
    "Japan", "Äthiopien", "Philippinen", "Ägypten", "Vietnam", "Demokratische Republik Kongo"
].includes(c.cleanName));

countriesDatabase.eu_countries = countriesDatabase.all_countries.filter(c => [
    "Deutschland", "Frankreich", "Italien", "Spanien", "Polen", "Rumänien", 
    "Niederlande", "Belgien", "Tschechien", "Griechenland", "Schweden", 
    "Portugal", "Ungarn", "Österreich", "Bulgarien", "Dänemark", "Finnland", 
    "Slowakei", "Irland", "Kroatien", "Litauen", "Slowenien", "Lettland", 
    "Estland", "Zypern", "Luxemburg", "Malta"
].includes(c.cleanName));

countriesDatabase.island_countries = countriesDatabase.all_countries.filter(c => [
    "Island", "Malta", "Bahrain", "Japan", "Malediven", "Philippinen", "Singapur", "Sri Lanka", "Taiwan",
    "Kap Verde", "Komoren", "Madagaskar", "Mauritius", "São Tomé und Príncipe", "Seychellen",
    "Antigua und Barbuda", "Bahamas", "Barbados", "Dominica", "Grenada", 
    "Jamaika", "Kuba", "Saint Kitts und Nevis", "Saint Lucia", 
    "Saint Vincent und die Grenadinen", "Trinidad und Tobago", "Australien", "Fidschi", "Kiribati", "Marshallinseln", "Mikronesien", 
    "Nauru", "Neuseeland", "Palau", "Salomonen", "Samoa", "Tonga", 
    "Tuvalu", "Vanuatu"
].includes(c.cleanName));

countriesDatabase.binnenstaaten = countriesDatabase.all_countries.filter(c => [
    "Afghanistan", "Andorra", "Armenien", "Aserbaidschan", "Äthiopien", "Bhutan",
    "Bolivien", "Botswana", "Burkina Faso", "Burundi", "Eswatini", "Kasachstan",
    "Kirgisistan", "Kosovo", "Laos", "Lesotho", "Liechtenstein", "Luxemburg",
    "Malawi", "Mali", "Moldau", "Mongolei", "Nepal", "Niger", "Nordmazedonien",
    "Österreich", "Paraguay", "Ruanda", "Sambia", "San Marino", "Schweiz",
    "Serbien", "Slowakei", "Südsudan", "Tadschikistan", "Tschad", "Tschechien",
    "Turkmenistan", "Uganda", "Ungarn", "Usbekistan", "Vatikanstadt",
    "Belarus", "Zentralafrikanische Republik"
].includes(c.cleanName));

countriesDatabase.monarchies = countriesDatabase.all_countries.filter(c => [
    "Andorra", "Antigua und Barbuda", "Australien", "Bahamas", "Bahrain", "Belgien",
    "Belize", "Bhutan", "Brunei", "Dänemark", "Eswatini", "Grenada", "Jamaika",
    "Japan", "Jordanien", "Kambodscha", "Kanada", "Katar", "Kuwait",
    "Lesotho", "Liechtenstein", "Luxemburg", "Malaysia", "Marokko", "Monaco",
    "Neuseeland", "Niederlande", "Norwegen", "Oman", "Papua-Neuguinea", "Saudi-Arabien",
    "Schweden", "Spanien", "Saint Kitts und Nevis", "Saint Lucia",
    "Saint Vincent und die Grenadinen", "Salomonen", "Samoa", "Thailand", "Tonga",
    "Tuvalu", "Vatikanstadt", "Vereinigte Arabische Emirate", "Vereinigtes Königreich / Großbritannien"
].includes(c.cleanName));

countriesDatabase.population_1m = countriesDatabase.all_countries.filter(c => [
    "Andorra", "Antigua und Barbuda", "Bahamas", "Bahrain", "Barbados", "Belize",
    "Bhutan", "Brunei", "Dominica", "Fidschi", "Gambia", "Grenada", "Guyana",
    "Island", "Kap Verde", "Komoren", "Kiribati", "Liechtenstein", "Luxemburg",
    "Malediven", "Malta", "Marshallinseln", "Mauritius", "Mikronesien", "Monaco",
    "Montenegro", "Nauru", "Palau", "Saint Kitts und Nevis", "Saint Lucia",
    "Saint Vincent und die Grenadinen", "Samoa", "San Marino", "São Tomé und Príncipe",
    "Seychellen", "Suriname", "Tonga", "Tuvalu", "Vanuatu", "Vatikanstadt"
].includes(c.cleanName));

countriesDatabase.g20_countries = countriesDatabase.all_countries.filter(c => [
    "Argentinien", "Australien", "Brasilien", "China", "Deutschland", "Frankreich",
    "Indien", "Indonesien", "Italien", "Japan", "Kanada", "Mexiko", "Russland",
    "Saudi-Arabien", "Südafrika", "Südkorea", "Türkei", "Vereinigte Staaten",
    "Vereinigtes Königreich / Großbritannien"
].includes(c.cleanName));

countriesDatabase.nato_countries = countriesDatabase.all_countries.filter(c => [
    "Albanien", "Belgien", "Bulgarien", "Dänemark", "Deutschland", "Estland",
    "Finnland", "Frankreich", "Griechenland", "Island", "Italien", "Kanada",
    "Kroatien", "Lettland", "Litauen", "Luxemburg", "Montenegro", "Niederlande",
    "Nordmazedonien", "Norwegen", "Polen", "Portugal", "Rumänien", "Schweden",
    "Slowakei", "Slowenien", "Spanien", "Tschechien", "Türkei", "Ungarn",
    "Vereinigte Staaten / USA", "Vereinigtes Königreich / Großbritannien"
].includes(c.cleanName));

countriesDatabase.euro_countries = countriesDatabase.all_countries.filter(c => [
    "Belgien", "Deutschland", "Estland", "Finnland", "Frankreich", "Griechenland",
    "Irland", "Italien", "Kroatien", "Bulgarien", "Lettland", "Litauen", "Luxemburg",
    "Malta", "Niederlande", "Österreich", "Portugal", "Slowakei", "Slowenien",
    "Spanien", "Zypern"
].includes(c.cleanName));

countriesDatabase.spanish_speaking = countriesDatabase.all_countries.filter(c => [
    "Argentinien", "Bolivien", "Chile", "Costa Rica", "Dominikanische Republik",
    "Ecuador", "El Salvador", "Guatemala", "Honduras", "Kolumbien", "Kuba",
    "Mexiko", "Nicaragua", "Panama", "Paraguay", "Peru", "Spanien", "Uruguay",
    "Venezuela", "Äquatorialguinea"
].includes(c.cleanName));

countriesDatabase.french_speaking = countriesDatabase.all_countries.filter(c => [
    "Belgien", "Benin", "Burkina Faso", "Burundi", "Dschibuti", "Elfenbeinküste",
    "Frankreich", "Gabun", "Guinea", "Haiti", "Kamerun", "Kanada", "Komoren",
    "Demokratische Republik Kongo", "Republik Kongo", "Luxemburg", "Madagaskar",
    "Mali", "Monaco", "Niger", "Ruanda", "Schweiz", "Senegal", "Seychellen",
    "Togo", "Tschad", "Vanuatu", "Zentralafrikanische Republik", "Äquatorialguinea"
].includes(c.cleanName));

countriesDatabase.arabic_speaking = countriesDatabase.all_countries.filter(c => [
    "Ägypten", "Algerien", "Bahrain", "Dschibuti", "Irak", "Jemen", "Jordanien",
    "Katar", "Komoren", "Kuwait", "Libanon", "Libyen", "Marokko", "Mauretanien",
    "Oman", "Palästina", "Saudi-Arabien", "Somalia", "Sudan", "Syrien",
    "Tschad", "Tunesien", "Vereinigte Arabische Emirate"
].includes(c.cleanName));

// Alphabetisch filtern
['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'].forEach(letter => {
    let key = `starting_with_${letter}`;
    countriesDatabase[key] = countriesDatabase.all_countries.filter(c => c.cleanName.toLowerCase().startsWith(letter));
});

let currentGameData = [];
let foundCountries = new Set();
let currentLives = 3;
let livesEnabled = true;
let timerInterval = null;
let secondsRemaining = 900;
let timerUnlimited = false;
let gameActive = false;
let activeSubGameTitle = "";
let currentInfoType = "pop";
let currentSubGameId = ""; // <--- HIER HINZUFÜGEN

window.onload = function() {
    updateSubGames();
};


function updateSubGames() {
    const theme = document.getElementById('select-theme').value;
    const subSelect = document.getElementById('select-subgame');
    subSelect.innerHTML = '';
    
    const list = subGamesData[theme] || [];
    list.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.id;
        opt.textContent = item.name;
        subSelect.appendChild(opt);
    });

    if (list.length > 0) {
        document.getElementById('current-selected-game-name').textContent = list[0].name;
    }
}

// Modal Handling mit Fragezeichen-Erklärungen
function openCategoryModal() {
    document.getElementById('category-modal').classList.remove('hidden');
    document.getElementById('modal-search-input').value = '';
    renderModalCategories('');
    setTimeout(() => document.getElementById('modal-search-input').focus(), 100);
}

function closeCategoryModal() {
    document.getElementById('category-modal').classList.add('hidden');
}

function renderModalCategories(filterText = '') {
    const container = document.getElementById('modal-categories-list');
    container.innerHTML = '';

    const theme = document.getElementById('select-theme').value;
    const list = subGamesData[theme] || [];

    const filtered = list.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase()));

    if (filtered.length === 0) {
        container.innerHTML = `<div class="text-center py-8 text-slate-400 text-sm">Keine passenden Kategorien gefunden.</div>`;
        return;
    }

    const groups = {};
    filtered.forEach(item => {
        const g = item.group || 'Sonstige';
        if (!groups[g]) groups[g] = [];
        groups[g].push(item);
    });

    for (const [groupName, items] of Object.entries(groups)) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'space-y-2';

        let headerHtml = `<h4 class="text-xs font-bold text-pink-400 uppercase tracking-wider px-1">${groupName}</h4>`;
        let gridHtml = `<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">`;

        items.forEach(item => {
            const isSelected = document.getElementById('select-subgame').value === item.id;
            let hasDesc = item.desc ? true : false;
            
            gridHtml += `
                <div class="p-3 rounded-xl border text-xs font-semibold cursor-pointer transition flex items-center justify-between ${isSelected ? 'bg-pink-600/20 border-pink-500 text-pink-200 shadow-sm' : 'bg-slate-900/60 border-white/10 text-slate-200 hover:bg-slate-800 hover:border-white/20'}">
                    <span onclick="selectCategory('${item.id}', '${item.name.replace(/'/g, "\\'")}')" class="whitespace-normal pr-2 flex-1 leading-snug">${item.name}</span>
                    <div class="flex items-center space-x-2 shrink-0 ml-2">
                        ${hasDesc ? `<button type="button" onclick="event.stopPropagation(); showCategoryDesc('${item.name.replace(/'/g, "\\'")}', '${item.desc.replace(/'/g, "\\'")}')" class="w-5 h-5 rounded-full bg-slate-800 hover:bg-pink-600 text-slate-400 hover:text-white flex items-center justify-center text-[10px] border border-white/10 transition" title="Erklärung anzeigen">?</button>` : ''}
                        <span onclick="selectCategory('${item.id}', '${item.name.replace(/'/g, "\\'")}')" class="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[10px]">${item.count}</span>
                    </div>
                </div>
            `;
        });
        gridHtml += `</div>`;

        groupDiv.innerHTML = headerHtml + gridHtml;
        container.appendChild(groupDiv);
    }
}

function showCategoryDesc(title, desc) {
    alert(`ℹ️ ${title}\n\n${desc}`);
}

function filterModalCategories(e) {
    renderModalCategories(e.target.value);
}

function selectCategory(id, name) {
    document.getElementById('select-subgame').value = id;
    document.getElementById('current-selected-game-name').textContent = name;
    closeCategoryModal();
}

function getItemDetail(item) {
    if (item.customVal) return item.customVal;
    if (currentInfoType === 'lang') return item.lang || 'Unbekannt';
    if (currentInfoType === 'capital') return `Hauptstadt: ${item.capital || 'Unbekannt'}`;
    return item.pop || '';
}

function startGame() {
    const theme = document.getElementById('select-theme').value;
    const subGameId = document.getElementById('select-subgame').value;
    const timerMode = document.getElementById('select-timer-mode').value;
    const livesMode = document.getElementById('select-lives-mode').value;
foundCountries.clear();
    const subGameObj = subGamesData[theme].find(s => s.id === subGameId);
    activeSubGameTitle = subGameObj ? subGameObj.name : "Quiz";
  currentInfoType = subGameObj ? subGameObj.infoType : "pop";
  currentSubGameId = subGameId; // <--- HIER HINZUFÜGEN

  currentGameData = JSON.parse(JSON.stringify(countriesDatabase[subGameId] || countriesDatabase.all_countries));

    if (livesMode === '3') {
        livesEnabled = true;
        currentLives = 3;
        document.getElementById('lives-container').style.display = 'flex';
        document.getElementById('lives-display').textContent = currentLives;
    } else {
        livesEnabled = false;
        document.getElementById('lives-container').style.display = 'none';
    }

    if (timerMode === 'unlimited') {
        timerUnlimited = true;
        document.getElementById('game-timer-wrapper').style.display = 'none';
    } else {
        timerUnlimited = false;
        document.getElementById('game-timer-wrapper').style.display = 'flex';
        secondsRemaining = parseInt(timerMode) * 60;
        updateTimerDisplay();
        startTimer();
    }

    document.getElementById('screen-home').classList.add('hidden');
    document.getElementById('screen-end').classList.add('hidden');
    document.getElementById('screen-game').classList.remove('hidden');

    document.getElementById('game-title-text').textContent = activeSubGameTitle;

    renderGameGrid();
    updateScoreDisplay();

    setTimeout(() => {
        document.getElementById('country-input').focus();
    }, 100);

    gameActive = true;
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (!gameActive) return;
        secondsRemaining--;
        updateTimerDisplay();
        if (secondsRemaining <= 0) {
            clearInterval(timerInterval);
            finishGame(false);
        }
    }, 1000);
}

function updateTimerDisplay() {
    if (timerUnlimited) return;
    const m = Math.floor(secondsRemaining / 60);
    const s = secondsRemaining % 60;
    document.getElementById('timer-display').textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
}

function renderGameGrid() {
    const container = document.getElementById('continents-container');
    container.innerHTML = '';

    const grouped = {};
    currentGameData.forEach(item => {
        const groupKey = item.continent || 'Einträge';
        if (!grouped[groupKey]) grouped[groupKey] = [];
        grouped[groupKey].push(item);
    });

    for (const [groupKey, items] of Object.entries(grouped)) {
        const card = document.createElement('div');
        card.className = 'glass-card rounded-2xl p-5 flex flex-col space-y-3 shadow-xl';
        
        let foundCountInGroup = items.filter(i => foundCountries.has(i.cleanName)).length;

        let headerHtml = `
            <div class="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 class="font-bold text-base text-slate-200 flex items-center space-x-2">
                    <i class="fa-solid fa-earth-americas text-pink-400"></i>
                    <span>${groupKey}</span>
                </h3>
                <span id="count-${sanitizeId(groupKey)}" class="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-white/10">
                    ${foundCountInGroup} / ${items.length}
                </span>
            </div>
        `;

        let listHtml = `<div class="grid grid-cols-1 gap-2 max-h-72 overflow-y-auto pr-1">`;
        items.forEach(c => {
            const isFound = foundCountries.has(c.cleanName);
            const detailText = getItemDetail(c);
            
            // --- NEU: Platzierung ermitteln ---
            const rank = currentGameData.findIndex(item => item.cleanName === c.cleanName) + 1;
            const rankHtml = (currentSubGameId.startsWith('top15') && rank > 0) ? ` <span class="text-emerald-400 font-bold">#${rank}</span>` : '';

            let displayText = isFound ? `${c.name} <span class="text-xs opacity-75 font-normal">(${detailText})</span>${rankHtml}` : '••••••••••••';
            
            listHtml += `
                <div id="item-${sanitizeId(c.cleanName)}" class="px-3 py-2 rounded-xl text-sm font-medium flex items-center justify-between border ${isFound ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300' : 'bg-slate-900/50 border-white/5 text-slate-500'} transition-all">
                    <span>${displayText}</span>
                    ${isFound ? '<i class="fa-solid fa-check text-emerald-400 text-xs"></i>' : '<i class="fa-solid fa-lock text-slate-600 text-xs"></i>'}
                </div>
            `;
        });
        listHtml += `</div>`;

        card.innerHTML = headerHtml + listHtml;
        container.appendChild(card);
    }
}


function handleInput(e) {
    if (!gameActive) return;
    const val = e.target.value.trim().toLowerCase();
    const box = document.getElementById('suggestions-box');

    if (val.length < 3) {
        box.classList.add('hidden');
        box.innerHTML = '';
        return;
    }

    // GEÄNDERT: Suche nun in der WELTWEITEN Datenbank (countriesDatabase.all_countries), 
    // damit immer alle passenden Länder vorgeschlagen werden (z.B. San Marino bei "san").
    const matches = countriesDatabase.all_countries.filter(c => 
        c.cleanName.toLowerCase().includes(val)
    );

    if (matches.length === 0) {
        box.classList.add('hidden');
        box.innerHTML = '';
        return;
    }

    box.innerHTML = '';
    matches.slice(0, 8).forEach((m, idx) => {
        const div = document.createElement('div');
        div.className = `px-4 py-3 text-sm font-medium cursor-pointer hover:bg-pink-600/30 flex items-center justify-between border-b border-white/10 last:border-none ${idx === 0 ? 'bg-pink-600/20 text-pink-200' : 'text-slate-200'}`;
        div.innerHTML = `<span>${m.name}</span> <span class="text-xs text-slate-400">${m.continent}</span>`;
        div.onclick = () => processSelectedCountry(m.cleanName);
        box.appendChild(div);
    });
    box.classList.remove('hidden');
}

function handleKeyDown(e) {
    if (!gameActive) return;
    const box = document.getElementById('suggestions-box');
    const input = document.getElementById('country-input');

    if (e.key === 'Enter') {
        e.preventDefault();
        const typed = input.value.trim().toLowerCase();
        if (typed.length < 3) return;

        // GEÄNDERT: Zuerst in allen Ländern der Welt suchen, um den sauberen Ländernamen zu finden
        const exactMatch = countriesDatabase.all_countries.find(c => 
            c.cleanName.toLowerCase() === typed
        );

        if (exactMatch) {
            processSelectedCountry(exactMatch.cleanName);
        } else {
            const matches = countriesDatabase.all_countries.filter(c => 
                c.cleanName.toLowerCase().includes(typed)
            );
            if (matches.length > 0) {
                processSelectedCountry(matches[0].cleanName);
            } else {
                handleMistake();
            }
        }
    }
}

function processSelectedCountry(cleanName) {
    if (!gameActive) return;
    const input = document.getElementById('country-input');
    const box = document.getElementById('suggestions-box');

    input.value = '';
    box.classList.add('hidden');
    box.innerHTML = '';

    // Hier wird geprüft: Ist das eingegebene Land Teil der gesuchten SPIEL-Lösung?
    const isValidForThisGame = currentGameData.some(c => c.cleanName === cleanName);

    if (isValidForThisGame) {
        // Richtiger Treffer für das aktuelle Spiel!
        if (foundCountries.has(cleanName)) return; // Schon gefunden

        foundCountries.add(cleanName);
        updateGameUIAfterCorrect(cleanName);

        input.classList.add('flash-green');
        setTimeout(() => input.classList.remove('flash-green'), 400);

        if (foundCountries.size === currentGameData.length) {
            finishGame(true);
        }
    } else {
        // Das Land existiert zwar (wurde vorgeschlagen), gehört aber NICHT zu den Lösungen dieses Spiels!
        // -> Es zählt als Fehler (Fehlversuch / Leben abziehen).
        handleMistake();
    }
}

function handleMistake() {
    const inputContainer = document.getElementById('input-container');
    const input = document.getElementById('country-input');

    inputContainer.classList.add('animate-shake');
    input.classList.add('flash-red');
    setTimeout(() => {
        inputContainer.classList.remove('animate-shake');
        input.classList.remove('flash-red');
    }, 400);

    input.value = '';
    document.getElementById('suggestions-box').classList.add('hidden');

    if (livesEnabled) {
        currentLives--;
        document.getElementById('lives-display').textContent = currentLives;
        if (currentLives <= 0) {
            finishGame(false);
        }
    }
}

function updateGameUIAfterCorrect(cleanName) {
    updateScoreDisplay();
    
    const itemObj = currentGameData.find(c => c.cleanName === cleanName);
    if (!itemObj) return;

    const elId = `item-${sanitizeId(cleanName)}`;
    const el = document.getElementById(elId);
    if (el) {
        const detailText = getItemDetail(itemObj);
        
        // --- NEU: Platzierung beim Aufdecken ---
        const rank = currentGameData.findIndex(item => item.cleanName === cleanName) + 1;
        const rankHtml = (currentSubGameId.startsWith('top15') && rank > 0) ? ` <span class="text-emerald-400 font-bold">#${rank}</span>` : '';
        
        el.className = 'px-3 py-2 rounded-xl text-sm font-medium flex items-center justify-between border bg-emerald-500/15 border-emerald-500/30 text-emerald-300 transition-all scale-[1.02]';
        el.innerHTML = `<span>${itemObj.name} <span class="text-xs opacity-75 font-normal">(${detailText})</span>${rankHtml}</span> <i class="fa-solid fa-check text-emerald-400 text-xs"></i>`;
        setTimeout(() => el.classList.remove('scale-[1.02]'), 300);
    }

    const grouped = {};
    currentGameData.forEach(i => {
        const groupKey = i.continent || 'Einträge';
        if (!grouped[groupKey]) grouped[groupKey] = [];
        grouped[groupKey].push(i);
    });
    const groupItems = grouped[itemObj.continent || 'Einträge'];
    const foundCount = groupItems.filter(i => foundCountries.has(i.cleanName)).length;
    const counterEl = document.getElementById(`count-${sanitizeId(itemObj.continent || 'Einträge')}`);
    if (counterEl) {
        counterEl.textContent = `${foundCount} / ${groupItems.length}`;
    }
}
function updateScoreDisplay() {
    document.getElementById('score-display').textContent = `${foundCountries.size} / ${currentGameData.length}`;
    document.getElementById('current-match-count').textContent = `${foundCountries.size} von ${currentGameData.length} gefunden`;
}

function sanitizeId(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '_');
}

function endGame() {
    if (!gameActive) return;
    finishGame(false);
}

function finishGame(isWin) {
    gameActive = false;
    if (timerInterval) clearInterval(timerInterval);

    document.getElementById('screen-game').classList.add('hidden');
    document.getElementById('screen-end').classList.remove('hidden');

    const total = currentGameData.length;
    const found = foundCountries.size;
    const percent = Math.round((found / total) * 100);

    document.getElementById('end-score-val').textContent = `${found} / ${total}`;
    document.getElementById('end-percent-val').textContent = `${percent}%`;

    let timeTakenStr = "Unendlich";
    if (!timerUnlimited) {
        const totalSecs = parseInt(document.getElementById('select-timer-mode').value) * 60;
        const elapsed = totalSecs - secondsRemaining;
        const m = Math.floor(elapsed / 60);
        const s = elapsed % 60;
        timeTakenStr = `${m}m ${s}s`;
    }
    document.getElementById('end-time-val').textContent = timeTakenStr;

    const badge = document.getElementById('end-badge');
    const statusText = document.getElementById('end-status-text');

    if (isWin) {
        badge.className = "inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-sm font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
        statusText.textContent = "Perfekt! Alles gefunden!";
    } else if (livesEnabled && currentLives <= 0) {
        badge.className = "inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-sm font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30";
        statusText.textContent = "Keine Leben mehr übrig!";
    } else {
        badge.className = "inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-sm font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30";
        statusText.textContent = "Spiel beendet";
    }

    renderEndBreakdown();
}

function renderEndBreakdown() {
    const container = document.getElementById('end-breakdown-container');
    container.innerHTML = '';

    const grouped = {};
    currentGameData.forEach(item => {
        const groupKey = item.continent || 'Einträge';
        if (!grouped[groupKey]) grouped[groupKey] = [];
        grouped[groupKey].push(item);
    });

    for (const [groupKey, items] of Object.entries(grouped)) {
        const card = document.createElement('div');
        card.className = 'glass-card rounded-2xl p-6 shadow-xl space-y-3';
        
        let foundInGroup = items.filter(i => foundCountries.has(i.cleanName)).length;

        let headerHtml = `
            <div class="flex items-center justify-between border-b border-white/10 pb-3">
                <h4 class="font-bold text-slate-200 flex items-center space-x-2">
                    <i class="fa-solid fa-earth-americas text-pink-400"></i>
                    <span>${groupKey}</span>
                </h4>
                <span class="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-white/10">
                    ${foundInGroup} / ${items.length}
                </span>
            </div>
        `;

        let listHtml = `<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-1">`;
        items.forEach(c => {
            const isFound = foundCountries.has(c.cleanName);
            const detailText = getItemDetail(c);
            
            // --- NEU: Platzierung in der Endansicht ---
            const rank = currentGameData.findIndex(item => item.cleanName === c.cleanName) + 1;
            const rankHtml = (currentSubGameId.startsWith('top15') && rank > 0) ? ` <span class="text-emerald-400 font-bold">#${rank}</span>` : '';

            listHtml += `
                <div class="px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between border ${isFound ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300' : 'bg-rose-500/15 border-rose-500/30 text-rose-300'}">
                    <span>${c.name} <span class="opacity-75 font-normal">(${detailText})</span>${rankHtml}</span>
                    ${isFound ? '<i class="fa-solid fa-check text-emerald-400"></i>' : '<i class="fa-solid fa-xmark text-rose-400"></i>'}
                </div>
            `;
        });
        listHtml += `</div>`;

        card.innerHTML = headerHtml + listHtml;
        container.appendChild(card);
    }
}
function goToHome() {
    if (timerInterval) clearInterval(timerInterval);
    gameActive = false;
    document.getElementById('screen-game').classList.add('hidden');
    document.getElementById('screen-end').classList.add('hidden');
    document.getElementById('screen-home').classList.remove('hidden');
}
