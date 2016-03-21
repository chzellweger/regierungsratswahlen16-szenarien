/* ======= Model ======= */
var model = {
    currentCat: null,
    currentParty: null,
    cats: [{
        name: 'Steuern und Sparen',
        rotgruen: 'Nach der Finanzmarktkrise und dem Defizit im Jahr 2012 waren grosse Anstrengungen nötig, um den Staatshaushalt zu stabilisieren. Er befindet sich nach wie vor in einem labilen Zustand. Das wichtigste Ziel des rot-grünen Regierungsrats würde deshalb darin bestehen, ein neuerliches Abrutschen zu verhindern. Dabei hätte er in seiner Finanz- und Steuerpolitik unter permanentem Druck des bürgerlichen Kantonsparlaments zu agieren – wie seit 2006. Das Siebnergremium würde alles daran setzen, die Vorstösse aus dem Grossen Rat, die direkt auf Personalabbau und Steuersenkungen zielen, abzuwehren oder ins Leere laufen zu lassen. Der Grund liegt auf der Hand: Finanzieller Spielraum soll nicht unbesehen und gänzlich für Steuersenkungen ausgenützt werden – höchstens sehr dosiert. Es bleibt ein Ziel des Regierungsrats, da und dort doch noch einen rot-grünen Akzent setzen zu können. (db)',
        b_mitte: 'Die Rolle von BDP-Finanzdirektorin Beatrice Simon würde sich bei einer bürgerlichen Mehrheit grundlegend ändern. Bisher hatte sie die Mehrheit gegen sich, neu wäre sie Teil der Mehrheit. Mehr noch: Die Finanzdirektorin sässe quasi mitten auf der Balkenschaukel und könnte durch eigene Gewichtsverlagerungen den Ausschlag geben. Weil Simon über bald sechs Jahre Regierungserfahrung verfügt, würde sie weiterhin umsichtig handeln und vor Hauruckübungen zurückschrecken. Nun aber stünde der Regierungsrat unter Druck zu beweisen, dass die «Wende» mehr ist, als bloss eine Worthülse. Bei Sparmassnahmen in der Kernverwaltung würde Simon bis zu einem gewissen Grad mitmachen; bisher hatte sie beim Sparen noch nicht an ihre persönliche Schmerzgrenze gehen müssen. Vermutlich möchte sie erreichen, dass Barbara Eggers Baudirektion etwas stärker mitsparen muss als bisher. Mit ihr versteht sie sich ja nicht so gut. (db)',
        b_rechts: 'Der neue rechtsbürgerliche Regierungsrat müsste vom ersten Tag an zeigen, dass er alles besser kann. SVP-Präsident Salzmann hatte jüngst an einer Parteiversammlung «versprochen», dass sich mit Pierre-Alain Schnegg und Lars Guggisberg «wirklich etwas ändern wird». Wohl noch vor Ende Jahr würde ein Kombipaket präsentiert, das aus Sparrunde und Steuersenkung besteht. Die Massnahmen zielten besonders auf die Verwaltung. Schnegg forderte bereits als Grossrat, zehn Prozent der Stellen dort seien abzubauen. Im Januar überwies der Grosse Rat eine Motion mit gleicher Zielrichtung. Der Widerstand von Finanzdirektorin Beatrice Simon – sie bezeichnete den Vorstoss als nicht umsetzbar – würde nichts nützen. Es käme auf die anderen bisherigen Bürgerlichen an, Hans-Jürg Käser (FDP) und Christoph Neuhaus (SVP). Um die Sparturbos zu bremsen, müsste mindestens einer von ihnen mithelfen. (db)'
    }, {
        name: 'Bildung',
        rotgruen: 'Die Bildungspolitik des Kantons Bern wird seit fast zehn Jahren vom grünen Erziehungsdirektor Bernhard Pulver geprägt. Er hat in dieser Zeit einige Reformen umgesetzt, die bereits vor Beginn seiner Amtszeit angestossen wurden – etwa die Integration von Schülern mit besonderen Bedürfnissen in die Regelklassen. Nun möchte er «die Schullandschaft beruhigen», wie er immer wieder sagt. Er ermuntert die Schulen, ihre Freiheiten zu nutzen, sich unterschiedlich zu organisieren und innovativ zu sein. Er verteidigt den Lehrplan 21 mit Verve und wird ihn im Sommer 2018 einführen. Seine Impulse stossen im bürgerlichen Parlament gelegentlich auf Widerstand, die Unterstützung im Regierungsrat mit rot-grüner Mehrheit ist ihm aber gewiss. (amo)',
        b_mitte: 'Gelingt es der SVP am 28. Februar einen Sitz dazu zu gewinnen, dürfte dies vorerst nur kleine Auswirkungen auf die Bildungspolitik im Kanton Bern haben. Erziehungsdirektor Pulver versteht es, auch dem politischen Gegner seine Anliegen schmackhaft zu machen. Ausserdem gibt es keine Anzeichen dafür, dass die heutigen bürgerlichen Regierungsräte die Bildungspolitik in eine grundsätzlich andere Richtung lenken möchten, wenn sie könnten. Eine Ausnahme könnten Sparideen bilden: Nach langem Ringen gibt es für die Lehrkräfte seit einigen Jahren wieder einen teilweise verlässlichen Lohnaufstieg. Solche Anliegen werden es in einem bürgerlich dominierten Regierungsrat schwerer haben als bisher. Umgekehrt steigt die Bereitschaft, Sparmassnahmen, wie etwa die Erhöhung der Klassengrössen, umzusetzen. (amo)',
        b_rechts: 'Für einen Regierungsrat mit fünf bürgerlichen Sitzen gilt bezogen auf die Bildungspolitik grundsätzlich dasselbe wie für einen mit vier: Die grossen Reformen sind umgesetzt oder liegen, wie der Lehrplan 21, in der alleinigen Kompetenz der Erziehungsdirektion. Dennoch wird sich eine klare rechtsbürgerliche Mehrheit im Regierungsrat mittelfristig auf die Bildungspolitik auswirken. Im Zusammenspiel mit dem bürgerlichen Parlament könnte eine solche einen grösseren Machtanspruch entwickeln. Sie könnte nicht nur weniger Geld ausgeben, sondern die Schulen auch stärker einschränken wollen. Mehrjahrgangsklassen in Städten, integrativer Unterricht und viele andere Dinge, die heute breit akzeptiert sind, könnten wieder in Frage gestellt werden. (amo)'
    }, {
        name: 'Raumplanung',
        rotgruen: 'Der Regierungsrat hat sich vor zwei Jahren für einen Paradigmenwechsel in der Raumplanung ausgesprochen: Als neues Hauptziel wurde die Siedlungsentwicklung nach innen definiert. Zudem soll die Zersiedlung gebremst und das Kulturland besser geschützt werden. Auslöser dieser Neuausrichtung war aber nicht die rot-grüne Regierungsmehrheit, sondern die vom Volk angenommene Revision des Raumplanungsgesetzes (RPG) auf nationaler Ebene. Bleibt die linke Regierungsmehrheit, wird der eingeschlagene Weg fortgesetzt. Wenn die neuen Regierungsmitglieder ihre Arbeit Mitte Jahr aufnehmen, werden die wichtigsten Pflöcke ohnehin eingeschlagen sein: der neue Richtplan ist schon beschlossen, die Baugesetzrevision wird im Juni vom Grossen Rat zu Ende beraten und im Frühling entscheidet sich, ob die Kulturlandinitiaitve vors Volk kommt – oder ob sie zugunsten des Gegenvorschlags zurückgezogen wird. (ad)',
        b_mitte: 'Unter einer bürgerlichen Regierungsmehrheit veränderte sich die Raumplanungspolitik nicht grundlegend. Aufgrund der Bundesgesetzgebung wird der Kanton Bern nicht darum herum kommen, künftig sorgfältiger mit dem endlichen Gut Boden umzugehen. An der inneren Verdichtung führt kein Weg vorbei. Hinzu kommt, dass die für die Raumplanung zuständige Direktion schon heute in bürgerlicher Hand ist. Es zeichnet sich auch kein Wechsel ab, Christoph Neuhaus (SVP) wird  mindestens bis 2018 für das Dossier zuständig sein. Es ist aber durchaus denkbar, dass es kleinere Justierungen geben wird. So könnten die Bürgerlichen der Wirtschaft mehr Zugeständnisse machen, damit deren Entwicklung durch den Kulturlandschutz nicht allzu stark eingeschränkt wird. Möglich wären auch weitere Lockerungen beim Denkmalschutz, der zuweilen die innere Verdichtung behindert. (ad)',
        b_rechts: 'Aus SVP-Kreisen heisst es, die aktuelle Raumplanungspolitik führe dazu, dass der Kanton Bern in hochverdichtete Städte und Agglomerationen auf der einen sowie naturparkähnliche Räume auf der anderen Seite aufgeteilt werde. Die jetzige Regierung will nämlich die Entwicklung in den urbanen Gebieten und regionalen Zentren konzentrieren. Die SVP hingegen plädiert für eine Wachstum-überall-Strategie: Auch Gemeinden an der Peripherie sollen künftig wachsen können. Es ist aber fraglich, ob die SVP mit drei Regierungsräten in dieser Frage einen Umschwung herbeiführen könnte. Denn die FDP dürfte kaum mitziehen. Auch die Freisinnigen sind der Meinung, der Kanton müsse sich auf seine Stärken konzentrieren. Somit dürfte die Raumplanungspolitik einer rechtsbürgerlichen Regierung in Etwa gleich aussehen wie wenn SVP, FDP und BDP knapp in der Mehrheit wären. (ad)'
    }, {
        name: 'Energie',
        rotgruen: 'Die BKW wird ihr AKW Mühleberg 2019 abstellen, das Verwaltungsgericht lehnt eine höhere Grimselstaumauer ab und der Grosse Rat verbietet das umstrittene Fracking – viele Entscheide in der kantonalen Energiepolitik wurden ausserhalb des Regierungsrats gefällt. An der Urne lehnte das Volk die Vorlage «Bern erneuerbar» ab – wenn auch den Gegenvorschlag nur knapp. Er hätte Bern zum Vorreiter beim Abschied von Öl und Erdgas gemacht. Regierungsrätin Barbara Egger (SP) hat sich aber mit Verve für ein griffiges kantonales Energiegesetz engagiert. Auch wenn zuerst das Parlament und danach das Volk das Gesetz abschwächten – es bleibt fortschrittlich. Doch die Energiepolitik entwickelt sich mit den Mustervorschriften für die Kantone weiter. Bleibt die Regierungsmehrheit rot-grün, wird Egger die Energiewende vorantreiben. Parlament oder Volk behalten aber das letzte Wort. (st)',
        b_mitte: 'Auch in der Energiepolitik wird BDP-Regierungsrätin Beatrice Simon mit einer bürgerlichen Regierungsmehrheit das Zünglein an der Waage sein. Dies ist speziell interessant, weil die BDP sich als bürgerliche Partei zur Energiewende bekennt. Konkret wird es um die Umsetzung der neuen Mustervorschriften für die Energiepolitik der Kantone gehen (abgekürzt Muken). Sie betreffen in erster Linie die Vorgaben für Häuser – ein klassischer Aufgabenbereich der Kantone. Einen Teil der neuen Muken kann der Regierungsrat, gestützt auf das Energiegesetz, selber in Verordnungen umsetzen. Hier wird es direkt darauf ankommen, ob Simon Energiedirektorin Egger unterstützen wird. Beim wichtigsten Teil geht es darum, welche Gesetzesänderungen die Regierung dem Parlament vorschlägt. Wie gross der finanzielle Spielraum für die Energiepolitik künftig sein wird, hängt auch stark von Finanzdirektorin Simon ab. (st)',
        b_rechts: 'In der bernischen Energiepolitik sind viele Entscheide gefallen. Auch wenn die SVP drei Regierungssitze (und die Bürgerlichen fünf) haben sollte, ändert dies nichts daran, dass das AKW Mühleberg 2019 abgeschaltet wird – und auch ein neues AKW wird kein Thema sein. Doch der Regierungsrat würde von mehrheitlich links nach entschieden rechts kippen. Mit dem Umschwung käme die Erwartung, dass die SVP im Regierungsrat ihre Muskeln spielen lässt. Das Kampffeld wäre die Umsetzung der Mustervorschriften für die Kantone (Muken). Und in diesen die Vorschrift, dass zumindest in den sehr schlecht isolierten Altbauten 10 Prozent der Energie eingespart oder erneuerbar produziert werden muss, sobald die alte Öl- oder Gasheizung aussteigt. Bern ist heute in der Energiepolitik in der Spitzengruppe der Kantone – doch künftig könnte Bern zu den Minimalisten-Kantonen abfallen. (st)'
    }, {
        name: 'Verkehr',
        rotgruen: 'Barbara Egger (SP) ist die starke Frau in der rot-grünen Regierung – und wenn die linke Regierungsmehrheit bleibt, wird sie ihre Verkehrspolitik wohl bis zum Ende der laufenden Amtszeit 2018 weiterführen wie bisher. Egger hat Ausbauprojekte des öffentlichen Verkehrs bisher entschlossen vorangetrieben. Um bedrohte Projekte wie den Ausbau des Berner Hauptbahnhofs wieder aufs Gleis zu bringen, war sie auch zu grundsätzlichen Überarbeitungen bereit. Das «Tram Region Bern» scheiterte nicht an ihr, sondern am Nein der zwei beteiligten Vororte (Ostermundigen wird nun erneut abstimmen). Eggers Verkehrspolitik ist aber keineswegs nur rot-grün. So unterstützte sie auch Strassenausbauten vehement. Ob dies weiterhin auch für die Autobahnzubringer Emmental und Oberaargau gilt, wird sich bald zeigen. (st)',
        b_mitte: 'Ein moderater bürgerlicher Wechsel bei den Regierungsrats-Ersatzwahlen hätte, wenn überhaupt, wohl auch nur moderate Auswirkungen auf die Verkehrspolitik der zuständigen SP-Regierungsrätin Barbara Egger. Denn diese setzt bereits heute generell auf einen Ausbau der Infrastruktur zur Deckung der wachsenden Verkehrsnachfrage – im öffentlichen Verkehr und oft auch bei den Strassen. Entscheidend dürfte sein, ob die kantonale Finanzpolitik dies weiterhin erlaubt. In einem Regierungsrat, in dem die BDP-Finanzdirektorin Beatrice Simon zwischen rechten und rot-grünen Regierungsmitgliedern vermittelt, dürfte das Gremium im Zweifel eher davor zurückschrecken, Investitionen in die Infrastruktur durch einen harten Sparkurs zu gefährden. (st)',
        b_rechts: 'Falls sich die zuständige Regierungsrätin Barbara Egger (SP) nach den laufenden Abklärungen weiterhin für die Autobahnzubringer Emmental und Oberaargau aussprechen sollte, wird sie in einem Regierungsrat mit fünf Bürgerlichen problemlos Support finden – Bürgerliche und Wirtschaftsverbände fordern diese teuren Strassen vehement. Die Schlüsselfrage ist aber, wo eine klar rechtsbürgerliche Regierung im Verkehr stattdessen sparen würde. Unter Druck kämen wohl vor allem Projekte, die nicht direkt der wirtschaftlichen Erschliessung dienen – und vielleicht auch der ÖV generell. Allerdings ist die SVP primär eine Landpartei. In ihrer jeweiligen Region wollen SVP-Grossräte weder bei Strassen noch beim ÖV sparen. Für eine SVP-dominierte Regierung wäre die Versuchung vorhanden, auf Kosten der Städte zu sparen – was allerdings eine Zerreissprobe für den Kanton bedeuten würde. (st)'
    }, {
        name: 'Spitalwesen',
        rotgruen: 'Die Gesundheitsdirektion bliebe in der Hand der SP. An den Mehrheiten in der Regierung ändert sich wenig. Im Spitalwesen hat die neue Regierung nur wenig Gestaltungsmöglichkeiten: Mit der vollzogenen Liberalisierung ist der Weg vom Grossen Rat bereits abgesteckt worden. Laufen die Spitalkosten aus dem Ruder, schieben sich Regierung und Parlament die Schuld zu. Der noch unerfahrene Gesundheitsdirektor hat im Grossen Rat vorerst einen schweren Stand. Dies könnte sich bald ändern. Dies, wenn der neue Mann integrativer auftritt als Vorgänger Philippe Perrenoud (SP). Dann könnte es ihm gelingen, Allianzen zu schmieden. Ein linker Gesundheitsdirektor würde sofort zur Zielscheibe des Spitalstandortinitiative-Komitees, das im ländlichen SVP-Milieu verwurzelt ist. Die Regierung würde die Initiative ablehnen. Spitalschliessungen würde sie derweil aber nicht grundsätzlich ausschliessen. (bwg)',
        b_mitte: 'Die SVP würde in einem bürgerliche dominierten Regierungsrat die Gesundheits- und Fürsorgedirektion übernehmen. In der Direktion käme es zu einem Umbruch: Weitere Direktionskader würden kündigen.  An der Spitalpolitik der Regierung änderte sich wenig. Auch die bisherige rot-grüne Regierung stützte den vom Grossen Rat eingeschlagenen liberalen Kurs. Das Klima zwischen dem Gesundheitsdirektor und dem Parlament wäre aber besser als in der letzten Dekade. Regierung, Parlament und die bürgerlichen Parteien müssten nun die volle Verantwortung für ihre Spitalpolitik übernehmen. Bei den Landspitälern sähe sich die bürgerliche Regierung mit wenig liberalen Forderungen aus ländlich-bürgerlichen Kreisen konfrontiert. Trotz des Gegenwinds aus den eigenen Reihen würde sich die Regierung wohl überzeugt gegen die Spitalstandortinitiative engagieren. Auch Spitalschliessungen blieben möglich. (bwg)',
        b_rechts: 'Mit einer rechtsbürgerlichen Mehrheit würde die bisherige Spitalpolitik fortgeführt. Der neue SVP-Gesundheitsdirektor Pierre-Alain Schnegg müsste die eigene Fraktion wohl schon bald enttäuschen. Deren Begehrlichkeiten nach einer weitergehenden Liberalisierung einerseits und stärkerem Schutz für die Spitäler in den Randregionen andererseits liessen sich mit den Realitäten in seiner Direktion schwerlich verbinden. Gleichwohl: Der neuen Regierung und Schnegg fiele es nicht leicht, sich gegen die Begehrlichkeiten aus den ländlichen Gebieten zu wehren. Im Abstimmungskampf würde die Regierung die Position gegen die Spitalstandortinitiative deshalb wenig inbrünstig vertreten. Spitalschliessungen blieben gleichwohl eine Option. (bwg)'
    }, {
        name: 'Sozialhilfe',
        rotgruen: 'Im Kräftemessen mit dem Parlament bliebe der Einfluss einer weiterhin rot-grünen Regierung grundsätzlich bescheiden. Das erste grosse Geschäft wartet schon bald: Vorgänger Philippe Perrenoud (SP) überliess seinem Nachfolger die ins Stocken geratene Revision des Sozialhilfegesetzes. Für den neuen SP-Mann gäbe es wenig zu gewinnen: Arbeitet er konstruktiv mit dem Parlament zusammen, sind Verschärfungen des Sozialhilferegimes unumgänglich. Trotzt er den Vorgaben des Parlaments ebenso störrisch wie Vorgänger Perrenoud, verspielt er im Parlament viel Goodwill. Der SP-Mann entschiede sich für den Mittelweg. In der Folge würden die linken Parteien das Referendum gegen das neue Sozialhilfegesetz ergreifen. (bwg)',
        b_mitte: 'Die fast 70-jährige sozialdemokratische Ära in der Gesundheits- und Fürsorgedirektion ginge in einem bürgerlich dominierten Regierungsrat zu Ende. Auch der neue SP-Mann würde sich auf Druck seiner Partei hin anbieten, das Amt zu übernehmen. Doch das bürgerliche Quartett würde für den neuen SVP-Vertreter votieren. Verschärfungen im Sozialhilfewesen liessen nicht lange auf sich warten. Die seit längerem überwiesenen, von Vorgänger Philippe Perrenoud (SP) nur widerwillig oder teilweise umgesetzten Vorstösse würde nun rasch Gesetz. Vor allem linke Kreise würden empört reagieren. Bei Abstimmungen in der Regierung hätte Beatrice Simon (BDP) die entscheidende Stimme. Die linken Parteien würden das Referendum gegen das neue Sozialhilfegesetz ergreifen. Sie könnten nun ohne Rücksicht auf die Regierung Oppositionspolitik betreiben. (bwg)',
        b_rechts: 'Der Kurs einer rechtsbürgerlichen Regierung wäre ein eindeutiger: Bei der Sozialhilfe eisern sparen. Die Wählerbasis würde dies gefallen. Ansonsten wäre der Aufschrei aber gross. Im kantonalen Sozialdienst würde eine KündigungswelIe folgen. Im grossen Rat würde die Linie der Regierung teilweise auf Widerstand stossen: Den Mitte-Links-Fraktionen würde es aber nur teilweise zu Mehrheiten reichen. Gegen das überarbeitete Sozialhilfegesetz würde das Referendum ergriffen werden. Auch Mittepolitiker würden im Komitee sitzen. Die neue Regierung würde am Finanzausgleich rütteln: Die Gemeinden sollen viel stärker an den Kostenrisiken partizipieren müssen. Dies nicht zur Freude des eher bürgerlichen Gemeindeverbandes. (bwg)'
    }]
};


