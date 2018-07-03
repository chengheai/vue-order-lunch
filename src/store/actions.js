// 应用 mutations

export const setUser = ({commit}, user) =>{
  commit('userStatus', user)
}