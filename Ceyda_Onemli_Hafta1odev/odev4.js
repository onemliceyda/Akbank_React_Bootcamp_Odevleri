const info= {
    "cols": [
      "Name Surname",
      "Company",
      "Email",
      "Date",
      "Country",
      "City"
    ],
    "data": [
      [
        "Hyacinth Vincent",
        "Duis Corporation",
        "iaculis.enim@magnaCrasconvallis.ca",
        "28/06/2022",
        "Eritrea",
        "Lyubertsy"
      ],
      [
        "Brenden Martinez",
        "Volutpat Nunc Associates",
        "iaculis@estMauris.org",
        "24/03/2021",
        "British Indian Ocean Territory",
        "Colwood"
      ]
    ]
  }

 /*let result =  Object.assign.apply({}, info.cols.map( (v, i) => ( {[v]: info.data[i],} ) ) );
console.log(result) */

/*const c=Object.fromEntries(info.cols.map((v,i)=>[v,[info.data]]));*/
let arrObj=[];
info.data.map((element)=>{
  let item =Object.fromEntries(
    info.cols.map((el,index)=>[el,element[index]])
  );
  arrObj.push(item);
})
console.log(arrObj);

//elde edeceğimiz değerleri tutmak için yeni bir array oluşturuyoruz. 
//Daha sonra data objemizde tüm değerler üzerinde gezinip her bir satırın cols'daki datalar ile eşleşmesini sağlıyoruz.
//elde ettiğimiz değerleri de oluşturmuş olduğumuz yeni boş arrayimizin içine yolluyoruz.