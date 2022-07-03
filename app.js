let slide_content = document.querySelector('#slide-content')

let signin_form = document.querySelector('#signin-form')

let signin_btn = document.querySelector('#signin-btn')

let darkmode_toggle = document.querySelector('#darkmode-toggle')

let slide_index = 0

slide = () => {
    let slide_items = slide_content.querySelectorAll('img')
    slide_items.forEach(e => e.classList.remove('active'))
    slide_index = slide_index + 1 === slide_items.length ? 0 : slide_index + 1
    slide_items[slide_index].classList.add('active')
}

setInterval(slide, 2000)

// animate input
document.querySelectorAll('.animate-input').forEach(e => {
    let input = e.querySelector('input')
    let button = e.querySelector('button')

    input.onkeyup = () => {
        if (input.value.trim().length > 0) {
            e.classList.add('active')
        } else {
            e.classList.remove('active')
        }

        if (checkSigninInput()) {
            signin_btn.removeAttribute('disabled')
        } else {
            signin_btn.setAttribute('disabled', 'true')
        }
    }

    // show password button
    if (button) {
        button.onclick = () => {
            if (input.getAttribute('type') === 'text') {
                input.setAttribute('type', 'password')
                button.innerHTML = 'Show'
            } else {
                input.setAttribute('type', 'text')
                button.innerHTML = 'Hide'
            }
        }
    }
})

checkSigninInput = () => {
    let inputs = signin_form.querySelectorAll('input')
    return Array.from(inputs).every(input => {
        return input.value.trim().length >= 6
    })
}

// darkmode toggle
darkmode_toggle.onclick = (e) => {
    e.preventDefault()
    let body = document.querySelector('body')
    body.classList.toggle('dark')
    darkmode_toggle.innerHTML = body.classList.contains('dark') ? 'Lightmode' : 'Darkmode'
}

function likeButton() {
    let heart = document.querySelector('.heart');
    let likes = document.querySelector('.likes');
    if (heart.src.match("assets/icons/heart.png")) {
        heart.src = "assets/icons/heart_red.png";
        likes.innerHTML = "3,980 lượt thích";
    } else {
        heart.src = "assets/icons/heart.png";
        likes.innerHTML = "3,979 lượt thích";
    }
}

function likewhiteButton() {
    let heart = document.querySelector('.heartwhite');
    let likes = document.querySelector('.likes');
    if (heart.src.match("assets/icons/heart-white.png")) {
        heart.src = "assets/icons/heart_red.png";
        likes.innerHTML = "3,980 lượt thích";
    } else {
        heart.src = "assets/icons/heart-white.png";
        likes.innerHTML = "3,979 lượt thích";
    }
}

function bookmarkButton() {
    let bookmark = document.querySelector('.bookmark');
    if (bookmark.src.match("assets/icons/bookmark-white.png")) {
        bookmark.src = "assets/icons/bookmark-black.png"
    } else {
        bookmark.src = "assets/icons/bookmark-white.png"
    }
}

function bookmarkWhiteButton() {
    let bookmark = document.querySelector('.bookmarkwhite');
    if (bookmark.src.match("assets/icons/bookmark-full-white.png")) {
        bookmark.src = "assets/icons/bookmark-white-2.png"
    } else {
        bookmark.src = "assets/icons/bookmark-full-white.png"
    }
}

function dotButton() {
    const postmore = document.activeElement.tagName;
    document.getElementById("post__more").innerHTML = postmore;
}