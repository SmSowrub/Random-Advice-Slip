const randomAdviceSlip =async ()=>{

    const URL =`https://api.adviceslip.com/advice`
    const res = await fetch(URL)
    const data = await res.json();
    displayRandomSlip(data.slip);
    
}

const displayRandomSlip= randomData =>{
    console.log(randomData);
    const random_Id=document.getElementById('randomId');
    random_Id.innerHTML=`#${randomData.id}`
    const random_text =document.getElementById('randomText');
    random_text.innerText=`${randomData.advice}`
}

randomAdviceSlip();