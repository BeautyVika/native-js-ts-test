
function increaseAge(u: UserType){
    u.age++
}
type UserType={
    age: number
    name: string
    address: {title: string}
}

test('reference type test', ()=> {

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {title: 'Minsk'}
    }

    increaseAge(user)
    expect(user.age).toBe(33)

    const superman = user
    superman.age = 1000

    expect(user.age).toBe(1000)
})

test( 'array test', ()=> {

    let users = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Dimych',
            age: 32
        }
    ]
    let admins = users
    admins.push({name: 'Bob', age: 10})

    expect(users[2]).toEqual({name: 'Bob', age: 10})

})

test( 'array reference test', ()=> {

    let usersCount = 100

    let adminsCount = usersCount
    adminsCount = adminsCount + 1

})
test('reference type test', ()=> {

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {title: 'Minsk'}
    }
    // let addr = user.address

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address

    }
    user2.address.title = 'Minsk City'

    expect(user.address.title).toBe('Minsk City')
})