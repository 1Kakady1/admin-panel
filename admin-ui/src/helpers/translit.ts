/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-mixed-operators */
export type langType = "ru" | "ua"

const langMap = (lang:langType = "ru") =>{

    switch(lang){
        case "ru":
            return new Map([
                ['а', 'a'], ['б', 'b'], ['в', 'v'], ['г', 'g'], ['д', 'd'], ['е', 'e'],
                ['є', 'e'], ['ё', 'e'], ['ж', 'j'], ['з', 'z'], ['и', 'i'], ['ї', 'yi'], ['й', 'i'],
                ['к', 'k'], ['л', 'l'], ['м', 'm'], ['н', 'n'], ['о', 'o'], ['п', 'p'], ['р', 'r'],
                ['с', 's'], ['т', 't'], ['у', 'u'], ['ф', 'f'], ['х', 'h'], ['ц', 'c'], ['ч', 'ch'],
                ['ш', 'sh'], ['щ', 'shch'], ['ы', 'y'], ['э', 'e'], ['ю', 'u'], ['я', 'ya'],
            ]);
        
    }
}

export const  translit = (str:string,lang:langType="ru") => {

	const langReturn = langMap(lang);

	str = str.replace(/[ъь]+/g, '');
	return Array.from(str)
		.reduce((s, l) =>
			s + ( 
                langReturn?.get(l)
				  || langReturn?.get(l.toLowerCase()) === undefined && l
				  || langReturn?.get(l.toLowerCase())?.toUpperCase()
			  )
			, '');
}