import request from '@/utils/request'

export function fetchList(data) {
    return request({
        url: '/blogSunsetTool/page',
        method: 'post',
        data
    })
}
