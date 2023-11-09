// Khi nội dung file html đã được hiển thị trên browser thì sẽ kích hoạt
$(document).ready(function () {
    var role = "";

    // Đăng ký sự kiện click cho thẻ tag được chỉ định bên HTML
    $("#btn-login").click(function () {
        // .val() : Lấy giá trị của thẻ input được chỉ định
        var email = $("#email").val()
        var password = $("#password").val()

        // Xuất giá trị ra trên tab console trên trình duyệt
        console.log("email : ", email, " password : ", password);

        //ajax : Dùng để call ngầm API mà không cần trình duyệt
        //axios, fetch
        //data : chỉ có khi tham số truyền ngầm
        $.ajax({
            url: "http://localhost:8080/login/signin",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                email: email,
                password: password
            }),
            
        }).done(function (data) {
    
            console.log("data is  " + data)
            if (data && data.statusCode == 200) {
                if (data.message == "ROLE_ADMIN") {
                    localStorage.setItem("role", "ROLE_ADMIN")

                    $(".btn-manage").show();
                    window.location.replace(
                        "http://192.168.1.56:5500/index.html"
                    );
                } else if (data.message == "ROLE_USER") {
                    localStorage.setItem("role", "ROLE_USER")
                    window.location.replace(
                        "http://192.168.1.56:5500/index.html"); 
                } else {
                    alert("Unknown role");

                }
            }
            else if ( data.statusCode != 200) {
                alert("sai email hoặc mật khẩu")
            }
            console.log("server tra ve ", data)
        })
    })

    //xử lý đăng ký
    $("#btn-sign-up").click(function () {
        // .val() : Lấy giá trị của thẻ input được chỉ định
        var username = $("#user-signup").val()
        var password = $("#pass-signup").val()
        var repassword = $("#re-pass-signup").val()
        var email = $("#email-signup").val()

        // Xuất giá trị ra trên tab console trên trình duyệt
        console.log("username : ", username, " password : ", password,
            "repassword: ", repassword, "email: ", email);

        //ajax : Dùng để call ngầm API mà không cần trình duyệt
        //axios, fetch
        //data : chỉ có khi tham số truyền ngầm
        $.ajax({
            url: "http://localhost:3300/login/signup",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({

                userName: username,
                password: password,
                email: email
            })

        }).done(function (data) {
            console.log("server tra ve ", data)
        })
    })
})