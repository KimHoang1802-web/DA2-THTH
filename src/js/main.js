// Xử lý showSection
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}
// ====================QUẢN LÝ BẾN XE==================//
// XỬ LÝ NÚT THÊM VÀO BẢNG
document.addEventListener("DOMContentLoaded", function () {
    const btnThemBenXe = document.querySelector(".ben-xe-them");
    const popupForm = document.getElementById("popup-form");
    const btnDongPopup = document.getElementById("dong-popup");
    const btnLuuBenXe = document.getElementById("luu-ben-xe");
    const tbody = document.getElementById("ben-xe-body");

    // Đếm ID bến xe mới
    let idCounter = 2; 

    // Hiển thị popup khi nhấn "Thêm bến xe mới"
    btnThemBenXe.addEventListener("click", function () {
        popupForm.classList.remove("hidden");
    });

    // Ẩn popup khi nhấn "Hủy"
    btnDongPopup.addEventListener("click", function () {
        popupForm.classList.add("hidden");
    });

    // Lưu dữ liệu vào bảng khi nhấn "Lưu"
    btnLuuBenXe.addEventListener("click", function () {
        const tenBenXe = document.getElementById("ten-ben-xe").value.trim();
        const diaChi = document.getElementById("dia-chi").value.trim();
        const soDienThoai = document.getElementById("so-dien-thoai").value.trim();

        // Kiểm tra nếu thiếu dữ liệu
        if (!tenBenXe || !diaChi || !soDienThoai) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        // Tạo ID bến xe mới
        const newId = `BX0000${idCounter++}`;

        // Thêm hàng mới vào bảng
        const newRow = document.createElement("tr");
        newRow.classList.add("bg-white", "border-b", "border-gray-200");
        newRow.innerHTML = `
            <th class="px-6 py-4">${newId}</th>
            <td class="px-6 py-4">${tenBenXe}</td>
            <td class="px-6 py-4">${diaChi}</td>
            <td class="px-6 py-4">${soDienThoai}</td>
            <td class="px-6 py-4">
                <button class="ben-xe-sua"><i class="fa fa-user-edit"></i></button>
                <button class="ben-xe-xoa"><i class="fa fa-user-minus"></i></button>
            </td>
        `;
        // Thêm vào bảng
        tbody.appendChild(newRow); 

        // Đóng popup và reset form
        popupForm.classList.add("hidden");
        document.getElementById("ten-ben-xe").value = "";
        document.getElementById("dia-chi").value = "";
        document.getElementById("so-dien-thoai").value = "";
    });

    // Xử lý xoá bến xe 
    tbody.addEventListener("click", function (event) {
        if (event.target.classList.contains("ben-xe-xoa")) {
            const row = event.target.closest("tr");
            if (confirm("Bạn có chắc chắn muốn xoá bến xe này?")) {
                row.remove();
            }
        }
    });
});
// END XỬ LÝ NÚT THÊM BẾN XE MỚI

// XỬ LÝ NÚT TÌM KIẾM BẾN XE
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("default-search");
    const tbody = document.getElementById("ben-xe-body");

    // Xử lý tìm kiếm
    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.trim().toLowerCase();
        const rows = tbody.querySelectorAll("tr");

        rows.forEach(row => {
            const tenBenXe = row.children[1].textContent.toLowerCase();
            if (tenBenXe.includes(searchValue)) {
                row.style.display = ""; // Hiển thị dòng phù hợp
            } else {
                row.style.display = "none"; // Ẩn dòng không phù hợp
            }
        });
    });
});
// END XỬ LÝ NÚT TÌM KIẾM BẾN XE

