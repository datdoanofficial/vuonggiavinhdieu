document.addEventListener("DOMContentLoaded", function () {
  // Attach the event listener to the document or a parent element that exists at page load
  document.addEventListener("click", function (event) {
    // Define the mapping between skills and their corresponding content elements
    const skillsContentMapping = {
      passive: ".content-passive",
      "skills-01": ".content-skills-01",
      "skills-02": ".content-skills-02",
      "skills-03": ".content-skills-03",
    };

    // Check if the clicked element or any of its parents have a relevant class
    for (const skillClass in skillsContentMapping) {
      if (event.target.closest(`.${skillClass}`)) {
        // Logic to remove and add 'active' class remains the same
        document
          .querySelectorAll(".passive, .skills-01, .skills-02, .skills-03")
          .forEach((skill) => {
            skill.classList.remove("active");
          });

        document
          .querySelectorAll(
            ".content-passive, .content-skills-01, .content-skills-02, .content-skills-03"
          )
          .forEach((content) => {
            content.classList.remove("active");
          });

        // Add 'active' class to the clicked element
        const clickedElement = event.target.closest(`.${skillClass}`);
        if (clickedElement) {
          clickedElement.classList.add("active");
        }

        // Select the corresponding content element and add 'active' class
        const contentSelector = skillsContentMapping[skillClass];
        const contentElement = document.querySelector(contentSelector);
        if (contentElement) {
          contentElement.classList.add("active");
        }

        break; // Exit the loop once a match is found and handled
      }
    }
  });
});
