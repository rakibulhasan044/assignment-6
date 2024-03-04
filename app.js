const cardContainer = document.getElementById('card-container');
const markReadContainer = document.getElementById('mark-read-container');
const countRead = document.getElementById('count')

let count = 0;
const allPost = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json();
    data.posts.forEach(element => {
        console.log(element)
        count ++;
        const div = document.createElement('div');
       div.innerHTML = `
       <div class="flex gap-3 bg-gray-100 rounded-2xl p-3 mb-4">
            <div class=" h-20 w-24 relative">
                <div id="${count}" class=" h-3 w-3 rounded-full absolute right-0"></div>
                    <img class="rounded-2xl" src="${element.image}" alt="">
                </div>
                <div class="space-y-2">
                    <div class="flex gap-6 font-medium text-gray-500">
                        <p># ${element.category}</p>
                        <p>Author: ${element.author.name}</p>
                    </div>
                    <div class="space-y-2">
                        <h4 id="title-${count}" class="text-[20px] font-semibold">${element.title}</h4>
                        <p class="text-gray-400">${element.description}</p>
                        <div class="border-b-2 border-dotted border-gray-400"></div>
                        <div class="flex justify-between p-2">
                            <div class="flex gap-6">
                                <p>
                                <i class="fa-regular fa-message pr-1"></i> <span>${element.comment_count}</span>
                                </p>
                                <p>
                                <i class="view fa-regular fa-eye pr-1"></i><span id="view-${count}">${element.view_count}</span>
                                </p>
                                <p>
                                <i class="fa-regular fa-clock pr-1"></i><span>${element.posted_time} min</span>
                                </p>
                            </div>
                            <div onclick ="markRead('title-${count}','view-${count}')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <g clip-path="url(#clip0_57_425)">
                                <path d="M13.9998 0C6.26805 0 9.15527e-05 6.26814 9.15527e-05 13.9999C9.15527e-05 21.7314 6.26805 28 13.9998 28C21.7315 28 27.9999 21.7314 27.9999 13.9999C27.9999 6.26814 21.7315 0 13.9998 0ZM14 4.91741L22.2847 10.0835H5.71542L14 4.91741ZM22.3879 18.333H22.3871C22.3871 19.1616 21.7155 19.8331 20.887 19.8331H7.1131C6.28447 19.8331 5.61303 19.1615 5.61303 18.333V10.4122C5.61303 10.3245 5.62199 10.2393 5.63655 10.1556L13.552 15.0914C13.5617 15.0975 13.5721 15.1016 13.5821 15.1072C13.5925 15.113 13.6032 15.1186 13.6138 15.1239C13.6697 15.1527 13.7273 15.176 13.7862 15.1912C13.7923 15.1929 13.7983 15.1936 13.8044 15.195C13.869 15.2102 13.9344 15.2197 13.9998 15.2197H14.0002C14.0007 15.2197 14.0012 15.2197 14.0012 15.2197C14.0665 15.2197 14.1319 15.2105 14.1965 15.195C14.2026 15.1935 14.2086 15.1929 14.2147 15.1912C14.2735 15.176 14.3309 15.1527 14.3871 15.1239C14.3977 15.1186 14.4084 15.113 14.4188 15.1072C14.4287 15.1016 14.4392 15.0975 14.4489 15.0914L22.3644 10.1556C22.3789 10.2393 22.3879 10.3244 22.3879 10.4122V18.333Z" fill="#10B981"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_57_425">
                                <rect width="28" height="28" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       `
        cardContainer.appendChild(div)
        const active = document.getElementById(`${count}`)
        if(element.isActive){
            active.classList.add('bg-green-400')
        } else {
            active.classList.add('bg-red-700')
        }
    });
}


async function markRead(elementTitle,elementView) {
    const title = document.getElementById(elementTitle);
    //const inTitle  = title.innerHTML;
    //console.log(title)
    //console.log(view)
    const view = document.getElementById(elementView);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex md:flex-col lg:flex-row justify-between bg-white p-3 rounded-xl mb-3">
            ${title.innerText}
            <p class="flex gap-1 items-center text-gray-500">
                <i class="fa-regular fa-eye"></i><span>${view.innerText}</span>
            </p>
        </div>
        `
    markReadContainer.appendChild(div);
    const count2 = markReadContainer.childNodes.length;
    console.log(count2)
    countRead.innerText = count2 - 3;
    console.log(view);
    console.log(title);
    
}



const latestPost = async() =>{

}





allPost();