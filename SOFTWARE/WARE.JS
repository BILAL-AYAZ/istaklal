
//                 SIGN IN PROCESS

const password = document.querySelector("#password");
const userName = document.querySelector("#user-name");
const signInBtn = document.querySelector("#signin-btn");
const loading = document.querySelector(".loading");
const signInWindow = document.querySelector(".sign-in")
const pageBlur = document.querySelector(".blur")
const itemSelected = document.querySelectorAll("#selected")

//   REMOVING BLUR AND LOADING PAGE

const inv_visible = () => {
    pageBlur.classList.remove("blur")
    loading.classList.add("hide3")
}
//                COMP GENERATION TIME
const randomTime = () => {
    let times = [2000, 3000, 1000, 5000, 6500, 500, 1100, 1900, 2200]
    let random = Math.floor(Math.random() * 9)
    return times[random];
}
signInBtn.addEventListener("click", () => {
    if (password.value === "MY FIRST SOFT WARE" && userName.value === "SAJID AYAZ") {
        signInWindow.classList.add("hide3")
        loading.classList.remove("hide3")
        //            THEN THE INVOICE BECOME VISIBLE.
        setTimeout(inv_visible, 10000)
    }
})

//                     SHOW PASSWORD TOGGLE BUTTON

let showPassCond = true;

const showPassword = document.querySelector("#show-pass");
showPassword.addEventListener("click", () => {
    if (showPassCond) {
        password.type = "text";
        showPassCond = false;
        showPassword.style.color = "green"
    } else {
        password.type = "password"
        showPassCond = true;
        showPassword.style.color = "black"
    }
})

