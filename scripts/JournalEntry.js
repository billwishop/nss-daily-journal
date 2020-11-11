/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 * 
 */

export const JournalEntryComponent = (entry) => {
    return `
        <section class="journalEntry">
            <h3>${entry.concept}</h3>
            <div>${entry.entry}</div>
            <div>${entry.date}</div>
            <button id="deleteEntry--${entry.id}">Delete</button>
        </section>
    `
}
