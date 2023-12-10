export function cheackUser(stringuser)
{
    if(stringuser.length<3)
    return(false)
    else
    return(true)
}
export function cheackPassword(stringPassword)
{
    if(stringPassword.length<5)
    return(false)
    else
    return(true)
}
