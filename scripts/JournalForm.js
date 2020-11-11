
import { saveJournalEntry } from "./JournalDataProvider.js"
import { getMoods, useMoods } from "./MoodDataProvider.js"

const contentElement = document.querySelector(".journal")
const eventHub = document.querySelector("#container")

const render = (moodObj) => {
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
                <option value="0">Select a mood...</option>
                ${moodObj.map(
                    mood => {
                        return `<option value="${mood.id}">${mood.label}</option>`
                    }
                ).join("")
            }
            </select>
        </fieldset>
        <input type="button" value="Save entry" class="submit">
    </form>                                             
`
}

export const JournalFormComponent = () => {
    getMoods().then(() => {
        const moods = useMoods()
        render(moods)
    })
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.className === "submit") {
        const date = document.querySelector("#journalDate").value
        const concept = document.querySelector("#title").value
        const entry = document.querySelector("#entry").value
        const moodId = document.querySelector("#mood").value

        const newEntry = {
            date,
            concept,
            entry,
            moodId
        }
        saveJournalEntry(newEntry)
    }
})