//                    MAIN INVOICE PROGRAMING
const prices = document.querySelectorAll("#price");
itemSelected[0].addEventListener("change", () => {
    if (itemSelected[0].value === "ATTA 10KG") {
        prices[0].innerText = 1480;
    } else if (itemSelected[0].value === "ATTA 40KG") {
        prices[0].innerText = 5840;
    } else if (itemSelected[0].value === "ATTA LOOSE") {
        prices[0].innerText = 160;
    } else if (itemSelected[0].value === "SUGAR 50KG BAG") {
        prices[0].innerText = 6450;
    } else if (itemSelected[0].value === "SUGAR LOOSE") {
        prices[0].innerText = 130;
    } else if (itemSelected[0].value === "OIL 900ML POUCH") {
        prices[0].innerText = 370;
    } else if (itemSelected[0].value === "RIVAYAT OIL 1LTR POUCH") {
        prices[0].innerText = 570;
    } else if (itemSelected[0].value === "GHEE 1KG POUCH") {
        prices[0].innerText = 470;
    } else if (itemSelected[0].value === "RIVAYAT GHEE 1KG POUCH") {
        prices[0].innerText = 570;
    } else if (itemSelected[0].value === "DALL MONG") {
        prices[0].innerText = 230;
    } else if (itemSelected[0].value === "DALL MASOOR") {
        prices[0].innerText = 260;
    } else if (itemSelected[0].value === "DALL CHANA") {
        prices[0].innerText = 290;
    } else if (itemSelected[0].value === "DALL MASH") {
        prices[0].innerText = 450;
    } else if (itemSelected[0].value === "SABAT MASOOR") {
        prices[0].innerText = 240;
    } else if (itemSelected[0].value === "WHITE CHANA") {
        prices[0].innerText = 290;
    } else if (itemSelected[0].value === "BLACK CHANA") {
        prices[0].innerText = 260;
    } else if (itemSelected[0].value === "SUPER CHAWAL") {
        prices[0].innerText = 350;
    } else if (itemSelected[0].value === "SELA CHAWAL") {
        prices[0].innerText = 360;
    } else if (itemSelected[0].value === "PONIA CHAWAL") {
        prices[0].innerText = 280;
    } else if (itemSelected[0].value === "TOTA CHAWAL") {
        prices[0].innerText = 130;
    }
})
itemSelected[1].addEventListener("change", () => {
    if (itemSelected[1].value === "ATTA 10KG") {
        prices[1].innerText = 1480;
    } else if (itemSelected[1].value === "ATTA 40KG") {
        prices[1].innerText = 5840;
    } else if (itemSelected[1].value === "ATTA LOOSE") {
        prices[1].innerText = 160;
    } else if (itemSelected[1].value === "SUGAR 50KG BAG") {
        prices[1].innerText = 6450;
    } else if (itemSelected[1].value === "SUGAR LOOSE") {
        prices[1].innerText = 130;
    } else if (itemSelected[1].value === "OIL 900ML POUCH") {
        prices[1].innerText = 370;
    } else if (itemSelected[1].value === "RIVAYAT OIL 1LTR POUCH") {
        prices[1].innerText = 570;
    } else if (itemSelected[1].value === "GHEE 1KG POUCH") {
        prices[1].innerText = 470;
    } else if (itemSelected[1].value === "RIVAYAT GHEE 1KG POUCH") {
        prices[1].innerText = 570;
    } else if (itemSelected[1].value === "DALL MONG") {
        prices[1].innerText = 230;
    } else if (itemSelected[1].value === "DALL MASOOR") {
        prices[1].innerText = 260;
    } else if (itemSelected[1].value === "DALL CHANA") {
        prices[1].innerText = 290;
    } else if (itemSelected[1].value === "DALL MASH") {
        prices[1].innerText = 450;
    } else if (itemSelected[1].value === "SABAT MASOOR") {
        prices[1].innerText = 240;
    } else if (itemSelected[1].value === "WHITE CHANA") {
        prices[1].innerText = 290;
    } else if (itemSelected[1].value === "BLACK CHANA") {
        prices[1].innerText = 260;
    } else if (itemSelected[1].value === "SUPER CHAWAL") {
        prices[1].innerText = 350;
    } else if (itemSelected[1].value === "SELA CHAWAL") {
        prices[1].innerText = 360;
    } else if (itemSelected[1].value === "PONIA CHAWAL") {
        prices[1].innerText = 280;
    } else if (itemSelected[1].value === "TOTA CHAWAL") {
        prices[1].innerText = 130;
    }
})
itemSelected[2].addEventListener("change", () => {
    if (itemSelected[2].value === "ATTA 10KG") {
        prices[2].innerText = 1480;
    } else if (itemSelected[2].value === "ATTA 40KG") {
        prices[1].innerText = 5840;
    } else if (itemSelected[2].value === "ATTA LOOSE") {
        prices[2].innerText = 160;
    } else if (itemSelected[2].value === "SUGAR 50KG BAG") {
        prices[2].innerText = 6450;
    } else if (itemSelected[2].value === "SUGAR LOOSE") {
        prices[2].innerText = 130;
    } else if (itemSelected[2].value === "OIL 900ML POUCH") {
        prices[2].innerText = 370;
    } else if (itemSelected[2].value === "RIVAYAT OIL 1LTR POUCH") {
        prices[2].innerText = 570;
    } else if (itemSelected[2].value === "GHEE 1KG POUCH") {
        prices[2].innerText = 470;
    } else if (itemSelected[2].value === "RIVAYAT GHEE 1KG POUCH") {
        prices[2].innerText = 570;
    } else if (itemSelected[2].value === "DALL MONG") {
        prices[2].innerText = 230;
    } else if (itemSelected[2].value === "DALL MASOOR") {
        prices[2].innerText = 260;
    } else if (itemSelected[2].value === "DALL CHANA") {
        prices[2].innerText = 290;
    } else if (itemSelected[2].value === "DALL MASH") {
        prices[2].innerText = 450;
    } else if (itemSelected[2].value === "SABAT MASOOR") {
        prices[2].innerText = 240;
    } else if (itemSelected[2].value === "WHITE CHANA") {
        prices[2].innerText = 290;
    } else if (itemSelected[2].value === "BLACK CHANA") {
        prices[2].innerText = 260;
    } else if (itemSelected[2].value === "SUPER CHAWAL") {
        prices[2].innerText = 350;
    } else if (itemSelected[2].value === "SELA CHAWAL") {
        prices[2].innerText = 360;
    } else if (itemSelected[2].value === "PONIA CHAWAL") {
        prices[2].innerText = 280;
    } else if (itemSelected[2].value === "TOTA CHAWAL") {
        prices[2].innerText = 130;
    }
})
itemSelected[3].addEventListener("change", () => {
    if (itemSelected[3].value === "ATTA 10KG") {
        prices[3].innerText = 1480;
    } else if (itemSelected[3].value === "ATTA 40KG") {
        prices[3].innerText = 5840;
    } else if (itemSelected[3].value === "ATTA LOOSE") {
        prices[3].innerText = 160;
    } else if (itemSelected[3].value === "SUGAR 50KG BAG") {
        prices[3].innerText = 6450;
    } else if (itemSelected[3].value === "SUGAR LOOSE") {
        prices[3].innerText = 130;
    } else if (itemSelected[3].value === "OIL 900ML POUCH") {
        prices[3].innerText = 370;
    } else if (itemSelected[3].value === "RIVAYAT OIL 1LTR POUCH") {
        prices[3].innerText = 570;
    } else if (itemSelected[3].value === "GHEE 1KG POUCH") {
        prices[3].innerText = 470;
    } else if (itemSelected[3].value === "RIVAYAT GHEE 1KG POUCH") {
        prices[3].innerText = 570;
    } else if (itemSelected[3].value === "DALL MONG") {
        prices[3].innerText = 230;
    } else if (itemSelected[3].value === "DALL MASOOR") {
        prices[3].innerText = 260;
    } else if (itemSelected[3].value === "DALL CHANA") {
        prices[3].innerText = 290;
    } else if (itemSelected[3].value === "DALL MASH") {
        prices[3].innerText = 450;
    } else if (itemSelected[3].value === "SABAT MASOOR") {
        prices[3].innerText = 240;
    } else if (itemSelected[3].value === "WHITE CHANA") {
        prices[3].innerText = 290;
    } else if (itemSelected[3].value === "BLACK CHANA") {
        prices[3].innerText = 260;
    } else if (itemSelected[3].value === "SUPER CHAWAL") {
        prices[3].innerText = 350;
    } else if (itemSelected[3].value === "SELA CHAWAL") {
        prices[3].innerText = 360;
    } else if (itemSelected[3].value === "PONIA CHAWAL") {
        prices[3].innerText = 280;
    } else if (itemSelected[3].value === "TOTA CHAWAL") {
        prices[3].innerText = 130;
    }
})
itemSelected[4].addEventListener("change", () => {
    if (itemSelected[4].value === "ATTA 10KG") {
        prices[4].innerText = 1480;
    } else if (itemSelected[4].value === "ATTA 40KG") {
        prices[4].innerText = 5840;
    } else if (itemSelected[4].value === "ATTA LOOSE") {
        prices[4].innerText = 160;
    } else if (itemSelected[4].value === "SUGAR 50KG BAG") {
        prices[4].innerText = 6450;
    } else if (itemSelected[4].value === "SUGAR LOOSE") {
        prices[4].innerText = 130;
    } else if (itemSelected[4].value === "OIL 900ML POUCH") {
        prices[4].innerText = 370;
    } else if (itemSelected[4].value === "RIVAYAT OIL 1LTR POUCH") {
        prices[4].innerText = 570;
    } else if (itemSelected[4].value === "GHEE 1KG POUCH") {
        prices[4].innerText = 470;
    } else if (itemSelected[4].value === "RIVAYAT GHEE 1KG POUCH") {
        prices[4].innerText = 570;
    } else if (itemSelected[4].value === "DALL MONG") {
        prices[4].innerText = 230;
    } else if (itemSelected[4].value === "DALL MASOOR") {
        prices[4].innerText = 260;
    } else if (itemSelected[4].value === "DALL CHANA") {
        prices[4].innerText = 290;
    } else if (itemSelected[4].value === "DALL MASH") {
        prices[4].innerText = 450;
    } else if (itemSelected[4].value === "SABAT MASOOR") {
        prices[4].innerText = 240;
    } else if (itemSelected[4].value === "WHITE CHANA") {
        prices[4].innerText = 290;
    } else if (itemSelected[4].value === "BLACK CHANA") {
        prices[4].innerText = 260;
    } else if (itemSelected[4].value === "SUPER CHAWAL") {
        prices[4].innerText = 350;
    } else if (itemSelected[4].value === "SELA CHAWAL") {
        prices[4].innerText = 360;
    } else if (itemSelected[4].value === "PONIA CHAWAL") {
        prices[4].innerText = 280;
    } else if (itemSelected[4].value === "TOTA CHAWAL") {
        prices[4].innerText = 130;
    }
})
itemSelected[5].addEventListener("change", () => {
    if (itemSelected[5].value === "ATTA 10KG") {
        prices[5].innerText = 1480;
    } else if (itemSelected[5].value === "ATTA 40KG") {
        prices[5].innerText = 5840;
    } else if (itemSelected[5].value === "ATTA LOOSE") {
        prices[5].innerText = 160;
    } else if (itemSelected[5].value === "SUGAR 50KG BAG") {
        prices[5].innerText = 6450;
    } else if (itemSelected[5].value === "SUGAR LOOSE") {
        prices[5].innerText = 130;
    } else if (itemSelected[5].value === "OIL 900ML POUCH") {
        prices[5].innerText = 370;
    } else if (itemSelected[5].value === "RIVAYAT OIL 1LTR POUCH") {
        prices[5].innerText = 570;
    } else if (itemSelected[5].value === "GHEE 1KG POUCH") {
        prices[5].innerText = 470;
    } else if (itemSelected[5].value === "RIVAYAT GHEE 1KG POUCH") {
        prices[5].innerText = 570;
    } else if (itemSelected[5].value === "DALL MONG") {
        prices[5].innerText = 230;
    } else if (itemSelected[5].value === "DALL MASOOR") {
        prices[5].innerText = 260;
    } else if (itemSelected[5].value === "DALL CHANA") {
        prices[5].innerText = 290;
    } else if (itemSelected[5].value === "DALL MASH") {
        prices[5].innerText = 450;
    } else if (itemSelected[5].value === "SABAT MASOOR") {
        prices[5].innerText = 240;
    } else if (itemSelected[5].value === "WHITE CHANA") {
        prices[5].innerText = 290;
    } else if (itemSelected[5].value === "BLACK CHANA") {
        prices[5].innerText = 260;
    } else if (itemSelected[5].value === "SUPER CHAWAL") {
        prices[5].innerText = 350;
    } else if (itemSelected[5].value === "SELA CHAWAL") {
        prices[5].innerText = 360;
    } else if (itemSelected[5].value === "PONIA CHAWAL") {
        prices[5].innerText = 280;
    } else if (itemSelected[5].value === "TOTA CHAWAL") {
        prices[5].innerText = 130;
    }
})
itemSelected[6].addEventListener("change", () => {
    if (itemSelected[6].value === "ATTA 10KG") {
        prices[6].innerText = 1480;
    } else if (itemSelected[6].value === "ATTA 40KG") {
        prices[6].innerText = 5840;
    } else if (itemSelected[6].value === "ATTA LOOSE") {
        prices[6].innerText = 160;
    } else if (itemSelected[6].value === "SUGAR 50KG BAG") {
        prices[6].innerText = 6450;
    } else if (itemSelected[6].value === "SUGAR LOOSE") {
        prices[6].innerText = 130;
    } else if (itemSelected[6].value === "OIL 900ML POUCH") {
        prices[6].innerText = 370;
    } else if (itemSelected[6].value === "RIVAYAT OIL 1LTR POUCH") {
        prices[6].innerText = 570;
    } else if (itemSelected[6].value === "GHEE 1KG POUCH") {
        prices[6].innerText = 470;
    } else if (itemSelected[6].value === "RIVAYAT GHEE 1KG POUCH") {
        prices[6].innerText = 570;
    } else if (itemSelected[6].value === "DALL MONG") {
        prices[6].innerText = 230;
    } else if (itemSelected[6].value === "DALL MASOOR") {
        prices[6].innerText = 260;
    } else if (itemSelected[6].value === "DALL CHANA") {
        prices[6].innerText = 290;
    } else if (itemSelected[6].value === "DALL MASH") {
        prices[6].innerText = 450;
    } else if (itemSelected[6].value === "SABAT MASOOR") {
        prices[6].innerText = 240;
    } else if (itemSelected[6].value === "WHITE CHANA") {
        prices[6].innerText = 290;
    } else if (itemSelected[6].value === "BLACK CHANA") {
        prices[6].innerText = 260;
    } else if (itemSelected[6].value === "SUPER CHAWAL") {
        prices[6].innerText = 350;
    } else if (itemSelected[6].value === "SELA CHAWAL") {
        prices[6].innerText = 360;
    } else if (itemSelected[6].value === "PONIA CHAWAL") {
        prices[6].innerText = 280;
    } else if (itemSelected[6].value === "TOTA CHAWAL") {
        prices[6].innerText = 130;
    }
})
itemSelected[7].addEventListener("change", () => {
    if (itemSelected[7].value === "ATTA 10KG") {
        prices[7].innerText = 1480;
    } else if (itemSelected[7].value === "ATTA 40KG") {
        prices[7].innerText = 5840;
    } else if (itemSelected[7].value === "ATTA LOOSE") {
        prices[7].innerText = 160;
    } else if (itemSelected[7].value === "SUGAR 50KG BAG") {
        prices[7].innerText = 6450;
    } else if (itemSelected[7].value === "SUGAR LOOSE") {
        prices[7].innerText = 130;
    } else if (itemSelected[7].value === "OIL 900ML POUCH") {
        prices[7].innerText = 370;
    } else if (itemSelected[7].value === "RIVAYAT OIL 1LTR POUCH") {
        prices[7].innerText = 570;
    } else if (itemSelected[7].value === "GHEE 1KG POUCH") {
        prices[7].innerText = 470;
    } else if (itemSelected[7].value === "RIVAYAT GHEE 1KG POUCH") {
        prices[7].innerText = 570;
    } else if (itemSelected[7].value === "DALL MONG") {
        prices[7].innerText = 230;
    } else if (itemSelected[7].value === "DALL MASOOR") {
        prices[7].innerText = 260;
    } else if (itemSelected[7].value === "DALL CHANA") {
        prices[7].innerText = 290;
    } else if (itemSelected[7].value === "DALL MASH") {
        prices[7].innerText = 450;
    } else if (itemSelected[7].value === "SABAT MASOOR") {
        prices[7].innerText = 240;
    } else if (itemSelected[7].value === "WHITE CHANA") {
        prices[7].innerText = 290;
    } else if (itemSelected[7].value === "BLACK CHANA") {
        prices[7].innerText = 260;
    } else if (itemSelected[7].value === "SUPER CHAWAL") {
        prices[7].innerText = 350;
    } else if (itemSelected[7].value === "SELA CHAWAL") {
        prices[7].innerText = 360;
    } else if (itemSelected[7].value === "PONIA CHAWAL") {
        prices[7].innerText = 280;
    } else if (itemSelected[7].value === "TOTA CHAWAL") {
        prices[7].innerText = 130;
    }
})
itemSelected[8].addEventListener("change", () => {
    if (itemSelected[8].value === "ATTA 10KG") {
        prices[8].innerText = 1480;
    } else if (itemSelected[8].value === "ATTA 40KG") {
        prices[8].innerText = 5840;
    } else if (itemSelected[8].value === "ATTA LOOSE") {
        prices[8].innerText = 160;
    } else if (itemSelected[8].value === "SUGAR 50KG BAG") {
        prices[8].innerText = 6450;
    } else if (itemSelected[8].value === "SUGAR LOOSE") {
        prices[8].innerText = 130;
    } else if (itemSelected[8].value === "OIL 900ML POUCH") {
        prices[8].innerText = 370;
    } else if (itemSelected[8].value === "RIVAYAT OIL 1LTR POUCH") {
        prices[8].innerText = 570;
    } else if (itemSelected[8].value === "GHEE 1KG POUCH") {
        prices[8].innerText = 470;
    } else if (itemSelected[8].value === "RIVAYAT GHEE 1KG POUCH") {
        prices[8].innerText = 570;
    } else if (itemSelected[8].value === "DALL MONG") {
        prices[8].innerText = 230;
    } else if (itemSelected[8].value === "DALL MASOOR") {
        prices[8].innerText = 260;
    } else if (itemSelected[8].value === "DALL CHANA") {
        prices[8].innerText = 290;
    } else if (itemSelected[8].value === "DALL MASH") {
        prices[8].innerText = 450;
    } else if (itemSelected[8].value === "SABAT MASOOR") {
        prices[8].innerText = 240;
    } else if (itemSelected[8].value === "WHITE CHANA") {
        prices[8].innerText = 290;
    } else if (itemSelected[8].value === "BLACK CHANA") {
        prices[8].innerText = 260;
    } else if (itemSelected[8].value === "SUPER CHAWAL") {
        prices[8].innerText = 350;
    } else if (itemSelected[8].value === "SELA CHAWAL") {
        prices[8].innerText = 360;
    } else if (itemSelected[8].value === "PONIA CHAWAL") {
        prices[8].innerText = 280;
    } else if (itemSelected[8].value === "TOTA CHAWAL") {
        prices[8].innerText = 130;
    }
})
itemSelected[9].addEventListener("change", () => {
    if (itemSelected[9].value === "ATTA 10KG") {
        prices[9].innerText = 1480;
    } else if (itemSelected[9].value === "ATTA 40KG") {
        prices[9].innerText = 5840;
    } else if (itemSelected[9].value === "ATTA LOOSE") {
        prices[9].innerText = 160;
    } else if (itemSelected[9].value === "SUGAR 50KG BAG") {
        prices[9].innerText = 6450;
    } else if (itemSelected[9].value === "SUGAR LOOSE") {
        prices[9].innerText = 130;
    } else if (itemSelected[9].value === "OIL 900ML POUCH") {
        prices[9].innerText = 370;
    } else if (itemSelected[9].value === "RIVAYAT OIL 1LTR POUCH") {
        prices[9].innerText = 570;
    } else if (itemSelected[9].value === "GHEE 1KG POUCH") {
        prices[9].innerText = 470;
    } else if (itemSelected[9].value === "RIVAYAT GHEE 1KG POUCH") {
        prices[9].innerText = 570;
        
    } else if (itemSelected[9].value === "DALL MONG") {
        prices[9].innerText = 230;
    } else if (itemSelected[9].value === "DALL MASOOR") {
        prices[9].innerText = 260;
    } else if (itemSelected[9].value === "DALL CHANA") {
        prices[9].innerText = 290;
    } else if (itemSelected[9].value === "DALL MASH") {
        prices[9].innerText = 450;
    } else if (itemSelected[9].value === "SABAT MASOOR") {
        prices[9].innerText = 240;
    } else if (itemSelected[9].value === "WHITE CHANA") {
        prices[9].innerText = 290;
    } else if (itemSelected[9].value === "BLACK CHANA") {
        prices[9].innerText = 260;
    } else if (itemSelected[9].value === "SUPER CHAWAL") {
        prices[9].innerText = 350;
    } else if (itemSelected[9].value === "SELA CHAWAL") {
        prices[9].innerText = 360;
    } else if (itemSelected[9].value === "PONIA CHAWAL") {
        prices[9].innerText = 280;
    } else if (itemSelected[9].value === "TOTA CHAWAL") {
        prices[9].innerText = 130;
    }
})

