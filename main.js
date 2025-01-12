function connectExperienceDots(){
    let topBulletBox = document.querySelector(".experience_element_container:first-of-type .experience_position_bullet").getBoundingClientRect()
    let bottomBulletBox = document.querySelector(".experience_element_container:last-of-type .experience_position_bullet").getBoundingClientRect()
    let container = document.getElementById("experience")
    let containerBox = container.getBoundingClientRect()

    let connectionLine = document.getElementById("connection_line")
    if(!connectionLine)
        connectionLine = document.createElement("span")
    connectionLine.classList.add("connection_line")
    connectionLine.id = "connection_line"

    connectionLine.style.top = `${(topBulletBox.top + topBulletBox.bottom)/2 - containerBox.top}px`
    connectionLine.style.height = `${bottomBulletBox.top - topBulletBox.top}px`
    connectionLine.style.left = `${-containerBox.left + (topBulletBox.left + topBulletBox.right)/2
        // (4) px is width of connection line
        - (4)/2
    }px`

    container.appendChild(connectionLine)
}

document.addEventListener("DOMContentLoaded", function(){
    drawExperience()
    generateTags()
    connectExperienceDots()
    hideProjectsFilters()
    const cookies = parseCookies();
    if (cookies.theme) {
        colorTheme = cookies.theme
    } else {
        colorTheme = "auto"
    }
    if(!cookies.playedIntro){
        document.cookie = `playedIntro=true; path=/resume/; SameSite=Lax`
        playIntroAnimation()
    }else{
        hideIntro()
        document.getElementById("replay_intro").style.opacity = 1
        // playIntroAnimation()
    }
    showTheme()
    window.addEventListener("resize", function(){
        document.documentElement.setAttribute('window-type', window.innerWidth < 600 ? "mobile" : "desktop")
        connectExperienceDots()
        resizeProjectsFilters()
    })
    searchProjects()
})

function parseCookies() {
    return document.cookie.split('; ').reduce((acc, cookie) => {
        const [key, value] = cookie.split('=');
        acc[key] = decodeURIComponent(value);
        return acc;
    }, {});
} 

const positions = [
    {
        company: "Grove City Area Meals on Wheels",
        position: "Web Design Intern",
        dates: "Sep 2024 - Dec 2024",
        description: [
            "Desc Line 1",
            "Desc Line 2"
        ]
    },
    {
        company: "Robots & Pencils",
        position: "Student Apps Growth Intern",
        dates: "Jan 2024 - Mar 2024",
        description: [
            "Desc Line 1",
            "Desc Line 2"
        ]
    }
]

function getPosition(pos){
    let description = ``
    pos.description.forEach(element => {
        description += `<div class="experience_element experience_desc">${element}</div>`
    });
    let posHTML = `<div class="experience_element_container">
        <div class="experience_element experience_company">${pos.company}</div>
        <div class="experience_element experience_position">
            <div class="experience_position_bullet"></div>
            <div class="experience_position_name">${pos.position}</div>
        </div>
        <div class="experience_element experience_dates">${pos.dates}</div>
        ${description}
    </div>`

    return posHTML
}

function drawExperience(){
    experienceHTML = ''
    for(let i=0; i<positions.length; i++){
        experienceHTML += getPosition(positions[i])
        if(i < positions.length-1){
            experienceHTML += `<div class="spacing"></div>`
        }
    }

    document.getElementById("experience").innerHTML = experienceHTML
}

function resizeProjectsFilters(){
    let h = document.getElementById("projects_filter_tags").getBoundingClientRect()
    let hi = document.getElementById("projects_filter_tags_inner").getBoundingClientRect()

    // console.log(h.height - hi.height)

    if(h.height != 0 || h.height - hi.height > 1){
        showProjectsFilters()
    }
}

function toggleProjectsFilters(){
    let h = document.getElementById("projects_filter_tags").getBoundingClientRect()

    if(h.height == 0){
        showProjectsFilters()
    }else{
        hideProjectsFilters()
    }
}

function hideProjectsFilters(){
    document.getElementById("projects_filter_tags").style.height = `0px`
}

function showProjectsFilters(){
    document.getElementById("projects_filter_tags").style.height = `${document.getElementById("projects_filter_tags_inner").scrollHeight}px`
}

const tags = [
    {
        section: "Languages",
        tags: [
            "HTML", "JavaScript", "CSS", "SQL", "Java", "Python"
        ]
    },
    {
        section: "Classes",
        tags: [
            "Programming II", "Discrete Math", "Data Structures and Algorithms", "Database Management", "Western Civilization"
        ]
    },
    {
        section: "Tools",
        tags: [
            "Helcim", "Excel"
        ]
    },
]

let tagsChecked = {}

function toggleTagChecked(tagName){
    if(!tagsChecked[tagName])
        tagsChecked[tagName] = true
    else
        tagsChecked[tagName] = false
    document.getElementById(tagName).style.backgroundColor = tagsChecked[tagName] ? "var(--theme-green)" : "var(--theme-lightgray)"
    searchProjects()
}

function generateTagSection(tagObject){
    let tagListHTML = ""

    tagObject.tags.forEach(function(tag){
        tagListHTML += `<div id="${tag}"  onclick="toggleTagChecked('${tag}')">${tag}</div>`
    })

    return `<div class="projects_filter_group">
        <div class="projects_filter_group_title">${tagObject.section}</div>
        <div class="projects_filter_group_items">
            ${tagListHTML}
        </div>
    </div>`
}

function generateTags(){
    tagsHTML = ""
    tags.forEach(function(tagObject){
        tagsHTML += generateTagSection(tagObject)
    })

    document.getElementById("projects_filter_tags_inner").innerHTML = tagsHTML
}

