import { moodFilterHTML } from "./MoodFilter.js"
import { getMoods, useMoods } from "./MoodDataProvider.js"


const contentTarget = document.querySelector(".filters")
const eventHub = document.querySelector("#container")

// gets mood info, invokes HTML function and places on dom
export const FilterBar = () => {
    getMoods().then(() => {
        const moods = useMoods()
        const moodsHTML = moodFilterHTML(moods)
        contentTarget.innerHTML = moodsHTML
    })
}

// listens for radio key selection
eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.name === "moodFilter") {
        const [prefix, id] = changeEvent.target.id.split("--")
        const customEvent = new CustomEvent("moodChosen", {
            detail: {
                moodThatWasChosen: id
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})