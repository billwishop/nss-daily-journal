console.log("Welcome to the main module")

import { useJournalEntries, getEntries } from "./JournalDataProvider.js"
import { EntryListComponent } from "./JournalEntryList.js"
import { JournalFormComponent } from "./JournalForm.js"


EntryListComponent()

getEntries()

JournalFormComponent()