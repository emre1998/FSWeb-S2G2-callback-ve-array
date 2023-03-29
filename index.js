import { fifaData } from './fifa.js';


/* Görev 1: 
	Verilen datayı parçalayarak aşağıdaki verileri (console.log-ing) elde ederek pratik yapın. 
	
	💡 İPUCU: Öncelikle datayı filtrelemek isteyebilirsiniz */

const filteredyear1930 = fifaData.filter(fifaData =>fifaData.Year ===1930 );
const filteredyear1930copy = [...filteredyear1930];

const filteredyear1934 = fifaData.filter(fifaData =>fifaData.Year ===1934 );
const filteredyear1934copy = [...filteredyear1934];

const filteredyear1938 = fifaData.filter(fifaData =>fifaData.Year ===1938 );
const filteredyear1980copy = [...filteredyear1938];

const filteredyear1950 = fifaData.filter(fifaData =>fifaData.Year ===1950 );
const filteredyear1950copy = [...filteredyear1930];

const filteredyear1954 = fifaData.filter(fifaData =>fifaData.Year ===1954 );
const filteredyear1954copy = [...filteredyear1954];

const filteredyear1958 = fifaData.filter(fifaData =>fifaData.Year ===1958 );
const filteredyear1958copy = [...filteredyear1958];

const filteredyear1962 = fifaData.filter(fifaData =>fifaData.Year ===1962 );
const filteredyear1962copy = [...filteredyear1962];

const filteredyear1966 = fifaData.filter(fifaData =>fifaData.Year ===1966 );
const filteredyear1966copy = [...filteredyear1966];

const filteredyear1970 = fifaData.filter(fifaData =>fifaData.Year ===1970 );
const filteredyear1970copy = [...filteredyear1970];

const filteredyear1974 = fifaData.filter(fifaData =>fifaData.Year ===1974 );
const filteredyear1974copy = [...filteredyear1974];

const filteredyear1978 = fifaData.filter(fifaData =>fifaData.Year ===1978 );
const filteredyear1978copy = [...filteredyear1978];

const filteredyear1982 = fifaData.filter(fifaData =>fifaData.Year ===1982 );
const filteredyear1982copy = [...filteredyear1982];

const filteredyear1986 = fifaData.filter(fifaData =>fifaData.Year ===1986 );
const filteredyear1986copy = [...filteredyear1986];

const filteredyear1990 = fifaData.filter(fifaData =>fifaData.Year ===1990 );
const filteredyear1990copy = [...filteredyear1990];

const filteredyear1994 = fifaData.filter(fifaData =>fifaData.Year ===1994 );
const filteredyear1994copy = [...filteredyear1994];

const filteredyear1998 = fifaData.filter(fifaData =>fifaData.Year ===1998 );
const filteredyear1998copy = [...filteredyear1998];

const filteredyear2002 = fifaData.filter(fifaData =>fifaData.Year ===2002 );
const filteredyear2002copy = [...filteredyear2002];

const filteredyear2006 = fifaData.filter(fifaData =>fifaData.Year ===2006 );
const filteredyear2006copy = [...filteredyear2006];

const filteredyear2010 = fifaData.filter(fifaData =>fifaData.Year ===2010 );
const filteredyear2010copy = [...filteredyear2010];

const filteredyear2014 = fifaData.filter(fifaData =>fifaData.Year ===2014 );
const filteredyear2014copy = [...filteredyear2014];

//(a) 2014 Dünya kupası Finali Evsahibi takım ismi (dizide "Home Team Name" anahtarı)

//(b) 2014 Dünya kupası Finali Deplasman takım ismi  (dizide "Away Team Name" anahtarı)

//(c) 2014 Dünya kupası finali Ev sahibi takım golleri (dizide "Home Team Goals" anahtarı)

//(d)2014 Dünya kupası finali Deplasman takım golleri  (dizide "Away Team Goals" anahtarı)

//(e) 2014 Dünya kupası finali kazananı*/


/*  Görev 2: 
	Finaller adlı fonksiyonu kullanarak aşağıdakileri uygulayın:
	1. Bir dizi(array) olan Fifa datasını fonksiyonun birinci parametresi olarak alacak
	2. Sadece final maçlarını içeren nesnenin(object) datalarını filtreleyerek, bir dizi olarak döndürecek(return)
	
	💡 İPUCU - verilen data içindeki nesnelerin(objects) "Stage" anahtarına bakmalısınız
*/

function Finaller(data) {
	return data.filter(match => match.Stage === "Final");
  }

  const finals = Finaller(fifaData);
console.log(finals); 

/*  Görev 3: 
	Bir higher-order fonksiyonu olan Yillar isimli fonksiyona aşağıdakileri uygulayın: 
	1. fifaData dizisini(array) fonksiyonun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Finaller data setindeki tüm yılları içeren "years" adındaki diziyi(array) döndürecek
	*/

function Yillar(data, callback) {
	const finals = callback(data);
	const years = finals.map(final => final.Year);
	return years;
  }

  const years = Yillar(fifaData, Finaller);
console.log(years); 

