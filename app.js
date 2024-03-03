const allPost = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await res.json();
    data.forEach(element => {
        console.log(element);
    });
}

allPost();