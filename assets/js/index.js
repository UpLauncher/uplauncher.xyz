/*
    ©2023 UpLauncher, Website Main JS.
    Developed by Rai❤

    Don't use this javascript file for you project!!!!
*/

//Page loaded event
document.addEventListener("DOMContentLoaded", () => {
    //VS Code Extension Tab
    const vsceTabContent = document.querySelector("#-panel-vsc-extension");
    //Program Tab
    const programTabContent = document.querySelector("#-panel-program");
    //TabControl
    const tabControl = document.querySelector("md-tabs");

    //Hidden Program Tab
    programTabContent.style.display = "none";

    //Tab Page Changed
    tabControl.addEventListener("change", (event) => {
        //Change Tab
        if /* VS Code Extension Tab */ (event.target.activeTabIndex === 0) {
            //Display VS Code Extension Tab
            vsceTabContent.style.display = "";
            //Hide Program Tab
            programTabContent.style.display = "none";
        } /* Program Tab */ else if (event.target.activeTabIndex === 1) {
            //Display Program Tab
            programTabContent.style.display = "";
            //Hide VS Code Extension Tab
            vsceTabContent.style.display = "none";
        }
    })

    //Feedback Button
    const feedback = document.querySelector("md-fab");
    //Dialog
    const dialog = document.querySelector("md-dialog");
    feedback.addEventListener("click", () => {
        dialog.open = true; 
    })
})