//                          QTY AND AMOUNT MAKING

const qtys = document.querySelectorAll("#qyu-input");
const amounts = document.querySelectorAll("#amount")

qtys[0].addEventListener("input", () => {
    amounts[0].innerText = qtys[0].value * prices[0].innerText;
})
qtys[1].addEventListener("input", () => {
    amounts[1].innerText = qtys[1].value * prices[1].innerText;
})
qtys[2].addEventListener("input", () => {
    amounts[2].innerText = qtys[2].value * prices[2].innerText;
})
qtys[3].addEventListener("input", () => {
    amounts[3].innerText = qtys[3].value * prices[3].innerText;
})
qtys[4].addEventListener("input", () => {
    amounts[4].innerText = qtys[4].value * prices[4].innerText;
})
qtys[5].addEventListener("input", () => {
    amounts[5].innerText = qtys[5].value * prices[5].innerText;
})
qtys[6].addEventListener("input", () => {
    amounts[6].innerText = qtys[6].value * prices[6].innerText;
})
qtys[7].addEventListener("input", () => {
    amounts[7].innerText = qtys[7].value * prices[7].innerText;
})
qtys[8].addEventListener("input", () => {
    amounts[8].innerText = qtys[8].value * prices[8].innerText;
})
qtys[9].addEventListener("input", () => {
    amounts[9].innerText = qtys[9].value * prices[9].innerText;
})

