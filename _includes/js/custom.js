document.addEventListener('DOMContentLoaded', function() {
    const currentUrl = window.location.href;
    document.querySelector(".nav-list").style.display = 'block'

    // check if we are in the user guid tabs
    if (currentUrl.includes('user_guide')) {
        const parts = currentUrl.split('/');
        
        // Extract the selected portal from the url
        let portal = parts.pop();
        if(portal == ''){
            portal = 'ontoportal'
        }

        let nav_items = document.getElementById('site-nav').children[0].children[1].querySelectorAll('li');
        for(let i = 0; i<nav_items.length; i++){
            const links = nav_items[i].querySelectorAll('a')
            const item_link = links[links.length-1].href
            if (!item_link.includes(portal)){
                nav_items[i].remove()
            }
        }
        
        console.log('execute')
    }

});
