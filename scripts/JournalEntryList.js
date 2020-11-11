/*
 *  Purpose:
 *      To render as many journal entry components as
 *      there are items in the collection exposed by the 
 *      data provider component
 */


import { useJournalEntries, getEntries, useEntries, deleteJournalEntry } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"


// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entryLog")
const eventHub = document.querySelector("#container")



eventHub.addEventListener("journalStateChanged", () => EntryListFromAPI())

export const EntryListFromAPI = () => {
    getEntries()
    .then(() => {
        const allEntries = useEntries()
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

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        deleteJournalEntry(id)
    }
})