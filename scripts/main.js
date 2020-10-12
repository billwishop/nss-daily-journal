console.log("Welcome to the main module")

import { useJournalEntries } from "./JournalDataProvider.js"
import { EntryListComponent } from "./JournalEntryList.js"


useJournalEntries()

console.log(useJournalEntries())

EntryListComponent()

console.log(EntryListComponent())