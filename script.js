const container=document.querySelector('.container')
const LoginLink=document.querySelector('.SignIpLink')
const RegisterLink=document.querySelector('.SignUpLink')
RegisterLink.addEventListener('click',()=>{
    container.classList.add('active');
})