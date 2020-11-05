/*
 *   Journal data provider for Daily Journal application
 *    
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 * 
 */
 
// This is the original data
const eventHub = document.querySelector("#container")


export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
        return sortedByDate
}

let allEntries = []

export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood")
    .then(response => response.json())
    .then(parsedEntries => {
        allEntries = parsedEntries
    })
}

export const useEntries = () => {
    return allEntries.slice()
}

const dispatchStateChangeEvent = () => {
    const journalStateChangedEvent = new CustomEvent("journalStateChanged")
    eventHub.dispatchEvent(journalStateChangedEvent)
}

export const saveJournalEntry = (newJournalEntry) => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}