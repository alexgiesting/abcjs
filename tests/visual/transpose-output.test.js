describe("Transpose Output", function () {
	var abcCooley = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Em\n" +
	"|:D2|EB{c}BA B2 EB|~B2 AB dBAG|\n"

	var abcCooleyExpected_13 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Ebm\n" +
	"|: TODO |\n"

	var abcCooleyExpected_12 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Em\n" +
	"|:D,2|E,B,{C}B,A, B,2 E,B,|~B,2 A,B, DB,A,G,|\n"

	var abcCooleyExpected_11 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Fm\n" +
	"|: TODO |\n"

	var abcCooleyExpected_10 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: F#m\n" +
	"|: TODO |\n"

	var abcCooleyExpected_9 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Gm\n" +
	"|: TODO |\n"

	var abcCooleyExpected_8 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: G#m\n" +
	"|: TODO |\n"

	var abcCooleyExpected_7 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Am\n" +
	"|:G,2|A,E{F}ED E2 A,E|\n"

	var abcCooleyExpected_6 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: A#m\n" +
	"|:A,2|B,F{G}FE F2 B,F|\n"

	var abcCooleyExpected_5 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Bm\n" +
	"|:A,2|B,F{G}FE F2 B,F|\n"

	var abcCooleyExpected_4 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Cm\n" +
	"|:B,2|CG{A}GF G2 CG|\n"

	var abcCooleyExpected_3 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: C#m\n" +
	"|:B,2|CG{A}GF G2 CG|\n"

	var abcCooleyExpected_2 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Dm\n" +
	"|:C2|DA{B}AG A2 DA|\n"

	var abcCooleyExpected_1 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Ebm\n" +
	"|:D2|EB{c}BA B2 EB\n"

	var abcCooleyExpected0 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Em\n" +
	"|:D2|EB{c}BA B2 EB|~B2 AB dBAG|\n"

	var abcCooleyExpected1 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Fm\n" +
	"|:E2|Fc{d}cB c2 Fc|~c2 Bc ecBA|\n"

	var abcCooleyExpected2 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: F#m\n" +
	"|:E2|Fc{d}cB c2 Fc|~c2 Bc ecBA|\n"

	var abcCooleyExpected3 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Gm\n" +
	"|:F2|Gd{e}dc d2 Gd|~d2 cd fdcB|\n"

	var abcCooleyExpected4 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: G#m\n" +
	"|:F2|Gd{e}dc d2 Gd|~d2 cd fdcB|\n"

	var abcCooleyExpected5 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Am\n" +
	"|:G2|Ae{f}ed e2 Ae|~e2 de gedc|\n"

	var abcCooleyExpected6 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Bbm\n" +
	"|:A2|Bf{g}fe f2 Bf|~f2 ef afed|\n"

	var abcCooleyExpected7 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Bm\n" +
	"|:A2|Bf{g}fe f2 Bf|~f2 ef afed|\n"

	var abcCooleyExpected8 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Cm\n" +
	"|:D2|EB{c}BA B2 EB|~B2 AB dBAG|\n"

	var abcCooleyExpected9 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: C#m\n" +
	"|:B2|cg{a}gf g2 cg|~g2 fg bgfe|\n"

	var abcCooleyExpected10 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Dm\n" +
	"|:c2|da{b}ag a2 da|~a2 ga c'agf|\n"

	var abcCooleyExpected11 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Ebm\n" +
	"|:d2|eb{c'}ba c2 eb|~b2 ab d'bag|\n"

	var abcCooleyExpected12 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Em\n" +
	"|:d2|eb{c'}ba b2 eb|~b2 ab d'bag|\n"

	var abcCooleyExpected13 = "T: Cooley's\n" +
	"M: 4/4\n" +
	"L: 1/8\n" +
	"K: Fm\n" +
	"|:e2|fc'{d'}c'b c'2 fc'|~c'2 bc' e'c'ba|\n"

	var abcAll = "T: Transpose Output\n" +
		"K: Eb\n" +
		"V: 1\n" +
		'"Eb"C_D"Eb/C"!marcato!E^F ^^GAB"Ab7b5"z|E__E_E E =E^E^^E E|\n' +
		"V: 2\n" +
		'C,_D,=E,^F, "N.C."G,A,B,"^Coda"c,| z8|\n' +
		"V: 1\n" +
		"c_d_e^f [gbd]__abc'|\n" +
		"V: 2\n" +
		"c'_d'e'^f' g'a'b'Tc''|\n"

	var abcAllExpected = "T: Transpose Output\n" +
		"K: F\n" +
		"V: 1\n" +
		'"F"D_E"F/D"!marcato!F^G ^^ABc"Bb7b5"z|F_F=F F ^F^^F^^G G|\n' +
		"V: 2\n" +
		'D,_E,^F,^G, "N.C."A,B,C"^Coda"D| z8|\n' +
		"V: 1\n" +
		"d_ef^g [eac']__bc'd'|\n" +
		"V: 2\n" +
		"d'_e'f'^g' a'b'c''Td''|\n"

	var abcChords = "T: Transpose Output\n" +
		"K: D\n" +
		'[DEF] [_DE^F] [_E=F_G] |\n'

	var abcChordsExpected = "T: Transpose Output\n" +
		"K: E\n" +
		'[EFG] [_EFG] [=F=G_A] |\n'

	var abcChordSymbols = 'X:1\n' +
		"T: Transpose Output\n" +
		'K:C\n' +
		'"N.C."c|"C"c"C#"c"Dmaj7"c"D#"c|"E"c"F"c"F#"c"G"c|"G#"c"A/F#"c"A#"c"B"c|"Db"c"Eb"c"Gb"c"Ab"c|"Bb"c "C/B"c "C/Bb"c "C/A#"c | "C/A"c "C/Ab"c "C/G#"c "C/G"c ||'

	var abcChordSymbolsExpected = 'X:1\n' +
		"T: Transpose Output\n" +
		'K:D\n' +
		// TODO-PER: the C#, D#, G#, and A# should probably be expressed as flats.
		'"N.C."d|"D"d"D#"d"Emaj7"d"F"d|"F#"d"G"d"G#"d"A"d|"A#"d"B/G#"d"C"d"C#"d|"D#"d"F"d"G#"d"A#"d|"C"d "D/C#"d "D/C"d "D/C"d | "D/B"d "D/A#"d "D/A#"d "D/A"d ||'

	var abcMeasureAccidental = "T: Transpose Output\n" +
		"L: 1/4\n" +
		"K: C\n" +
		'ABcd _A_B_c_d z ABcd =A=B=c=d z ABcd |\n ^A^B^c^d z ABcd ^^A^^B^^c^^d z ABcd __A__B__c__d ABcd |\n'

	var abcMeasureAccidentalExpected = "T: Transpose Output\n" +
		"L: 1/4\n" +
		"K: D\n" +
		'Bcde _B=c_d_e z Bcde =B^c=d=e z Bcde |\n ^B^^c^d^e z Bcde ^^Bd^^d^^e z B^d^^de __B_c__d__e Bcde |\n'

	var abcInline = "T: Transpose Output\n" +
		"K: C\n" +
		"C_DE^F GABc| [K:D] d_e^fg abc'd'|\n" +
		"d_e^fg abc'd'||\n"

	var abcInlineExpected = "T: Transpose Output\n" +
		"K: D\n" +
		"D_EF^G ABcd| [K:E] e=fga bc'd'e'|\n" +
		"e=fga bc'd'e'||\n"

	var abcKeyChange = "T: Transpose Output\n" +
		"K: Eb\n" +
		"EFGA|\n" +
		"K:B\n" +
		"Bcde||\n"

	var abcKeyChangeExpected = "T: Transpose Output\n" +
		"K: F\n" +
		"FGAB|\n" +
		"K:Db\n" +
		"defg||\n"

	var abcMinor = "T: Transpose Output\n" +
		"K: Em\n" +
		"EFGA|Bcde|\n"

	var abcMinorExpected = "T: Transpose Output\n" +
		"K: F#m\n" +
		"FGAB|cdef|\n"

	var abcNone = "T: Transpose Output\n" +
		"K: none\n" +
		"CDEF ^C^D^E^F CDEF|GABc _G_A_B_c GABc|^^C^^D^^E^^F CDEF|__G__A__B__c GABc|\n"

	var abcNoneExpected = "T: Transpose Output\n" +
		"K: none\n" +
		"DEFG ^D^E^F^G DEFG|ABcd _A_B_c_d ABcd|^^D^^E^^F^^G DEFG|__A__B__c__d ABcd|\n"

	var abcDorian = "T: Transpose Output\n" +
		"K: EDor\n" +
		"EFGA|Bcde|\n"

	var abcDorianExpected = "T: Transpose Output\n" +
		"K: F#Dor\n" +
		"FGAB|cdef|\n"

	var abcGrace = "T: Transpose Output\n" +
		"K: G\n" +
		"{A}G{dcB}A|\n"

	var abcGraceExpected = "T: Transpose Output\n" +
		"K: A\n" +
		"{B}A{edc}B|\n"

	var abcBagpipes = "X:1\n" +
	"T:Scotland The Brave\n" +
	"L:1/8\n" +
	"M:4/4\n" +
	"K:Hp\n" +
	"e|{g}A2 {GdGe}A>B {gcd}c{e}A {gcd}ce| {ag}a2{g}a2 {GdG}ae {gcd}c{e}A|\n"

	var abcBagpipesExpected = "X:1\n" +
	"T:Scotland The Brave\n" +
	"L:1/8\n" +
	"M:4/4\n" +
	"K:Hp\n" +
	"e|{g}A2 {GdGe}A>B {gcd}c{e}A {gcd}ce| {ag}a2{g}a2 {GdG}ae {gcd}c{e}A|\n"

	it("output-cooley", function () {
		outputTest(abcCooley, abcCooleyExpected0, 0, "★★ up 0 ★★")
		outputTest(abcCooley, abcCooleyExpected1, 1, "★★ up 1 ★★")
		outputTest(abcCooley, abcCooleyExpected2, 2, "★★ up 2 ★★")
		outputTest(abcCooley, abcCooleyExpected3, 3, "★★ up 3 ★★")
		outputTest(abcCooley, abcCooleyExpected4, 4, "★★ up 4 ★★")
		outputTest(abcCooley, abcCooleyExpected5, 5, "★★ up 5 ★★")
		outputTest(abcCooley, abcCooleyExpected6, 6, "★★ up 6 ★★")
		outputTest(abcCooley, abcCooleyExpected7, 7, "★★ up 7 ★★")
		outputTest(abcCooley, abcCooleyExpected8, 8, "★★ up 8 ★★")
		outputTest(abcCooley, abcCooleyExpected9, 9, "★★ up 9 ★★")
		outputTest(abcCooley, abcCooleyExpected10, 10, "★★ up 10 ★★")
		outputTest(abcCooley, abcCooleyExpected11, 11, "★★ up 11 ★★")
		outputTest(abcCooley, abcCooleyExpected12, 12, "★★ up 12 ★★")
		outputTest(abcCooley, abcCooleyExpected13, 13, "★★ up 13 ★★")
		outputTest(abcCooley, abcCooleyExpected_1, -1, "★★ down -1 ★★")
		outputTest(abcCooley, abcCooleyExpected_2, -2, "★★ down -2 ★★")
		outputTest(abcCooley, abcCooleyExpected_3, -3, "★★ down -3 ★★")
		outputTest(abcCooley, abcCooleyExpected_4, -4, "★★ down -4 ★★")
		outputTest(abcCooley, abcCooleyExpected_5, -5, "★★ down -5 ★★")
		outputTest(abcCooley, abcCooleyExpected_6, -6, "★★ down -6 ★★")
		outputTest(abcCooley, abcCooleyExpected_7, -7, "★★ down -7 ★★")
		outputTest(abcCooley, abcCooleyExpected_8, -8, "★★ down -8 ★★")
		outputTest(abcCooley, abcCooleyExpected_9, -9, "★★ down -9 ★★")
		outputTest(abcCooley, abcCooleyExpected_10, -10, "★★ down -10 ★★")
		outputTest(abcCooley, abcCooleyExpected_11, -11, "★★ down -11 ★★")
		outputTest(abcCooley, abcCooleyExpected_12, -12, "★★ down -12 ★★")
		outputTest(abcCooley, abcCooleyExpected_13, -13, "★★ down -13 ★★")
	})

	it("output-transpose-chords", function () {
		outputTest(abcChords, abcChordsExpected, 2)
	})

	it("output-transpose-chord-symbols", function () {
		outputTest(abcChordSymbols, abcChordSymbolsExpected, 2)
	})

	it("output-measure-accidental", function () {
		outputTest(abcMeasureAccidental, abcMeasureAccidentalExpected, 2)
	})

	it("output-all", function () {
		outputTest(abcAll, abcAllExpected, 2)
	})

	it("output-inline-key", function () {
		outputTest(abcInline, abcInlineExpected, 2)
	})

	it("output-dorian", function () {
		outputTest(abcDorian, abcDorianExpected, 2)
	})

	it("output-minor", function () {
		outputTest(abcMinor, abcMinorExpected, 2)
	})

	it("output-none", function () {
		outputTest(abcNone, abcNoneExpected, 2)
	})

	it("output-grace", function () {
		outputTest(abcGrace, abcGraceExpected, 2)
	})

	it("output-key-change", function () {
		outputTest(abcKeyChange, abcKeyChangeExpected, 2)
	})

	it("output-bagpipes", function () {
		outputTest(abcBagpipes, abcBagpipesExpected, 2)
	})
})

function outputTest(abc, expected, steps, comment) {
	var visualObj = abcjs.renderAbc("paper", abc);
	var output = abcjs.strTranspose(abc, visualObj, steps)
	abcjs.renderAbc("paper", "%%stretchlast\n" + abc + output);
	var message = (comment ? "\n" + comment : '') + "\n" + output.replace(/\n/g, ' ↲ ') + "\n" + expected.replace(/\n/g, ' ↲ ') + "\n"
	chai.assert.equal(output, expected, message)
}
