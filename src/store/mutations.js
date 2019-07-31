import * as types from './mutation-types'

const mutations = {
  [types.SET_VIDEO_URL](state, videoUrl) {
    state.videoUrl = videoUrl
  },
}

export default mutations
