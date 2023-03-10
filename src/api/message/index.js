import request from '@/utils/request'

export function fetchList(data) {
    return request({
        url: '/blogSunsetComment/page',
        method: 'post',
        data
    })
}

export function addComment(data) {
    return request({
        url: '/blogSunsetComment/save',
        method: 'post',
        data
    })
}