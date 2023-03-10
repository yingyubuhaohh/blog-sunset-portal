import request from '@/utils/request'

export function register(data) {
    return request({
        url: '/blog/register',
        method: 'post',
        data,
    })
}

export function getUserInfo() {
    return request({
        url: '/admin/user/info',
        method: 'post'
    })
}