//                  TOTAL AMOUNT AND NET AMOUNT       
const totalAmount = document.querySelector("#total-amt");
const discount = document.querySelector("#discount")
const netAmt = document.querySelector("#net-amt");
qtys.forEach(qty => {
    qty.addEventListener("input", () => {
        totalAmount.innerText = Number(amounts[0].innerText) + Number(amounts[1].innerText) + Number(amounts[2].innerText) + Number(amounts[3].innerText) + Number(amounts[4].innerText) + Number(amounts[5].innerText) + Number(amounts[6].innerText) + Number(amounts[7].innerText) + Number(amounts[8].innerText) + Number(amounts[9].innerText)
        netAmt.innerText = `$${totalAmount.innerText}.00`
        discount.addEventListener("input", () => {
            netAmt.innerText = `$${totalAmount.innerText - discount.value}.00`
        })
    })
})
//                               RESETING  THE PAGE

const saveInvBtn = document.querySelector("#reset")
const htmlInv = document.querySelector("#inv-no")
let invCount = 0;
saveInvBtn.addEventListener("click", () => {
    amounts.forEach(now => {
        now.innerText = ""
    })
    qtys.forEach(now => {
        now.value = ""
    })
    itemSelected.forEach(now => {
        now.selectedIndex = 0;
    })
    prices.forEach(now => {
        now.innerText = ""
    })
    totalAmount.innerText = ""
    discount.value = "";
    netAmt.innerText = ""
    invCount++;
    htmlInv.innerText = `0${invCount}`
})