// XỬ LÝ NÚT SỬA BẾN XE
document.addEventListener("DOMContentLoaded", function () {
    const tbody = document.getElementById("ben-xe-body");

    // Popup sửa bến xe
    const popupSuaBenXe = document.getElementById("popup-sua-ben-xe");
    const btnDongSuaPopup = document.getElementById("dong-sua-popup");
    const btnLuuSuaBenXe = document.getElementById("luu-sua-ben-xe");

    let currentRow = null; // Lưu trữ dòng đang sửa

    // Xử lý nút "Sửa"
    tbody.addEventListener("click", function (event) {
        if (event.target.classList.contains("ben-xe-sua")) {
            currentRow = event.target.closest("tr"); // Lấy dòng cha của nút bấm

            // Lấy thông tin hiện tại
            const id = currentRow.children[0].textContent.trim();
            const ten = currentRow.children[1].textContent.trim();
            const diaChi = currentRow.children[2].textContent.trim();
            const soDienThoai = currentRow.children[3].textContent.trim();

            // Đưa dữ liệu vào popup sửa
            document.getElementById("sua-id-ben-xe").value = id;
            document.getElementById("sua-ten-ben-xe").value = ten;
            document.getElementById("sua-dia-chi").value = diaChi;
            document.getElementById("sua-so-dien-thoai").value = soDienThoai;

            // Hiển thị popup sửa
            popupSuaBenXe.classList.remove("hidden");
        }
    });

    // Xử lý lưu chỉnh sửa
    btnLuuSuaBenXe.addEventListener("click", function () {
        if (currentRow) {
            currentRow.children[1].textContent = document.getElementById("sua-ten-ben-xe").value.trim();
            currentRow.children[2].textContent = document.getElementById("sua-dia-chi").value.trim();
            currentRow.children[3].textContent = document.getElementById("sua-so-dien-thoai").value.trim();
        }

        // Đóng popup
        popupSuaBenXe.classList.add("hidden");
    });

    // Ẩn popup khi nhấn "Hủy"
    btnDongSuaPopup.addEventListener("click", function () {
        popupSuaBenXe.classList.add("hidden");
    });
});
// END XỬ LÝ NÚT SỬA BẾN XE 
//===============================================================//
// ==================================== QUẢN LÝ XE =============//

//===============================================================//
//==================QUẢN LÝ NHÂN VIÊN===============//

// XỬ LÝ NÚT THÊM VÀO BẢNG NHÂN VIÊN
document.addEventListener("DOMContentLoaded", function () {
    const btnThemNhanVien = document.querySelector(".nhan-vien-them");
    const popupForm_NV = document.getElementById("popup-form-NV");
    const btnDongPopup_NV = document.getElementById("dong-nhan-vien");
    const btnLuu_NV = document.getElementById("luu-nhan-vien");
    const tbody_NV = document.getElementById("tbody_NV");

    let idCounter_NV = 2;
    
    btnThemNhanVien.addEventListener("click", function () {
        popupForm_NV.classList.remove("hidden");
    });

    btnDongPopup_NV.addEventListener("click", function () {
        popupForm_NV.classList.add("hidden");
    });

    // Lưu nhân viên
    btnLuu_NV.addEventListener("click", function () {
        const tenNhanVien = document.getElementById("ten-nhan-vien").value.trim();
        const gioiTinh_NV = document.getElementById("gioi-tinh-nhan-vien").value.trim();
        const loaiNhanVien = document.getElementById("loai-nhan-vien").value.trim();
        const CCCD_NV = document.getElementById("CCCD-NV").value.trim();
        const SDT_NV = document.getElementById("so-dien-thoai-NV").value.trim();
        const diaChi_NV = document.getElementById("dia-chi-NV").value.trim();

        if (!tenNhanVien || !gioiTinh_NV || !loaiNhanVien || !CCCD_NV || !SDT_NV || !diaChi_NV) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        const newId_NV = `NV0000000${idCounter_NV++}`;

        const newRow_NV = document.createElement("tr");
        newRow_NV.classList.add("bg-white", "border-b", "border-gray-200");
        newRow_NV.innerHTML = `
            <th class="px-6 py-4">${newId_NV}</th>
            <td class="px-6 py-4">${tenNhanVien}</td>
            <td class="px-6 py-4">${gioiTinh_NV}</td>
            <td class="px-6 py-4">${loaiNhanVien}</td>
            <td class="px-6 py-4">${CCCD_NV}</td>
            <td class="px-6 py-4">${SDT_NV}</td>
            <td class="px-6 py-4">${diaChi_NV}</td>
            <td class="px-6 py-4">
                <div class="flex">
                                            <button class="nhan-vien-sua"><i class="fa fa-user-edit"></i></button>
                                            <button class="nhan-vien-xoa"><i class="fa fa-user-minus"></i></button>
                                        </div>
            </td>
        `;
        
        tbody_NV.appendChild(newRow_NV);

        // Ẩn popup
        // popupForm_NV.classList.add("hidden");

        // Reset form
        document.getElementById("ten-nhan-vien").value = "";
        document.getElementById("CCCD-NV").value = "";
        document.getElementById("so-dien-thoai-NV").value = "";
        document.getElementById("dia-chi-NV").value = "";
        document.getElementById("gioi-tinh-nhan-vien").selectedIndex = 0;
        document.getElementById("loai-nhan-vien").selectedIndex = 0;
    });

    // Xóa nhân viên
    tbody_NV.addEventListener("click", function (event) {
        if (event.target.closest(".nhan-vien-xoa")) {
            const row = event.target.closest("tr");
            if (confirm("Bạn có chắc chắn muốn xoá nhân viên này?")) {
                row.remove();
            }
        }
    });
});
//  END XỬ LÝ NÚT THÊM VÀO BẢNG NHÂN VIÊN

