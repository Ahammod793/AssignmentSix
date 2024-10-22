// all pets when loading 
const AllAnimalsList = ()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(response => response.json())
    .then(data => allPets(data.pets))
    .catch((error)=>console.log('Problem with calling All Animal APIs', error));
}

const getAnimalsCatagories = () =>{
    // fetch all categories
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
   .then(response => response.json()) // parse the response as JSON
   .then(data =>getAnimals(data.categories))
   .catch((error)=>console.log('Some Problems fatched', error));
}

const showSpinner = (thiss) => {
    thiss.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
        }, 2000); // 2 seconds
    });
}
showSpinner(window);

const scrollDown=()=>{
    document.getElementById('AdoptToFriend').scrollIntoView({behavior:'smooth'})
}

const sort=()=>{
    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    .then(res => res.json())
    .then(data => {
        const petsList = data.pets;
        petsList.sort((a, b) => b.price - a.price);
        allPets(petsList);
    })
}


const adopt=(btnAdopt)=>{
    const adopt = document.getElementById('adopt');
    adopt.innerHTML = `
    <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle ">
        <div class="modal-box">
            <div class="flex items-center justify-center">
                <img src="images/handshaking.png" alt="handshaking" class="w-16 h-16">
            </div>
            <h2 class="text-center font-bold text-3xl">Congrates</h2>
            <p id="counterContainer" class="py-4 text-center font-extrabold text-3xl"></p>
        </div>
    </dialog>
   `;
   const modal = document.getElementById('my_modal_5');
        if (modal) {
            modal.showModal();
        }
    const counterContainer = document.getElementById('counterContainer');
    let value = 3;
    counterContainer.innerHTML = value;
    const counter=setInterval(() =>{
        value--;
        counterContainer.innerHTML= value;
        
        if(value < 1 ){
            clearInterval(counter)
            modal.close();
            btnAdopt.innerText = 'adopted';
            btnAdopt.disabled = true;
        }
    },1000);
    counter();
}

const getAnimals = (AnimalsObjList) => {

    const animalsController = document.getElementById('catagoriesAll');
    AnimalsObjList.forEach(objOfAnimal => {
        const anim = objOfAnimal.category;
        // const animLower = anim.toLowerCase();
        const div= document.createElement('div');
        div.classList = 'flex flex-row gap-3'
        div.innerHTML =`
            <div class="controller border border-cmColor sm:p-4 p-2 md:w-80 sm:w-40 w-20 flex items-center rounded-lg  justify-center 
             cursor-pointer" id="btn-${objOfAnimal.id}" onclick="groupAnimals('btn-${objOfAnimal.id}','${objOfAnimal.category}')">
                <img src=${objOfAnimal.category_icon} alt=${anim} class='h-10 w-13 hidden sm:block '>
                <h2 class="sm:hidden md:block">${anim}</h2>
            </div>
            ` 
        animalsController.appendChild(div);
    });
}

const groupAnimals = (buttonId, category)=>{
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then(res => res.json())
    .then(data => {
        removeOtherVideos()
        const activatedButton = document.getElementById(buttonId);
        activatedButton.classList.add("Active");
        allPets(data.data);
    })
    .catch(err =>  console.log(err));

}

const removeOtherVideos =()=>{
    const controllerButton = document.getElementsByClassName('controller');
    for(let btn of controllerButton){
        btn.classList.remove('Active');
    }
}

