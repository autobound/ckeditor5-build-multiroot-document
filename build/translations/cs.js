(function(d){	const l = d['cs'] = d['cs'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 z %1","Align center":"Zarovnat na střed","Align left":"Zarovnat vlevo","Align right":"Zarovnat vpravo",Aquamarine:"Akvamarínová",Big:"Velké",Black:"Černá","Block quote":"Citace",Blue:"Modrá",Bold:"Tučné","Bulleted List":"Odrážky",Cancel:"Zrušit","Choose heading":"Zvolte nadpis","Decrease indent":"Zmenšit odsazení",Default:"Výchozí","Dim grey":"Tmavě šedá","Document colors":"Barvy dokumentu",Downloadable:"Ke stažení","Dropdown toolbar":"Rozbalovací panel nástrojů","Edit link":"Upravit odkaz","Editor toolbar":"Panel nástrojů editoru","Font Background Color":"Barva pozadí písma","Font Color":"Barva písma","Font Family":"Typ písma","Font Size":"Velikost písma",Green:"Zelená",Grey:"Šedá",Heading:"Nadpis","Heading 1":"Nadpis 1","Heading 2":"Nadpis 2","Heading 3":"Nadpis 3","Heading 4":"Nadpis 4","Heading 5":"Nadpis 5","Heading 6":"Nadpis 6",Huge:"Obrovské","Increase indent":"Zvětšit odsazení",Italic:"Kurzíva",Justify:"Zarovnat do bloku","Light blue":"Světle modrá","Light green":"Světle zelená","Light grey":"Světle šedá",Link:"Odkaz","Link URL":"URL odkazu",Next:"Další","Numbered List":"Číslování","Open in a new tab":"Otevřít v nové kartě","Open link in new tab":"Otevřít odkaz v nové kartě",Orange:"Oranžová",Paragraph:"Odstavec",Previous:"Předchozí",Purple:"Fialová",Red:"Červená",Redo:"Znovu","Remove color":"Odstranit barvu","Rich Text Editor, %0":"Textový editor, %0",Save:"Uložit","Select all":"Vybrat vše","Show more items":"Zobrazit další položky",Small:"Malé",Strikethrough:"Přeškrtnuté","Text alignment":"Zarovnání textu","Text alignment toolbar":"Panel nástrojů zarovnání textu","This link has no URL":"Tento odkaz nemá žádnou URL",Tiny:"Drobné",Turquoise:"Tyrkysová",Underline:"Podtržené",Undo:"Zpět",Unlink:"Odstranit odkaz",White:"Bílá",Yellow:"Žlutá"}	);l.getPluralForm=function(n){return (n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));