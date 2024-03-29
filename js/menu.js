
class Menu{

    constructor(data){
        this.data = data
    }


    init(){

        var menu = document.querySelector('#menu')

        var opener = 'open--left'
        var elementOpener;

        if(this.data.hasOwnProperty('options')){

            if(this.data.options.hasOwnProperty('openAndCloseWith')){
                elementOpener = this.data.options.openAndCloseWith
            }

            if(this.data.options.hasOwnProperty('size')){
                if(this.data.options.size == 'sm'){
                    menu.classList.add('menu--sm')
                }
                else if(this.data.options.size == 'md'){
                    menu.classList.add('menu--md')
                }
                else if(this.data.options.size == 'lg'){
                    menu.classList.add('menu--lg')
                }
                else{
                    console.log('* * *  WARNING * * *')
                    console.log('You are using a measure that does not exist. By default, the size class will be large (lg)')
                    menu.classList.add('menu--lg')
                }

            }
            
            if(this.data.options.hasOwnProperty('direction')){
                if(this.data.options.direction == 'top'){
                    menu.classList.add('menu--to-top')

                    if(this.data.options.hasOwnProperty('isFullscreen')){
                        if(this.data.options.isFullscreen  == false){
                            opener = 'open--top-50'
                        }
                        else if(this.data.options.isFullscreen  == true){
                            opener = 'open--top'
                        }
                        else{
                            console.log('* * *  WARNING * * *')
                            console.log('The value of isFullscreen property is not valid. By default, the isFullscreen values is true.')
                            opener = 'open--top'
                        }
                    }
                    else{
                        opener = 'open--top'
                    }
                    
                }
                else if(this.data.options.direction == 'bottom'){
                    menu.classList.add('menu--to-bottom')
                    
                    if(this.data.options.hasOwnProperty('isFullscreen')){
                        if(this.data.options.isFullscreen  == false){
                            opener = 'open--bottom-50'
                        }
                        else if(this.data.options.isFullscreen  == true){
                            opener = 'open--bottom'
                        }
                        else{
                            console.log('* * *  WARNING * * *')
                            console.log('The value of isFullscreen property is not valid. By default, the isFullscreen values is true.')
                            opener = 'open--bottom'
                        }
                    }
                    else{
                        opener = 'open--bottom'
                    }

                }
                else if(this.data.options.direction == 'right'){

                    menu.classList.add('menu--to-right')

                    if(this.data.options.hasOwnProperty('isFullscreen')){
                        if(this.data.options.isFullscreen  == false){
                            opener = 'open--right-50'
                        }
                        else if(this.data.options.isFullscreen  == true){
                            opener = 'open--right'
                        }
                        else{
                            console.log('* * *  WARNING * * *')
                            console.log('The value of isFullscreen property is not valid. By default, the isFullscreen values is true.')
                            opener = 'open--right'
                        }
                    }
                    else{
                        opener = 'open--right'
                    }

                }
                else if(this.data.options.direction == 'left'){
                    menu.classList.add('menu--to-left')

                    if(this.data.options.hasOwnProperty('isFullscreen')){
                        if(this.data.options.isFullscreen  == false){
                            opener = 'open--left-50'
                        }
                        else if(this.data.options.isFullscreen  == true){
                            opener = 'open--left'
                        }
                        else{
                            console.log('* * *  WARNING * * *')
                            console.log('The value of isFullscreen property is not valid. By default, the isFullscreen values is true.')
                            opener = 'open--left'
                        }
                    }
                    else{
                        opener = 'open--left'
                    }

                }
                else{
                    console.log('* * *  WARNING * * *')
                    console.log('You are using a direction that does not exist. By default, the direction class will be to left (left)')
                    menu.classList.add('menu--to-left')
                    opener = 'open--left'
                }
            }

            if(this.data.options.hasOwnProperty('speed')){
                if(this.data.options.speed == 'slow'){
                    menu.classList.add('menu--speed--slow')
                }
                else if(this.data.options.speed == 'normal'){
                    menu.classList.add('menu--speed--normal')
                }
                else if(this.data.options.speed == 'fast'){
                    menu.classList.add('menu--speed--fast')
                }
                else{
                    menu.style.cssText += 'transition-duration:'+this.data.options.speed+' !important';
                }
            }

            this.openAndCloseWith(elementOpener, opener)


            return this


        }
    }


    openAndCloseWith(element, opener){

        var menu = document.querySelector('.menu')

        if(element.startsWith('.')){
            const elements = Array.from(document.getElementsByClassName(element.substring(1)));
            elements.forEach(element => {
                element.addEventListener('click', function handleClick(event) {
                    if(!menu.classList.contains(opener)){
                        menu.classList.add(opener)
                    }
                    else{
                        menu.classList.remove(opener)
                    }
                });
            });
        }
        else if(element.startsWith('#')){
            const elementID = document.getElementById(element.substring(1))
            elementID.addEventListener('click', function handleClick(event) {
                if(!menu.classList.contains(opener)){
                    menu.classList.add(opener)
    
                }
                else{
                    menu.classList.remove(opener)
                }
    
            });
        }
    }


    cursor(asset, size = '2rem', speed = '0.1s'){

        var parent = document.querySelector('.menu')
        
        var element = "";

        if(asset.match(/[^/]+(jpg|png|gif)$/)){
            element = `
            <div class="menu-cursor" id="cursor" style='transition: ${speed}'><img src='${asset}' style='width: ${size}' ></div>
            `
        }
        else{
            element = `
            <div class="menu-cursor" id="cursor" style='transition: ${speed}'; font-size: ${size}'>${asset}</div>
            `
        }

        parent.innerHTML += element;
    
        const cursor = document.querySelector(".menu-cursor")
            
        document.addEventListener('mousemove', (e)=>{
            cursor.style.left = e.clientX + "px";
            cursor.style.top =  e.clientY + "px";
        })
       

    }

}
