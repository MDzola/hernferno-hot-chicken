import {makeMenuItemComponent, listMenuItems} from "./domstuff.js"

fetch("http://localhost:8088/menu_items")
.then( menuData => menuData.json())
.then( menuItems =>{

   let componentArray = menuItems.map( (oneMenuItemObj) =>  makeMenuItemComponent(oneMenuItemObj))
       console.log(componentArray)
    listMenuItems(componentArray)
})