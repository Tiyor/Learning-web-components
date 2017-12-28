
window.addEventListener("load", function() {

    // Store tab list values
    var myTabs = document.querySelectorAll(".nav-tabs > li");

    function myTabClicks(tabClickEvent) {

        for (var i = 0; i < myTabs.length; i++) {
            myTabs[i].classList.remove("active");
        }

        var clickedTab = tabClickEvent.currentTarget;
        clickedTab.classList.add("active");
        tabClickEvent.preventDefault();

        var myContentPanes = document.querySelectorAll(".tab_pane");

        for (var j = 0; j < myContentPanes.length; j++) {
            myContentPanes[j].classList.remove("active_pane");
        }

        var anchorReference = tabClickEvent.target;
        var activePaneId = anchorReference.getAttribute("href");
        var activePane = document.querySelector(activePaneId);

        activePane.classList.add("active_pane");
    }

    for (var l = 0; l < myTabs.length; l++) {
        myTabs[l].addEventListener("click", myTabClicks)
    }
});
