
// maps through moods and creates radio button and label for each mood
export const moodFilterHTML = (allMoods) => {
    return `
        <fieldset class="fieldset">
            <legend>Filter Entries by Mood</legend>
            <input id="moodFilter--all" type="radio" name="moodFilter" value="all" checked/>
            <label for="moodFilter--all">all</label>
                ${
                    allMoods.map(
                        (mood) => {
                            return `<input id="moodFilter--${mood.id}" type="radio" name="moodFilter" value="${mood.id}"/>
                            <label for="moodFilter--${mood.label}">${mood.label}</label>
                            `
                        }
                    ).join("")
                }
        </fieldset>  
        `
}

