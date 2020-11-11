/*
 *  Purpose:
 *      To render as many journal entry components as
 *      there are items in the collection exposed by the 
 *      data provider component
 */


import { useJournalEntries, getEntries, useEntries, deleteJournalEntry } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"
import { useMoods } from "./MoodDataProvider.js"


// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entryLog")
const eventHub = document.querySelector("#container")



eventHub.addEventListener("journalStateChanged", () => EntryListFromAPI())

export const EntryListFromAPI = () => {
    getEntries()
    .then(() => {
        const allEntries = useEntries().reverse()
        render(allEntries)
    })
}

const render = (entryArray) => {
    let entryHTMLRep = ""
    for (const entry of entryArray) {
        entryHTMLRep += JournalEntryComponent(entry)
    }
    entryLog.innerHTML = `
        <section class="previousEntry">
        <div>${entryHTMLRep}</div>
        </section>
    `
}

// listens for delete button
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        deleteJournalEntry(id)
    }
})

// listens for mood selection
eventHub.addEventListener("moodChosen", (event) => {
    const allEntries = useEntries()
    
    // if a mood is selected it filters, if all is selected the whole list function runs
    if(event.detail.moodThatWasChosen !== "all") {
        const filteredEntries = allEntries.filter(entryObj => {
            return entryObj.moodId === event.detail.moodThatWasChosen
        })
        render(filteredEntries)
        } else {
            EntryListFromAPI()
        }
})