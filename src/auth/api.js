export const setAuthToken =( user, seller) => {
    console.log(user)
    const currsntUser = {
        email: user.email,
        role: seller
    }
    fetch(`http://localhost:5000/user/`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currsntUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('token', data.token)
        })
}
