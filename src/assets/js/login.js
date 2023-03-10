export default {
    test: function () {
        let transfer = document.getElementById('transfetBtn');
        transfer.addEventListener('click', function () {
            let login = document.querySelector('.login-box');
            let reg = document.querySelector('.reg-box');
            let total = document.querySelector('.transtion-box');
            let target = document.querySelector('.transferToReg');
            let title = document.querySelector('.title');
            let subTitle = document.querySelector('.subTitle');
            transfer.innerText === '注册'
                ? (() => {
                    target.style.left = 0;
                    total.style.left = 260 + 'px';
                    transfer.innerText = '登录';
                    title.innerText = '已有帐号？';
                    subTitle.innerText = '有帐号就登录吧，好久不见了！';
                    setTimeout(() => {
                        login.style.display = 'none';
                        reg.style.display = 'flex';
                    }, 300);
                })()
                : (() => {
                    target.style.left = 640 + 'px';
                    total.style.left = 0;
                    transfer.innerText = '注册';
                    title.innerText = '还未注册？';
                    subTitle.innerText = '立即注册，就可以使用更多的功能了！';
                    setTimeout(() => {
                        login.style.display = 'flex';
                        reg.style.display = 'none';
                    }, 300);
                })();
        });

    }
}

