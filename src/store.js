import { defineStore } from 'pinia'
export const PonyStore = defineStore('counter', {
    state: () => ({
        count: 0,
        name: 'Пони и их знаки отличия',
        aradata: [
            {
                name: 'Искорка',
                mark: '/src/assets/tsm.png',
                pony: '/src/assets/ts.png'
            },
            {
                name: 'Рарити',
                mark: '/src/assets/rm.png',
                pony: '/src/assets/r.jpg'
            },
            {
                name: 'Радуга',
                mark: '/src/assets/rdm.png',
                pony: '/src/assets/rd.png'
            },
            {
                name: 'Флаттершай',
                mark: '/src/assets/fm.png',
                pony: '/src/assets/f.png'
            },
            {
                name: 'Эпплджек',
                mark: '/src/assets/apples.png',
                pony: '/src/assets/a.png'
            },
            {
                name: 'Пинки Пай',
                mark: '/src/assets/ppm.png',
                pony: '/src/assets/pp.png'
            },
        ]
    }),
})
