console.log('hi')
const request = new XMLHttpRequest()
request.open('get','/friend.json')
request.onreadystatechange=()=>{
    if (request.readyState == 4 && request.status == 200){
        console.log(request.response)
    }
}
request.send()