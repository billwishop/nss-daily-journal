
import { saveJournalEntry } from "./JournalDataProvider.js"

const contentElement = document.querySelector(".journal")
const eventHub = document.querySelector("#container")

export const JournalFormComponent = () => {
    contentElement.innerHTML = `
    <fieldset class="journal__field">
    <input type="text" name="title" id="title" required="true" placeholder="Concepts Covered">
    </fieldset>
    <form action="">
        <fieldset class="journal__field">
            <label for="journalDate">Date of entry</label>
            <input type="date" name="journalDate" id="journalDate" required="true">
        </fieldset>
        <fieldset class="journal__field">
            <textarea name="" id="entry" cols="30" rows="10" placeholder="Journal Entry"></textarea>
        </fieldset>
        <fieldset class="journal__field">
            <label for="">Mood for the day</label>
            <select name="mood" id="mood">
                <option value="happy">happy</option>
                <option value="sad">sad</option>
                <option value="content">content</option>
                <option value="angry">angry</option>
                <option value="tired">tired</option>
            </select>
        </fieldset>
        <input type="button" value="Submit entry" class="submit">
    </form>                                             
`
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.className === "submit") {
        const date = document.querySelector("#journalDate").value
        const concept = document.querySelector("#title").value
        const entry = document.querySelector("#entry").value
        const mood = document.querySelector("#mood").value

        const newEntry = {
            date,
            concept,
            entry,
            mood
        }
        saveJournalEntry(newEntry)
    }
})



// `
//         <section id="entry--${entry.id}" class="journalEntry">
//             <h3>${entry.concept}</h3>
//             <div>${entry.entry}</div>
//             <div>${entry.date}</div>
//         </section>
//     `