//                      DIFRENT DIFRENT PAGES

const home = document.querySelector("#home");
const employeesPara = document.querySelector("#employee");
const saleReportPara = document.querySelector("#sale-para");
const saleReportPage = document.querySelector(".sale-rep");
const profitPara = document.querySelector("#profit");
const profitPage = document.querySelector(".profit");
const stockPara = document.querySelector("#stock");
const stockPage = document.querySelector(".stock");
const profilePara = document.querySelector("#profile");
const profilePage = document.querySelector(".edit-profile");
const employeePage = document.querySelector(".employee")
const mainInv = document.querySelector(".uper-toflex")
const menuPara = document.querySelector("#line")
const menuPage = document.querySelector(".menu-pop")
const settingPara = document.querySelector("#setting");
const settingPage = document.querySelector(".setting")
const backPara = document.querySelector("#back")
const backPage = document.querySelector(".back-g-color")
const aboutPara = document.querySelector("#about")
const aboutPage = document.querySelector(".about-detail")
const contactPara = document.querySelector("#contact")
const contactPage = document.querySelector(".contact-us-detail")
const body = document.querySelector(".uper-toflex")
const menuDiv = document.querySelector(".menu-pop")

/*employeesPara.addEventListener("click", () => {
    mainInv.classList.add("hide3")
    employeePage.classList.remove("hide3")
})
saleReportPara.addEventListener("click", () => {
})

profitPara.addEventListener("click", () => {
    mainInv.classList.add("hide3");
    profitPage.classList.remove("hide3")
})

stockPara.addEventListener("click", () => {
    mainInv.classList.add("hide3")
    stockPage.classList.remove("hide3")
})





settingPara.addEventListener("click", () => {
    settingPage.classList.remove("hide3")
    mainInv.classList.add("hide3")
})

backPara.addEventListener("click", () => {
    backPage.classList.remove("hide3")
    mainInv.classList.add("hide3")
})

aboutPara.addEventListener("click", () => {
    mainInv.classList.add("hide3")
    aboutPage.classList.remove("hide3")
})

contactPara.addEventListener("click", () => {
    mainInv.classList.add("hide3")
    contactPage.classList.remove("hide3")
})

body.addEventListener("click", () => {
    menuPage.classList.add("hide3")
})*/

