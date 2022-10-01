    Array.prototype.includesCi=function(val){
        const result=array.findIndex(item=>val.toUpperCase()===item.toUpperCase());
        if(result!==-1){
            return true;
        }
        return false;
    }
    const array = ["Patika","219","Akbank","React","Bootcamp","CEyDA"]
    console.log(array.includesCi("patika")===true ? "Beklendiği gibi" : "Beklendiği gibi değil")
    console.log(array.includesCi("kırmızı")===false ? "Beklendiği gibi" : "Beklendiği gibi değil")
    console.log(array.includesCi("ceyda")===true ? "İşTe Bu!" : "Beklendiği gibi değil")

 /*Harf duyarlılığını kaldırmak için aradığımız arraydeki değerleri ve aradığımız değerlerin hepsini büyük harfe çeviriyorum.
    toLowerCase() fonksiyonu da kullanılabilirdi.*/
    //this ile güncellemesi yapılacak.