console.log("you rock :)")

import { getEntries } from "./JournalDataProvider.js"
import { EntryListFromAPI } from "./JournalEntryList.js"
import { JournalFormComponent } from "./JournalForm.js"
import { useMoods } from "./MoodDataProvider.js"


getEntries()

JournalFormComponent()

EntryListFromAPI()