const allPets = (pets)=>{
    
    const cardContainer = document.getElementById('mainDiv');
    cardContainer.innerHTML = '';

    if(pets.length === 0){
        cardContainer.classList = 'w-4/5  min-h-[30vh] h-5/12 EmptyMainBodyBG py-28 rounded-xl flex flex-col text-center items-center'
        cardContainer.innerHTML = `
        <svg 
            width="156.750000" height="149.606323" viewBox="0 0 156.75 149.606" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>Created with Pixso.</desc><defs/><path id="Vector" d="M100.18 55.07L100.18 29.15L76.25 1.5L16.07 1.5C8.02 1.5 1.5 7.98 1.5 15.99L1.5 123.59C1.5 131.59 8.02 138.08 16.07 138.08L85.6 138.08C92.93 138.08 99 132.7 100.02 125.69" stroke="#052A75" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linejoin="round" stroke-linecap="round"/> <path id="Vector" d="M24.74 64.87L73.52 64.87" stroke="#FD6050" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linejoin="round" stroke-linecap="round"/><path id="Vector" d="M24.74 104.7L74.7 104.7"  stroke="#F9BA2A" stroke-opacity="1.000000" stroke-width="22.000000" stroke-linejoin="round" />  <path id="Vector" d="M24.74 80.7L64.06 80.7" stroke="#FD6050" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linejoin="round" stroke-linecap="round"/>
            <path id="Vector" d="M24.74 49.05L79.34 49.05" stroke="#FD6050" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linejoin="round"  stroke-linecap="round"/> <path id="Vector" d="M24.74 33.23L56.34 33.23" stroke="#FD6050" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linejoin="round" stroke-linecap="round"/> <path id="Vector" d="M97.69 125.07C78.62 125.07 63.16 109.57 63.16 90.46C63.16 71.34 78.62 55.84 97.69 55.84C116.76 55.84 132.22 71.34 132.22 90.46C132.22 109.57 116.76 125.07 97.69 125.07Z" stroke="#052A75" fill="#80DADE" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linejoin="round"/> <path id="Vector" d="M122.71 115.53L129.93 122.78" stroke="#052A75" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linejoin="round" stroke-linecap="round"/> <path id="Vector" d="M143.56 146.1L125.84 128.37L135.51 118.67L153.24 136.4C155.91 139.08 155.91 143.41 153.24 146.09C150.57 148.77 146.24 148.77 143.56 146.1Z" stroke="#052A75" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linejoin="round"/><path id="Vector" d="M106.22 81.88L89.16 99.04" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linejoin="round" stroke-linecap="round"/><path id="Vector" d="M106.22 99.04L89.16 81.88" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linejoin="round" stroke-linecap="round"/>
        </svg>

            <h2 class="font-bold text-3xl text-[#131313] pt-10 pb-4">No Information Available</h2>
            <p class="font-normal text-[16px] text-[#131313B3]/70%">It is a long established fact that a reader will be distracted by the readable content of a page when looking at <br> its layout. The point of using Lorem Ipsum is that it has a.</p>
        `;
    }
    else{
        cardContainer.classList = 'w-4/5  min-h-[30vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
    }
    pets.forEach(pet => {
        const card = document.createElement('div');
        card.classList = 'card w-68 p-2 sm:p-5 rounded-lg border-2 border-[#1313131A]/10 flex flex-col';
        // Build the card content
        card.innerHTML = `
            <figure>
                <img id='img'
                src="${pet.image ? pet.image : 'images/default-image.jpg'}"
                alt="Shoes" class="w-11/12 h-48 md:h-40 rounded-lg"/>
            </figure> 
            <div class="flex flex-col  gap-2 my-6">
                <h2 class="text-xl font-bold text-left">
                    ${pet.pet_name ? pet.pet_name : "Not Available"}
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-1">
                    <div class="flex flex-row justify-start items-center">
                        <img src="images/4dot-removebg-preview.png" class="w-3 h-3">  
                        <span class="text-center">&nbsp Breed: ${pet.breed ? pet.breed : "Not Available"}</span>
                    </div>
                    <div class="flex flex-row justify-start items-center">
                        <i class="fa-regular fa-calendar"></i>  
                        <span class="text-center">&nbsp Birth: ${pet.date_of_birth ? pet.date_of_birth : "Not Available"}</span>
                    </div>
                    <div class="flex flex-row justify-start items-center">
                        <i class="fa-solid fa-mercury"></i> 
                        <span class="text-center">&nbsp Gender: ${pet.gender ? pet.gender : "Not Available"}</span>
                    </div>
                    <div class="flex flex-row justify-start items-center">
                        <i class="fa-solid fa-dollar-sign"></i> 
                        <span class="text-center">&nbsp Price: ${pet.price ? pet.price : "Not Available"}</span>
                    </div>
                </div>
            </div>
            <div class="border border-b-2 border-[#1313131A]"></div>
            <div class="flex flex-row justify-around gap-3 mt-5">
                <button class="btn border border-[#1313131A] px-4 py-1 w-1/6 md:w-fit rounded-lg text-cmColor" onclick="Choiched(${pet.petId})">
                    <i class="fa-regular fa-thumbs-up"></i>
                </button>
                <button class="btn border border-[#1313131A] px-4 py-1 w-2/6 md:w-fit rounded-lg text-cmColor" id="adoptBtn" onclick="adopt(this)">
                    Adopt
                </button>
                <button class="btn border border-[#1313131A] px-4 py-1 w-2/6 md:w-fit rounded-lg text-cmColor" onclick="details(${pet.petId})">
                    Details
                </button>
            </div>
        `;
        
        // Append the card to the container
        cardContainer.appendChild(card);
    });
    
        
    
}



