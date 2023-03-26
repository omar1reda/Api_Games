
import {Details} from'./Details.js'


export class Transfer
{
    constructor()
    {
        this.ClickDiv = document.querySelectorAll(' .MMORPG_small_Div')
        this.navbar = document.querySelectorAll(' #Home .navbar-expand-lg')
        this.DetailsSection = document.querySelector(' .Details_Game')
        this.SectionAllDivSmall = document.querySelector(' .MMORPG')
        this.ExitIcon = document.querySelector(' .ExitIcon')
        this.OneDiv()
    }

    OneDiv()
    {
          for( let i=0 ; i< this.ClickDiv.length ; i++)
          {
            this.ClickDiv[i].addEventListener('click' , this.DetailsGame.bind(this , i))
            
          }

          
    }
    DetailsGame(i)
    {
        
         let Id = this.ClickDiv[i].id
        this.SectionAllDivSmall.style.display='none' 
        this.navbar[0].style.display='none'
        this.DetailsSection.style.display='block'
        console.log(this.navbar[0])
        this.ExitIcon.addEventListener('click' , this.Exit_I.bind(this))
        
        let v = new Details(Id)
    }

    Exit_I()
    {
        this.SectionAllDivSmall.style.display='block' 
        this.DetailsSection.style.display='none' 
        this.navbar[0].style.display='block'
    }
}