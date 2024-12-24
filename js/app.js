
const dataLoad = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    displayData(data.posts)
}
dataLoad();

function displayData(data) {
    const usersDetailsLeftBox = document.getElementById('usersDetailsLeftBox')
    usersDetailsLeftBox.innerHTML = '';

    data.forEach((singleData) => {
        const postDiv = document.createElement('div');
        postDiv.classList = 'flex gap-6 border-2 border-indigo-600 rounded-2xl py-6 px-10 hover:bg-indigo-100 hover:border-indigo-300';

        postDiv.innerHTML = `
             <div class="">
                                <img src="${singleData.image}"
                                    class="w-[100px] rounded-xl" alt="">
                            </div>

                            <div class="w-[80%]">
                                <p class="text-gray-700 font-semibold">#${singleData.category} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Author : ${singleData.author.name}</p>
                                <h2 class="text-2xl font-extrabold my-3">${singleData.title}</h2>
                                <p class="text-gray-700 font-semibold">${singleData.description}</p>
                                <div class="border-t border-dashed border-gray-500 my-4"></div>
                                <div class="md:flex justify-between w-full">
                                    <div class="flex gap-7">
                                        <p><i class="fa-regular fa-file-lines pr-1 text-lg"></i> ${singleData.comment_count
            }</p>
                                        <p><i class="fa-regular fa-eye pr-1 text-lg"></i> ${singleData.view_count}</p>
                                        <p><i class="fa-regular fa-clock pr-1 text-lg"></i> ${singleData.posted_time
            } min</p>
                                    </div>
                                    <!-- green messege -->
                                    <p
                                        class="w-8 h-8 rounded-full flex justify-center items-center hover:bg-indigo-400 bg-indigo-500 cursor-pointer text-white md:mt-0 mt-5">
                                        <i class="fa-regular fa-envelope-open text-lg" onclick="addAsRead('${singleData.title}', '${singleData.view_count}')"></i>
                                    </p>
                                </div>

                            </div>`;
        usersDetailsLeftBox.appendChild(postDiv);
    })
}

function addAsRead(title, view_count) {
    console.log(title, view_count)
    const markContainer = document.getElementById('markContainer');
    const markDiv = document.createElement('div');
    markDiv.classList = 'px-3 py-4 bg-white flex justify-between gap-6 items-center text-sm rounded-xl';

    markDiv.innerHTML = `
        <p>${title}</p>
                                    <p class="flex items-center gap-1"><i class="fa-regular fa-eye pr-1 text-lg"></i>
                                       ${view_count}
                                    </p>`;
    markContainer.appendChild(markDiv);
    const totalRead = markContainer.children.length;
    document.getElementById('totalRead').innerText = totalRead;
}

const dataLoad2 = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    displayLatestData(data)
}
dataLoad2();

function displayLatestData(data) {
    const cardBox = document.getElementById('cardBox');

    data.forEach((singleData2) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList = 'card bg-base-100 shadow-xl p-8 border border-gray-300';
        cardDiv.innerHTML = `
             <img src="${singleData2.cover_image}" alt=""
                            class="rounded-lg mb-4">
                        <div class="grid gap-4 text-start">
                            <p class="opacity-70"><i class="fa-regular fa-calendar-days text-xl"></i><span
                                    class="pl-3">${singleData2.author.posted_date
            }</span></p>
                            <h2 class="text-lg font-bold">What will a mars habitat force that
                                impact in our daily life!!!</h2>
                            <p class="opacity-70">Yes, you can run unit tests and view the
                                results directly within the app. </p>
                            <div class="flex gap-4">
                                <img src="${singleData2.profile_image
            }"
                                    alt="" class="w-10 h-10 rounded-full">
                                <div class="">
                                    <h3 class="text-base font-bold">${singleData2.author.name}</h3>
                                    <p class="opacity-70">${singleData2.author.designation}</p>
                                </div>
                            </div>
                        </div>`;
        cardBox.appendChild(cardDiv);
    })
}


function search() {
    dataLoad3()
}
const dataLoad3 = async () => {
    const searchField = document.getElementById('searchField');
    const searchFieldValue = searchField.value;

    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchFieldValue}`);
    const data = await res.json();

    if (searchFieldValue.trim() == '') {
        alert('please enter somthing')
    }
    if (data.posts.length < 1) {
        alert('Data is is not found!!!')
    }
    else {
        displayData(data.posts)
    }

}