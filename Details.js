
export class Details
{
    constructor(ID)
    {
         this.id = ID

         this.Img = document.querySelector(' .Details_Game_img')
         this.Title = document.querySelector(' .Details_Game_Title')
         this.Category = document.querySelector(' .Details_Game_Category')
         this.Platform = document.querySelector(' .Details_Game_Platform')
         this.Status = document.querySelector(' .Details_Game_Status')
         this.Berggraph = document.querySelector(' .Details_Game_Berggraph')
         this.Button_Show_Game = document.querySelector(' .Button_Show_Game')

         this.ApiDetails()
    }

        async ApiDetails()
        {


            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '0a81542d51msh55189068b57b474p1de555jsn4eded1568eab',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            
            let Url= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`, options)
            let UrlApi = await Url.json()
    
            console.log(UrlApi)
             this.Img.src = UrlApi.thumbnail
             this.Title.innerHTML=`Title: ${UrlApi.title}`
             this.Platform.innerHTML=`${UrlApi.platform}`
             this.Status.innerHTML=`${UrlApi.status}`
             this.Category.innerHTML=`${UrlApi.genre}`
             this.Berggraph.innerHTML=`${UrlApi.description}`
             this.Button_Show_Game.href=`${UrlApi.freetogame_profile_url}`
             console.log( this.Button_Show_Game.href)
        }



} 