/*
    Author: Usman Ali
    Email: usmanialiq@gmail.com
    Github: www.github.com/usmanialiq
    Instagram: instagram.com/usmanicr7
*/

// Kindly cahnge it to your own API KEY as produced by Fixer.io
const API_KEY = "3a8eb4743ebd40d2dc44c5a82f35769b";

// change this set_date variable to your desired date - YYYY-MM-DD
const set_date = 'latest';
//const set_date = '2012-12-10';

fetch(`http://data.fixer.io/api/${set_date}?access_key=${API_KEY}&format=1`)
    .then(function(response) {
        return response.json();
    })
    .then(function(rates) {
        var base = JSON.stringify(rates.base);
        var date = JSON.stringify(rates.date);

        // Base Currency and Date as given by the API
        document.getElementById('base_currency').innerHTML = base;
        document.getElementById('date').innerHTML = date; 


        // North America
        document.getElementById('canada').innerHTML = '<span>Canada: ' + JSON.stringify(rates.rates.CAD) + '</span>';
        document.getElementById('usa').innerHTML = '<span>United States of America: ' + JSON.stringify(rates.rates.USD) + '</span>';
        document.getElementById('mexico').innerHTML = '<span>Mexico: ' + JSON.stringify(rates.rates.MXN) + '</span>';
        document.getElementById('bermuda').innerHTML = '<span>Bermuda: ' + JSON.stringify(rates.rates.BMD) + '</span>';


        // South America
        document.getElementById('argen').innerHTML = '<span>Argentina: ' + JSON.stringify(rates.rates.ARS) + '</span>';
        document.getElementById('boliv').innerHTML = '<span>Bolivia: ' + JSON.stringify(rates.rates.BOB) + '</span>';
        document.getElementById('brazil').innerHTML = '<span>Brazil: ' + JSON.stringify(rates.rates.BRL) + '</span>';
        document.getElementById('chile').innerHTML = '<span>Chile: ' + JSON.stringify(rates.rates.CLP) + '</span>';
        document.getElementById('colom').innerHTML = '<span>Colombia: ' + JSON.stringify(rates.rates.COP) + '</span>';
        document.getElementById('ecua').innerHTML = '<span>Ecuador: ' + JSON.stringify(rates.rates.USD) + '</span>';
        document.getElementById('guya').innerHTML = '<span>Guyana: ' + JSON.stringify(rates.rates.GYD) + '</span>';
        document.getElementById('parag').innerHTML = '<span>Paraguay: ' + JSON.stringify(rates.rates.PYG) + '</span>';
        document.getElementById('peru').innerHTML = '<span>Peru: ' + JSON.stringify(rates.rates.PEN) + '</span>';
        document.getElementById('suri').innerHTML = '<span>Suriname: ' + JSON.stringify(rates.rates.SRD) + '</span>';
        document.getElementById('urug').innerHTML = '<span>Uruguay: ' + JSON.stringify(rates.rates.UYU) + '</span>';
        document.getElementById('venez').innerHTML = '<span>Venezuela: ' + JSON.stringify(rates.rates.VEF) + '</span>';


        // Northern Europe
        document.getElementById('denmark').innerHTML = '<span>Denmark: ' + JSON.stringify(rates.rates.DKK) + '</span>';
        document.getElementById('estonia').innerHTML = '<span>Estonia: ' + JSON.stringify(rates.rates.EUR) + '</span>';
        document.getElementById('finland').innerHTML = '<span>Finland: ' + JSON.stringify(rates.rates.EUR) + '</span>';
        document.getElementById('iceland').innerHTML = '<span>Iceland: ' + JSON.stringify(rates.rates.ISK) + '</span>';
        document.getElementById('ireland').innerHTML = '<span>Ireland: ' + JSON.stringify(rates.rates.EUR) + '</span>';
        document.getElementById('latvia').innerHTML = '<span>Latvia: ' + JSON.stringify(rates.rates.LVL) + '</span>';
        document.getElementById('lithuania').innerHTML = '<span>Lithuania: ' + JSON.stringify(rates.rates.LTL) + '</span>';
        document.getElementById('norway').innerHTML = '<span>Norway: ' + JSON.stringify(rates.rates.NOK) + '</span>';
        document.getElementById('sweden').innerHTML = '<span>Sweden: ' + JSON.stringify(rates.rates.SEK) + '</span>';
        document.getElementById('britain').innerHTML = '<span>United Kingdom: ' + JSON.stringify(rates.rates.GBP) + '</span>';

        // Southern Europe
        document.getElementById('albania').innerHTML = '<span>Albania: ' + JSON.stringify(rates.rates.ALL) + '</span>';
        document.getElementById('andorra').innerHTML = '<span>Andorra: ' + JSON.stringify(rates.rates.EUR) + '</span>';
        document.getElementById('bosnia').innerHTML = '<span>Bosia and Herzegovina: ' + JSON.stringify(rates.rates.BAM) + '</span>';
        document.getElementById('croatia').innerHTML = '<span>Croatia: ' + JSON.stringify(rates.rates.HRK) + '</span>';
        document.getElementById('france').innerHTML = '<span>France: ' + JSON.stringify(rates.rates.EUR) + '</span>';
        document.getElementById('greece').innerHTML = '<span>Greece: ' + JSON.stringify(rates.rates.EUR) + '</span>';
        document.getElementById('italy').innerHTML = '<span>Italy: ' + JSON.stringify(rates.rates.EUR) + '</span>';
        document.getElementById('malta').innerHTML = '<span>Malta: ' + JSON.stringify(rates.rates.EUR) + '</span>';
        document.getElementById('montenegro').innerHTML = '<span>Montenegro: ' + JSON.stringify(rates.rates.EUR) + '</span>';
        document.getElementById('portugal').innerHTML = '<span>Portugal: ' + JSON.stringify(rates.rates.EUR) + '</span>';
        document.getElementById('macedonia').innerHTML = '<span>Republic of Macedonia: ' + JSON.stringify(rates.rates.MKD) + '</span>';
        document.getElementById('marino').innerHTML = '<span>San Marino: ' + JSON.stringify(rates.rates.EUR) + '</span>';
        document.getElementById('serbia').innerHTML = '<span>Serbia: ' + JSON.stringify(rates.rates.RSD) + '</span>';
        document.getElementById('slovenia').innerHTML = '<span>Slovenia: ' + JSON.stringify(rates.rates.EUR) + '</span>';
        document.getElementById('spain').innerHTML = '<span>Spain: ' + JSON.stringify(rates.rates.EUR) + '</span>';
        document.getElementById('vatican').innerHTML = '<span>Vatican City: ' + JSON.stringify(rates.rates.EUR) + '</span>';


        // Africa
        document.getElementById('algeria').innerHTML = '<span>Algeria: ' + JSON.stringify(rates.rates.DZD) + '</span>';
        document.getElementById('angola').innerHTML = '<span>Angola: ' + JSON.stringify(rates.rates.AOA) + '</span>';
        document.getElementById('benin').innerHTML = '<span>Benin: ' + JSON.stringify(rates.rates.XOF) + '</span>';
        document.getElementById('bostwana').innerHTML = '<span>Bostwana: ' + JSON.stringify(rates.rates.BWP) + '</span>';
        document.getElementById('faso').innerHTML = '<span>Burkina Faso: ' + JSON.stringify(rates.rates.XAF) + '</span>';
        document.getElementById('burundi').innerHTML = '<span>Burundi: ' + JSON.stringify(rates.rates.BIF) + '</span>';
        document.getElementById('cabo').innerHTML = '<span>Cabo Verde: ' + JSON.stringify(rates.rates.CVE) + '</span>';
        document.getElementById('cameron').innerHTML = '<span>Cameroon: ' + JSON.stringify(rates.rates.XAF) + '</span>';
        document.getElementById('car').innerHTML = '<span>Central African Republic: ' + JSON.stringify(rates.rates.XAF) + '</span>';
        document.getElementById('chad').innerHTML = '<span>Chad: ' + JSON.stringify(rates.rates.XAF) + '</span>';
        document.getElementById('comoros').innerHTML = '<span>Comoros: ' + JSON.stringify(rates.rates.KMF) + '</span>';
        document.getElementById('congo').innerHTML = '<span>Republic of Congo: ' + JSON.stringify(rates.rates.CDF) + '</span>';
        document.getElementById('cote').innerHTML = '<span>Cote dÍvore: ' + JSON.stringify(rates.rates.XAF) + '</span>';
        document.getElementById('djibouti').innerHTML = '<span>Djibouti: ' + JSON.stringify(rates.rates.DJF) + '</span>';
        document.getElementById('equit').innerHTML = '<span>Equatorial Guinea: ' + JSON.stringify(rates.rates.XAF) + '</span>';
        document.getElementById('eritrea').innerHTML = '<span>Eritrea: ' + JSON.stringify(rates.rates.ERN) + '</span>';
        document.getElementById('eswatini').innerHTML = '<span>Eswatini: ' + JSON.stringify(rates.rates.SZL) + '</span>';
        document.getElementById('ethiopia').innerHTML = '<span>Ethiopia: ' + JSON.stringify(rates.rates.ETB) + '</span>';
        document.getElementById('gabon').innerHTML = '<span>Gabon: ' + JSON.stringify(rates.rates.XAF) + '</span>';
        document.getElementById('gambia').innerHTML = '<span>Gambia: ' + JSON.stringify(rates.rates.GMD) + '</span>';
        document.getElementById('ghana').innerHTML = '<span>Ghana: ' + JSON.stringify(rates.rates.GHS) + '</span>';
        document.getElementById('guinea').innerHTML = '<span>Guinea: ' + JSON.stringify(rates.rates.GNF) + '</span>';
        document.getElementById('bissau').innerHTML = '<span>Guinea-Bissau: ' + JSON.stringify(rates.rates.XAF) + '</span>';
        document.getElementById('kenya').innerHTML = '<span>Kenya: ' + JSON.stringify(rates.rates.KES) + '</span>';
        document.getElementById('lesotho').innerHTML = '<span>Lesotho: ' + JSON.stringify(rates.rates.LSL) + '</span>';
        document.getElementById('lineria').innerHTML = '<span>Liberia: ' + JSON.stringify(rates.rates.LRD) + '</span>';
        document.getElementById('libya').innerHTML = '<span>Libya: ' + JSON.stringify(rates.rates.LYD) + '</span>';
        document.getElementById('madagascar').innerHTML = '<span>Madagascar: ' + JSON.stringify(rates.rates.MGA) + '</span>';
        document.getElementById('malawi').innerHTML = '<span>Malawi: ' + JSON.stringify(rates.rates.MWK) + '</span>';
        document.getElementById('mali').innerHTML = '<span>Mali: ' + JSON.stringify(rates.rates.XAF) + '</span>';
        document.getElementById('mauritania').innerHTML = '<span>Mauritania: ' + JSON.stringify(rates.rates.MRO) + '</span>';
        document.getElementById('mauritius').innerHTML = '<span>Mauritius: ' + JSON.stringify(rates.rates.MUR) + '</span>';
        document.getElementById('morocco').innerHTML = '<span>Morocco: ' + JSON.stringify(rates.rates.MAD) + '</span>';
        document.getElementById('mozambique').innerHTML = '<span>Mozambique: ' + JSON.stringify(rates.rates.MZN) + '</span>';
        document.getElementById('namibia').innerHTML = '<span>Namibia: ' + JSON.stringify(rates.rates.NAD) + '</span>';
        document.getElementById('niger').innerHTML = '<span>Niger: ' + JSON.stringify(rates.rates.XAF) + '</span>';
        document.getElementById('nigeria').innerHTML = '<span>Nigeria: ' + JSON.stringify(rates.rates.NGN) + '</span>';
        document.getElementById('rwanda').innerHTML = '<span>Rwanda: ' + JSON.stringify(rates.rates.RWF) + '</span>';
        document.getElementById('sao').innerHTML = '<span>Sao Tome and Principe: ' + JSON.stringify(rates.rates.STD) + '</span>';
        document.getElementById('senegal').innerHTML = '<span>Senegal: ' + JSON.stringify(rates.rates.XAF) + '</span>';
        document.getElementById('seychelles').innerHTML = '<span>Seychelles: ' + JSON.stringify(rates.rates.SCR) + '</span>';
        document.getElementById('sierra').innerHTML = '<span>Sierra Leone: ' + JSON.stringify(rates.rates.SLL) + '</span>';
        document.getElementById('somalia').innerHTML = '<span>Somalia: ' + JSON.stringify(rates.rates.SOS) + '</span>';
        document.getElementById('safrica').innerHTML = '<span>South Africa: ' + JSON.stringify(rates.rates.ZAR) + '</span>';
        document.getElementById('ssudan').innerHTML = '<span>South Sudan: ' + JSON.stringify(rates.rates.USD) + '</span>';
        document.getElementById('tanzania').innerHTML = '<span>Tanzania: ' + JSON.stringify(rates.rates.TZS) + '</span>';
        document.getElementById('togo').innerHTML = '<span>Togo: ' + JSON.stringify(rates.rates.XAF) + '</span>';
        document.getElementById('tunisia').innerHTML = '<span>Tunisia: ' + JSON.stringify(rates.rates.TND) + '</span>';
        document.getElementById('uganda').innerHTML = '<span>Uganada: ' + JSON.stringify(rates.rates.UGX) + '</span>';
        document.getElementById('zambia').innerHTML = '<span>Zambia: ' + JSON.stringify(rates.rates.ZMW) + '</span>';
        document.getElementById('zimbabwe').innerHTML = '<span>Zimbabwe: ' + JSON.stringify(rates.rates.USD) + '</span>';
        

        // Middle-East Asia
        document.getElementById('bahrain').innerHTML = '<span>Bahrain: ' + JSON.stringify(rates.rates.BHD) + '</span>';
        document.getElementById('cyprus').innerHTML = '<span>Cyprus: ' + JSON.stringify(rates.rates.EUR) + '</span>';
        document.getElementById('egypt').innerHTML = '<span>Egypt: ' + JSON.stringify(rates.rates.EGP) + '</span>';
        document.getElementById('iran').innerHTML = '<span>Iran: ' + JSON.stringify(rates.rates.IRR) + '</span>';
        document.getElementById('israel').innerHTML = '<span>Israel: ' + JSON.stringify(rates.rates.ILS) + '</span>';
        document.getElementById('jordan').innerHTML = '<span>Jordan: ' + JSON.stringify(rates.rates.JOD) + '</span>';
        document.getElementById('kuwait').innerHTML = '<span>Kuwait: ' + JSON.stringify(rates.rates.KWD) + '</span>';
        document.getElementById('lebanon').innerHTML = '<span>Lebanon: ' + JSON.stringify(rates.rates.LBP) + '</span>';
        document.getElementById('oman').innerHTML = '<span>Oman: ' + JSON.stringify(rates.rates.OMR) + '</span>';
        document.getElementById('qatar').innerHTML = '<span>Qatar: ' + JSON.stringify(rates.rates.QAR) + '</span>';
        document.getElementById('sarabia').innerHTML = '<span>Saudia Arabia: ' + JSON.stringify(rates.rates.SAR) + '</span>';
        document.getElementById('turkey').innerHTML = '<span>Turkey: ' + JSON.stringify(rates.rates.TRY) + '</span>';
        document.getElementById('uae').innerHTML = '<span>United Arab Emirates: ' + JSON.stringify(rates.rates.AED) + '</span>';
        document.getElementById('syria').innerHTML = '<span>Syria: ' + JSON.stringify(rates.rates.SYP) + '</span>';

        
        // South Asia
        document.getElementById('pk').innerHTML = '<span>Pakistan: ' + JSON.stringify(rates.rates.PKR) + '</span>';
        document.getElementById('inr').innerHTML = '<span>India: ' + JSON.stringify(rates.rates.INR) + '</span>';
        document.getElementById('srilan').innerHTML = '<span>Sri Lanka: ' + JSON.stringify(rates.rates.LKR) + '</span>';
        document.getElementById('nepal').innerHTML = '<span>Nepal: ' + JSON.stringify(rates.rates.NPR) + '</span>';
        document.getElementById('bhutan').innerHTML = '<span>Bhutan: ' + JSON.stringify(rates.rates.BTN) + '</span>';
        document.getElementById('bangla').innerHTML = '<span>Bangladesh: ' + JSON.stringify(rates.rates.BDT) + '</span>';
        
        
        // East Asia
        document.getElementById('china').innerHTML = '<span>China: ' + JSON.stringify(rates.rates.CNY) + '</span>';
        document.getElementById('hong').innerHTML = '<span>Hong Kong: ' + JSON.stringify(rates.rates.HKD) + '</span>';
        document.getElementById('jpn').innerHTML = '<span>Japan: ' + JSON.stringify(rates.rates.JPY) + '</span>';
        document.getElementById('macau').innerHTML = '<span>Macau: ' + JSON.stringify(rates.rates.MOP) + '</span>';
        document.getElementById('mongol').innerHTML = '<span>Mongolia: ' + JSON.stringify(rates.rates.MNT) + '</span>';
        document.getElementById('nkorea').innerHTML = '<span>North Korea: ' + JSON.stringify(rates.rates.KPW) + '</span>';
        document.getElementById('skorea').innerHTML = '<span>South Korea: ' + JSON.stringify(rates.rates.KRW) + '</span>';
        document.getElementById('taiwan').innerHTML = '<span>Taiwan: ' + JSON.stringify(rates.rates.TWD) + '</span>';


        // Central Asia
        document.getElementById('afg').innerHTML = '<span>Afghanistan: ' + JSON.stringify(rates.rates.AFN) + '</span>';
        document.getElementById('kazak').innerHTML = '<span>Kazakhistan: ' + JSON.stringify(rates.rates.KZT) + '</span>';
        document.getElementById('kyr').innerHTML = '<span>Kyrgyzstan: ' + JSON.stringify(rates.rates.KGS) + '</span>';
        document.getElementById('tajik').innerHTML = '<span>Tajikistan: ' + JSON.stringify(rates.rates.TJS) + '</span>';
        document.getElementById('turkmen').innerHTML = '<span>Turkmenistan: ' + JSON.stringify(rates.rates.TMT) + '</span>';       
        document.getElementById('uzbek').innerHTML = '<span>Uzbekistan: ' + JSON.stringify(rates.rates.UZS) + '</span>';
        document.getElementById('russia').innerHTML = '<span>Russia: ' + JSON.stringify(rates.rates.RUB) + '</span>';       

        
        // Austraila and Oceania
        document.getElementById('aust').innerHTML = '<span>Austrailia: ' + JSON.stringify(rates.rates.AUD) + '</span>';
        document.getElementById('nzl').innerHTML = '<span>New Zealand: ' + JSON.stringify(rates.rates.NZD) + '</span>';
        document.getElementById('fiji').innerHTML = '<span>Fiji: ' + JSON.stringify(rates.rates.FJD) + '</span>';
        document.getElementById('pjk').innerHTML = '<span>Papua New Guinea: ' + JSON.stringify(rates.rates.PGK) + '</span>';
        document.getElementById('palau').innerHTML = '<span>Palau: ' + JSON.stringify(rates.rates.USD) + '</span>';
        document.getElementById('kirib').innerHTML = '<span>Kiribati: ' + JSON.stringify(rates.rates.AUD) + '</span>';
        document.getElementById('marshal').innerHTML = '<span>Marshall Island: ' + JSON.stringify(rates.rates.USD) + '</span>';
        document.getElementById('micron').innerHTML = '<span>Micronesia: ' + JSON.stringify(rates.rates.USD) + '</span>';
        document.getElementById('nauru').innerHTML = '<span>Nauru: ' + JSON.stringify(rates.rates.AUD) + '</span>';
        document.getElementById('samoa').innerHTML = '<span>Samoa: ' + JSON.stringify(rates.rates.WST) + '</span>';
        document.getElementById('solomon').innerHTML = '<span>Soloman Islands: ' + JSON.stringify(rates.rates.SBD) + '</span>';
        document.getElementById('tonga').innerHTML = '<span>Tonga: ' + JSON.stringify(rates.rates.TOP) + '</span>';
        document.getElementById('tuvalu').innerHTML = '<span>Tuvalu: ' + JSON.stringify(rates.rates.AUD) + '</span>';
        document.getElementById('vanuatu').innerHTML = '<span>Vanuatu: ' + JSON.stringify(rates.rates.VUV) + '</span>';
        

        // South-East Asia
        document.getElementById('malay').innerHTML = '<span>Malaysia: ' + JSON.stringify(rates.rates.MAD) + '</span>';
        document.getElementById('indo').innerHTML = '<span>Indonesia: ' + JSON.stringify(rates.rates.IDR) + '</span>';
        document.getElementById('thai').innerHTML = '<span>Thailand: ' + JSON.stringify(rates.rates.THB) + '</span>';
        document.getElementById('singa').innerHTML = '<span>Singapore: ' + JSON.stringify(rates.rates.SGD) + '</span>';
        document.getElementById('phillip').innerHTML = '<span>Phillipines: ' + JSON.stringify(rates.rates.PHP) + '</span>';
        document.getElementById('viet').innerHTML = '<span>Vietnam: ' + JSON.stringify(rates.rates.VND) + '</span>';
        document.getElementById('brunei').innerHTML = '<span>Brunei: ' + JSON.stringify(rates.rates.BND) + '</span>';
        document.getElementById('combodia').innerHTML = '<span>Combodia: ' + JSON.stringify(rates.rates.KHR) + '</span>';
        document.getElementById('laos').innerHTML = '<span>Laos: ' + JSON.stringify(rates.rates.LAK) + '</span>';
        document.getElementById('myanmar').innerHTML = '<span>Myanmar: ' + JSON.stringify(rates.rates.MMK) + '</span>';
        document.getElementById('timor').innerHTML = '<span>Timor-Leste: ' + JSON.stringify(rates.rates.USD) + '</span>';



    });


/*
    Author: Usman Ali
    Email: usmanialiq@gmail.com
    Github: www.github.com/usmanialiq
    Instagram: instagram.com/usmanicr7
*/