console.log("Welcome to the main module")

import { getEntries } from "./JournalDataProvider.js"
import { EntryListFromAPI } from "./JournalEntryList.js"
import { JournalFormComponent } from "./JournalForm.js"


// EntryListComponent()

getEntries()

JournalFormComponent()

EntryListFromAPI()