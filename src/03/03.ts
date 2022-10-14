import { StudentType } from '../02/02'
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";

export const sum = (a:number, b:number) =>{
    return a + b
}
const res= sum (sum(1,2), sum(1,3))

export const addSkill = (student: StudentType, skill:string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) =>{
    building.budget += budget
}
export const  repairHouse = (house: HouseType) => {
    house.repaired = true
}

export const toFireStaff = (governmentBuildingsType: GovernmentBuildingsType, number: number) => {
    governmentBuildingsType.staffCount -= number
}
export const toHireStaff = (building: GovernmentBuildingsType, stuffCountToHire: number) => {
    building.staffCount += stuffCountToHire
}
export function createMessage(city: CityType){
    return `Hello ${city.title} citizens.I want you be happy.All ${city.citizensNumber} men.`
}