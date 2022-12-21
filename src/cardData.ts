   export type HighlightsProps = {
    id: number
    image: string
    description: string
    brandIcon: string
    creationDate: string
    count: number
    isVideo:boolean
    user: {
        id: string
        avatar: string
        name: string
    }
}
   
   export const highlights: HighlightsProps[] = [
        {
            id: 1,
            image: '/assets/1.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quas pariatur magnam facilis',
            count:0,
            creationDate:'Mar 16',
            brandIcon:'/assets/1.jpg',
            isVideo:false,
            user: {
                id: '@Mike',
                avatar: '/assets/1.jpg',
                name: 'Mike'
            }
        },
        {
            id: 2,
            image: '/assets/2.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quas pariatur magnam facilis, dolore eligendi a blanditiis quod minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quas pariatur magnam facilis, dolore eligendi a blanditiis quod minima?',
            count:0,
            creationDate:'Mar 16',
            brandIcon:'/assets/2.jpg',
            isVideo:false,
            user: {
                id: '@Mike',
                avatar: '/assets/2.jpg',
                name: 'Mike'
            }
        },
        {
            id: 3,
            image: '/assets/3.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quas pariatur magnam facilis, dolore eligendi a blanditiis quod minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quas pariatur magnam facilis, dolore eligendi a blanditiis quod minima?',
            count:20,
            creationDate:'Mar 16',
            brandIcon:'/assets/3.jpg',
            isVideo:false,
            user: {
                id: '@Mike',
                avatar: '/assets/3.jpg',
                name: 'Mike'
            }
        },
        {
            id: 4,
            image: '/assets/4.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quas pariatur magnam facilis',
            count:5,
            creationDate:'Mar 16',
            brandIcon:'/assets/4.jpg',
            isVideo:false,
            user: {
                id: '@Mike',
                avatar: '/assets/4.jpg',
                name: 'Mike'
            }
        },
        {
            id: 5,
            image: '/assets/1.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quas pariatur magnam facilis, dolore eligendi a blanditiis quod minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quas pariatur magnam facilis, dolore eligendi a blanditiis quod minima?',
            count:40,
            creationDate:'Mar 16',
            brandIcon:'/assets/1.jpg',
            isVideo:false,
            user: {
                id: '@Mike',
                avatar: '/assets/1.jpg',
                name: 'Mike'
            }
        },
        {
            id: 6,
            image: '/assets/2.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quas pariatur magnam facilis, dolore eligendi a blanditiis quod minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quas pariatur magnam facilis, dolore eligendi a blanditiis quod minima?',
            count:0,
            creationDate:'Mar 16',
            brandIcon:'/assets/2.jpg',
            isVideo:false,
            user: {
                id: '@Mike',
                avatar: '/assets/2.jpg',
                name: 'Mike'
            }
        },
        {
            id: 7,
            image: '/assets/3.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quas pariatur magnam facilis',
            count:0,
            creationDate:'Mar 16',
            brandIcon:'/assets/3.jpg',
            isVideo:false,
            user: {
                id: '@Mike',
                avatar: '/assets/3.jpg',
                name: 'Mike'
            }
        },
        {
            id: 8,
            image: '/assets/4.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quas pariatur magnam facilis, dolore eligendi a blanditiis quod minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quas pariatur magnam facilis, dolore eligendi a blanditiis quod minima?',
            count:0,
            creationDate:'Mar 16',
            brandIcon:'/assets/4.jpg',
            isVideo:false,
            user: {
                id: '@Mike',
                avatar: '/assets/4.jpg',
                name: 'Mike'
            }
        },
        {
            id: 9,
            image: '/assets/1.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quas pariatur magnam facilis, dolore eligendi a blanditiis quod minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quas pariatur magnam facilis, dolore eligendi a blanditiis quod minima?',
            count:0,
            creationDate:'Mar 16',
            brandIcon:'/assets/1.jpg',
            isVideo:false,
            user: {
                id: '@Mike',
                avatar: '/assets/1.jpg',
                name: 'Mike'
            }
        },
        {
            id: 10,
            image: '/assets/2.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quas pariatur magnam facilis',
            count:0,
            creationDate:'Mar 16',
            brandIcon:'/assets/2.jpg',
            isVideo:false,
            user: {
                id: '@Mike',
                avatar: '/assets/2.jpg',
                name: 'Mike'
            }
        },
        {
            id: 11,
            image: '/assets/3.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quas pariatur magnam facilis, dolore eligendi a blanditiis quod minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quas pariatur magnam facilis, dolore eligendi a blanditiis quod minima?',
            count:0,
            creationDate:'Mar 16',
            brandIcon:'/assets/3.jpg',
            isVideo:false,
            user: {
                id: '@Mike',
                avatar: '/assets/3.jpg',
                name: 'Mike'
            }
        },
        {
            id: 12,
            image: '/assets/vid1.mp4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quas pariatur magnam facilis, dolore eligendi a blanditiis quod minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quas pariatur magnam facilis, dolore eligendi a blanditiis quod minima?',
            count:0,
            creationDate:'Mar 16',
            brandIcon:'/assets/4.jpg',
            isVideo:true,
            user: {
                id: '@Mike',
                avatar: '/assets/4.jpg',
                name: 'Mike'
            }
        }
    ]