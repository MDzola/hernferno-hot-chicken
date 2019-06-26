



function makeMenuItemComponent(menuItem) {
    return `
    <li><img><h3>${menuItem.name}: ${menuItem.price}</h3><button>Order</button></li>
    `
}



function listMenuItems(menuComponents) {
    menuComponents.forEach( component =>{
        document.getElementById("menuList").innerHTML += component

    })
}



export {makeMenuItemComponent, listMenuItems}