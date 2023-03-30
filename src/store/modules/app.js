import Cookies from "js-cookie";

const state = {
  sidebar:{
    opened:Cookies.get('sidebarStatus')? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false,
    hidden:false
  },
  size:Cookies.get('size') || 'medium'
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    if (state.sidebar.hide) {
      return false;
    }
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  SET_SIZE:(state,size)=>{
    state.size = size
    Cookies.set('size',size)
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  setSize({commit},size){
    commit('SET_SIZE',size)
  }
}

export default {
  namespaced:true,
  state,
  mutations,
  actions
}