// XỬ LÝ NÚT TÌM KIẾM NHÂN VIÊN
document.addEventListener("DOMContentLoaded", function(){
    const searchInput_NV = document.getElementById("default-search-NV");
    const tbody_NV = document.getElementById("tbody_NV");

    searchInput_NV.addEventListener("input", function(){
        const searchValue_NV = searchInput_NV.value.trim().toLowerCase();
        const rows_NV = tbody_NV.querySelectorAll("tr");

        rows_NV.forEach(row => {
            const tenNhanVien = row.children[1].textContent.toLocaleLowerCase();
            if(tenNhanVien.includes(searchValue_NV)){
                row.style.display = "";
            }
            else{
                row.style.display = "none";
            }
        })
    })
});
// END XỬ LÝ NÚT TÌM KIẾM NHÂN VIÊN
//===============================================================//
// ==================QUẢN LÝ KHÁCH HÀNG===============//
// XỬ LÝ NÚT XOÁ KHÁCH HÀNG
document.addEventListener("DOMContentLoaded", function(){
    const tbodyKH = document.getElementById("khach-hang-body");

    tbodyKH.addEventListener("click", function(event){
        if(event.target.classList.contains("khach-hang-xoa")){
            const row = event.target.closest("tr");
            if(confirm("Bạn có chắc muốn xoá Khách Hàng này không?")){
                row.remove();
            }
        }
    })
});


// 
function showSection_2(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}
// XỬ LÝ NÚT TÌM KIẾM LỊCH TRÌNH
document.getElementById("searchBtn").addEventListener("click", function() {
    const startPoint = document.getElementById("startPoint").value.trim();
    const endPoint = document.getElementById("endPoint").value.trim();
    const resultSection = document.getElementById("result");
    const tripDetails = document.getElementById("tripDetails");
    const tableBody = document.getElementById("tableBody");

    const trips = [
        {
            id: "CX1234",
            route: "Cần Thơ - TP.Hồ Chí Minh",
            start: "Cần Thơ",
            end: "TP. Hồ Chí Minh",
            departure: "08:00",
            arrival: "10:00",
            type: "Ghế ngồi",
            startLocation: "Bến xe Cần Thơ",
            endLocation: "Bến xe Miền Tây",
            stopLocation: "Tiền Giang",
            availableSeats: 20,
            bookedSeats: ["A1", "A2", "B5"],
            ticketPrice: "165,000 VND",
            paymentMethod: "Tiền mặt, Chuyển khoản",
            driverName: "Nguyễn Văn A",
            driverPhone: "0987654321",
            assistantName: "Trần Văn B"
        }
    ];

    if (startPoint === "" || endPoint === "") {
        alert("Vui lòng nhập cả điểm đi và điểm đến!");
        return;
    }

    // Tìm chuyến xe phù hợp
    const filteredTrips = trips.filter(trip => trip.start === startPoint && trip.end === endPoint);

    // Hiển thị kết quả
    tableBody.innerHTML = ""; // Xóa dữ liệu cũ

    if (filteredTrips.length > 0) {
        const trip = filteredTrips[0];

        // Thêm dữ liệu vào bảng
        const row = `
            <tr>
                <td class="border p-2">${trip.id}</td>
                <td class="border p-2">${trip.route}</td>
                <td class="border p-2">${trip.departure}</td>
                <td class="border p-2">${trip.arrival}</td>
                <td class="border p-2">${trip.type}</td>
            </tr>
        `;
        tableBody.innerHTML += row;

        // Điền dữ liệu chi tiết
        document.getElementById("startLocation").textContent = trip.startLocation;
        document.getElementById("endLocation").textContent = trip.endLocation;
        document.getElementById("stopLocation").textContent = trip.stopLocation;
        document.getElementById("availableSeats").textContent = trip.availableSeats;
        document.getElementById("bookedSeats").textContent = trip.bookedSeats.join(", ");
        document.getElementById("ticketPrice").textContent = trip.ticketPrice;
        document.getElementById("paymentMethod").textContent = trip.paymentMethod;
        document.getElementById("driverName").textContent = trip.driverName;
        document.getElementById("driverPhone").textContent = trip.driverPhone;
        document.getElementById("assistantName").textContent = trip.assistantName;

        resultSection.classList.remove("hidden");
        tripDetails.classList.remove("hidden");
    } else {
        alert("Không tìm thấy chuyến xe nào phù hợp!");
        resultSection.classList.add("hidden");
    }
});

