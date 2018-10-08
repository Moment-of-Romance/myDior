let navList = [
    {
        id:"1",
        title:"时装 及配饰",
        children:[
            {
                id:"1.1",
                title:'女士',
                path:'/lady'
            },
            {
                id:"1.2",
                title:'男士',
                path:'/men'
            },
            {
                id:"1.3",
                title:'童装',
                path:'/childwear'
            }
        ]
    },
    {
        id:"2",
        title:"香氛 彩妆 护肤",
        children:[
            {
                id:"2.1",
                title:'香氛',
                path:'/xiangfen'
            },
            {
                id:"2.2",
                title:'彩妆',
                path:'/caizhuang'
            },
            {
                id:"2.3",
                title:'护肤',
                path:'/hufu'
            }
        ]
    }
]

module.exports = navList;