const addresses = [
    "https://www.themarmarahotels.com/tr/taksim/iletisim",
    "https://www.themarmarahotels.com/tr/antalya/iletisim",
    "https://www.themarmarahotels.com/tr/pera/iletisim",
    "https://www.themarmarahotels.com/tr/suadiye/iletisim",
    "https://www.themarmarahotels.com/tr/bodrum/iletisim"
    

    

];

const address_1 = addresses[Math.floor(Math.random() * addresses.length)]

window.location.replace(address_1);