const Choiched =(id)=>{
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    .then(response => response.json())
    .then(data=>  {
        const getAside = document.getElementById('aside');
        const imgContainer = document.createElement('div');
        imgContainer.innerHTML=`
        <img src='${data.petData.image}' class='w-full  lg:w-28 h-16 rounded-lg'>`;
        getAside.appendChild(imgContainer);
    })
   
    .catch(err => console.error(err))
}

const details=(id)=>{
   
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    .then(response => response.json())
    .then(data=> {
        const getDetailsBoxById = document.getElementById('detailsBox');
            getDetailsBoxById.innerHTML = `
                <dialog id="my_modal_4" class="modal">
                    <div class="modal-box w-3/5 h-[90%]  max-w-[700px]">
                        <figure>
                            <img id='img'
                            src=${data.petData.image}
                            alt="Shoes" class="w-full h-[220px] rounded-lg"/>
                        </figure> 
                        <div class="flex flex-col gap-1 my-6">
                            <h2 class="text-2xl font-bold text-left mb-4">
                            ${data.petData.pet_name}
                            </h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 font-normal text-[16px] gap-2" >
                                <div class="flex flex-row justify-start items-center"><img src="images/4dot-removebg-preview.png" class="w-3 h-3">  <span class="text-center ">&nbsp Brid: ${data.petData.breed}<span></div>
                                <div class="flex flex-row justify-start items-center"><i class="fa-regular fa-calendar"></i>  <span class="text-center"> &nbsp Birth: ${data.petData.date_of_birth}<span></div>
                                <div class="flex flex-row justify-start items-center"><i class="fa-solid fa-mercury"></i> <span class="text-center"> &nbsp Gender: ${data.petData.gender}<span></div>
                                <div class="flex flex-row justify-start items-center"><i class="fa-solid fa-dollar-sign"></i> <span class="text-center">&nbsp Price: ${data.petData.price}<span></div>
                                <div class="flex flex-row justify-start items-center"><i class="fa-solid fa-syringe"></i> <span class="text-center">&nbsp Vaccinated status: ${data.petData.vaccinated_status}<span></div>
                            </div>
                            <div class="my-3">
                                <h2 class="font-semibold text-[16px] mb-2">Details Informaiton</h2>
                                <p class="font-normal text-[16px]"> ${data.petData.pet_details}
                                </p>
                            </div>
                        </div>
                        <form method="dialog">
                            <!-- This button will close the modal -->
                            <button class="btn  w-full text-cmColor">Cancel</button>
                        </form>
                    </div>
                </dialog>
            `;
        const modal = document.getElementById('my_modal_4');
        if (modal) {
            modal.showModal();
        }
    }
)
    .catch(error=> console.log(error));
}






AllAnimalsList()
getAnimalsCatagories();
