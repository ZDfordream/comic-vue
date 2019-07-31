import * as types from './mutation-types'

export const setVideoUrl = function ({commit}, videoUrl) {
  commit(types.SET_VIDEO_URL, videoUrl)
}

