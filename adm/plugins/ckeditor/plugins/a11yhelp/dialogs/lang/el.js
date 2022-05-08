/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.plugins.setLang( 'a11yhelp', 'el', {
	title: 'Οδηγίες Προσβασιμότητας',
	contents: 'Περιεχόμενα Βοήθειας. Πατήστε ESC για κλείσιμο.',
	legend: [
		{
		name: 'Γενικά',
		items: [
			{
			name: 'Εργαλειοθήκη Επεξεργαστή',
			legend: 'Πατήστε ${toolbarFocus} για να περιηγηθείτε στην γραμμή εργαλείων. Μετακινηθείτε ανάμεσα στις ομάδες της γραμμής εργαλείων με TAB και SHIFT+TAB. Μετακινηθείτε ανάμεσα στα κουμπιά εργαλείων με το ΔΕΞΙ ή ΑΡΙΣΤΕΡΟ ΒΕΛΑΚΙ. Πατήστε ΔΙΑΣΤΗΜΑ ή ENTER για να ενεργοποιήσετε το ενεργό κουμπί εργαλείου.'
		},

			{
			name: 'Παράθυρο Διαλόγου Επεξεργαστή',
			legend:
				'Inside a dialog, press TAB to navigate to the next dialog element, press SHIFT+TAB to move to the previous dialog element, press ENTER to submit the dialog, press ESC to cancel the dialog. When a dialog has multiple tabs, the tab list can be reached either with ALT+F10 or with TAB as part of the dialog tabbing order. With tab list focused, move to the next and previous tab with RIGHT and LEFT ARROW, respectively.'  // MISSING
		},

			{
			name: 'Αναδυόμενο Μενού Επεξεργαστή',
			legend: 'Πατήστε ${contextMenu} ή APPLICATION KEY για να ανοίξετε το αναδυόμενο μενού. Μετά μετακινηθείτε στην επόμενη επιλογή του μενού με  TAB ή ΚΑΤΩ ΒΕΛΑΚΙ. Μετακινηθείτε στην προηγούμενη επιλογή με SHIFT+TAB ή το ΠΑΝΩ ΒΕΛΑΚΙ. Πατήστε ΔΙΑΣΤΗΜΑ ή ENTER για να επιλέξτε το τρέχων στοιχείο. Ανοίξτε το αναδυόμενο μενού της τρέχουσας επιλογής με ΔΙΑΣΤΗΜΑ ή ENTER ή το ΔΕΞΙ ΒΕΛΑΚΙ. Μεταβείτε πίσω στο αρχικό στοιχείο μενού με το ESC ή το ΑΡΙΣΤΕΡΟ ΒΕΛΑΚΙ. Κλείστε το αναδυόμενο μενού με ESC.'
		},

			{
			name: 'Κουτί Λίστας Επεξεργαστών',
			legend: 'Μέσα σε ένα κουτί λίστας, μετακινηθείτε στο επόμενο στοιχείο με TAB ή ΚΑΤΩ ΒΕΛΑΚΙ. Μετακινηθείτε στο προηγούμενο στοιχείο με SHIFT+TAB ή το ΠΑΝΩ ΒΕΛΑΚΙ. Πατήστε ΔΙΑΣΤΗΜΑ ή ENTER για να επιλέξετε ένα στοιχείο. Πατήστε ESC για να κλείσετε το κουτί της λίστας.'
		},

			{
			name: 'Μπάρα Διαδρομών Στοιχείων Επεξεργαστή',
			legend: 'Πατήστε ${elementsPathFocus} για να περιηγηθείτε στην μπάρα διαδρομών στοιχείων του επεξεργαστή. Μετακινηθείτε στο κουμπί του επόμενου στοιχείου με το TAB ή το ΔΕΞΙ ΒΕΛΑΚΙ. Μετακινηθείτε στο κουμπί του προηγούμενου στοιχείου με το SHIFT+TAB ή το ΑΡΙΣΤΕΡΟ ΒΕΛΑΚΙ. Πατήστε ΔΙΑΣΤΗΜΑ ή ENTER για να επιλέξετε το στοιχείο στον επεξεργαστή.'
		}
		]
	},
		{
		name: 'Εντολές',
		items: [
			{
			name: 'Εντολή αναίρεσης',
			legend: 'Πατήστε ${undo}'
		},
			{
			name: 'Εντολή επανάληψης',
			legend: 'Πατήστε ${redo}'
		},
			{
			name: 'Εντολή έντονης γραφής',
			legend: 'Πατήστε ${bold}'
		},
			{
			name: 'Εντολή πλάγιας γραφής',
			legend: 'Πατήστε ${italic}'
		},
			{
			name: 'Εντολή υπογράμμισης',
			legend: 'Πατήστε ${underline}'
		},
			{
			name: 'Εντολή συνδέσμου',
			legend: 'Πατήστε ${link}'
		},
			{
			name: 'Εντολή Σύμπτηξης Εργαλειοθήκης',
			legend: 'Πατήστε ${toolbarCollapse}'
		},
			{
			name: 'Πρόσβαση στην προηγούμενη εντολή του χώρου εστίασης ',
			legend: 'Πατήστε ${accessPreviousSpace} για να έχετε πρόσβαση στον πιο κοντινό χώρο εστίασης πριν το δρομέα, για παράδειγμα: δύο παρακείμενα στοιχεία ΥΕ. Επαναλάβετε το συνδυασμό πλήκτρων για να φθάσετε στους χώρους μακρινής εστίασης. '
		},
			{
			name: 'Πρόσβαση στην επόμενη εντολή του χώρου εστίασης',
			legend: 'Πατήστε ${accessNextSpace} για να έχετε πρόσβαση στον πιο κοντινό χώρο εστίασης μετά το δρομέα, για παράδειγμα: δύο παρακείμενα στοιχεία ΥΕ. Επαναλάβετε το συνδυασμό πλήκτρων για τους χώρους μακρινής εστίασης. '
		},
			{
			name: 'Βοήθεια Προσβασιμότητας',
			legend: 'Πατήστε ${a11yHelp}'
		},
			{
			name: ' Paste as plain text', // MISSING
			legend: 'Press ${pastetext}', // MISSING
			legendEdge: 'Press ${pastetext}, followed by ${paste}' // MISSING
		}
		]
	}
	],
	tab: 'Tab',
	pause: 'Pause',
	capslock: 'Caps Lock',
	escape: 'Escape',
	pageUp: 'Page Up',
	pageDown: 'Page Down',
	leftArrow: 'Αριστερό Βέλος',
	upArrow: 'Πάνω Βέλος',
	rightArrow: 'Δεξί Βέλος',
	downArrow: 'Κάτω Βέλος',
	insert: 'Insert ',
	leftWindowKey: 'Αριστερό Πλήκτρο Windows',
	rightWindowKey: 'Δεξί Πλήκτρο Windows',
	selectKey: 'Πλήκτρο Select',
	numpad0: 'Αριθμητικό πληκτρολόγιο 0',
	numpad1: 'Αριθμητικό Πληκτρολόγιο 1',
	numpad2: 'Αριθμητικό πληκτρολόγιο 2',
	numpad3: 'Αριθμητικό πληκτρολόγιο 3',
	numpad4: 'Αριθμητικό πληκτρολόγιο 4',
	numpad5: 'Αριθμητικό πληκτρολόγιο 5',
	numpad6: 'Αριθμητικό πληκτρολόγιο 6',
	numpad7: 'Αριθμητικό πληκτρολόγιο 7',
	numpad8: 'Αριθμητικό πληκτρολόγιο 8',
	numpad9: 'Αριθμητικό πληκτρολόγιο 9',
	multiply: 'Πολλαπλασιασμός',
	add: 'Πρόσθεση',
	subtract: 'Αφαίρεση',
	decimalPoint: 'Υποδιαστολή',
	divide: 'Διαίρεση',
	f1: 'F1',
	f2: 'F2',
	f3: 'F3',
	f4: 'F4',
	f5: 'F5',
	f6: '6',
	f7: '7',
	f8: 'F8',
	f9: 'F9',
	f10: 'F10',
	f11: 'F11',
	f12: 'F12',
	numLock: 'Num Lock',
	scrollLock: 'Scroll Lock',
	semiColon: 'Ερωτηματικό',
	equalSign: 'Σύμβολο Ισότητας',
	comma: 'Κόμμα',
	dash: 'Παύλα',
	period: 'Τελεία',
	forwardSlash: 'Κάθετος',
	graveAccent: 'Βαρεία',
	openBracket: 'Άνοιγμα Παρένθεσης',
	backSlash: 'Ανάστροφη Κάθετος',
	closeBracket: 'Κλείσιμο Παρένθεσης',
	singleQuote: 'Απόστροφος'
} );