//               PROFILE SETTING

const bName = document.querySelector("#default-name");
const bNewName = document.querySelector("#buss-name")
const bAdress = document.querySelector("default-adress")
const bNewAdress = document.querySelector("#buss-adress")
const navBar = document.querySelectorAll("nav p");

navBar.forEach((p, index) => {
    p.addEventListener("click", () => {
        console.log(`paragraph ${index + 1} WAS CLICKED`);
        console.log(`contant: ${p.innerText}`);
        if (p.innerText === "HOME") {
            employeePage.classList.add("hide3")
            stockPage.classList.add("hide3")
            saleReportPage.classList.add("hide3")
            profitPage.classList.add("hide3")
            mainInv.classList.remove("hide3")
            settingPage.classList.add("hide3")
            backPage.classList.add("hide3")
            aboutPage.classList.add("hide3")
            contactPage.classList.add("hide3")
            profilePage.classList.add("hide3")
        } else if (p.innerText === "EMPLOYEE'S") {
            employeePage.classList.remove("hide3")
            stockPage.classList.add("hide3")
            saleReportPage.classList.add("hide3")
            profitPage.classList.add("hide3")
            mainInv.classList.add("hide3")
            settingPage.classList.add("hide3")
            backPage.classList.add("hide3")
            aboutPage.classList.add("hide3")
            contactPage.classList.add("hide3")
            profilePage.classList.add("hide3")
        } else if (p.innerText === "SALE REPORT") {
            employeePage.classList.add("hide3")
            stockPage.classList.add("hide3")
            saleReportPage.classList.remove("hide3")
            profitPage.classList.add("hide3")
            mainInv.classList.add("hide3")
            settingPage.classList.add("hide3")
            backPage.classList.add("hide3")
            aboutPage.classList.add("hide3")
            contactPage.classList.add("hide3")
            profilePage.classList.add("hide3")
        } else if (p.innerText === "PROFIT") {
            employeePage.classList.add("hide3")
            stockPage.classList.add("hide3")
            saleReportPage.classList.add("hide3")
            profitPage.classList.remove("hide3")
            mainInv.classList.add("hide3")
            settingPage.classList.add("hide3")
            backPage.classList.add("hide3")
            aboutPage.classList.add("hide3")
            contactPage.classList.add("hide3")
            profilePage.classList.add("hide3")
        } else if (p.innerText === "STOCK") {
            employeePage.classList.add("hide3")
            stockPage.classList.remove("hide3")
            saleReportPage.classList.add("hide3")
            profitPage.classList.add("hide3")
            mainInv.classList.add("hide3")
            settingPage.classList.add("hide3")
            backPage.classList.add("hide3")
            aboutPage.classList.add("hide3")
            contactPage.classList.add("hide3")
            profilePage.classList.add("hide3")
        }
    })
})
menuPara.addEventListener("click", () => {
    menuPage.classList.toggle("hide3")
})

