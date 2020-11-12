// <div id="filter__log">

const contentTarget = document.querySelector("#nav")

// renders display button in left nav bar
export const displayPreviousEntriesButton = () => {
    contentTarget.innerHTML = `
        <button id="display__previous__entries">Display Previous Entries</button>
    `
}

const eventHub = document.querySelector("#container")

// listens for display button. dispatches custom event and changes button
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "display__previous__entries") {
        const customEvent = new CustomEvent("displayPreviousEntries", {
            detail: {}
        })
        eventHub.dispatchEvent(customEvent)
        hidePreviousEntriesButton()
    }
})

const hidePreviousEntriesButton = () => {
    contentTarget.innerHTML = `
        <button id="hide__previous__entries">Hide Previous Entries</button>
    `
}

// listens for hide button. dispatches custom event and changes button
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "hide__previous__entries") {
        const customEvent = new CustomEvent("hidePreviousEntries", {
            detail: {}
        })
        eventHub.dispatchEvent(customEvent)
        displayPreviousEntriesButton()
    }
})

