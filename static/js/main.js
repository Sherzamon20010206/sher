
function client_data() {
    name = document.getElementById(`name`).value
    email=document.getElementById(`email`).value
    subject=document.getElementById(`subject`).value
    message=document.getElementById(`message`).value
    console.log(name,email,subject,message)
    var url = ``
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({
            'name' : name,
            'email':email,
            'subject':subject,
            'message':message,
        })
    })
        .then((response) => {
            response.json().then((data) => {
                data = data['data']
                console.log(data)
                document.getElementById("javob").innerHTML = `<p>Xabaringiz uchun rahmat !</p>`
                // html = ``
                // for(var i=0; i<data.length;i++){
                //     html+=`<a style="color: red; background-color: yellow" href="/course/${data[i].slug}">
                //     ${data[i].name} </a>`
                //}
                // html+=`</ul>`
                // document.getElementById('course_result').innerHTML = html
            })

        }

        )}
// }
// function Registered_students(kurs_name) {
//     student_name = document.getElementById(`student_name`).value
//     student_phone = document.getElementById(`student_phone`).value
//     var url = `/register_student/`
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-CSRFToken': csrftoken,
//         },
//         body: JSON.stringify({
//             'kurs_name' : kurs_name,
//             'student_name':student_name,
//             'student_phone':student_phone
//         })
//     })
//         .then((response) => {
//             response.json().then((data) => {
//                 document.getElementById('kurs_register').innerHTML = `<p>Arizangiz muaffaqiyatli qabul qilindi siz bilan tez orada bog'lanamiz</p>`
//             })
//
//         })
// }