/*  Görev 4: 
	Bir higher-order fonksiyonunu olan Kazananlar isimli fonksiyona aşağıdakileri uygulayın:  
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Her final maçının kazananını (evsahibi ya da deplasman) belirleyecek
	💡 İPUCU: Beraberlikler(ties) için şimdilik endişelenmeyin (Detaylı bilgi için README dosyasına bakabilirsiniz.)
	4. Tüm kazanan ülkelerin isimlerini içeren `kazananlar` adında bir dizi(array) döndürecek(return)  */ 

	
	function Kazananlar(Data, callback) {
		const kazananlar = [];
		fifaData.forEach((final) => {
		  const evSahibi = final["Home Team Name"];
		  const deplasman = final["Away Tean Name"];
		  const evSahibiGol = final["Home Team Goals"];
		  const deplasmanGol = final["Away Team Goals"];
		  if (evSahibiGol > deplasmanGol) {
			kazananlar.push(evSahibi);
		  } else if (deplasmanGol > evSahibiGol) {
			kazananlar.push(deplasman);
		  }
		});
		 return kazananlar;
	  }
       const kazanantakimlar =Kazananlar(fifaData,Finaller);
	   console.log(kazanantakimlar);


	
	/*  Görev 5: 
	Bir higher-order fonksiyonu olan YillaraGoreKazananlar isimli fonksiyona aşağıdakileri uygulayın:
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Görev 3'de yazdığınız Yillar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun üçüncü parametresi olarak alacak
	4. Görev 4'de yazdığınız Kazananlar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun dördüncü parametresi olarak alacak
	5. Her yıl için "{yıl} yılında, {ülke} dünya kupasını kazandı!" cümlesini(string) içeren bir diziyi(array) döndürecek
	
	💡 İPUCU: her cümlenin adım 4'te belirtilen cümleyle birebir aynı olması gerekmektedir.
*/
function YillaraGoreKazananlar(data,Finallercallback,Yillarcallback,Kazananlarcallback)
{
const finalslist = Finallercallback(data);
console.log(finalslist.lenght);
const yearslist = Yillarcallback(finalslist,Finallercallback);
console.log(yearslist.lenght);
const winnerslist = Kazananlarcallback(finalslist,Finallercallback);
console.log(winnerslist.lenght);

const result = yearslist.map(years,index);
return `${years} yılında, ${winnerslist[index]} dünya kupasını kazandı!`;
return result;

};


const yilindaKazananlarArray = YillaraGoreKazananlar(fifaData,Finaller,Yillar,Kazananlar);
console.log("g5",yilindaKazananlarArray);
  


/*  Görev 6: 
	Bir higher order fonksiyonu olan `OrtalamaGolSayisi` isimli fonksiyona aşağıdakileri uygulayın: 
	1. Görev 2'de yazdığınız `Finaller` fonksiyonunu birinci parametre olarak alacak; 'fifaData' dizisini argüman olarak eklediğinizden emin olun
	
	💡 İPUCU: Çağırma örneği: `OrtalamaGolSayisi(Finaller(fifaData));`
	
	2. Her maç için Ortalama toplam evsahibi gol sayısı ve toplam deplasman gol sayısını hesaplayacak (her maçta atılan toplam gol sayısı)
	
	3. Sonucun 2. ondalığını yuvarlayıp, bulunan değeri döndürecek(return)
	
	💡 İPUCU: .reduce, .toFixed (dizilim(syntax) için MDN'ye bakın) kullan, ve bunu 2 adımda yapın) 
	
*/

  
  

/// EKSTRA ÇALIŞMALAR ///

/*  BONUS 1:  
	`UlkelerinKazanmaSayilari` isminde bir fonksiyon oluşturun, parametre olarak `data` ve `takım kısaltmalarını` alacak ve hangi ülkenin kaç dünya kupası olduğunu döndürecek
	
	İpucu: "takım kısaltmaları" (team initials) için datada araştırma yapın!
İpucu: `.reduce` Kullanın*/

function UlkelerinKazanmaSayilari(/* kodlar buraya */) {
	
    /* kodlar buraya */
	
}



/*  BONUS 2:  
EnCokGolAtan() isminde bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupası finallerinde en çok gol atan takımı döndürsün */

function EnCokGolAtan(/* kodlar buraya */) {
	
    /* kodlar buraya */
	
}


/*  BONUS 3: 
EnKotuDefans() adında bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupasında finallerinde en çok golü yiyen takımı döndürsün*/

function EnKotuDefans(/* kodlar buraya */) {
	
    /* kodlar buraya */
	
}


/* Hala vaktiniz varsa, README dosyasında listelenen hedeflerden istediğinizi aşağıdaki boşluğa yazabilirsiniz. */


/* Bu satırın aşağısındaki kodları lütfen değiştirmeyin */
function sa(){
    console.log('Kodlar çalışıyor');
    return 'as';
}
sa();
export default {
    sa,
    Finaller,
    Yillar,
    Kazananlar,
    YillaraGoreKazananlar,
    OrtalamaGolSayisi
}
