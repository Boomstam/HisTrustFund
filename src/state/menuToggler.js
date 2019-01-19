export default class MenuToggler {

    constructor(){
        this.isOpen = false;
        this.reRenderCallback = null;
    }
    
    setReRenderCallback(callback){
        
        this.reRenderCallback = callback;
    }

    toggleMenu(){

        this.isOpen = !this.isOpen;

        this.reRenderCallback();

        console.log("menu toggled_" + this.isOpen);
    }

    close()
    {
        this.isOpen = false;

        this.reRenderCallback();

        console.log("menu closed_" + this.isOpen);
    }
}