// Creare un carousel di immagini con Vue!
// bonus: aggiungere anche l'autoplay con una timing functions.
// bonus2:aggiungete come secondo bonus anche il click sui pallini per cambiare immagine!


var app = new Vue(
    {
        el: '#container',
        data: {
        indice_immagine: 0,
        immagini:   [
            "https://viaggiare.moondo.info/files/2017/06/copertina-turkscaicos.jpg",
            "https://siviaggia.it/wp-content/uploads/sites/2/2019/09/cipro21-min.jpg",
            "https://static-www.leccenews24.it/wp-content/2019/05/torredellorso-mare-spiagge-salento-9.jpg",
            "https://www.investireoggi.it/news/wp-content/uploads/sites/12/2020/07/Il-mare-pi%C3%B9-bello-dItalia-2020-15-localit%C3%A0-pi%C3%B9-belle-secondo-Legambiente--1200x675.jpg",
            "https://i0.wp.com/insolitatravels.it/wp-content/uploads/2018/10/sardegna_arcipelago_maddalena.jpg?resize=900%2C500&ssl=1"
            ]
        },
    methods:    {
        next_image() {
                this.indice_immagine += 1;
                if(this.indice_immagine > this.immagini.length - 1) {
                    this.indice_immagine = 0;
                    }

                },
        prev_image() {
                this.indice_immagine -=1;
                if (this.indice_immagine < 0) {
                    this.indice_immagine=this.immagini.length -1;

                }
        },
        cambiaImmagine() {
            if(this.indice_immagine +=1) {
                this.indice_immagine ==indice
        }else{
       this.indice_immagine = 0
        }
    
    }
        }


});
