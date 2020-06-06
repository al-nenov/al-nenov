let userlist = '';


export function setUserStorage() {
    if (!localStorage.users) {
        localStorage.users = '[]';
    }
    userlist = JSON.parse(localStorage.users);  
}

export async function login(username, password) {
    try {
        if(!userExist(username)) {
            throw new Error('User not Found')
        }
        
        if(!passwordCheck(username, password)) {
            throw new Error('Password incorect')
        }
        
    } catch(err) {
        return {
            status: 'Failed',
            message: err.message
        }
    }

    const user = userlist.find(user => user.username.toLowerCase() === username.toLowerCase());
    localStorage.user = JSON.stringify(user);

    return user;

}


export function logout() {
    localStorage.removeItem('user');
    if (!localStorage.user) {
        return 'User logged out';
    }

}

function getAll() {

}

function getById(id) {

}

export function registerUser(username, password) {
    if (userExist(username)) {
        return "Username taken"
    }
    userlist.push({
        'id': userlist.length,
        'username' : (username).toString(),
        'password' : (password).toString()
    })
    localStorage.users = JSON.stringify(userlist);

    return true;
}

function deleteUser() {

}

function userExist(username) {
    console.log(userlist)
    return userlist.some(user => user.username.toLowerCase() === username.toLowerCase())
}

function passwordCheck(username, password) {
    console.log(userlist)
    const user = userlist.find(user => user.username.toLowerCase() === username.toLowerCase());
    return user.password === (password).toString();
}
