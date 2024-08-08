import Alpine from 'alpinejs'

Alpine.data("counter",() => ({
    height :'',
    weight :'',
    bmi:'0',
    

    bmiCounter(){
        const h = this.height/100;
        const w = this.weight
        this.bmi = (w / (h * h)).toFixed(2)
        this.height=""
        this.weight=""
    }
    

}))



Alpine.start()