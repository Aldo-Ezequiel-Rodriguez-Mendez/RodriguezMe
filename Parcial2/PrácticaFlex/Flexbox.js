addEventListener('DOMContentLoaded', () => { /*Acceder al boton*/
    const btn_menu = document.querySelector('.btn_menu')

    if(btn_menu){ /*Verifica si existe el boton... */
        btn_menu.addEventListener('click',()=>{
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
            }
        )
    }
})