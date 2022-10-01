 /* move(17,6) // dosyayı klasöre taşıyacak
  copy(18,7) // kopyasını oluşturacak
  remove(17) // dosyayı silecek
  removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
  parentFolderOf(17) // ==> 5 */
const folders = [
    {
      id: 5,
      name: 'Klasör 1',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 18, name: 'manzara.jpg'},
      ],
    },
    {
      id: 6,
      name: 'Klasör 2',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 22, name: 'dosya.xls' },
      ],
    },
    {
      id: 7,
      name: 'Klasör 3',
    },
  ]

  //------------ Move Fonksiyonu --------------------
  //Klasörün içine girdikten sonra aranılan id ile uyumlu ise temp olarak tanımlanan değişkene atıyoruz.Daha sonra taşımak istediğimiz ana dizini bulup elde ettiğimiz değişkeni oraya atıyoruz.Aynı zamanda folders klasöründeki a olarak tanımladığımız diğer değişken haricindeki verileri de filterlayarak eski yerinden kaldırıyoruz.
  function move(a,b) {
    let temp;
    folders.map((folder) => {
      folder.files?.map((file) => {
        if (file.id === a) {
          temp = file;
        }
        folder.files = folder.files.filter((x) => x.id !== a);
      });
    });
    folders.map((folder) => {
      if (folder.id === b) {
        folder.files.push(temp);
      }
    });
    folders.map((folder) => {
      console.log(folder);
    });
  }

  //---------- Copy Fonksiyonu -----------------
  //Kopyalanacak dosyayı klasörün içerisine girip id eşleştirmesi sonucunda bulup geçici bir değişkene atıyoruz.
  //Ardından yeni düzendeki folders dosyamızın kopyalanacak dosyanın uygun id'si altına dosyamızı pushluyoruz.
  function copy(a, b) {
    let data;
    folders.map((folder) => {
      folder.files?.map((file) => {
        if (file.id === a) {
          data = file;
        }
      });
    });
    folders.map((folder) => {
      if (folder.id === b) {
        folder.files.push(data);
      }
    });
    folders.map((folder) => {
      console.log(folder);
    });
  }



  

  //------------ Remove Fonksiyonu--------------
  //Öncelikle folders klasörünün files dosyasına erişiyoruz.Eğer files dosyası varsa silinecek dosyanın id'si de aranan id ile uyumlu ise bunu folders dosyasından siliyoruz. 

function remove(el) {
  folders.map((folder)=>{
    folder.files?.map((file)=>{
      if(file.id===el){
        folder.files=folder.files.filter((x)=>x.id!==el);
      }
    });
    console.log(folder);
  })
}
remove(17)
  /* ----- Remove fonskiyonu için 2. yöntem ----------

  const filterDeep = (pred) => (xs) =>
  xs .flatMap (x => pred (x)
    ? [{... x, children: filterDeep (pred) (x .children || [])}] 
    : []
  )
  
const remove = (id) =>  
  filterDeep (x => x.id !== id)
  console.log(remove(17)(folders));*/

//----------- Dosyayı Silme İşlemi --------------------
//Yine id kontrolü ile silinecek klasörü buluyoruz.Bu id'nin altındaki tüm dosyalar artık silinecektir.
  function removeFolder(el) {
    folders.map((folder) => {
      if (folder.id === el) {
        folder = folders.filter((x) => x.id !== el);
        console.log("silinecek_Dosya", folder);
      }
    });
  }


//------------ Parent Dosyayı Bulma --------------
//Klasörün içerisindeki dosya dizini aranan id ile uyumluluk sağlıyorsa aradığımız parentın bir üyesi demektir.
function parentFolderOf(el) {
  folders.map((folder) => {
    folder.files?.map((file) => {
      if (file.id === el) {
        console.log(folder.id);
      }
    });
  });
}

move(17,6) // dosyayı klasöre taşıyacak
remove(17) // dosyayı silecek
removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
 parentFolderOf(17)



 /* !!!!!!!!!!! id bulmada sıkıntısı var anlamadım */