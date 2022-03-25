const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);
//collego vue al div con id #app
const app = new Vue(
    {
        el:'#app',
        data:{  //struttura dati
            slides,
            activeSlideIndex : 0    //indice dell'array che mi punta alla slide attiva(quella che sto visualizzando)
        },

        methods:{
            showPrevSlide(){
                if(this.activeSlideIndex > 0){
                    this.activeSlideIndex--;
                }else{
                    this.activeSlideIndex = this.activeSlideIndex - 1;
                }
            },
            showNextSlide(){
                if(this.activeSlideIndex < this.slides.length - 1)
                {
                    this.activeSlideIndex++;
                }else{
                    this.activeSlideIndex = 0;
                }
            },
            checkIfActive(item){    //aggiungo dinamicamente la classe .active al div che contiene la thumbnails
                //console.log(item.title);
                const index = this.slides.findIndex(    /*findIndex (è un metodo degli array) ritorna la posizione del primo elemento che soddisfa
                                                          la condizione(la funzione che gli si passa come parametro e che
                                                          viene eseguita su ciascun elemento dell'array) e se nessun
                                                          elemento dell'array soddisfa la condizione allora essa ritorna -1. */
                    (slide) => {return slide.title === item.title;}
                )
                //console.log(index);
                if(index === this.activeSlideIndex){    //se il valore della const index è uguale al valore dell'indice dalla slide corrente che si sta visualizzando allora aggiungo al div contenente la thumbnails 'attiva'(quella appunto che si sta visualizzando) la classe .active
                    return 'thumb active';
                }
                return 'thumb';
            }
        }
    }
)