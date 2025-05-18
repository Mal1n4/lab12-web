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
                link: '/twighlight-about'
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
                // делаем запрос на сервер
                const response = await fetch(
                    `https://ponyapi.net/v1/character/all`
                );
                // преобразуем в объект
                const result = await response.json();
                this.fetchdata=result
                console.log( this.fetchdata)
            }
        },
})
