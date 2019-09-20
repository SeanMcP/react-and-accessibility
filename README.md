# React && Accessibility

**Objective**: Learn the importance of accessible development and some key strategies for making React applications accessible.

**Title**: React && Accessibility - Creating accessible React applications for everyone

**Abstract**: React has developed a reputation for generating inaccessible web applications. We'll dive into the world of accessibility and dispel that myth while learning some practical examples and helpful tools for creating accessible React applications.

**Description**: The goal of this session is to learn the importance of accessible development and some key strategies for making React applications accessible. We'll define accessibility and explore the ethical and legal motivation for creating accessible applications. Digging into the Web Content Accessibility Guidelines (WCAG), we'll look into using some basic techniques to make React applications more perceivable, operable, understandable, and robust. Finally, we'll look at some of the tooling and resources available to help developers create more accessible applications.

**Outline**:

-   [x] Title
-   [x] About Me
-   [x] Overview
-   [x] Objective
    - What is accessibility
    - Why it's necessary
    - Four domains of accessibility
    - Tools and Resources
-   [x] Assumptions
-   [ ] What is accessibility?
    -   [x] Overview
    -   [ ] Assumptions
    -   [ ] Universal design
    -   [x] Disability categories
-   [ ] Why this is necessary
    -   Ethical
    -   Legal
        -   UN
        -   ADA
            -   [https://www.ada.gov/2010ADAstandards_index.htm]
-   [ ] WCAG
    -   [ ] 1.0
    -   [ ] 2.0
    -   [ ] 2.1+
-   [ ] React and accessibility
-   [ ] Perceivable
    -   Color contrast
    -   Mobile and `:hover`
    -   Screen readers
-   [ ] Operable
    -   Element, header hierarchy
    -   Tab navigation and focus
    -   Timed events
-   [ ] Understandable
    -   Meaningful site title
    -   Breadcrumbs / progress indicators
-   [ ] Robust
    -   Cross-browser, -device testing
    -   Valid, semantic HTML
-   [ ] Common tasks
    -   [x] Maintaining structure
        - [x] Semantic HTML
        - [x] Landmarks
        - [x] Headings  
    -   [ ] Managing focus
        - [ ] Use `button` and `a`
        - [ ] Hand focus off to interactive 
        elements
        - [ ] Bring focus back after interactions
        - [ ] Example
    -   [ ] Enforcing color standards
-   [ ] Basic accessibility auditing
    -   [ ] aXe
    -   [ ] Lighthouse
        -   It's possible to write a totally inaccessible site that receives a perfect score [_Building the most inaccessible site possible with a perfect Lighthouse score_ by Manuel Matuzovic](https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/)
    -   [ ] Manual testing
-   [ ] Tools
    -   `react-axe`
    -   `jsx-a11y`
-   [ ] Recommendations
    -   Focus early, often
-   [ ] Resources
    -   React docs
    -   Deque University
    -   WebAIM
