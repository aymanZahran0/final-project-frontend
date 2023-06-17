function callPhp() {

    fetch("C:\Users\falcon\Desktop\project\final project\GP\app\Http\Controllers\Api\HotelController.php",{
        method:'POST',
        credentials :'same-origin',
        body : JSON.stringify(data),
        headers :{'content-type':'application/json'},
    }).then(response=>response.json()).then(data=>{
        console.loge(data);
    }).catch(error=>{
        console.log(error);
    });
}