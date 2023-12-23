// โจทย์ : ให้สร้างฟังก์ชั่นเพื่อ validate(ตรวจสอบ) ค่าที่ submit จาก form
// 1. ทุก input ต้องไม่เป็นค่าว่างหรือ ใส่ space มาล้วนๆ
// 2. username ความยาวต้องมากกว่า 3 ตัวอักษร
//      - ตัด space หน้า-หลัง
//      (option) - และไม่มี space คั่นกลาง
//      - ห้ามนำหน้าด้วยตัวเลข
// 3. password ความยาวต้องมากกว่า 4 ตัวอักษร
//      (option) - ต้องมีทั้งตัวเลขและตัวอักษร
// ถ้า validate ไม่ผ่านให้เปลี่ยน input เป็นสีแดง
// ถ้า validate ผ่านให้ไปที่ https://www.example.com
// หรือ
// ถ้า validate ผ่านให้ไปทำการ login โดยตรวจสอบ username, password
// กับ array แบบที่เคยทำตอนโจทย์ javascript แล้วแจ้ง login successful

const loginForm = document.querySelector(".login-form");
const Validate_Uname = document.querySelector(".Validate_Uname");
const Validate_Pass = document.querySelector(".Validate_Pass");

const hdlLogin = e => {
    e.preventDefault();
    let allInput = loginForm.elements
    const usernameInput = document.querySelector("#username");
    const validateUsername = usernameInput.value.trim();
    if (
        validateUsername.length > 3 &&
        !/^\d/.test(validateUsername) &&
        !/\s/.test(validateUsername)
    ) {
        Validate_Uname.textContent = "";
        usernameInput.style.borderColor = "initial";
    } else {
        usernameInput.style.borderColor = "red";
        Validate_Uname.textContent = 'Username ความยาวต้องมากกว่า 3 ตัวอักษร หรือ อย่าspaceคั่นกลาง';
        Validate_Uname.style.color = 'red';
        return;
    }
    
    // Validate password
    const passwordInput = document.querySelector("#password");
    const validatePassword = passwordInput.value.trim();
    if (validatePassword.length > 4) {
        Validate_Pass.textContent = "";
        passwordInput.style.borderColor = "initial";
    } else {
        passwordInput.style.borderColor = "red";
        Validate_Pass.textContent = 'Password ความยาวต้องมากกว่า 4 ตัวอักษร และ ต้องมีทั้งตัวเลขและตัวอักษร';
        Validate_Pass.style.color = 'red';
        return;
    }
    
    // Validate select
    const selectInput = document.querySelector("#role");
    if (selectInput.value !== "") {
        selectInput.style.borderColor = "initial";
    } else {
        selectInput.style.borderColor = "red";
        return;
    }
    if (validateLogin(validateUsername, validatePassword)) {
        alert('Login successful');
        window.location.href = "https://www.example.com";
    } else {
        alert(`ไม่พบผู้ใช้งาน`);
    }
}



function validateLogin(username, password) {
    const users = [
        { username: 'ozxa', password: '3333xz' },
    ];
    return users.some(user => user.username === username && user.password === password);
}


loginForm.addEventListener('submit', hdlLogin);




document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
    }
  });

    //จีรศักดิ์ พิมพ์คำไหล