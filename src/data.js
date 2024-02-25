const books = [
    {
        id:1,
        name:'Антидемон. Книга 11',
        category:'history',
        author:'Someone',
        about:'lorem lorem lorem lorem lorem',
        data:'20.02.2024',
        description:'dwnjefisohagunhoveirbncehrvnubhnlervnthcrlmvthnrlkhrm',
        img:'book5.webp',
        status:'best'
    },
    {
        id:2,
        name:'Возвращение в кафе «Полустанок»',
        category:'history',
        author:'Someone',
        about:'lorem lorem lorem lorem lorem',
        data:'20.02.2024',
        description:'dwnjefisohagunhoveirbncehrvnubhnlervnthcrlmvthnrlkhrm',
        img:'book6.webp',
        status:'best'
    },
    {
        id:3,
        name:'Рождество и красный кардинал',
        category:'history',
        author:'Someone',
        about:'lorem lorem lorem lorem lorem',
        data:'20.02.2024',
        description:'dwnjefisohagunhoveirbncehrvnubhnlervnthcrlmvthnrlkhrm',
        img:'book7.webp',
        status:'new'
    },
    {
        id:4,
        name:'Стоя под радугой',
        category:'history',
        author:'Someone',
        about:'lorem lorem lorem lorem lorem',
        data:'20.02.2024',
        description:'dwnjefisohagunhoveirbncehrvnubhnlervnthcrlmvthnrlkhrm',
        img:'book9.webp',
        status:'new'
    },
    {
        id:5,
        name:'Новая Афи',
        category:'history',
        author:'Someone',
        about:'lorem lorem lorem lorem lorem',
        data:'20.02.2024',
        description:'dwnjefisohagunhoveirbncehrvnubhnlervnthcrlmvthnrlkhrm',
        img:'book10.webp',
        status:'new'
    },
    {
        id:6,
        name:'Секрет виллы «Серена»',
        category:'history',
        author:'Someone',
        about:'lorem lorem lorem lorem lorem',
        data:'20.02.2024',
        description:'dwnjefisohagunhoveirbncehrvnubhnlervnthcrlmvthnrlkhrm',
        img:'book11.webp',
        status:'new'
    },
    {
        id:7,
        name:'Люди с платформы № 5',
        category:'history',
        author:'Someone',
        about:'lorem lorem lorem lorem lorem',
        data:'20.02.2024',
        description:'dwnjefisohagunhoveirbncehrvnubhnlervnthcrlmvthnrlkhrm',
        img:'book12.webp',
        status:'new'
    },
    {
        id:8,
        name:'Взгляните на картины',
        category:'history',
        author:'Someone',
        about:'lorem lorem lorem lorem lorem',
        data:'20.02.2024',
        description:'dwnjefisohagunhoveirbncehrvnubhnlervnthcrlmvthnrlkhrm',
        img:'book13.webp',
        status:'new'
    },
    {
        id:1,
        name:'Рисовать можно всем! Учимся работать любым материалом за 7 пошаговых мастер-классов',
        category:'history',
        author:'Someone',
        about:'lorem lorem lorem lorem lorem',
        data:'20.02.2024',
        description:'dwnjefisohagunhoveirbncehrvnubhnlervnthcrlmvthnrlkhrm',
        img:'book14.webp',
        status:'new'
    },
    {
        id:9,
        name:'Учебник эндшпиля',
        category:'history',
        author:'Someone',
        about:'lorem lorem lorem lorem lorem',
        data:'20.02.2024',
        description:'dwnjefisohagunhoveirbncehrvnubhnlervnthcrlmvthnrlkhrm',
        img:'book15.webp',
        status:'new'
    },
    {
        id:10,
        name:'Шахматы. 5334 задачи, комбинации и партии',
        category:'history',
        author:'Someone',
        about:'lorem lorem lorem lorem lorem',
        data:'20.02.2024',
        description:'dwnjefisohagunhoveirbncehrvnubhnlervnthcrlmvthnrlkhrm',
        img:'book16.webp',
        status:'best'
    },
    {
        id:11,
        name:'1001 блестящий способ выигрывать в шахматы',
        category:'history',
        author:'Someone',
        about:'lorem lorem lorem lorem lorem',
        data:'20.02.2024',
        description:'dwnjefisohagunhoveirbncehrvnubhnlervnthcrlmvthnrlkhrm',
        img:'book17.webp',
        status:'new'
    },
    {
        id:12,
        name:'Практические шахматы. 600 задач, чтобы повысить уровень игры',
        category:'history',
        author:'Someone',
        about:'lorem lorem lorem lorem lorem',
        data:'20.02.2024',
        description:'dwnjefisohagunhoveirbncehrvnubhnlervnthcrlmvthnrlkhrm',
        img:'book18.webp',
        status:'new'
    },    
    {
        id:13,
        name:'Время – деньги',
        category:'history',
        author:'Someone',
        about:'lorem lorem lorem lorem lorem',
        data:'20.02.2024',
        description:'dwnjefisohagunhoveirbncehrvnubhnlervnthcrlmvthnrlkhrm',
        img:'book19.webp',
        status:'best'
    },
    {
        id:14,
        name:'Кризис и Власть. Том I. Лестница в небо',
        category:'history',
        author:'Someone',
        about:'lorem lorem lorem lorem lorem',
        data:'20.02.2024',
        description:'dwnjefisohagunhoveirbncehrvnubhnlervnthcrlmvthnrlkhrm',
        img:'book20.webp',
        status:'new'
    },    
    {
        id:15,
        name:'Настольная книга project-менеджера. Что нужно знать, чтобы управлять IT, digital и другими проектами с учетом российских реалий',
        category:'history',
        author:'Someone',
        about:'lorem lorem lorem lorem lorem',
        data:'20.02.2024',
        description:'dwnjefisohagunhoveirbncehrvnubhnlervnthcrlmvthnrlkhrm',
        img:'book21.webp',
        status:'new'
    },
    {
        id:16,
        name:'Все о SCRUM. Изучение, разработка, интеграция',
        category:'history',
        author:'Someone',
        about:'lorem lorem lorem lorem lorem',
        data:'20.02.2024',
        description:'dwnjefisohagunhoveirbncehrvnubhnlervnthcrlmvthnrlkhrm',
        img:'book22.webp',
        status:'new'
    },    
    {
        id:17,
        name:'Дикий робот',
        category:'history',
        author:'Someone',
        about:'lorem lorem lorem lorem lorem',
        data:'20.02.2024',
        description:'dwnjefisohagunhoveirbncehrvnubhnlervnthcrlmvthnrlkhrm',
        img:'book23.webp',
        status:'best'
    },
    {
        id:18,
        name:'Хранители мира. Дорога домой',
        category:'history',
        author:'Someone',
        about:'lorem lorem lorem lorem lorem',
        data:'20.02.2024',
        description:'dwnjefisohagunhoveirbncehrvnubhnlervnthcrlmvthnrlkhrm',
        img:'book24.webp',
        status:'best'
    }
]
export default books;