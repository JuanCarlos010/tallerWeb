function bookData(id, isActive, picture, datePublish, nameBook, gender){
    this.id = id;
    this.isActive = isActive;
    this.picture = picture;
    this.datePublish = datePublish;
    this.nameBook = nameBook;
    this.gender = gender;
}


class tallerWeb {
    constructor() {
        this.allData = function () {
            var book1 = new bookData(1, true, 'https://es.minecraft.wiki/w/Libro_encantado', '10/4/2010', 'Filo V', 'Espada');
            var book2 = new bookData(2, false, 'https://es.minecraft.wiki/w/Libro_encantado', '10/5/2010', 'Poder V', 'Arco');
            var book3 = new bookData(3, false, 'https://es.minecraft.wiki/w/Libro_encantado', '10/6/2010', 'Eficencia V', 'Mineria');
            var book4 = new bookData(4, true, 'https://es.minecraft.wiki/w/Libro_encantado', '10/7/2010', 'Fortuna III', 'Mineria');
            var book5 = new bookData(5, false, 'https://es.minecraft.wiki/w/Libro_encantado', '10/8/2010', 'Saqueo III', 'Espada');
            var book6 = new bookData(6, true, 'https://es.minecraft.wiki/w/Libro_encantado', '10/9/2010', 'Reparacion', 'Herramientas');
            var book7 = new bookData(7, true, 'https://es.minecraft.wiki/w/Libro_encantado', '10/10/2010', 'Proteccion IV', 'Armadura');
            var book8 = new bookData(8, false, 'https://es.minecraft.wiki/w/Libro_encantado', '10/11/2010', 'Barrido I', 'Espada');
            var book9 = new bookData(9, true, 'https://es.minecraft.wiki/w/Libro_encantado', '10/12/2010', 'Lealtad', 'Tridente');
            var book10 = new bookData(10, false, 'https://es.minecraft.wiki/w/Libro_encantado', '10/1/2011', 'Densidad V', 'Mazo');

            const books = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10];

            return {
                status: true,
                data: books,
                dateTime: new Date().toISOString()
            }
        }

        this.dataInfoId = function(id){
            this.idBusqueda = id;
            const book = this.allData().data;
            for(let i = 0; i <book.length; i++){
                if(book[i].id == this.idBusqueda){
                    return book[i];
                }
            }
            return null;
        }

        this.dataInfoStatus = function(boolean){
            const book = this.allData().data;
            const group = [];
            for(let i = 0; i < book.length; i++){
                if(book[i].isActive == boolean){
                    group.push(book[i]);
                }
            }
            return group;
        }

        this.dataInfoQuery = function(query){
            const book = this.allData().data;
            const group = [];
            for(let i = 0; i < book.length; i++){
                let match = true;

                //verifica el id
                if(query.id && book[i].id != query.id){
                    match = false;
                }

                //verifica el estado
                if(query.status && book[i].isActive != (query.status === 'true')){
                    match = false;
                }

                if(query.picture && !book[i].picture.includes(query.picture)){
                    match = false;
                }

                if(query.datePublish && book[i].datePublish != query.datePublish){
                    match = false;
                }

                if(query.nameBook && !book[i].nameBook.toLowerCase().includes(query.nameBook.toLowerCase())){
                    match = false;
                }

                if(query.gender && !book[i].gender.toLowerCase().includes(query.gender.toLowerCase())){
                    match = false;
                }

                if(match){
                    group.push(book[i]);
                }

            }
            return group;
        }
    }
}

export default tallerWeb;