

import {Transfer} from './Transfer.js'



export class HomeApi
{
    constructor()
    {
        this.category = 'mmorpg';
        this.nav= Array.from(document.querySelectorAll(' .nav-link')) ;
     
        this.Api()
        this.nav_A()
    }

    nav_A()
    {
        for(let i=0 ; i< this.nav.length ; i++)
        {
            this.nav[i].addEventListener('click' , this.categoryS.bind(this));
        }
    }
    async categoryS(e)
    {
        this.category = e.target.name 
        this.Api()
    }


    async Api()
{

    let options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '0a81542d51msh55189068b57b474p1de555jsn4eded1568eab',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                 }
      };


      
      
      let Url = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}` , options)
      let UrlApi = await Url.json()
    
      console.log(UrlApi[0].short_description.slice(0,48))
      let ma5zn =``
   
        for (let i=0 ; i<UrlApi.length ; i++)
        {
            ma5zn += ` <div id="${UrlApi[i].id}" class="MMORPG_small_Div  col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 text-bg-light bg-dark  ">
            <div class="MMORPG_small ps-2 pe-2 mt-2 mb-2 rounded-3">
            
              <div class="Img_MMORPG pt-3 pb-3 ps-2 pe-2 position-relative">
              <div class="leyar  position-absolute top-0 end-0 start-0 bottom-0">

              </div>
                  <img class="w-100 h-100" src="${UrlApi[i].thumbnail}" alt="">
              </div>

              <div class="text_MMORPG_buutt d-flex justify-content-between  align-items-center ps-2 pe-2">
                  <h6 class="text-white ">${UrlApi[i].title}</h6>
                  <button class=" text-white fw-bold border-0 rounded-2">free</button>
              </div>
             
              <div class="text_MMORPG text-center mt-1">
                  <p class="text-secondary p-2">${ UrlApi[i].short_description.slice(0,55)}</p>
              </div>
              
              <div class="MMORPG_2_botton d-flex justify-content-between text-white fw-bold p-2 ">
                  <span class=" rounded-3 ps-1 pe-1">${UrlApi[i].genre}</span>
                  <span class=" rounded-3 ps-1 pe-1">${UrlApi[i].platform}</span>
              </div>
          </div>
      </div>`
          
        }
        document.querySelector(' .All_MMORPG_small_Div').innerHTML=ma5zn

        let z = new Transfer
}


}