const projects = [
    // gckofc
    {
        projectName: "Grove City Knights of Columbus Website",
        projectDesc: "",
        projectTags: [
            "HTML", "JavaScript", "CSS", "Python"
        ],
        projectBullets: [
            "Created a website for a Grove City charity organization",
            "Created an administrative page where site images and text can be updated by the client without code interaction",
            "Integrated payment through Helcim to allow the organization to collect dues",
        ]
    },
    {
        projectName: "GCAMOW.org",
        projectDesc: "",
        projectTags: [
            "HTML", "JavaScript", "CSS", "Helcim"
        ],
        projectBullets: [
            "Built a user-facing website for a local Meals on Wheels organization using HTML, CSS, and JavaScript",
            "Implemented payment and donations using Helcim"
        ]
        // gcamow.org
    },
    //https://www.rysaiah.com/sort/
    {
        projectName: "Sorting Vizualizer",
        projectDesc: "",
        projectTags: [
            "HTML", "JavaScript", "CSS", "Data Structures and Algorithms"
        ],
        projectBullets: [
            "Implemented common sorting algorithms using a vizualization system to better understand runtime complexity and sorting strategy",
        ]
    },
]

function swap(input, index1, index2){
    let temp = input[index2]
    input[index2] = input[index1]
    input[index1] = temp
}

function copyProjects(){
    let copy = []
    projects.forEach(element => {
        copy.push(element)
    });
    return copy
}

function quickSort(input){
    quickSortHelper(input, 0, input.length-1)
}

function quickSortHelper(input, index1, index2){
    let indexP = Math.floor(index1 + (index2-index1)/2)
    if(index1 >= index2){ return }

    //accurately positions pivot, first, and last
    if(input[index1].projectRelevance < input[indexP].projectRelevance){ swap(input, index1, indexP) }
    if(input[indexP].projectRelevance < input[index2].projectRelevance){ swap(input, indexP, index2) }
    if(input[index1].projectRelevance < input[indexP].projectRelevance){ swap(input, index1, indexP) }

    //move pivot to end
    swap(input, indexP, index2)

    let firstFromLeft = index1;
    let firstFromRight = index2-1;
    while(firstFromRight >= firstFromLeft && firstFromLeft >= 0){
        // console.log(firstFromLeft, firstFromRight)

        while(firstFromLeft <= index2-1 && input[firstFromLeft].projectRelevance >= input[index2].projectRelevance){
            firstFromLeft++
        }
        
        while(firstFromRight >= index1 && input[firstFromRight].projectRelevance <= input[index2].projectRelevance){
            firstFromRight--
        }

        if(firstFromRight <= firstFromLeft || firstFromRight < 0){ break }
        
        swap(input, firstFromLeft, firstFromRight)
    }
    swap(input, firstFromLeft, index2)

    quickSortHelper(input, index1, firstFromLeft-1)
    quickSortHelper(input, firstFromLeft+1, index2)
}

function sortProjects(){
    let checkedTags = []
    for(let key in tagsChecked){
        if(tagsChecked[key]){
            checkedTags.push(key)
        }
    }

    projects.forEach(project => {
        project.projectRelevance = 0
        checkedTags.forEach(tag => {
            if(project.projectTags.includes(tag)){
                project.projectRelevance++
            }
        });
    });
    
    let copy = copyProjects()
    quickSort(copy)
    return copy
    //TODO: implement sorting, make + return copy
}

function searchProjects(){
    let projectsCopy = sortProjects()
    let projectsDocumentFragment = new DocumentFragment()
    projectsCopy.forEach(project => {
        // console.log(project.projectName, project.projectRelevance)
        let toAdd = document.createElement("div")
        toAdd.classList.add("projects_project")

        let title = document.createElement("div")
        title.classList.add("projects_project_title")
        title.textContent = project.projectName

        let bullets = document.createElement("ul")
        project.projectBullets.forEach(bullet => {
            let bli = document.createElement("li")
            bli.textContent = bullet
            bullets.appendChild(bli)
        });

        let projTagsList = document.createElement("div")
        for(let i = 0; i < project.projectTags.length; i++){
            let element = project.projectTags[i]
            let projTag = document.createElement("span")
            projTag.textContent = element + (i==project.projectTags.length - 1 ? "" : ", ")

            if(tagsChecked[element]){
                projTag.style.fontWeight = "600"
                projTag.style.color = "var(--theme-blue)"
            }
            projTagsList.appendChild(projTag)
        }

        toAdd.appendChild(title)
        toAdd.appendChild(bullets)
        toAdd.appendChild(projTagsList)

        projectsDocumentFragment.appendChild(toAdd)
    });
    document.getElementById("projects_display").replaceChildren(projectsDocumentFragment)
}

let colorTheme

function cycleTheme(){
    if(colorTheme == "auto"){
        colorTheme = "dark"
    }else if(colorTheme == "dark"){
        colorTheme = "light"
    }else{
        colorTheme = "auto"
    }

    showTheme()

    document.cookie = `theme=${colorTheme}; path=/resume/; SameSite=Lax`;

    // document.getElementById("color_theme_selector").innerText = colorTheme=="auto" ? "System" : colorTheme
}

function showTheme(){
    if(colorTheme == "auto"){
        document.documentElement.setAttribute('color-theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light")
    }else{
        document.documentElement.setAttribute('color-theme', colorTheme)
    }
    document.documentElement.setAttribute('color-theme-raw', colorTheme)
}

function moonToSun(){
    let box = document.getElementById("color_theme_selector_moon")
    box.classList.remove('animate_sun');

    setTimeout(() => {
        box.classList.add('animate_sun');
    }, 10);
}