settingPara.addEventListener("click", () => {
    employeePage.classList.add("hide3")
    stockPage.classList.add("hide3")
    saleReportPage.classList.add("hide3")
    profitPage.classList.add("hide3")
    mainInv.classList.add("hide3")
    backPage.classList.add("hide3")
    aboutPage.classList.add("hide3")
    contactPage.classList.add("hide3")
    settingPage.classList.remove("hide3")
    menuPage.classList.add("hide3")
    profilePage.classList.add("hide3")
})
backPara.addEventListener("click", () => {
    employeePage.classList.add("hide3")
    stockPage.classList.add("hide3")
    saleReportPage.classList.add("hide3")
    profitPage.classList.add("hide3")
    mainInv.classList.add("hide3")
    backPage.classList.remove("hide3")
    aboutPage.classList.add("hide3")
    contactPage.classList.add("hide3")
    settingPage.classList.add("hide3")
    menuPage.classList.add("hide3")
    profilePage.classList.add("hide3")
})
aboutPara.addEventListener("click", () => {
    employeePage.classList.add("hide3")
    stockPage.classList.add("hide3")
    saleReportPage.classList.add("hide3")
    profitPage.classList.add("hide3")
    mainInv.classList.add("hide3")
    backPage.classList.add("hide3")
    aboutPage.classList.remove("hide3")
    contactPage.classList.add("hide3")
    settingPage.classList.add("hide3")
    menuPage.classList.add("hide3")
    profilePage.classList.add("hide3")
})
contactPara.addEventListener("click", () => {
    employeePage.classList.add("hide3")
    stockPage.classList.add("hide3")
    saleReportPage.classList.add("hide3")
    profitPage.classList.add("hide3")
    mainInv.classList.add("hide3")
    backPage.classList.add("hide3")
    aboutPage.classList.add("hide3")
    contactPage.classList.remove("hide3")
    settingPage.classList.add("hide3")
    menuPage.classList.add("hide3")
    profilePage.classList.add("hide3")
})


