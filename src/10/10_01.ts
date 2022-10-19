export type UserType = {
    name:string
    hair: number
    address: {city: string, house?: number}
}
export type LaptopTYpe = {
    title: string
}
export type CompanyType = {
    id: number,
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopTYpe
}
export type UserWithBooks =  UserType & {
    books: Array<string>
}
export type WithCompaniesType = {
    companies: Array<{id: number, title: string}>
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    return copy
}
export function moveUser(u: UserWithLaptopType, city: string)  {
    return {
        ...u,
        address: {...u.address, city: city}
    }
}
export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooks , house: number)  {
    return {
        ...u,
        address: {...u.address, house: house}
    }
}
export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string){
    return {
        ...u,
        laptop: {... u.laptop, title: laptop}
    }
}
export function addNewBooksToUser (u: UserWithLaptopType & UserWithBooks, newBooks: Array<string>) {
    return {
        ...u,
        books: [...u.books, ...newBooks]
    }
}
export function updateBook (u: UserWithLaptopType & UserWithBooks,
                            oldBook: string,
                            newBook: string){
   return {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
}
export function removeBook (u: UserWithLaptopType & UserWithBooks,
                            oldBook: string){
    return {
        ...u,
        books: u.books.filter(b => b !== oldBook )
    }
}
export function addedCompany (u: UserWithLaptopType & WithCompaniesType,
                            newTitle: string){
    return {
        ...u,
        companies: [...u.companies, {id:3, title: newTitle}]
    }
}
export function updateCompany (u: UserWithLaptopType & WithCompaniesType,
                              id: number,
                              changeCompany: string){
    return {
        ...u,
        companies: u.companies.map(c => c.id === id ? {...c, title: changeCompany} : c)
    }
}
export function updateCompanyTitle (companies: {[key: string] : Array<CompanyType>},
                                    userName: string,
                                    companyId: number,
                                    newTitle: string){
   let companyCopy = { ...companies }
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)
    return companyCopy
}