/* ======= Controller ======= */

var controller = {

    init: function() {
        // set our current cat to the first one in the list
        model.currentCat = model.cats[0];
        model.currentParty = "rotgruen";

        // tell our views to initialize
        catListView.init();
        catView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCurrentParty: function() {
        return model.currentParty;
    },

    getCats: function() {
        return model.cats;
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    setCurrentParty: function(party) {
        model.currentParty = party;
    },

};


/* ======= View ======= */

var catView = {

    init: function() {
        // store pointers to our DOM elements for easy access later
        this.catElem = $('#cat');
        this.catNameElem = $('#cat-name');
        this.partiesElem = $('.parties-select');
        this.textElem = $('#text');

        this.partiesElem.on('click', 'div', function() {
            var thisElem = $(this);
            var party = thisElem.attr('id');
            $('.parties-select').children('div').children('img').removeClass('pure-button-active');
            $(this).children('img').addClass('pure-button-active');

            controller.setCurrentParty(party);
            catView.render();
        });

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // update the DOM elements with values from the current cat
        var currentCat = controller.getCurrentCat();
        var currentParty = controller.getCurrentParty();
        this.catNameElem.text(currentCat.name);
        this.textElem.text(currentCat[currentParty]);
        this.textElem.css('opacity',0).animate({opacity:1}, 1000);
        
        }
};

var catListView = {

    init: function() {
        // store the DOM element for easy access later
        this.catListElem = $('#cat-list');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        var cat, elem, i;
        // get the cats we'll be rendering from the view
        var cats = controller.getCats();

        // empty the cat list
        this.catListElem.html('');

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = $('<li></li>');
            elem.text(cat.name);
            elem.addClass('pure-button');

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.on('click', (function(catCopy) {
                return function() {
                    
                    
                    $('#cat-list').children('li').removeClass('pure-button-active');
                    $(this).addClass('pure-button-active');
                     $('#cat-name').css('opacity',0).animate({opacity:1}, 1000);

                    controller.setCurrentCat(catCopy);


                    catView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.append(elem);
        }
    }
};

// make it go!
controller.init();