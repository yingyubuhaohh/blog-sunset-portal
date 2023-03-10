import request from '@/utils/request'

export function fetchList(id) {
    return request({
        url: '/blogSunsetComment/findComment/'+id,
        method: 'get'
    })
}

export function addComment(data) {
    return request({
        url: '/blogSunsetComment/save',
        method: 'post',
        data
    })
}