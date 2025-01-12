async function wait(ms) {
    await new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

// Disable scrolling
function disableScroll() {
    document.body.style.overflow = 'hidden';
}
  
// Enable scrolling
function enableScroll() {
    document.body.style.overflow = 'auto';
}
  

window.addEventListener("resize", hideIntro)

async function showAndPlayIntro(){
    document.getElementById("replay_intro").style.opacity = 0
    document.getElementById("intro_animation").style.display = "flex"
    document.getElementById("temp_intro_bg").style.display = "flex"

    document.getElementById("temp_intro_bg").style.backgroundColor = "var(--theme-white)"

    document.getElementById("intro_animation").style.backgroundColor = "var(--theme-white)"
    
    document.getElementById("intro_last").style.fontSize = "15vmin"
    document.getElementById("intro_first").style.fontSize = "15vmin"

    document.getElementById("intro_first").style.top = "unset"
    document.getElementById("intro_first").style.left = "unset"
    document.getElementById("intro_last").style.top = "unset"
    document.getElementById("intro_last").style.left = "unset"
    document.getElementById("intro_hello").style.top = "unset"
    document.getElementById("intro_hello").style.left = "unset"
    document.getElementById("intro_hand").style.top = "unset"
    document.getElementById("intro_hand").style.left = "unset"
    document.getElementById("intro_im").style.top = "unset"
    document.getElementById("intro_im").style.left = "unset"

    document.getElementById("intro_first").style.position = "unset"
    document.getElementById("intro_last").style.position = "unset"
    document.getElementById("intro_hello").style.position = "unset"
    document.getElementById("intro_hand").style.position = "unset"
    document.getElementById("intro_im").style.position = "unset"

    document.getElementById("intro_hello").style.opacity = 0
    document.getElementById("intro_hand").style.opacity = 0
    document.getElementById("intro_im").style.opacity = 0
    document.getElementById("intro_first").style.opacity = 0
    document.getElementById("intro_last").style.opacity = 0

    playIntroAnimation()
}

function hideIntro(){
    document.getElementById("intro_animation").style.display = "none"
    document.getElementById("temp_intro_bg").style.display = "none"

    document.getElementById("intro_animation").style.backgroundColor = "rgba(0,0,0,0)"
    document.getElementById("temp_intro_bg").style.backgroundColor = "rgba(0,0,0,0)"
}

async function playIntroAnimation(){
    window.scrollTo({top: 0, left: 0})
    disableScroll()
    window.scrollTo({top: 0, left: 0})

    await wait(1000)

    document.getElementById("intro_first").style.top = `${document.getElementById("intro_first").getBoundingClientRect().top}px`
    document.getElementById("intro_first").style.left = `${document.getElementById("intro_first").getBoundingClientRect().left}px`

    document.getElementById("intro_last").style.top = `${document.getElementById("intro_last").getBoundingClientRect().top}px`
    document.getElementById("intro_last").style.left = `${document.getElementById("intro_last").getBoundingClientRect().left}px`

    document.getElementById("intro_hello").style.top = `${document.getElementById("intro_hello").getBoundingClientRect().top}px`
    document.getElementById("intro_hello").style.left = `${document.getElementById("intro_hello").getBoundingClientRect().left}px`

    document.getElementById("intro_hand").style.top = `${document.getElementById("intro_hand").getBoundingClientRect().top}px`
    document.getElementById("intro_hand").style.left = `${document.getElementById("intro_hand").getBoundingClientRect().left}px`

    document.getElementById("intro_im").style.top = `${document.getElementById("intro_im").getBoundingClientRect().top}px`
    document.getElementById("intro_im").style.left = `${document.getElementById("intro_im").getBoundingClientRect().left}px`

    document.getElementById("intro_first").style.position = "absolute"
    document.getElementById("intro_last").style.position = "absolute"
    document.getElementById("intro_hello").style.position = "absolute"
    document.getElementById("intro_hand").style.position = "absolute"
    document.getElementById("intro_im").style.position = "absolute"

    document.getElementById("intro_hello").style.opacity = 1

    await wait(1000)

    document.getElementById("intro_hand").style.opacity = 1

    await wait(2000)

    document.getElementById("intro_im").style.opacity = 1

    await wait(1000)

    document.getElementById("intro_first").style.opacity = 1

    await wait(600)

    document.getElementById("intro_last").style.opacity = 1

    await wait(1000)

    document.getElementById("intro_hello").style.opacity = 0
    document.getElementById("intro_hand").style.opacity = 0
    document.getElementById("intro_im").style.opacity = 0

    await wait(500)

    document.getElementById("intro_first").style.top = `${document.getElementById("first_name").getBoundingClientRect().top}px`
    document.getElementById("intro_first").style.left = `${document.getElementById("first_name").getBoundingClientRect().left}px`
    document.getElementById("intro_first").style.fontSize = "xx-large"

    await wait(1000)

    document.getElementById("temp_intro_bg").style.display = "none"

    document.getElementById("intro_last").style.top = `${document.getElementById("last_name").getBoundingClientRect().top}px`
    document.getElementById("intro_last").style.left = `${document.getElementById("last_name").getBoundingClientRect().left}px`
    document.getElementById("intro_last").style.fontSize = "xx-large"

    await wait(2000)

    document.getElementById("intro_animation").style.backgroundColor = "rgba(0,0,0,0)"

    await wait(2000)

    document.getElementById("intro_animation").style.display = "none"
    document.getElementById("replay_intro").style.opacity = 1

    enableScroll()
}