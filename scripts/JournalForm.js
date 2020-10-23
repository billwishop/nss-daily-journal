
const contentElement = document.querySelector(".journal")

export const JournalFormComponent = () => {
    contentElement = `
    <fieldset class="journal__field">
    <input type="text" name="title" id="title" required="true" placeholder="Concepts Covered">
    </fieldset>
    <form action="">
        <fieldset class="journal__field">
            <label for="journalDate">Date of entry</label>
            <input type="date" name="journalDate" id="journalDate" required="true">
        </fieldset>
        <fieldset class="journal__field">
            <textarea name="" id="" cols="30" rows="10" placeholder="Journal Entry"></textarea>
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