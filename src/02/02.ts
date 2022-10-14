export type StudentType ={
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type LocalCityType ={
    title: string
    countryTitle: string
}

type TechType ={
    id: number
    title: string
}

export const student: StudentType = {
    id: 1,
    name: 'Victoria',
    age: 29,
    isActive: true,
    address: {
        streetTitle: 'Surganova',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React'
        }
    ]
}
console.log(student.address.city.title)
console.log(student.technologies[1].title)