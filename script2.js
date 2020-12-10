alert('안녕하세요');
var tombolSubmit = document.getElementById('submit');
tombolSubmit.addEventListener("click", submitdata);

function submitdata() {
    var nama = document.getElementById("name").value;
    var umur = document.getElementById("age").value;
    alert(nama + " 안녕")
    if (umur == 19) {
        alert('우리 나이가 같아요, 말 놓을까요!?')
    } else {
        alert('우리 나이가 안 같은데, 우리 말 나도 돼죠?')
    }
}