const lightMode = document.querySelector("#light")
const darkMode = document.querySelector("#dark")
const realBody = document.querySelector("body")

lightMode.addEventListener("click", () => {
    lightMode.style.backgroundColor = "black"
    darkMode.style.backgroundColor = "white"
    realBody.style.backgroundColor = ""
    realBody.style.color = ""
})

darkMode.addEventListener("click", () => {
    darkMode.style.backgroundColor = "black"
    lightMode.style.backgroundColor = "white"
    realBody.style.backgroundColor = "black"
    realBody.style.color = "white"
})

profilePara.addEventListener("click", () => {
    employeePage.classList.add("hide3")
    stockPage.classList.add("hide3")
    saleReportPage.classList.add("hide3")
    profitPage.classList.add("hide3")
    mainInv.classList.add("hide3")
    backPage.classList.add("hide3")
    aboutPage.classList.add("hide3")
    contactPage.classList.add("hide3")
    settingPage.classList.add("hide3")
    menuPage.classList.add("hide3")
    profilePage.classList.remove("hide3")
})

const defaultBussName=document.querySelector("#default-name")
const defaultBusssAdr=document.querySelector("#default-adress")
const newBuss=document.querySelector("#buss-name")
const newAress=document.querySelector("#buss-adress")

newBuss.addEventListener("input" ,() => {
    defaultBussName.innerText=newBuss.value
})

newAress.addEventListener("input" , () => {
    defaultBusssAdr.innerText=newAress.value
})

