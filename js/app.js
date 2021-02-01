const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/'


// If data has been fetched before use localStorage
if (localStorage.getItem('profileData')) {
    profileData = JSON.parse(localStorage.getItem('profileData'))
    fillInProfile(profileData)
} else {
    window.addEventListener('load', async (event) => {
        const dataset = await fetch (`${url}/squads/1/teams/2/members/9`)
        const json = await dataset.json()
        localStorage.setItem('profileData', JSON.stringify(json))
        fillInProfile(json)
    
      });
    
}


                
function fillInProfile (data) {
    //Receiving data declarations
    const githubHandle = data.githubHandle
    const firstname = data.name;
    const surname = data.surname;
    const mugshot = data.mugshot
    const proffesion = data.proffesion;
    const email = data.email;
    const geo = data.location

    // document declarations
    const name = document.querySelector('.flex h2')
    const image = document.querySelector('.logo img')
    const github = document.querySelector('.github')
    const jobtitle = document.querySelector('.flex p')
    const mail = document.querySelector('.email')
    const location = document.querySelector('.location')


    // Fill in the data from the API
    name.textContent = `${firstname} ${surname}`
    image.src = mugshot
    github.href = `https://github.com${githubHandle}`
    mail.href = `mailto:${email}`
    jobtitle.textContent = proffesion
    location.textContent = geo;

}
