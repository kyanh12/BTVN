// BT2
// Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm tháng

document.getElementById("btnTinh").onclick = function(){
    var t = document.getElementById("txtThang").value;
    var n = document.getElementById("txtNam").value;

    if((t == 1) || (t==3) || (t==5) || (t == 7) || (t == 8) || (t == 10) || (t ==12)){
        ketQua = " Tháng có 31 ngày";
    }else if((t == 4) || (t==6) || (t==9) || (t == 11)){
        ketQua = " Tháng có 30 ngày";
    }else if((t==2 && n % 4 == 0)){
        ketQua = " tháng có 29 ngày";
    }else{
        ketQua =" tháng có 28 ngày ";
    }
    document.getElementById("footerTinh").innerHTML=ketQua;
}

// BT3
// Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó

document.getElementById("btnDoc").onclick = function(){
    var n = document.getElementById("txtNhapSo").value;
    var donvi = n % 10;
    var chuc = Math.floor(n % 100 / 10);
    var tram = Math.floor (n / 100);

    
    if ((n<100 || n>999)){
        ketQua = " Không Biết ĐọC đâu";
    } else if( tram === 1 ){
        ketQua = "một ";
    } else if ( tram == 2){
        ketQua =" Hai";
    }else if( tram == 3 ){
        ketQua = "ba";
    } else if ( tram == 4){
        ketQua =" bồn";
    }else if( tram == 5 ){
        ketQua = "năm";
    } else if ( tram == 6){
        ketQua =" sáu";
    }else if( tram == 7 ){
        ketQua = "bảy";
    } else if ( tram == 8){
        ketQua =" tám";
    }else if( tram == 9 ){
        ketQua = "chín";
    } else{
        ketQua =" trăm";
    }


    if( chuc == 1 ){
        ketQua1 = "một ";
    } else if ( chuc == 2){
        ketQua1 =" Hai";
    }else if( chuc == 3 ){
        ketQua1 = "ba";
    } else if ( chuc == 4){
        ketQua1 =" bồn";
    }else if( chuc == 5 ){
        ketQua1 = "năm";
    } else if ( chuc == 6){
        ketQua1 =" sáu";
    }else if( chuc == 7 ){
        ketQua1 = "bảy";
    } else if ( chuc == 8){
        ketQua1 =" tám";
    }else if( chuc == 9 ){
        ketQua1 = "chín";
    } else{
        ketQua1 =" chục";
    }

     if( donvi == 1 ){
        ketQua2 = "một ";
    } else if ( donvi == 2){
        ketQua2 =" Hai";
    }else if( donvi == 3 ){
        ketQua2 = "ba";
    } else if ( donvi == 4){
        ketQua2 =" bồn";
    }else if( donvi == 5 ){
        ketQua2 = "năm";
    } else if ( donvi == 6){
        ketQua2 =" sáu";
    }else if( donvi == 7 ){
        ketQua2 = "bảy";
    } else if ( donvi == 8){
        ketQua2 =" tám";
    }else if( donvi == 9 ){
        ketQua2 = "chín";
    } else{
        ketQua2 =" donvi";
    }
   thongbao = ketQua + " trăm " + ketQua1 + " mươi " + ketQua2 ;
    document.getElementById("footerDoc").innerHTML=thongbao;
}


// BT1
// document.getElementById("btnNgay").onclick = function(){
//     var hienTai =  new Date();
//     var tomorow = hienTai.getDate() ;
//     var month = hienTai.getMonth() + 1
//     var year = hienTai.getFullYear();
    
//     var tomorow1 = hienTai.getDate() +1;
//     ketQua = "Ngày Tiếp Theo là" + tomorow1 + month + year;
//     document.getElementById("footerNgay").innerHTML=ketQua;
    
// }


function findNextDay(day, month, year) {
    let nextDate;
    let nextMonth;
    let nextYear;
    const namNhuan = year % 4 === 0;
    const cuoiNam = month === 12;
    const validate31Days = day < 1 || day > 31;
    const validate30Days = day < 1 || day > 30;
    const validateFeb = day < 1 || day > (namNhuan ? 29 : 28);
    const validateInput =
      Number.isInteger(day) && Number.isInteger(month) && Number.isInteger(year);
    function ngayBinhThuong() {
      nextDate = day + 1;
      nextMonth = month;
      nextYear = year;
    }
    function ngayLoi() {
      nextDate = 0;
      nextMonth = 0;
      nextYear = 0;
    }
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        if (day === 31) {
          nextDate = 1;
          nextMonth = cuoiNam ? 1 : month + 1;
          nextYear = cuoiNam ? year + 1 : year;
        } else if (validate31Days) ngayLoi();
        else ngayBinhThuong();
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        if (day === 30) {
          nextDate = 1;
          nextMonth = month + 1;
          nextYear = year;
        } else if (validate30Days) ngayLoi();
        else ngayBinhThuong();
        break;
      case 2:
        if (day === 28) {
          nextDate = namNhuan ? 29 : 1;
          nextMonth = namNhuan ? month : month + 1;
          nextYear = year;
        } else if (day === 29) {
          nextDate = namNhuan ? 1 : 0;
          nextMonth = namNhuan ? month + 1 : 0;
          nextYear = year;
        } else if (validateFeb) ngayLoi();
        else ngayBinhThuong();
        break;
      default:
        ngayLoi();
        break;
    }
    if (nextDate && nextMonth && nextYear && validateInput)
      document.getElementById("footerNgay").innerHTML= "ngày tiếp theo là"+ nextDate + nextMonth + nextYear;
    else document.getElementById("footerNgay").innerHTML="khong dc"+ FAIL_DAY;
}

document.getElementById("btnNgay").onclick = function(){
    var ngay = document.getElementById("txtNgay").value*1;
    var thang = document.getElementById("txtThang").value*1;
    var nam = document.getElementById("txtNam").value*1;
    
    // 

}