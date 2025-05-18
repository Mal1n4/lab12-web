import { defineStore } from 'pinia'
export const PonyStore = defineStore('counter', {
    state: () => ({
        count: 0,
        name: 'Пони и их знаки отличия',
        fetchdata: null,
        aradata: [
            {
                name: 'Искорка',
                mark: '/src/assets/tsm.png',
                pony: '/src/assets/ts.png',
                link: '/twighlight-about',
                engname: null, 
                kind: null, 
                image: null, 
                residence: null,
                occupation: null,
                wiki: null
            },
            {
                name: 'Рарити',
                mark: '/src/assets/rm.png',
                pony: '/src/assets/r.jpg',
                link: '/rarity-about'
            },
            {
                name: 'Радуга',
                mark: '/src/assets/rdm.png',
                pony: '/src/assets/rd.png',
                link: '/raibowdash-about'
            },
            {
                name: 'Флаттершай',
                mark: '/src/assets/fm.png',
                pony: '/src/assets/f.png',
                link: '/fluttershy-about'
            },
            {
                name: 'Эпплджек',
                mark: '/src/assets/apples.png',
                pony: '/src/assets/a.png',
                link: '/applejack-about'
            },
            {
                name: 'Пинки Пай',
                mark: '/src/assets/ppm.png',
                pony: '/src/assets/pp.png',
                link: '/pinkiepie-about'
            },
        ],
    }),
    actions: {
            async getApidata() {
                const response = await fetch(
                    `https://ponyapi.net/v1/character/all`
                );
                const result = await response.json();
                this.fetchdata=result
                this.aradata[0].engname=result.data[0].name
                this.aradata[0].kind=result.data[0].kind
                this.aradata[0].residence=result.data[0].residence
                this.aradata[0].occupation=result.data[0].occupation
                this.aradata[0].wiki=result.data[0].url
                this.aradata[0].image=result.data[0].image


                console.log( this.fetchdata)
            }
        },
})
