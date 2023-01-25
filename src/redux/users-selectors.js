import { createSelector } from 'reselect'
//селекторы зависят от маленьких частей стейта

const getUsersSelector = (state)  => {
    return state.usersPage.users
}
//первый параметр это то что нужно получить как значение что бы закинуть в юзерс
//из примитивных селекторов создаем навороченные
//по порядку засовывается каждый примитивный селектор в функцию
export const getUsers = createSelector(getUsersSelector, //getIsFetching,
    (users, //isFetching
    ) => {
    return users.filter(u => true)
})

export const getPageSize = (state)  => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state)  => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state)  => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state)  => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state)  => {
    return state.usersPage.followingInProgress
}